(function(){
'use strict';

/* ── SVG Icon set — replaces all emoji ── */
var I={
  check:  '<svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 6l3 3 5-5"/></svg>',
  close:  '<svg width="9" height="9" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M2 2l8 8M10 2l-8 8"/></svg>',
  ruler:  '<svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="5" width="14" height="6" rx="1"/><path d="M4 5v3M7 5v2M10 5v3M13 5v2"/></svg>',
  drop:   '<svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M8 2C6 5 3 9 3 11.5a5 5 0 0010 0C13 9 10 5 8 2z"/></svg>',
  dropLg: '<svg width="20" height="20" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M8 2C6 5 3 9 3 11.5a5 5 0 0010 0C13 9 10 5 8 2z"/></svg>',
  up:     '<svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M8 13V3M3 8l5-5 5 5"/></svg>',
  zap:    '<svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>',
  print:  '<svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4V1h8v3"/><rect x="1" y="4" width="14" height="7" rx="1"/><path d="M4 11v4h8v-4"/><circle cx="12" cy="7.5" r="0.7" fill="currentColor" stroke="none"/></svg>',
  play:   '<svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 3l8 5-8 5V3z"/></svg>',
  playWh: '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 3l8 5-8 5V3z"/></svg>',
  file:   '<svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 2h7l3 3v9H3V2z"/><path d="M10 2v4h3"/><path d="M6 8h4M6 11h4"/></svg>',
  bldg:   '<svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="2" width="14" height="13" rx="1"/><path d="M5 15V9h6v6M5 5h2M9 5h2M5 7h2M9 7h2"/></svg>',
  camera: '<svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="5" width="14" height="9" rx="1"/><circle cx="8" cy="10" r="2.5"/><path d="M5 5l1.5-3h3L11 5"/></svg>',
  yt:     '<svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="3" width="14" height="10" rx="2"/><path d="M7 6.5l4 2-4 2v-4z" fill="currentColor" stroke="none"/></svg>',
  save:   '<svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 1h8l3 3v10a1 1 0 01-1 1H3a1 1 0 01-1-1V2a1 1 0 011-1z"/><path d="M5 1v5h6V1"/><path d="M4 10h8"/><path d="M4 13h5"/></svg>',
  bank:   '<svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="4" width="14" height="2" rx="1"/><path d="M3 6v6M7 6v6M13 6v6"/><rect x="1" y="12" width="14" height="2" rx="1"/><path d="M8 1L2 4h12L8 1z"/></svg>',
  port:   '<svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="1" width="10" height="14" rx="1"/><path d="M6 4h4M6 7h4M6 10h2"/></svg>',
  land:   '<svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="3" width="14" height="10" rx="1"/><path d="M4 6h8M4 9h8M4 12h5"/></svg>',
  trash:  '<svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M2 4h12M6 4V2h4v2M5 4v9a1 1 0 001 1h4a1 1 0 001-1V4"/><path d="M7 7v4M9 7v4"/></svg>',
  back:   '<svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M10 3L5 8l5 5"/></svg>',
};

/* ── Device data (from types.ts DEVICE_PRICES / MONTHLY_RATES) ── */
var PIPES=[
  {k:'pipe_2in',  sz:'2"',  price:2995,  rate:99,      flow:'Up to ~40K gal'},
  {k:'pipe_3in',  sz:'3"',  price:4495,  rate:99,      flow:'Up to ~80K gal'},
  {k:'pipe_4in',  sz:'4"',  price:6495,  rate:139,     flow:'Up to ~150K gal'},
  {k:'pipe_6in',  sz:'6"',  price:14995, rate:329,     flow:'Up to ~400K gal'},
  {k:'pipe_8in',  sz:'8"',  price:29995, rate:649,     flow:'Up to ~900K gal'},
  {k:'pipe_10in', sz:'10"', price:74995, rate:1601.19, flow:'Large systems'},
];

/* ── Default YouTube videos (from ExportSection.tsx DEFAULT_YOUTUBE_URLS) ── */
var DEFAULT_YT_URLS=[
  'https://youtu.be/zWqMcZFWpyE?si=Zg51FInXR-FHV1J9',
  'https://youtu.be/ce1GvhrSGbk',
];

/* ── Default comments (from ExportSection.tsx DEFAULT_COMMENTS) ── */
var DEFAULT_COMMENTS='';

/* ── Export section state (mirrors ExportSection.tsx local state) ── */
var EX={
  scenario:'advantage',   // 'advantage' | 'purchase'
  bothScenarios:true,     // show both scenarios in report (default)
  layout:'portrait',      // 'portrait' | 'landscape'
  inclWater:true,         // include water loss 5yr section
  inclCover:false,        // include cover page
  inclFactSheet:false,    // include fact sheet
  inclPoolProfiles:false, // include pool profiles page
  images:[],              // [{id, data, comment}]
  ytEntries:[],           // [{id, url, videoId, comment}]
  showYtDrawer:false,
  ytPending:'',
  comments:DEFAULT_COMMENTS,
  exporting:false,
  saving:false,           // true while save is in progress
  saveStatus:null,        // null | 'saved' | 'error'
  previewing:false,       // true while in-browser preview is active
};

/* ── View state ('form' | 'bank') ── */
var VIEW='form';

/* ── Archive session-unlock flag (in-memory only, resets on reload) ── */
var ARCHIVE_UNLOCKED=false;
var ARCHIVE_PASSCODE='1116';

/* ── Archive passcode modal ── */
function showArchivePasswordModal(onUnlock){
  var existing=document.getElementById('ar2-pw-modal');
  if(existing&&existing.parentNode) existing.parentNode.removeChild(existing);
  var m=document.createElement('div');
  m.id='ar2-pw-modal';
  m.style.cssText='position:fixed;inset:0;background:rgba(4,15,30,.75);backdrop-filter:blur(4px);-webkit-backdrop-filter:blur(4px);z-index:999998;display:flex;align-items:center;justify-content:center;padding:20px;font-family:"DM Sans","Helvetica Neue",Arial,sans-serif;';
  m.innerHTML='<div style="background:linear-gradient(145deg,#0a2540,#071628);border:1px solid rgba(0,180,216,.3);border-radius:10px;padding:28px;max-width:380px;width:100%;box-shadow:0 10px 40px rgba(0,0,0,.5);">'
    +'<div style="font-family:\'Bebas Neue\',sans-serif;font-size:18px;letter-spacing:2px;color:#48cae4;margin-bottom:10px">ARCHIVE ACCESS</div>'
    +'<div style="font-size:13px;color:#cfe2eb;line-height:1.6;margin-bottom:16px">Enter the passcode to view saved assessments.</div>'
    +'<input id="ar2-pw-input" type="password" inputmode="numeric" autocomplete="off" style="width:100%;background:rgba(0,0,0,.3);border:1px solid rgba(0,180,216,.3);color:#fff;padding:10px 12px;border-radius:6px;font-size:14px;font-family:\'JetBrains Mono\',monospace;letter-spacing:3px;margin-bottom:10px;box-sizing:border-box;outline:none" placeholder="\u2022\u2022\u2022\u2022" />'
    +'<div id="ar2-pw-err" style="font-size:11px;color:#ef4444;min-height:15px;margin-bottom:12px"></div>'
    +'<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">'
      +'<button id="ar2-pw-cancel" style="background:rgba(255,255,255,.08);color:#cfe2eb;border:1px solid rgba(255,255,255,.15);padding:10px 12px;border-radius:6px;cursor:pointer;font-size:12px;font-weight:600;font-family:inherit">Cancel</button>'
      +'<button id="ar2-pw-unlock" style="background:linear-gradient(135deg,#00b4d8,#48cae4);color:#fff;border:none;padding:10px 12px;border-radius:6px;cursor:pointer;font-size:12px;font-weight:600;font-family:inherit">Unlock</button>'
    +'</div>'
  +'</div>';
  document.body.appendChild(m);
  var input=document.getElementById('ar2-pw-input');
  var err=document.getElementById('ar2-pw-err');
  var close=function(){if(m.parentNode)m.parentNode.removeChild(m);};
  var submit=function(){
    if(input.value===ARCHIVE_PASSCODE){
      close();
      onUnlock();
    } else {
      err.textContent='Incorrect passcode';
      input.value='';
      input.focus();
    }
  };
  document.getElementById('ar2-pw-unlock').onclick=submit;
  document.getElementById('ar2-pw-cancel').onclick=close;
  input.addEventListener('keydown',function(e){
    if(e.key==='Enter'){e.preventDefault();submit();}
    else if(e.key==='Escape'){close();}
  });
  m.addEventListener('click',function(e){if(e.target===m)close();});
  setTimeout(function(){input.focus();},50);
}

/* ── YouTube helpers ── */
function ytVideoId(url){
  var pats=[
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
    /youtube\.com\/shorts\/([^&\n?#]+)/,
  ];
  for(var i=0;i<pats.length;i++){var m=url.match(pats[i]);if(m)return m[1];}
  return null;
}
function ytThumbUrl(videoId){ return 'https://img.youtube.com/vi/'+videoId+'/hqdefault.jpg'; }

/* ── Lazy-load html2canvas + jsPDF on first use ── */
function loadPDFLibs(cb){
  if(window.html2canvas && window.jspdf){cb(null);return;}
  var s1=document.createElement('script');
  s1.src='https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js';
  s1.onerror=function(){cb(new Error('html2canvas failed to load'));};
  s1.onload=function(){
    var s2=document.createElement('script');
    s2.src='https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js';
    s2.onerror=function(){cb(new Error('jsPDF failed to load'));};
    s2.onload=function(){cb(null);};
    document.head.appendChild(s2);
  };
  document.head.appendChild(s1);
}

/* ══════════════════════════════════════════════════════
   MEMORY BANK — persistent storage
   Keys: ar2:index  /  ar2:report:{id}
   ══════════════════════════════════════════════════════ */
var BANK_IDX='ar2:index';
var BANK_PFX='ar2:report:';

// localStorage wrapper (Webflow provides window.storage; define fallback for standalone)
if(!window.storage){
  window.storage={
    get:function(k){try{return Promise.resolve(localStorage.getItem(k));}catch(e){return Promise.reject(e);}},
    set:function(k,v){try{localStorage.setItem(k,v);return Promise.resolve();}catch(e){return Promise.reject(e);}},
    delete:function(k){try{localStorage.removeItem(k);return Promise.resolve();}catch(e){return Promise.reject(e);}}
  };
}

function bankGetIndex(){
  return window.storage.get(BANK_IDX)
    .then(function(r){if(!r)return[];var s=typeof r==='string'?r:r.value;return s?JSON.parse(s):[];})
    .catch(function(){return [];});
}

function bankSaveReport(){
  if(EX.saving)return;
  // Check for duplicate property name in archive before saving
  var targetName=(S.propertyName||'Unnamed Property').trim().toLowerCase();
  bankGetIndex().then(function(idx){
    var dupes=idx.filter(function(e){
      return (e.propertyName||'').trim().toLowerCase()===targetName;
    });
    if(dupes.length===0){
      bankSaveReportImpl(null);
    } else {
      showSaveChoiceModal(S.propertyName||'Unnamed Property', dupes.length,
        function(){ bankSaveReportImpl(dupes.map(function(d){return d.id;})); }, // Update existing
        function(){ bankSaveReportImpl(null); }                                   // Save as new
        // Cancel: no-op
      );
    }
  }).catch(function(){ bankSaveReportImpl(null); });
}

/* ── Duplicate-save choice modal ── */
function showSaveChoiceModal(propName, dupCount, onUpdate, onSaveNew){
  var existing=document.getElementById('ar2-save-modal');
  if(existing&&existing.parentNode) existing.parentNode.removeChild(existing);
  var m=document.createElement('div');
  m.id='ar2-save-modal';
  m.style.cssText='position:fixed;inset:0;background:rgba(4,15,30,.75);backdrop-filter:blur(4px);-webkit-backdrop-filter:blur(4px);z-index:999998;display:flex;align-items:center;justify-content:center;padding:20px;font-family:"DM Sans","Helvetica Neue",Arial,sans-serif;';
  m.innerHTML='<div style="background:linear-gradient(145deg,#0a2540,#071628);border:1px solid rgba(0,180,216,.3);border-radius:10px;padding:28px;max-width:440px;width:100%;box-shadow:0 10px 40px rgba(0,0,0,.5);">'
    +'<div style="font-family:\'Bebas Neue\',sans-serif;font-size:18px;letter-spacing:2px;color:#48cae4;margin-bottom:10px">DUPLICATE ASSESSMENT</div>'
    +'<div style="font-size:13px;color:#cfe2eb;line-height:1.6;margin-bottom:22px">An assessment named <strong style="color:#fff">"'+esc(propName)+'"</strong> '+(dupCount>1?'('+dupCount+' copies) ':'')+'already exists in your archive.<br><br>Update the existing entry, save a new copy, or cancel?</div>'
    +'<div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px">'
      +'<button id="ar2-sv-update" style="background:linear-gradient(135deg,#00b4d8,#48cae4);color:#fff;border:none;padding:10px 12px;border-radius:6px;cursor:pointer;font-size:12px;font-weight:600;font-family:inherit">Update Existing</button>'
      +'<button id="ar2-sv-new" style="background:linear-gradient(135deg,#f0a500,#f7c948);color:#071628;border:none;padding:10px 12px;border-radius:6px;cursor:pointer;font-size:12px;font-weight:600;font-family:inherit">Save as New</button>'
      +'<button id="ar2-sv-cancel" style="background:rgba(255,255,255,.08);color:#cfe2eb;border:1px solid rgba(255,255,255,.15);padding:10px 12px;border-radius:6px;cursor:pointer;font-size:12px;font-weight:600;font-family:inherit">Cancel</button>'
    +'</div>'
  +'</div>';
  document.body.appendChild(m);
  var close=function(){if(m.parentNode)m.parentNode.removeChild(m);};
  document.getElementById('ar2-sv-update').onclick=function(){close();onUpdate();};
  document.getElementById('ar2-sv-new').onclick=function(){close();onSaveNew();};
  document.getElementById('ar2-sv-cancel').onclick=close;
  m.addEventListener('click',function(e){if(e.target===m)close();});
}

function bankSaveReportImpl(replaceIds){
  if(EX.saving)return;
  EX.saving=true; EX.saveStatus=null; renderDevices();
  // Safety timeout — reset saving state if Promise never resolves
  setTimeout(function(){if(EX.saving){EX.saving=false;EX.saveStatus='error';renderDevices();}},10000);
  var R=calcROI();
  var id=Date.now().toString(36)+Math.random().toString(36).slice(2,6);
  var snapshot={
    id:id,
    propertyName:S.propertyName||'Unnamed Property',
    savedAt:new Date().toISOString(),
    summary:{
      monthly:R.total_mo, annual:R.total_yr,
      devices:R.total_dev, poolGallons:S.pool_gallons,
      payback:R.payback, inv:R.inv,
      savingsWeight:S.savings_weight,
    },
    state:{
      bodies:S.bodies,
      manualVolume:S.manualVolume, manualTotalGallons:S.manualTotalGallons,
      manualChlorineGallons:S.manualChlorineGallons, manualCo2:S.manualCo2, manualPoolCount:S.manualPoolCount,
      devicesByPool:S.devicesByPool,
      pool_gallons:S.pool_gallons, chlorine_pool_gallons:S.chlorine_pool_gallons,
      co2_pool_gallons:S.co2_pool_gallons,
      water_cost_per_gal:S.water_cost_per_gal, water_loss_reduction:S.water_loss_reduction,
      chlorine_cost:S.chlorine_cost, chlorine_reduction:S.chlorine_reduction,
      muriatic_cost:S.muriatic_cost, muriatic_reduction:S.muriatic_reduction,
      bicarb_cost:S.bicarb_cost, bicarb_reduction:S.bicarb_reduction,
      calcium_cost:S.calcium_cost, calcium_reduction:S.calcium_reduction,
      cya_cost:S.cya_cost, cya_reduction:S.cya_reduction,
      co2_cost:S.co2_cost,
      algaecide_cost:S.algaecide_cost, algaecide_reduction:S.algaecide_reduction,
      clarifier_cost:S.clarifier_cost, clarifier_reduction:S.clarifier_reduction,
      pipe_2in:S.pipe_2in, pipe_3in:S.pipe_3in, pipe_4in:S.pipe_4in,
      pipe_6in:S.pipe_6in, pipe_8in:S.pipe_8in, pipe_10in:S.pipe_10in,
      discount:S.discount, savings_weight:S.savings_weight,
      propertyName:S.propertyName,
    },
    ex:{
      scenario:EX.scenario, bothScenarios:EX.bothScenarios,
      layout:EX.layout, inclWater:EX.inclWater, inclFactSheet:EX.inclFactSheet, inclPoolProfiles:EX.inclPoolProfiles,
      comments:EX.comments, ytEntries:EX.ytEntries,
    },
  };
  var entry={id:id, propertyName:snapshot.propertyName, savedAt:snapshot.savedAt, summary:snapshot.summary};

  window.storage.set(BANK_PFX+id, JSON.stringify(snapshot))
    .then(function(){
      // If updating, delete the old snapshot blobs first
      if(replaceIds&&replaceIds.length){
        return Promise.all(replaceIds.map(function(rid){
          return window.storage.delete(BANK_PFX+rid).catch(function(){});
        }));
      }
    })
    .then(function(){ return bankGetIndex(); })
    .then(function(idx){
      // Remove old index entries if updating
      if(replaceIds&&replaceIds.length){
        idx=idx.filter(function(e){return replaceIds.indexOf(e.id)===-1;});
      }
      idx.unshift(entry);
      return window.storage.set(BANK_IDX, JSON.stringify(idx));
    })
    .then(function(){
      EX.saving=false; EX.saveStatus='saved';
      renderDevices(); renderResults();
      setTimeout(function(){EX.saveStatus=null;renderDevices();renderResults();},3000);
    })
    .catch(function(){
      EX.saving=false; EX.saveStatus='error';
      renderDevices(); renderResults();
      setTimeout(function(){EX.saveStatus=null;renderDevices();renderResults();},4000);
    });
}

function bankDeleteReport(id){
  bankGetIndex().then(function(idx){
    idx=idx.filter(function(x){return x.id!==id;});
    return Promise.all([
      window.storage.delete(BANK_PFX+id).catch(function(){}),
      window.storage.set(BANK_IDX,JSON.stringify(idx))
    ]);
  }).then(function(){renderBank();}).catch(function(){renderBank();});
}

function bankRecall(snapshot){
  // Restore calculator state from snapshot
  Object.assign(S, snapshot.state);
  syncGallons();
  EX.scenario=snapshot.ex.scenario;
  EX.bothScenarios=snapshot.ex.bothScenarios;
  EX.layout=snapshot.ex.layout;
  EX.inclWater=snapshot.ex.inclWater;
  EX.inclFactSheet=snapshot.ex.inclFactSheet;
  EX.inclPoolProfiles=!!snapshot.ex.inclPoolProfiles;
  EX.comments=snapshot.ex.comments;
  EX.ytEntries=snapshot.ex.ytEntries||[];
  EX.images=[];
  EX.saving=false; EX.saveStatus=null;
  S.step=1;
  showView('form');
}

function bankDownloadPdf(snapshot, layout){
  // Temporarily swap global state, generate PDF, restore
  var savedS=JSON.parse(JSON.stringify(S));
  var savedEX=JSON.parse(JSON.stringify(EX));
  var savedImages=EX.images;
  Object.assign(S, snapshot.state);
  syncGallons();
  Object.assign(EX, snapshot.ex);
  EX.layout=layout;
  EX.images=[];
  generateReport();
  // Restore immediately — HTML is built synchronously before async PDF
  Object.assign(S, savedS);
  Object.assign(EX, savedEX);
  EX.images=savedImages;
}

/* ── Bank: load snapshot by id then trigger action ── */
function bankAction(id, action){
  window.storage.get(BANK_PFX+id)
    .then(function(r){
      if(!r){alert('Report not found. It may have been deleted.');renderBank();return;}
      var s=typeof r==='string'?r:r.value;
      var snap=JSON.parse(s);
      if(action==='recall') bankRecall(snap);
      else if(action==='portrait') bankDownloadPdf(snap,'portrait');
      else if(action==='landscape') bankDownloadPdf(snap,'landscape');
    })
    .catch(function(){alert('Could not load report.');});
}

/* ── Render Archive view ── */
function renderBank(){
  var el=document.getElementById('ar2-bank');
  if(!el)return;
  el.innerHTML='<div class="ar-bank-wrap"><div class="ar-bank-hero">'
    +'<div class="ar-bank-title">Saved Assessments</div>'
    +'<button class="ar-bank-act primary no-print" data-action="view-form">'
      +I.back+' Back to Calculator'
    +'</button>'
  +'</div><div class="ar-bank-loading">Loading\u2026</div></div>';

  bankGetIndex().then(function(idx){
    var wrap=el.querySelector('.ar-bank-wrap');
    if(!idx||idx.length===0){
      wrap.innerHTML='<div class="ar-bank-hero">'
        +'<div class="ar-bank-title">Saved Assessments</div>'
        +'<button class="ar-bank-act primary no-print" data-action="view-form">'+I.back+' Back to Calculator</button>'
      +'</div>'
      +'<div class="ar-bank-empty">'
        +I.bank
        +'<div style="font-size:15px;color:#fff;margin-bottom:8px">No saved assessments yet</div>'
        +'Complete an assessment and click <strong style="color:var(--t)">Archive</strong> to store it here.'
      +'</div>';
      return;
    }

    var selectMode=false;
    var selected={};

    var renderCards=function(list){
      if(!list.length){
        return '<div class="ar-bank-empty" style="padding:24px 0"><div style="color:var(--mu);font-size:13px">No results match your search.</div></div>';
      }
      return list.map(function(entry){
        var d=new Date(entry.savedAt);
        var dateStr=d.toLocaleDateString('en-US',{month:'short',day:'numeric',year:'numeric'});
        var s=entry.summary||{};
        var mo=s.monthly||0;
        var clr=mo>2000?'green':mo>500?'gold':'teal';
        var isSel=!!selected[entry.id];
        return '<div class="ar-bank-card'+(selectMode?' selmode':'')+(isSel?' selected':'')+'" data-row-id="'+entry.id+'">'
          +(selectMode?'<div class="ar-bank-chk"><input type="checkbox" data-sel-id="'+entry.id+'"'+(isSel?' checked':'')+'></div>':'')
          +'<div class="ar-bank-name">'
            +'<div class="ar-bank-prop">'+esc(entry.propertyName)+'</div>'
            +'<div class="ar-bank-date">'+dateStr+'</div>'
          +'</div>'
          +'<div class="ar-bank-cell"><div class="ar-bank-cell-val '+clr+'">'+fc(s.monthly,0)+'</div></div>'
          +'<div class="ar-bank-cell"><div class="ar-bank-cell-val">'+fc(s.annual,0)+'</div></div>'
          +'<div class="ar-bank-cell"><div class="ar-bank-cell-val">'+(s.inv?fc(s.inv,0):'\u2014')+'</div></div>'
          +'<div class="ar-bank-cell"><div class="ar-bank-cell-val">'+(s.savingsWeight!=null?Math.round(s.savingsWeight*100)+'%':'\u2014')+'</div></div>'
          +'<div class="ar-bank-cell"><div class="ar-bank-cell-val">'+(s.devices||'\u2014')+'</div></div>'
          +'<div class="ar-bank-cell"><div class="ar-bank-cell-val">'+(s.poolGallons?fn(s.poolGallons):'\u2014')+'</div></div>'
          +'<div class="ar-bank-cell"><div class="ar-bank-cell-val">'+(s.payback?Math.round(s.payback)+' mo':'\u2014')+'</div></div>'
          +'<div class="ar-bank-actions">'
            +'<button class="ar-bank-act primary" data-bank-action="recall" data-bank-id="'+entry.id+'" title="Load this assessment">'+I.file+'</button>'
            +'<button class="ar-bank-act" data-bank-action="portrait" data-bank-id="'+entry.id+'" title="Portrait PDF">'+I.port+'</button>'
            +'<button class="ar-bank-act" data-bank-action="landscape" data-bank-id="'+entry.id+'" title="Landscape PDF">'+I.land+'</button>'
            +'<button class="ar-bank-act danger" data-bank-action="delete" data-bank-id="'+entry.id+'" title="Delete">'+I.trash+'</button>'
          +'</div>'
        +'</div>';
      }).join('');
    };

    var getSelCount=function(){return Object.keys(selected).length;};

    var renderToolbar=function(){
      var cnt=getSelCount();
      var tb=document.getElementById('ar-bank-toolbar');
      if(!selectMode){if(tb)tb.style.display='none';return;}
      if(!tb)return;
      tb.style.display='flex';
      tb.innerHTML='<span class="ar-bank-sel-count">'+cnt+' selected</span>'
        +'<button class="ar-bank-sel-all" data-action="bank-sel-all">'+(cnt===currentList.length?'Deselect All':'Select All')+'</button>'
        +'<button class="ar-bank-del-sel"'+(cnt===0?' disabled':'')+' data-action="bank-del-selected">'+I.trash+' Delete Selected</button>';
    };

    var currentList=idx;

    var refreshList=function(){
      var theadEl=document.getElementById('ar-bank-thead');
      var listEl=document.getElementById(listId);
      if(theadEl){
        if(selectMode)theadEl.classList.add('selmode');
        else theadEl.classList.remove('selmode');
        var firstCol=theadEl.firstChild;
        if(selectMode&&firstCol&&!firstCol.classList.contains('ar-bank-chk')){
          var chkDiv=document.createElement('div');
          theadEl.insertBefore(chkDiv,firstCol);
        } else if(!selectMode&&firstCol&&firstCol.textContent===''){
          theadEl.removeChild(firstCol);
        }
      }
      if(listEl)listEl.innerHTML=renderCards(currentList);
      renderToolbar();
    };

    var listId='ar-bank-list-'+Date.now();
    var thead='<div class="ar-bank-thead" id="ar-bank-thead">'
      +'<div>Property</div><div>Monthly</div><div>Annual</div><div>Investment</div><div>Weight</div><div>Devices</div><div>Volume</div><div>Payback</div><div></div>'
    +'</div>';
    wrap.innerHTML='<div class="ar-bank-hero">'
      +'<div class="ar-bank-title">Saved Assessments <span>\u00b7 '+idx.length+'</span></div>'
      +'<div style="display:flex;align-items:center;gap:8px">'
        +'<button class="ar-bank-act" data-action="bank-toggle-select" title="Select multiple">'+I.check+' Select</button>'
        +'<button class="ar-bank-act primary no-print" data-action="view-form">'+I.back+' Back to Calculator</button>'
      +'</div>'
    +'</div>'
    +(idx.length>3?'<input class="ar-bank-search" id="ar-bank-search" placeholder="Search by property name\u2026" type="search" />':'')
    +'<div class="ar-bank-toolbar" id="ar-bank-toolbar" style="display:none"></div>'
    +thead
    +'<div class="ar-bank-list" id="'+listId+'">'+renderCards(idx)+'</div>';

    // Wire up live search
    var searchEl=document.getElementById('ar-bank-search');
    if(searchEl){
      searchEl.addEventListener('input',function(){
        var q=searchEl.value.toLowerCase().trim();
        currentList=q?idx.filter(function(e){return e.propertyName.toLowerCase().indexOf(q)>-1;}):idx;
        var listEl=document.getElementById(listId);
        if(listEl)listEl.innerHTML=renderCards(currentList);
      });
    }

    // Delegated event handlers for select mode
    el.addEventListener('click',function bankClick(e){
      // Toggle select mode
      var togSel=e.target.closest('[data-action="bank-toggle-select"]');
      if(togSel){
        selectMode=!selectMode;
        selected={};
        togSel.innerHTML=selectMode?I.check+' Done':I.check+' Select';
        refreshList();
        return;
      }
      // Checkbox toggle
      var chk=e.target.closest('[data-sel-id]');
      if(chk){
        var sid=chk.dataset.selId;
        if(selected[sid])delete selected[sid];
        else selected[sid]=true;
        var row=chk.closest('.ar-bank-card');
        if(row)row.classList.toggle('selected',!!selected[sid]);
        renderToolbar();
        return;
      }
      // Click row to toggle in select mode
      if(selectMode){
        var row=e.target.closest('.ar-bank-card[data-row-id]');
        if(row&&!e.target.closest('.ar-bank-act')&&!e.target.closest('input')){
          var rid=row.dataset.rowId;
          if(selected[rid])delete selected[rid];
          else selected[rid]=true;
          row.classList.toggle('selected',!!selected[rid]);
          var cb=row.querySelector('[data-sel-id]');
          if(cb)cb.checked=!!selected[rid];
          renderToolbar();
          return;
        }
      }
      // Select all / deselect all
      var selAll=e.target.closest('[data-action="bank-sel-all"]');
      if(selAll){
        var allSelected=getSelCount()===currentList.length;
        selected={};
        if(!allSelected)currentList.forEach(function(e){selected[e.id]=true;});
        refreshList();
        return;
      }
      // Delete selected
      var delSel=e.target.closest('[data-action="bank-del-selected"]');
      if(delSel&&getSelCount()>0){
        var cnt=getSelCount();
        if(!confirm('Delete '+cnt+' assessment'+(cnt>1?'s':'')+'? This cannot be undone.'))return;
        var ids=Object.keys(selected);
        bankGetIndex().then(function(curIdx){
          var remaining=curIdx.filter(function(x){return!selected[x.id];});
          var deletes=ids.map(function(id){return window.storage.delete(BANK_PFX+id).catch(function(){});});
          deletes.push(window.storage.set(BANK_IDX,JSON.stringify(remaining)));
          return Promise.all(deletes);
        }).then(function(){
          selected={};selectMode=false;
          renderBank();
        }).catch(function(){renderBank();});
        return;
      }
    });
  }).catch(function(){
    var wrap=el.querySelector('.ar-bank-wrap');
    if(wrap) wrap.innerHTML+='<div style="color:#f87171;padding:16px">Could not load saved reports.</div>';
  });
}

/* ── Reset app to fresh state ── */
function resetApp(){
  S.step=0; S.activeTab='advantage';
  S.propertyName='';
  S.bodies=[{id:Date.now(),label:'Pool 1',poolType:'chlorine',inputMode:'dimensions',length:'',width:'',depth:'',manualGallons:'',co2Use:false,image:null,pipe_2in:0,pipe_3in:0,pipe_4in:0,pipe_6in:0,pipe_8in:0,pipe_10in:0}];
  S.devicesByPool=false;
  S.pool_gallons=0; S.chlorine_pool_gallons=0; S.co2_pool_gallons=0;
  S.manualVolume=false; S.manualTotalGallons=''; S.manualChlorineGallons=''; S.manualCo2=false; S.manualPoolCount=1;
  S.pipe_2in=0; S.pipe_3in=0; S.pipe_4in=0; S.pipe_6in=0; S.pipe_8in=0; S.pipe_10in=0;
  S.discount=0; S.savings_weight=1;
  EX.images=[]; EX.ytEntries=[]; EX.comments='';
  EX.scenario='advantage'; EX.bothScenarios=true; EX.layout='portrait';
  EX.inclCover=false; EX.inclWater=true; EX.inclFactSheet=false; EX.inclPoolProfiles=false;
  EX.saving=false; EX.saveStatus=null; EX.exporting=false;
  initDefaultYt();
  if(VIEW==='bank') showView('form');
  else render();
}

/* ── Switch between form and bank views ── */
function showView(v){
  VIEW=v;
  var mainLayout=document.getElementById('ar2-main-layout');
  var bankEl=document.getElementById('ar2-bank');
  var navBtn=document.getElementById('ar2-bank-nav');
  var stepper=document.getElementById('ar2-stepper');
  var navBar=document.getElementById('ar2-nav');
  var barActs=document.getElementById('ar2-bar-actions');
  if(v==='bank'){
    if(mainLayout)mainLayout.style.display='none';
    if(bankEl){bankEl.style.display='block';renderBank();}
    if(navBtn){navBtn.textContent=''; navBtn.innerHTML=I.back+' Calculator'; navBtn.classList.add('on');}
    if(stepper)stepper.style.display='none';
    if(navBar)navBar.style.display='none';
    if(barActs)barActs.style.gridColumn='2 / -1';
  } else {
    if(mainLayout)mainLayout.style.display='';
    if(bankEl)bankEl.style.display='none';
    if(navBtn){navBtn.textContent='Archive'; navBtn.classList.remove('on');}
    if(stepper)stepper.style.display='';
    if(navBar)navBar.style.display='';
    if(barActs)barActs.style.gridColumn='';
    render();
  }
}

/* ── Init default YouTube entries ── */
function initDefaultYt(){
  DEFAULT_YT_URLS.forEach(function(url){
    var vid=ytVideoId(url);
    if(vid) EX.ytEntries.push({id:'yt-'+vid,url:url,videoId:vid,comment:''});
  });
}



/* ── Chemical defs ── */
var CHEMS=[
  {k:'chlorine',  lbl:'Chlorine',       ck:'chlorine_cost',   rk:'chlorine_reduction',  chlGal:true,  isCo2:false},
  {k:'muriatic',  lbl:'Muriatic Acid',  ck:'muriatic_cost',   rk:'muriatic_reduction',  chlGal:false, isCo2:false},
  {k:'bicarb',    lbl:'Bicarbonate',    ck:'bicarb_cost',     rk:'bicarb_reduction',    chlGal:false, isCo2:false},
  {k:'calcium',   lbl:'Calcium',        ck:'calcium_cost',    rk:'calcium_reduction',   chlGal:false, isCo2:false},
  {k:'cya',       lbl:'Cyanuric Acid',  ck:'cya_cost',        rk:'cya_reduction',       chlGal:false, isCo2:false},
  {k:'co2',       lbl:'CO₂',            ck:'co2_cost',        rk:null,                  chlGal:false, isCo2:true},
  {k:'algaecide', lbl:'Algaecide',      ck:'algaecide_cost',  rk:'algaecide_reduction', chlGal:false, isCo2:false},
  {k:'clarifier', lbl:'Clarifier',      ck:'clarifier_cost',  rk:'clarifier_reduction', chlGal:false, isCo2:false},
];

var STEPS=['pool-system','settings','export'];
var STEP_LBLS=['Pool & System','Pricing & Settings','Export'];

/* ── State — DEFAULT_INPUTS from types.ts + bodies of water ── */
var S={
  step:0, activeTab:'purchase',
  propertyName:'',
  // Bodies of water — inputMode: 'dimensions' | 'gallons', co2Use per pool (default false)
  bodies:[{id:1, label:'Pool 1', poolType:'chlorine', inputMode:'dimensions', length:'', width:'', depth:'', manualGallons:'', co2Use:false, image:null, pipe_2in:0, pipe_3in:0, pipe_4in:0, pipe_6in:0, pipe_8in:0, pipe_10in:0}],
  // Derived from bodies (auto-synced via syncGallons)
  pool_gallons:0, chlorine_pool_gallons:0, co2_pool_gallons:0,
  // Manual volume override (when dimensions unavailable for all pools)
  manualVolume:false, manualTotalGallons:'', manualChlorineGallons:'', manualCo2:false, manualPoolCount:1,
  devicesByPool:false,
  // Pipe devices
  pipe_2in:0, pipe_3in:0, pipe_4in:0, pipe_6in:0, pipe_8in:0, pipe_10in:0,
  // Pricing
  discount:0, savings_weight:1,
  // Water & chemicals (exact DEFAULT_INPUTS from types.ts)
  water_cost_per_gal:0.01, water_loss_reduction:0.4433,
  chlorine_cost:0.0175,  chlorine_reduction:0.5433,
  muriatic_cost:0.0072,  muriatic_reduction:0.49,
  bicarb_cost:0.00084,   bicarb_reduction:0.66,
  calcium_cost:0.0006,   calcium_reduction:0,
  cya_cost:0.00069,      cya_reduction:0.49,
  co2_cost:0.002,
  algaecide_cost:0.0038, algaecide_reduction:0,
  clarifier_cost:0.003,  clarifier_reduction:0,
  showAdvRates:false,
};

/* ── Formatters ── */
function esc(s){return String(s||'').replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/</g,'&lt;').replace(/>/g,'&gt;');}

/* ── Image resize helper — reads a File, resizes to maxW, returns JPEG data URL ── */
function resizeAndEncodeImage(file, maxW, quality, cb){
  if(!file||!file.type||file.type.indexOf('image/')!==0){cb(null);return;}
  var reader=new FileReader();
  reader.onload=function(e){
    var img=new Image();
    img.onload=function(){
      var ratio=Math.min(maxW/img.naturalWidth, 1);
      var w=Math.round(img.naturalWidth*ratio);
      var h=Math.round(img.naturalHeight*ratio);
      var canvas=document.createElement('canvas');
      canvas.width=w; canvas.height=h;
      var ctx=canvas.getContext('2d');
      ctx.drawImage(img,0,0,w,h);
      try{ cb(canvas.toDataURL('image/jpeg', quality||0.82)); }
      catch(err){ cb(null); }
    };
    img.onerror=function(){cb(null);};
    img.src=e.target.result;
  };
  reader.onerror=function(){cb(null);};
  reader.readAsDataURL(file);
}
function fc(n,d){
  d=d==null?0:d;
  if(isNaN(n)||n==null)return '$0';
  return new Intl.NumberFormat('en-US',{style:'currency',currency:'USD',maximumFractionDigits:d,minimumFractionDigits:d}).format(n);
}
function fp(n){return (Math.round((n||0)*10)/10).toFixed(1)+'%';}
function fn(n){return Math.round(n||0).toLocaleString('en-US');}
function fd(n,p){return (+(n||0)).toFixed(p!=null?p:4);}

/* ── Pool volume helpers (CUBIC_FEET_TO_GALLONS = 7.48 from types.ts) ── */
function bodyGallons(b){
  if(b.inputMode==='gallons') return parseFloat(b.manualGallons)||0;
  var L=parseFloat(b.length)||0, W=parseFloat(b.width)||0, D=parseFloat(b.depth)||0;
  return L*W*D*7.48;
}
function syncGallons(){
  if(S.manualVolume){
    S.pool_gallons=Math.round(parseFloat(S.manualTotalGallons)||0);
    S.chlorine_pool_gallons=S.manualChlorineGallons
      ?Math.round(parseFloat(S.manualChlorineGallons)||0)
      :S.pool_gallons;
    S.co2_pool_gallons=S.manualCo2?S.pool_gallons:0;
    return;
  }
  var total=0,chl=0,co2=0;
  for(var i=0;i<S.bodies.length;i++){
    var g=bodyGallons(S.bodies[i]);
    total+=g;
    if(S.bodies[i].poolType==='chlorine') chl+=g;
    if(S.bodies[i].co2Use) co2+=g;
  }
  S.pool_gallons=Math.round(total);
  S.chlorine_pool_gallons=Math.round(chl);
  S.co2_pool_gallons=Math.round(co2);
}
// Sum body-level pipe counts into the aggregate S.pipe_* fields.
// Only called when S.devicesByPool is true.
function syncDevicesFromBodies(){
  var sizes=['pipe_2in','pipe_3in','pipe_4in','pipe_6in','pipe_8in','pipe_10in'];
  for(var si=0;si<sizes.length;si++){
    var k=sizes[si], sum=0;
    for(var bi=0;bi<S.bodies.length;bi++){
      sum+=Number(S.bodies[bi][k])||0;
    }
    S[k]=sum;
  }
}
// Patch just the gallons displays in step 1 without full re-render
function patchBodyGallons(bodyId){
  var b=S.bodies.find(function(x){return String(x.id)===String(bodyId);});
  if(!b) return;
  var g=bodyGallons(b);
  var valEl=document.getElementById('bgal-'+bodyId);
  var card=document.getElementById('bc-'+bodyId);
  var hint=b.inputMode==='gallons'?'— enter gallons':'— enter dimensions';
  if(valEl) valEl.textContent=g>0?fn(Math.round(g))+' gal':hint;
  if(card) card.classList.toggle('has-gal',g>0);
  var totEl=document.getElementById('ar2-total-gal');
  if(totEl) totEl.textContent=fn(S.pool_gallons)+' gal';
}

/* ── Calculation (derived from types.ts structure + ResultsDashboard output fields) ── */
function calcROI(){
  // Exactly mirrors calc.ts / Excel workbook formulas
  var G=Number(S.pool_gallons)||0;
  var CG=Number(S.chlorine_pool_gallons)||0; // set by syncGallons() from per-body poolType
  var W=Number(S.savings_weight)||1;
  var wc=Number(S.water_cost_per_gal)||0;
  var wlr=Number(S.water_loss_reduction)||0;

  // ── Devices & investment ──
  var total_dev=S.pipe_2in+S.pipe_3in+S.pipe_4in+S.pipe_6in+S.pipe_8in+S.pipe_10in;
  var inv_full=S.pipe_2in*2995+S.pipe_3in*4495+S.pipe_4in*6495+S.pipe_6in*14995+S.pipe_8in*29995+S.pipe_10in*74995;
  var disc=Number(S.discount)||0;
  var disc_amt=inv_full*disc;
  var inv=inv_full-disc_amt;

  // ── Advantage monthly cost ──
  var adv_mo=S.pipe_2in*99+S.pipe_3in*99+S.pipe_4in*139+S.pipe_6in*329+S.pipe_8in*649+S.pipe_10in*1601.19;

  // ── Water loss (exact calc.ts surface-area formula) ──
  // pool_surface_area = pool_gallons / GALLONS_PER_SF_AT_4FT (29.92)
  // gallons_lost_per_month = pool_surface_area * LOSS_PER_MONTH_SF_AREA (5.57)
  var pool_sa=G/29.92;
  var gal_lost_mo=pool_sa*5.57;
  // annual_water_loss uses the separate ANNUAL_WATER_LOSS_RATE constant (0.1862)
  var annual_water_loss=G*0.1862;
  var gal_saved_mo=gal_lost_mo*wlr*W;
  var gal_saved_5yr=gal_saved_mo*12*5; // monthly × 12 months × 5 years (savings_weight applied via gal_saved_mo)
  var water_cost_mo=gal_lost_mo*wc;
  var water_sav_mo=water_cost_mo*wlr; // NO savings_weight here — applied to total below

  // ── Chemical savings (NO savings_weight per-chemical — applied to total) ──
  var chl_cost_mo=CG>0?CG*(Number(S.chlorine_cost)||0):0;
  var chl_s=CG>0?chl_cost_mo*(Number(S.chlorine_reduction)||0):0;

  var mur_cost_mo=G*(Number(S.muriatic_cost)||0);
  var mur_s=mur_cost_mo*(Number(S.muriatic_reduction)||0);

  var bic_cost_mo=G*(Number(S.bicarb_cost)||0);
  var bic_s=bic_cost_mo*(Number(S.bicarb_reduction)||0);

  var cal_cost_mo=G*(Number(S.calcium_cost)||0);
  var cal_s=cal_cost_mo*(Number(S.calcium_reduction)||0);

  var cya_cost_mo=G*(Number(S.cya_cost)||0);
  var cya_s=cya_cost_mo*(Number(S.cya_reduction)||0);

  // CO2: fixed 59% reduction when enabled, 0 when disabled
  var co2_cost_mo=(Number(S.co2_pool_gallons)||0)*(Number(S.co2_cost)||0);
  var co2_s=co2_cost_mo*0.59;

  var alg_cost_mo=G*(Number(S.algaecide_cost)||0);
  var alg_s=alg_cost_mo*(Number(S.algaecide_reduction)||0);

  var cla_cost_mo=G*(Number(S.clarifier_cost)||0);
  var cla_s=cla_cost_mo*(Number(S.clarifier_reduction)||0);

  var chem_tot=chl_s+mur_s+bic_s+cal_s+cya_s+co2_s+alg_s+cla_s;

  // ── savings_weight applied to the TOTAL (not per-chemical) ──
  var raw_total=water_sav_mo+chem_tot;
  var total_mo=raw_total*W;
  var total_yr=total_mo*12;

  // ── Purchase scenario ──
  var payback=total_mo>0?inv/total_mo:0;
  var net5=(total_yr*5)-inv;          // calc.ts: (total_savings_year * 5) - investment
  var roi5=inv>0?net5/inv*100:0;

  // ── Advantage Plan scenario ──
  var adv_net_mo=total_mo-adv_mo;
  var adv_net_yr=adv_net_mo*12;
  var adv_net_5=adv_net_yr*5;         // calc.ts: advantage_net_annual * 5

  // ── Savings breakdown (savings_weight applied per item, matching calc.ts) ──
  // Labels match calc.ts exactly: "Sodium Bicarbonate", "Calcium Chloride"
  var bk=[];
  bk.push({lbl:'Water Loss',          sav:water_sav_mo*W});
  if(CG>0) bk.push({lbl:'Chlorine',   sav:chl_s*W});
  bk.push({lbl:'Muriatic Acid',        sav:mur_s*W});
  bk.push({lbl:'Sodium Bicarbonate',   sav:bic_s*W});
  bk.push({lbl:'Calcium Chloride',     sav:cal_s*W});
  bk.push({lbl:'Cyanuric Acid',        sav:cya_s*W});
  if(S.co2_pool_gallons>0) bk.push({lbl:'CO₂',   sav:co2_s*W});
  bk.push({lbl:'Algaecide',            sav:alg_s*W});
  bk.push({lbl:'Clarifier',            sav:cla_s*W});

  var items=bk
    .filter(function(x){return x.sav>0.001;})
    .sort(function(a,b){return b.sav-a.sav;})
    .map(function(x){return{lbl:x.lbl,sav:x.sav,pct:total_mo>0?x.sav/total_mo*100:0};});

  return{
    total_dev:total_dev,
    inv_full:inv_full,disc_amt:disc_amt,inv:inv,
    adv_mo:adv_mo,adv_net_mo:adv_net_mo,adv_net_yr:adv_net_yr,adv_net_5:adv_net_5,
    gal_lost_mo:gal_lost_mo,gal_saved_mo:gal_saved_mo,gal_saved_5yr:gal_saved_5yr,
    water_cost_mo:water_cost_mo,water_sav_mo:water_sav_mo*W,
    total_mo:total_mo,total_yr:total_yr,
    payback:payback,net5:net5,roi5:roi5,
    items:items,
  };
}

/* ── Stepper ── */
function renderStepper(){
  var el=document.getElementById('ar2-stepper');
  if(!el)return;
  var h='<button class="ar-step-arrow" data-step-nav="back"'+(S.step===0?' disabled':'')+'>\u2190</button>';
  for(var i=0;i<STEP_LBLS.length;i++){
    var dc=i<S.step?'done':i===S.step?'active':'idle';
    var dot=i<S.step?I.check:String(i+1);
    h+='<div class="ar-si">'
      +'<div class="ar-dot '+dc+'">'+dot+'</div>'
      +'<span class="ar-sl '+dc+'">'+STEP_LBLS[i]+'</span>'
      +'</div>';
    if(i<STEP_LBLS.length-1)h+='<div class="ar-sc '+(i<S.step?'done':'')+'"></div>';
  }
  h+='<button class="ar-step-arrow" data-step-nav="next"'+(S.step>=STEPS.length-1?' disabled':'')+'>\u2192</button>';
  el.innerHTML=h;
}

/* ── Step 1: Pool & System ── */
function renderStep0(){
  // ── Bodies of water ──
  var totalGal=0;
  var bodiesHtml=S.bodies.map(function(b){
    var g=bodyGallons(b);
    totalGal+=g;
    var showRm=S.bodies.length>1;
    var isDim=b.inputMode!=='gallons';

    var inputContent=isDim
      ?'<div class="ar-body-dims">'
          +'<div><label class="ar-lbl">Length</label>'
            +'<input class="ar-inp sm" type="number" data-bf="length" data-bid="'+b.id+'" value="'+(b.length||'')+'" placeholder="ft" /></div>'
          +'<div><label class="ar-lbl">Width</label>'
            +'<input class="ar-inp sm" type="number" data-bf="width" data-bid="'+b.id+'" value="'+(b.width||'')+'" placeholder="ft" /></div>'
          +'<div><label class="ar-lbl">Avg Depth</label>'
            +'<input class="ar-inp sm" type="number" data-bf="depth" data-bid="'+b.id+'" value="'+(b.depth||'')+'" placeholder="ft" /></div>'
        +'</div>'
      :'<div style="margin-bottom:10px">'
          +'<label class="ar-lbl">Pool Volume (Gallons)</label>'
          +'<input class="ar-inp" type="text" inputmode="numeric" data-bf="manualGallons" data-bid="'+b.id+'" value="'+(b.manualGallons?fn(parseFloat(b.manualGallons)):'')+'" placeholder="e.g. 100,000" />'
        +'</div>';

    return '<div class="ar-body-card'+(g>0?' has-gal':'')+'" id="bc-'+b.id+'">'
      +'<div class="ar-body-hd">'
        +'<input class="ar-inp sm" style="flex:1;min-width:80px" data-bf="label" data-bid="'+b.id+'" value="'+esc(b.label)+'" placeholder="Pool name" />'
        +'<div style="display:flex;align-items:center;gap:7px;flex-shrink:0">'
          +'<div class="ar-body-type">'
            +'<button class="ar-btype-btn'+(b.poolType==='chlorine'?' on':'')+'" data-bpt="chlorine" data-bid="'+b.id+'">Chlorine</button>'
            +'<button class="ar-btype-btn'+(b.poolType==='saltwater'?' on':'')+'" data-bpt="saltwater" data-bid="'+b.id+'">Saltwater</button>'
          +'</div>'
          +(showRm?'<button class="ar-rm-body" data-rb="'+b.id+'">'+I.close+'</button>':'')
        +'</div>'
      +'</div>'
      +'<div style="margin-bottom:11px">'
        +'<div class="ar-imode">'
          +'<button class="ar-imode-btn'+(isDim?' on':'')+'" data-set-mode="dimensions" data-bid="'+b.id+'">'+I.ruler+' Dimensions</button>'
          +'<button class="ar-imode-btn'+(!isDim?' on':'')+'" data-set-mode="gallons" data-bid="'+b.id+'">'+I.drop+' Enter Gallons</button>'
        +'</div>'
      +'</div>'
      +inputContent
      +'<div style="display:flex;align-items:center;justify-content:space-between;padding-top:8px;border-top:1px solid rgba(255,255,255,.05)">'
        +'<span style="font-size:12px;color:var(--mu)">CO\u2082 pH system</span>'
        +'<div class="ar-sw-track'+(b.co2Use?' on':'')+'" data-co2-bid="'+b.id+'"><div class="ar-sw-thumb"></div></div>'
      +'</div>'
      +'<div style="display:flex;align-items:center;justify-content:space-between;gap:10px;padding-top:10px;margin-top:8px;border-top:1px solid rgba(255,255,255,.05)">'
        +'<span style="font-size:12px;color:var(--mu);flex-shrink:0">Pool Image</span>'
        +(b.image
          ?'<div style="display:flex;align-items:center;gap:8px;flex:1;justify-content:flex-end">'
            +'<img src="'+b.image+'" style="width:56px;height:38px;object-fit:cover;border-radius:4px;border:1px solid rgba(0,180,216,.3)" />'
            +'<button class="ar-img-btn" data-body-image-replace="'+b.id+'" title="Replace image">Replace</button>'
            +'<button class="ar-img-btn danger" data-body-image-remove="'+b.id+'" title="Remove image">\u2715</button>'
          +'</div>'
          :'<button class="ar-img-btn" data-body-image-upload="'+b.id+'">'+I.camera+' Upload</button>'
        )
        +'<input type="file" accept="image/*" id="ar2-body-img-'+b.id+'" data-body-image-input="'+b.id+'" style="display:none" />'
      +'</div>'
      +(S.devicesByPool
        ?'<div style="padding-top:10px;margin-top:8px;border-top:1px solid rgba(255,255,255,.05)">'
          +'<div style="font-size:11px;color:var(--mu);margin-bottom:6px;letter-spacing:0.5px">Devices \u2014 this pool</div>'
          +'<div class="ar-bpipe-grid">'
            +['2in','3in','4in','6in','8in','10in'].map(function(sz){
              var key='pipe_'+sz;
              var sizeLabel=sz.replace('in','"');
              return '<div class="ar-bpipe-cell">'
                +'<label class="ar-bpipe-lbl">'+sizeLabel+'</label>'
                +'<input class="ar-bpipe-inp" type="number" min="0" step="1" data-bpipe="'+key+'" data-bid="'+b.id+'" value="'+(b[key]||0)+'" onfocus="this.select()" />'
              +'</div>';
            }).join('')
          +'</div>'
        +'</div>'
        :''
      )
    +'</div>';
  }).join('');

  // ── Manual volume override ──
  var manualOverride='<div class="ar-manual-lede" data-sw-s="manualVolume">'
    +'<span>'+(S.manualVolume?'\u2714 Total volume entered manually':'Don\'t have dimensions? Enter the total directly')+'</span>'
    +'<div class="ar-sw-track'+(S.manualVolume?' on':'')+'" style="pointer-events:none"><div class="ar-sw-thumb"></div></div>'
  +'</div>'
  +(S.manualVolume?
      '<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:10px">'
        +'<div><label class="ar-lbl">Total Volume (gal)</label>'
          +'<input class="ar-inp" type="number" data-f="manualTotalGallons" value="'+esc(S.manualTotalGallons)+'" placeholder="Total gallons" /></div>'
        +'<div><label class="ar-lbl">Chlorine Pool Volume (gal)</label>'
          +'<input class="ar-inp" type="number" data-f="manualChlorineGallons" value="'+esc(S.manualChlorineGallons)+'" placeholder="Blank = all chlorine" /></div>'
      +'</div>'
      +'<div style="margin-top:10px">'
        +'<label class="ar-lbl">Number of Pools</label>'
        +'<input class="ar-inp" type="number" min="1" max="20" step="1" data-f="manualPoolCount" value="'+(S.manualPoolCount||1)+'" placeholder="1" style="max-width:120px" />'
        +'<div style="font-size:10px;color:var(--mu);margin-top:4px">Used as the summary body count and applied per-pool on the Pool Profiles page.</div>'
      +'</div>'
      +'<details class="ar-co2-details" style="margin-top:10px"'+(S.manualCo2?' open':'')+'>'
        +'<summary>CO\u2082 pH control system in use'+(S.manualCo2?' \u2014 enabled':'')+'</summary>'
        +'<div class="ar-co2-body" style="display:flex;align-items:center;justify-content:space-between;margin-top:8px">'
          +'<span style="font-size:12px;color:var(--mu)">Enable if property uses CO\u2082 for pH</span>'
          +'<div class="ar-sw-track'+(S.manualCo2?' on':'')+'" data-sw-s="manualCo2"><div class="ar-sw-thumb"></div></div>'
        +'</div>'
      +'</details>'
    :'');

  return '<div class="ar-card ar-fu">'
    // Property name — first field
    +'<div class="ar-field">'
      +'<label class="ar-lbl">Property Name</label>'
      +'<input class="ar-inp" type="text" data-f="propertyName" value="'+esc(S.propertyName)+'" placeholder="Client Property Name" autocomplete="organization" />'
    +'</div>'
    // Devices by Pool toggle
    +'<div class="ar-manual-lede" data-sw-s="devicesByPool" style="margin-bottom:12px">'
      +'<span>'+(S.devicesByPool?'\u2714 Devices entered per pool':'Devices by Pool')+'<span style="font-size:10px;color:var(--mu);display:block;margin-top:2px;font-weight:400">'+(S.devicesByPool?'Totals computed from per-pool counts':'Toggle on to enter device counts per pool')+'</span></span>'
      +'<div class="ar-sw-track'+(S.devicesByPool?' on':'')+'" style="pointer-events:none"><div class="ar-sw-thumb"></div></div>'
    +'</div>'
    // Bodies of water
    +'<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px">'
      +'<div style="font-size:12px;font-weight:600;color:var(--tx)">Bodies of Water'
        +(S.manualVolume?' <span style="font-weight:500;color:var(--mu)">\u2002\u00b7\u2002'+(S.manualPoolCount||1)+' '+((S.manualPoolCount||1)===1?'pool':'pools')+' (manual)</span>':'')
      +'</div>'
      +(S.manualVolume?'':'<button class="ar-btn ghost" data-action="add-body" style="font-size:12px;padding:6px 13px">+ Add Pool</button>')
    +'</div>'
    +(S.manualVolume?'':bodiesHtml)
    +(S.manualVolume?'':'<button class="ar-add-body" data-action="add-body">+ Add another pool or spa</button>')
    +manualOverride
    +'<div class="ar-total-row" style="margin-top:10px">'
      +'<span style="font-size:11px;letter-spacing:2px;text-transform:uppercase;color:var(--mu)">'
        +(S.manualVolume?'Manual Total':'Total Pool Volume')
      +'</span>'
      +'<span style="font-family:\'JetBrains Mono\',monospace;font-size:16px;font-weight:700;color:var(--t)" id="ar2-total-gal">'+fn(S.manualVolume?Math.round(parseFloat(S.manualTotalGallons)||0):Math.round(totalGal))+' gal</span>'
    +'</div>'
  +'</div>';
}

/* ── Middle column: Device Selection ── */
function renderDevices(){
  var el=document.getElementById('ar2-devices');
  if(!el)return;

  if(S.step===0){
    var hasDevices=S.pipe_2in+S.pipe_3in+S.pipe_4in+S.pipe_6in+S.pipe_8in+S.pipe_10in>0;
    var advTotal=S.pipe_2in*99+S.pipe_3in*99+S.pipe_4in*139+S.pipe_6in*329+S.pipe_8in*649+S.pipe_10in*1601.19;
    var pipeRows=PIPES.map(function(p){
      var qty=S[p.k];
      var lockCls=S.devicesByPool?' locked':'';
      return '<div class="ar-pipe-row'+(qty>0?' selected':'')+(S.devicesByPool?' locked':'')+'" id="pr-'+p.k+'">'
        +'<div class="ar-pipe-sz">'+p.sz+'</div>'
        +'<div class="ar-pipe-info">'
          +'<div class="ar-pipe-price">'+fc(p.price)+'</div>'
          +'<div class="ar-pipe-rate">Adv. Plan: '+fc(p.rate)+'/mo</div>'
        +'</div>'
        +'<div class="ar-qty">'
          +'<button class="ar-qty-btn'+lockCls+'" data-pk="'+p.k+'" data-d="-1">\u2212</button>'
          +'<div class="ar-qty-n" id="qn-'+p.k+'">'+qty+'</div>'
          +'<button class="ar-qty-btn'+lockCls+'" data-pk="'+p.k+'" data-d="1">+</button>'
        +'</div>'
      +'</div>';
    }).join('');

    el.innerHTML='<div class="ar-card ar-fu" style="animation-delay:.07s">'
      +'<div class="ar-card-title">Return Pipe \u2014 Device Selection'+(S.devicesByPool?' <span style="font-size:10px;font-weight:500;color:var(--mu);letter-spacing:0;text-transform:none;margin-left:6px">\u00b7 per-pool totals (read-only)</span>':'')+'</div>'
      +'<div style="font-size:12px;color:#3a6a80;margin-bottom:12px">'+(S.devicesByPool?'Device totals are summed from each pool\u2019s entries. Adjust on pool cards.':'One device per body of water, matched to its return pipe size.')+'</div>'
      +'<div class="ar-pipe-grid">'+pipeRows+'</div>'
      +(hasDevices
        ?'<div class="ar-dev-total">'
            +'<span class="k">Advantage Plan monthly total</span>'
            +'<span class="v">'+fc(advTotal)+'/mo</span>'
          +'</div>'
        :'<div class="ar-note" style="margin-top:12px;display:flex;align-items:center;gap:6px">'+I.up+' Select at least one device to unlock savings calculations.</div>'
      )
    +'</div>';
  } else if(S.step===1){
    // Step 2: Device summary + Total Water Volume + Water Loss Reduction
    var devCount=S.pipe_2in+S.pipe_3in+S.pipe_4in+S.pipe_6in+S.pipe_8in+S.pipe_10in;
    var devList=PIPES.filter(function(p){return S[p.k]>0}).map(function(p){
      return '<div style="display:flex;justify-content:space-between;padding:6px 0;border-bottom:1px solid rgba(0,180,216,.08);font-size:12px">'
        +'<span style="color:var(--tx)">'+p.sz+' Return Pipe</span>'
        +'<span style="font-family:\'JetBrains Mono\',monospace;color:var(--t)">\u00d7'+S[p.k]+'</span>'
      +'</div>';
    }).join('');
    var R=calcROI();
    var html='';
    if(devCount>0) html+='<div class="ar-card ar-fu"><div class="ar-card-title">Selected Devices</div>'+devList+'</div>';
    // Total Water Volume card
    html+='<div class="ar-card ar-fu" style="animation-delay:.05s">'
      +'<div class="ar-card-title">Total Water Volume</div>'
      +'<div style="font-family:\'JetBrains Mono\',monospace;font-size:22px;font-weight:700;color:var(--t);margin:8px 0">'+fn(S.pool_gallons)+' gal</div>'
      +'<div style="font-size:12px;color:var(--mu)">'
        +S.bodies.map(function(b){return esc(b.label)+': '+fn(Math.round(bodyGallons(b)))+' gal'}).join(' \u00b7 ')
      +'</div>'
    +'</div>';
    // Water Loss Reduction card
    html+='<div class="ar-card ar-fu" style="animation-delay:.1s">'
      +'<div style="display:flex;justify-content:space-between;align-items:center">'
        +'<div>'
          +'<div style="font-size:10px;letter-spacing:2px;text-transform:uppercase;color:var(--mu);margin-bottom:5px">Water Loss Reduction \u2014 5 Years</div>'
          +'<div style="font-size:20px;font-weight:700;color:var(--t);font-family:\'JetBrains Mono\',monospace">'+fn(R.gal_saved_5yr)+' gal</div>'
          +'<div style="font-size:11px;color:var(--mu);margin-top:3px">'+fn(R.gal_saved_mo)+' gal/mo \u00b7 '+fn(Math.round(R.gal_saved_mo*12))+' gal/yr</div>'
        +'</div>'
        +'<div style="color:var(--t);opacity:.5">'+I.dropLg+'</div>'
      +'</div>'
    +'</div>';
    el.innerHTML=html;
  } else if(S.step===2){
    // Step 3 (Export): Export options in middle column
    el.innerHTML=renderExportSection();
  } else {
    el.innerHTML='';
  }
}

/* ── Step 2: Pricing & Settings (merged) ── */
function renderStep1(){
  var discPct=Math.round((S.discount||0)*100);
  var wPct=Math.round((S.savings_weight||1)*100);
  var wlrPct=(Number(S.water_loss_reduction)||0)*100;

  var chemRows=CHEMS.map(function(c){
    var isCo2=c.isCo2;
    var rowCls=isCo2?(S.co2_pool_gallons>0?'co2-row active':'co2-row'):'';
    var costVal=fd(S[c.ck],isCo2?4:5);
    var redCell=c.rk
      ?'<td><input class="ar-inp sm" type="number" data-f="'+c.rk+'" value="'+fd(Number(S[c.rk])*100,1)+'" step="0.1" /></td>'
      :(isCo2?'<td><span style="font-size:11px;color:#3a6a80">59% fixed</span></td>':'<td style="text-align:right;font-size:11px;color:#3a6a80">n/a</td>');
    return '<tr class="'+rowCls+'"><td class="chem-name">'+c.lbl+'</td>'
      +'<td><input class="ar-inp sm" type="number" data-f="'+c.ck+'" value="'+costVal+'" step="0.0001" /></td>'
      +redCell+'</tr>';
  }).join('');

  var advRatesHtml='';
  if(S.showAdvRates){
    advRatesHtml='<div class="ar-card" style="margin-top:10px;margin-bottom:10px">'
      +'<div class="ar-card-title" style="margin-bottom:12px">Water Loss</div>'
      +'<div class="ar-frow">'
        +'<div><label class="ar-lbl">Water Cost ($/gal)</label>'
          +'<input class="ar-inp" type="number" data-f="water_cost_per_gal" value="'+fd(S.water_cost_per_gal,4)+'" step="0.001" /></div>'
        +'<div><label class="ar-lbl">Reduction Rate (%)</label>'
          +'<input class="ar-inp" type="number" data-f="water_loss_reduction" data-pct="1" value="'+fd(wlrPct,2)+'" step="0.1" /></div>'
      +'</div>'
      +'<div class="ar-note">Annual water loss: 18.6% of pool volume (lab-verified default).</div>'
    +'</div>'
    +'<div class="ar-card">'
      +'<div class="ar-card-title" style="margin-bottom:12px">Chemical Costs \u2014 Per Gallon Per Month</div>'
      +'<div style="overflow-x:auto">'
        +'<table class="ar-chem-table">'
          +'<thead><tr><th>Chemical</th><th style="text-align:right">$/gal/mo</th><th style="text-align:right">Reduction %</th></tr></thead>'
          +'<tbody>'+chemRows+'</tbody>'
        +'</table>'
      +'</div>'
      +'<div class="ar-note" style="margin-top:10px">Defaults are lab-verified (IAPMO R&amp;T). Adjust only for site-specific data.</div>'
    +'</div>';
  }

  return '<div class="ar-card ar-fu">'
    +'<div class="ar-card-title">Discount &amp; Savings Weight</div>'
    +'<div class="ar-field">'
      +'<label class="ar-lbl">Purchase Discount</label>'
      +'<div class="ar-slider-row">'
        +'<input class="ar-range" type="range" min="0" max="100" step="5" data-sf="discount" data-m="0.01" value="'+discPct+'" />'
        +'<div class="ar-slider-val-inline" id="disc-lbl">'+discPct+'%</div>'
      +'</div>'
      +'<div class="ar-slider-ticks"><span>0</span><span>25</span><span>50</span><span>75</span><span>100</span></div>'
    +'</div>'
    +'<div class="ar-field">'
      +'<label class="ar-lbl">Savings Weight</label>'
      +'<div class="ar-slider-row">'
        +'<input class="ar-range" type="range" min="0" max="100" step="5" data-sf="savings_weight" data-m="0.01" value="'+wPct+'" />'
        +'<div class="ar-slider-val-inline" id="sw-lbl">'+wPct+'%</div>'
      +'</div>'
      +'<div class="ar-slider-ticks"><span>0</span><span>25</span><span>50</span><span>75</span><span>100</span></div>'
    +'</div>'
    +'<button class="ar-btn ghost" data-action="toggle-adv-rates" style="width:100%;margin-top:6px;font-size:12px;padding:8px 14px">'+I.file+' '+(S.showAdvRates?'Hide':'Adjust')+' Water &amp; Chemical Rates</button>'
    +advRatesHtml
  +'</div>';
}

/* ── Step 3: Review ── */
function renderStep2(){
  var R=calcROI();
  var devLines=PIPES.filter(function(p){return S[p.k]>0;}).map(function(p){
    return '<div class="ar-review-row"><span>'+p.sz+' pipe \u00d7 '+S[p.k]+'</span><span>'+fc(p.price)+' / '+fc(p.rate)+'/mo</span></div>';
  }).join('');

  // Suppress redundant chlorine volume when equal to total
  var showChlVol=S.chlorine_pool_gallons!==S.pool_gallons&&S.chlorine_pool_gallons>0;

  return '<div class="ar-card ar-fu">'
    +'<div class="ar-review-section">'
      +'<div class="ar-review-hd">Pool &amp; System <span class="ar-review-edit" data-goto="0">Edit</span></div>'
      +(S.propertyName?'<div class="ar-review-row"><span>Property</span><span>'+esc(S.propertyName)+'</span></div>':'')
      +S.bodies.map(function(b){
        var g=bodyGallons(b);
        return '<div class="ar-review-row"><span>'+esc(b.label)+' ('+b.poolType+')</span>'
          +'<span>'+fn(Math.round(g))+' gal</span></div>';
      }).join('')
      +'<div class="ar-review-row"><span>Total Volume</span><span>'+fn(S.pool_gallons)+' gal</span></div>'
      +(showChlVol?'<div class="ar-review-row"><span>Chlorine Volume</span><span>'+fn(S.chlorine_pool_gallons)+' gal</span></div>':'')
      +(S.co2_pool_gallons>0?'<div class="ar-review-row"><span>CO\u2082 Systems</span><span>'+fn(S.co2_pool_gallons)+' gal</span></div>':'')
      +'<div class="ar-review-row"><span>Devices</span><span>'+R.total_dev+'</span></div>'
      +devLines
    +'</div>'
    +'<div class="ar-review-section">'
      +'<div class="ar-review-hd">Pricing &amp; Settings <span class="ar-review-edit" data-goto="1">Edit</span></div>'
      +'<div class="ar-review-row"><span>Discount</span><span>'+Math.round(S.discount*100)+'%</span></div>'
      +'<div class="ar-review-row"><span>Savings Weight</span><span>'+Math.round(S.savings_weight*100)+'%</span></div>'
      +'<div class="ar-review-row"><span>Water Cost</span><span>$'+fd(S.water_cost_per_gal,4)+'/gal</span></div>'
    +'</div>'
    +'<div class="ar-note" style="margin-top:14px;text-align:center">Review complete. Use the panel to the right to generate or save your report.</div>'
  +'</div>';
}

/* ── Step 3: Images & Videos (Export) ── */
function renderStep3(){
  return renderImagesAndVideos();
}

function renderImagesAndVideos(){
  // Property Images — 2 side-by-side upload slots
  var slots='';
  for(var si=0;si<2;si++){
    var img=EX.images[si];
    if(img){
      slots+='<div class="ar-img-slot filled">'
        +'<img src="'+img.data+'" />'
        +'<input class="ar-img-cap-input" data-img-cmt="'+img.id+'" placeholder="Caption\u2026" value="'+esc(img.comment)+'" />'
        +'<button class="ar-rm-media" data-rm-img="'+img.id+'">'+I.close+'</button>'
      +'</div>';
    } else {
      slots+='<label class="ar-img-slot">'
        +'<div style="color:var(--mu);opacity:.5">'+I.camera+'</div>'
        +'<div style="font-size:11px;color:var(--mu)">Upload Image</div>'
        +'<input type="file" accept="image/*" class="ar2-img-upload" style="display:none" />'
      +'</label>';
    }
  }

  var imgCard='<div class="ar-card ar-fu">'
    +'<div class="ar-card-title" style="display:flex;align-items:center;gap:6px">'+I.camera+' Property Images</div>'
    +'<div class="ar-img-slots">'+slots+'</div>'
    +(EX.images.length<2?'<label class="ar-file-btn" style="margin-top:8px">+ Add Image<input type="file" accept="image/*" class="ar2-img-upload" style="display:none"></label>':'')
  +'</div>';

  // YouTube Videos — collapsible drawer
  var ytItems=EX.ytEntries.map(function(yt){
    return '<div class="ar-media-item">'
      +'<div class="ar-media-preview">'
        +'<div class="ar-yt-wrap">'
          +'<img src="'+ytThumbUrl(yt.videoId)+'" class="ar-media-thumb" />'
          +'<div class="ar-yt-play"><div class="ar-yt-play-icon">'+I.playWh+'</div></div>'
        +'</div>'
        +'<button class="ar-rm-media" data-rm-yt="'+yt.id+'">'+I.close+'</button>'
      +'</div>'
      +'<textarea class="ar-textarea" data-yt-cmt="'+yt.id+'" placeholder="Caption\u2026" style="min-height:36px;font-size:11px">'+esc(yt.comment)+'</textarea>'
    +'</div>';
  }).join('');

  var ytCard='<div class="ar-card ar-fu" style="animation-delay:.06s">'
    +'<div class="ar-card-title" style="display:flex;align-items:center;justify-content:space-between">'
      +'<span style="display:flex;align-items:center;gap:6px">'+I.yt+' YouTube Videos</span>'
      +'<button class="ar-btn ghost" data-action="toggle-yt-drawer" style="font-size:11px;padding:4px 10px">'+(EX.showYtDrawer?'Hide':'Show')+' ('+EX.ytEntries.length+')</button>'
    +'</div>'
    +'<div class="ar-yt-drawer'+(EX.showYtDrawer?' open':'')+'">'
      +ytItems
      +'<div style="display:flex;gap:8px;margin-top:6px">'
        +'<input class="ar-inp" id="ar2-yt-input" placeholder="Paste YouTube URL\u2026" style="flex:1" value="'+esc(EX.ytPending)+'" />'
        +'<button class="ar-btn ghost" data-action="add-yt" style="padding:8px 12px;font-size:12px">+ Add</button>'
      +'</div>'
    +'</div>'
  +'</div>';

  return imgCard+ytCard;
}

/* ── Results panel ── */
function renderResults(){
  var el=document.getElementById('ar2-results');
  if(!el)return;
  var total_dev=S.pipe_2in+S.pipe_3in+S.pipe_4in+S.pipe_6in+S.pipe_8in+S.pipe_10in;
  if(!total_dev){
    el.innerHTML='<div class="ar-card"><div class="ar-empty">'
      +'<div><div style="margin-bottom:12px;text-align:center;color:var(--t)">'+I.zap+'</div>'
        +'<div style="font-size:15px;font-weight:600;color:var(--tx);margin-bottom:8px">Configure Your System</div>'
        +'<div style="font-size:13px;color:var(--mu)">Add pool volume and select a return-pipe device on Step 1 to see projected savings.</div>'
        +'<div style="text-align:center"><button class="ar-quick-add" data-action="quick-add-4in">+ Add a Device</button></div>'
      +'</div></div></div>';
    return;
  }

  var R=calcROI();

  // KPI row
  var kpi='<div class="ar-kpi-row">'
    +'<div class="ar-kpi"><div class="ar-kpi-lbl">Devices</div><div class="ar-kpi-val" style="color:var(--t)">'+R.total_dev+'</div></div>'
    +'<div class="ar-kpi"><div class="ar-kpi-lbl">Monthly</div><div class="ar-kpi-val" style="color:var(--gr)">'+fc(R.total_mo,0)+'</div></div>'
    +'<div class="ar-kpi"><div class="ar-kpi-lbl">Annual</div><div class="ar-kpi-val" style="color:var(--gr)">'+fc(R.total_yr,0)+'</div></div>'
  +'</div>';

  // Tabs — badge on whichever scenario is better value
  var isAdv=S.activeTab==='advantage';
  var advBest=R.adv_net_mo>=0&&(R.adv_net_5>=R.net5);
  var purBest=R.payback>0&&R.payback<=18&&!advBest;
  var tabs='<div class="ar-tabs">'
    +'<button class="ar-tab'+(isAdv?' on':'')+'" data-tab="advantage">Advantage Plan'+(advBest?'<span class="ar-tab-rec">Best Value</span>':'')+'</button>'
    +'<button class="ar-tab'+(!isAdv?' on':'')+'" data-tab="purchase">Purchase'+(purBest?'<span class="ar-tab-rec">Best Value</span>':'')+'</button>'
  +'</div>';

  var advPanel='<div class="ar-tab-panel'+(isAdv?' on':'')+'" data-tp="advantage">'
    +'<div class="ar-metric-grid">'
      +'<div class="ar-metric neu"><dt>Monthly Cost</dt><dd>'+fc(R.adv_mo,0)+'</dd></div>'
      +'<div class="ar-metric '+(R.adv_net_mo>=0?'pos':'neg')+'"><dt>Net Monthly</dt><dd>'+fc(R.adv_net_mo,0)+'</dd></div>'
      +'<div class="ar-metric '+(R.adv_net_yr>=0?'pos':'neg')+'"><dt>Net Annual</dt><dd>'+fc(R.adv_net_yr,0)+'</dd></div>'
      +'<div class="ar-metric '+(R.adv_net_5>=0?'pos':'neg')+'"><dt>5-Year Net</dt><dd>'+fc(R.adv_net_5,0)+'</dd></div>'
    +'</div>'
  +'</div>';

  var purPanel='<div class="ar-tab-panel'+(!isAdv?' on':'')+'" data-tp="purchase">'
    +'<div class="ar-metric-grid">'
      +'<div class="ar-metric neu"><dt>Investment</dt><dd>'+fc(R.inv,0)+'</dd></div>'
      +'<div class="ar-metric acc"><dt>Payback</dt><dd>'+Math.round(R.payback)+' mo</dd></div>'
      +'<div class="ar-metric pos"><dt>5-Year Net</dt><dd>'+fc(R.net5,0)+'</dd></div>'
      +'<div class="ar-metric pos"><dt>5-Year ROI</dt><dd>'+fp(R.roi5)+'</dd></div>'
    +'</div>'
    +(R.disc_amt>0?'<div class="ar-note" style="margin-top:10px">Discount applied: '+fc(R.disc_amt,0)+' off list price of '+fc(R.inv_full,0)+'</div>':'')
  +'</div>';

  // Breakdown table
  var bkRows=R.items.map(function(x){
    return '<tr><td>'+x.lbl+'</td><td>'+fc(x.sav)+'</td><td style="color:var(--mu)">'+fp(x.pct)+'</td></tr>';
  }).join('');
  var bk='<div class="ar-card">'
    +'<div style="font-size:13px;font-weight:600;color:var(--tx);margin-bottom:12px">Monthly Savings Breakdown</div>'
    +'<table class="ar-bk-table">'
      +'<thead><tr><th>Category</th><th>Savings</th><th>%</th></tr></thead>'
      +'<tbody>'+bkRows
        +'<tr class="total-row"><td>Total</td><td>'+fc(R.total_mo)+'</td><td>100%</td></tr>'
      +'</tbody>'
    +'</table>'
  +'</div>';

  var badges='<div class="ar-badges">'
    +'<span class="ar-badge">NSF/ANSI 50 — IAPMO</span>'
    +'<span class="ar-badge">NSF-372 Lead-Free</span>'
    +'<span class="ar-badge">3 U.S. Patents</span>'
    +'<span class="ar-badge">Lifetime Warranty</span>'
  +'</div>';

  var disc='<div class="ar-disc" style="color:#4a7a90">This assessment is for informational purposes only and does not constitute a guarantee of savings.</div>';

  el.innerHTML=kpi
    +'<div class="ar-card" style="padding:14px 14px 16px">'+tabs+advPanel+purPanel+'</div>'
    +bk+badges+disc;
}

/* ── Nav ── */
function renderNav(){
  var el=document.getElementById('ar2-nav');
  if(!el)return;
  var hasDevices=S.pipe_2in+S.pipe_3in+S.pipe_4in+S.pipe_6in+S.pipe_8in+S.pipe_10in>0;
  var isFirst=S.step===0, isLast=S.step===STEPS.length-1;
  var backBtn=isFirst
    ?'<span></span>'
    :'<button class="ar-btn ghost" data-nav="back">\u2190 Back</button>';
  // On the last step (Review), the export panel in the right column is the primary action;
  // the nav shows only Back — no competing print/download button here.
  var nextBtn=isLast
    ?'<span></span>'
    :'<button class="ar-btn primary" data-nav="next" '+(S.step===0&&!hasDevices?'disabled':'')+'>Continue \u2192</button>';
  var hint=(S.step===0&&!hasDevices)
    ?'<div class="ar-nav-hint">Select a device above to continue</div>'
    :'';
  el.innerHTML=backBtn+nextBtn+hint;
}

/* ── Form ── */
function renderForm(){
  var el=document.getElementById('ar2-form');
  if(!el)return;
  var stepFn=[renderStep0,renderStep1,renderStep3][S.step];
  el.innerHTML=stepFn?stepFn():'';
  syncRangeStyles();
}

function syncRangeStyles(){
  var ranges=document.querySelectorAll('#ar2 .ar-range');
  for(var i=0;i<ranges.length;i++){
    var r=ranges[i];
    var min=parseInt(r.min||'0');
    var max=parseInt(r.max||'100');
    var val=parseInt(r.value||'0');
    var pct=((val-min)/(max-min))*100;
    r.style.background='linear-gradient(to right,var(--t) '+pct+'%,rgba(0,180,216,.15) '+pct+'%)';
  }
}

/* ── Full render ── */
function render(){
  renderStepper();
  renderForm();
  renderDevices();
  renderNav();
  renderResults();
}

/* ── Generate printable PDF report ── */
function generateReport(){
  var R=calcROI();
  var today=new Date().toLocaleDateString('en-US',{year:'numeric',month:'long',day:'numeric'});
  var prop=S.propertyName||'Property Assessment';
  // PDF filename preset: AquaRev_{PropertyName}_{YYYY-MM-DD}
  var fnDate=new Date().toISOString().slice(0,10);
  var fnProp=(S.propertyName||'Assessment').replace(/[^A-Za-z0-9]+/g,'_').replace(/^_+|_+$/g,'')||'Assessment';
  var pdfTitle='AquaRev_'+fnProp+'_'+fnDate;
  var origDocTitle=document.title;
  document.title=pdfTitle;
  var showAdv = EX.bothScenarios || EX.scenario==='advantage';
  var showPur = EX.bothScenarios || EX.scenario==='purchase';

  // ── Build sub-sections ──────────────────────────────────────

  // Pool rows
  var poolRows=S.bodies.map(function(b,i){
    var g=bodyGallons(b);
    var dims=(b.length&&b.width&&b.depth)?b.length+'\u202f×\u202f'+b.width+'\u202f×\u202f'+b.depth+'\u00a0ft':'';
    var sub=dims?'<span style="font-size:10px;color:#999;margin-left:6px">'+dims+'</span>':'';
    return '<div class="rpt-row">'
      +'<span class="k">'+esc(b.label)+'\u2002<em style="color:#999;font-size:10px">'+b.poolType+'</em>'+sub+'</span>'
      +'<span class="v">'+fn(Math.round(g))+'\u00a0gal</span>'
    +'</div>';
  }).join('');

  // Device rows
  var devRows=PIPES.filter(function(p){return S[p.k]>0;}).map(function(p){
    var qty=S[p.k];
    return '<div class="rpt-row">'
      +'<span class="k">'+qty+'\u00a0×\u00a0'+p.sz+'\u00a0AquaRev'+(qty>1?' Devices':' Device')+'</span>'
      +'<span class="v">'+fc(p.price*qty)+'</span>'
    +'</div>';
  }).join('');

  // Savings breakdown rows — with inline bar
  var maxSav=R.items.length?Math.max.apply(null,R.items.map(function(x){return x.sav;})):1;
  var bkRows=R.items.map(function(x){
    var pct=Math.max(3,Math.round((x.sav/maxSav)*100));
    return '<tr>'
      +'<td><div class="rpt-bar-wrap">'
          +'<span style="min-width:120px;display:inline-block">'+x.lbl+'</span>'
          +'<div class="rpt-bar-bg"><div class="rpt-bar-fill" style="width:'+pct+'%"></div></div>'
        +'</div></td>'
      +'<td>'+fc(x.sav)+'</td>'
      +'<td>'+fp(x.pct)+'</td>'
    +'</tr>';
  }).join('');

  // Scenario boxes
  var advBox='', purBox='';
  if(showAdv){
    advBox='<div class="rpt-sbox">'
      +'<div class="rpt-sbox-title">Advantage Plan\u2002·\u200260 Month Finance</div>'
      +'<div class="rpt-row"><span class="k">60 Month Finance</span><span class="v">'+fc(R.adv_mo,0)+'/mo</span></div>'
      +'<div class="rpt-row"><span class="k">Net Monthly Savings</span><span class="v '+(R.adv_net_mo>=0?'pos':'neg')+'">'+fc(R.adv_net_mo,0)+'</span></div>'
      +'<div class="rpt-row"><span class="k">Net Annual Savings</span><span class="v '+(R.adv_net_yr>=0?'pos':'neg')+'">'+fc(R.adv_net_yr,0)+'</span></div>'
      +'<div class="rpt-row strong"><span class="k">5-Year Net Savings</span><span class="v '+(R.adv_net_5>=0?'pos':'neg')+'">'+fc(R.adv_net_5,0)+'</span></div>'
    +'</div>';
  }
  if(showPur){
    purBox='<div class="rpt-sbox pur">'
      +'<div class="rpt-sbox-title">Purchase\u2002·\u2002One-Time Investment</div>'
      +'<div class="rpt-row"><span class="k">Total Investment</span><span class="v">'+fc(R.inv,0)+'</span></div>'
      +'<div class="rpt-row"><span class="k">Payback Period</span><span class="v teal">'+Math.round(R.payback)+'\u00a0months</span></div>'
      +'<div class="rpt-row"><span class="k">5-Year Net Savings</span><span class="v pos">'+fc(R.net5,0)+'</span></div>'
      +'<div class="rpt-row strong"><span class="k">5-Year ROI</span><span class="v pos">'+fp(R.roi5)+'</span></div>'
    +'</div>';
  }

  // Property Images
  var imgHtml='';
  if(EX.images.length>0){
    var imgItems=EX.images.map(function(img){
      return '<div class="rpt-img-item">'
        +'<div class="rpt-img-wrap"><img src="'+img.data+'" /></div>'
        +(img.comment?'<div class="rpt-img-cap">'+esc(img.comment)+'</div>':'')
      +'</div>';
    }).join('');
    imgHtml='<div><div class="rpt-stitle">Property Images</div>'
      +'<div class="rpt-img-grid" style="grid-template-columns:repeat(2,1fr)">'+imgItems+'</div></div>';
  }
  // Video Resources
  var ytHtml='';
  if(EX.ytEntries.length>0){
    var ytItems=EX.ytEntries.map(function(yt){
      return '<div class="rpt-img-item">'
        +'<a href="'+esc(yt.url)+'" target="_blank" style="text-decoration:none">'
          +'<div class="rpt-img-wrap"><img src="'+ytThumbUrl(yt.videoId)+'" /></div>'
        +'</a>'
        +(yt.comment?'<div class="rpt-img-cap">'+esc(yt.comment)+'</div>':'')
      +'</div>';
    }).join('');
    ytHtml='<div><div class="rpt-stitle">Video Resources</div>'
      +'<div class="rpt-img-grid" style="grid-template-columns:repeat(2,1fr)">'+ytItems+'</div></div>';
  }
  // Combined media for landscape layout
  var mediaHtml=imgHtml+ytHtml;

  // Comments (single line)
  var commHtml='';
  if(EX.comments.trim()){
    commHtml='<div class="rpt-sec"><div class="rpt-stitle">Comments</div>'
      +'<div class="rpt-comments"><p>'+esc(EX.comments)+'</p></div></div>';
  }

  // Fact sheet pages (full-page CDN images)
  var fsHtml='';
  if(EX.inclFactSheet&&EX.layout==='portrait'){
    fsHtml=
      // Page 2: Fact Sheet — The AquaRev Water Treatment Advantage
      '<div class="rpt-fs-img-page">'
        +'<img src="https://cdn.prod.website-files.com/691fa5d63fc3a5a75a65efeb/69de66925a6052561678048b_AquaRev_Fact%20Sheet_v3_RDX_Page_2.jpg" />'
      +'</div>'
      // Page 3: Fact Sheet — Facts: Real World Results
      +'<div class="rpt-fs-img-page">'
        +'<img src="https://cdn.prod.website-files.com/691fa5d63fc3a5a75a65efeb/69de6691362723606ee841a2_AquaRev_Fact%20Sheet_v3_RDX_Page_3.jpg" />'
      +'</div>';
  }

  // ── Pool Profiles page (optional, portrait only) ──
  var poolProfilesHtml='';
  if(EX.inclPoolProfiles && EX.layout==='portrait'){
    var todayStr=new Date().toLocaleDateString('en-US',{year:'numeric',month:'long',day:'numeric'});
    var propName=S.propertyName||'Property Assessment';
    // Build a per-device "devices list" string like "1\u00d72\u2033, 2\u00d74\u2033"
    var buildDevList=function(dev){
      var parts=PIPES.filter(function(p){return (dev[p.k]||0)>0;}).map(function(p){
        var n=dev[p.k];
        var nStr=(n===Math.floor(n))?n.toString():(Math.round(n*10)/10).toString();
        return nStr+'\u00d7'+p.sz;
      });
      return parts.length?parts.join(', '):'\u2014';
    };
    var purchaseOf=function(dev){
      return PIPES.reduce(function(sum,p){return sum+(dev[p.k]||0)*p.price;},0);
    };
    var monthlyOf=function(dev){
      return PIPES.reduce(function(sum,p){return sum+(dev[p.k]||0)*p.rate;},0);
    };
    var cards='';
    var totG=0, totPurch=0, totMonthly=0, totDevQty=0, pageCount=0;

    if(S.manualVolume){
      // ── Manual mode: synthesize N cards from manualPoolCount, distribute evenly ──
      var nPools=Math.max(1, Math.min(20, parseInt(S.manualPoolCount,10)||1));
      var totalGal=Math.round(parseFloat(S.manualTotalGallons)||0);
      var perPoolG=totalGal/nPools;
      var perPoolDev={};
      PIPES.forEach(function(p){ perPoolDev[p.k]=(S[p.k]||0)/nPools; });
      var perPoolPurch=purchaseOf(perPoolDev);
      var perPoolMonthly=monthlyOf(perPoolDev);
      var perPoolDevStr=buildDevList(perPoolDev);
      var cardArr=[];
      for(var mi=0;mi<nPools;mi++){
        cardArr.push(
          '<div class="rpt-pp-card">'
          +'<div class="rpt-pp-img rpt-pp-img-empty"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#7db8cc" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="9" cy="11" r="2"/><path d="M21 15l-5-5-8 8"/></svg><div class="rpt-pp-img-empty-lbl">No image</div></div>'
          +'<div class="rpt-pp-info">'
            +'<div class="rpt-pp-head">'
              +'<div class="rpt-pp-name">Pool '+(mi+1)+'</div>'
              +'<span class="rpt-pp-pill" style="background:#64748b;color:#fff;border-color:#64748b">Manual Est.</span>'
            +'</div>'
            +'<div class="rpt-pp-rows">'
              +'<div class="rpt-pp-row"><span class="k">Volume</span><span class="v">'+fn(Math.round(perPoolG))+' gal</span></div>'
              +'<div class="rpt-pp-row"><span class="k">Devices</span><span class="v">'+perPoolDevStr+'</span></div>'
              +'<div class="rpt-pp-row"><span class="k">Purchase Price</span><span class="v">'+(perPoolPurch>0?fc(perPoolPurch,0):'\u2014')+'</span></div>'
              +'<div class="rpt-pp-row strong"><span class="k">60 Month Plan</span><span class="v pos">'+(perPoolMonthly>0?fc(perPoolMonthly,0)+' / mo':'\u2014')+'</span></div>'
            +'</div>'
          +'</div>'
        +'</div>');
      }
      cards=cardArr.join('');
      totG=totalGal;
      totPurch=perPoolPurch*nPools;
      totMonthly=perPoolMonthly*nPools;
      PIPES.forEach(function(p){ totDevQty+=(S[p.k]||0); });
      pageCount=nPools;
    } else if(S.bodies.length>0){
      // ── Normal mode: one card per body ──
      var nBodies=S.bodies.length||1;
      cards=S.bodies.map(function(b,idx){
        var G=bodyGallons(b);
        // Per-pool devices: if devicesByPool is on, use body fields; else distribute aggregate evenly
        var poolDev={};
        if(S.devicesByPool){
          PIPES.forEach(function(p){ poolDev[p.k]=Number(b[p.k])||0; });
        } else {
          PIPES.forEach(function(p){ poolDev[p.k]=(S[p.k]||0)/nBodies; });
        }
        var poolPurch=purchaseOf(poolDev);
        var poolMonthly=monthlyOf(poolDev);
        var poolDevStr=buildDevList(poolDev);
        var typeLabel=b.poolType==='saltwater'?'Saltwater':'Chlorine';
        var typeColor=b.poolType==='saltwater'?'#0891b2':'#00b4d8';
        var co2Pill=b.co2Use?'<span class="rpt-pp-pill" style="background:#ecfeff;color:#0891b2;border-color:#a5f3fc">CO\u2082</span>':'';
        var imgSlot=b.image
          ? '<div class="rpt-pp-img"><img src="'+b.image+'" alt="" /></div>'
          : '<div class="rpt-pp-img rpt-pp-img-empty"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#7db8cc" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="9" cy="11" r="2"/><path d="M21 15l-5-5-8 8"/></svg><div class="rpt-pp-img-empty-lbl">No image</div></div>';
        totG+=G;
        totPurch+=poolPurch;
        totMonthly+=poolMonthly;
        return '<div class="rpt-pp-card">'
          +imgSlot
          +'<div class="rpt-pp-info">'
            +'<div class="rpt-pp-head">'
              +'<div class="rpt-pp-name">'+esc(b.label||('Pool '+(idx+1)))+'</div>'
              +'<span class="rpt-pp-pill" style="background:'+typeColor+';color:#fff;border-color:'+typeColor+'">'+typeLabel+'</span>'
              +co2Pill
            +'</div>'
            +'<div class="rpt-pp-rows">'
              +'<div class="rpt-pp-row"><span class="k">Volume</span><span class="v">'+fn(Math.round(G))+' gal</span></div>'
              +'<div class="rpt-pp-row"><span class="k">Devices</span><span class="v">'+poolDevStr+'</span></div>'
              +'<div class="rpt-pp-row"><span class="k">Purchase Price</span><span class="v">'+(poolPurch>0?fc(poolPurch,0):'\u2014')+'</span></div>'
              +'<div class="rpt-pp-row strong"><span class="k">60 Month Plan</span><span class="v pos">'+(poolMonthly>0?fc(poolMonthly,0)+' / mo':'\u2014')+'</span></div>'
            +'</div>'
          +'</div>'
        +'</div>';
      }).join('');
      PIPES.forEach(function(p){ totDevQty+=(S[p.k]||0); });
      pageCount=S.bodies.length;
    }

    if(pageCount>0){
      poolProfilesHtml='<div class="rpt-pp-page">'
        +'<div class="rpt-pp-header">'
          +'<div class="rpt-pp-title">POOL PROFILES</div>'
          +'<div class="rpt-pp-sub">'+esc(propName)+' \u00b7 '+todayStr+' \u00b7 '+pageCount+' '+(pageCount===1?'pool':'pools')+'</div>'
        +'</div>'
        +'<div class="rpt-pp-grid rpt-pp-grid-'+Math.min(pageCount,10)+'">'+cards+'</div>'
        // ── Footer band (spans full page width via negative margins) ──
        +'<div class="rpt-foot">'
          +'<div class="rpt-foot-logo">AQUAREV WATER</div>'
          +'<div class="rpt-foot-info">'
            +'<a href="mailto:water@aquarevwater.us" style="color:inherit;text-decoration:none">water@aquarevwater.us</a>\u2002\u00b7\u2002<a href="https://www.aquarevwater.us" target="_blank" style="color:inherit;text-decoration:none">aquarevwater.us</a>\u2002\u00b7\u2002Made in USA, O\u02bbahu, Hawai\u02bbi<br>'
            +'NSF/ANSI\u00a050\u2002\u00b7\u2002NSF-372 Lead-Free\u2002\u00b7\u2002US\u00a0Pat.\u00a010,934,180\u2002\u00b7\u200211,358,881\u2002\u00b7\u200212,037,269'
          +'</div>'
        +'</div>'
      +'</div>';
    }
  }

  // ── Water conservation stats ──
  var waterHtml='';
  if(EX.inclWater){
    waterHtml='<div>'
      +'<div class="rpt-stitle">Water Conservation\u2002\u2014\u20025 Years</div>'
      +'<div class="rpt-stat-grid">'
        +'<div class="rpt-stat" style="grid-column:1/-1"><div class="rpt-stat-val">'+fn(R.gal_saved_5yr)+'</div><div class="rpt-stat-lbl">5-Year Water Conservation Total (Gallons)</div></div>'
      +'</div>'
    +'</div>';
  }

  // ── Cover page — overlay text on CDN image ──
  var coverHtml='';
  if(EX.inclCover&&EX.layout==='portrait'){
    coverHtml='<div class="rpt-cover-page">'
      +'<img src="https://cdn.prod.website-files.com/691fa5d63fc3a5a75a65efeb/69de6e658f0a11dd1b3d7563_AquaRev_Fact%20Sheet_COVER1-01.jpg" class="rpt-cover-bg" />'
      +'<div class="rpt-cover-overlay">'
        +'<div style="font-family:\'DM Sans\',sans-serif;font-size:12px;letter-spacing:4px;text-transform:uppercase;color:#48cae4;font-weight:600">Property and Cost Savings Assessment</div>'
        +'<div style="margin-top:10px;font-family:\'Bebas Neue\',sans-serif;font-size:28px;letter-spacing:3px;color:#fff;line-height:1.1">'+esc(prop)+'</div>'
        +'<div style="margin-top:8px;font-family:\'DM Sans\',sans-serif;font-size:12px;color:#7db8cc">'+today+'</div>'
      +'</div>'
    +'</div>';
  }

  // ── Assemble full document ──────────────────────────────────
  var html=coverHtml+'<div class="rpt">'

    // ── Header band ──
    +'<div class="rpt-head">'
      +'<div class="rpt-head-left">'
        +'<div class="rpt-logo">AQUAREV WATER</div>'
        +'<div class="rpt-logo-sub">Cost Savings Assessment</div>'
      +'</div>'
      +'<div class="rpt-head-right">'
        +'<div class="rpt-prop-name">'+esc(prop)+'</div>'
        +'<div class="rpt-prop-date">'+today+'</div>'
        +'<span class="rpt-nsf-badge">NSF/ANSI\u00a050 Certified\u2002·\u2002IAPMO</span>'
      +'</div>'
    +'</div>'

    // ── KPI stripe ──
    +'<div class="rpt-kpis">'
      +'<div class="rpt-kpi"><div class="rpt-kpi-lbl">Devices</div><div class="rpt-kpi-val teal">'+R.total_dev+'</div></div>'
      +'<div class="rpt-kpi"><div class="rpt-kpi-lbl">Monthly Savings</div><div class="rpt-kpi-val green">'+fc(R.total_mo,0)+'</div></div>'
      +'<div class="rpt-kpi"><div class="rpt-kpi-lbl">Annual Savings</div><div class="rpt-kpi-val green">'+fc(R.total_yr,0)+'</div></div>'
      +'<div class="rpt-kpi"><div class="rpt-kpi-lbl">Purchase Payback</div><div class="rpt-kpi-val teal">'+(R.payback>0?Math.round(R.payback)+'\u00a0mo':'N/A')+'</div></div>'
    +'</div>'

    // ── Body ──
    +'<div class="rpt-body">'

      // Row A: Pool config + Device selection
      +'<div class="rpt-sec rpt-cols">'
        +'<div>'
          +'<div class="rpt-stitle">Pool Configuration</div>'
          +poolRows
          +'<div class="rpt-row strong"><span class="k">Total Volume</span><span class="v">'+fn(S.pool_gallons)+'\u00a0gal</span></div>'
          +(S.chlorine_pool_gallons!==S.pool_gallons?'<div class="rpt-row"><span class="k">Chlorine Pool Volume</span><span class="v teal">'+fn(S.chlorine_pool_gallons)+'\u00a0gal</span></div>':'')
          +'<div class="rpt-row"><span class="k">CO\u2082 pH Systems</span><span class="v">'+(S.co2_pool_gallons>0?fn(S.co2_pool_gallons)+'\u00a0gal':'None enabled')+'</span></div>'
        +'</div>'
        +'<div>'
          +'<div class="rpt-stitle">Device Selection</div>'
          +devRows
          +(R.disc_amt>0?'<div class="rpt-row"><span class="k">Discount Applied</span><span class="v pos">\u2212'+fc(R.disc_amt,0)+'</span></div>':'')
          +'<div class="rpt-row strong"><span class="k">Total Investment</span><span class="v">'+fc(R.inv,0)+'</span></div>'
          +'<div class="rpt-row" style="border-top:1px dashed #e0ecf4;margin-top:6px;padding-top:6px">'
            +'<span class="k" style="color:#00b4d8;font-size:11px">Savings Projection Applied</span>'
            +'<span class="v" style="color:#00b4d8;font-size:11px">'+Math.round(S.savings_weight*100)+'%</span>'
          +'</div>'
        +'</div>'
      +'</div>'

      // Rows B-D: layout-aware
      +(EX.layout==='landscape'
        // ── LANDSCAPE: compact single-page layout ──
        ?'<div class="rpt-sec rpt-cols">'
          +'<div>'
            +'<div class="rpt-stitle">Purchase Options</div>'
            +purBox+advBox
          +'</div>'
          +'<div>'
            +'<div class="rpt-stitle">Monthly Savings Breakdown</div>'
            +'<table class="rpt-tbl">'
              +'<thead><tr><th>Category</th><th>Monthly</th><th>%</th></tr></thead>'
              +'<tbody>'
                +bkRows
                +'<tr class="tot"><td>Total</td><td>'+fc(R.total_mo)+'</td><td>100%</td></tr>'
              +'</tbody>'
            +'</table>'
            +(EX.inclWater?waterHtml:'')
          +'</div>'
        +'</div>'
        +((imgHtml||ytHtml)?'<div class="rpt-sec"><div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">'+imgHtml+ytHtml+'</div></div>':'')
        +'<div class="rpt-disc">Estimates based on lab-verified reduction rates (IAPMO R&amp;T). Actual savings vary by site. NSF/ANSI 50 certified.</div>'

        // ── PORTRAIT: Purchase Options stacked left, Breakdown + Water right ──
        :'<div class="rpt-sec rpt-cols">'
          +'<div>'
            +'<div class="rpt-stitle">Purchase Options</div>'
            +purBox+advBox
          +'</div>'
          +'<div>'
            +'<div class="rpt-stitle">Monthly Savings Breakdown</div>'
            +'<table class="rpt-tbl">'
              +'<thead><tr><th>Category</th><th>Monthly Savings</th><th>% of Total</th></tr></thead>'
              +'<tbody>'
                +bkRows
                +'<tr class="tot"><td>Total</td><td>'+fc(R.total_mo)+'</td><td>100%</td></tr>'
              +'</tbody>'
            +'</table>'
            +(EX.inclWater?'<div style="margin-top:10px">'+waterHtml+'</div>':'')
          +'</div>'
        +'</div>'
        +((imgHtml||ytHtml)?'<div class="rpt-sec rpt-cols">'+imgHtml+ytHtml+'</div>':'')
        +commHtml
        +'<div class="rpt-disc">Estimates based on lab-verified reduction rates (IAPMO R&amp;T). Actual savings may vary by property size, usage patterns, climate, and maintenance practices. AquaRev devices are NSF/ANSI 50 certified and tested by IAPMO R&amp;T. Chemical reduction rates reflect controlled lab results. This assessment is for informational purposes only and does not constitute a guarantee of savings.</div>'
      )

    +'</div>' // end .rpt-body

    // ── CTA bar ──
    +'<div class="rpt-cta-bar">'
      +'<span class="cta-label">AquaRev Reference Information</span>'
      +'<a href="https://www.aquarevwater.us/data" target="_blank">www.aquarevwater.us/data</a>'
    +'</div>'

    // ── Footer band ──
    +'<div class="rpt-foot">'
      +'<div class="rpt-foot-logo">AQUAREV WATER</div>'
      +'<div class="rpt-foot-info">'
        +'<a href="mailto:water@aquarevwater.us" style="color:inherit;text-decoration:none">water@aquarevwater.us</a>\u2002\u00b7\u2002<a href="https://www.aquarevwater.us" target="_blank" style="color:inherit;text-decoration:none">aquarevwater.us</a>\u2002\u00b7\u2002Made in USA, O\u02bbahu, Hawai\u02bbi<br>'
        +'NSF/ANSI\u00a050\u2002\u00b7\u2002NSF-372 Lead-Free\u2002\u00b7\u2002US\u00a0Pat.\u00a010,934,180\u2002\u00b7\u200211,358,881\u2002\u00b7\u200212,037,269'
      +'</div>'
    +'</div>'

  +'</div>' // end .rpt
  +poolProfilesHtml
  +fsHtml;

  // ── Back Cover (portrait only) ──
  if(EX.inclFactSheet && EX.layout==='portrait'){
    html+='<div class="rpt-fs-img-page">'
      +'<img src="https://cdn.prod.website-files.com/691fa5d63fc3a5a75a65efeb/69dd4124dd8d52082f7f0510_Exec_Sum_CLUB%20MED_AquaRev_FIN_Page_6.png" />'
    +'</div>';
  }

  // ── Mount report and print ──
  var rEl=document.getElementById('ar2-report');
  if(!rEl)return;
  rEl.innerHTML=html;

  // Keep @page orientation
  var orientEl=document.getElementById('ar2-orient');
  if(!orientEl){orientEl=document.createElement('style');orientEl.id='ar2-orient';document.head.appendChild(orientEl);}
  orientEl.textContent='@media print{@page{size:'+EX.layout+';margin:0mm;}}';

  EX.exporting=true;
  var savedStep=S.step; // Remember current step
  render();

  // Hide ALL body children, then show only the report
  var hiddenEls=[];
  var bodyKids=document.body.children;
  for(var bi=0;bi<bodyKids.length;bi++){
    if(bodyKids[bi].id!=='ar2-report'&&bodyKids[bi].id!=='ar2-orient'){
      hiddenEls.push({el:bodyKids[bi],prev:bodyKids[bi].style.cssText});
      bodyKids[bi].style.cssText+='display:none!important;';
    }
  }

  // Move #ar2-report to body root so it's a direct child
  var rElParent=rEl.parentNode;
  var rElNext=rEl.nextSibling;
  document.body.appendChild(rEl);
  rEl.style.cssText='display:block;';

  // Wait for fonts AND all images to load before printing
  var fontReady=document.fonts&&document.fonts.ready
    ?document.fonts.ready:Promise.resolve();

  fontReady.then(function(){
    // Collect all images in the report and wait for them to load
    var imgs=rEl.querySelectorAll('img');
    var imgPromises=[];
    for(var ii=0;ii<imgs.length;ii++){
      if(!imgs[ii].complete){
        imgPromises.push(new Promise(function(resolve){
          var im=imgs[ii];
          im.onload=resolve;
          im.onerror=resolve;
        }));
      }
    }
    Promise.all(imgPromises).then(function(){
      setTimeout(function(){
        var restored=false;
        function restoreApp(){
          if(restored)return;
          restored=true;
          document.title=origDocTitle;
          rEl.style.cssText='display:none;';
          // Move report back to original position
          if(rElNext)rElParent.insertBefore(rEl,rElNext);
          else rElParent.appendChild(rEl);
          // Restore all hidden body children
          for(var ri=0;ri<hiddenEls.length;ri++){
            hiddenEls[ri].el.style.cssText=hiddenEls[ri].prev;
          }
          EX.exporting=false;
          EX.saving=false;
          EX.previewing=false;
          S.step=savedStep;
          render();
          window.scrollTo(0,0);
        }
        if(EX.previewing){
          // Add preview toolbar instead of printing
          var tb=document.createElement('div');
          tb.id='ar2-preview-toolbar';
          tb.style.cssText='position:fixed;top:0;left:0;right:0;background:#040f1e;padding:12px 20px;display:flex;justify-content:space-between;align-items:center;z-index:999999;box-shadow:0 2px 10px rgba(0,0,0,.4);';
          tb.innerHTML='<button id="ar2-preview-back" style="background:rgba(255,255,255,.1);color:#fff;border:1px solid rgba(255,255,255,.2);padding:8px 16px;border-radius:6px;cursor:pointer;font-size:13px">\u2190 Return to Calculator</button>'
            +'<div style="color:#fff;font-size:13px;font-weight:600">PDF Preview</div>'
            +'<button id="ar2-preview-dl" style="background:linear-gradient(135deg,#00b4d8,#48cae4);color:#fff;border:none;padding:8px 20px;border-radius:6px;cursor:pointer;font-size:13px;font-weight:600">Download PDF</button>';
          document.body.appendChild(tb);
          rEl.style.paddingTop='56px';
          document.getElementById('ar2-preview-back').onclick=function(){
            document.body.removeChild(tb);
            rEl.style.paddingTop='';
            restoreApp();
          };
          document.getElementById('ar2-preview-dl').onclick=function(){
            document.body.removeChild(tb);
            rEl.style.paddingTop='';
            // Re-attach afterprint handler and trigger print
            window.addEventListener('afterprint',function onAfter(){
              window.removeEventListener('afterprint',onAfter);
              setTimeout(restoreApp,100);
            });
            window.print();
            setTimeout(function(){if(!restored)restoreApp();},3000);
          };
        } else {
          window.addEventListener('afterprint',function onAfter(){
            window.removeEventListener('afterprint',onAfter);
            setTimeout(restoreApp,100);
          });
          window.print();
          // Fallback timeout
          setTimeout(function(){if(!restored)restoreApp();},3000);
        }
      },500);
    });
  });
}

/* ── Export section render (shown in results on review step) ── */
function renderExportSection(){
  return '<div class="ar-card ar-fu ar-export">'
    +'<div class="ar-card-title" style="display:flex;align-items:center;gap:8px">'+I.file+' Export Assessment Report</div>'

    // Scenario — 3 radio options
    +'<div class="ar-export-field">'
      +'<label class="ar-export-field-lbl">Pricing Scenario</label>'
      +'<div class="ar-radio-row">'
        +'<label><input type="radio" name="ar2-sc" value="advantage" '+(!EX.bothScenarios&&EX.scenario==='advantage'?'checked':'')+' data-ex-sc="advantage"> Advantage Plan</label>'
        +'<label><input type="radio" name="ar2-sc" value="purchase" '+(!EX.bothScenarios&&EX.scenario==='purchase'?'checked':'')+' data-ex-sc="purchase"> Purchase</label>'
        +'<label><input type="radio" name="ar2-sc" value="both" '+(EX.bothScenarios?'checked':'')+' data-ex-sc="both"> Both Options</label>'
      +'</div>'
    +'</div>'

    // Layout + Page Options
    +'<div class="ar-export-field">'
      +'<label class="ar-export-field-lbl">PDF Layout</label>'
      +'<div class="ar-radio-row">'
        +'<label><input type="radio" name="ar2-ly" value="portrait" '+(EX.layout==='portrait'?'checked':'')+' data-ex-radio="layout"> Portrait</label>'
        +'<label><input type="radio" name="ar2-ly" value="landscape" '+(EX.layout==='landscape'?'checked':'')+' data-ex-radio="layout"> Landscape</label>'
      +'</div>'
      +'<div style="margin-top:10px'+(EX.layout==='landscape'?';opacity:.4;pointer-events:none':'')+'">'
        +'<div class="ar-toggle-row"><label>Include Cover Page'+(EX.layout==='landscape'?' <span style="font-size:10px;color:var(--mu)">(Portrait only)</span>':'')+'</label>'
          +'<div class="ar-sw-track'+(EX.inclCover&&EX.layout!=='landscape'?' on':'')+'" data-ex-sw="inclCover"><div class="ar-sw-thumb"></div></div>'
        +'</div>'
        +'<div class="ar-toggle-row"><label>Include AquaRev Fact Sheet'+(EX.layout==='landscape'?' <span style="font-size:10px;color:var(--mu)">(Portrait only)</span>':'')+'</label>'
          +'<div class="ar-sw-track'+(EX.inclFactSheet&&EX.layout!=='landscape'?' on':'')+'" data-ex-sw="inclFactSheet"><div class="ar-sw-thumb"></div></div>'
        +'</div>'
        +(function(){
          var hasImg=S.bodies.some(function(b){return !!b.image;});
          // Manual mode: always allowed (uses synthetic N cards without images).
          // Non-manual mode: require at least one uploaded image.
          var needImage=!S.manualVolume && !hasImg;
          var disabled=EX.layout==='landscape'||needImage;
          var hint='';
          if(EX.layout==='landscape') hint=' <span style="font-size:10px;color:var(--mu)">(Portrait only)</span>';
          else if(needImage) hint=' <span style="font-size:10px;color:var(--mu)">(Upload at least one pool image)</span>';
          return '<div class="ar-toggle-row"'+(disabled?' style="opacity:.5;pointer-events:none"':'')+'><label>Include Pool Profiles'+hint+'</label>'
            +'<div class="ar-sw-track'+(EX.inclPoolProfiles&&!disabled?' on':'')+'" data-ex-sw="inclPoolProfiles"><div class="ar-sw-thumb"></div></div>'
          +'</div>';
        })()
      +'</div>'
    +'</div>'

    // Toggles
    +'<div class="ar-toggle-row"><label>Include Water Loss Reduction \u2014 5 Years</label>'
      +'<div class="ar-sw-track'+(EX.inclWater?' on':'')+'" data-ex-sw="inclWater"><div class="ar-sw-thumb"></div></div>'
    +'</div>'

    // Comments (portrait only) — single line, max 120 chars (one PDF row width)
    +(EX.layout==='portrait'
      ?(function(){
        var val=EX.comments||'';
        var used=val.length;
        var max=120;
        var counterCls='ar-comm-counter'+(used>=max?' full':used>=max*0.85?' warn':'');
        var showClear=used>0;
        return '<div class="ar-export-field">'
          +'<div class="ar-comm-head">'
            +'<label class="ar-export-field-lbl" style="margin:0">Comments <span style="color:var(--mu);font-weight:400">(Optional)</span></label>'
            +'<div class="'+counterCls+'" id="ar2-comm-counter"><span id="ar2-comm-used">'+used+'</span><span class="ar-comm-counter-sep">/</span>'+max+'</div>'
          +'</div>'
          +'<div class="ar-comm-wrap'+(used>0?' filled':'')+'" id="ar2-comm-wrap">'
            +'<span class="ar-comm-icon">'
              +'<svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14 8a5 5 0 01-5 5H6l-3 2v-4.5A5 5 0 016 4h3a5 5 0 015 4z"/><circle cx="6.5" cy="8.5" r="0.5" fill="currentColor"/><circle cx="9" cy="8.5" r="0.5" fill="currentColor"/><circle cx="11.5" cy="8.5" r="0.5" fill="currentColor"/></svg>'
            +'</span>'
            +'<input class="ar-comm-input" id="ar2-comments" type="text" maxlength="'+max+'" placeholder="e.g. Quarterly review \u2014 proposed upgrade for indoor facility" value="'+esc(val)+'" autocomplete="off" />'
            +'<button type="button" class="ar-comm-clear" id="ar2-comm-clear"'+(showClear?'':' style="display:none"')+' data-action="clear-comments" title="Clear">'
              +'<svg width="11" height="11" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M2 2l8 8M10 2l-8 8"/></svg>'
            +'</button>'
          +'</div>'
          +'<p class="ar-export-note" style="margin-top:6px">Single line \u2014 appears beneath property images in the PDF report.</p>'
        +'</div>';
      })()
      :'')

    +'<div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px;margin-top:8px">'
      +'<button class="ar-gen-btn" data-action="preview-report"'+(EX.exporting?' disabled':'')+' style="background:linear-gradient(135deg,#7ed6e8,#48cae4)">Preview</button>'
      +'<button class="ar-gen-btn" data-action="gen-report"'+(EX.exporting?' disabled':'')+'>Download</button>'
      +'<button class="ar-gen-btn" data-action="save-report" style="background:linear-gradient(135deg,var(--go),#f7c948)"'+(EX.saving?' disabled':'')+'>Archive</button>'
    +'</div>'
    +'<div class="ar-save-toast'+(EX.saveStatus?(' show'+(EX.saveStatus==='error'?' err':'')):'')+'">'+I.check+' '+(EX.saveStatus==='error'?'Save failed \u2014 try again':'Saved to Archive')+'</div>'
  +'</div>';
}
/* ── Partial patch: results only (for live updates) ── */
function patchResults(){renderResults();}

/* ── Pipe qty update ── */
function updatePipe(pipeKey,delta){
  // When devices-by-pool is active, middle column is read-only
  if(S.devicesByPool) return;
  var cur=S[pipeKey]||0;
  S[pipeKey]=Math.max(0,cur+delta);
  // Update qty display
  var qn=document.getElementById('qn-'+pipeKey);
  if(qn)qn.textContent=S[pipeKey];
  // Update row highlight
  var row=document.getElementById('pr-'+pipeKey);
  if(row){
    if(S[pipeKey]>0)row.classList.add('selected');
    else row.classList.remove('selected');
  }
  renderNav();
  patchResults();
}

/* ── Event handling ── */
function handleClick(e){
  // Pipe qty
  var qBtn=e.target.closest('[data-pk]');
  if(qBtn&&qBtn.dataset.d){
    updatePipe(qBtn.dataset.pk,parseInt(qBtn.dataset.d));
    return;
  }
  // Per-body CO2 toggle
  var co2Btn=e.target.closest('[data-co2-bid]');
  if(co2Btn){
    var cbid=String(co2Btn.dataset.co2Bid);
    var cb=null;
    for(var ci=0;ci<S.bodies.length;ci++){if(String(S.bodies[ci].id)===cbid){cb=S.bodies[ci];break;}}
    if(cb){
      cb.co2Use=!cb.co2Use;
      syncGallons();
      // Toggle track class in place — no full re-render needed
      co2Btn.classList.toggle('on',cb.co2Use);
      patchResults();
    }
    return;
  }
  // Per-body image upload / replace — trigger hidden file input
  var imgUp=e.target.closest('[data-body-image-upload],[data-body-image-replace]');
  if(imgUp){
    var uid=String(imgUp.dataset.bodyImageUpload||imgUp.dataset.bodyImageReplace);
    var fi=document.getElementById('ar2-body-img-'+uid);
    if(fi){ fi.value=''; fi.click(); }
    return;
  }
  // Per-body image remove
  var imgRm=e.target.closest('[data-body-image-remove]');
  if(imgRm){
    var rbid=String(imgRm.dataset.bodyImageRemove);
    for(var rbi=0;rbi<S.bodies.length;rbi++){
      if(String(S.bodies[rbi].id)===rbid){ S.bodies[rbi].image=null; break; }
    }
    renderForm();
    return;
  }
  // Per-body input mode toggle (Dimensions / Gallons)
  var modeBtn=e.target.closest('[data-set-mode]');
  if(modeBtn){
    var bid=String(modeBtn.dataset.bid);
    var b=null;
    for(var mi=0;mi<S.bodies.length;mi++){if(String(S.bodies[mi].id)===bid){b=S.bodies[mi];break;}}
    if(b&&b.inputMode!==modeBtn.dataset.setMode){
      b.inputMode=modeBtn.dataset.setMode;
      syncGallons();
      renderForm(); renderNav();
    }
    return;
  }
  // Manual volume override toggle + Devices by Pool toggle (both use data-sw-s)
  var swSBtn=e.target.closest('[data-sw-s]');
  if(swSBtn){
    var swKey=swSBtn.dataset.swS;
    S[swKey]=!S[swKey];
    syncGallons();
    // If Devices by Pool just toggled ON, replace aggregates with per-pool sums
    if(swKey==='devicesByPool' && S.devicesByPool){
      syncDevicesFromBodies();
    }
    renderForm(); renderNav(); patchResults();
    return;
  }
  // Per-body pool type toggle
  var bptBtn=e.target.closest('[data-bpt]');
  if(bptBtn){
    var bid=String(bptBtn.dataset.bid);
    var b=null;
    for(var bi=0;bi<S.bodies.length;bi++){if(String(S.bodies[bi].id)===bid){b=S.bodies[bi];break;}}
    if(b){
      b.poolType=bptBtn.dataset.bpt;
      syncGallons();
      // Update button states in-place (no full re-render to keep inputs live)
      var card=document.getElementById('bc-'+bid);
      if(card){
        card.querySelectorAll('[data-bpt]').forEach(function(btn){
          btn.classList.toggle('on',btn.dataset.bpt===b.poolType);
        });
      }
      patchResults();
    }
    return;
  }
  // Generate report
  var genBtn=e.target.closest('[data-action="gen-report"]');
  if(genBtn){ generateReport(); return; }
  var prevBtn=e.target.closest('[data-action="preview-report"]');
  if(prevBtn){ EX.previewing=true; generateReport(); return; }
  // Save to Archive
  var saveBtn=e.target.closest('[data-action="save-report"]');
  if(saveBtn){ bankSaveReport(); return; }
  // Clear comments field
  var clrCmt=e.target.closest('[data-action="clear-comments"]');
  if(clrCmt){
    EX.comments='';
    var ci=document.getElementById('ar2-comments');
    var cc=document.getElementById('ar2-comm-counter');
    var cu=document.getElementById('ar2-comm-used');
    var cw=document.getElementById('ar2-comm-wrap');
    if(ci){ ci.value=''; ci.focus(); }
    if(cu) cu.textContent='0';
    if(cc) cc.classList.remove('warn','full');
    if(cw) cw.classList.remove('filled');
    clrCmt.style.display='none';
    return;
  }
  // Reset / New Assessment
  var resetBtn=e.target.closest('[data-action="reset-app"]');
  if(resetBtn){
    if(confirm('Start a new assessment? Unsaved data will be cleared.')) resetApp();
    return;
  }
  // Toggle YouTube drawer
  var togYt=e.target.closest('[data-action="toggle-yt-drawer"]');
  if(togYt){ EX.showYtDrawer=!EX.showYtDrawer; renderForm(); return; }
  // Toggle advanced rates
  var togAdv=e.target.closest('[data-action="toggle-adv-rates"]');
  if(togAdv){ S.showAdvRates=!S.showAdvRates; renderForm(); return; }
  // Quick-add 4" device from empty state
  var qaBtn=e.target.closest('[data-action="quick-add-4in"]');
  if(qaBtn){ S.pipe_4in=(S.pipe_4in||0)+1; render(); return; }
  // Toggle view: form ↔ bank (password-gated first time per session)
  var viewBank=e.target.closest('[data-action="view-bank"]');
  if(viewBank){
    if(VIEW==='bank'){ showView('form'); }
    else if(ARCHIVE_UNLOCKED){ showView('bank'); }
    else { showArchivePasswordModal(function(){ ARCHIVE_UNLOCKED=true; showView('bank'); }); }
    return;
  }
  var viewForm=e.target.closest('[data-action="view-form"]');
  if(viewForm){ showView('form'); return; }
  // Archive card actions
  var bankBtn=e.target.closest('[data-bank-action]');
  if(bankBtn){
    var bAct=bankBtn.dataset.bankAction;
    var bId=bankBtn.dataset.bankId;
    if(bAct==='delete'){
      if(confirm('Delete this saved assessment? This cannot be undone.')) bankDeleteReport(bId);
    } else {
      bankAction(bId, bAct);
    }
    return;
  }
  // Add YouTube
  var addYt=e.target.closest('[data-action="add-yt"]');
  if(addYt){
    var ytUrl=(document.getElementById('ar2-yt-input')||{}).value||EX.ytPending;
    var vid=ytVideoId(ytUrl.trim());
    if(vid){
      EX.ytEntries.push({id:'yt-'+Date.now(),url:ytUrl.trim(),videoId:vid,comment:''});
      EX.ytPending='';
      renderResults();
    }
    return;
  }
  // Export section toggles
  var exSw=e.target.closest('[data-ex-sw]');
  if(exSw){ EX[exSw.dataset.exSw]=!EX[exSw.dataset.exSw]; exSw.classList.toggle('on',EX[exSw.dataset.exSw]); return; }
  // Remove image
  var rmImg=e.target.closest('[data-rm-img]');
  if(rmImg){ EX.images=EX.images.filter(function(x){return x.id!==rmImg.dataset.rmImg;}); renderResults(); return; }
  // Remove YouTube
  var rmYt=e.target.closest('[data-rm-yt]');
  if(rmYt){ EX.ytEntries=EX.ytEntries.filter(function(x){return x.id!==rmYt.dataset.rmYt;}); renderResults(); return; }
  // Add body
  var addBtn=e.target.closest('[data-action="add-body"]');
  if(addBtn){
    var newId=Date.now();
    S.bodies.push({id:newId, label:'Pool '+( S.bodies.length+1), poolType:'chlorine', inputMode:'dimensions', length:'', width:'', depth:'', manualGallons:'', co2Use:false, image:null, pipe_2in:0, pipe_3in:0, pipe_4in:0, pipe_6in:0, pipe_8in:0, pipe_10in:0});
    renderForm(); renderNav();
    return;
  }
  // Remove body
  var rmBtn=e.target.closest('[data-rb]');
  if(rmBtn){
    var rmId=String(rmBtn.dataset.rb);
    S.bodies=S.bodies.filter(function(x){return String(x.id)!==rmId;});
    syncGallons(); renderForm(); renderNav(); patchResults();
    return;
  }
  // CO2 toggle
  var swBtn=e.target.closest('[data-sw]');
  if(swBtn){
    S[swBtn.dataset.sw]=!S[swBtn.dataset.sw];
    renderForm();patchResults();
    return;
  }
  // Tab switch
  var tabBtn=e.target.closest('[data-tab]');
  if(tabBtn){
    S.activeTab=tabBtn.dataset.tab;
    var allTabs=document.querySelectorAll('#ar2 .ar-tab');
    var allPanels=document.querySelectorAll('#ar2 .ar-tab-panel');
    for(var i=0;i<allTabs.length;i++){
      allTabs[i].classList.toggle('on',allTabs[i].dataset.tab===S.activeTab);
    }
    for(var j=0;j<allPanels.length;j++){
      allPanels[j].classList.toggle('on',allPanels[j].dataset.tp===S.activeTab);
    }
    return;
  }
  // Step arrow nav
  var stepNav=e.target.closest('[data-step-nav]');
  if(stepNav){
    var sdir=stepNav.dataset.stepNav;
    if(sdir==='next'&&S.step<STEPS.length-1){S.step++;render();}
    else if(sdir==='back'&&S.step>0){S.step--;render();}
    return;
  }
  // Nav back/next
  var navBtn=e.target.closest('[data-nav]');
  if(navBtn){
    var dir=navBtn.dataset.nav;
    if(dir==='next'&&S.step<STEPS.length-1){S.step++;render();}
    else if(dir==='back'&&S.step>0){S.step--;render();}
    return;
  }
  // Review edit links
  var editBtn=e.target.closest('[data-goto]');
  if(editBtn){
    S.step=parseInt(editBtn.dataset.goto);
    render();
    return;
  }
}

function handleInput(e){
  var el=e.target;
  // Per-body device count (devices by pool)
  if(el.dataset&&el.dataset.bpipe){
    var bpKey=el.dataset.bpipe;
    var bpBid=String(el.dataset.bid);
    var n=parseInt(el.value,10);
    if(isNaN(n)||n<0) n=0;
    for(var bpi=0;bpi<S.bodies.length;bpi++){
      if(String(S.bodies[bpi].id)===bpBid){ S.bodies[bpi][bpKey]=n; break; }
    }
    if(S.devicesByPool){
      syncDevicesFromBodies();
      renderDevices();   // refresh middle column (totals + advantage monthly)
      patchResults();
    }
    return;
  }
  // Export section radio/checkbox inputs
  if(el.dataset.exRadio){ EX[el.dataset.exRadio]=el.value; renderDevices(); return; }
  if(el.dataset.exChk){ EX[el.dataset.exChk]=el.checked; renderResults(); return; }
  // Export: image caption
  if(el.dataset.imgCmt){
    var imgId=el.dataset.imgCmt;
    EX.images.forEach(function(x){if(x.id===imgId)x.comment=el.value;});
    return;
  }
  // Export: YouTube caption
  if(el.dataset.ytCmt){
    var ytId=el.dataset.ytCmt;
    EX.ytEntries.forEach(function(x){if(x.id===ytId)x.comment=el.value;});
    return;
  }
  // Export: comments textarea
  if(el.id==='ar2-comments'){
    EX.comments=el.value;
    // Live-update character counter, counter color state, wrapper filled state, clear button visibility
    var used=el.value.length, max=120;
    var cEl=document.getElementById('ar2-comm-counter');
    var uEl=document.getElementById('ar2-comm-used');
    var wEl=document.getElementById('ar2-comm-wrap');
    var xEl=document.getElementById('ar2-comm-clear');
    if(uEl) uEl.textContent=used;
    if(cEl){
      cEl.classList.remove('warn','full');
      if(used>=max) cEl.classList.add('full');
      else if(used>=max*0.85) cEl.classList.add('warn');
    }
    if(wEl) wEl.classList.toggle('filled', used>0);
    if(xEl) xEl.style.display=used>0?'':'none';
    return;
  }
  // Export: YouTube URL pending input
  if(el.id==='ar2-yt-input'){ EX.ytPending=el.value; return; }
  // Body fields (label, length, width, depth, manualGallons)
  if(el.dataset.bf){
    var bid=String(el.dataset.bid);
    var bf=el.dataset.bf;
    var b=null;
    for(var bi=0;bi<S.bodies.length;bi++){if(String(S.bodies[bi].id)===bid){b=S.bodies[bi];break;}}
    if(b){
      var rawVal=el.value.replace(/,/g,'');
      b[bf]=rawVal;
      // Format gallons input with commas
      if(bf==='manualGallons'&&rawVal){
        var num=parseFloat(rawVal)||0;
        if(num>0){
          var cursor=el.selectionStart;
          var oldLen=el.value.length;
          el.value=fn(Math.round(num));
          var newLen=el.value.length;
          el.selectionStart=el.selectionEnd=cursor+(newLen-oldLen);
        }
      }
      syncGallons();
      patchBodyGallons(bid);
      patchResults();
    }
    return;
  }
  // Manual volume override fields — trigger syncGallons + patch total display
  if(el.dataset.f==='manualTotalGallons'||el.dataset.f==='manualChlorineGallons'){
    S[el.dataset.f]=el.value;
    syncGallons();
    var totEl=document.getElementById('ar2-total-gal');
    if(totEl) totEl.textContent=fn(S.pool_gallons)+' gal';
    patchResults();
    return;
  }
  // Manual pool count — clamp 1-20, update review/summary without full rerender
  if(el.dataset.f==='manualPoolCount'){
    var n=parseInt(el.value,10);
    if(isNaN(n)||n<1) n=1;
    if(n>20) n=20;
    S.manualPoolCount=n;
    patchResults();
    return;
  }
  // Generic calculator field
  if(el.dataset.f){
    var key=el.dataset.f;
    var raw=el.value;
    // String fields (propertyName)
    if(key==='propertyName'){ S.propertyName=raw; return; }
    if(el.dataset.pct){
      S[key]=(parseFloat(raw)||0)/100;
    } else {
      S[key]=parseFloat(raw)||0;
    }
    // Reduction fields entered as % but stored as fractions
    if(key.indexOf('_reduction')>-1&&!el.dataset.pct){
      S[key]=(parseFloat(raw)||0)/100;
    }
    patchResults();
    return;
  }
  // Slider field
  if(el.dataset.sf){
    var skey=el.dataset.sf;
    var mult=parseFloat(el.dataset.m)||1;
    var sval=parseInt(el.value)||0;
    S[skey]=sval*mult;
    var lbl=document.getElementById(skey==='discount'?'disc-lbl':'sw-lbl');
    if(lbl)lbl.textContent=sval+'%';
    // Update track fill
    var min=parseInt(el.min||'0');
    var max=parseInt(el.max||'100');
    var pct=((sval-min)/(max-min))*100;
    el.style.background='linear-gradient(to right,var(--t) '+pct+'%,rgba(0,180,216,.15) '+pct+'%)';
    patchResults();
    return;
  }
}

/* ── handleChange — for radio, checkbox, select change events ── */
function handleChange(e){
  var el=e.target;
  // Export: 3-option scenario radio (advantage / purchase / both)
  if(el.dataset.exSc){
    if(el.dataset.exSc==='both'){
      EX.bothScenarios=true;
      EX.scenario='advantage';
    } else {
      EX.bothScenarios=false;
      EX.scenario=el.dataset.exSc;
    }
    return;
  }
  // Export: layout radio
  if(el.dataset.exRadio){ EX[el.dataset.exRadio]=el.value; renderDevices(); return; }
  // Body type select (fallback)
  if(el.dataset.bf==='type'){
    var bid=String(el.dataset.bid);
    var b=null;
    for(var i=0;i<S.bodies.length;i++){if(String(S.bodies[i].id)===bid){b=S.bodies[i];break;}}
    if(b){ b.type=el.value; syncGallons(); patchResults(); }
  }
  // Per-body image file input
  if(el.dataset&&el.dataset.bodyImageInput){
    var tgtBid=String(el.dataset.bodyImageInput);
    var tgtFile=el.files&&el.files[0];
    if(!tgtFile) return;
    resizeAndEncodeImage(tgtFile, 600, 0.82, function(dataUrl){
      if(!dataUrl){ alert('Could not read image. Please try a different file.'); return; }
      for(var bi=0;bi<S.bodies.length;bi++){
        if(String(S.bodies[bi].id)===tgtBid){ S.bodies[bi].image=dataUrl; break; }
      }
      renderForm();
    });
    return;
  }
}

/* ── Init ── */
function init(){
  var root=document.getElementById('ar2');
  if(!root)return;
  initDefaultYt();
  // Set initial bank nav button label
  var navBtn=document.getElementById('ar2-bank-nav');
  if(navBtn) navBtn.textContent='Archive';
  render();
  root.addEventListener('click',handleClick);
  root.addEventListener('input',handleInput);
  root.addEventListener('change',handleChange);
  // File upload — delegate via document since input is dynamically created
  root.addEventListener('change',function(e){
    if(e.target&&(e.target.id==='ar2-img-input'||e.target.classList.contains('ar2-img-upload'))){
      var file=e.target.files&&e.target.files[0];
      if(file){
        var reader=new FileReader();
        reader.onload=function(ev){
          EX.images.push({id:'img-'+Date.now(),data:ev.target.result,comment:''});
          renderForm();
          renderResults();
        };
        reader.readAsDataURL(file);
      }
      e.target.value='';
    }
  });
}

if(document.readyState==='loading'){
  document.addEventListener('DOMContentLoaded',init);
}else{
  init();
}

})();