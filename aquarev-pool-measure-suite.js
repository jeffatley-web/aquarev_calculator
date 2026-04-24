(() => {
'use strict';

// ─── Constants ───────────────────────────────────────────────
const ESRI_TMPL = 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}';
const ESRI_ATTR = 'Imagery © Esri, Maxar, Earthstar Geographics';
const TILE_PX = 256;
const MIN_SQM = 6;       // ~65 sq ft: smallest plausible pool
const MAX_SQM = 3000;    // ~32k sq ft: reject ocean
const SQFT_PER_SQM = 10.7639;
// Mirrored from AquaRev_ROI_Webflow_Embed_v3.html so handoff keys match exactly.
const PIPES = [
  { k:'pipe_2in',  sz:'2"',  flow:'Up to ~40K gal' },
  { k:'pipe_3in',  sz:'3"',  flow:'Up to ~80K gal' },
  { k:'pipe_4in',  sz:'4"',  flow:'Up to ~150K gal' },
  { k:'pipe_6in',  sz:'6"',  flow:'Up to ~400K gal' },
  { k:'pipe_8in',  sz:'8"',  flow:'Up to ~900K gal' },
  { k:'pipe_10in', sz:'10"', flow:'Large systems' },
];
const ROI_INBOX_KEY = 'ar2:pool_inbox';      // calculator "Load Pools" reads from this

// ─── State ───────────────────────────────────────────────────
const S = {
  propertyName: '',
  center: [-68.4468585, 18.7125364],  // JOIA Bávaro default
  zoom: 18,
  pools: [],                  // [{id, name, type, polygon, sq_m, depth_ft, notes}]
  boundary: null,             // GeoJSON polygon or null
  selectedPoolId: null,
  nextId: 1,
  magicWand: false,
  mergeSelection: new Set(),  // pool ids selected for merge
  history: [],                // undo stack (max 30 entries)
  pendingPoolId: null,        // pool currently in the below-map review card
  mergeMode: false,           // map-click merge mode (click 2 polygons → merge)
  mergeModePicks: [],         // pool ids picked in merge mode
  nextPoolNumber: 1,          // monotonic — assigned on first registration
  markers: new Map(),         // poolId → MapLibre Marker
  propertyCenter: null,       // [lon, lat] — set on geocode / first registration
  propertyZoom: 18,           // zoom used when Centre button fires
  propertyMarker: null,       // MapLibre Marker that shows when zoomed out
};
const PROPERTY_FLAG_MAX_ZOOM = 17;   // show the big property flag below this zoom
const MAX_HISTORY = 30;

// ─── Small DOM utils ─────────────────────────────────────────
const $ = (id) => document.getElementById(id);
const fmt = (n, d=0) => (n==null || isNaN(n)) ? '—' : n.toLocaleString('en-US',{maximumFractionDigits:d,minimumFractionDigits:d});
const setStatus = (text, state='ready') => {
  const el = $('ap-status');
  el.className = 'ap-status ' + state;
  $('ap-status-text').textContent = text;
};
let toastTimer;
const WATER_DROP_SVG = `<svg class="drop" viewBox="0 0 24 24" aria-hidden="true"><defs><linearGradient id="ap-drop-g" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#48cae4"/><stop offset="100%" stop-color="#0077b6"/></linearGradient></defs><path fill="url(#ap-drop-g)" d="M12 2c-4 6-7 10-7 14a7 7 0 0 0 14 0c0-4-3-8-7-14z"/><path fill="#ffffff" fill-opacity=".35" d="M9 13c0-2 1.2-4 3-6-.3 4-2 5-3 6z"/></svg>`;
const WATER_DROP_BIG = `<svg viewBox="0 0 24 24" aria-hidden="true"><defs><linearGradient id="ap-drop-gb" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#48cae4"/><stop offset="100%" stop-color="#0077b6"/></linearGradient></defs><path fill="url(#ap-drop-gb)" d="M12 2c-4 6-7 10-7 14a7 7 0 0 0 14 0c0-4-3-8-7-14z"/><path fill="#ffffff" fill-opacity=".38" d="M9 13c0-2 1.2-4 3-6-.3 4-2 5-3 6z"/></svg>`;

// Promise-based in-app confirm replacing window.confirm() so the icon matches brand.
function appConfirm({ title = 'Are you sure?', body = '', okLabel = 'Confirm', cancelLabel = 'Cancel', danger = false } = {}) {
  return new Promise(resolve => {
    $('ap-confirm-icon').innerHTML = WATER_DROP_BIG;
    $('ap-confirm-title').textContent = title;
    $('ap-confirm-body').textContent = body || '';
    const ok = $('ap-confirm-ok'), cancel = $('ap-confirm-cancel');
    ok.textContent = okLabel;
    cancel.textContent = cancelLabel;
    ok.classList.toggle('danger', !!danger);
    const el = $('ap-confirm');
    el.classList.add('show');
    el.setAttribute('aria-hidden', 'false');
    const finish = (result) => {
      el.classList.remove('show');
      el.setAttribute('aria-hidden', 'true');
      el.removeEventListener('click', onClick);
      document.removeEventListener('keydown', onKey, true);
      ok.classList.remove('danger');
      resolve(result);
    };
    const onClick = (ev) => {
      const hit = ev.target.closest('[data-confirm-result]');
      if (!hit) return;
      ev.stopPropagation();
      finish(hit.dataset.confirmResult === 'true');
    };
    const onKey = (e) => {
      if (e.key === 'Escape') { e.preventDefault(); e.stopPropagation(); finish(false); }
      else if (e.key === 'Enter') { e.preventDefault(); e.stopPropagation(); finish(true); }
    };
    el.addEventListener('click', onClick);
    document.addEventListener('keydown', onKey, true);
    setTimeout(() => ok.focus(), 40);
  });
}
const toast = (msg, kind='') => {
  const el = $('ap-toast');
  el.className = 'ap-toast show ' + kind;
  el.innerHTML = WATER_DROP_SVG + '<span>' + msg.replace(/&/g,'&amp;').replace(/</g,'&lt;') + '</span>';
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.className = 'ap-toast ' + kind, 2800);
};
const hint = (html) => {
  const el = $('ap-hint');
  if (!html) { el.className = 'ap-map-hint'; return; }
  el.innerHTML = html;
  el.className = 'ap-map-hint show';
};

// ─── Map ─────────────────────────────────────────────────────
const map = new maplibregl.Map({
  container: 'ap-map',
  style: {
    version: 8,
    sources: {
      // Source maxzoom matches ESRI's native cap (tiles don't exist past 19).
      // Map-level maxZoom is higher so MapLibre *overzooms* by upscaling the 19 tiles,
      // instead of requesting missing 20+ tiles (which would return 404 and blank).
      esri: { type: 'raster', tiles: [ESRI_TMPL], tileSize: TILE_PX, attribution: ESRI_ATTR, maxzoom: 19 }
    },
    layers: [{
      id: 'esri', type: 'raster', source: 'esri',
      paint: {
        // Tuned for PDF-bound photo captures: sharper water/deck/roof edges,
        // vivid pool blues, lifted shadows, tamed blown highlights on white concrete.
        'raster-contrast':   0.28,
        'raster-saturation': 0.22,
        'raster-brightness-min': 0.06,
        'raster-brightness-max': 0.96,
        'raster-resampling': 'linear',
      }
    }]
  },
  center: S.center, zoom: S.zoom, maxZoom: 22, hash: false,
  preserveDrawingBuffer: true,
  pixelRatio: Math.min(2, window.devicePixelRatio || 1),   // retina when available
});
map.addControl(new maplibregl.NavigationControl({ showCompass:false }), 'top-right');
map.addControl(new maplibregl.ScaleControl({ unit: 'imperial' }), 'bottom-left');

const draw = new MapboxDraw({
  displayControlsDefault: false,
  controls: {},
  styles: mapboxDrawStyles(),
});
map.addControl(draw);

map.on('draw.create', onDrawChange);
map.on('draw.update', onDrawChange);
map.on('draw.delete', onDrawChange);

// Handles draw-source events. Creation is OWNED by explicit callers
// (onDrawPool / magic wand / auto-detect / merge / undo) — this handler never
// creates new S.pools entries on draw.create, otherwise every draw.add() call
// in the app would produce a phantom duplicate because draw.add fires create.
function onDrawChange(e) {
  if (!e.features) return;
  if (e.type === 'draw.delete') {
    for (const f of e.features) {
      if (f.properties?.role === 'boundary') S.boundary = null;
      const p = S.pools.find(x => x.drawId === f.id);
      if (p) removePoolMarker(p.id);
      S.pools = S.pools.filter(p => p.drawId !== f.id);
    }
    renderCatalog();
    return;
  }
  // draw.create / draw.update — only mutate what we already know.
  for (const f of e.features) {
    const role = f.properties?.role;
    if (role === 'boundary') {
      S.boundary = f;
    } else {
      const existing = S.pools.find(p => p.drawId === f.id);
      if (existing) {
        existing.polygon = f;
        existing.sq_m = geoAreaSqMeters(f.geometry);
        ensurePoolMarker(existing);    // follow the polygon with the flag
        // JS state is source of truth. Re-assert the draw-feature props after any edit
        // so if mapbox-gl-draw strips custom properties mid-transition, the paint style
        // and the "Registered" badge stay consistent.
        try {
          draw.setFeatureProperty(f.id, 'role', 'pool');
          draw.setFeatureProperty(f.id, 'registered', !!existing.registered);
        } catch(e){}
      }
    }
  }
  renderCatalog();
}

// Global reconciler — walks S.pools and re-asserts the map feature props from JS state.
// Call after any flow that might have strayed from the invariant (direct_select → simple_select
// transitions, mode changes, etc.) to guarantee the catalog and the map paint agree.
function reassertPoolFlags() {
  for (const p of S.pools) {
    try {
      draw.setFeatureProperty(p.drawId, 'role', 'pool');
      draw.setFeatureProperty(p.drawId, 'registered', !!p.registered);
    } catch(e){}
  }
}

// ─── Geocoding ───────────────────────────────────────────────
async function nominatimSearch(q) {
  const url = 'https://nominatim.openstreetmap.org/search?' + new URLSearchParams({ q, format:'json', limit:'1' });
  const r = await fetch(url, { headers:{ 'Accept':'application/json' }});
  if (!r.ok) throw new Error('Geocoding failed: ' + r.status);
  const hits = await r.json();
  return hits[0] || null;
}

async function geocode(q) {
  // Plus Code path — Nominatim can't resolve these, so use Open Location Code.
  // Accepts: "87G8PQXV+J5" (full), "PH72+8JR Higuey, DR" (short + locality).
  const OLC = (typeof window !== 'undefined' && window.OpenLocationCode) ? new window.OpenLocationCode() : null;
  if (OLC) {
    const token = q.split(/\s+/)[0].toUpperCase();
    if (OLC.isValid(token)) {
      let fullCode = token;
      let displayName = token;
      if (OLC.isShort(token)) {
        const locality = q.slice(token.length).trim().replace(/^[,\s]+/, '');
        if (!locality) throw new Error('Short Plus Code needs a city — e.g. "PH72+8JR Higuey, DR"');
        const ref = await nominatimSearch(locality);
        if (!ref) throw new Error('Could not find "' + locality + '" to anchor the Plus Code');
        fullCode = OLC.recoverNearest(token, parseFloat(ref.lat), parseFloat(ref.lon));
        displayName = ref.display_name;
      }
      const area = OLC.decode(fullCode);
      return { lat: area.latitudeCenter, lon: area.longitudeCenter, name: displayName };
    }
  }
  // Address / hotel name path
  const hit = await nominatimSearch(q);
  if (!hit) throw new Error('No results for "' + q + '"');
  return { lat: parseFloat(hit.lat), lon: parseFloat(hit.lon), name: hit.display_name };
}

async function onLocate() {
  // Prefer address/Plus Code (precise) then fall back to the Name field so reps can search with just a hotel name.
  const q = ($('ap-query').value.trim()) || ($('ap-name').value.trim());
  if (!q) { toast('Enter a property name, address, or Plus Code', 'err'); return; }
  setStatus('Geocoding…', 'busy');
  try {
    const loc = await geocode(q);
    S.center = [loc.lon, loc.lat];
    map.flyTo({ center: S.center, zoom: 17, duration: 1200 });
    if (!$('ap-name').value) $('ap-name').value = loc.name.split(',')[0];
    setPropertyCenter([loc.lon, loc.lat], 17);
    setStatus('Located', 'ready');
  } catch (err) {
    setStatus('Error', 'ready');
    toast(err.message, 'err');
  }
}

// ─── Name autocomplete (Google Places with Photon fallback) ──
// Primary source: Google Places Autocomplete — absolute hotel/resort/POI accuracy.
// Fallback: Photon (free OSM) if Google key absent or API fails for any reason.
// Key is injected by the Webflow embed as `window.AQUAREV_GOOGLE_KEY` so it can
// be rotated without redeploying the JS file.
let _nameSearchTimer = null;
let _nameSearchAbort = null;
let _nameSuggestions = [];
let _nameActiveIdx = -1;

let _googleMapsPromise = null;
function loadGoogleMaps() {
  const key = (typeof window !== 'undefined' && window.AQUAREV_GOOGLE_KEY) || null;
  if (!key) return Promise.reject(new Error('no google key'));
  if (_googleMapsPromise) return _googleMapsPromise;
  _googleMapsPromise = new Promise((resolve, reject) => {
    if (window.google && window.google.maps && window.google.maps.places) { resolve(); return; }
    window.__ar2GmapsReady = () => resolve();
    const s = document.createElement('script');
    s.src = 'https://maps.googleapis.com/maps/api/js?key=' + encodeURIComponent(key) + '&libraries=places&callback=__ar2GmapsReady&loading=async';
    s.async = true;
    s.onerror = () => { _googleMapsPromise = null; reject(new Error('google maps load failed')); };
    document.head.appendChild(s);
  });
  return _googleMapsPromise;
}

let _gpSession = null;
function _ensureGpSession() {
  if (!_gpSession && window.google && window.google.maps && window.google.maps.places) {
    _gpSession = new google.maps.places.AutocompleteSessionToken();
  }
  return _gpSession;
}
function _resetGpSession() { _gpSession = null; }

