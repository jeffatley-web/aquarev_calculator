(function(){
'use strict';

/* ── SVG Icon set — replaces all emoji ── */
var I={
  check:  '<svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 6l3 3 5-5"/></svg>',
  close:  '<svg width="9" height="9" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M2 2l8 8M10 2l-8 8"/></svg>',
  ruler:  '<svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="5" width="14" height="6" rx="1"/><path d="M4 5v3M7 5v2M10 5v3M13 5v2"/></svg>',
  drop:   '<svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M8 2C6 5 3 9 3 11.5a5 5 0 0010 0C13 9 10 5 8 2z"/></svg>',
  warning:'<svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M8 2L2 13h12L8 2z"/><path d="M8 6v4M8 11.5v.01"/></svg>',
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
  inclFactSheet:false,    // include fact sheet (pages 2 & 3 only)
  inclBackCover:false,    // include back cover page (separate from fact sheet)
  inclPoolProfiles:false, // include pool profiles page
  inclExecSummary:false,  // include 2-page Executive Summary (portrait variant)
  execCustomTitle:'',     // optional custom section title shown on Exec Summary page 1
  execCustomCopy:'',      // optional custom section copy shown on Exec Summary page 1
  // ── Landscape-only export options ──
  inclLsCover:false,        // landscape Cover page
  inclLsExecSummary:false,  // landscape Executive Summary (3 pages)
  inclPresentationDeck:false, // landscape Presentation Deck (multi-page)
  inclLsBackCover:false,    // landscape Back Cover
  inclLsP2Col3Photos:false, // landscape Exec Summary Page 2 col 3 — use uploaded property photos (4 max stacked) instead of default
  lsP2Col3Photos:[],        // up to 4 {data} entries for Page 2 col 3 stacked layout
  showP2Col3Drawer:false,   // drawer expanded state for the col 3 photo uploader
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

/* ── Confetti burst (moderate success celebration) ──
   Called on archive save + PDF download. Pure DOM, no library. */
function confettiBurst(opts){
  opts=opts||{};
  var count=opts.count||45;
  var duration=opts.duration||2600;
  var originEl=opts.originEl;
  var colors=['#00b4d8','#48cae4','#90e0ef','#f0a500','#22c55e','#ffffff'];
  var ox=window.innerWidth/2, oy=window.innerHeight/2;
  if(originEl){var r=originEl.getBoundingClientRect(); ox=r.left+r.width/2; oy=r.top+r.height/2;}
  var container=document.createElement('div');
  container.className='ar-confetti';
  document.body.appendChild(container);
  for(var i=0;i<count;i++){
    var piece=document.createElement('div');
    piece.className='ar-confetti-piece';
    piece.style.left=ox+'px';
    piece.style.top=oy+'px';
    piece.style.background=colors[Math.floor(Math.random()*colors.length)];
    var angle=Math.random()*Math.PI*2;
    var burstVel=180+Math.random()*220;
    var mx=Math.cos(angle)*burstVel*0.55;
    var my=Math.sin(angle)*burstVel*0.55-80;          // slight upward bias
    var tx=Math.cos(angle)*burstVel*0.9+(Math.random()-0.5)*80;
    var ty=Math.sin(angle)*burstVel*0.5+420+Math.random()*200;  // gravity pulls down
    var rot=(Math.random()-0.5)*900;
    piece.style.setProperty('--mx',mx+'px');
    piece.style.setProperty('--my',my+'px');
    piece.style.setProperty('--tx',tx+'px');
    piece.style.setProperty('--ty',ty+'px');
    piece.style.setProperty('--r',rot+'deg');
    piece.style.animation='ar-confetti-burst '+duration+'ms cubic-bezier(.2,.75,.4,1) forwards';
    piece.style.animationDelay=(Math.random()*120)+'ms';
    // vary shape — 25% are little rectangles oriented sideways
    if(Math.random()<0.25){ piece.style.width='12px'; piece.style.height='6px'; }
    container.appendChild(piece);
  }
  setTimeout(function(){ if(container.parentNode) container.parentNode.removeChild(container); }, duration+400);
}
window.confettiBurst=confettiBurst;  // expose so Pool Measure bridge can fire it too
var ARCHIVE_PASSCODE='1116';

/* ── Calculator session-unlock flag (in-memory, resets on reload) ── */
var CALC_UNLOCKED=false;
var CALC_PASSCODE='1717';

/* ── Calculator full-page passcode gate ── */
function showCalcPasswordModal(onUnlock){
  var existing=document.getElementById('ar2-calc-pw-modal');
  if(existing&&existing.parentNode) existing.parentNode.removeChild(existing);
  var m=document.createElement('div');
  m.id='ar2-calc-pw-modal';
  m.style.cssText='position:fixed;inset:0;background:rgba(4,15,30,.95);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);z-index:999999;display:flex;align-items:center;justify-content:center;padding:20px;font-family:"DM Sans","Helvetica Neue",Arial,sans-serif;';
  m.innerHTML='<div style="background:linear-gradient(145deg,#0a2540,#071628);border:1px solid rgba(0,180,216,.3);border-radius:12px;padding:36px 32px;max-width:420px;width:100%;box-shadow:0 20px 60px rgba(0,0,0,.6);text-align:center;">'
    +'<div style="font-family:\'Bebas Neue\',sans-serif;font-size:30px;letter-spacing:5px;color:#fff;margin-bottom:4px">AQUAREV WATER</div>'
    +'<div style="font-size:10px;letter-spacing:3px;text-transform:uppercase;color:#48cae4;font-weight:600;margin-bottom:18px">ROI Calculator</div>'
    +'<div style="font-size:13px;color:#cfe2eb;line-height:1.6;margin-bottom:18px">Enter the passcode to access the calculator.</div>'
    +'<input id="ar2-calc-pw-input" type="password" inputmode="numeric" autocomplete="off" style="width:100%;background:rgba(0,0,0,.35);border:1px solid rgba(0,180,216,.35);color:#fff;padding:12px 14px;border-radius:6px;font-size:18px;font-family:\'JetBrains Mono\',monospace;letter-spacing:6px;margin-bottom:8px;box-sizing:border-box;outline:none;text-align:center" placeholder="••••" />'
    +'<div id="ar2-calc-pw-err" style="font-size:11px;color:#ef4444;min-height:15px;margin-bottom:14px"></div>'
    +'<button id="ar2-calc-pw-unlock" style="background:linear-gradient(135deg,#00b4d8,#48cae4);color:#fff;border:none;padding:12px 24px;border-radius:6px;cursor:pointer;font-size:13px;font-weight:600;letter-spacing:1px;text-transform:uppercase;font-family:inherit;width:100%">Unlock</button>'
  +'</div>';
  document.body.appendChild(m);
  var input=document.getElementById('ar2-calc-pw-input');
  var err=document.getElementById('ar2-calc-pw-err');
  var submit=function(){
    if(input.value===CALC_PASSCODE){
      if(m.parentNode) m.parentNode.removeChild(m);
      CALC_UNLOCKED=true;
      onUnlock();
    } else {
      err.textContent='Incorrect passcode';
      input.value='';
      input.focus();
    }
  };
  document.getElementById('ar2-calc-pw-unlock').onclick=submit;
  input.addEventListener('keydown',function(e){
    if(e.key==='Enter'){e.preventDefault();submit();}
  });
  setTimeout(function(){input.focus();},50);
}

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
  // Sync property name from Map Pools step if it's been entered there but not
  // yet mirrored into S.propertyName (happens when user saves before Continue).
  if(!S.propertyName && window.AR2_MAP && AR2_MAP.getPropertyName){
    var mapName=AR2_MAP.getPropertyName();
    if(mapName) S.propertyName=mapName;
  }
  // Require a Property Name before any archive save. Especially important on
  // Step 0 (Map Pools) where the user can trace pools without ever entering one.
  var nm=(S.propertyName||'').trim();
  if(!nm){
    var msg='A Property Name is required before saving to the Archive.';
    var promptRes=prompt(msg+'\n\nEnter a name for this property:', '');
    if(promptRes==null) return;          // user cancelled
    var entered=promptRes.trim();
    if(!entered){
      alert('Property Name required to save to the Archive.');
      return;
    }
    S.propertyName=entered;
    // Mirror back into both possible DOM inputs so the field updates visually
    var formInput=document.querySelector('#ar2 [data-f="propertyName"]');
    if(formInput) formInput.value=entered;
    if(window.AR2_MAP && AR2_MAP.setPropertyName) AR2_MAP.setPropertyName(entered);
  }
  // Check for duplicate property name in archive before saving
  var targetName=S.propertyName.trim().toLowerCase();
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
      devicesByPool:S.devicesByPool, propertiesCount:S.propertiesCount,
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
      layout:EX.layout, inclWater:EX.inclWater, inclFactSheet:EX.inclFactSheet, inclBackCover:EX.inclBackCover, inclPoolProfiles:EX.inclPoolProfiles, inclExecSummary:EX.inclExecSummary,
      execCustomTitle:EX.execCustomTitle, execCustomCopy:EX.execCustomCopy,
      inclLsCover:EX.inclLsCover, inclLsExecSummary:EX.inclLsExecSummary, inclPresentationDeck:EX.inclPresentationDeck, inclLsBackCover:EX.inclLsBackCover,
      inclLsP2Col3Photos:EX.inclLsP2Col3Photos,
      lsP2Col3Photos:Array.isArray(EX.lsP2Col3Photos)?EX.lsP2Col3Photos.slice():[],
      comments:EX.comments, ytEntries:EX.ytEntries,
      images:EX.images,
    },
    // Map Pools step full snapshot — polygons, map view, property anchor.
    // Absent for non-map archives (e.g. records from pre-v4 calculator saves).
    mapping: (window.AR2_MAP && AR2_MAP.exportSnapshot) ? AR2_MAP.exportSnapshot() : null,
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
      // Celebrate a successful archive save — origin at the Archive button.
      var originBtn=document.querySelector('[data-action="archive"],[data-save-btn],#ar2-bank-nav');
      try { confettiBurst({ originEl: originBtn, count: 55 }); } catch(e){}
      setTimeout(function(){EX.saveStatus=null;renderDevices();renderResults();},3000);
    })
    .catch(function(err){
      EX.saving=false; EX.saveStatus='error';
      // QuotaExceeded = localStorage is full (typical cap ~5 MB). Phone-camera
      // photos in EX.images / EX.lsP2Col3Photos are the usual culprit. Surface
      // a concrete hint instead of the generic "Save failed" toast.
      var name=(err&&(err.name||err.code))||'';
      if(name==='QuotaExceededError' || name==='NS_ERROR_DOM_QUOTA_REACHED' || name===22){
        try { alert('Save failed: browser storage is full.\n\nThis is usually caused by uploaded photos. Remove a few property images or custom photos in Step 3, then try Archive again.'); } catch(e){}
      }
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
  // Migration shim (v3 → v4): the back cover used to be bundled into the Fact
  // Sheet toggle. When loading a pre-v4 snapshot (inclBackCover field missing),
  // mirror the bundled behavior so exports look identical to the v3 output.
  if (typeof snapshot.ex.inclBackCover === 'undefined') {
    EX.inclBackCover = !!snapshot.ex.inclFactSheet;
  } else {
    EX.inclBackCover = !!snapshot.ex.inclBackCover;
  }
  EX.inclPoolProfiles=!!snapshot.ex.inclPoolProfiles;
  EX.inclExecSummary=!!snapshot.ex.inclExecSummary;
  EX.inclLsCover=!!snapshot.ex.inclLsCover;
  EX.inclLsExecSummary=!!snapshot.ex.inclLsExecSummary;
  EX.inclPresentationDeck=!!snapshot.ex.inclPresentationDeck;
  EX.inclLsBackCover=!!snapshot.ex.inclLsBackCover;
  EX.inclLsP2Col3Photos=!!snapshot.ex.inclLsP2Col3Photos;
  EX.lsP2Col3Photos=Array.isArray(snapshot.ex.lsP2Col3Photos)?snapshot.ex.lsP2Col3Photos.slice():[];
  EX.showP2Col3Drawer=false; // collapse drawer on every snapshot recall
  EX.execCustomTitle=snapshot.ex.execCustomTitle||'';
  EX.execCustomCopy=snapshot.ex.execCustomCopy||'';
  EX.comments=snapshot.ex.comments;
  EX.ytEntries=snapshot.ex.ytEntries||[];
  // Restore property images (dataURLs); pre-v4 snapshots won't have this field.
  EX.images=Array.isArray(snapshot.ex.images)?snapshot.ex.images.slice():[];
  EX.saving=false; EX.saveStatus=null;
  // Hydrate the Map Pools side: polygons, boundary, map centre, property flag.
  // Absent on pre-v4 snapshots and on records that never touched Step 0 — the
  // bridge handles a null payload gracefully.
  if (snapshot.mapping && window.AR2_MAP && AR2_MAP.loadSnapshot) {
    try { AR2_MAP.loadSnapshot(snapshot.mapping); } catch(e) {}
  }
  // Step index shifted by +1 with the new Map Pool step at 0. Land on what was
  // previously "Pricing & Settings" (step 1) → now step 2.
  S.step=2;
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
  S.propertiesCount=1;
  S.pipe_2in=0; S.pipe_3in=0; S.pipe_4in=0; S.pipe_6in=0; S.pipe_8in=0; S.pipe_10in=0;
  S.discount=0; S.savings_weight=1;
  EX.images=[]; EX.ytEntries=[]; EX.comments='';
  EX.scenario='advantage'; EX.bothScenarios=true; EX.layout='portrait';
  EX.inclCover=false; EX.inclWater=true; EX.inclFactSheet=false; EX.inclBackCover=false; EX.inclPoolProfiles=false; EX.inclExecSummary=false;
  EX.execCustomTitle=''; EX.execCustomCopy='';
  EX.inclLsCover=false; EX.inclLsExecSummary=false; EX.inclPresentationDeck=false; EX.inclLsBackCover=false;
  EX.inclLsP2Col3Photos=false; EX.lsP2Col3Photos=[]; EX.showP2Col3Drawer=false;
  EX.saving=false; EX.saveStatus=null; EX.exporting=false;
  initDefaultYt();
  if(VIEW==='bank') showView('form');
  else render();
}

/* ── Switch between form and bank views ── */
function showView(v){
  VIEW=v;
  var root=document.getElementById('ar2');
  var mainLayout=document.getElementById('ar2-main-layout');
  var bankEl=document.getElementById('ar2-bank');
  var mapEl=document.getElementById('ap2');
  var navBtn=document.getElementById('ar2-bank-nav');
  var stepper=document.getElementById('ar2-stepper');
  var navBar=document.getElementById('ar2-nav');
  var barActs=document.getElementById('ar2-bar-actions');
  if(v==='bank'){
    if(mainLayout)mainLayout.style.display='none';
    if(bankEl){bankEl.style.display='block';renderBank();}
    // Force-hide Map Pools panel and clear the map-step class so the calculator's
    // CSS rules (#ar2.map-step #ap2{display:block}) don't surface the map below
    // the Archive list when the user is on Step 0 (Map Pools).
    if(mapEl) mapEl.style.display='none';
    if(root) root.classList.remove('map-step');
    if(navBtn){navBtn.textContent=''; navBtn.innerHTML=I.back+' Calculator'; navBtn.classList.add('on');}
    if(stepper)stepper.style.display='none';
    if(navBar)navBar.style.display='none';
    if(barActs)barActs.style.gridColumn='2 / -1';
  } else {
    if(mainLayout)mainLayout.style.display='';
    if(bankEl)bankEl.style.display='none';
    // Restore Map Pools visibility — the inline display:none we added above is
    // cleared so the CSS class can take over again. render() re-applies map-step.
    if(mapEl) mapEl.style.display='';
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

var STEPS=['map-pools','pool-system','settings','export'];
var STEP_LBLS=['Map Pools','Pool & System','Pricing & Settings','Export'];

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
  propertiesCount:1,    // shown in Exec Summary "Portfolio Snapshot"
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

/* ── CDN image proxy — routes big marketing images through wsrv.nl for width-capping
   and quality-compression. Reduces PDF exports from ~15 MB toward 2–4 MB.
   w=1100 targets ~US-letter print resolution; q=72 is visually lossless for JPG. ── */
function cdnProxy(url, maxW){
  if(!url) return url;
  var stripped=url.replace(/^https?:\/\//,'');
  var w=maxW||1100;
  return 'https://wsrv.nl/?url='+encodeURIComponent(stripped)+'&w='+w+'&q=72&output=jpg';
}
/* Build an <img> tag with a safety net: if wsrv.nl is unreachable, swap back to the
   original URL so the PDF still renders (slightly larger but never broken). */
function cdnImg(originalUrl, attrs, maxW){
  var escOrig=originalUrl.replace(/'/g,"&#39;");
  var extra=attrs||'';
  return '<img src="'+cdnProxy(originalUrl,maxW)+'" '
    +extra
    +' onerror="if(!this.dataset.fallback){this.dataset.fallback=1;this.src=\''+escOrig+'\';}" />';
}

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
  if(b.inputMode==='surface'){
    var S2=parseFloat(b.surface_sqft)||0, D2=parseFloat(b.depth)||0;
    return S2*D2*7.48052;
  }
  var L=parseFloat(b.length)||0, W=parseFloat(b.width)||0, D=parseFloat(b.depth)||0;
  return L*W*D*7.48052;
}
// Surface area in square feet — uses the most accurate input available:
//   - dimensions mode → L × W (true plan-view footprint)
//   - surface mode    → surface_sqft directly
//   - gallons mode    → fall back to gallons / (depth × 7.48052) if depth known,
//                       else legacy 4-ft assumption (gallons / 29.92)
function bodySurfaceArea(b){
  // Only return a surface value if the body's volume is also fully specified —
  // prevents phantom water-loss totals when the user has typed partial inputs.
  var g=bodyGallons(b);
  if(g<=0) return 0;
  if(b.inputMode==='dimensions'){
    var L=parseFloat(b.length)||0, W=parseFloat(b.width)||0;
    if(L>0 && W>0) return L*W;
  }
  if(b.inputMode==='surface'){
    var S2=parseFloat(b.surface_sqft)||0;
    if(S2>0) return S2;
  }
  // gallons mode — use depth-aware fallback when depth known, else 4-ft legacy
  var d=parseFloat(b.depth)||0;
  if(d>0) return g/(d*7.48052);
  return g/29.92;
}
// Gallons estimate from the original polygon area captured at map-time (v4 only).
// Used to show the divergence badge when user edits drive the body away from
// what the map originally measured.
function bodyGallonsFromMap(b){
  if(!b.fromMap || !b.sq_m) return null;
  var D=parseFloat(b.depth)||0;
  if(!D) return null;
  return b.sq_m * 10.7639 * D * 7.48052;
}
// Percent divergence between user-entered volume and the map-polygon estimate.
function bodyDivergencePct(b){
  var mapGal=bodyGallonsFromMap(b);
  if(!mapGal) return null;
  var userGal=bodyGallons(b);
  if(!userGal) return null;
  return Math.abs(userGal - mapGal) / mapGal;
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
  var hint=b.inputMode==='gallons'?'— enter gallons':(b.inputMode==='surface'?'— enter sq ft × depth':'— enter dimensions');
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

  // ── Water loss (surface-area formula) ──
  // Use the most accurate surface area available per body:
  //   dimensions mode → actual L × W
  //   surface mode    → entered sq ft directly
  //   gallons mode    → depth-aware fallback (or 4-ft legacy if no depth)
  // In manual-volume mode there's only one synthetic body — fall back to legacy.
  var pool_sa;
  if(S.manualVolume){
    pool_sa=G/29.92;
  } else {
    pool_sa=0;
    for(var sai=0;sai<S.bodies.length;sai++) pool_sa+=bodySurfaceArea(S.bodies[sai]);
  }
  // gallons_lost_per_month = pool_surface_area × LOSS_PER_MONTH_SF_AREA (4.0)
  // 4.0 gal/sq-ft/mo ≈ 0.21 in/day — conservative evaporation-only baseline.
  var gal_lost_mo=pool_sa*4.0;
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

/* ── Step 0: Map Pool ──
   #ap2 is a persistent sibling to #ar2-main-layout — see the render() hook that
   toggles .map-step on the #ar2 root. renderMapPool() stays empty; Pool Measure
   owns its own UI (map, review card, catalog, and step-0 nav bar). */
function renderMapPool(){ return ''; }

/* Pull bodies from the Pool Measure bridge and replace S.bodies.
   Runs when the user clicks Continue on Step 0. Drops the default "Pool 1"
   skeleton if the bridge returned registered bodies; otherwise leaves S.bodies
   alone (user either hit Skip or didn't register anything). */
function consumeMapPoolBodies(){
  if(!window.AR2_MAP || !AR2_MAP.getBodies) return;
  var mapped=AR2_MAP.getBodies();
  if(!mapped || !mapped.length) return;
  // Pull in the property name too if one was set in Map Pool
  var pname=(AR2_MAP.getPropertyName && AR2_MAP.getPropertyName()) || '';
  if(pname && !S.propertyName) S.propertyName=pname;
  S.bodies=mapped;
  // When any mapped body carries device counts, flip on "Devices by Pool" so
  // those per-pool values display on Step 1, and roll them up into the
  // aggregate Return Pipe - Device Selection in the middle column.
  var PIPE_KEYS=['pipe_2in','pipe_3in','pipe_4in','pipe_6in','pipe_8in','pipe_10in'];
  var anyPerPool=mapped.some(function(b){
    return PIPE_KEYS.some(function(k){ return (b[k]|0) > 0; });
  });
  if(anyPerPool){
    S.devicesByPool=true;
    syncDevicesFromBodies();
  }
  syncGallons();
}

/* ── Step 1: Pool & System ── */
function renderStep0(){
  // ── Bodies of water ──
  var totalGal=0;
  var bodiesHtml=S.bodies.map(function(b){
    var g=bodyGallons(b);
    totalGal+=g;
    var showRm=S.bodies.length>1;
    var mode=b.inputMode||'dimensions';
    var isDim=(mode==='dimensions');
    var isGal=(mode==='gallons');
    var isSurf=(mode==='surface');

    // Divergence badge (only shown when body came from Map Pool and user input
    // has drifted from the polygon-derived estimate by more than the threshold).
    var DIV_THRESHOLD=0.15;
    var divPct=bodyDivergencePct(b);
    var divBadge='';
    if(divPct!=null && divPct>DIV_THRESHOLD){
      var mapGal=bodyGallonsFromMap(b);
      var pctStr=Math.round(divPct*100)+'%';
      var dir=bodyGallons(b)<mapGal?'below':'above';
      divBadge='<div class="ar-diverge-badge" title="Map estimate: '+fn(Math.round(mapGal))+' gal &#10;Your input: '+fn(Math.round(bodyGallons(b)))+' gal" data-body-use-map="'+b.id+'">'
        +I.warning+' '+pctStr+' '+dir+' map estimate &mdash; <u>use map</u>'
      +'</div>';
    }

    var inputContent;
    if(isSurf){
      inputContent='<div class="ar-body-surf">'
          +'<div><label class="ar-lbl">Surface (sq ft)</label>'
            +'<input class="ar-inp sm" type="number" data-bf="surface_sqft" data-bid="'+b.id+'" value="'+(b.surface_sqft||'')+'" placeholder="sq ft" /></div>'
          +'<div><label class="ar-lbl">Avg Depth</label>'
            +'<input class="ar-inp sm" type="number" data-bf="depth" data-bid="'+b.id+'" value="'+(b.depth||'')+'" placeholder="ft" /></div>'
        +'</div>';
    } else if(isDim){
      inputContent='<div class="ar-body-dims">'
          +'<div><label class="ar-lbl">Length</label>'
            +'<input class="ar-inp sm" type="number" data-bf="length" data-bid="'+b.id+'" value="'+(b.length||'')+'" placeholder="ft" /></div>'
          +'<div><label class="ar-lbl">Width</label>'
            +'<input class="ar-inp sm" type="number" data-bf="width" data-bid="'+b.id+'" value="'+(b.width||'')+'" placeholder="ft" /></div>'
          +'<div><label class="ar-lbl">Avg Depth</label>'
            +'<input class="ar-inp sm" type="number" data-bf="depth" data-bid="'+b.id+'" value="'+(b.depth||'')+'" placeholder="ft" /></div>'
        +'</div>';
    } else {
      inputContent='<div style="margin-bottom:10px">'
          +'<label class="ar-lbl">Pool Volume (Gallons)</label>'
          +'<input class="ar-inp" type="text" inputmode="numeric" data-bf="manualGallons" data-bid="'+b.id+'" value="'+(b.manualGallons?fn(parseFloat(b.manualGallons)):'')+'" placeholder="e.g. 100,000" />'
        +'</div>';
    }

    return '<div class="ar-body-card'+(g>0?' has-gal':'')+'" id="bc-'+b.id+'">'
      +'<div class="ar-body-hd">'
        +'<input class="ar-inp sm" style="flex:1;min-width:80px" data-bf="label" data-bid="'+b.id+'" value="'+esc(b.label)+'" placeholder="Pool name" />'
        +(b.fromMap?'<span class="ar-body-map-tag" title="Traced on the Map Pool step">MAP</span>':'')
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
          +'<button class="ar-imode-btn'+(isSurf?' on':'')+'" data-set-mode="surface" data-bid="'+b.id+'">'+I.drop+' Surface</button>'
          +'<button class="ar-imode-btn'+(isGal?' on':'')+'" data-set-mode="gallons" data-bid="'+b.id+'">'+I.drop+' Gallons</button>'
        +'</div>'
      +'</div>'
      +inputContent
      +divBadge
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
    // Number of Properties — for Exec Summary "Portfolio Snapshot"
    +'<div class="ar-field" style="display:flex;align-items:center;gap:12px">'
      +'<label class="ar-lbl" style="margin:0;flex:1">Number of Properties <span style="font-weight:400;color:var(--mu)">(for Exec Summary)</span></label>'
      +'<input class="ar-inp" type="number" min="1" max="999" step="1" data-f="propertiesCount" value="'+(S.propertiesCount||1)+'" style="max-width:100px" onfocus="this.select()" />'
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

  // Step 0 (Map Pool): no middle-column device content — the map takes the full width.
  if(S.step===0){ el.innerHTML=''; return; }
  if(S.step===1){
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
  } else if(S.step===2){
    // Step 3 (Pricing & Settings): Device summary + Total Water Volume + Water Loss Reduction
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
  } else if(S.step===3){
    // Step 4 (Export): Export options in middle column
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
  // Step 0 (Map Pools) has its own top-of-column nav inside #ap2 — hide the
  // calculator's shared nav entirely on that step so there's one source of truth.
  if(S.step===0){ el.style.display='none'; el.innerHTML=''; return; }
  el.style.display='';
  var hasDevices=S.pipe_2in+S.pipe_3in+S.pipe_4in+S.pipe_6in+S.pipe_8in+S.pipe_10in>0;
  var isLast=S.step===STEPS.length-1;
  // Step 1 gates Continue on at least one device selected.
  var disableNext=S.step===1 && !hasDevices;
  // Continue button is omitted on the final step — Export panel below is the action.
  var nextLabel='Continue \u2192';
  if(S.step===1) nextLabel='Continue \u2192 Pricing';
  else if(S.step===2) nextLabel='Continue \u2192 Export';
  var backLabel='\u2190 Back';
  if(S.step===1) backLabel='\u2190 Map Pools';
  else if(S.step===2) backLabel='\u2190 Pool & System';
  else if(S.step===3) backLabel='\u2190 Pricing & Settings';
  var html='<div class="ar-nav-stack">'
    +(isLast?'':'<button class="ar-btn primary full" data-nav="next"'+(disableNext?' disabled':'')+'>'+nextLabel+'</button>')
    +'<button class="ar-btn ghost full" data-nav="back">'+backLabel+'</button>'
    +(disableNext?'<div class="ar-nav-hint">Select a device above to continue</div>':'')
  +'</div>';
  el.innerHTML=html;
}

/* ── Form ── */
function renderForm(){
  var el=document.getElementById('ar2-form');
  if(!el)return;
  var stepFn=[renderMapPool,renderStep0,renderStep1,renderStep3][S.step];
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
  // Toggle map-step class so CSS hides calc columns + shows #ap2
  var root=document.getElementById('ar2');
  if(root) root.classList.toggle('map-step', S.step===0);
  renderStepper();
  renderForm();
  renderDevices();
  renderNav();
  renderResults();
  // Re-initialize map canvas dimensions after visibility toggles
  if(S.step===0 && window.AR2_MAP && AR2_MAP.resize){ setTimeout(function(){ AR2_MAP.resize(); },60); }
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
    // Only surface dimensions when the pool is in dimensions mode — not gallons mode or manual.
    var hasDims=b.inputMode!=='gallons' && b.length && b.width && b.depth;
    var dims=hasDims?b.length+'\u202f\u00d7\u202f'+b.width+'\u202f\u00d7\u202f'+b.depth+'\u00a0ft':'';
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
        +cdnImg('https://cdn.prod.website-files.com/691fa5d63fc3a5a75a65efeb/69de66925a6052561678048b_AquaRev_Fact%20Sheet_v3_RDX_Page_2.jpg','',1100)
      +'</div>'
      // Page 3: Fact Sheet — Facts: Real World Results
      +'<div class="rpt-fs-img-page">'
        +cdnImg('https://cdn.prod.website-files.com/691fa5d63fc3a5a75a65efeb/69de6691362723606ee841a2_AquaRev_Fact%20Sheet_v3_RDX_Page_3.jpg','',1100)
      +'</div>';
  }

  // ── Executive Summary pages (optional, portrait only) ──
  // Helper: format dollars as either full ($X,XXX) for under $10K or compact ($XX.XK / $XXXK)
  var fmtMoneyK=function(amount){
    var n=Math.round(Number(amount)||0);
    if(Math.abs(n)<10000) return '$'+n.toLocaleString('en-US');
    var k=n/1000;
    if(Math.abs(k)<100) return '$'+k.toFixed(1)+'K';
    return '$'+Math.round(k).toLocaleString('en-US')+'K';
  };
  // Shared Exec Summary asset URLs + figures — hoisted so both portrait and
  // landscape variants can reference them (otherwise the landscape block runs
  // with these undefined when portrait Exec Summary toggle is off).
  var poolHero='https://cdn.prod.website-files.com/691fa5d63fc3a5a75a65efeb/69ef5e26db5d019b75080b52_Pool%20Top%20Shot%20Fact%20Sheet.png';
  var ritzImg='https://cdn.prod.website-files.com/691fa5d63fc3a5a75a65efeb/69ef5e25e47a5ed71f709c13_Ritz%20Fact%20Sheet%20Image.png';
  var videoThumb='https://cdn.prod.website-files.com/691fa5d63fc3a5a75a65efeb/69ef5e7b7ad1e4dd22ebb22b_Video%20Thumbnail.png';
  var deviceGraphic='https://cdn.prod.website-files.com/691fa5d63fc3a5a75a65efeb/69f5eac5d97359fb40db8d46_AquaRev-Device_Graphic-10_B.png';
  var videoUrl='https://youtu.be/zWqMcZFWpyE';
  // ── 60-Month Investment Chart (function declaration — at function-scope so it's
  //    fully hoisted, accessible from BOTH portrait and landscape Exec Summary builders).
  //    Used to be nested inside the portrait if-block, which broke the landscape path. ──
  function buildInvestmentChart(inv, totalMo, payback, net5){
    var W=540, H=300;
    var pad={top:38, right:24, bottom:36, left:96};
    var plotW=W-pad.left-pad.right;
    var plotH=H-pad.top-pad.bottom;
    // Dynamic Y range — pick a tick step that gives 4-6 ticks across the data
    // Prevents wasted whitespace at low investment levels.
    var pickStep=function(mag){
      if(mag<10000) return 2500;
      if(mag<25000) return 5000;
      if(mag<60000) return 10000;
      if(mag<150000) return 25000;
      if(mag<300000) return 50000;
      if(mag<800000) return 100000;
      if(mag<2000000) return 250000;
      return 500000;
    };
    var maxAbs=Math.max(Math.abs(Number(net5)||0), Math.abs(Number(inv)||0), 1);
    var step=pickStep(maxAbs);
    var yMax=Math.ceil(Math.max(Number(net5)||0, step)/step)*step;
    var yMin=-Math.ceil(Math.max(Number(inv)||0, step)/step)*step;
    var yRange=yMax-yMin;
    var xMax=60;
    var xCoord=function(m){return pad.left+(m/xMax)*plotW;};
    var yCoord=function(v){return pad.top+plotH-((v-yMin)/yRange)*plotH;};
    var fmtTick=function(v){var s=v<0?'-':'';var a=Math.abs(v);return s+'$'+a.toLocaleString('en-US');};
    var x0=xCoord(0), y0=yCoord(-inv), x60=xCoord(60), y60=yCoord(net5), yZero=yCoord(0);
    var paybackX=xCoord(Math.max(0,Math.min(60,payback)));
    // Build Y ticks at the dynamic step interval
    var yTicks=[];
    for(var v=yMin; v<=yMax; v+=step) yTicks.push(v);
    var svg='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 '+W+' '+H+'" class="rpt-es-chart-svg" preserveAspectRatio="xMidYMid meet">'
      +'<defs><linearGradient id="invFill" x1="0" y1="0" x2="0" y2="1">'
        +'<stop offset="0%" stop-color="#16a34a" stop-opacity="0.95"/>'
        +'<stop offset="100%" stop-color="#4ade80" stop-opacity="0.45"/>'
      +'</linearGradient></defs>';
    // Y gridlines + tick labels
    yTicks.forEach(function(v){
      var py=yCoord(v);
      svg+='<line x1="'+pad.left+'" y1="'+py+'" x2="'+(W-pad.right)+'" y2="'+py+'" stroke="#e6e9ef" stroke-width="1"/>';
      svg+='<text x="'+(pad.left-8)+'" y="'+(py+4)+'" text-anchor="end" font-size="11" fill="#222" font-family="DM Sans, sans-serif">'+fmtTick(v)+'</text>';
    });
    // X axis baseline at y=yMin
    var xBase=pad.top+plotH;
    svg+='<line x1="'+pad.left+'" y1="'+xBase+'" x2="'+(W-pad.right)+'" y2="'+xBase+'" stroke="#222" stroke-width="1"/>';
    svg+='<text x="'+x0+'" y="'+(xBase+18)+'" text-anchor="middle" font-size="11" fill="#222" font-family="DM Sans, sans-serif">0</text>';
    svg+='<text x="'+x60+'" y="'+(xBase+18)+'" text-anchor="middle" font-size="11" fill="#222" font-family="DM Sans, sans-serif">60</text>';
    svg+='<text x="14" y="'+(pad.top+plotH/2)+'" text-anchor="middle" font-size="11" fill="#222" font-family="DM Sans, sans-serif" transform="rotate(-90 14 '+(pad.top+plotH/2)+')">Cumulative Cash Flow ($)</text>';
    svg+='<text x="'+(pad.left+plotW/2)+'" y="'+(H-10)+'" text-anchor="middle" font-size="11" fill="#222" font-family="DM Sans, sans-serif">Time (Months)</text>';
    // Fill polygon — line + drop to y=0 + back to start
    var fillPath='M '+x0+' '+y0+' L '+x60+' '+y60+' L '+x60+' '+yZero+' L '+x0+' '+yZero+' Z';
    svg+='<path d="'+fillPath+'" fill="url(#invFill)"/>';
    // Line over fill (green for positive trajectory)
    svg+='<line x1="'+x0+'" y1="'+y0+'" x2="'+x60+'" y2="'+y60+'" stroke="#15803d" stroke-width="2"/>';
    // Vertical marker at payback crossover for visual reference (no overlapping text)
    if(payback>0 && payback<=60){
      svg+='<line x1="'+paybackX+'" y1="'+yZero+'" x2="'+paybackX+'" y2="'+(yZero-12)+'" stroke="#15803d" stroke-width="1.2" stroke-dasharray="2,2"/>';
      svg+='<circle cx="'+paybackX+'" cy="'+yZero+'" r="3" fill="#15803d"/>';
    }
    // Net Benefit + Payback Period now sit ABOVE the chart in their own header
    // strip (see HTML below) so they never overlap the green fill / data line.
    svg+='</svg>';
    var netBenefitTxt=fmtTick(Math.round(net5));
    var paybackTxt=(payback>0 && payback<=60)
      ? ((payback>=10?Math.round(payback):payback.toFixed(1))+' Months')
      : '—';
    return '<div class="rpt-es-chart">'
      +'<div class="rpt-es-chart-hdr">'
        +'<div class="rpt-es-chart-hdr-text">'
          +'<div class="rpt-es-chart-title">Investment &amp; Return Profile<br><span class="rpt-es-chart-sub-title">5-Year Outlook</span></div>'
          +'<div class="rpt-es-chart-sub">Based on one time capital investment. 60 Month financing available based on location.</div>'
        +'</div>'
        +'<div class="rpt-es-chart-stats">'
          +'<div class="rpt-es-chart-stat-net">'+netBenefitTxt+' Net Benefit</div>'
          +'<div class="rpt-es-chart-stat-pb">Payback Period: '+paybackTxt+'</div>'
        +'</div>'
      +'</div>'
      +svg
    +'</div>';
  }
  // Shared chart HTML — built when any Exec Summary variant is on
  var esChartHtml='';
  if(EX.inclExecSummary || EX.inclLsExecSummary){
    esChartHtml=buildInvestmentChart(R.inv||0, R.total_mo||0, R.payback||0, R.net5||0);
  }
  var execSummaryHtml='';
  if(EX.inclExecSummary && EX.layout==='portrait'){
    var esPropsCount=Math.max(1, parseInt(S.propertiesCount,10)||1);
    var esPoolCount=S.manualVolume?(parseInt(S.manualPoolCount,10)||1):S.bodies.length;
    var esVolume=S.pool_gallons||0;
    var esGrossMo=R.total_mo||0;
    var esGrossYr=R.total_yr||0;
    var esNet5=R.net5||0;
    var esInv=R.inv||0;
    var esAdvMo=R.adv_mo||0;
    var esPayback=R.payback||0;
    var esPropName=esc(S.propertyName||'The Property');

    // Reusable footer band (same as Assessment + Pool Profile pages)
    var esFooterBand='<div class="rpt-foot rpt-es-foot">'
      +'<div class="rpt-foot-logo">AQUAREV WATER</div>'
      +'<div class="rpt-foot-info">'
        +'t. 832-979-6758 · <a href="mailto:water@aquarevwater.us" style="color:inherit;text-decoration:none">water@aquarevwater.us</a> · <a href="https://www.aquarevwater.us" target="_blank" style="color:inherit;text-decoration:none">aquarevwater.us</a> · Made in USA<br>'
        +'NSF/ANSI 50 · NSF-372 Lead-Free · US Pat. 10,934,180 · 11,358,881 · 12,037,269'
      +'</div>'
    +'</div>';

    // Page 1 header band (Assessment-style logo + property name)
    var esHeader='<div class="rpt-es-head">'
      +'<div class="rpt-es-head-left">'
        +'<div class="rpt-es-logo">AQUAREV WATER</div>'
        +'<div class="rpt-es-logo-sub">Executive Summary</div>'
      +'</div>'
      +'<div class="rpt-es-head-right">'
        +'<div class="rpt-es-prop-name">'+esPropName+'</div>'
        +'<div class="rpt-es-prop-date">'+today+'</div>'
        +'<span class="rpt-es-nsf-badge">NSF/ANSI 50 Certified · IAPMO</span>'
      +'</div>'
    +'</div>';

    // (buildInvestmentChart is hoisted above — see definition before esChartHtml.)

    // Optional Custom section at bottom of Page 1 — only renders if title or copy filled
    var ctTitle=(EX.execCustomTitle||'').trim();
    var ctCopy=(EX.execCustomCopy||'').trim();
    var esCustom='';
    if(ctTitle||ctCopy){
      esCustom='<div class="rpt-es-custom">'
        +(ctTitle?'<div class="rpt-es-custom-title">'+esc(ctTitle)+'</div>':'')
        +(ctCopy?'<div class="rpt-es-custom-copy">'+esc(ctCopy).replace(/\n/g,'<br>')+'</div>':'')
      +'</div>';
    }

    // ── PAGE 1 ──
    var esPage1='<div class="rpt-es-page">'
      +esHeader
      +'<div class="rpt-es-body-1">'
        +'<div class="rpt-es-left">'
        +'<div class="rpt-es-title">Objective</div>'
        +'<p class="rpt-es-lead">'+esPropName+' has a clear and immediate opportunity to materially reduce recurring pool operating costs while elevating water performance. By standardizing the deployment of AquaRev Water devices\u2014engineered to seamlessly integrate with and enhance existing pool systems\u2014the Property can unlock measurable improvements in operating efficiency, Net Operating Income (NOI), and ESG performance, without disruption to current infrastructure.</p>'
        +'<div class="rpt-es-h2">Why This Matters</div>'
        +'<p class="rpt-es-p">Pool and spa environments represent both a signature guest experience and a persistent operational burden within hospitality assets. These systems are inherently cost-intensive and often unpredictable\u2014driven by ongoing chemical consumption, labor demands, energy use, water loss, and equipment degradation.</p>'
        +'<p class="rpt-es-p">While day-to-day management sits with Engineering, the broader impact extends far beyond operations\u2014directly influencing NOI, guest satisfaction, brand perception, and compliance with evolving sustainability standards. Stabilizing and optimizing pool performance is therefore not simply a maintenance function, but a strategic lever for both financial and experiential value creation.</p>'
        +'<div class="rpt-es-h2">Assessment Snapshot</div>'
        +'<p class="rpt-es-p">A general property assessment was conducted to estimate the measurable impact of deploying AquaRev Water devices across the pool and aquatic facilities of the property.</p>'
        +'<p class="rpt-es-p"><strong>Assessment Scope:</strong> '+esPropsCount+' '+(esPropsCount===1?'Property':'Properties')+' / '+esPoolCount+' '+(esPoolCount===1?'Feature Pool':'Feature Pools')+'</p>'
        +'<p class="rpt-es-p"><strong>Estimated Total Active Pool Volume:</strong></p>'
        +'<div class="rpt-es-bignum">'+fn(Math.round(esVolume))+' <span class="rpt-es-bignum-unit">US Gallons</span></div>'
        +'<div class="rpt-es-h2">Financial Impacts</div>'
        +'<p class="rpt-es-p">Based on the applicable portfolio model and proven performance metrics, the assessment estimates:</p>'
        +'<div class="rpt-es-statline"><span class="v">'+fmtMoneyK(esGrossMo)+'</span><span class="k">Gross Monthly Savings</span></div>'
        +'<div class="rpt-es-statline"><span class="v">'+fmtMoneyK(esGrossYr)+'</span><span class="k">Gross Annual Savings</span></div>'
        +'<div class="rpt-es-statline"><span class="v">'+fmtMoneyK(esNet5)+'</span><span class="k">5-Year NET Benefit</span></div>'
        +'<div class="rpt-es-h2">Investment Profile 5-Year Outlook</div>'
        +'<div class="rpt-es-statline"><span class="v">'+fmtMoneyK(esInv)+'</span><span class="k">One-Time Investment</span></div>'
        +'<div class="rpt-es-statline"><span class="v">'+fmtMoneyK(esAdvMo)+'</span><span class="k">Monthly Payment Option</span></div>'
        +'<div class="rpt-es-statline"><span class="v">'+(esPayback>0?(esPayback>=10?Math.round(esPayback):esPayback.toFixed(1))+' Months':'\u2014')+'</span><span class="k">Payback Period</span></div>'
      +'</div>'
      +'<div class="rpt-es-right">'
        // ── AquaRev Water Technology + Operational Advantages | Outcome Impact (right column only) ──
        +'<div class="rpt-es-h2 rpt-es-h2-light">AquaRev Water Technology</div>'
        +'<p class="rpt-es-p-light rpt-es-tech-blurb">AquaRev Water is a passive, in-line device that enhances existing pool and spa treatment systems through the controlled application of hydrodynamic cavitation within a patented chamber. As water flows through the system, engineered pressure differentials continuously generate and collapse nano bubbles in a precise, high-frequency cycle.</p>'
        +'<p class="rpt-es-p-light rpt-es-tech-blurb">The implosion of these nano bubbles produces localized, high-energy micro-events—creating transient thermal, mechanical, and oxidative effects within the water. This includes the formation of hydroxyl radicals (OH•), high-shear microjets, and micro-scale temperature spikes, which work simultaneously to disrupt bacteria, break down chloramines, degrade organic contaminants, and stabilize overall water chemistry.</p>'
        +'<p class="rpt-es-p-light rpt-es-tech-blurb">In parallel, these cavitation-driven reactions promote particle agglomeration, enabling sub-micron contaminants to combine into filterable sizes, while also modifying water surface characteristics to improve stability and reduce evaporation loss.</p>'
        +'<p class="rpt-es-p-light rpt-es-tech-blurb">The result is a continuously conditioned water system: cleaner, clearer, and more stable water with reduced chemical demand, improved filtration efficiency, and enhanced operational performance—delivered without added energy, moving parts, or system complexity.</p>'
        +'<div class="rpt-es-device rpt-es-device-full">'+cdnImg(deviceGraphic,'',900)+'</div>'
        +'<div class="rpt-es-feat-grid">'
          +'<div class="rpt-es-feat-col">'
            +'<div class="rpt-es-h3-light">OPERATIONAL ADVANTAGES</div>'
            +'<ul class="rpt-es-ul">'
              +'<li>Zero Power Required</li>'
              +'<li>Zero Maintenance</li>'
              +'<li>Zero Moving Parts</li>'
              +'<li>~1 Hour Installation</li>'
              +'<li>NSF/ANSI 50 Certified</li>'
              +'<li>Lifetime Warranty</li>'
            +'</ul>'
          +'</div>'
          +'<div class="rpt-es-feat-col">'
            +'<div class="rpt-es-h3-light">OUTCOME IMPACT</div>'
            +'<ul class="rpt-es-ul">'
              +'<li>Cleaner, naturally conditioned pool water</li>'
              +'<li>Major OpEx and water savings</li>'
              +'<li>Positive NOI contribution</li>'
              +'<li>ESG impacts aligned with sustainability targets</li>'
              +'<li>No downtime or disruption to operations</li>'
              +'<li>Improved guest experience</li>'
              +'<li>Compliance / exposure risk mitigation</li>'
            +'</ul>'
          +'</div>'
        +'</div>'
        +esChartHtml
        +esCustom
      +'</div>'
      +'</div>'
      +esFooterBand
    +'</div>';

    // ── PAGE 2 ──
    var esPage2='<div class="rpt-es-page rpt-es-page-2">'
      +esHeader
      +'<div class="rpt-es-hero">'+cdnImg(poolHero,'',1100)+'</div>'
      +'<div class="rpt-es-body-2">'
        +'<div class="rpt-es-left rpt-es-left-2">'
          +'<div class="rpt-es-h2">Active Use Case Reference</div>'
          +'<p class="rpt-es-p"><strong>The Ritz-Carlton, Turtle Bay \u2014 O\u2018ahu, HI</strong></p>'
          +'<div class="rpt-es-ritz">'+cdnImg(ritzImg,'',600)+'</div>'
          +'<p class="rpt-es-p">Active use case with measured outcomes:</p>'
          +'<div class="rpt-es-statline"><span class="v">68%</span><span class="k">Operating Cost Reduction</span></div>'
          +'<div class="rpt-es-statline"><span class="v">30%</span><span class="k">Salt Reduction</span></div>'
          +'<div class="rpt-es-statline"><span class="v">70%</span><span class="k">Water Loss Reduction</span></div>'
          +'<div class="rpt-es-statline"><span class="v">20%</span><span class="k">Energy-Use Reduction</span></div>'
          +'<div class="rpt-es-statline"><span class="v">50%</span><span class="k">Sodium Bicarbonate Reduction</span></div>'
          +'<div class="rpt-es-statline"><span class="v">43%</span><span class="k">Acid Reduction</span></div>'
          +'<blockquote class="rpt-es-quote"><span class="quote-mark">\u201C</span>Thank you again, we are still seeing savings since installing AquaRev.<span class="quote-mark">\u201D</span><cite>Chief Engineer \u2014 Turtle Bay, Oahu, HI</cite></blockquote>'
          +'<div class="rpt-es-h2">ESG and Sustainability Value</div>'
          +'<p class="rpt-es-p">Implementation of AquaRev Water technology supports measurable ESG outcomes through:</p>'
          +'<ul class="rpt-es-ul-dark">'
            +'<li><strong>Environmental:</strong> Lower chemical load released, less packaging and freight</li>'
            +'<li><strong>Conservation:</strong> Reduced water loss from evaporation and backwashing</li>'
            +'<li><strong>Energy:</strong> Lower energy consumption in treatment cycles; no added power requirement</li>'
            +'<li><strong>Social:</strong> Healthier swimming environment for guests and responsible operations</li>'
          +'</ul>'
        +'</div>'
        +'<div class="rpt-es-right rpt-es-right-2">'
          // ── Documented Performance Outcomes — top of Page 2 right column ──
          +'<div class="rpt-es-h2 rpt-es-h2-light">Documented Performance Outcomes</div>'
          +'<p class="rpt-es-p-light">Based on real-world use case averages and certified lab reports, properties deploying AquaRev Water have achieved material reductions across key cost centers:</p>'
          +'<div class="rpt-es-outcome-cards">'
            +'<div class="rpt-es-out-card"><div class="rpt-es-out-pct">54%</div><div class="rpt-es-out-lbl">Chlorine Reduction</div></div>'
            +'<div class="rpt-es-out-card"><div class="rpt-es-out-pct">44%</div><div class="rpt-es-out-lbl">Acid Reduction</div></div>'
            +'<div class="rpt-es-out-card"><div class="rpt-es-out-pct">44%</div><div class="rpt-es-out-lbl">Water Loss Reduction</div></div>'
            +'<div class="rpt-es-out-card"><div class="rpt-es-out-pct">20%</div><div class="rpt-es-out-lbl">Energy-Use Reduction</div></div>'
            +'<div class="rpt-es-out-card"><div class="rpt-es-out-pct">70%</div><div class="rpt-es-out-lbl">Fast Degradation</div></div>'
            +'<div class="rpt-es-out-card"><div class="rpt-es-out-pct">200%</div><div class="rpt-es-out-lbl">Softer Water</div></div>'
          +'</div>'
          +'<div class="rpt-es-h2 rpt-es-h2-light">Why This is a Fit</div>'
          +'<p class="rpt-es-p-light">The AquaRev Water technology is designed to be a low-friction operational improvement across all aquatic facilities.</p>'
          +'<ul class="rpt-es-ul">'
            +'<li>Non-disruptive installation &amp; no downtime</li>'
            +'<li>No new operating complexity</li>'
            +'<li>Operations and engineering-aligned</li>'
            +'<li>Ownership value \u2014 lower OpEx &amp; stronger NOI</li>'
          +'</ul>'
          +'<div class="rpt-es-h2 rpt-es-h2-light">Proposed Next Step</div>'
          +'<p class="rpt-es-p-light"><strong>Presentation &amp; Alignment Discovery</strong></p>'
          +'<ul class="rpt-es-ul">'
            +'<li>Points of Contact Alignment</li>'
            +'<li>Review of Product and Financial Benefits</li>'
          +'</ul>'
          +'<div class="rpt-es-h2 rpt-es-h2-light">Resources</div>'
          +'<p class="rpt-es-link"><a href="https://www.aquarevwater.us/techpaper" target="_blank"><svg class="rpt-es-link-ico" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 2h7l3 3v9H3V2z"/><path d="M10 2v3h3"/><path d="M5.5 8h5M5.5 10.5h5M5.5 13h3"/></svg>Technical White Paper</a></p>'
          +'<p class="rpt-es-link"><a href="https://www.aquarevwater.us/data" target="_blank"><svg class="rpt-es-link-ico" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M2 13h12"/><path d="M4 13V8"/><path d="M7 13V5"/><path d="M10 13V9"/><path d="M13 13V3"/></svg>Resources, Data and Lab Reports</a></p>'
          +'<p class="rpt-es-link"><a href="https://cdn.prod.website-files.com/691fa5d63fc3a5a75a65efeb/69cfba72e683a7267308c79a_AquaRev_CaseStudy_Ritz_TB_FIN.pdf" target="_blank"><svg class="rpt-es-link-ico" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="12" height="11" rx="1"/><path d="M2 6h12"/><path d="M5 9h6M5 11h4"/></svg>The Ritz-Carlton, Turtle Bay \u2014 Case Study</a></p>'
          +'<div class="rpt-es-h2 rpt-es-h2-light">Video Summary</div>'
          +'<p class="rpt-es-p-light" style="margin-bottom:6px">Click to view.</p>'
          +'<a href="'+videoUrl+'" target="_blank" class="rpt-es-video">'+cdnImg(videoThumb,'',600)+'</a>'
        +'</div>'
      +'</div>'
      +esFooterBand
    +'</div>';

    execSummaryHtml=esPage1+esPage2;
  }

  // ════════════════════════════════════════════════════════════════════
  //  LANDSCAPE EXPORT VARIANTS
  //  Toggled separately from portrait. Render only when EX.layout==='landscape'.
  // ════════════════════════════════════════════════════════════════════

  // ── Landscape Cover ──
  var lsCoverHtml='';
  if(EX.inclLsCover && EX.layout==='landscape'){
    var lsCoverBg='https://cdn.prod.website-files.com/691fa5d63fc3a5a75a65efeb/69f3c04a02bc8a4cee714489_Cover_Landscape-1.png';
    lsCoverHtml='<div class="rpt-cover-page rpt-ls-cover-page">'
      +cdnImg(lsCoverBg,'class="rpt-cover-bg"',1400)
      +'<div class="rpt-ls-cover-overlay">'
        +'<div class="rpt-ls-cover-tagline">Water Enhancement &amp; Cost Saving Assessment</div>'
        +'<div class="rpt-ls-cover-prop">'+esc(prop)+'</div>'
        +'<div class="rpt-ls-cover-date">'+today+'</div>'
      +'</div>'
    +'</div>';
  }

  // ── Landscape Back Cover ──
  var lsBackCoverHtml='';
  if(EX.inclLsBackCover && EX.layout==='landscape'){
    var lsBackBg='https://cdn.prod.website-files.com/691fa5d63fc3a5a75a65efeb/69f3c14e714d529c46361620_Back-Cover_Landscape-1.png';
    lsBackCoverHtml='<div class="rpt-fs-img-page rpt-back-cover-page rpt-ls-back-cover-page">'
      +cdnImg(lsBackBg,'',1400)
    +'</div>';
  }

  // ── Landscape Exec Summary (3 pages) ──
  // Impact-first design: each page uses the wide aspect for cinematic feel.
  // Page 1: Header + Objective/Why + Snapshot/Financials (3-col body)
  // Page 2: AquaRev Water Technology + Device + Operational Advantages | Outcome Impact + Performance %s
  // Page 3: Active Use Case + ESG + Why Fit + Next Step + Resources + Video + Custom (if filled)
  var lsExecSummaryHtml='';
  if(EX.inclLsExecSummary && EX.layout==='landscape'){
    var lsPropsCount=Math.max(1, parseInt(S.propertiesCount,10)||1);
    var lsPoolCount=S.manualVolume?(parseInt(S.manualPoolCount,10)||1):S.bodies.length;
    var lsVolume=S.pool_gallons||0;
    var lsGrossMo=R.total_mo||0;
    var lsGrossYr=R.total_yr||0;
    var lsNet5=R.net5||0;
    var lsInv=R.inv||0;
    var lsAdvMo=R.adv_mo||0;
    var lsPayback=R.payback||0;
    var lsPropName=esc(S.propertyName||'The Property');
    var lsCtTitle=(EX.execCustomTitle||'').trim();
    var lsCtCopy=(EX.execCustomCopy||'').trim();

    // Reusable header band for all 3 landscape Exec Summary pages
    var lsHeader='<div class="rpt-es-head rpt-ls-es-head">'
      +'<div class="rpt-es-head-left">'
        +'<div class="rpt-es-logo">AQUAREV WATER</div>'
        +'<div class="rpt-es-logo-sub">Executive Summary</div>'
      +'</div>'
      +'<div class="rpt-es-head-right">'
        +'<div class="rpt-es-prop-name">'+lsPropName+'</div>'
        +'<div class="rpt-es-prop-date">'+today+'</div>'
        +'<span class="rpt-es-nsf-badge">NSF/ANSI 50 Certified · IAPMO</span>'
      +'</div>'
    +'</div>';

    // Reusable footer band (same as Assessment + Pool Profile)
    var lsFooter='<div class="rpt-foot rpt-ls-es-foot">'
      +'<div class="rpt-foot-logo">AQUAREV WATER</div>'
      +'<div class="rpt-foot-info">'
        +'<a href="mailto:water@aquarevwater.us" style="color:inherit;text-decoration:none">water@aquarevwater.us</a> · <a href="https://www.aquarevwater.us" target="_blank" style="color:inherit;text-decoration:none">aquarevwater.us</a> · t. 832-979-6758 · Made in USA<br>'
        +'NSF/ANSI 50 · NSF-372 Lead-Free · US Pat. 10,934,180 · 11,358,881 · 12,037,269'
      +'</div>'
    +'</div>';

    // ── PAGE 1 ── 3-column layout: blue narrative | white tech | white financials.
    //   Col 1 (dark/blue):  Objective → Why This Matters
    //   Col 2 (light/white): AquaRev Water Technology → Device → Operational Advantages → Outcome Impact
    //   Col 3 (light/white): Assessment Snapshot → Financial Impacts → Investment Profile → Investment & Return chart
    //   Custom section drawer (if filled) appears at the bottom of col 3.
    var lsPage1='<div class="rpt-ls-es-page rpt-ls-es-page-1">'
      +lsHeader
      +'<div class="rpt-ls-es-body-3col">'
        // ── Col 1 (dark) — Objective + Why This Matters + Operational Advantages + Outcome Impact ──
        // "Objective" uses h2 styling (matching other column headings) so all
        // three column paragraph tops align on the same baseline.
        // Operational Advantages + Outcome Impact 2-col grid anchored to bottom.
        +'<div class="rpt-ls-es-col rpt-ls-es-col-dark rpt-ls-col-with-anchor">'
          +'<div class="rpt-ls-col-content">'
            +'<div class="rpt-es-h2">Objective</div>'
            +'<p class="rpt-es-lead">'+lsPropName+' has a clear and immediate opportunity to materially reduce recurring pool operating costs while elevating water performance. By standardizing the deployment of AquaRev Water devices—engineered to seamlessly integrate with and enhance existing pool systems—the Property can unlock measurable improvements in operating efficiency, Net Operating Income (NOI), and ESG performance, without disruption to current infrastructure.</p>'
            +'<div class="rpt-es-h2">Why This Matters</div>'
            +'<p class="rpt-es-p">Pool and spa environments represent both a signature guest experience and a persistent operational burden within hospitality assets. These systems are inherently cost-intensive and often unpredictable—driven by ongoing chemical consumption, labor demands, energy use, water loss, and equipment degradation.</p>'
            +'<p class="rpt-es-p">While day-to-day management sits with Engineering, the broader impact extends far beyond operations—directly influencing NOI, guest satisfaction, brand perception, and compliance with evolving sustainability standards. Stabilizing and optimizing pool performance is therefore not simply a maintenance function, but a strategic lever for both financial and experiential value creation.</p>'
          +'</div>'
          +'<div class="rpt-ls-col-anchor">'
            +'<div class="rpt-es-feat-grid">'
              +'<div class="rpt-es-feat-col">'
                +'<div class="rpt-es-h3-dark">OPERATIONAL ADVANTAGES</div>'
                +'<ul class="rpt-es-ul-dark">'
                  +'<li>Zero Power Required</li>'
                  +'<li>Zero Maintenance</li>'
                  +'<li>Zero Moving Parts</li>'
                  +'<li>~1 Hour Installation</li>'
                  +'<li>NSF/ANSI 50 Certified</li>'
                  +'<li>Lifetime Warranty</li>'
                +'</ul>'
              +'</div>'
              +'<div class="rpt-es-feat-col">'
                +'<div class="rpt-es-h3-dark">OUTCOME IMPACT</div>'
                +'<ul class="rpt-es-ul-dark">'
                  +'<li>Cleaner, naturally conditioned pool water</li>'
                  +'<li>Major OpEx and water savings</li>'
                  +'<li>Positive NOI contribution</li>'
                  +'<li>ESG impacts aligned with sustainability targets</li>'
                  +'<li>No downtime or disruption to operations</li>'
                  +'<li>Improved guest experience</li>'
                  +'<li>Compliance / exposure risk mitigation</li>'
                +'</ul>'
              +'</div>'
            +'</div>'
          +'</div>'
        +'</div>'
        // ── Col 2 (light) — AquaRev Water Technology + Device cutaway + Inline Device Installation photo ──
        +'<div class="rpt-ls-es-col rpt-ls-es-col-light rpt-ls-col-with-anchor">'
          +'<div class="rpt-ls-col-content">'
            +'<div class="rpt-es-h2 rpt-es-h2-light">AquaRev Water Technology</div>'
            +'<p class="rpt-es-p-light rpt-es-tech-blurb">AquaRev Water is a passive, in-line device that enhances existing pool and spa treatment systems through the controlled application of hydrodynamic cavitation within a patented chamber. As water flows through the system, engineered pressure differentials continuously generate and collapse nano bubbles in a precise, high-frequency cycle.</p>'
            +'<p class="rpt-es-p-light rpt-es-tech-blurb">The implosion of these nano bubbles produces localized, high-energy micro-events—creating transient thermal, mechanical, and oxidative effects within the water. This includes the formation of hydroxyl radicals (OH•), high-shear microjets, and micro-scale temperature spikes, which work simultaneously to disrupt bacteria, break down chloramines, degrade organic contaminants, and stabilize overall water chemistry.</p>'
            +'<p class="rpt-es-p-light rpt-es-tech-blurb">The result is a continuously conditioned water system: cleaner, clearer, and more stable water with reduced chemical demand, improved filtration efficiency, and enhanced operational performance—delivered without added energy, moving parts, or system complexity.</p>'
            +'<div class="rpt-es-device-full">'+cdnImg(deviceGraphic,'',900)+'</div>'
          +'</div>'
          +'<div class="rpt-ls-col-anchor">'
            +'<div class="rpt-ls-col-anchor-title-light">AquaRev Water — Inline Device Installation</div>'
            +cdnImg('https://cdn.prod.website-files.com/691fa5d63fc3a5a75a65efeb/69f4d1ee8f81cc5957ead786_AquaRev_Pump_Room%203.png','class="rpt-ls-col-anchor-img"',900)
          +'</div>'
        +'</div>'
        // ── Col 3 (dark/blue) — Assessment Snapshot + Financial Impacts + Investment Profile + Chart ──
        // Sections wrapped in .rpt-ls-section and column uses .rpt-ls-distribute
        // so content spreads evenly down the column with consistent breathing room.
        +'<div class="rpt-ls-es-col rpt-ls-es-col-dark rpt-ls-distribute">'
          +'<div class="rpt-ls-section">'
            +'<div class="rpt-es-h2">Assessment Snapshot</div>'
            +'<p class="rpt-es-p">A general property assessment was conducted to estimate the measurable impact of deploying AquaRev Water devices across the pool and aquatic facilities of the property.</p>'
            // Assessment Scope as a 2-stat panel — visually striking properties / pools split
            +'<div class="rpt-ls-scope-row">'
              +'<div class="rpt-ls-scope-item">'
                +'<div class="rpt-ls-scope-num">'+lsPropsCount+'</div>'
                +'<div class="rpt-ls-scope-lbl">'+(lsPropsCount===1?'Property':'Properties')+'</div>'
              +'</div>'
              +'<div class="rpt-ls-scope-divider"></div>'
              +'<div class="rpt-ls-scope-item">'
                +'<div class="rpt-ls-scope-num">'+lsPoolCount+'</div>'
                +'<div class="rpt-ls-scope-lbl">'+(lsPoolCount===1?'Feature Pool':'Feature Pools')+'</div>'
              +'</div>'
            +'</div>'
            +'<p class="rpt-es-p rpt-ls-volume-lbl">Estimated Total Active Pool Volume</p>'
            +'<div class="rpt-es-bignum">'+fn(Math.round(lsVolume))+' <span class="rpt-es-bignum-unit">US Gallons</span></div>'
          +'</div>'
          // Financial Impacts + Investment Profile combined as ONE section, with
          // internal padding between the two subsections via .rpt-ls-subhead margin.
          // External gaps (above + below) are handled by the .rpt-ls-distribute
          // pattern; this internal gap is calibrated to be tighter than external
          // gaps so the two parts read as related-but-distinct subsections.
          +'<div class="rpt-ls-section rpt-ls-financial-block">'
            +'<div class="rpt-es-h2">Financial Impacts</div>'
            +'<div class="rpt-es-statline"><span class="v">'+fmtMoneyK(lsGrossMo)+'</span><span class="k">Gross Monthly Savings</span></div>'
            +'<div class="rpt-es-statline"><span class="v">'+fmtMoneyK(lsGrossYr)+'</span><span class="k">Gross Annual Savings</span></div>'
            +'<div class="rpt-es-statline"><span class="v">'+fmtMoneyK(lsNet5)+'</span><span class="k">5-Year NET Benefit</span></div>'
            +'<div class="rpt-es-h2 rpt-ls-subhead">Investment Profile 5-Year Outlook</div>'
            +'<div class="rpt-es-statline"><span class="v">'+fmtMoneyK(lsInv)+'</span><span class="k">One-Time Investment</span></div>'
            +'<div class="rpt-es-statline"><span class="v">'+fmtMoneyK(lsAdvMo)+'</span><span class="k">Monthly Payment Option</span></div>'
            +'<div class="rpt-es-statline"><span class="v">'+(lsPayback>0?(lsPayback>=10?Math.round(lsPayback):lsPayback.toFixed(1))+' Months':'—')+'</span><span class="k">Payback Period</span></div>'
          +'</div>'
          // Chart wrapped in white card so SVG text + axes remain readable on the blue column
          +'<div class="rpt-ls-section">'
            +'<div class="rpt-ls-chart-card">'+esChartHtml+'</div>'
          +'</div>'
          +(lsCtTitle||lsCtCopy
            ? '<div class="rpt-es-custom rpt-ls-es-custom">'
              +(lsCtTitle?'<div class="rpt-es-custom-title">'+esc(lsCtTitle)+'</div>':'')
              +(lsCtCopy?'<div class="rpt-es-custom-copy">'+esc(lsCtCopy).replace(/\n/g,'<br>')+'</div>':'')
            +'</div>'
            :'')
        +'</div>'
      +'</div>'
      +lsFooter
    +'</div>';

    // ── PAGE 2 ── Mirrors PORTRAIT Page 2 order across 3 landscape columns:
    //   Col 1 (dark): Active Use Case Reference (heading + image + 6 stats + quote) → ESG and Sustainability Value
    //   Col 2 (light): Documented Performance Outcomes → Why This is a Fit
    //   Col 3 (light): Proposed Next Step → Resources → Video Summary
    //   Reading column-then-row, this matches portrait Page 2 left/right column item order exactly.
    var lsPage2='<div class="rpt-ls-es-page rpt-ls-es-page-2">'
      +lsHeader
      +'<div class="rpt-ls-es-body-3col rpt-ls-es-body-p2">'
        // ── Col 1 (dark) — Active Use Case + Quote + ESG ──
        // Three sections wrapped in .rpt-ls-section so the column distributes
        // them evenly via justify-content:space-between. The quote sits as its
        // own section between the stats and ESG so gaps above and below balance.
        +'<div class="rpt-ls-es-col rpt-ls-es-col-dark rpt-ls-distribute">'
          +'<div class="rpt-ls-section">'
            +'<div class="rpt-es-h2">Active Use Case Reference</div>'
            +'<p class="rpt-es-p"><strong>The Ritz-Carlton, Turtle Bay — O‘ahu, HI</strong></p>'
            +'<div class="rpt-es-ritz">'+cdnImg(ritzImg,'',600)+'</div>'
            +'<p class="rpt-es-p">Active use case with measured outcomes:</p>'
            +'<div class="rpt-es-statline"><span class="v">68%</span><span class="k">Operating Cost Reduction</span></div>'
            +'<div class="rpt-es-statline"><span class="v">30%</span><span class="k">Salt Reduction</span></div>'
            +'<div class="rpt-es-statline"><span class="v">70%</span><span class="k">Water Loss Reduction</span></div>'
            +'<div class="rpt-es-statline"><span class="v">20%</span><span class="k">Energy-Use Reduction</span></div>'
            +'<div class="rpt-es-statline"><span class="v">50%</span><span class="k">Sodium Bicarbonate Reduction</span></div>'
            +'<div class="rpt-es-statline"><span class="v">43%</span><span class="k">Acid Reduction</span></div>'
          +'</div>'
          +'<div class="rpt-ls-section">'
            +'<blockquote class="rpt-es-quote"><span class="quote-mark">“</span>Thank you again, we are still seeing savings since installing AquaRev.<span class="quote-mark">”</span><cite>Chief Engineer — Turtle Bay, Oahu, HI</cite></blockquote>'
          +'</div>'
          +'<div class="rpt-ls-section">'
            +'<div class="rpt-es-h2">ESG and Sustainability Value</div>'
            +'<p class="rpt-es-p">Implementation of AquaRev Water technology supports measurable ESG outcomes through:</p>'
            +'<ul class="rpt-es-ul-dark">'
              +'<li><strong>Environmental:</strong> Lower chemical load released, less packaging and freight</li>'
              +'<li><strong>Conservation:</strong> Reduced water loss from evaporation and backwashing</li>'
              +'<li><strong>Energy:</strong> Lower energy consumption in treatment cycles; no added power requirement</li>'
              +'<li><strong>Social:</strong> Healthier swimming environment for guests and responsible operations</li>'
            +'</ul>'
          +'</div>'
        +'</div>'
        // ── Col 2 (light) — Documented Performance → Why-Fit → Resources → Video Summary
        //   Each section wrapped in .rpt-ls-section so they distribute vertically
        //   via justify-content:space-between, filling the column height proportionately.
        +'<div class="rpt-ls-es-col rpt-ls-es-col-light rpt-ls-es-col-2of2 rpt-ls-distribute">'
          +'<div class="rpt-ls-section">'
            +'<div class="rpt-es-h2 rpt-es-h2-light">Documented Performance Outcomes</div>'
            +'<p class="rpt-es-p-light">Based on real-world use case averages and certified lab reports, properties deploying AquaRev Water have achieved material reductions across key cost centers:</p>'
            +'<div class="rpt-es-outcome-cards rpt-ls-outcome-cards">'
              +'<div class="rpt-es-out-card"><div class="rpt-es-out-pct">54%</div><div class="rpt-es-out-lbl">Chlorine Reduction</div></div>'
              +'<div class="rpt-es-out-card"><div class="rpt-es-out-pct">44%</div><div class="rpt-es-out-lbl">Acid Reduction</div></div>'
              +'<div class="rpt-es-out-card"><div class="rpt-es-out-pct">44%</div><div class="rpt-es-out-lbl">Water Loss Reduction</div></div>'
              +'<div class="rpt-es-out-card"><div class="rpt-es-out-pct">20%</div><div class="rpt-es-out-lbl">Energy-Use Reduction</div></div>'
              +'<div class="rpt-es-out-card"><div class="rpt-es-out-pct">70%</div><div class="rpt-es-out-lbl">Fast Degradation</div></div>'
              +'<div class="rpt-es-out-card"><div class="rpt-es-out-pct">200%</div><div class="rpt-es-out-lbl">Softer Water</div></div>'
            +'</div>'
          +'</div>'
          +'<div class="rpt-ls-section">'
            +'<div class="rpt-es-h2 rpt-es-h2-light">Why This is a Fit</div>'
            +'<p class="rpt-es-p-light">The AquaRev Water technology is designed to be a low-friction operational improvement across all aquatic facilities.</p>'
            +'<ul class="rpt-es-ul">'
              +'<li>Non-disruptive installation &amp; no downtime</li>'
              +'<li>No new operating complexity</li>'
              +'<li>Operations and engineering-aligned</li>'
              +'<li>Ownership value — lower OpEx &amp; stronger NOI</li>'
            +'</ul>'
          +'</div>'
          +'<div class="rpt-ls-section">'
            +'<div class="rpt-es-h2 rpt-es-h2-light">Resources</div>'
            +'<p class="rpt-es-p-light rpt-ls-video-caption-pre">Click to open</p>'
            +'<p class="rpt-es-link"><a href="https://www.aquarevwater.us/techpaper" target="_blank">'
              +'<svg class="rpt-es-link-ico" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 2h7l3 3v9H3V2z"/><path d="M10 2v3h3"/><path d="M5.5 8h5M5.5 10.5h5M5.5 13h3"/></svg>'
              +'Technical White Paper</a></p>'
            +'<p class="rpt-es-link"><a href="https://www.aquarevwater.us/data" target="_blank">'
              +'<svg class="rpt-es-link-ico" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M2 13h12"/><path d="M4 13V8"/><path d="M7 13V5"/><path d="M10 13V9"/><path d="M13 13V3"/></svg>'
              +'Resources, Data and Lab Reports</a></p>'
            +'<p class="rpt-es-link"><a href="https://cdn.prod.website-files.com/691fa5d63fc3a5a75a65efeb/69cfba72e683a7267308c79a_AquaRev_CaseStudy_Ritz_TB_FIN.pdf" target="_blank">'
              +'<svg class="rpt-es-link-ico" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="12" height="11" rx="1"/><path d="M2 6h12"/><path d="M5 9h6M5 11h4"/></svg>'
              +'The Ritz-Carlton, Turtle Bay — Case Study</a></p>'
          +'</div>'
          // Video Summary section. "Click to view" caption above thumbnail, left-justified.
          +'<div class="rpt-ls-section">'
            +'<div class="rpt-es-h2 rpt-es-h2-light">Video Summary</div>'
            +'<p class="rpt-es-p-light rpt-ls-video-caption-pre">Click to view</p>'
            +'<a href="'+videoUrl+'" target="_blank" class="rpt-es-video rpt-ls-video-hero">'+cdnImg(videoThumb,'',900)+'</a>'
          +'</div>'
        +'</div>'
        // ── Col 3 (light) — Property photo column.
        //   Default: Pool Top Shot rotated 90° CW filling the column.
        //   When inclLsP2Col3Photos toggle is on AND photos are uploaded:
        //   stacked grid of up to 4 photos cropped to fit.
        +'<div class="rpt-ls-es-col rpt-ls-es-col-light rpt-ls-es-col-3of3 rpt-ls-p2c3">'
          +(EX.inclLsP2Col3Photos && EX.lsP2Col3Photos && EX.lsP2Col3Photos.length>0
            ? '<div class="rpt-ls-p2c3-stack rpt-ls-p2c3-stack-'+EX.lsP2Col3Photos.length+'">'
              + EX.lsP2Col3Photos.map(function(p){return '<div class="rpt-ls-p2c3-tile"><img src="'+p.data+'" alt="" /></div>';}).join('')
            +'</div>'
            : '<img src="https://wsrv.nl/?url='+encodeURIComponent('https://cdn.prod.website-files.com/691fa5d63fc3a5a75a65efeb/69f5e2d4389fef473e3dd4de_Product%20Shot%20NSF.png')+'&w=700&q=72&output=jpg" class="rpt-ls-p2c3-default-img" alt="" />')
        +'</div>'
      +'</div>'
      +lsFooter
    +'</div>';

    lsExecSummaryHtml=lsPage1+lsPage2;
  }

  // ── Presentation Deck — LOCKED. Will be built later; render disabled.
  //    Toggle is visually locked in Step 3 panel; this stays empty regardless.
  var presentationDeckHtml='';
  if(false && EX.inclPresentationDeck && EX.layout==='landscape'){
    presentationDeckHtml='<div class="rpt-pres-deck-page">'
      +'<div class="rpt-pres-deck-stub">'
        +'<div class="rpt-pres-deck-logo">AQUAREV WATER</div>'
        +'<div class="rpt-pres-deck-sub">Presentation Deck</div>'
        +'<div class="rpt-pres-deck-prop">'+esc(prop)+'</div>'
        +'<div class="rpt-pres-deck-note">Multi-page deck content rendering in next iteration.</div>'
      +'</div>'
    +'</div>';
  }

  // ── Pool Profiles page (optional, portrait only) ──
  var poolProfilesHtml='';
  if(EX.inclPoolProfiles){
    var todayStr=new Date().toLocaleDateString('en-US',{year:'numeric',month:'long',day:'numeric'});
    var propName=S.propertyName||'Property Assessment';
    // Row visibility depends on the chosen export scenario toggles
    var ppShowAdv=EX.bothScenarios || EX.scenario==='advantage';
    var ppShowPur=EX.bothScenarios || EX.scenario==='purchase';
    // Emphasize Purchase Price only when Advantage is hidden (it's the final row)
    var ppPurStrong=ppShowPur && !ppShowAdv;
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
              +(ppShowPur?'<div class="rpt-pp-row'+(ppPurStrong?' strong':'')+'"><span class="k">Purchase Price</span><span class="v'+(ppPurStrong?' pos':'')+'">'+(perPoolPurch>0?fc(perPoolPurch,0):'\u2014')+'</span></div>':'')
              +(ppShowAdv?'<div class="rpt-pp-row strong"><span class="k">60 Month Plan</span><span class="v pos">'+(perPoolMonthly>0?fc(perPoolMonthly,0)+' / mo':'\u2014')+'</span></div>':'')
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
        // Dimensions row — only when pool uses dimensions input mode
        var hasDims=b.inputMode!=='gallons' && b.length && b.width && b.depth;
        var dimRow=hasDims
          ? '<div class="rpt-pp-row"><span class="k">Dimensions</span><span class="v">'+b.length+'\u2032 \u00d7 '+b.width+'\u2032 \u00d7 '+b.depth+'\u2032</span></div>'
          : '';
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
              +dimRow
              +'<div class="rpt-pp-row"><span class="k">Volume</span><span class="v">'+fn(Math.round(G))+' gal</span></div>'
              +'<div class="rpt-pp-row"><span class="k">Devices</span><span class="v">'+poolDevStr+'</span></div>'
              +(ppShowPur?'<div class="rpt-pp-row'+(ppPurStrong?' strong':'')+'"><span class="k">Purchase Price</span><span class="v'+(ppPurStrong?' pos':'')+'">'+(poolPurch>0?fc(poolPurch,0):'\u2014')+'</span></div>':'')
              +(ppShowAdv?'<div class="rpt-pp-row strong"><span class="k">60 Month Plan</span><span class="v pos">'+(poolMonthly>0?fc(poolMonthly,0)+' / mo':'\u2014')+'</span></div>':'')
            +'</div>'
          +'</div>'
        +'</div>';
      }).join('');
      PIPES.forEach(function(p){ totDevQty+=(S[p.k]||0); });
      pageCount=S.bodies.length;
    }

    if(pageCount>0){
      poolProfilesHtml='<div class="rpt-pp-page'+(EX.layout==='landscape'?' rpt-pp-page-landscape':'')+'">'
        // Assessment-style header band \u2014 matches the Assessment page exactly,
        // with the subtitle changed to "Pool Profiles" so the document reads
        // as a coherent suite (same logo, property, date, and NSF badge).
        +'<div class="rpt-head rpt-pp-head-band">'
          +'<div class="rpt-head-left">'
            +'<div class="rpt-logo">AQUAREV WATER</div>'
            +'<div class="rpt-logo-sub">Pool Profiles</div>'
          +'</div>'
          +'<div class="rpt-head-right">'
            +'<div class="rpt-prop-name">'+esc(propName)+'</div>'
            +'<div class="rpt-prop-date">'+todayStr+' \u00b7 '+pageCount+' '+(pageCount===1?'pool':'pools')+'</div>'
            +'<span class="rpt-nsf-badge">NSF/ANSI\u00a050 Certified\u2002\u00b7\u2002IAPMO</span>'
          +'</div>'
        +'</div>'
        +'<div class="rpt-pp-grid rpt-pp-grid-'+Math.min(pageCount,10)+'">'+cards+'</div>'
        // ── Footer band (spans full page width via negative margins) ──
        +'<div class="rpt-foot">'
          +'<div class="rpt-foot-logo">AQUAREV WATER</div>'
          +'<div class="rpt-foot-info">'
            +'t. 832-979-6758\u2002\u00b7\u2002<a href="mailto:water@aquarevwater.us" style="color:inherit;text-decoration:none">water@aquarevwater.us</a>\u2002\u00b7\u2002<a href="https://www.aquarevwater.us" target="_blank" style="color:inherit;text-decoration:none">aquarevwater.us</a>\u2002\u00b7\u2002Made in USA<br>'
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
      +cdnImg('https://cdn.prod.website-files.com/691fa5d63fc3a5a75a65efeb/69de6e658f0a11dd1b3d7563_AquaRev_Fact%20Sheet_COVER1-01.jpg','class="rpt-cover-bg"',1100)
      +'<div class="rpt-cover-overlay">'
        +'<div style="font-family:\'DM Sans\',sans-serif;font-size:12px;letter-spacing:4px;text-transform:uppercase;color:#48cae4;font-weight:600">Water Enhancement &amp; Cost Saving Assessment</div>'
        +'<div style="margin-top:10px;font-family:\'Bebas Neue\',sans-serif;font-size:28px;letter-spacing:3px;color:#fff;line-height:1.1">'+esc(prop)+'</div>'
        +'<div style="margin-top:8px;font-family:\'DM Sans\',sans-serif;font-size:12px;color:#7db8cc">'+today+'</div>'
      +'</div>'
    +'</div>';
  }

  // ── Assemble full document ──────────────────────────────────
  // Page order:
  //   Portrait : Cover → Exec Summary → Assessment → Pool Profiles → Fact Sheet → Back Cover
  //   Landscape: Ls Cover → Ls Exec Summary → Assessment → Pool Profiles → Ls Back Cover → Presentation Deck
  var html=coverHtml+lsCoverHtml+execSummaryHtml+lsExecSummaryHtml+'<div class="rpt'+(EX.layout==='landscape'?' rpt-landscape':'')+'">'

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

    // ── KPI stripe ── (landscape adds a 5th block: Savings Projection Applied)
    +'<div class="rpt-kpis'+(EX.layout==='landscape'?' rpt-kpis-5':'')+'">'
      +'<div class="rpt-kpi"><div class="rpt-kpi-lbl">Devices</div><div class="rpt-kpi-val teal">'+R.total_dev+'</div></div>'
      +'<div class="rpt-kpi"><div class="rpt-kpi-lbl">Monthly Savings</div><div class="rpt-kpi-val green">'+fc(R.total_mo,0)+'</div></div>'
      +'<div class="rpt-kpi"><div class="rpt-kpi-lbl">Annual Savings</div><div class="rpt-kpi-val green">'+fc(R.total_yr,0)+'</div></div>'
      +'<div class="rpt-kpi"><div class="rpt-kpi-lbl">Purchase Payback</div><div class="rpt-kpi-val teal">'+(R.payback>0?Math.round(R.payback)+'\u00a0mo':'N/A')+'</div></div>'
      +(EX.layout==='landscape'
        ? '<div class="rpt-kpi"><div class="rpt-kpi-lbl">Savings Projection Applied</div><div class="rpt-kpi-val teal">'+Math.round(S.savings_weight*100)+'%</div></div>'
        : '')
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
        +'</div>'
      +'</div>'

      // Rows B-D: layout-aware
      +(EX.layout==='landscape'
        // ── LANDSCAPE: compact single-page layout ──
        // Left col: Purchase Options + (NEW) Property Images
        // Right col: Monthly Savings Breakdown + Water Conservation + Video Resources
        ?'<div class="rpt-sec rpt-cols rpt-ls-row-b">'
          +'<div class="rpt-ls-lcol">'
            +'<div class="rpt-stitle">Purchase Options</div>'
            +purBox+advBox
            // Property Images — anchored to the left column, sized to fill
            // remaining vertical space below Purchase Options.
            +(imgHtml ? '<div class="rpt-ls-media-stack rpt-ls-img-stack">'+imgHtml+'</div>' : '')
          +'</div>'
          +'<div class="rpt-ls-rcol">'
            +'<div class="rpt-stitle">Monthly Savings Breakdown</div>'
            +'<table class="rpt-tbl">'
              +'<thead><tr><th>Category</th><th>Monthly</th><th>%</th></tr></thead>'
              +'<tbody>'
                +bkRows
                +'<tr class="tot"><td>Total</td><td>'+fc(R.total_mo)+'</td><td>100%</td></tr>'
              +'</tbody>'
            +'</table>'
            +'<div class="rpt-row rpt-sw-applied" style="border-top:1px dashed #e0ecf4;margin-top:6px;padding-top:6px"><span class="k" style="color:#00b4d8;font-size:11px">Savings Projection Applied</span><span class="v" style="color:#00b4d8;font-size:11px">'+Math.round(S.savings_weight*100)+'%</span></div>'
            +(EX.inclWater?waterHtml:'')
            // Video Resources — right col only (Property Images now live left).
            +(ytHtml ? '<div class="rpt-ls-media-stack">'+ytHtml+'</div>' : '')
          +'</div>'
        +'</div>'
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
            +'<div class="rpt-row rpt-sw-applied" style="border-top:1px dashed #e0ecf4;margin-top:6px;padding-top:6px"><span class="k" style="color:#00b4d8;font-size:11px">Savings Projection Applied</span><span class="v" style="color:#00b4d8;font-size:11px">'+Math.round(S.savings_weight*100)+'%</span></div>'
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
        +'t. 832-979-6758\u2002\u00b7\u2002<a href="mailto:water@aquarevwater.us" style="color:inherit;text-decoration:none">water@aquarevwater.us</a>\u2002\u00b7\u2002<a href="https://www.aquarevwater.us" target="_blank" style="color:inherit;text-decoration:none">aquarevwater.us</a>\u2002\u00b7\u2002Made in USA<br>'
        +'NSF/ANSI\u00a050\u2002\u00b7\u2002NSF-372 Lead-Free\u2002\u00b7\u2002US\u00a0Pat.\u00a010,934,180\u2002\u00b7\u200211,358,881\u2002\u00b7\u200212,037,269'
      +'</div>'
    +'</div>'

  +'</div>' // end .rpt
  +poolProfilesHtml
  +fsHtml;

  // ── Portrait Back Cover — independent of fact sheet since 2026-04-23.
  // Uses .rpt-back-cover-page so the image can full-bleed (object-fit:cover)
  // without affecting the inner fact sheet pages, which need object-fit:contain. ──
  if(EX.inclBackCover && EX.layout==='portrait'){
    html+='<div class="rpt-fs-img-page rpt-back-cover-page">'
      +cdnImg('https://cdn.prod.website-files.com/691fa5d63fc3a5a75a65efeb/69dd4124dd8d52082f7f0510_Exec_Sum_CLUB%20MED_AquaRev_FIN_Page_6.png','',1100)
    +'</div>';
  }
  // ── Landscape Back Cover + Presentation Deck (Presentation deck follows back cover, separate document). ──
  html+=lsBackCoverHtml;
  html+=presentationDeckHtml;

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
              try { confettiBurst({ count: 60 }); } catch(e){}
            });
            window.print();
            setTimeout(function(){if(!restored)restoreApp();},3000);
          };
        } else {
          window.addEventListener('afterprint',function onAfter(){
            window.removeEventListener('afterprint',onAfter);
            setTimeout(restoreApp,100);
            try { confettiBurst({ count: 60 }); } catch(e){}
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
      // ── Layout-specific page-options panels ──
      +(EX.layout==='portrait'
        // ── PORTRAIT panel ──
        ?'<div class="ar-export-panel-label">Portrait Page Options</div>'
         +'<div style="margin-top:8px">'
          +'<div class="ar-toggle-row"><label>Include Cover Page</label>'
            +'<div class="ar-sw-track'+(EX.inclCover?' on':'')+'" data-ex-sw="inclCover"><div class="ar-sw-thumb"></div></div>'
          +'</div>'
          +(function(){
            var hasImg=S.bodies.some(function(b){return !!b.image;});
            var needImage=!S.manualVolume && !hasImg;
            var hint=needImage?' <span style="font-size:10px;color:var(--mu)">(Upload at least one pool image)</span>':'';
            return '<div class="ar-toggle-row"'+(needImage?' style="opacity:.5;pointer-events:none"':'')+'><label>Include Pool Profiles'+hint+'</label>'
              +'<div class="ar-sw-track'+(EX.inclPoolProfiles&&!needImage?' on':'')+'" data-ex-sw="inclPoolProfiles"><div class="ar-sw-thumb"></div></div>'
            +'</div>';
          })()
          +'<div class="ar-toggle-row"><label>Include Exec Summary</label>'
            +'<div class="ar-sw-track'+(EX.inclExecSummary?' on':'')+'" data-ex-sw="inclExecSummary"><div class="ar-sw-thumb"></div></div>'
          +'</div>'
          +(EX.inclExecSummary
            ? '<details class="ar-es-custom-drawer" style="margin:6px 0 8px;background:rgba(0,180,216,.04);border:1px solid rgba(0,180,216,.18);border-radius:8px;padding:8px 12px"'+((EX.execCustomTitle||EX.execCustomCopy)?' open':'')+'>'
              +'<summary style="cursor:pointer;font-size:11px;font-weight:600;color:var(--aq);letter-spacing:1px;text-transform:uppercase;padding:2px 0">Add Custom Section to Page 1</summary>'
              +'<div style="margin-top:10px">'
                +'<label class="ar-export-field-lbl" style="display:block;margin-bottom:3px">Custom Title</label>'
                +'<input class="ar-inp" id="ar2-es-custom-title" type="text" maxlength="80" placeholder="e.g., Property Notes — ABC Resort" value="'+esc(EX.execCustomTitle||'')+'" />'
                +'<label class="ar-export-field-lbl" style="display:block;margin:8px 0 3px">Custom Copy</label>'
                +'<textarea class="ar-textarea" id="ar2-es-custom-copy" rows="4" maxlength="240" placeholder="Add any property-specific narrative or notes. Renders at the bottom of Page 1.">'+esc(EX.execCustomCopy||'')+'</textarea>'
                +'<p class="ar-export-note" style="margin-top:4px">Both optional, max 240 characters. Empty = section hidden.</p>'
              +'</div>'
            +'</details>'
            :''
          )
          +'<div class="ar-toggle-row"><label>Include AquaRev Fact Sheet</label>'
            +'<div class="ar-sw-track'+(EX.inclFactSheet?' on':'')+'" data-ex-sw="inclFactSheet"><div class="ar-sw-thumb"></div></div>'
          +'</div>'
          +'<div class="ar-toggle-row"><label>Include Back Cover</label>'
            +'<div class="ar-sw-track'+(EX.inclBackCover?' on':'')+'" data-ex-sw="inclBackCover"><div class="ar-sw-thumb"></div></div>'
          +'</div>'
         +'</div>'

        // ── LANDSCAPE panel — separate state keys, distinct identity ──
        :'<div class="ar-export-panel-label">Landscape Page Options</div>'
         +'<div style="margin-top:8px">'
          +'<div class="ar-toggle-row"><label>Include Cover Page</label>'
            +'<div class="ar-sw-track'+(EX.inclLsCover?' on':'')+'" data-ex-sw="inclLsCover"><div class="ar-sw-thumb"></div></div>'
          +'</div>'
          +(function(){
            var hasImg=S.bodies.some(function(b){return !!b.image;});
            var needImage=!S.manualVolume && !hasImg;
            var hint=needImage?' <span style="font-size:10px;color:var(--mu)">(Upload at least one pool image)</span>':'';
            return '<div class="ar-toggle-row"'+(needImage?' style="opacity:.5;pointer-events:none"':'')+'><label>Include Pool Profiles'+hint+'</label>'
              +'<div class="ar-sw-track'+(EX.inclPoolProfiles&&!needImage?' on':'')+'" data-ex-sw="inclPoolProfiles"><div class="ar-sw-thumb"></div></div>'
            +'</div>';
          })()
          +'<div class="ar-toggle-row"><label>Include Exec Summary</label>'
            +'<div class="ar-sw-track'+(EX.inclLsExecSummary?' on':'')+'" data-ex-sw="inclLsExecSummary"><div class="ar-sw-thumb"></div></div>'
          +'</div>'
          +(EX.inclLsExecSummary
            ? '<details class="ar-es-custom-drawer" style="margin:6px 0 8px;background:rgba(0,180,216,.04);border:1px solid rgba(0,180,216,.18);border-radius:8px;padding:8px 12px"'+((EX.execCustomTitle||EX.execCustomCopy)?' open':'')+'>'
              +'<summary style="cursor:pointer;font-size:11px;font-weight:600;color:var(--aq);letter-spacing:1px;text-transform:uppercase;padding:2px 0">Add Custom Section</summary>'
              +'<div style="margin-top:10px">'
                +'<label class="ar-export-field-lbl" style="display:block;margin-bottom:3px">Custom Title</label>'
                +'<input class="ar-inp" id="ar2-es-custom-title" type="text" maxlength="80" placeholder="e.g., Property Notes — ABC Resort" value="'+esc(EX.execCustomTitle||'')+'" />'
                +'<label class="ar-export-field-lbl" style="display:block;margin:8px 0 3px">Custom Copy</label>'
                +'<textarea class="ar-textarea" id="ar2-es-custom-copy" rows="4" maxlength="240" placeholder="Add any property-specific narrative or notes.">'+esc(EX.execCustomCopy||'')+'</textarea>'
                +'<p class="ar-export-note" style="margin-top:4px">Both optional, max 240 characters. Empty = section hidden.</p>'
              +'</div>'
            +'</details>'
            :''
          )
          // Custom property photos for Page 2 col 3 — toggle + drag-drop drawer
          +'<div class="ar-toggle-row"><label>Custom Property Photos <span style="font-size:10px;color:var(--mu)">(Exec Summ Pg 2)</span></label>'
            +'<div class="ar-sw-track'+(EX.inclLsP2Col3Photos?' on':'')+'" data-ex-sw="inclLsP2Col3Photos"><div class="ar-sw-thumb"></div></div>'
          +'</div>'
          +(EX.inclLsP2Col3Photos
            ? '<details class="ar-es-custom-drawer ar-p2c3-drawer" style="margin:6px 0 8px;background:rgba(0,180,216,.04);border:1px solid rgba(0,180,216,.18);border-radius:8px;padding:8px 12px"'+(EX.showP2Col3Drawer?' open':'')+' data-action="toggle-p2c3-drawer">'
              +'<summary style="cursor:pointer;font-size:11px;font-weight:600;color:var(--aq);letter-spacing:1px;text-transform:uppercase;padding:2px 0">'
                +'Photo Slots <span style="font-weight:400;text-transform:none;letter-spacing:0;color:var(--mu);font-size:10px">— up to 4 (drag &amp; drop or click)</span>'
              +'</summary>'
              +'<div class="ar-p2c3-grid" style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:10px">'
                +[0,1,2,3].map(function(i){
                  var photo=(EX.lsP2Col3Photos&&EX.lsP2Col3Photos[i])||null;
                  if(photo){
                    return '<div class="ar-p2c3-slot filled" data-slot="'+i+'">'
                      +'<img src="'+photo.data+'" alt="" />'
                      +'<button class="ar-p2c3-rm" data-action="remove-p2c3-photo" data-slot="'+i+'" title="Remove">×</button>'
                    +'</div>';
                  }
                  return '<label class="ar-p2c3-slot" data-slot="'+i+'">'
                    +'<div class="ar-p2c3-empty"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="9" cy="9" r="2"/><path d="M21 15l-5-5L5 21"/></svg><span>Slot '+(i+1)+'</span></div>'
                    +'<input type="file" accept="image/*" class="ar2-p2c3-upload" data-slot="'+i+'" style="display:none" />'
                  +'</label>';
                }).join('')
              +'</div>'
              +'<p class="ar-export-note" style="margin-top:8px;font-size:10px;color:var(--mu)">Photos stack vertically in column 3 of Exec Summ Page 2 — each cropped to fill width.</p>'
            +'</details>'
            :''
          )
          // Presentation Deck — LOCKED. Will be built later. Toggle visually
          // disabled and click is suppressed via CSS pointer-events:none.
          +'<div class="ar-toggle-row" style="opacity:.5;pointer-events:none"><label>Include Presentation Deck <span style="font-size:10px;color:var(--mu)">(coming soon)</span></label>'
            +'<div class="ar-sw-track" data-ex-sw-disabled="inclPresentationDeck"><div class="ar-sw-thumb"></div></div>'
          +'</div>'
          +'<div class="ar-toggle-row"><label>Include Back Cover</label>'
            +'<div class="ar-sw-track'+(EX.inclLsBackCover?' on':'')+'" data-ex-sw="inclLsBackCover"><div class="ar-sw-thumb"></div></div>'
          +'</div>'
         +'</div>'
      )
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
  // Divergence "use map" link — snap this body back to the polygon-derived values.
  var useMapEl=e.target.closest('[data-body-use-map]');
  if(useMapEl && e.target.closest('u')){
    var mid=String(useMapEl.dataset.bodyUseMap);
    for(var umi=0;umi<S.bodies.length;umi++){
      if(String(S.bodies[umi].id)===mid){
        var bm=S.bodies[umi];
        if(bm.fromMap && bm.sq_m){
          bm.inputMode='surface';
          bm.surface_sqft=Math.round(bm.sq_m*10.7639*10)/10;
          // leave depth as the user's current value
          bm.manualGallons='';
          syncGallons();
          renderForm();
          patchResults();
        }
        break;
      }
    }
    return;
  }
  // Per-body input mode toggle (Dimensions / Surface / Gallons)
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
    // If Devices by Pool just toggled ON, replace aggregates with per-pool sums.
    if(swKey==='devicesByPool' && S.devicesByPool){
      syncDevicesFromBodies();
    }
    // Middle-column pipe rows show a "locked" visual whenever devicesByPool is
    // on. Re-render the devices column so the lock state and aggregate values
    // flip immediately when the toggle changes.
    renderForm(); renderDevices(); renderNav(); patchResults();
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
  // Remove photo from a P2 col 3 slot
  var rmP2c3=e.target.closest('[data-action="remove-p2c3-photo"]');
  if(rmP2c3){
    e.preventDefault();
    var idx=parseInt(rmP2c3.getAttribute('data-slot'),10);
    if(EX.lsP2Col3Photos && !isNaN(idx)) delete EX.lsP2Col3Photos[idx];
    EX.showP2Col3Drawer=true;
    renderDevices();
    return;
  }
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
  if(exSw){
    var swKey=exSw.dataset.exSw;
    EX[swKey]=!EX[swKey];
    exSw.classList.toggle('on',EX[swKey]);
    // inclExecSummary controls visibility of the Custom Section drawer below it.
    // inclLsP2Col3Photos controls visibility of the photo-slot drawer.
    // Export options live in #ar2-devices (middle column), so re-render that.
    if(swKey==='inclExecSummary'||swKey==='inclLsExecSummary'||swKey==='inclLsP2Col3Photos') renderDevices();
    return;
  }
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
    // When "Devices by Pool" is on, per-pool counts feed the aggregate pipe
    // totals. Deleting a pool must re-sum those aggregates AND refresh the
    // middle-column Return Pipe Device Selector so it reflects the change.
    if(S.devicesByPool) syncDevicesFromBodies();
    syncGallons(); renderForm(); renderDevices(); renderNav(); patchResults();
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
  // Step 0 (Map Pool) → Pool & System: pull registered pools from the bridge.
  var mapCont=e.target.closest('[data-action="map-continue"]');
  if(mapCont){
    consumeMapPoolBodies();
    S.step=1; render();
    return;
  }
  var mapSkip=e.target.closest('[data-action="map-skip"]');
  if(mapSkip){
    S.step=1; render();
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
      renderNav();       // hasDevices may have flipped — refresh Continue button
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
  // Export: Exec Summary custom title / copy
  if(el.id==='ar2-es-custom-title'){ EX.execCustomTitle=el.value; return; }
  if(el.id==='ar2-es-custom-copy'){ EX.execCustomCopy=el.value; return; }
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
  // Properties count — clamp 1-999 (used in Exec Summary)
  if(el.dataset.f==='propertiesCount'){
    var pn=parseInt(el.value,10);
    if(isNaN(pn)||pn<1) pn=1;
    if(pn>999) pn=999;
    S.propertiesCount=pn;
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
    resizeAndEncodeImage(tgtFile, 500, 0.72, function(dataUrl){
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
  // Calculator passcode gate — show modal on first load (in-memory, resets on reload).
  // The modal overlays the full viewport at z-index 999999 so the calc behind is unreachable.
  if(!CALC_UNLOCKED){
    showCalcPasswordModal(function(){/* unlocked — calc already initialized below; modal removes itself */});
  }
  initDefaultYt();
  // Set initial bank nav button label
  var navBtn=document.getElementById('ar2-bank-nav');
  if(navBtn) navBtn.textContent='Archive';
  render();
  root.addEventListener('click',handleClick);
  root.addEventListener('input',handleInput);
  root.addEventListener('change',handleChange);
  // File upload — delegate via document since input is dynamically created.
  // All uploads run through resizeAndEncodeImage() so phone-camera photos
  // (often 3-6 MB raw) get downscaled before going into EX state. Without
  // this, archive saves blow past localStorage's ~5 MB quota and fail.
  root.addEventListener('change',function(e){
    if(e.target&&(e.target.id==='ar2-img-input'||e.target.classList.contains('ar2-img-upload'))){
      var file=e.target.files&&e.target.files[0];
      if(file){
        // Property images appear at ~half-page width in PDFs → 1400px is plenty.
        resizeAndEncodeImage(file, 1400, 0.82, function(dataUrl){
          if(!dataUrl){ alert('Could not read that image. Try a different file.'); return; }
          EX.images.push({id:'img-'+Date.now(),data:dataUrl,comment:''});
          renderForm();
          renderResults();
        });
      }
      e.target.value='';
    }
    // P2 col 3 photo upload
    if(e.target&&e.target.classList.contains('ar2-p2c3-upload')){
      var slot=parseInt(e.target.getAttribute('data-slot'),10);
      var f=e.target.files&&e.target.files[0];
      if(f && !isNaN(slot)){
        // P2 col 3 slot is ~280px wide on the PDF page → 1100px is generous.
        resizeAndEncodeImage(f, 1100, 0.82, function(dataUrl){
          if(!dataUrl){ alert('Could not read that image. Try a different file.'); return; }
          if(!EX.lsP2Col3Photos) EX.lsP2Col3Photos=[];
          EX.lsP2Col3Photos[slot]={data:dataUrl};
          // Auto-enable toggle if user uploads a photo while toggle was off
          if(!EX.inclLsP2Col3Photos) EX.inclLsP2Col3Photos=true;
          EX.showP2Col3Drawer=true;
          renderDevices();
        });
      }
      e.target.value='';
    }
  });
  // Drag-and-drop on P2 col 3 slots
  root.addEventListener('dragover',function(e){
    var slot=e.target.closest('.ar-p2c3-slot');
    if(slot){ e.preventDefault(); slot.classList.add('drag-over'); }
  });
  root.addEventListener('dragleave',function(e){
    var slot=e.target.closest('.ar-p2c3-slot');
    if(slot) slot.classList.remove('drag-over');
  });
  root.addEventListener('drop',function(e){
    var slot=e.target.closest('.ar-p2c3-slot');
    if(!slot) return;
    e.preventDefault();
    slot.classList.remove('drag-over');
    var idx=parseInt(slot.getAttribute('data-slot'),10);
    var f=e.dataTransfer&&e.dataTransfer.files&&e.dataTransfer.files[0];
    if(f && f.type.indexOf('image/')===0 && !isNaN(idx)){
      resizeAndEncodeImage(f, 1100, 0.82, function(dataUrl){
        if(!dataUrl){ alert('Could not read that image. Try a different file.'); return; }
        if(!EX.lsP2Col3Photos) EX.lsP2Col3Photos=[];
        EX.lsP2Col3Photos[idx]={data:dataUrl};
        if(!EX.inclLsP2Col3Photos) EX.inclLsP2Col3Photos=true;
        EX.showP2Col3Drawer=true;
        renderDevices();
      });
    }
  });
}

if(document.readyState==='loading'){
  document.addEventListener('DOMContentLoaded',init);
}else{
  init();
}

})();
