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
  images:[],              // [{id, data, comment}]
  ytEntries:[],           // [{id, url, videoId, comment}]
  showYtDrawer:false,
  ytPending:'',
  comments:DEFAULT_COMMENTS,
  exporting:false,
  saving:false,           // true while save is in progress
  saveStatus:null,        // null | 'saved' | 'error'
};

/* ── View state ('form' | 'bank') ── */
var VIEW='form';

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
    },
    state:{
      bodies:S.bodies,
      manualVolume:S.manualVolume, manualTotalGallons:S.manualTotalGallons,
      manualChlorineGallons:S.manualChlorineGallons, manualCo2:S.manualCo2,
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
      layout:EX.layout, inclWater:EX.inclWater, inclFactSheet:EX.inclFactSheet,
      comments:EX.comments, ytEntries:EX.ytEntries,
    },
  };
  var entry={id:id, propertyName:snapshot.propertyName, savedAt:snapshot.savedAt, summary:snapshot.summary};

  window.storage.set(BANK_PFX+id, JSON.stringify(snapshot))
    .then(function(){ return bankGetIndex(); })
    .then(function(idx){
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
        +'Complete an assessment and click <strong style="color:var(--t)">Save to Archive</strong> to store it here.'
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
      +'<div>Property</div><div>Monthly</div><div>Annual</div><div>Investment</div><div>Devices</div><div>Volume</div><div>Payback</div><div></div>'
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
  S.bodies=[{id:Date.now(),label:'Pool 1',poolType:'chlorine',inputMode:'dimensions',length:'',width:'',depth:'',manualGallons:'',co2Use:false}];
  S.pool_gallons=0; S.chlorine_pool_gallons=0; S.co2_pool_gallons=0;
  S.manualVolume=false; S.manualTotalGallons=''; S.manualChlorineGallons=''; S.manualCo2=false;
  S.pipe_2in=0; S.pipe_3in=0; S.pipe_4in=0; S.pipe_6in=0; S.pipe_8in=0; S.pipe_10in=0;
  S.discount=0; S.savings_weight=1;
  EX.images=[]; EX.ytEntries=[]; EX.comments='';
  EX.scenario='advantage'; EX.bothScenarios=true; EX.layout='portrait';
  EX.inclCover=false; EX.inclWater=true; EX.inclFactSheet=false;
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
  bodies:[{id:1, label:'Pool 1', poolType:'chlorine', inputMode:'dimensions', length:'', width:'', depth:'', manualGallons:'', co2Use:false}],
  // Derived from bodies (auto-synced via syncGallons)
  pool_gallons:0, chlorine_pool_gallons:0, co2_pool_gallons:0,
  // Manual volume override (when dimensions unavailable for all pools)
  manualVolume:false, manualTotalGallons:'', manualChlorineGallons:'', manualCo2:false,
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
  var gal_saved_mo=gal_lost_mo*wlr;
  var gal_saved_5yr=gal_saved_mo*12*5; // monthly × 12 months × 5 years
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
    // Bodies of water
    +'<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px">'
      +'<div style="font-size:12px;font-weight:600;color:var(--tx)">Bodies of Water</div>'
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
      return '<div class="ar-pipe-row'+(qty>0?' selected':'')+'" id="pr-'+p.k+'">'
        +'<div class="ar-pipe-sz">'+p.sz+'</div>'
        +'<div class="ar-pipe-info">'
          +'<div class="ar-pipe-price">'+fc(p.price)+'</div>'
          +'<div class="ar-pipe-rate">Adv. Plan: '+fc(p.rate)+'/mo</div>'
        +'</div>'
        +'<div class="ar-qty">'
          +'<button class="ar-qty-btn" data-pk="'+p.k+'" data-d="-1">\u2212</button>'
          +'<div class="ar-qty-n" id="qn-'+p.k+'">'+qty+'</div>'
          +'<button class="ar-qty-btn" data-pk="'+p.k+'" data-d="1">+</button>'
        +'</div>'
      +'</div>';
    }).join('');

    el.innerHTML='<div class="ar-card ar-fu" style="animation-delay:.07s">'
      +'<div class="ar-card-title">Return Pipe \u2014 Device Selection</div>'
      +'<div style="font-size:12px;color:#3a6a80;margin-bottom:12px">One device per body of water, matched to its return pipe size.</div>'
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

  var disc='<div class="ar-disc" style="color:#4a7a90">Estimates based on lab-verified reduction rates (IAPMO R&T). Actual savings vary by site.</div>';

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

  // Comments
  var commHtml='';
  if(EX.comments.trim()){
    var fmt=esc(EX.comments).replace(/\n\n/g,'</p><p>').replace(/\n/g,'<br>');
    commHtml='<div class="rpt-sec"><div class="rpt-stitle">Comments</div>'
      +'<div class="rpt-comments"><p>'+fmt+'</p></div></div>';
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

  var notesHtml='<div>'
    +'<div class="rpt-stitle">Notes</div>'
    +'<div class="rpt-notes"><div class="rpt-notes-lbl">Site observations\u2002·\u2002follow-up items</div></div>'
  +'</div>';

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
            +advBox+purBox
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
            +advBox+purBox
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
        +'<div class="rpt-sec">'
          +notesHtml
        +'</div>'
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

  // Hide app, show report for printing
  var appEl=document.getElementById('ar2');
  if(appEl)appEl.style.display='none';
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
          rEl.style.cssText='display:none;';
          if(appEl)appEl.style.display='';
          EX.exporting=false;
          EX.saving=false;
          S.step=savedStep;
          render();
          window.scrollTo(0,0);
        }
        window.addEventListener('afterprint',function onAfter(){
          window.removeEventListener('afterprint',onAfter);
          setTimeout(restoreApp,100);
        });
        window.print();
        // Fallback timeout
        setTimeout(function(){if(!restored)restoreApp();},3000);
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
      +'</div>'
    +'</div>'

    // Toggles
    +'<div class="ar-toggle-row"><label>Include Water Loss Reduction \u2014 5 Years</label>'
      +'<div class="ar-sw-track'+(EX.inclWater?' on':'')+'" data-ex-sw="inclWater"><div class="ar-sw-thumb"></div></div>'
    +'</div>'

    // Comments (portrait only)
    +(EX.layout==='portrait'
      ?'<div class="ar-export-field">'
        +'<label class="ar-export-field-lbl">Comments (Optional)</label>'
        +'<textarea class="ar-textarea" id="ar2-comments" style="min-height:160px" placeholder="Add comments for the report...">'+esc(EX.comments)+'</textarea>'
        +'<p class="ar-export-note">Appears below images in the PDF</p>'
      +'</div>'
      :'')

    +'<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:8px">'
      +'<button class="ar-gen-btn" data-action="gen-report"'+(EX.exporting?' disabled':'')+'>Download PDF</button>'
      +'<button class="ar-gen-btn" data-action="save-report" style="background:linear-gradient(135deg,var(--go),#f7c948)"'+(EX.saving?' disabled':'')+'>Save to Archive</button>'
    +'</div>'
    +'<div class="ar-save-toast'+(EX.saveStatus?(' show'+(EX.saveStatus==='error'?' err':'')):'')+'">'+I.check+' '+(EX.saveStatus==='error'?'Save failed \u2014 try again':'Saved to Archive')+'</div>'
  +'</div>';
}
/* ── Partial patch: results only (for live updates) ── */
function patchResults(){renderResults();}

/* ── Pipe qty update ── */
function updatePipe(pipeKey,delta){
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
  // Manual volume override toggle
  var swSBtn=e.target.closest('[data-sw-s]');
  if(swSBtn){
    S[swSBtn.dataset.swS]=!S[swSBtn.dataset.swS];
    syncGallons();
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
  // Save to Archive
  var saveBtn=e.target.closest('[data-action="save-report"]');
  if(saveBtn){ bankSaveReport(); return; }
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
  // Toggle view: form ↔ bank
  var viewBank=e.target.closest('[data-action="view-bank"]');
  if(viewBank){ showView(VIEW==='bank'?'form':'bank'); return; }
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
    S.bodies.push({id:newId, label:'Pool '+( S.bodies.length+1), poolType:'chlorine', inputMode:'dimensions', length:'', width:'', depth:'', manualGallons:'', co2Use:false});
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
  if(el.id==='ar2-comments'){ EX.comments=el.value; return; }
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