async function googleSearch(q) {
  try { await Promise.race([loadGoogleMaps(), new Promise((_,rej)=>setTimeout(()=>rej(new Error('gmaps timeout')),4000))]); }
  catch (e) { return null; }
  const token = _ensureGpSession();
  const svc = new google.maps.places.AutocompleteService();
  const preds = await Promise.race([
    new Promise((resolve) => {
      svc.getPlacePredictions({
        input: q,
        sessionToken: token,
        types: ['establishment']
      }, (predictions, status) => {
        const PS = google.maps.places.PlacesServiceStatus;
        if (status === PS.ZERO_RESULTS) return resolve([]);
        if (status !== PS.OK) return resolve(null);
        resolve(predictions || []);
      });
    }),
    // Safety timeout — if Google's callback never fires (e.g., referrer rejection hangs the SDK), fall through to Photon.
    new Promise((resolve) => setTimeout(() => resolve(null), 3500))
  ]);
  if (preds === null) return null;
  return preds.map(p => {
    const t = p.types || [];
    const typeLabel = t.includes('lodging') ? 'hotel'
                    : t.includes('restaurant') ? 'restaurant'
                    : t.includes('tourist_attraction') ? 'poi'
                    : t.includes('locality') ? 'city'
                    : '';
    return {
      _source: 'google',
      placeId: p.place_id,
      name: (p.structured_formatting && p.structured_formatting.main_text) || p.description,
      typeLabel,
      locality: (p.structured_formatting && p.structured_formatting.secondary_text) || '',
      address: p.description,
      lat: null, lon: null     // resolved later via getDetails (same session)
    };
  });
}

async function googleGetPlaceDetails(placeId) {
  await loadGoogleMaps();
  const token = _ensureGpSession();
  const svc = new google.maps.places.PlacesService(document.createElement('div'));
  const result = await new Promise((resolve, reject) => {
    svc.getDetails({
      placeId,
      sessionToken: token,
      fields: ['geometry.location', 'geometry.viewport', 'formatted_address', 'name']
    }, (place, status) => {
      if (status !== google.maps.places.PlacesServiceStatus.OK) return reject(new Error('details ' + status));
      resolve(place);
    });
  });
  _resetGpSession();
  const vp = result.geometry.viewport;
  return {
    name: result.name,
    address: result.formatted_address,
    lat: result.geometry.location.lat(),
    lon: result.geometry.location.lng(),
    // Google viewport (SW/NE corners) bounds the full property — used for fitBounds
    // so sprawling resorts zoom out and compact hotels zoom in, always within Esri tile coverage.
    viewport: vp ? {
      sw: [vp.getSouthWest().lng(), vp.getSouthWest().lat()],
      ne: [vp.getNorthEast().lng(), vp.getNorthEast().lat()]
    } : null
  };
}

async function photonSearch(q, signal) {
  // Rank & filter: OSM hospitality tags (hotel, resort, motel, guest_house) score highest,
  // then leisure/resort, then generic tourism POIs. Restaurants / offices / bare "place"
  // entries are dropped — they confuse reps searching for hotel chains.
  const HOTEL_VALUES = new Set(['hotel', 'resort', 'motel', 'guest_house', 'hostel', 'apartment']);
  const accept = (p) => {
    if (!p) return false;
    if (p.osm_key === 'tourism') return true;
    if (p.osm_key === 'leisure' && p.osm_value === 'resort') return true;
    if (p.osm_key === 'building' && HOTEL_VALUES.has(p.osm_value)) return true;
    return false;
  };
  const rankOf = (p) => {
    if (p.osm_key === 'tourism' && HOTEL_VALUES.has(p.osm_value)) return 0;
    if (p.osm_key === 'leisure' && p.osm_value === 'resort') return 1;
    if (p.osm_key === 'tourism') return 2;
    if (p.osm_key === 'building' && HOTEL_VALUES.has(p.osm_value)) return 3;
    return 9;
  };

  const url = 'https://photon.komoot.io/api/?' + new URLSearchParams({ q, limit: '15' });
  const r = await fetch(url, { signal });
  if (!r.ok) return [];
  const data = await r.json();
  const hits = (data.features || []).filter(f => accept(f.properties)).map(f => {
    const p = f.properties || {};
    const locality = [p.city, p.state, p.country].filter(Boolean).join(', ');
    return {
      name: p.name || p.street || p.housenumber || '',
      osmKey: p.osm_key || '',
      osmValue: p.osm_value || '',
      typeLabel: (p.osm_key === 'tourism' && HOTEL_VALUES.has(p.osm_value)) ? (p.osm_value === 'resort' ? 'resort' : 'hotel')
               : (p.osm_key === 'leisure' && p.osm_value === 'resort') ? 'resort'
               : (p.osm_key === 'tourism') ? (p.osm_value || 'tourism')
               : (p.osm_key || ''),
      locality,
      address: [p.housenumber, p.street, p.city, p.state, p.country].filter(Boolean).join(', '),
      lat: f.geometry.coordinates[1],
      lon: f.geometry.coordinates[0],
      _rank: rankOf(p)
    };
  }).filter(r => r.name);

  hits.sort((a, b) => a._rank - b._rank);

  // Dedupe: OSM often has N identical-looking entries for chain hotels in the same city
  // (one per building/block). Collapse them to one result per name+city pair.
  const seen = new Set();
  const deduped = [];
  for (const h of hits) {
    const key = (h.name + '|' + (h.locality || '')).toLowerCase();
    if (seen.has(key)) continue;
    seen.add(key);
    deduped.push(h);
  }
  return deduped.slice(0, 8);
}

function _renderNameDropdown() {
  const el = $('ap-name-dropdown');
  if (!el) return;
  if (!_nameSuggestions.length) {
    el.innerHTML = '<div class="ap-name-empty">No hotels match. Try adding a city: "Iberostar Punta Cana".</div>';
    el.classList.add('show');
    return;
  }
  el.innerHTML = _nameSuggestions.map((r, i) => {
    const safe = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
    return `<div class="ap-name-sug${i === _nameActiveIdx ? ' active' : ''}" data-idx="${i}" role="option">`
      + `<div class="ap-name-sug-label">${r.typeLabel ? `<span class="ap-name-sug-type">${safe(r.typeLabel)}</span>` : ''}${safe(r.name)}</div>`
      + `<div class="ap-name-sug-meta">${safe(r.locality || r.address)}</div>`
      + `</div>`;
  }).join('');
  el.classList.add('show');
}

function _hideNameDropdown() {
  const el = $('ap-name-dropdown');
  if (el) el.classList.remove('show');
  _nameActiveIdx = -1;
}

async function _applyNameSuggestion(r) {
  // Google predictions don't include coords — resolve via getDetails (same session).
  let viewport = null;
  if (r._source === 'google' && (r.lat == null || r.lon == null)) {
    setStatus('Resolving…', 'busy');
    try {
      const det = await googleGetPlaceDetails(r.placeId);
      r.lat = det.lat; r.lon = det.lon;
      r.address = det.address || r.address;
      if (det.name) r.name = det.name;
      viewport = det.viewport;
    } catch (e) {
      setStatus('Error', 'ready');
      toast('Could not load details — pick another result', 'err');
      return;
    }
  }
  $('ap-name').value = r.name;
  if (!$('ap-query').value.trim()) $('ap-query').value = r.address || r.locality || '';
  _hideNameDropdown();
  S.center = [r.lon, r.lat];
  if (viewport) {
    // fitBounds — Google-supplied viewport sizes to the property; Esri tile coverage stays safe.
    // maxZoom 19 gets as close as Esri tile coverage allows. padding keeps the pin + a bit of context visible.
    map.fitBounds([viewport.sw, viewport.ne], { padding: 60, duration: 1200, maxZoom: 19 });
  } else {
    map.flyTo({ center: S.center, zoom: 17, duration: 1200 });
  }
  setPropertyCenter([r.lon, r.lat], 17);
  setStatus('Located', 'ready');
}

function onNameInput(ev) {
  const q = ev.target.value.trim();
  clearTimeout(_nameSearchTimer);
  if (_nameSearchAbort) { _nameSearchAbort.abort(); _nameSearchAbort = null; }
  if (q.length < 3) { _hideNameDropdown(); _nameSuggestions = []; return; }
  _nameSearchTimer = setTimeout(async () => {
    _nameSearchAbort = new AbortController();
    try {
      let results = await googleSearch(q);
      if (results === null) {
        // Google unavailable (no key / quota / network) — fall back to Photon.
        results = await photonSearch(q, _nameSearchAbort.signal);
      }
      _nameSuggestions = results || [];
      _nameActiveIdx = -1;
      _renderNameDropdown();
    } catch (e) {
      if (e.name !== 'AbortError') { /* silent */ }
    }
  }, 280);
}

function onNameKeydown(ev) {
  const dd = $('ap-name-dropdown');
  const open = dd && dd.classList.contains('show') && _nameSuggestions.length;
  if (ev.key === 'Escape') { _hideNameDropdown(); return; }
  if (ev.key === 'Enter') {
    if (open) {
      ev.preventDefault();
      const idx = _nameActiveIdx >= 0 ? _nameActiveIdx : 0;
      _applyNameSuggestion(_nameSuggestions[idx]);
    } else {
      onLocate();
    }
    return;
  }
  if (!open) return;
  if (ev.key === 'ArrowDown') { ev.preventDefault(); _nameActiveIdx = Math.min(_nameActiveIdx + 1, _nameSuggestions.length - 1); _renderNameDropdown(); }
  else if (ev.key === 'ArrowUp') { ev.preventDefault(); _nameActiveIdx = Math.max(_nameActiveIdx - 1, 0); _renderNameDropdown(); }
}

function wireNameAutocomplete() {
  const input = $('ap-name');
  const dd = $('ap-name-dropdown');
  if (!input || !dd) return;
  input.addEventListener('input', onNameInput);
  input.addEventListener('keydown', onNameKeydown);
  input.addEventListener('focus', () => { if (_nameSuggestions.length) _renderNameDropdown(); });
  dd.addEventListener('mousedown', (ev) => {
    const sug = ev.target.closest('.ap-name-sug');
    if (!sug) return;
    ev.preventDefault();
    const idx = parseInt(sug.dataset.idx, 10);
    if (!isNaN(idx) && _nameSuggestions[idx]) _applyNameSuggestion(_nameSuggestions[idx]);
  });
  document.addEventListener('click', (ev) => {
    if (!ev.target.closest('#ap-name, #ap-name-dropdown')) _hideNameDropdown();
  });
}

// ─── Draw modes ──────────────────────────────────────────────
function onDrawBoundary() {
  if (S.boundary) {
    draw.delete(S.boundary.id);
    S.boundary = null;
  }
  draw.changeMode('draw_polygon');
  hint('Click to add boundary vertices. <strong>Double-click</strong> to finish. Keep detection inside your property.');
  const handler = (e) => {
    if (e.features?.[0]) {
      pushHistory('set boundary');
      draw.setFeatureProperty(e.features[0].id, 'role', 'boundary');
      const f = draw.get(e.features[0].id);
      S.boundary = f;
      map.off('draw.create', handler);
      hint('');
      toast('Boundary set', 'ok');
    }
  };
  map.once('draw.create', handler);
}

function onClearBoundary() {
  if (S.boundary) {
    pushHistory('clear boundary');
    draw.delete(S.boundary.id);
    S.boundary = null;
    toast('Boundary cleared');
  }
}

function onDrawPool() {
  draw.changeMode('draw_polygon');
  hint('Click to trace a pool, <strong>double-click</strong> to finish.');
  const handler = (e) => {
    if (e.features?.[0]) {
      pushHistory('draw pool');
      draw.setFeatureProperty(e.features[0].id, 'role', 'pool');
      const f = draw.get(e.features[0].id);
      const pool = addPool({ drawId: f.id, polygon: f, fromUser: true });
      renderCatalog();
      enterReviewFor(pool);
      map.off('draw.create', handler);
      hint('');
    }
  };
  map.once('draw.create', handler);
}

// ─── Geometry helpers (Web Mercator) ─────────────────────────
const R_EARTH = 6378137;
function lonToX(lon) { return R_EARTH * lon * Math.PI / 180; }
function latToY(lat) { return R_EARTH * Math.log(Math.tan(Math.PI/4 + lat*Math.PI/360)); }
function xToLon(x) { return (x / R_EARTH) * 180 / Math.PI; }
function yToLat(y) { return (2*Math.atan(Math.exp(y/R_EARTH)) - Math.PI/2) * 180/Math.PI; }

// Shoelace on projected coords — outer ring adds, inner rings (holes) subtract.
function geoAreaSqMeters(geom) {
  if (!geom || geom.type !== 'Polygon') return 0;
  let total = 0;
  for (let r = 0; r < geom.coordinates.length; r++) {
    const ring = geom.coordinates[r];
    let a = 0;
    for (let i=0, j=ring.length-1; i<ring.length; j=i++) {
      const xi = lonToX(ring[i][0]), yi = latToY(ring[i][1]);
      const xj = lonToX(ring[j][0]), yj = latToY(ring[j][1]);
      a += (xj + xi) * (yj - yi);
    }
    total += (r === 0 ? 1 : -1) * Math.abs(a) / 2;
  }
  return Math.max(0, total);
}

// Point-in-polygon for planar coords
function pointInPoly(px, py, polyPlanar) {
  let inside = false;
  for (let i=0, j=polyPlanar.length-1; i<polyPlanar.length; j=i++) {
    const xi = polyPlanar[i][0], yi = polyPlanar[i][1];
    const xj = polyPlanar[j][0], yj = polyPlanar[j][1];
    const hit = ((yi>py)!==(yj>py)) && (px < (xj-xi)*(py-yi)/(yj-yi)+xi);
    if (hit) inside = !inside;
  }
  return inside;
}

// ─── Detection ───────────────────────────────────────────────
async function fetchTile(z, x, y) {
  const url = ESRI_TMPL.replace('{z}',z).replace('{x}',x).replace('{y}',y);
  const img = new Image();
  img.crossOrigin = 'anonymous';
  await new Promise((res, rej) => {
    img.onload = res; img.onerror = () => rej(new Error('tile fetch failed'));
    img.src = url;
  });
  return img;
}

function rgbToHsv(r, g, b) {
  const max = Math.max(r,g,b), min = Math.min(r,g,b), d = max-min;
  let h = 0;
  if (d !== 0) {
    if (max===r) h = ((g-b)/d) % 6;
    else if (max===g) h = (b-r)/d + 2;
    else h = (r-g)/d + 4;
    h *= 60; if (h<0) h+=360;
  }
  return { h, s: max===0 ? 0 : d/max, v: max };
}

function deg2tile(lat, lon, z) {
  const n = 2 ** z;
  const x = Math.floor((lon + 180) / 360 * n);
  const latR = lat * Math.PI / 180;
  const y = Math.floor((1 - Math.asinh(Math.tan(latR)) / Math.PI) / 2 * n);
  return { x, y };
}
function tile2deg(x, y, z) {
  const n = 2 ** z;
  const lon = x / n * 360 - 180;
  const lat = Math.atan(Math.sinh(Math.PI * (1 - 2*y/n))) * 180 / Math.PI;
  return { lat, lon };
}

async function onDetect() {
  const bounds = map.getBounds();
  const zoom = Math.min(19, Math.max(17, Math.round(map.getZoom())));
  const nw = { lat: bounds.getNorth(), lon: bounds.getWest() };
  const se = { lat: bounds.getSouth(), lon: bounds.getEast() };
  const tNW = deg2tile(nw.lat, nw.lon, zoom);
  const tSE = deg2tile(se.lat, se.lon, zoom);
  const cols = tSE.x - tNW.x + 1;
  const rows = tSE.y - tNW.y + 1;
  if (cols * rows > 144) {
    toast('Zoom in further (too many tiles)', 'err'); return;
  }

  setStatus(`Fetching ${cols*rows} tiles…`, 'busy');
  const canvas = document.createElement('canvas');
  canvas.width = cols * TILE_PX;
  canvas.height = rows * TILE_PX;
  const ctx = canvas.getContext('2d');

  try {
    for (let iy=0; iy<rows; iy++) {
      for (let ix=0; ix<cols; ix++) {
        const img = await fetchTile(zoom, tNW.x+ix, tNW.y+iy);
        ctx.drawImage(img, ix*TILE_PX, iy*TILE_PX);
      }
    }
  } catch (err) {
    setStatus('Error', 'ready');
    toast('Tile fetch failed (CORS?)', 'err');
    return;
  }

  setStatus('Analyzing imagery…', 'busy');
  await new Promise(r => setTimeout(r, 40));

  const W = canvas.width, H = canvas.height;
  const imgData = ctx.getImageData(0,0,W,H);
  const data = imgData.data;
  const N = W * H;

  // Luminance + integral images for O(1) local variance lookups.
  // Pool water is smooth; tiled/shingled roofs are textured even when bluish.
  const lum = new Uint8Array(N);
  for (let i=0, p=0; i<data.length; i+=4, p++) {
    lum[p] = (data[i]*0.299 + data[i+1]*0.587 + data[i+2]*0.114) | 0;
  }
  const IW = W + 1;
  const II  = new Float64Array((H+1) * IW);
  const II2 = new Float64Array((H+1) * IW);
  for (let y=1; y<=H; y++) {
    let rs = 0, rs2 = 0;
    for (let x=1; x<=W; x++) {
      const v = lum[(y-1)*W + (x-1)];
      rs += v; rs2 += v*v;
      II [y*IW + x] = II [(y-1)*IW + x] + rs;
      II2[y*IW + x] = II2[(y-1)*IW + x] + rs2;
    }
  }
  const WIN = 2;                 // 5×5 window
  const SMOOTH_MAX_STD = 14;     // reject pixels where local stddev exceeds this
  function localStd(x, y) {
    const x0 = Math.max(0, x-WIN), x1 = Math.min(W, x+WIN+1);
    const y0 = Math.max(0, y-WIN), y1 = Math.min(H, y+WIN+1);
    const n  = (x1-x0) * (y1-y0);
    const s  = II [y1*IW + x1] - II [y0*IW + x1] - II [y1*IW + x0] + II [y0*IW + x0];
    const s2 = II2[y1*IW + x1] - II2[y0*IW + x1] - II2[y1*IW + x0] + II2[y0*IW + x0];
    const mean = s / n;
    return Math.sqrt(Math.max(0, s2/n - mean*mean));
  }

  // HSV thresholds — wide enough for light aqua → deep navy, tight enough to
  // reject gray-blue rooftops. Saturation floor (0.20) is the main roof filter.
  const mask = new Uint8Array(N);
  for (let i=0, p=0; i<data.length; i+=4, p++) {
    const r = data[i]/255, g = data[i+1]/255, b = data[i+2]/255;
    const max = Math.max(r,g,b), min = Math.min(r,g,b), d = max-min;
    let h=0;
    if (d !== 0) {
      if (max===r) h = ((g-b)/d) % 6;
      else if (max===g) h = (b-r)/d + 2;
      else h = (r-g)/d + 4;
      h *= 60; if (h<0) h+=360;
    }
    const sat = max===0 ? 0 : d/max;
    const val = max;
    if (h < 150 || h > 230) continue;
    if (sat < 0.20 || val < 0.35) continue;
    // Smoothness gate: water is uniform, roofs are textured.
    const x = p % W, y = (p - x) / W;
    if (localStd(x, y) > SMOOTH_MAX_STD) continue;
    mask[p] = 1;
  }

  // Morphology: open (kill speckle) → close (bridges small gaps inside a pool).
  const morphed = morphClose(morphOpen(mask, W, H), W, H, 3);
  // Cluster mask: dilate further so nearby fragments get the same label, but keep
  // the original `morphed` mask for contour tracing so polygon edges stay tight.
  // Each iteration adds ~1 px on every side; 4 iterations ≈ 1.2 m merge radius.
  let dilated = morphed;
  for (let k = 0; k < 4; k++) dilated = morphDilate(dilated, W, H);

  // Property boundary filter (if present) — convert boundary polygon to planar coords
  let boundaryPlanar = null;
  if (S.boundary) {
    boundaryPlanar = S.boundary.geometry.coordinates[0].map(([lo,la]) => [lonToX(lo), latToY(la)]);
  }

  // Tile grid → planar bounds
  const tl = tile2deg(tNW.x, tNW.y, zoom);
  const br = tile2deg(tNW.x+cols, tNW.y+rows, zoom);
  const projLeft = lonToX(tl.lon), projTop = latToY(tl.lat);
  const projRight = lonToX(br.lon), projBot = latToY(br.lat);
  const mpx = (projRight - projLeft) / W;   // m/px (x)
  const mpy = (projTop - projBot) / H;      // m/px (y)

  // Connected components run on the DILATED mask so fragments cluster together.
  // Then we restrict `labels` back to the original `morphed` pixels so contour
  // tracing yields tight boundaries (no inflation from the dilation).
  const labels = new Int32Array(W*H);
  const polys = [];
  let label = 0;
  const stack = new Int32Array(W*H);
  const minPx = MIN_SQM / (mpx * mpy);
  const maxPx = MAX_SQM / (mpx * mpy);
  for (let y=0; y<H; y++) {
    for (let x=0; x<W; x++) {
      const idx = y*W + x;
      if (!dilated[idx] || labels[idx]) continue;
      label++;
      let sp = 0; stack[sp++] = idx;
      labels[idx] = label;
      let area = 0, minX=x, maxX=x, minY=y, maxY=y;
      while (sp > 0) {
        const cur = stack[--sp];
        const cx = cur % W, cy = (cur - cx)/W;
        if (morphed[cur]) {
          area++;
          if (cx<minX) minX=cx; if (cx>maxX) maxX=cx;
          if (cy<minY) minY=cy; if (cy>maxY) maxY=cy;
        }
        const neigh = [cur-1, cur+1, cur-W, cur+W];
        const valid = [cx>0, cx<W-1, cy>0, cy<H-1];
        for (let k=0; k<4; k++) {
          if (!valid[k]) continue;
          const n = neigh[k];
          if (dilated[n] && !labels[n]) { labels[n] = label; stack[sp++] = n; }
        }
      }
      // `area` counts only original (non-dilated) water pixels in this cluster.
      if (area < minPx || area > maxPx) continue;
      if (boundaryPlanar) {
        const cxPix = (minX+maxX)/2, cyPix = (minY+maxY)/2;
        const px = projLeft + cxPix * mpx;
        const py = projTop - cyPix * mpy;
        if (!pointInPoly(px, py, boundaryPlanar)) continue;
      }
      polys.push({ label, area, bbox:[minX,minY,maxX,maxY] });
    }
  }

  // Build a refined label map that exists only where the tight (morphed) mask is set.
  // Contour tracing uses this so polygon edges follow the actual water, not the
  // dilation halo that glued the clusters together.
  const traceLabels = new Int32Array(W*H);
  for (let i = 0; i < W*H; i++) if (morphed[i]) traceLabels[i] = labels[i];

  let addedCount = 0;
  const prepared = [];
  for (const p of polys) {
    const ring = traceContour(traceLabels, W, H, p.label, p.bbox);
    if (!ring || ring.length < 4) continue;
    const simplified = simplifyRDP(ring, 1.2);
    const geoRing = simplified.map(([px, py]) => {
      const X = projLeft + px * mpx;
      const Y = projTop - py * mpy;
      return [xToLon(X), yToLat(Y)];
    });
    if (geoRing.length && (geoRing[0][0] !== geoRing[geoRing.length-1][0] || geoRing[0][1] !== geoRing[geoRing.length-1][1])) {
      geoRing.push(geoRing[0]);
    }
    prepared.push({ type:'Feature', properties:{ role:'pool' }, geometry:{ type:'Polygon', coordinates:[geoRing] }});
  }
  if (prepared.length) pushHistory(`auto-detect (${prepared.length})`);
  for (const feat of prepared) {
    const [id] = draw.add(feat);
    draw.setFeatureProperty(id, 'role', 'pool');
    draw.setFeatureProperty(id, 'registered', true);
    const stored = draw.get(id);
    const p = addPool({ drawId: id, polygon: stored, fromDetect: true });
    p.number = S.nextPoolNumber++;
    ensurePoolMarker(p);
    addedCount++;
  }

  renderCatalog();
  setStatus(`Detected ${addedCount}`, 'ready');
  toast(`Found ${addedCount} water ${addedCount===1?'body':'bodies'}`, addedCount ? 'ok':'err');
}

// ─── Magic Wand: click-to-trace one pool at a time ──────────
function onMagicWandToggle() {
  S.magicWand = !S.magicWand;
  document.getElementById('ap2').classList.toggle('wand', S.magicWand);
  const btn = document.getElementById('ap-btn-wand');
  btn.classList.toggle('wand-active', S.magicWand);
  btn.textContent = S.magicWand ? 'Magic Wand · ACTIVE' : 'Magic Wand';
  if (S.magicWand) {
    hint('<strong>Magic wand on.</strong> Click a pool on the map. Tolerances adapt to the clicked color — it handles bridges, steps and shade variation.');
  } else {
    hint('');
  }
}

let _wandInFlight = false;
async function magicWandAtLngLat(lngLat) {
  if (_wandInFlight) return;      // ignore re-entrant clicks while a trace is running
  _wandInFlight = true;
  try { await _magicWand(lngLat); } finally { _wandInFlight = false; }
}
async function _magicWand(lngLat) {
  const zoom = Math.min(19, Math.max(17, Math.round(map.getZoom())));
  const tc = deg2tile(lngLat.lat, lngLat.lng, zoom);
  const R = 2;                          // 5×5 tiles ≈ 380 m at zoom 19
  const cols = R*2+1, rows = R*2+1;
  const tNW = { x: tc.x - R, y: tc.y - R };

  setStatus('Tracing pool…', 'busy');
  const canvas = document.createElement('canvas');
  canvas.width = cols * TILE_PX;
  canvas.height = rows * TILE_PX;
  const ctx = canvas.getContext('2d');
  try {
    for (let iy=0; iy<rows; iy++) {
      for (let ix=0; ix<cols; ix++) {
        const img = await fetchTile(zoom, tNW.x+ix, tNW.y+iy);
        ctx.drawImage(img, ix*TILE_PX, iy*TILE_PX);
      }
    }
  } catch (err) {
    setStatus('Error', 'ready');
    toast('Tile fetch failed', 'err');
    return;
  }

  const W = canvas.width, H = canvas.height;
  const tl = tile2deg(tNW.x, tNW.y, zoom);
  const br = tile2deg(tNW.x + cols, tNW.y + rows, zoom);
  const projLeft = lonToX(tl.lon), projTop = latToY(tl.lat);
  const projRight = lonToX(br.lon), projBot = latToY(br.lat);
  const mpx = (projRight - projLeft) / W;
  const mpy = (projTop - projBot) / H;

  const cxPx = Math.round((lonToX(lngLat.lng) - projLeft) / mpx);
  const cyPx = Math.round((projTop - latToY(lngLat.lat)) / mpy);
  if (cxPx < 0 || cyPx < 0 || cxPx >= W || cyPx >= H) {
    setStatus('Ready', 'ready'); toast('Click inside the map', 'err'); return;
  }

  const imgData = ctx.getImageData(0,0,W,H);
  const data = imgData.data;
  const N = W * H;

  // Sample a 3×3 neighborhood around click to get a robust seed color
  let sumR=0, sumG=0, sumB=0, nSamp=0;
  for (let dy=-1; dy<=1; dy++) for (let dx=-1; dx<=1; dx++) {
    const x = cxPx+dx, y = cyPx+dy;
    if (x<0||y<0||x>=W||y>=H) continue;
    const p = (y*W+x)*4;
    sumR += data[p]; sumG += data[p+1]; sumB += data[p+2]; nSamp++;
  }
  const seedHSV = rgbToHsv(sumR/nSamp/255, sumG/nSamp/255, sumB/nSamp/255);

  // Reject if clicked non-bluish: hue out of pool range
  if (seedHSV.h < 140 || seedHSV.h > 240 || seedHSV.s < 0.08) {
    setStatus('Ready', 'ready'); toast('Click ON water — seed is not pool-colored', 'err'); return;
  }

  // Adaptive tolerances: looser if saturation is low (variable pool)
  const HUE_TOL = 40;
  const SAT_TOL = 0.45;
  const VAL_TOL = 0.40;

  const mask = new Uint8Array(N);
  const stack = new Int32Array(N);
  let sp = 0;
  const seed = cyPx*W + cxPx;
  stack[sp++] = seed; mask[seed] = 1;
  while (sp > 0) {
    const idx = stack[--sp];
    const x = idx % W, y = (idx - x) / W;
    const neigh = [idx-1, idx+1, idx-W, idx+W];
    const valid = [x>0, x<W-1, y>0, y<H-1];
    for (let k=0; k<4; k++) {
      if (!valid[k]) continue;
      const n = neigh[k];
      if (mask[n]) continue;
      const p = n*4;
      const hsv = rgbToHsv(data[p]/255, data[p+1]/255, data[p+2]/255);
      const dh = Math.min(Math.abs(hsv.h - seedHSV.h), 360 - Math.abs(hsv.h - seedHSV.h));
      if (dh > HUE_TOL) continue;
      if (Math.abs(hsv.s - seedHSV.s) > SAT_TOL) continue;
      if (Math.abs(hsv.v - seedHSV.v) > VAL_TOL) continue;
      if (hsv.s < 0.06) continue;                     // gray/white reject (sand, concrete)
      mask[n] = 1;
      stack[sp++] = n;
    }
  }

  // Cleanup: close small pixel-noise gaps, but don't over-dilate.
  const cleaned = morphClose(morphOpen(mask, W, H), W, H, 2);

  // Find bbox + verify we have something
  let minX=W, minY=H, maxX=0, maxY=0, count=0;
  for (let i=0; i<N; i++) {
    if (!cleaned[i]) continue;
    const x = i % W, y = (i - x) / W;
    if (x<minX) minX=x; if (x>maxX) maxX=x;
    if (y<minY) minY=y; if (y>maxY) maxY=y;
    count++;
  }
  const minAreaPx = 2 / (mpx * mpy);              // 2 sq m min
  if (count < minAreaPx) {
    setStatus('Ready', 'ready'); toast('Selection too small — click more centrally on the pool', 'err'); return;
  }

  // Label the pixel containing the click, trace its outer contour + holes.
  const labels = new Int32Array(N);
  for (let i=0; i<N; i++) if (cleaned[i]) labels[i] = 1;
  const outer = traceContour(labels, W, H, 1, [minX, minY, maxX, maxY]);
  if (!outer || outer.length < 4) {
    setStatus('Ready', 'ready'); toast('Could not trace boundary', 'err'); return;
  }
  const outerSimp = simplifyRDP(outer, 1.2);
  const holes = detectHoles(cleaned, W, H, minX, minY, maxX, maxY, mpx * mpy);

  const toLL = ([px, py]) => [xToLon(projLeft + px * mpx), yToLat(projTop - py * mpy)];
  const closeRing = (ring) => {
    if (!ring.length) return ring;
    const [a] = ring, z = ring[ring.length-1];
    if (a[0] !== z[0] || a[1] !== z[1]) ring.push([a[0], a[1]]);
    return ring;
  };
  const rings = [closeRing(outerSimp.map(toLL))];
  for (const h of holes) rings.push(closeRing(simplifyRDP(h, 1.2).map(toLL)));

  pushHistory('magic wand');
  const feat = { type:'Feature', properties:{ role:'pool' }, geometry:{ type:'Polygon', coordinates: rings }};
  const [drawId] = draw.add(feat);
  draw.setFeatureProperty(drawId, 'role', 'pool');
  const stored = draw.get(drawId);
  const pool = addPool({ drawId, polygon: stored, fromDetect: false, fromUser: true });
  pool.source = 'wand';
  renderCatalog();
  setStatus('Ready', 'ready');
  toast(`Traced${holes.length ? ` · ${holes.length} hole${holes.length>1?'s':''}` : ''} — fill details below → Register`, 'ok');
  enterReviewFor(pool);
}

// Flood-fill "outside" from bbox edge; remaining unvisited non-mask cells inside
// the bbox are holes (e.g. vegetation islands inside a lagoon).
function detectHoles(mask, W, H, minX, minY, maxX, maxY, pxArea) {
  const visited = new Uint8Array(W*H);
  const stack = [];
  const seed = (idx) => { if (!mask[idx] && !visited[idx]) { visited[idx]=1; stack.push(idx); } };
  for (let x=minX; x<=maxX; x++) { seed(minY*W+x); seed(maxY*W+x); }
  for (let y=minY; y<=maxY; y++) { seed(y*W+minX); seed(y*W+maxX); }
  while (stack.length) {
    const idx = stack.pop();
    const x = idx%W, y = (idx-x)/W;
    const push = (n, nx, ny) => {
      if (nx<minX||nx>maxX||ny<minY||ny>maxY) return;
      if (mask[n] || visited[n]) return;
      visited[n]=1; stack.push(n);
    };
    if (x>minX) push(idx-1, x-1, y);
    if (x<maxX) push(idx+1, x+1, y);
    if (y>minY) push(idx-W, x, y-1);
    if (y<maxY) push(idx+W, x, y+1);
  }
  const holeLabels = new Int32Array(W*H);
  const holes = [];
  let label = 0;
  const minHolePx = Math.max(6, 1 / (pxArea || 1));   // ignore holes < ~1 sq m
  for (let y=minY; y<=maxY; y++) {
    for (let x=minX; x<=maxX; x++) {
      const idx = y*W+x;
      if (mask[idx] || visited[idx] || holeLabels[idx]) continue;
      label++;
      const fs = [idx]; holeLabels[idx] = label;
      let hMinX=x, hMinY=y, hMaxX=x, hMaxY=y, hCount=0;
      while (fs.length) {
        const cur = fs.pop();
        const cx = cur % W, cy = (cur - cx)/W;
        hCount++;
        if (cx<hMinX) hMinX=cx; if (cx>hMaxX) hMaxX=cx;
        if (cy<hMinY) hMinY=cy; if (cy>hMaxY) hMaxY=cy;
        const tryPush = (n, nx, ny) => {
          if (nx<minX||nx>maxX||ny<minY||ny>maxY) return;
          if (mask[n] || visited[n] || holeLabels[n]) return;
          holeLabels[n] = label; fs.push(n);
        };
        if (cx>minX) tryPush(cur-1, cx-1, cy);
        if (cx<maxX) tryPush(cur+1, cx+1, cy);
        if (cy>minY) tryPush(cur-W, cx, cy-1);
        if (cy<maxY) tryPush(cur+W, cx, cy+1);
      }
      if (hCount < minHolePx) continue;
      const ring = traceContour(holeLabels, W, H, label, [hMinX, hMinY, hMaxX, hMaxY]);
      if (ring && ring.length >= 4) holes.push(ring);
    }
  }
  return holes;
}

// ─── Merge two or more pools into one polygon via rasterize-and-retrace ──
function mergePoolsByIds(ids) {
  const pools = ids.map(id => S.pools.find(p => p.id === id)).filter(Boolean);
  if (pools.length < 2) { toast('Select at least 2 pools', 'err'); return; }
  pushHistory(`merge ${pools.length} pools`);

  let minLon=Infinity, minLat=Infinity, maxLon=-Infinity, maxLat=-Infinity;
  for (const p of pools) for (const ring of p.polygon.geometry.coordinates) for (const [lo, la] of ring) {
    if (lo<minLon) minLon=lo; if (lo>maxLon) maxLon=lo;
    if (la<minLat) minLat=la; if (la>maxLat) maxLat=la;
  }
  // Pad so dilation doesn't clip against edges.
  const padLon = (maxLon - minLon) * 0.05 + 1e-5;
  const padLat = (maxLat - minLat) * 0.05 + 1e-5;
  minLon -= padLon; maxLon += padLon; minLat -= padLat; maxLat += padLat;

  const projLeft = lonToX(minLon), projTop = latToY(maxLat);
  const projRight = lonToX(maxLon), projBot = latToY(minLat);
  const targetMPP = 0.3;
  const W = Math.min(3000, Math.max(32, Math.ceil((projRight - projLeft) / targetMPP)));
  const H = Math.min(3000, Math.max(32, Math.ceil((projTop - projBot) / targetMPP)));
  const mpx = (projRight - projLeft) / W;
  const mpy = (projTop - projBot) / H;

  const mask = new Uint8Array(W*H);
  for (const p of pools) {
    for (let r=0; r<p.polygon.geometry.coordinates.length; r++) {
      const ring = p.polygon.geometry.coordinates[r];
      const pix = ring.map(([lo, la]) => [(lonToX(lo) - projLeft)/mpx, (projTop - latToY(la))/mpy]);
      scanlineFill(pix, mask, W, H, r === 0 ? 1 : 0);
    }
  }
  // Slight dilation bridges hairline gaps between originally-separate polygons.
  let bridged = mask;
  for (let k=0; k<2; k++) bridged = morphDilate(bridged, W, H);

  let minX=W, minY=H, maxX=0, maxY=0, count=0;
  for (let i=0; i<W*H; i++) {
    if (!bridged[i]) continue;
    const x = i%W, y = (i-x)/W;
    if (x<minX) minX=x; if (x>maxX) maxX=x;
    if (y<minY) minY=y; if (y>maxY) maxY=y;
    count++;
  }
  if (!count) { toast('Merge failed', 'err'); return; }

  const labels = new Int32Array(W*H);
  for (let i=0; i<W*H; i++) if (bridged[i]) labels[i] = 1;
  const outer = traceContour(labels, W, H, 1, [minX, minY, maxX, maxY]);
  if (!outer || outer.length < 4) { toast('Merge failed', 'err'); return; }
  const outerSimp = simplifyRDP(outer, 1.2);
  const holes = detectHoles(bridged, W, H, minX, minY, maxX, maxY, mpx * mpy);

  const toLL = ([px, py]) => [xToLon(projLeft + px * mpx), yToLat(projTop - py * mpy)];
  const closeRing = (ring) => {
    if (!ring.length) return ring;
    const [a] = ring, z = ring[ring.length-1];
    if (a[0] !== z[0] || a[1] !== z[1]) ring.push([a[0], a[1]]);
    return ring;
  };
  const rings = [closeRing(outerSimp.map(toLL))];
  for (const h of holes) rings.push(closeRing(simplifyRDP(h, 1.2).map(toLL)));

  const primary = pools.slice().sort((a,b) => b.sq_m - a.sq_m)[0];
  for (const p of pools) { try { draw.delete(p.drawId); } catch(e){} }
  S.pools = S.pools.filter(x => !ids.includes(x.id));

  const feat = { type:'Feature', properties:{ role:'pool', registered: true }, geometry:{ type:'Polygon', coordinates: rings }};
  const [drawId] = draw.add(feat);
  draw.setFeatureProperty(drawId, 'role', 'pool');
  draw.setFeatureProperty(drawId, 'registered', true);
  const stored = draw.get(drawId);
  const sq_m = geoAreaSqMeters(stored.geometry);
  const devices = {};
  for (const pp of PIPES) {
    // Sum pipe counts across the merged pools
    devices[pp.k] = pools.reduce((s, pl) => s + (pl[pp.k] | 0), 0);
  }
  // Inherit the lowest pool number among the merged pools so later pools renumber up cleanly.
  const inheritNumber = pools.filter(pl => pl.number != null).map(pl => pl.number).sort((a,b)=>a-b)[0] || null;
  // Drop the markers for the merged-away pools
  for (const pl of pools) removePoolMarker(pl.id);
  const merged = {
    id: 'p' + (S.nextId++),
    drawId,
    name: primary.name,
    type: classify(sq_m),
    polygon: stored,
    sq_m,
    depth_ft: primary.depth_ft,
    source: 'merged',
    registered: true,
    number: inheritNumber,
    notes: primary.notes || '',
    image: primary.image || null,
    ...devices,
  };
  S.pools.push(merged);
  renumberPools();            // closes the gaps left by the merged-away pools
  ensurePoolMarker(merged);
  S.mergeSelection.clear();
  renderCatalog();
  toast(`Merged ${pools.length} pools into 1`, 'ok');
}

// Scanline polygon fill. `ring` is pixel-space; `setTo` is 0 (hole) or 1 (outer).
function scanlineFill(ring, mask, W, H, setTo) {
  const n = ring.length;
  if (n < 3) return;
  let minY = Infinity, maxY = -Infinity;
  for (const [,py] of ring) { if (py<minY) minY=py; if (py>maxY) maxY=py; }
  const y0 = Math.max(0, Math.floor(minY));
  const y1 = Math.min(H-1, Math.ceil(maxY));
  for (let y = y0; y <= y1; y++) {
    const xs = [];
    for (let i=0, j=n-1; i<n; j=i++) {
      const [xi, yi] = ring[i], [xj, yj] = ring[j];
      if ((yi > y) !== (yj > y)) {
        xs.push(xi + (y - yi) * (xj - xi) / (yj - yi));
      }
    }
    xs.sort((a, b) => a - b);
    for (let k=0; k+1 < xs.length; k+=2) {
      const xa = Math.max(0, Math.ceil(xs[k]));
      const xb = Math.min(W-1, Math.floor(xs[k+1]));
      for (let x = xa; x <= xb; x++) mask[y*W + x] = setTo;
    }
  }
}

// ─── Morphology (3x3 kernels) ────────────────────────────────
function morphErode(src, W, H) {
  const out = new Uint8Array(W*H);
  for (let y=1; y<H-1; y++) {
    for (let x=1; x<W-1; x++) {
      const i = y*W+x;
      out[i] = src[i] && src[i-1] && src[i+1] && src[i-W] && src[i+W] ? 1 : 0;
    }
  }
  return out;
}
function morphDilate(src, W, H) {
  const out = new Uint8Array(W*H);
  for (let y=1; y<H-1; y++) {
    for (let x=1; x<W-1; x++) {
      const i = y*W+x;
      out[i] = (src[i] || src[i-1] || src[i+1] || src[i-W] || src[i+W]) ? 1 : 0;
    }
  }
  return out;
}
function morphOpen(src, W, H) { return morphDilate(morphErode(src, W, H), W, H); }
function morphClose(src, W, H, iter=1) {
  let cur = src;
  for (let i=0;i<iter;i++) cur = morphErode(morphDilate(cur, W, H), W, H);
  return cur;
}

// ─── Contour tracing (edge-chain — walks pixel corners) ─────
// Build directed edges along transitions between labeled and non-labeled
// cells, then chain them into a ring. Robust for all simply-connected blobs.
function traceContour(labels, W, H, target, bbox) {
  const [minX, minY, maxX, maxY] = bbox;
  const isIn = (x, y) => x >= 0 && y >= 0 && x < W && y < H && labels[y*W + x] === target;
  const outs = new Map(); // "x,y" (corner) -> [[tx,ty], ...]
  const key = (x, y) => x + ',' + y;
  const add = (fx, fy, tx, ty) => {
    const k = key(fx, fy);
    let a = outs.get(k);
    if (!a) { a = []; outs.set(k, a); }
    a.push([tx, ty]);
  };
  let seed = null;
  for (let y = minY; y <= maxY; y++) {
    for (let x = minX; x <= maxX; x++) {
      if (labels[y*W + x] !== target) continue;
      if (!isIn(x,   y-1)) { add(x,   y,   x+1, y);   if (!seed) seed = [x, y]; }   // top (→ right)
      if (!isIn(x+1, y  )) { add(x+1, y,   x+1, y+1); }                              // right (→ down)
      if (!isIn(x,   y+1)) { add(x+1, y+1, x,   y+1); }                              // bottom (→ left)
      if (!isIn(x-1, y  )) { add(x,   y+1, x,   y);   }                              // left (→ up)
    }
  }
  if (!seed) return null;
  const ring = [seed.slice()];
  let [cx, cy] = seed;
  for (let step = 0; step < 500000; step++) {
    const a = outs.get(key(cx, cy));
    if (!a || a.length === 0) break;
    const [nx, ny] = a.shift();
    ring.push([nx, ny]);
    cx = nx; cy = ny;
    if (cx === seed[0] && cy === seed[1]) break;
  }
  return ring;
}

// Ramer–Douglas–Peucker polygon simplification.
// Handles closed rings (first === last) by seeding the split at the point
// farthest from the start — otherwise the zero-length chord collapses everything.
function simplifyRDP(points, eps) {
  if (points.length < 3) return points.slice();
  const closed = points[0][0] === points[points.length-1][0] && points[0][1] === points[points.length-1][1];
  const pts = closed ? points.slice(0, -1) : points;
  if (pts.length < 3) return points.slice();
  const keep = new Uint8Array(pts.length);
  let a = 0, b;
  if (closed) {
    // Find point farthest from pts[0] as the second anchor.
    let maxD = -1;
    for (let i = 1; i < pts.length; i++) {
      const d = (pts[i][0]-pts[0][0])**2 + (pts[i][1]-pts[0][1])**2;
      if (d > maxD) { maxD = d; b = i; }
    }
    keep[0] = keep[b] = 1;
  } else {
    b = pts.length - 1;
    keep[0] = keep[b] = 1;
  }
  const stack = closed ? [[a, b], [b, a]] : [[a, b]];
  const segDist = (p, q, r) => {
    const dx = r[0]-q[0], dy = r[1]-q[1], mag = Math.hypot(dx, dy);
    if (mag === 0) return Math.hypot(p[0]-q[0], p[1]-q[1]);
    return Math.abs(dy*p[0] - dx*p[1] + r[0]*q[1] - r[1]*q[0]) / mag;
  };
  while (stack.length) {
    const [s, e] = stack.pop();
    let maxD = 0, idx = -1;
    // Walk from s+1 to e-1, wrapping if closed and s > e.
    const span = closed && s >= e ? pts.length - s + e : e - s;
    for (let k = 1; k < span; k++) {
      const i = (s + k) % pts.length;
      const d = segDist(pts[i], pts[s], pts[e]);
      if (d > maxD) { maxD = d; idx = i; }
    }
    if (maxD > eps && idx !== -1) {
      keep[idx] = 1;
      stack.push([s, idx], [idx, e]);
    }
  }
  const out = [];
  for (let i = 0; i < pts.length; i++) if (keep[i]) out.push(pts[i]);
  if (closed && out.length && (out[0][0] !== out[out.length-1][0] || out[0][1] !== out[out.length-1][1])) {
    out.push(out[0]);
  }
  return out;
}

// ─── Pool model / catalog ────────────────────────────────────
function classify(sq_m) {
  const sqft = sq_m * SQFT_PER_SQM;
  if (sqft < 300) return 'feature';
  if (sqft < 1000) return 'small_pool';
  if (sqft < 4000) return 'pool';
  return 'mega_pool';
}
// Standard default is 4 ft; user overrides per-pool in the review/details card.
function defaultDepth(_type) { return 4; }
function typeLabel(t) {
  return ({feature:'Feature', small_pool:'Small pool', pool:'Pool', mega_pool:'Main pool'})[t] || 'Pool';
}
function addPool({ drawId, polygon, fromDetect, fromUser }) {
  const sq_m = geoAreaSqMeters(polygon.geometry);
  const type = classify(sq_m);
  const id = 'p' + (S.nextId++);
  const devices = {};
  for (const pp of PIPES) devices[pp.k] = 0;
  // Auto-detect dumps many at once → register them immediately so they aren't
  // all stuck as drafts. Wand / manual single-trace go into review as drafts.
  const registered = !!fromDetect;
  S.pools.push({
    id, drawId,
    name: `${typeLabel(type)} ${S.pools.filter(p=>classify(p.sq_m)===type).length + 1}`,
    type,
    polygon,
    sq_m,
    depth_ft: defaultDepth(type),
    source: fromDetect ? 'detected' : 'manual',
    notes: '',
    image: null,
    registered,
    ...devices,
  });
  return S.pools[S.pools.length - 1];
}
function updatePool(id, patch) {
  const p = S.pools.find(x => x.id === id);
  if (!p) return;
  const label = 'name' in patch ? 'rename' : 'depth' in patch || 'depth_ft' in patch ? 'change depth' : 'update';
  pushHistory(label);
  Object.assign(p, patch);
  renderCatalog();
}
function removePool(id) {
  const p = S.pools.find(x => x.id === id);
  if (!p) return;
  pushHistory(`delete ${p.name}`);
  const wasRegistered = p.registered;
  removePoolMarker(id);
  draw.delete(p.drawId);
  S.pools = S.pools.filter(x => x.id !== id);
  if (S.selectedPoolId === id) S.selectedPoolId = null;
  if (wasRegistered) renumberPools();
  renderCatalog();
}
function selectPool(id) {
  S.selectedPoolId = id;
  const p = S.pools.find(x => x.id === id);
  if (p) {
    try { draw.changeMode('simple_select', { featureIds:[p.drawId] }); } catch(e){}
    const ring = p.polygon.geometry.coordinates[0];
    const lons = ring.map(c=>c[0]), lats = ring.map(c=>c[1]);
    map.fitBounds([[Math.min(...lons), Math.min(...lats)], [Math.max(...lons), Math.max(...lats)]], { padding: 80, maxZoom: 19, duration: 500 });
  }
  // Reflect selection on flag markers
  for (const [poolId, marker] of S.markers) {
    marker.getElement().classList.toggle('selected', poolId === id);
  }
  renderCatalog();
}

// US gallons at average depth. Derivation:
//   sq_m × 10.7639 sq-ft/sq-m × depth_ft = cubic feet
//   cubic feet × 7.48052 US-gal/cu-ft    = US gallons
// Industry rule-of-thumb: gallons ≈ sq_ft × avg_depth × 7.48 ✓
function gallons(p) {
  return p.sq_m * SQFT_PER_SQM * p.depth_ft * 7.48052;
}

function poolBounds(p) {
  let minLon=Infinity, minLat=Infinity, maxLon=-Infinity, maxLat=-Infinity;
  for (const ring of p.polygon.geometry.coordinates) {
    for (const [lo, la] of ring) {
      if (lo<minLon) minLon=lo; if (lo>maxLon) maxLon=lo;
      if (la<minLat) minLat=la; if (la>maxLat) maxLat=la;
    }
  }
  return [[minLon, minLat], [maxLon, maxLat]];
}

// Approximate centroid from the outer ring (area-weighted, planar projection).
function poolCentroid(p) {
  const ring = p.polygon.geometry.coordinates[0];
  let cx = 0, cy = 0, a = 0;
  for (let i=0, j=ring.length-1; i<ring.length; j=i++) {
    const x1 = lonToX(ring[i][0]), y1 = latToY(ring[i][1]);
    const x2 = lonToX(ring[j][0]), y2 = latToY(ring[j][1]);
    const cross = x1*y2 - x2*y1;
    a += cross;
    cx += (x1 + x2) * cross;
    cy += (y1 + y2) * cross;
  }
  if (a === 0) {
    // Fallback: bbox center
    const [[lo0, la0], [lo1, la1]] = poolBounds(p);
    return [(lo0+lo1)/2, (la0+la1)/2];
  }
  cx /= (3 * a); cy /= (3 * a);
  return [xToLon(cx), yToLat(cy)];
}

function ensurePoolMarker(p) {
  if (!p.registered || p.number == null) { removePoolMarker(p.id); return; }
  const [lon, lat] = poolCentroid(p);
  let marker = S.markers.get(p.id);
  if (!marker) {
    const el = document.createElement('div');
    el.className = 'ap-pool-flag';
    el.innerHTML = `<span>${p.number}</span>`;
    el.title = p.name;
    el.addEventListener('click', (ev) => { ev.stopPropagation(); selectPool(p.id); });
    marker = new maplibregl.Marker({ element: el, anchor: 'bottom-left' }).setLngLat([lon, lat]).addTo(map);
    S.markers.set(p.id, marker);
  } else {
    marker.setLngLat([lon, lat]);
    const el = marker.getElement();
    const span = el.querySelector('span');
    if (span && span.textContent !== String(p.number)) span.textContent = String(p.number);
    el.title = p.name;
    el.classList.toggle('selected', p.id === S.selectedPoolId);
  }
}
function removePoolMarker(id) {
  const m = S.markers.get(id);
  if (m) { m.remove(); S.markers.delete(id); }
}
function refreshAllMarkers() {
  const liveIds = new Set(S.pools.filter(p => p.registered && p.number != null).map(p => p.id));
  for (const id of Array.from(S.markers.keys())) {
    if (!liveIds.has(id)) removePoolMarker(id);
  }
  for (const p of S.pools) ensurePoolMarker(p);
}

// Big property flag — rendered at the property centre so users can navigate
// back when zoomed out. Auto-hides when zoomed in to pool-working zoom.
function ensurePropertyMarker() {
  if (!S.propertyCenter) return;
  if (!S.propertyMarker) {
    const el = document.createElement('div');
    el.className = 'ap-property-flag';
    el.title = 'Property location — click to centre';
    el.innerHTML = '<span>\u25CE</span>';
    el.addEventListener('click', (ev) => { ev.stopPropagation(); centreOnProperty(); });
    // Anchor at the tip of the teardrop (bottom-center) so the pin points precisely at the lat/lon.
    S.propertyMarker = new maplibregl.Marker({ element: el, anchor: 'bottom' })
      .setLngLat(S.propertyCenter).addTo(map);
  } else {
    S.propertyMarker.setLngLat(S.propertyCenter);
  }
  updatePropertyMarkerVisibility();
}
function updatePropertyMarkerVisibility() {
  if (!S.propertyMarker) return;
  const el = S.propertyMarker.getElement();
  el.style.display = (map.getZoom() < PROPERTY_FLAG_MAX_ZOOM) ? '' : 'none';
}
function setPropertyCenter(lngLat, zoom) {
  S.propertyCenter = lngLat.slice();
  if (zoom != null) S.propertyZoom = zoom;
  ensurePropertyMarker();
}
function centreOnProperty() {
  if (!S.propertyCenter) { toast('No property location saved yet', 'err'); return; }
  map.flyTo({ center: S.propertyCenter, zoom: S.propertyZoom || 18, duration: 900 });
}

// Keep pool numbers as a contiguous sequence 1..N (no gaps) after any removal
// or merge. Preserves existing ordering — just closes gaps.
function renumberPools() {
  const ordered = S.pools
    .filter(p => p.registered && p.number != null)
    .sort((a, b) => a.number - b.number);
  let n = 1;
  for (const p of ordered) {
    if (p.number !== n) p.number = n;
    n++;
  }
  S.nextPoolNumber = n;
  for (const p of ordered) ensurePoolMarker(p);   // marker label reflects new number
}

// Snap the current map view to the pool, wait for tiles, capture the canvas
// into a JPEG dataURL, and attach to the pool.
async function captureMapForPool(poolId) {
  const p = S.pools.find(x => x.id === poolId);
  if (!p) return;
  setStatus('Capturing map…', 'busy');
  // Thumbnail always renders the polygon in the captured BLUE style, even when
  // the pool is still a draft. We force the blue paint directly on the active
  // draw layers — setFeatureProperty alone can lag the paint filter, leaving
  // the red draft style baked into the thumbnail.
  const BLUE = '#00b4d8';
  const paintBackup = {};
  const forceBlue = (layerId, key, value) => {
    try {
      paintBackup[layerId + '|' + key] = map.getPaintProperty(layerId, key);
      map.setPaintProperty(layerId, key, value);
    } catch(e) {}
  };
  const targetLayers = [
    'gl-draw-polygon-fill-draft.cold','gl-draw-polygon-fill-draft.hot',
    'gl-draw-polygon-stroke-draft.cold','gl-draw-polygon-stroke-draft.hot',
    'gl-draw-polygon-fill-registered.cold','gl-draw-polygon-fill-registered.hot',
    'gl-draw-polygon-stroke-registered.cold','gl-draw-polygon-stroke-registered.hot',
  ];
  for (const lid of targetLayers) {
    if (!map.getLayer(lid)) continue;
    if (lid.indexOf('-fill-') !== -1) {
      forceBlue(lid, 'fill-color', BLUE);
      forceBlue(lid, 'fill-opacity', 0.28);
    } else {
      forceBlue(lid, 'line-color', BLUE);
      forceBlue(lid, 'line-width', 2.5);
      forceBlue(lid, 'line-dasharray', [1,0]);     // solid
    }
  }
  try {
    map.fitBounds(poolBounds(p), { padding: 80, maxZoom: 19, duration: 320 });
    await new Promise(res => {
      let settled = false;
      const done = () => { if (settled) return; settled = true; map.off('idle', done); res(); };
      map.once('idle', done);
      setTimeout(done, 1800);   // safety
    });
    const canvas = map.getCanvas();
    const dataURL = canvas.toDataURL('image/jpeg', 0.78);
    pushHistory('capture map');
    p.image = dataURL;
    renderCatalog();
    setStatus('Ready', 'ready');
    toast('Map view captured', 'ok');
  } catch (err) {
    setStatus('Error', 'ready');
    toast('Capture failed', 'err');
  } finally {
    // Restore original paint on all draw layers so the on-map polygon returns
    // to red (draft) or blue (registered) as dictated by the feature's state.
    for (const key of Object.keys(paintBackup)) {
      const [lid, paintKey] = key.split('|');
      try { map.setPaintProperty(lid, paintKey, paintBackup[key]); } catch(e) {}
    }
  }
}

function renderCatalog() {
  const list = $('ap-pool-list');
  if (!S.pools.length) {
    list.innerHTML = '<div class="ap-empty">Click a pool with the magic wand or run auto-detect.</div>';
  } else {
    list.innerHTML = S.pools
      .slice()
      // Pending pool is shown in the review card below the map — don't duplicate it here.
      .filter(p => p.id !== S.pendingPoolId)
      .sort((a,b)=>{
        // Drafts first (there shouldn't be any non-pending drafts, but be safe)
        const dr = (a.registered?1:0) - (b.registered?1:0);
        if (dr !== 0) return dr;
        // Registered pools in pool-number order (matches flag numbering on the map)
        const an = a.number ?? 1e9, bn = b.number ?? 1e9;
        if (an !== bn) return an - bn;
        return b.sq_m - a.sq_m;
      })
      .map(p => {
        const gal = gallons(p);
        const checked = S.mergeSelection.has(p.id);
        const draft = !p.registered;
        // Strip any auto-appended " <digits>" from the default name when we have a #N prefix.
        const displayName = (p.number != null)
          ? escapeHtml(p.name.replace(/\s+\d+$/, ''))
          : escapeHtml(p.name);
        const dev = PIPES.map(pp => ({ ...pp, count: p[pp.k] || 0 })).filter(x => x.count > 0);
        const deviceSummary = dev.length ? dev.map(x => `${x.count}× ${x.sz}`).join(' · ') : '';
        return `<div class="ap-pool ${p.id===S.selectedPoolId?'selected':''} ${checked?'checked':''} ${draft?'draft':'registered'}" data-pool="${p.id}">
          <input type="checkbox" class="ap-pool-check" data-pool-check="${p.id}" title="Select for merge">
          <div class="ap-pool-row">
            ${p.image ? `<div class="ap-pool-thumb-sm"><img src="${p.image}" alt=""></div>` : `<div class="ap-pool-thumb-sm empty">\u2013</div>`}
            <div class="ap-pool-body">
              <div class="ap-pool-name" title="${displayName}">${p.number != null ? `<span class="ap-pool-num">${p.number}</span>` : ''}<span>${displayName}</span></div>
              <div class="ap-pool-meta">
                <span><b>${fmt(gal)}</b> gal</span>
                <span class="sep">\u00b7</span>
                <span><b>${p.depth_ft}</b> ft</span>
                ${deviceSummary ? `<span class="sep">\u00b7</span><span class="dev">${deviceSummary}</span>` : ''}
              </div>
              <div class="ap-pool-actions-row">
                <span class="ap-pool-status ${draft?'draft':'registered'}">${draft ? 'Draft' : '\u2713 Registered'}</span>
                <div class="ap-pool-more-wrap">
                  <button class="ap-mini-btn ap-pool-more-btn" data-pool-action="more" data-pool="${p.id}" aria-label="More actions">\u22ef</button>
                  <div class="ap-pool-more-menu" data-pool-more-for="${p.id}">
                    <button class="ap-ctx-item" data-pool-action="details" data-pool="${p.id}"><span>Details\u2026</span></button>
                    <button class="ap-ctx-item" data-pool-action="capture" data-pool="${p.id}"><span>${p.image ? 'Re-capture map view' : 'Capture map view'}</span></button>
                    <button class="ap-ctx-item" data-pool-action="edit" data-pool="${p.id}"><span>Edit shape</span></button>
                    <button class="ap-ctx-item danger" data-pool-action="delete" data-pool="${p.id}"><span>Delete</span></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>`;
      }).join('');
  }
  const totGal = S.pools.reduce((s,p)=>s+gallons(p), 0);
  $('ap-total-count').textContent = fmt(S.pools.length);
  $('ap-total-gal').textContent = fmt(totGal);
  // Progress pill
  const regCount = S.pools.filter(p => p.registered).length;
  const prog = $('ap-progress');
  if (S.pools.length) {
    prog.style.display = 'inline-flex';
    $('ap-progress-text').textContent = `${regCount}/${S.pools.length}`;
  } else {
    prog.style.display = 'none';
  }
  // Merge bar visibility + count
  const bar = $('ap-merge-bar');
  if (S.mergeSelection.size >= 2) {
    bar.classList.add('show');
    $('ap-merge-bar-text').textContent = `${S.mergeSelection.size} selected`;
  } else if (S.mergeSelection.size === 1) {
    bar.classList.add('show');
    $('ap-merge-bar-text').textContent = '1 selected — pick at least one more';
  } else {
    bar.classList.remove('show');
  }
}

function escapeHtml(s) { return (s||'').replace(/[&<>"]/g, c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c])); }

// ─── Export to ROI Calculator ────────────────────────────────
// Writes a payload to localStorage key ROI_INBOX_KEY. The ROI Calculator
// should add a "Load Pools" button that reads and consumes this key.
// Body shape mirrors S.bodies[] in AquaRev_ROI_Webflow_Embed_v3.html.
function buildCalculatorPayload() {
  const propertyName = $('ap-name').value.trim() || 'Untitled property';
  const bodies = S.pools.map((p, i) => {
    const body = {
      id: Date.now() + i,
      label: p.name,
      poolType: 'chlorine',
      inputMode: 'gallons',
      length: '',
      width: '',
      depth: '',
      manualGallons: String(Math.round(gallons(p))),
      co2Use: false,
      image: p.image || null,
    };
    for (const pp of PIPES) body[pp.k] = p[pp.k] | 0;
    return body;
  });
  return {
    source: 'pool-measure-v1',
    createdAt: new Date().toISOString(),
    propertyName,
    bodies,
  };
}
async function sendToCalculator() {
  if (!S.pools.length) { toast('No pools to send', 'err'); return; }
  const drafts = S.pools.filter(p => !p.registered).length;
  if (drafts) {
    const ok = await appConfirm({
      title: `Send with ${drafts} draft${drafts>1?'s':''}?`,
      body: `${drafts} pool${drafts>1?'s are':' is'} still in draft. Send anyway?`,
      okLabel: 'Send', cancelLabel: 'Finish drafts first',
    });
    if (!ok) return;
  }
  const payload = buildCalculatorPayload();
  try {
    localStorage.setItem(ROI_INBOX_KEY, JSON.stringify(payload));
  } catch (err) {
    toast('Storage error (images too large?)', 'err'); return;
  }
  toast(`Staged ${payload.bodies.length} pools for the Calculator`, 'ok');
}

// ─── Pending-review card (one pool at a time) ────────────────
const RECAP_ICON_SVG = `<svg viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M2 5h10v6H2z"/><circle cx="7" cy="8" r="2"/><path d="M5.5 5l1-1.3h1l1 1.3"/></svg>`;
function renderReviewCounter() {
  const el = $('ap-review-counter');
  if (!el) return;
  if (!S.pendingPoolId) { el.style.display = 'none'; return; }
  const registered = S.pools.filter(p => p.registered).length;
  const thisIndex = registered + 1;                   // this one would be the (N+1)th registered
  const total = S.pools.length;
  el.style.display = '';
  el.textContent = `Pool ${thisIndex} of ${total}`;
}
function openReviewFor(poolId) {
  const p = S.pools.find(x => x.id === poolId);
  const card = $('ap-review');
  const inputs = ['ap-review-name','ap-review-type','ap-review-depth'].map($);
  if (!p) {
    card.classList.add('empty');
    $('ap-review-title').textContent = 'Next pool';
    $('ap-review-stats').textContent = 'Click a pool on the map to begin';
    $('ap-review-thumb').innerHTML = 'No image';
    inputs.forEach(el => { el.value = ''; el.disabled = true; });
    $('ap-review-pipes').innerHTML = '';
    $('ap-btn-register').disabled = true;
    $('ap-btn-discard').disabled = true;
    $('ap-review-kbd').style.display = 'none';
    $('ap-review-counter').style.display = 'none';
    S.pendingPoolId = null;
    return;
  }
  S.pendingPoolId = poolId;
  card.classList.remove('empty');
  $('ap-review-title').textContent = 'Pending registration';
  $('ap-review-stats').textContent = `${fmt(gallons(p))} gal est.`;
  $('ap-review-thumb').innerHTML = (p.image
    ? `<img src="${p.image}" alt="">`
    : 'Capturing…'
  ) + `<button class="ap-recap" data-action="review-recapture" title="Re-capture map view">${RECAP_ICON_SVG}</button>`;
  $('ap-review-name').value = p.name;
  $('ap-review-type').value = p.type;
  $('ap-review-depth').value = p.depth_ft;
  inputs.forEach(el => el.disabled = false);
  $('ap-review-pipes').innerHTML = PIPES.map(pp => {
    const n = p[pp.k] || 0;
    const has = n > 0;
    return `<div class="ap-pipe-chip ${has?'has':'zero'}" title="${pp.flow}">
      <span class="sz">${pp.sz}</span>
      <div class="qty-row">
        <button class="btn" data-review-pipe="${pp.k}" data-d="-1">−</button>
        <span class="n" data-review-val="${pp.k}">${n}</span>
        <button class="btn" data-review-pipe="${pp.k}" data-d="1">+</button>
      </div>
    </div>`;
  }).join('');
  $('ap-btn-register').disabled = false;
  $('ap-btn-discard').disabled = false;
  $('ap-review-kbd').style.display = '';
  renderReviewCounter();
  setTimeout(() => $('ap-review-name').focus(), 50);
}

function onReviewRegister() {
  const id = S.pendingPoolId;
  const p = S.pools.find(x => x.id === id);
  if (!p) return;
  pushHistory(`register ${p.name}`);
  p.name     = $('ap-review-name').value.trim() || p.name;
  p.type     = $('ap-review-type').value;
  const d    = parseFloat($('ap-review-depth').value);
  if (!isNaN(d) && d > 0) p.depth_ft = d;
  p.registered = true;
  if (p.number == null) p.number = S.nextPoolNumber++;
  // First registered pool also seeds the property centre if it wasn't geocoded.
  if (!S.propertyCenter) setPropertyCenter(poolCentroid(p), Math.round(map.getZoom()));
  try { draw.setFeatureProperty(p.drawId, 'registered', true); } catch(e){}
  // Deselect so the polygon snaps from active(red) → registered(blue) immediately.
  try { draw.changeMode('simple_select', { featureIds: [] }); } catch(e){}
  ensurePoolMarker(p);
  openReviewFor(null);
  renderCatalog();
  toast(`Registered: ${p.name} (${p.number})`, 'ok');
}
function onReviewDiscard() {
  const id = S.pendingPoolId;
  if (!id) return;
  const p = S.pools.find(x => x.id === id);
  if (p) { try { draw.delete(p.drawId); } catch(e){} }
  S.pools = S.pools.filter(x => x.id !== id);
  // Undo entry from creation can go too since we're discarding
  if (S.history.length) S.history.pop();
  updateUndoButton();
  openReviewFor(null);
  renderCatalog();
  toast('Discarded');
}
function onReviewPipeDelta(key, delta) {
  const id = S.pendingPoolId;
  const p = S.pools.find(x => x.id === id);
  if (!p) return;
  const cur = Math.max(0, (p[key] | 0) + delta);
  p[key] = cur;
  const span = document.querySelector(`[data-review-val="${key}"]`);
  if (span) span.textContent = cur;
  const chip = span?.closest('.ap-pipe-chip');
  if (chip) chip.classList.toggle('has', cur > 0) && 0, chip.classList.toggle('zero', cur === 0);
  renderCatalog();
}

async function onReviewRecapture() {
  const id = S.pendingPoolId;
  if (!id) return;
  await captureMapForPool(id);
  const p = S.pools.find(x => x.id === id);
  if (p?.image) {
    $('ap-review-thumb').innerHTML = `<img src="${p.image}" alt="">
      <button class="ap-recap" data-action="review-recapture" title="Re-capture map view">${RECAP_ICON_SVG}</button>`;
  }
}

// Hand off a freshly created pool into review + auto-capture the map view.
async function enterReviewFor(pool) {
  openReviewFor(pool.id);
  // Small idle wait so tiles from the wand flow render, then capture
  setTimeout(async () => {
    if (S.pendingPoolId === pool.id && !pool.image) {
      await captureMapForPool(pool.id);
      // Refresh thumbnail in review card
      openReviewFor(pool.id);
    }
  }, 150);
}

// ─── Merge mode (click 2 polygons on the map) ────────────────
function onMergeModeToggle() {
  S.mergeMode = !S.mergeMode;
  S.mergeModePicks = [];
  document.getElementById('ap2').classList.toggle('merge-mode', S.mergeMode);
  const btn = $('ap-btn-merge-mode');
  btn.classList.toggle('merge-active', S.mergeMode);
  btn.textContent = S.mergeMode ? 'Exit merge' : 'Merge mode';
  if (S.mergeMode) {
    if (S.magicWand) onMagicWandToggle();   // can't be in wand + merge simultaneously
    hint('<strong>Merge mode on.</strong> Click two pool polygons to merge them.');
  } else {
    hint('');
  }
}
async function onMergeModeClick(lngLat, point) {
  const featureIds = draw.getFeatureIdsAt(point) || [];
  let poolId = null;
  for (const fid of featureIds) {
    const p = S.pools.find(x => x.drawId === fid);
    if (p) { poolId = p.id; break; }
  }
  if (!poolId) { toast('Click directly on a pool polygon', 'err'); return; }
  if (S.mergeModePicks.includes(poolId)) {
    S.mergeModePicks = S.mergeModePicks.filter(x => x !== poolId);
    toast('Removed from pick');
    return;
  }
  S.mergeModePicks.push(poolId);
  const p = S.pools.find(x => x.id === poolId);
  toast(`Picked ${p.name} (${S.mergeModePicks.length}/2)`);
  if (S.mergeModePicks.length >= 2) {
    mergePoolsByIds(S.mergeModePicks.slice());
    S.mergeModePicks = [];
    // Stay in merge mode in case the user wants to chain more merges
  }
}

// ─── Undo history ────────────────────────────────────────────
function pushHistory(label) {
  S.history.push({
    label,
    nextId: S.nextId,
    boundary: S.boundary ? JSON.parse(JSON.stringify(S.boundary)) : null,
    pools: S.pools.map(p => {
      const snap = {
        name: p.name, type: p.type, sq_m: p.sq_m, depth_ft: p.depth_ft, source: p.source,
        notes: p.notes || '',
        image: p.image || null,
        registered: !!p.registered,
        number: p.number || null,
        polygon: JSON.parse(JSON.stringify(p.polygon)),
      };
      for (const pp of PIPES) snap[pp.k] = p[pp.k] | 0;
      return snap;
    }),
    nextPoolNumber: S.nextPoolNumber,
  });
  if (S.history.length > MAX_HISTORY) S.history.shift();
  updateUndoButton();
}
function updateUndoButton() {
  const label = S.history.length ? S.history[S.history.length-1].label : null;
  for (const id of ['ap-btn-undo', 'ap-btn-undo-map']) {
    const btn = $(id);
    if (!btn) continue;
    btn.disabled = S.history.length === 0;
    btn.title = label ? `Undo: ${label} (⌘Z)` : 'Nothing to undo';
  }
}
function onUndo() {
  if (!S.history.length) { toast('Nothing to undo', 'err'); return; }
  const snap = S.history.pop();
  for (const p of S.pools) { try { draw.delete(p.drawId); } catch(e){} removePoolMarker(p.id); }
  if (S.boundary) { try { draw.delete(S.boundary.id); } catch(e){} }
  S.pools = [];
  S.boundary = null;
  S.selectedPoolId = null;
  S.mergeSelection.clear();
  S.nextId = snap.nextId;
  if (snap.nextPoolNumber != null) S.nextPoolNumber = snap.nextPoolNumber;
  for (const p of snap.pools) {
    const [drawId] = draw.add(p.polygon);
    draw.setFeatureProperty(drawId, 'role', 'pool');
    const stored = draw.get(drawId);
    const restored = {
      id: 'p' + (S.nextId++), drawId,
      name: p.name, type: p.type, polygon: stored, sq_m: p.sq_m, depth_ft: p.depth_ft, source: p.source,
      notes: p.notes || '', image: p.image || null, registered: !!p.registered,
      number: p.number || null,
    };
    for (const pp of PIPES) restored[pp.k] = p[pp.k] | 0;
    try { draw.setFeatureProperty(drawId, 'registered', !!p.registered); } catch(e){}
    S.pools.push(restored);
    ensurePoolMarker(restored);
  }
  if (snap.boundary) {
    const [id] = draw.add(snap.boundary);
    draw.setFeatureProperty(id, 'role', 'boundary');
    S.boundary = draw.get(id);
  }
  renderCatalog();
  updateUndoButton();
  toast(`Undid: ${snap.label}`, 'ok');
}

// ─── Save / Library (localStorage) ───────────────────────────
const STORE_KEY = 'ap2:index';
function snapshot() {
  return {
    id: 'rep_' + Date.now(),
    propertyName: $('ap-name').value.trim() || 'Untitled property',
    createdAt: new Date().toISOString(),
    center: map.getCenter().toArray(),
    zoom: map.getZoom(),
    boundary: S.boundary,
    pools: S.pools.map(p => {
      const snap = {
        id: p.id, name: p.name, type: p.type, sq_m: p.sq_m, depth_ft: p.depth_ft,
        polygon: p.polygon, source: p.source, notes: p.notes || '',
        image: p.image || null,
        registered: !!p.registered,
        number: p.number || null,
      };
      for (const pp of PIPES) snap[pp.k] = p[pp.k] | 0;
      return snap;
    }),
    nextPoolNumber: S.nextPoolNumber,
  };
}
function onSave() {
  if (!S.pools.length) { toast('Nothing to save yet', 'err'); return; }
  const snap = snapshot();
  const idx = JSON.parse(localStorage.getItem(STORE_KEY) || '[]');
  idx.push({ id: snap.id, name: snap.propertyName, at: snap.createdAt, count: snap.pools.length });
  localStorage.setItem(STORE_KEY, JSON.stringify(idx));
  localStorage.setItem('ap2:report:' + snap.id, JSON.stringify(snap));
  toast('Saved to library', 'ok');
}
function onLibrary() {
  const idx = JSON.parse(localStorage.getItem(STORE_KEY) || '[]');
  if (!idx.length) { toast('Library is empty', ''); return; }
  const pick = prompt('Saved properties:\n' + idx.map((r,i)=>`${i+1}. ${r.name} (${r.count} pools)`).join('\n') + '\n\nEnter #:');
  const n = parseInt(pick, 10);
  if (!n || n<1 || n>idx.length) return;
  const snap = JSON.parse(localStorage.getItem('ap2:report:' + idx[n-1].id));
  if (!snap) return;
  resetAll(false);
  $('ap-name').value = snap.propertyName;
  map.flyTo({ center: snap.center, zoom: snap.zoom, duration: 800 });
  if (snap.boundary) {
    const [id] = draw.add(snap.boundary);
    draw.setFeatureProperty(id, 'role', 'boundary');
    S.boundary = draw.get(id);
  }
  S.nextPoolNumber = snap.nextPoolNumber || 1;
  for (const pr of snap.pools) {
    const [drawId] = draw.add(pr.polygon);
    draw.setFeatureProperty(drawId, 'role', 'pool');
    draw.setFeatureProperty(drawId, 'registered', !!pr.registered);
    const restored = { ...pr, drawId, polygon: draw.get(drawId) };
    S.pools.push(restored);
  }
  renumberPools();     // close any gaps from older saves
  renderCatalog();
  toast('Loaded ' + snap.propertyName, 'ok');
}

async function resetAll(confirmFirst=true) {
  if (confirmFirst && S.pools.length) {
    const ok = await appConfirm({
      title: 'Clear all pools?',
      body: `This removes ${S.pools.length} pool${S.pools.length>1?'s':''} and the property boundary.`,
      okLabel: 'Clear', danger: true,
    });
    if (!ok) return;
  }
  if (S.pools.length || S.boundary) pushHistory('clear all');
  for (const p of S.pools) { try { draw.delete(p.drawId); } catch(e){} removePoolMarker(p.id); }
  if (S.boundary) { try { draw.delete(S.boundary.id); } catch(e){} }
  S.pools = []; S.boundary = null; S.selectedPoolId = null;
  renderCatalog();
}

// ─── Context menu + details modal ────────────────────────────
const CTX = { pendingLngLat: null, modalPoolId: null };

function ctxItem(label, icon, dataAttrs = '', extraCls = '') {
  return `<button class="ap-ctx-item ${extraCls}" ${dataAttrs}><span class="ico">${icon}</span><span>${label}</span></button>`;
}
function showContextMenu(x, y, html) {
  const el = $('ap-ctx');
  el.innerHTML = html;
  el.classList.add('show');
  // Position within viewport
  const vw = window.innerWidth, vh = window.innerHeight;
  el.style.left = Math.min(x, vw - 240) + 'px';
  el.style.top  = Math.min(y, vh - el.offsetHeight - 10) + 'px';
}
function hideContextMenu() { $('ap-ctx').classList.remove('show'); }

function showMapContextMenu(mouseEv, lngLat) {
  CTX.pendingLngLat = lngLat;
  CTX.modalPoolId = null;
  showContextMenu(mouseEv.clientX, mouseEv.clientY,
    `<div class="ap-ctx-title">Register water body</div>
     ${ctxItem('Register pool here (quick)', '<svg viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="2"><circle cx="7" cy="7" r="5"/><path d="M7 3v8M3 7h8"/></svg>', 'data-ctx="register-quick"')}
     ${ctxItem('Register pool with details…', '<svg viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="10" height="10" rx="1"/><path d="M5 6h4M5 9h3"/></svg>', 'data-ctx="register-details"')}
     <div class="ap-ctx-sep"></div>
     <div class="ap-ctx-title">Other</div>
     ${ctxItem('Draw pool manually', '<svg viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 11l8-8 2 2-8 8zM2 11l-1 2 2-1z"/></svg>', 'data-ctx="draw-pool"')}
     ${ctxItem('Set property boundary', '<svg viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 2h10v10H2z" stroke-dasharray="2 2"/></svg>', 'data-ctx="draw-boundary"')}`);
}
function showPoolContextMenu(mouseEv, poolId) {
  CTX.pendingLngLat = null;
  CTX.modalPoolId = poolId;
  const p = S.pools.find(x => x.id === poolId);
  if (!p) return;
  showContextMenu(mouseEv.clientX, mouseEv.clientY,
    `<div class="ap-ctx-title">${escapeHtml(p.name)}</div>
     ${ctxItem('Edit details…', '<svg viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 2l3 3-7 7H2V9z"/></svg>', 'data-ctx="edit-details"')}
     ${ctxItem('Rename', '<svg viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 11V4a1 1 0 011-1h8a1 1 0 011 1v7M5 11h4"/></svg>', 'data-ctx="rename"')}
     ${ctxItem('Change depth', '<svg viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 2v10M3 6l4-4 4 4"/></svg>', 'data-ctx="depth"')}
     ${ctxItem('Edit shape (drag vertices)', '<svg viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="2"><circle cx="3" cy="3" r="1.5"/><circle cx="11" cy="3" r="1.5"/><circle cx="11" cy="11" r="1.5"/><circle cx="3" cy="11" r="1.5"/></svg>', 'data-ctx="edit-shape"')}
     <div class="ap-ctx-sep"></div>
     ${ctxItem('Select for merge', '<svg viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 7h8M7 3v8"/></svg>', 'data-ctx="select-merge"')}
     <div class="ap-ctx-sep"></div>
     ${ctxItem('Delete', '<svg viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 4h8M5 4V3a1 1 0 011-1h2a1 1 0 011 1v1M4 4l1 8h4l1-8"/></svg>', 'data-ctx="delete"', 'danger')}`);
}

// Open modal bound to a specific pool (which may have just been created).
function openPoolModal(poolId, opts = {}) {
  const p = S.pools.find(x => x.id === poolId);
  if (!p) return;
  $('ap-modal-sub').textContent = opts.subtitle || `${fmt(p.sq_m * SQFT_PER_SQM)} sq ft · ${fmt(gallons(p))} gal est.`;
  $('ap-modal-name').value = p.name;
  $('ap-modal-type').value = p.type;
  $('ap-modal-depth').value = p.depth_ft;
  $('ap-modal-notes').value = p.notes || '';
  // Pipe/device rows
  $('ap-modal-pipes').innerHTML = PIPES.map(pp => {
    const n = p[pp.k] || 0;
    return `<div class="ap-pipe-row">
      <div class="ap-pipe-sz">${pp.sz}</div>
      <div class="ap-pipe-flow">${pp.flow}</div>
      <div class="ap-qty">
        <button class="ap-qty-btn" data-pipe-delta="${pp.k}" data-d="-1">−</button>
        <span class="ap-qty-n" data-pipe-val="${pp.k}">${n}</span>
        <button class="ap-qty-btn" data-pipe-delta="${pp.k}" data-d="1">+</button>
      </div>
    </div>`;
  }).join('');
  // Image row
  const imgRow = $('ap-modal-image-row');
  imgRow.innerHTML = p.image
    ? `<img class="ap-image-thumb" src="${p.image}" alt="Map view">
       <button class="ap-btn ghost" data-action="modal-recapture">Recapture</button>
       <button class="ap-btn ghost danger" data-action="modal-clear-image">Remove</button>`
    : `<button class="ap-btn ghost" data-action="modal-recapture">Capture map view</button>
       <span style="font-size:11px;color:var(--mu);">No image yet</span>`;
  CTX.modalPoolId = poolId;
  CTX.modalCreatedOnOpen = !!opts.createdOnOpen;
  CTX.modalPipes = Object.fromEntries(PIPES.map(pp => [pp.k, p[pp.k] || 0]));
  const m = $('ap-pool-modal');
  m.classList.add('show');
  m.setAttribute('aria-hidden', 'false');
  setTimeout(() => $('ap-modal-name').focus(), 50);
}
function closePoolModal() {
  const m = $('ap-pool-modal');
  m.classList.remove('show');
  m.setAttribute('aria-hidden', 'true');
  CTX.modalPoolId = null;
  CTX.modalCreatedOnOpen = false;
}
function onModalSave() {
  const id = CTX.modalPoolId;
  const p = S.pools.find(x => x.id === id);
  if (!p) { closePoolModal(); return; }
  const name = $('ap-modal-name').value.trim() || p.name;
  const type = $('ap-modal-type').value;
  const depth_ft = parseFloat($('ap-modal-depth').value);
  const notes = $('ap-modal-notes').value.trim();
  pushHistory('edit details');
  p.name = name;
  p.type = type;
  if (!isNaN(depth_ft) && depth_ft > 0) p.depth_ft = depth_ft;
  p.notes = notes;
  for (const pp of PIPES) p[pp.k] = Math.max(0, CTX.modalPipes?.[pp.k] | 0);
  renderCatalog();
  closePoolModal();
  toast('Saved', 'ok');
}
function onModalPipeDelta(key, delta) {
  CTX.modalPipes[key] = Math.max(0, (CTX.modalPipes[key] || 0) + delta);
  const span = document.querySelector(`[data-pipe-val="${key}"]`);
  if (span) span.textContent = CTX.modalPipes[key];
}
async function onModalRecapture() {
  const id = CTX.modalPoolId;
  if (!id) return;
  closePoolModal();
  await captureMapForPool(id);
  openPoolModal(id);
}
function onModalClearImage() {
  const id = CTX.modalPoolId;
  const p = S.pools.find(x => x.id === id);
  if (!p) return;
  pushHistory('remove image');
  p.image = null;
  openPoolModal(id);
  renderCatalog();
}
function onModalCancel() {
  if (CTX.modalCreatedOnOpen && CTX.modalPoolId) {
    // User opened via "Register with details…" — treat cancel as discard the just-created pool
    const id = CTX.modalPoolId;
    const p = S.pools.find(x => x.id === id);
    if (p) { try { draw.delete(p.drawId); } catch(e){} }
    S.pools = S.pools.filter(x => x.id !== id);
    // Remove the pushHistory entry that the creator added, since we're discarding the work
    if (S.history.length) S.history.pop();
    updateUndoButton();
    renderCatalog();
    toast('Discarded');
  }
  closePoolModal();
}

async function handleCtxAction(action) {
  hideContextMenu();
  if (CTX.pendingLngLat) {
    const ll = CTX.pendingLngLat;
    if (action === 'register-quick') { await magicWandAtLngLat(ll); }
    else if (action === 'register-details') {
      const prevLen = S.pools.length;
      await magicWandAtLngLat(ll);
      if (S.pools.length > prevLen) openPoolModal(S.pools[S.pools.length-1].id, { createdOnOpen: true });
    }
    else if (action === 'draw-pool') onDrawPool();
    else if (action === 'draw-boundary') onDrawBoundary();
    return;
  }
  if (CTX.modalPoolId) {
    const id = CTX.modalPoolId;
    const p = S.pools.find(x => x.id === id);
    if (!p) return;
    if (action === 'edit-details') openPoolModal(id);
    else if (action === 'rename') { const v = prompt('Name:', p.name); if (v!=null) updatePool(id, { name: v.trim() || p.name }); }
    else if (action === 'depth')  { const v = parseFloat(prompt('Depth (ft):', p.depth_ft)); if (!isNaN(v) && v>0) updatePool(id, { depth_ft: v }); }
    else if (action === 'edit-shape') { try { draw.changeMode('direct_select', { featureId: p.drawId }); } catch(e){} hint('Drag vertices. Click off the polygon to finish.'); }
    else if (action === 'select-merge') { S.mergeSelection.add(id); renderCatalog(); toast(`Added "${p.name}" to merge selection`); }
    else if (action === 'delete')  {
      const ok = await appConfirm({
        title: 'Delete this pool?',
        body: `"${p.name}" will be removed. You can Undo afterward.`,
        okLabel: 'Delete', danger: true,
      });
      if (ok) removePool(id);
    }
  }
}

// Dismiss menus on any click elsewhere or Escape
document.addEventListener('mousedown', (ev) => {
  if (!ev.target.closest('.ap-ctx')) hideContextMenu();
  if (!ev.target.closest('.ap-pool-more-wrap')) {
    document.querySelectorAll('.ap-pool-more-menu.show').forEach(el => el.classList.remove('show'));
  }
});
document.addEventListener('keydown', (ev) => {
  if (ev.key === 'Escape') { hideContextMenu(); closePoolModal(); }
});

// ─── Event wiring ────────────────────────────────────────────
document.addEventListener('click', (ev) => {
  // Pipe +/- in review card
  const revPipe = ev.target.closest('[data-review-pipe]');
  if (revPipe) { ev.stopPropagation(); onReviewPipeDelta(revPipe.dataset.reviewPipe, parseInt(revPipe.dataset.d, 10)); return; }
  // Pipe +/- in modal
  const pipeBtn = ev.target.closest('[data-pipe-delta]');
  if (pipeBtn) { ev.stopPropagation(); onModalPipeDelta(pipeBtn.dataset.pipeDelta, parseInt(pipeBtn.dataset.d, 10)); return; }
  // Context menu item
  const ctxBtn = ev.target.closest('.ap-ctx-item[data-ctx]');
  if (ctxBtn) { ev.stopPropagation(); handleCtxAction(ctxBtn.dataset.ctx); return; }
  // Checkbox toggle for merge selection
  const check = ev.target.closest('[data-pool-check]');
  if (check) {
    ev.stopPropagation();
    const id = check.dataset.poolCheck;
    if (check.checked) S.mergeSelection.add(id); else S.mergeSelection.delete(id);
    renderCatalog();
    return;
  }
  const t = ev.target.closest('[data-action],[data-pool-action]');
  if (!t) {
    const poolRow = ev.target.closest('[data-pool]');
    if (poolRow && !ev.target.closest('[data-pool-action]') && !ev.target.closest('[data-pool-check]')) {
      selectPool(poolRow.dataset.pool);
    }
    return;
  }
  const action = t.dataset.action;
  const paction = t.dataset.poolAction;
  if (action === 'locate') onLocate();
  else if (action === 'toggle-help') { const card = t.closest('.ap-card'); if (card) card.classList.toggle('show-help'); }
  else if (action === 'draw-boundary') onDrawBoundary();
  else if (action === 'clear-boundary') onClearBoundary();
  else if (action === 'detect') onDetect();
  else if (action === 'draw-pool') onDrawPool();
  else if (action === 'magic-wand') onMagicWandToggle();
  else if (action === 'merge-selected') {
    const ids = Array.from(S.mergeSelection);
    if (ids.length < 2) { toast('Select at least 2 pools', 'err'); return; }
    mergePoolsByIds(ids);
  }
  else if (action === 'clear-selection') { S.mergeSelection.clear(); renderCatalog(); }
  else if (action === 'zoom-boundary') { if (S.boundary) { const r=S.boundary.geometry.coordinates[0]; const los=r.map(c=>c[0]), las=r.map(c=>c[1]); map.fitBounds([[Math.min(...los),Math.min(...las)],[Math.max(...los),Math.max(...las)]],{padding:60,duration:500}); } }
  else if (action === 'center-property') centreOnProperty();
  else if (action === 'clear-pools') resetAll(true);
  else if (action === 'register-all') {
    const drafts = S.pools.filter(p => !p.registered);
    if (!drafts.length) { toast('All pools already registered', 'ok'); return; }
    pushHistory(`register all (${drafts.length})`);
    for (const p of drafts) {
      p.registered = true;
      if (p.number == null) p.number = S.nextPoolNumber++;
      try { draw.setFeatureProperty(p.drawId, 'registered', true); } catch(e){}
      ensurePoolMarker(p);
    }
    renumberPools();
    reassertPoolFlags();
    renderCatalog();
    toast(`Registered ${drafts.length} pool${drafts.length>1?'s':''}`, 'ok');
  }
  else if (action === 'save') onSave();
  else if (action === 'library') onLibrary();
  else if (action === 'undo') onUndo();
  else if (action === 'modal-save') onModalSave();
  else if (action === 'modal-cancel') onModalCancel();
  else if (action === 'modal-recapture') onModalRecapture();
  else if (action === 'modal-clear-image') onModalClearImage();
  else if (action === 'send-to-calculator') sendToCalculator();
  else if (action === 'review-register') onReviewRegister();
  else if (action === 'review-discard') onReviewDiscard();
  else if (action === 'review-recapture') onReviewRecapture();
  else if (action === 'merge-mode') onMergeModeToggle();
  else if (paction) {
    const id = t.dataset.pool;
    const p = S.pools.find(x => x.id === id);
    if (!p) return;
    // Per-pool "more" popover toggle. The menu is position:fixed so it escapes
    // the card's overflow:hidden clip — we position it at the button's viewport
    // coords on open.
    if (paction === 'more') {
      ev.stopPropagation();
      document.querySelectorAll('.ap-pool-more-menu.show').forEach(el => { if (el.dataset.poolMoreFor !== id) el.classList.remove('show'); });
      const menu = document.querySelector(`.ap-pool-more-menu[data-pool-more-for="${id}"]`);
      if (menu) {
        const willShow = !menu.classList.contains('show');
        if (willShow) {
          const btnRect = t.getBoundingClientRect();
          const menuW = 200; // min-width estimate
          // Right-align the menu to the button; flip up if below viewport.
          let right = Math.max(8, window.innerWidth - btnRect.right);
          let top = btnRect.bottom + 4;
          if (top + 180 > window.innerHeight) top = btnRect.top - 180 - 4;  // flip up
          menu.style.right = right + 'px';
          menu.style.top = Math.max(8, top) + 'px';
          menu.style.left = 'auto';
        }
        menu.classList.toggle('show');
      }
      return;
    }
    // Any other pool action: close open popovers
    document.querySelectorAll('.ap-pool-more-menu.show').forEach(el => el.classList.remove('show'));
    if (paction === 'details') openPoolModal(id);
    else if (paction === 'rename') { const v = prompt('Name:', p.name); if (v!=null) updatePool(id, { name:v.trim()||p.name }); }
    else if (paction === 'depth') { const v = parseFloat(prompt('Depth (ft):', p.depth_ft)); if (!isNaN(v) && v>0) updatePool(id, { depth_ft:v }); }
    else if (paction === 'capture') captureMapForPool(id);
    else if (paction === 'edit') { try { draw.changeMode('direct_select', { featureId: p.drawId }); } catch(e){} hint('Drag vertices to refine. Click off the polygon to finish.'); }
    else if (paction === 'delete') {
      appConfirm({
        title: 'Delete this pool?',
        body: `"${p.name}" will be removed. You can Undo afterward.`,
        okLabel: 'Delete', danger: true,
      }).then(ok => { if (ok) removePool(id); });
    }
  }
});

// Map click: routes to merge-mode or wand depending on active mode.
map.on('click', async (e) => {
  if (S.mergeMode) {
    await onMergeModeClick(e.lngLat, e.point);
    return;
  }
  if (!S.magicWand) return;
  const features = map.queryRenderedFeatures(e.point);
  if (features.some(f => f.source === 'mapbox-gl-draw-hot' || f.source === 'mapbox-gl-draw-cold')) return;
  await magicWandAtLngLat(e.lngLat);
});

// Right-click → context menu. If over a drawn pool polygon, pool menu; else map menu.
map.on('contextmenu', (e) => {
  e.preventDefault();
  const featureIds = draw.getFeatureIdsAt(e.point) || [];
  let poolId = null;
  for (const fid of featureIds) {
    const p = S.pools.find(x => x.drawId === fid);
    if (p) { poolId = p.id; break; }
  }
  if (poolId) showPoolContextMenu(e.originalEvent, poolId);
  else showMapContextMenu(e.originalEvent, e.lngLat);
});
// Also support right-click on a catalog pool card (optional discoverability)
document.getElementById('ap-pool-list').addEventListener('contextmenu', (ev) => {
  const card = ev.target.closest('[data-pool]');
  if (!card) return;
  ev.preventDefault();
  showPoolContextMenu(ev, card.dataset.pool);
});

// Live-recompute gallons as depth changes in the review card.
['ap-review-depth'].forEach(id => {
  const el = $(id); if (!el) return;
  el.addEventListener('input', () => {
    const p = S.pools.find(x => x.id === S.pendingPoolId);
    if (!p) return;
    const d = parseFloat(el.value);
    const depth = (!isNaN(d) && d > 0) ? d : p.depth_ft;
    const gal = p.sq_m * SQFT_PER_SQM * depth * 7.48052;
    $('ap-review-stats').textContent = `${fmt(gal)} gal est.`;
  });
});

// Enter key in query = locate
$('ap-query').addEventListener('keydown', (e) => { if (e.key === 'Enter') onLocate(); });

// Name field = autocomplete search (hotels, resorts, addresses)
wireNameAutocomplete();

// ⌘Z / Ctrl+Z = undo (skip when typing in inputs)
document.addEventListener('keydown', (e) => {
  if ((e.metaKey || e.ctrlKey) && !e.shiftKey && (e.key === 'z' || e.key === 'Z')) {
    const tag = (e.target?.tagName || '').toLowerCase();
    if (tag === 'input' || tag === 'textarea' || e.target?.isContentEditable) return;
    e.preventDefault();
    onUndo();
  }
});

// Enter in the review card = Register; Esc = Discard (only when a pending pool exists)
document.addEventListener('keydown', (e) => {
  if (!S.pendingPoolId) return;
  const inReview = e.target.closest && e.target.closest('#ap-review');
  if (e.key === 'Enter' && inReview) { e.preventDefault(); onReviewRegister(); }
  else if (e.key === 'Escape' && inReview) { e.preventDefault(); onReviewDiscard(); }
});

// ─── Draw style: cyan polygons matching brand ────────────────
function mapboxDrawStyles() {
  return [
    // Registered (captured) pools — solid BLUE.
    { id: 'gl-draw-polygon-fill-registered', type: 'fill', filter: ['all',['==','$type','Polygon'],['!=','role','boundary'],['==','registered',true]],
      paint: { 'fill-color': '#00b4d8', 'fill-opacity': 0.28 }},
    { id: 'gl-draw-polygon-stroke-registered', type: 'line', filter: ['all',['==','$type','Polygon'],['!=','role','boundary'],['==','registered',true]],
      layout: { 'line-cap':'round', 'line-join':'round' }, paint: { 'line-color':'#00b4d8', 'line-width':2.5 }},
    // Draft / edit mode — RED dashed outline.
    { id: 'gl-draw-polygon-fill-draft', type: 'fill', filter: ['all',['==','$type','Polygon'],['!=','role','boundary'],['!=','registered',true]],
      paint: { 'fill-color': '#ef4444', 'fill-opacity': 0.2 }},
    { id: 'gl-draw-polygon-stroke-draft', type: 'line', filter: ['all',['==','$type','Polygon'],['!=','role','boundary'],['!=','registered',true]],
      layout: { 'line-cap':'round', 'line-join':'round' }, paint: { 'line-color':'#ef4444', 'line-width':2.5, 'line-dasharray':[2,2] }},
    { id: 'gl-draw-polygon-boundary', type: 'line', filter: ['all',['==','$type','Polygon'],['==','role','boundary']],
      layout: { 'line-cap':'round', 'line-join':'round' }, paint: { 'line-color':'#f0a500', 'line-width':3, 'line-dasharray':[2,2] }},
    { id: 'gl-draw-polygon-boundary-fill', type: 'fill', filter: ['all',['==','$type','Polygon'],['==','role','boundary']],
      paint: { 'fill-color': '#f0a500', 'fill-opacity': 0.05 }},
    { id: 'gl-draw-polygon-and-line-vertex-halo-active', type: 'circle', filter: ['all',['==','meta','vertex'],['==','$type','Point'],['!=','mode','static']],
      paint: { 'circle-radius':5, 'circle-color':'#fff' }},
    { id: 'gl-draw-polygon-and-line-vertex-active', type: 'circle', filter: ['all',['==','meta','vertex'],['==','$type','Point'],['!=','mode','static']],
      paint: { 'circle-radius':3, 'circle-color':'#00b4d8' }},
    { id: 'gl-draw-line-active', type:'line', filter:['all',['==','$type','LineString'],['==','active','true']],
      layout:{'line-cap':'round','line-join':'round'}, paint:{'line-color':'#48cae4','line-width':2,'line-dasharray':[0.2,2]}},
  ];
}

// ─── Boot ────────────────────────────────────────────────────
map.on('load', () => {
  setStatus('Ready', 'ready');
  hint('<strong>Locate a property</strong> → trace each pool (or use the wand) → review details below → <strong>Register</strong> → next pool.');
  // Seed the property centre with the initial map centre so the Centre button
  // + property flag work from the first frame, even before a geocode.
  if (!S.propertyCenter) {
    setPropertyCenter([map.getCenter().lng, map.getCenter().lat], Math.round(map.getZoom()));
  }
});
// Toggle the property flag visibility as the user zooms in/out.
map.on('zoomend', updatePropertyMarkerVisibility);
map.on('zoom', updatePropertyMarkerVisibility);

// ═══════════════════════════════════════════════════════════════════
// AR2_MAP bridge — consumed by the ROI Calculator wrapper (Suite build).
// Stays inert when this IIFE is deployed standalone (no calculator host).
// ═══════════════════════════════════════════════════════════════════
window.AR2_MAP = {
  // Count of registered pools (drafts excluded).
  getRegisteredCount() {
    return S.pools.filter(p => p.registered).length;
  },
  // True if any pool is still in draft state.
  hasDrafts() {
    return S.pools.some(p => !p.registered);
  },
  // Return pools as ROI-Calculator-compatible body objects (S.bodies shape),
  // including polygon/sq_m/image for later recall and the divergence badge.
  getBodies() {
    const propertyName = ($('ap-name')?.value || '').trim();
    return S.pools.filter(p => p.registered).map((p, i) => {
      const body = {
        id: Date.now() + i,
        label: p.name,
        poolType: 'chlorine',
        inputMode: 'surface',        // new mode: sq ft + depth → gallons
        length: '', width: '',
        surface_sqft: Math.round(p.sq_m * SQFT_PER_SQM * 10) / 10,
        depth: String(p.depth_ft),
        manualGallons: '',
        co2Use: false,
        image: p.image || null,
        // Map-origin metadata (optional — calculator ignores if absent)
        fromMap: true,
        polygon: JSON.parse(JSON.stringify(p.polygon)),
        sq_m: p.sq_m,
        number: p.number,
        notes: p.notes || '',
      };
      for (const pp of PIPES) body[pp.k] = p[pp.k] | 0;
      return body;
    });
  },
  // Dump enough state to restore the map view on archive recall.
  exportSnapshot() {
    return {
      propertyName: ($('ap-name')?.value || '').trim(),
      addressQuery: ($('ap-query')?.value || '').trim(),
      center: map.getCenter().toArray(),
      zoom: map.getZoom(),
      nextPoolNumber: S.nextPoolNumber,
      boundary: S.boundary ? JSON.parse(JSON.stringify(S.boundary)) : null,
      pools: S.pools.map(p => {
        const snap = {
          name: p.name, type: p.type, sq_m: p.sq_m, depth_ft: p.depth_ft,
          source: p.source, notes: p.notes || '',
          image: p.image || null, registered: !!p.registered,
          number: p.number || null,
          polygon: JSON.parse(JSON.stringify(p.polygon)),
        };
        for (const pp of PIPES) snap[pp.k] = p[pp.k] | 0;
        return snap;
      }),
    };
  },
  // Restore on archive recall.
  loadSnapshot(snap) {
    if (!snap) return;
    resetAll(false);
    if (snap.propertyName && $('ap-name')) $('ap-name').value = snap.propertyName;
    if (snap.addressQuery && $('ap-query')) $('ap-query').value = snap.addressQuery;
    if (snap.center) map.flyTo({ center: snap.center, zoom: snap.zoom || 18, duration: 800 });
    if (snap.nextPoolNumber != null) S.nextPoolNumber = snap.nextPoolNumber;
    if (snap.boundary) {
      const [id] = draw.add(snap.boundary);
      draw.setFeatureProperty(id, 'role', 'boundary');
      S.boundary = draw.get(id);
    }
    for (const pr of snap.pools || []) {
      const [drawId] = draw.add(pr.polygon);
      draw.setFeatureProperty(drawId, 'role', 'pool');
      draw.setFeatureProperty(drawId, 'registered', !!pr.registered);
      const restored = { ...pr, drawId, polygon: draw.get(drawId) };
      S.pools.push(restored);
    }
    renumberPools();
    renderCatalog();
  },
  // Call when the #ap2 container becomes visible after being display:none —
  // MapLibre needs to recompute its canvas dimensions.
  resize() {
    try { map.resize(); } catch (e) {}
  },
  // Property name input exposed so the calculator can sync it both ways.
  getPropertyName() { return ($('ap-name')?.value || '').trim(); },
  setPropertyName(n) { if ($('ap-name')) $('ap-name').value = n || ''; },
};

})();
