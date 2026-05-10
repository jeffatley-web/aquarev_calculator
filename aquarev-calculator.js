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
  copy:   '<svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="5" width="9" height="9" rx="1"/><path d="M11 5V3a1 1 0 00-1-1H3a1 1 0 00-1 1v7a1 1 0 001 1h2"/></svg>',
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
  inclFactSheet:false,    // DEPRECATED 2026-05-10: Fact Sheet removed from all versions; field kept for snapshot back-compat only
  inclBackCover:false,    // include back cover page (separate from fact sheet)
  inclPoolProfiles:false, // include pool profiles page
  inclExecSummary:false,  // include 2-page Executive Summary (portrait variant)
  execCustomTitle:'',     // optional custom section title shown on Exec Summary page 1
  execCustomCopy:'',      // optional custom section copy shown on Exec Summary page 1
  // ── Landscape-only export options ──
  inclLsCover:false,        // landscape Cover page
  inclLsExecSummary:false,  // landscape Executive Summary (2 pages)
  inclLsP2Col3Photos:false, // when true: ES Page 2 Col 3 shows uploaded property photos instead of NSF default image
  lsP2Col3Photos:[],        // [{id, data}] up to 4 photos
  inclLsBackCover:false,    // landscape Back Cover
  // ── Quote / Order toggles (Step 3) — independent toggles for each of the 3
  //    quote pages so the rep can include any subset in the unified PDF.
  inclQuote:false,        // include the Quote / Order page
  inclQuoteTerms:false,   // include the Purchase Terms page
  inclQuotePayment:false, // include the Payment Form page
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

/* ── Quote / Order Form state (Step 3) ──
   Holds everything the rep configures on the Quote step. Pre-fills from
   S.bodies + device qty + R.disc_amt at first entry. Persisted in archive
   alongside the rest of S. */
var QUOTE_DEFAULT_TERMS = (
  '1. Deposit is non-refundable.\n'
  + '2. Pilot period is 90 days from deposit payment.\n'
  + '3. Payment terms as defined on the Payment Form.\n'
  + '4. Title to the Goods shall pass to Buyer only upon Seller\'s receipt of the full purchase price and all other amounts due under this Agreement.\n'
  + '5. 1.5% per month interest is applied on any outstanding amount until paid in full.\n'
  + '6. If Buyer elects not to complete the purchase after the Pilot Period, Buyer may return the Goods, provided that all of the following conditions are met:\n'
  + '   a. Buyer gives Seller written notice of election to return before the sooner of expiration of the Pilot Period or 60 days from delivery;\n'
  + '   b. Buyer obtains Seller\'s written return instructions;\n'
  + '   c. Buyer returns the Goods within fifteen (15) calendar days after giving Seller notice; and\n'
  + '   d. The Goods are returned complete and in original packaging.\n'
  + '7. Return Costs: Buyer shall bear all costs of deinstallation, packing, crating, freight, insurance, duties, return shipping, and risk of loss during return transit.\n'
  + '8. Limitation of Liability:\n'
  + '   a. Neither Seller or Buyer shall not be liable for any indirect, incidental, special, consequential, punitive, or exemplary damages.\n'
  + '   b. Seller shall not be liable for lost profits, lost revenue, lost business opportunity, loss of goodwill, loss of use, business interruption, increased operating cost, guest claims, regulatory penalties, or damage arising from Buyer\'s operations.\n'
  + '   c. Seller\'s aggregate liability arising out of or related to this Agreement shall not exceed the amount actually paid by Buyer to Seller for the specific Goods giving rise to the claim.\n'
  + '9. The Parties shall keep confidential all non-public commercial terms, pricing, technical information, business methods, data, and proprietary materials exchanged in connection with this Agreement, except where disclosure is required by law, court order, lender requirements, auditor requirements or insurer requirements.\n'
  + '10. Buyer shall not disclose Seller pricing, proprietary product information, or technical documentation to third parties for competitive bidding, reverse engineering, or replication purposes.'
);

// Default Standard Terms — short legal disclaimer that prints on the Order
// page (page 1) above the signature block. Editable per-quote in the form.
var QUOTE_DEFAULT_STANDARD_TERMS = (
  'Based on the Terms and Conditions of the enclosed Order Form. '
  + 'Supporting Invoice will be supplied. '
  + 'Deposit is required prior to shipment of goods. '
  + 'All prices are quoted in USD unless otherwise specified. '
  + 'All prices are subject to applicable taxes. '
  + 'Shipping terms are CIF (Cost, Insurance & Freight). Buyer pays any duties/taxes.'
);

// Shared list of shipping / freight terms. Code is stored on Q.shippingTerm;
// the form dropdown and the PDF Ship-To block both pull labels from here.
var SHIPPING_TERMS = [
  {code:'DHL', label:'Courier'},
  {code:'CND', label:'Courier No Duties'},
  {code:'EXW', label:'Ex Works'},
  {code:'FCA', label:'Free Carrier'},
  {code:'FOB', label:'Free on Board'},
  {code:'CIF', label:'Cost, Insurance and Freight'},
  {code:'DAP', label:'Delivered at Place'},
  {code:'DDP', label:'Delivered Duty Paid'},
  {code:'COD', label:'Cash on Delivery'}
];
function shippingTermLabel(code){
  for(var i=0;i<SHIPPING_TERMS.length;i++){ if(SHIPPING_TERMS[i].code===code) return SHIPPING_TERMS[i].label; }
  return '';
}

var Q={
  enabled:false,           // when true, Quote section is configured (toggled by Skip/Continue)
  docKind:'quote',         // 'quote' | 'po' | 'invoice' — switches the document title across QUOTE / PURCHASE ORDER / INVOICE
  // Quote header fields
  quoteId:'',              // auto-populated AQR-YYYY-#### or manual override
  date:'',                 // ISO YYYY-MM-DD; '' means use today
  daysValid:14,
  customerId:'',
  rep:'',
  po:'',                   // optional buyer's PO# reference
  // Buyer (manual entry)
  buyerName:'',
  buyerAddr:'',
  buyerContact:'',
  buyerPhone:'',
  buyerEmail:'',
  // Line items — auto-populated from S.bodies/devices on each render but
  // editable; if rep edits an item we mark it dirty so we don't overwrite.
  warrantyEnabled:true,
  warrantyText:'Lifetime Warranty - Parts Registered',
  warrantyRate:0,
  warrantyQty:1,
  warrantyIncluded:true,    // when true, prints "INCLUDED" and excludes from totals
  servicesEnabled:true,
  servicesText:'Engineer Installation Remote Support',
  servicesRate:495,
  servicesQty:1,
  servicesIncluded:false,
  servicesTaxable:true,
  shippingEnabled:true,
  shippingText:'Cost of Freight',
  shippingRate:0,
  shippingQty:1,
  shippingIncluded:true,
  // Totals
  // Per-line tax rates (0..1). Each Equipment row keys off the PIPES.k value
  // (e.g. 'pipe_6in'). Warranty / Services / Shipping each key by section name.
  // Total tax due = sum of (line.amount * line.taxRate) for each row.
  lineTax:{},
  // Discount stored as a fraction 0..1. null/undefined means "inherit from
  // the Pricing step slider (S.discount)" — rep can override per quote.
  discountPct:null,
  otherFee:0,
  discount:0,              // dollar amount; auto-pulls from R.disc_amt at first quote entry
  depositPct:0,            // 0..100; default 0 per UX direction
  depositDueDate:'',
  balanceDueTerms:'30 days from delivery',
  // Ship-to (multi-line)
  shipTo:'',
  // When true, the Ship-To block uses the Buyer's name + address verbatim and
  // the manual textarea is disabled. PDF render also pulls from the buyer
  // fields so the rendered doc stays in sync as buyer info edits.
  shipToSameAsBuyer:false,
  // Shipping term — Incoterms / freight code printed alongside the Ship-To
  // block on the Order page. Stored as the short code (e.g. "FOB"); the
  // dropdown options carry the full label.
  shippingTerm:'',
  // Standard Terms — short paragraph rendered on the Order page (page 1)
  // above the signature block. Editable per-quote.
  standardTerms: QUOTE_DEFAULT_STANDARD_TERMS,
  // Purchase Terms and Conditions — long legal block rendered on page 2.
  // Stored as HTML (output of the rich-text editor). termsText is kept as
  // a one-time migration source for sessions saved with the previous
  // plain-text schema.
  termsHtml:'',
  termsText:QUOTE_DEFAULT_TERMS,
  // Payment Form
  paymentMethod:'',        // '' | 'cc' | 'wire' | 'check'
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

/* ── Calculator session-unlock flag ──
   Persisted across reloads via localStorage when "Remember password" is
   checked. The flag is initialized from localStorage on page load so the
   user only sees the gate on first visit (or after they clear storage). */
var CALC_REMEMBER_KEY='ar2:calc-unlocked';
var CALC_UNLOCKED=false;
try { CALC_UNLOCKED=localStorage.getItem(CALC_REMEMBER_KEY)==='1'; } catch(e){}
var CALC_PASSCODE='1717';

/* ── Calculator full-page passcode gate ──
   Two modes:
   • Cloud mode (Cloud.isEnabled() === true) — gate calls Supabase edge
     function, validates against per-user code, mints a session, runs the
     local-archive migration prompt on first cloud sign-in.
   • Local mode (legacy) — single shared CALC_PASSCODE compared in-page.
   ── */
function showCalcPasswordModal(onUnlock){
  var existing=document.getElementById('ar2-calc-pw-modal');
  if(existing&&existing.parentNode) existing.parentNode.removeChild(existing);
  var cloudMode = !!(window.AR2_CLOUD && AR2_CLOUD.isEnabled());
  var m=document.createElement('div');
  m.id='ar2-calc-pw-modal';
  m.style.cssText='position:fixed;inset:0;background:rgba(4,15,30,.95);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);z-index:999999;display:flex;align-items:center;justify-content:center;padding:20px;font-family:"DM Sans","Helvetica Neue",Arial,sans-serif;';
  // Cloud-mode subtitle differs to signal multi-user gate
  var subtitle = cloudMode
    ? 'Enter your access code to sign in.'
    : 'Enter the passcode to access the calculator.';
  m.innerHTML='<div style="background:linear-gradient(145deg,#0a2540,#071628);border:1px solid rgba(0,180,216,.3);border-radius:12px;padding:36px 32px;max-width:420px;width:100%;box-shadow:0 20px 60px rgba(0,0,0,.6);text-align:center;">'
    +'<div style="font-family:\'Bebas Neue\',sans-serif;font-size:30px;letter-spacing:5px;color:#fff;margin-bottom:4px">AQUAREV WATER</div>'
    +'<div style="font-size:10px;letter-spacing:3px;text-transform:uppercase;color:#48cae4;font-weight:600;margin-bottom:18px">ROI Calculator'+(cloudMode?' · Cloud':'')+'</div>'
    +'<div style="font-size:13px;color:#cfe2eb;line-height:1.6;margin-bottom:18px">'+subtitle+'</div>'
    // 4-char access code: maxlength=4 + tracking-widened input keeps the
    // tight pin-style feel even though we accept alphanumerics now (HDC1).
    +'<input id="ar2-calc-pw-input" type="password" maxlength="4" autocomplete="off" autocapitalize="characters" style="width:100%;background:rgba(0,0,0,.35);border:1px solid rgba(0,180,216,.35);color:#fff;padding:12px 14px;border-radius:6px;font-size:22px;font-family:\'JetBrains Mono\',monospace;letter-spacing:8px;margin-bottom:8px;box-sizing:border-box;outline:none;text-align:center;text-transform:uppercase" placeholder="••••" />'
    +'<div id="ar2-calc-pw-err" style="font-size:11px;color:#ef4444;min-height:15px;margin-bottom:8px"></div>'
    +(cloudMode
      ? ''
      : '<label style="display:flex;align-items:center;gap:8px;font-size:12px;color:#cfe2eb;margin-bottom:14px;cursor:pointer;user-select:none">'
          +'<input id="ar2-calc-pw-remember" type="checkbox" style="width:14px;height:14px;cursor:pointer;accent-color:#00b4d8" />'
          +'<span>Remember password on this device</span>'
        +'</label>')
    +'<button id="ar2-calc-pw-unlock" style="background:linear-gradient(135deg,#00b4d8,#48cae4);color:#fff;border:none;padding:12px 24px;border-radius:6px;cursor:pointer;font-size:13px;font-weight:600;letter-spacing:1px;text-transform:uppercase;font-family:inherit;width:100%">Unlock</button>'
    +(cloudMode
      ? '<div id="ar2-calc-pw-help" style="font-size:10.5px;color:#7db8cc;margin-top:14px;line-height:1.5">Locked out or forgot your code? Call <b style="color:#cfe2eb">'+(window.AR2_CLOUD?AR2_CLOUD.SUPPORT_PHONE:'')+'</b></div>'
      : '')
  +'</div>';
  document.body.appendChild(m);
  var input=document.getElementById('ar2-calc-pw-input');
  var err=document.getElementById('ar2-calc-pw-err');
  var remember=document.getElementById('ar2-calc-pw-remember');
  var unlockBtn=document.getElementById('ar2-calc-pw-unlock');

  // Local-mode submit (legacy single-passcode flow)
  function submitLocal(){
    if(input.value===CALC_PASSCODE){
      if(m.parentNode) m.parentNode.removeChild(m);
      CALC_UNLOCKED=true;
      if(remember && remember.checked){
        try { localStorage.setItem(CALC_REMEMBER_KEY, '1'); } catch(e){}
      }
      onUnlock();
    } else {
      err.textContent='Incorrect passcode';
      input.value='';
      input.focus();
    }
  }

  // Cloud-mode submit — calls edge function via Cloud.gateLogin
  function submitCloud(){
    var code=(input.value||'').trim().toUpperCase();
    if(!code){ err.textContent='Please enter your access code'; return; }
    err.textContent='';
    unlockBtn.disabled=true;
    unlockBtn.textContent='Signing in…';
    AR2_CLOUD.gateLogin(code).then(function(u){
      // Successful login — close gate, run migration prompt, then unlock app
      if(m.parentNode) m.parentNode.removeChild(m);
      CALC_UNLOCKED=true;
      try { localStorage.setItem(CALC_REMEMBER_KEY, '1'); } catch(e){}
      // Auto-migrate any existing localStorage archive to the user's cloud account
      AR2_CLOUD.sniffLocalArchive().then(function(items){
        if(!items.length){ onUnlock(); return; }
        promptMigrateLocalArchive(items.length, function(){ onUnlock(); });
      }).catch(function(){ onUnlock(); });
    }).catch(function(res){
      unlockBtn.disabled=false;
      unlockBtn.textContent='Unlock';
      var b = (res && res.body) || {};
      var phone = b.phone || (window.AR2_CLOUD && AR2_CLOUD.SUPPORT_PHONE) || '';
      if(b.error === 'locked_out'){
        err.innerHTML = (b.message || 'Too many wrong attempts. Try again in 15 minutes.')
          + (phone ? '<br>Need help? Call <b style="color:#cfe2eb">'+phone+'</b>' : '');
        input.disabled = true; unlockBtn.disabled = true;
      } else if(b.error === 'invalid_code'){
        err.textContent='Incorrect access code';
        input.value=''; input.focus();
      } else if(b.error === 'no_app_access'){
        err.textContent='No access to this calculator. Contact admin.';
      } else if(b.error === 'account_disabled'){
        err.textContent='Your account is disabled. Contact admin.';
      } else {
        err.textContent='Sign-in failed. Please try again.';
      }
    });
  }

  var submit = cloudMode ? submitCloud : submitLocal;
  unlockBtn.onclick=submit;
  input.addEventListener('keydown',function(e){
    if(e.key==='Enter'){e.preventDefault();submit();}
  });
  // Auto-uppercase as the user types (so 'hdc1' becomes 'HDC1' immediately)
  if(cloudMode){
    input.addEventListener('input',function(){
      var v = (input.value||'').toUpperCase();
      if(v !== input.value) input.value = v;
    });
  }
  setTimeout(function(){input.focus();},50);
}

/* Migration prompt — shown once on first cloud sign-in if local archive exists.
   User clicks Upload → Cloud.migrateLocalToCloud uploads + deletes locals. */
function promptMigrateLocalArchive(count, done){
  var m=document.createElement('div');
  m.id='ar2-mig-modal';
  m.style.cssText='position:fixed;inset:0;background:rgba(4,15,30,.92);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);z-index:999998;display:flex;align-items:center;justify-content:center;padding:20px;font-family:"DM Sans","Helvetica Neue",Arial,sans-serif;';
  m.innerHTML='<div style="background:linear-gradient(145deg,#0a2540,#071628);border:1px solid rgba(0,180,216,.3);border-radius:12px;padding:32px 28px;max-width:460px;width:100%;box-shadow:0 20px 60px rgba(0,0,0,.6);">'
    +'<div style="font-family:\'Bebas Neue\',sans-serif;font-size:18px;letter-spacing:2.5px;color:#48cae4;margin-bottom:10px">IMPORT LOCAL ARCHIVE</div>'
    +'<div style="font-size:13px;color:#cfe2eb;line-height:1.6;margin-bottom:14px">We found <b style="color:#fff">'+count+' saved assessment'+(count===1?'':'s')+'</b> on this device. Upload them to your cloud account?</div>'
    +'<div style="font-size:11px;color:#7db8cc;line-height:1.5;margin-bottom:18px">After a successful upload the local copies will be removed from this device. The cloud becomes the only copy.</div>'
    +'<div id="ar2-mig-status" style="font-size:11.5px;color:#48cae4;min-height:18px;margin-bottom:8px"></div>'
    +'<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">'
      +'<button id="ar2-mig-skip" style="background:rgba(255,255,255,.06);color:#cfe2eb;border:1px solid rgba(255,255,255,.18);padding:10px 12px;border-radius:6px;cursor:pointer;font-size:12px;font-weight:600;font-family:inherit">Skip for now</button>'
      +'<button id="ar2-mig-go" style="background:linear-gradient(135deg,#00b4d8,#48cae4);color:#fff;border:none;padding:10px 12px;border-radius:6px;cursor:pointer;font-size:12px;font-weight:600;font-family:inherit">Upload Now</button>'
    +'</div>'
  +'</div>';
  document.body.appendChild(m);
  function close(){ if(m.parentNode) m.parentNode.removeChild(m); }
  document.getElementById('ar2-mig-skip').onclick=function(){ close(); done(); };
  document.getElementById('ar2-mig-go').onclick=function(){
    var st=document.getElementById('ar2-mig-status');
    var go=document.getElementById('ar2-mig-go');
    var sk=document.getElementById('ar2-mig-skip');
    go.disabled=true; sk.disabled=true; st.textContent='Uploading…';
    AR2_CLOUD.migrateLocalToCloud().then(function(res){
      st.textContent='Uploaded '+res.uploaded+'. '+(res.failed?(res.failed+' failed.'):'');
      setTimeout(function(){ close(); done(); }, 1100);
    }).catch(function(){
      st.textContent='Upload failed. You can retry from the Archive.';
      go.disabled=false; sk.disabled=false;
    });
  };
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

/* ═══════════════════════════════════════════════════════════════════
   CLOUD MODULE — Supabase-backed archive + multi-user auth
   ═══════════════════════════════════════════════════════════════════
   Activates when:
     - URL has ?supa=1, OR
     - localStorage 'ar2:cloud-enabled' === '1' (sticky after first opt-in)
   Once a user signs in via gate-login, this module installs itself as
   window.storage so all archive reads/writes route to Supabase. Other
   localStorage keys (calc-unlocked, pool-first-run, etc.) keep using
   localStorage. Per-user RLS enforces isolation; admins see all rows.
   ═══════════════════════════════════════════════════════════════════ */
var Cloud = (function(){
  var SUPA_URL    = 'https://rvumlookjbbettoqlrhi.supabase.co';
  var SUPA_KEY    = 'sb_publishable_HtHLMVqB6hR1gWpUTQeEWg_dbR5TACd';
  var APP_ID      = 'roi-internal';
  var ENABLED_KEY = 'ar2:cloud-enabled';
  var SESSION_KEY = 'ar2:cloud-session';
  var DEVICE_KEY  = 'ar2:cloud-device';
  var SUPPORT_PHONE = '(832) 979-6758';
  var BANK_IDX_K  = 'ar2:index';
  var BANK_PFX_K  = 'ar2:report:';

  function isEnabled(){
    // Cloud is the default mode for all users (per-user gate codes + cloud
    // archive). Legacy single-passcode mode is opt-out via ?supa=0 — kept
    // as an emergency rollback hatch only.
    try {
      if(/[?&]supa=0\b/.test(location.search || '')) return false;
    } catch(_) {}
    return true;
  }

  function deviceId(){
    try {
      var d = localStorage.getItem(DEVICE_KEY);
      if(!d){
        d = (window.crypto && crypto.randomUUID) ? crypto.randomUUID()
          : (Date.now().toString(36) + Math.random().toString(36).slice(2, 12));
        localStorage.setItem(DEVICE_KEY, d);
      }
      return d;
    } catch(_) { return ''; }
  }

  var sb = null;       // Supabase client
  var user = null;     // {id, name, email, role, appRole}
  var localStore = null;  // captured reference to original window.storage

  function getClient(){
    if(sb) return sb;
    if(typeof window.supabase === 'undefined' || !window.supabase.createClient) return null;
    sb = window.supabase.createClient(SUPA_URL, SUPA_KEY, {
      auth: { persistSession: true, storageKey: SESSION_KEY, autoRefreshToken: true, detectSessionInUrl: false }
    });
    return sb;
  }

  function gateLogin(code){
    var dev = deviceId();
    return fetch(SUPA_URL + '/functions/v1/gate-login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': SUPA_KEY,
        'Authorization': 'Bearer ' + SUPA_KEY
      },
      body: JSON.stringify({ code: code, app_id: APP_ID, device_id: dev })
    }).then(function(r){
      return r.json().catch(function(){ return {}; }).then(function(b){ return { ok: r.ok, status: r.status, body: b }; });
    }).then(function(res){
      if(!res.ok) throw res;
      var b = res.body;
      var c = getClient();
      if(!c) throw { ok:false, status: 500, body: { error: 'sdk_unavailable', phone: SUPPORT_PHONE } };
      return c.auth.setSession({ access_token: b.access_token, refresh_token: b.refresh_token })
        .then(function(){
          user = b.user || null;
          if(user && b.app) user.appRole = b.app.role;
          try { localStorage.setItem(ENABLED_KEY, '1'); } catch(_){}
          installStorageAdapter();
          // Increment login count on every successful gate-login (counts as a "session load")
          c.rpc('track_login').catch(function(){});
          return user;
        });
    });
  }

  function restoreSession(){
    var c = getClient();
    if(!c) return Promise.resolve(null);
    return c.auth.getSession().then(function(r){
      var sess = r && r.data && r.data.session;
      if(!sess) return null;
      // Look up app_user row to get role/name (RLS allows self-read)
      return c.from('app_users').select('id,email,name,role,active').eq('id', sess.user.id).maybeSingle().then(function(rs){
        if(rs.error || !rs.data) return null;
        if(!rs.data.active) { c.auth.signOut(); return null; }
        user = { id: rs.data.id, name: rs.data.name, email: rs.data.email, role: rs.data.role };
        installStorageAdapter();
        // Count restored sessions too — per request, every page-load with a
        // valid session counts toward the user's login_count, even when the
        // password was remembered.
        c.rpc('track_login').catch(function(){});
        return user;
      });
    }).catch(function(){ return null; });
  }

  function signOut(){
    user = null;
    var c = getClient();
    if(c) c.auth.signOut();
    try {
      localStorage.removeItem(ENABLED_KEY);
      localStorage.removeItem(SESSION_KEY);
      // Clear the calc-unlocked flag so the next visit re-shows the gate.
      // Without this, CALC_UNLOCKED loads true from localStorage and the
      // gate is skipped even though no cloud session exists.
      localStorage.removeItem('ar2:calc-unlocked');
    } catch(_){}
    if(localStore){ window.storage = localStore; localStore = null; }
  }

  // Map an app key → { kind:'index'|'snapshot', id? } or null for non-archive keys
  function parseKey(k){
    if(k === BANK_IDX_K) return { kind: 'index' };
    if(typeof k === 'string' && k.indexOf(BANK_PFX_K) === 0) return { kind: 'snapshot', id: k.slice(BANK_PFX_K.length) };
    return null;
  }

  function rowToIndexEntry(row, includeCreatedBy){
    var e = {
      id: row.id,
      propertyName: row.property_name,
      savedAt: row.created_at,
      summary: row.summary || {}
    };
    if(includeCreatedBy && row.app_users){
      e.createdById   = row.app_users.id;
      e.createdByName = row.app_users.name;
      e.createdByRole = row.app_users.role;
    }
    return e;
  }

  function listAssessments(){
    var c = getClient();
    if(!c || !user) return Promise.reject(new Error('not_signed_in'));
    var isAdmin = user.role === 'admin';
    var sel = 'id,property_name,summary,created_at,user_id' + (isAdmin ? ',app_users!assessments_user_id_fkey(id,name,role)' : '');
    return c.from('assessments').select(sel).eq('app_id', APP_ID).order('created_at', { ascending: false }).then(function(r){
      if(r.error) throw r.error;
      return (r.data || []).map(function(row){ return rowToIndexEntry(row, isAdmin); });
    });
  }

  function getAssessment(id){
    var c = getClient();
    if(!c || !user) return Promise.reject(new Error('not_signed_in'));
    return c.from('assessments').select('snapshot,property_name,created_at').eq('id', id).maybeSingle().then(function(r){
      if(r.error) throw r.error;
      if(!r.data) return null;
      var snap = r.data.snapshot || {};
      snap.id = id;
      snap.propertyName = r.data.property_name;
      snap.savedAt = r.data.created_at;
      return snap;
    });
  }

  function saveAssessment(snap){
    var c = getClient();
    if(!c || !user) return Promise.reject(new Error('not_signed_in'));
    var id = snap.id;
    var summary = snap.summary || {};
    var row = {
      id: id,
      user_id: user.id,
      app_id: APP_ID,
      property_name: snap.propertyName || 'Unnamed Property',
      summary: summary,
      snapshot: snap,
      app_version: window.AR2_VERSION || null
    };
    return c.from('assessments').upsert(row, { onConflict: 'id' }).then(function(r){
      if(r.error) throw r.error;
      // Best-effort denormalized quote row for reporting
      if(snap.quote && (snap.quote.quoteId || snap.quote.docKind)){
        var q = snap.quote;
        var totalUsd = (snap.summary && (snap.summary.total || snap.summary.quoteTotal)) || null;
        c.from('quotes').upsert({
          id: id,
          assessment_id: id,
          user_id: user.id,
          app_id: APP_ID,
          quote_id: q.quoteId || null,
          doc_kind: q.docKind || null,
          buyer_name: q.buyerName || null,
          shipping_term: q.shippingTerm || null,
          rep_initials: q.rep || null,
          customer_id: q.customerId || null,
          total_usd: totalUsd
        }, { onConflict: 'id' });
      }
    });
  }

  function deleteAssessment(id){
    var c = getClient();
    if(!c || !user) return Promise.reject(new Error('not_signed_in'));
    return c.from('assessments').delete().eq('id', id).then(function(r){ if(r.error) throw r.error; });
  }

  function reassignAssessment(id, toUserId){
    var c = getClient();
    if(!c || !user || user.role !== 'admin') return Promise.reject(new Error('not_admin'));
    return c.from('assessments').update({ user_id: toUserId }).eq('id', id).then(function(r){ if(r.error) throw r.error; });
  }

  function listUsers(){
    var c = getClient();
    if(!c || !user || user.role !== 'admin') return Promise.reject(new Error('not_admin'));
    return c.from('app_users').select('id,name,email,role,active').order('name').then(function(r){
      if(r.error) throw r.error;
      return r.data || [];
    });
  }

  function statsLast30Days(){
    var c = getClient();
    if(!c || !user) return Promise.reject(new Error('not_signed_in'));
    var since = new Date(Date.now() - 30*86400000).toISOString();
    var isAdmin = user.role === 'admin';
    var sel = 'id,user_id,created_at' + (isAdmin ? ',app_users!assessments_user_id_fkey(name)' : '');
    return c.from('assessments').select(sel).gte('created_at', since).eq('app_id', APP_ID).then(function(r){
      if(r.error) throw r.error;
      var rows = r.data || [];
      var byUser = {};
      rows.forEach(function(x){
        var n = (x.app_users && x.app_users.name) || (x.user_id === user.id ? user.name : 'Other');
        byUser[n] = (byUser[n] || 0) + 1;
      });
      return { total: rows.length, byUser: byUser };
    });
  }

  // Admin-only: returns a row per user with role, active flag, lifetime login
  // count, last login timestamp, 30-day record count, and 30-day login count.
  // Used to populate the admin dashboard's per-user table.
  function adminUserStats(){
    var c = getClient();
    if(!c || !user || user.role !== 'admin') return Promise.reject(new Error('not_admin'));
    return c.rpc('admin_user_stats').then(function(r){
      if(r.error) throw r.error;
      return r.data || [];
    });
  }

  // 90-day daily series, bucketed by EST day, grouped by user.
  // Returns { users:[name...], days:[YYYY-MM-DD...], series:{name:[count per day]} }
  function stats90DailyByUser(){
    var c = getClient();
    if(!c || !user) return Promise.reject(new Error('not_signed_in'));
    var since = new Date(Date.now() - 90*86400000).toISOString();
    var isAdmin = user.role === 'admin';
    var sel = 'id,user_id,created_at' + (isAdmin ? ',app_users!assessments_user_id_fkey(name)' : '');
    return c.from('assessments').select(sel).gte('created_at', since).eq('app_id', APP_ID).order('created_at').then(function(r){
      if(r.error) throw r.error;
      var rows = r.data || [];
      // Build day axis (90 days ending today, EST)
      var EST_OFFSET_MIN = -300; // -5h. Approx — does not honour DST; close enough for daily buckets.
      function ymdEst(iso){
        var d = new Date(iso);
        var t = d.getTime() + (EST_OFFSET_MIN - d.getTimezoneOffset()) * 60000;
        var z = new Date(t);
        return z.getUTCFullYear() + '-' + String(z.getUTCMonth()+1).padStart(2,'0') + '-' + String(z.getUTCDate()).padStart(2,'0');
      }
      var days = [];
      var todayEst = new Date(Date.now() + (EST_OFFSET_MIN - new Date().getTimezoneOffset())*60000);
      for(var i=89; i>=0; i--){
        var dd = new Date(todayEst.getTime() - i*86400000);
        days.push(dd.getUTCFullYear() + '-' + String(dd.getUTCMonth()+1).padStart(2,'0') + '-' + String(dd.getUTCDate()).padStart(2,'0'));
      }
      var byUserDay = {};
      var userNames = [];
      rows.forEach(function(x){
        var n = (x.app_users && x.app_users.name) || (x.user_id === user.id ? user.name : 'Other');
        if(!byUserDay[n]){ byUserDay[n] = {}; userNames.push(n); }
        var k = ymdEst(x.created_at);
        byUserDay[n][k] = (byUserDay[n][k] || 0) + 1;
      });
      var series = {};
      userNames.forEach(function(n){
        series[n] = days.map(function(d){ return byUserDay[n][d] || 0; });
      });
      return { users: userNames, days: days, series: series };
    });
  }

  function installStorageAdapter(){
    if(localStore) return; // already installed
    localStore = {
      get: window.storage.get.bind(window.storage),
      set: window.storage.set.bind(window.storage),
      delete: window.storage.delete.bind(window.storage)
    };
    window.storage = {
      get: function(k){
        if(!user) return localStore.get(k);
        var p = parseKey(k);
        if(!p) return localStore.get(k);
        if(p.kind === 'index'){
          return listAssessments().then(function(arr){ return JSON.stringify(arr); });
        }
        return getAssessment(p.id).then(function(snap){ return snap ? JSON.stringify(snap) : null; });
      },
      set: function(k, v){
        if(!user) return localStore.set(k, v);
        var p = parseKey(k);
        if(!p) return localStore.set(k, v);
        if(p.kind === 'index') return Promise.resolve(); // cloud derives index on read
        var snap;
        try { snap = (typeof v === 'string') ? JSON.parse(v) : v; } catch(_) { return Promise.reject(new Error('bad_snapshot')); }
        snap.id = p.id; // ensure snapshot id matches the URL key
        return saveAssessment(snap);
      },
      delete: function(k){
        if(!user) return localStore.delete(k);
        var p = parseKey(k);
        if(!p) return localStore.delete(k);
        if(p.kind === 'index') return Promise.resolve();
        return deleteAssessment(p.id);
      }
    };
  }

  // Local archive sniff — used by the post-login migration prompt.
  // Returns array of {key, snapshotJson} for every ar2:report:* key currently
  // in the user's localStorage (skipped for keys that resemble Supabase UUIDs).
  function sniffLocalArchive(){
    if(!localStore) return Promise.resolve([]);
    return localStore.get(BANK_IDX_K).then(function(r){
      var idx = [];
      try { idx = (typeof r === 'string') ? JSON.parse(r) : (r && r.value ? JSON.parse(r.value) : []); } catch(_){ idx = []; }
      if(!Array.isArray(idx) || !idx.length) return [];
      return Promise.all(idx.map(function(e){
        return localStore.get(BANK_PFX_K + e.id).then(function(rs){
          if(!rs) return null;
          try {
            var s = (typeof rs === 'string') ? JSON.parse(rs) : (rs.value ? JSON.parse(rs.value) : null);
            if(!s) return null;
            return { localId: e.id, snap: s };
          } catch(_){ return null; }
        });
      })).then(function(arr){ return arr.filter(Boolean); });
    });
  }

  // Migrate every local archive entry → cloud, then delete the local copies.
  // Returns { uploaded:N, failed:N, idMap:{oldId:newId} }
  function migrateLocalToCloud(){
    if(!user) return Promise.reject(new Error('not_signed_in'));
    return sniffLocalArchive().then(function(items){
      if(!items.length) return { uploaded: 0, failed: 0, idMap: {} };
      var idMap = {};
      var failed = 0;
      var chain = Promise.resolve();
      items.forEach(function(it){
        chain = chain.then(function(){
          var newId = (window.crypto && crypto.randomUUID) ? crypto.randomUUID() : null;
          if(!newId){ failed++; return; }
          var snap = it.snap;
          snap.id = newId;
          return saveAssessment(snap).then(function(){
            idMap[it.localId] = newId;
            return localStore.delete(BANK_PFX_K + it.localId).catch(function(){});
          }).catch(function(){ failed++; });
        });
      });
      // After all uploaded, wipe the local index
      return chain.then(function(){
        return localStore.delete(BANK_IDX_K).catch(function(){});
      }).then(function(){
        return { uploaded: items.length - failed, failed: failed, idMap: idMap };
      });
    });
  }

  return {
    isEnabled: isEnabled,
    isReady: function(){ return !!user; },
    user: function(){ return user; },
    isAdmin: function(){ return !!user && user.role === 'admin'; },
    deviceId: deviceId,
    getClient: getClient,
    gateLogin: gateLogin,
    restoreSession: restoreSession,
    signOut: signOut,
    listAssessments: listAssessments,
    getAssessment: getAssessment,
    saveAssessment: saveAssessment,
    deleteAssessment: deleteAssessment,
    reassignAssessment: reassignAssessment,
    listUsers: listUsers,
    statsLast30Days: statsLast30Days,
    stats90DailyByUser: stats90DailyByUser,
    adminUserStats: adminUserStats,
    isClient: function(){ return !!user && user.role === 'client'; },
    adminCreateUser: function(name, code, role){
      var c = getClient();
      if(!c || !user || user.role !== 'admin') return Promise.reject(new Error('not_admin'));
      return c.rpc('admin_create_user', { p_name: name, p_code: code, p_role: role }).then(function(r){
        if(r.error) throw r.error;
        return r.data;
      });
    },
    adminSetUserActive: function(userId, active){
      var c = getClient();
      if(!c || !user || user.role !== 'admin') return Promise.reject(new Error('not_admin'));
      return c.rpc('admin_set_user_active', { p_user_id: userId, p_active: active }).then(function(r){
        if(r.error) throw r.error;
      });
    },
    adminResetUserCode: function(userId, newCode){
      var c = getClient();
      if(!c || !user || user.role !== 'admin') return Promise.reject(new Error('not_admin'));
      return c.rpc('admin_reset_user_code', { p_user_id: userId, p_new_code: newCode }).then(function(r){
        if(r.error) throw r.error;
      });
    },
    adminSetUserRole: function(userId, newRole){
      var c = getClient();
      if(!c || !user || user.role !== 'admin') return Promise.reject(new Error('not_admin'));
      return c.rpc('admin_set_user_role', { p_user_id: userId, p_role: newRole }).then(function(r){
        if(r.error) throw r.error;
      });
    },
    sniffLocalArchive: sniffLocalArchive,
    migrateLocalToCloud: migrateLocalToCloud,
    installStorageAdapter: installStorageAdapter,
    SUPPORT_PHONE: SUPPORT_PHONE
  };
})();
window.AR2_CLOUD = Cloud;

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
  // UUID required when saving to the cloud (assessments.id is uuid). Falls
  // back to the legacy short id only if crypto.randomUUID is unavailable.
  var id = (window.crypto && crypto.randomUUID) ? crypto.randomUUID()
         : (Date.now().toString(36) + Math.random().toString(36).slice(2,6));
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
      inclLsCover:EX.inclLsCover, inclLsExecSummary:EX.inclLsExecSummary, inclLsP2Col3Photos:EX.inclLsP2Col3Photos, lsP2Col3Photos:EX.lsP2Col3Photos, inclLsBackCover:EX.inclLsBackCover,
      // Quote / Order Form toggles (Step 3)
      inclQuote:EX.inclQuote, inclQuoteTerms:EX.inclQuoteTerms, inclQuotePayment:EX.inclQuotePayment,
      comments:EX.comments, ytEntries:EX.ytEntries,
      images:EX.images,
    },
    // Quote / Order Form configuration — stored separately from EX so the
    // toggles (in EX) and the quote content (in Q) are conceptually distinct.
    quote: JSON.parse(JSON.stringify(Q)),
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
  EX.inclLsP2Col3Photos=!!snapshot.ex.inclLsP2Col3Photos;
  EX.lsP2Col3Photos=Array.isArray(snapshot.ex.lsP2Col3Photos)?snapshot.ex.lsP2Col3Photos:[];
  EX.inclLsBackCover=!!snapshot.ex.inclLsBackCover;
  // Quote / Order Form export toggles. Pre-v Quote snapshots won't have these.
  EX.inclQuote=!!snapshot.ex.inclQuote;
  EX.inclQuoteTerms=!!snapshot.ex.inclQuoteTerms;
  EX.inclQuotePayment=!!snapshot.ex.inclQuotePayment;
  // Quote configuration (S.quote-equivalent — held in module-level Q).
  // Pre-v Quote snapshots won't have a quote field; default Q stays untouched.
  if (snapshot.quote && typeof snapshot.quote === 'object') {
    Object.keys(snapshot.quote).forEach(function(k){ Q[k] = snapshot.quote[k]; });
  }
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
  // Reassign — admin-only, no snapshot fetch needed; opens user picker.
  if(action === 'reassign'){
    if(!(window.AR2_CLOUD && AR2_CLOUD.isAdmin())){ alert('Admin only.'); return; }
    showReassignModal(id);
    return;
  }
  window.storage.get(BANK_PFX+id)
    .then(function(r){
      if(!r){alert('Report not found. It may have been deleted.');renderBank();return;}
      var s=typeof r==='string'?r:r.value;
      var snap=JSON.parse(s);
      if(action==='recall') bankRecall(snap);
      else if(action==='duplicate') bankDuplicate(snap);
      else if(action==='portrait') bankDownloadPdf(snap,'portrait');
      else if(action==='landscape') bankDownloadPdf(snap,'landscape');
    })
    .catch(function(){alert('Could not load report.');});
}

/* Reassign modal — admin-only. Loads the user list, lets admin pick a new
   owner for the record, then calls Cloud.reassignAssessment. */
function showReassignModal(assessmentId){
  var existing=document.getElementById('ar2-reassign-modal');
  if(existing&&existing.parentNode) existing.parentNode.removeChild(existing);
  var m=document.createElement('div');
  m.id='ar2-reassign-modal';
  m.style.cssText='position:fixed;inset:0;background:rgba(4,15,30,.85);backdrop-filter:blur(6px);-webkit-backdrop-filter:blur(6px);z-index:999998;display:flex;align-items:center;justify-content:center;padding:20px;font-family:"DM Sans","Helvetica Neue",Arial,sans-serif;';
  m.innerHTML='<div style="background:linear-gradient(145deg,#0a2540,#071628);border:1px solid rgba(0,180,216,.3);border-radius:10px;padding:26px;max-width:420px;width:100%;box-shadow:0 10px 40px rgba(0,0,0,.5);">'
    +'<div style="font-family:\'Bebas Neue\',sans-serif;font-size:18px;letter-spacing:2px;color:#48cae4;margin-bottom:10px">REASSIGN RECORD</div>'
    +'<div style="font-size:12px;color:#cfe2eb;line-height:1.6;margin-bottom:14px">Move this record to another user. The new owner will see it in their archive.</div>'
    +'<select id="ar2-reassign-sel" style="width:100%;background:rgba(0,0,0,.35);border:1px solid rgba(0,180,216,.35);color:#fff;padding:10px 12px;border-radius:6px;font-size:13px;margin-bottom:12px;outline:none;font-family:inherit"><option value="">Loading users…</option></select>'
    +'<div id="ar2-reassign-err" style="font-size:11px;color:#ef4444;min-height:14px;margin-bottom:8px"></div>'
    +'<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">'
      +'<button id="ar2-reassign-cancel" style="background:rgba(255,255,255,.06);color:#cfe2eb;border:1px solid rgba(255,255,255,.18);padding:10px 12px;border-radius:6px;cursor:pointer;font-size:12px;font-weight:600;font-family:inherit">Cancel</button>'
      +'<button id="ar2-reassign-go" disabled style="background:linear-gradient(135deg,#00b4d8,#48cae4);color:#fff;border:none;padding:10px 12px;border-radius:6px;cursor:pointer;font-size:12px;font-weight:600;font-family:inherit;opacity:.6">Reassign</button>'
    +'</div>'
  +'</div>';
  document.body.appendChild(m);
  var sel=document.getElementById('ar2-reassign-sel');
  var go=document.getElementById('ar2-reassign-go');
  var err=document.getElementById('ar2-reassign-err');
  function close(){ if(m.parentNode) m.parentNode.removeChild(m); }
  document.getElementById('ar2-reassign-cancel').onclick=close;
  m.addEventListener('click',function(e){ if(e.target===m) close(); });
  AR2_CLOUD.listUsers().then(function(users){
    var opts = '<option value="">Select user…</option>' + users.filter(function(u){return u.active;}).map(function(u){
      return '<option value="'+u.id+'">'+esc(u.name)+' · '+esc(u.role)+'</option>';
    }).join('');
    sel.innerHTML = opts;
    sel.onchange=function(){
      go.disabled = !sel.value;
      go.style.opacity = sel.value ? '1' : '.6';
    };
  }).catch(function(){
    err.textContent='Failed to load users.';
  });
  go.onclick=function(){
    var toUid = sel.value;
    if(!toUid) return;
    go.disabled=true; go.textContent='Reassigning…';
    AR2_CLOUD.reassignAssessment(assessmentId, toUid).then(function(){
      close();
      renderBank();
    }).catch(function(){
      err.textContent='Reassign failed.';
      go.disabled=false; go.textContent='Reassign';
    });
  };
}

/* ── Admin User Manager modals ──
   Add user / Reset code / Change role / Toggle active. All call into
   AR2_CLOUD admin RPCs which are admin-gated server-side. UI is local
   to the calculator — no separate page. */
function showAdminAddUserModal(){
  var existing=document.getElementById('ar2-admuser-modal');
  if(existing&&existing.parentNode) existing.parentNode.removeChild(existing);
  var m=document.createElement('div');
  m.id='ar2-admuser-modal';
  m.style.cssText='position:fixed;inset:0;background:rgba(4,15,30,.85);backdrop-filter:blur(6px);-webkit-backdrop-filter:blur(6px);z-index:999998;display:flex;align-items:center;justify-content:center;padding:20px;font-family:"DM Sans","Helvetica Neue",Arial,sans-serif;';
  m.innerHTML='<div style="background:linear-gradient(145deg,#0a2540,#071628);border:1px solid rgba(0,180,216,.3);border-radius:10px;padding:28px;max-width:440px;width:100%;box-shadow:0 10px 40px rgba(0,0,0,.5);">'
    +'<div style="font-family:\'Bebas Neue\',sans-serif;font-size:18px;letter-spacing:2px;color:#48cae4;margin-bottom:14px">ADD NEW USER</div>'
    +'<div class="ar-form-row" style="margin-bottom:10px"><label>Name</label>'
      +'<input id="ar2-au-name" class="ar-inp" placeholder="e.g. Sarah Johnson" autocomplete="off" />'
    +'</div>'
    +'<div class="ar-form-row" style="margin-bottom:10px"><label>Access Code (4 chars)</label>'
      +'<input id="ar2-au-code" class="ar-inp" maxlength="4" placeholder="e.g. SJ01" autocapitalize="characters" style="text-transform:uppercase;letter-spacing:6px;font-family:\'JetBrains Mono\',monospace;text-align:center" />'
    +'</div>'
    +'<div class="ar-form-row" style="margin-bottom:14px"><label>Role</label>'
      +'<select id="ar2-au-role" class="ar-sel">'
        +'<option value="user">User — own records, standard features</option>'
        +'<option value="admin">Admin — sees all records + this dashboard</option>'
        +'<option value="client">Client — limited features (no quotes/exports)</option>'
      +'</select>'
    +'</div>'
    +'<div id="ar2-au-err" style="font-size:11px;color:#ef4444;min-height:14px;margin-bottom:8px"></div>'
    +'<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">'
      +'<button id="ar2-au-cancel" class="ar-bank-act">Cancel</button>'
      +'<button id="ar2-au-go" class="ar-bank-act primary">Create User</button>'
    +'</div>'
  +'</div>';
  document.body.appendChild(m);
  function close(){ if(m.parentNode) m.parentNode.removeChild(m); }
  document.getElementById('ar2-au-cancel').onclick=close;
  m.addEventListener('click',function(e){ if(e.target===m) close(); });
  var codeInp=document.getElementById('ar2-au-code');
  codeInp.addEventListener('input',function(){ codeInp.value=(codeInp.value||'').toUpperCase(); });
  document.getElementById('ar2-au-go').onclick=function(){
    var name=(document.getElementById('ar2-au-name').value||'').trim();
    var code=(document.getElementById('ar2-au-code').value||'').trim().toUpperCase();
    var role=document.getElementById('ar2-au-role').value;
    var err=document.getElementById('ar2-au-err');
    if(!name){ err.textContent='Name is required.'; return; }
    if(code.length<4){ err.textContent='Access code must be 4 characters.'; return; }
    err.textContent='';
    var go=document.getElementById('ar2-au-go');
    go.disabled=true; go.textContent='Creating…';
    AR2_CLOUD.adminCreateUser(name, code, role).then(function(){
      close();
      // Force the dashboard to refresh stats
      var dashEl=document.getElementById('ar-admin-dash');
      if(dashEl) dashEl.dataset.loaded='';
      populateAdminDashboard();
    }).catch(function(e){
      err.textContent = (e && e.message) ? e.message : 'Failed to create user.';
      go.disabled=false; go.textContent='Create User';
    });
  };
  setTimeout(function(){ document.getElementById('ar2-au-name').focus(); }, 50);
}

function showAdminResetCodeModal(uid, uname){
  var existing=document.getElementById('ar2-admrc-modal');
  if(existing&&existing.parentNode) existing.parentNode.removeChild(existing);
  var m=document.createElement('div');
  m.id='ar2-admrc-modal';
  m.style.cssText='position:fixed;inset:0;background:rgba(4,15,30,.85);backdrop-filter:blur(6px);-webkit-backdrop-filter:blur(6px);z-index:999998;display:flex;align-items:center;justify-content:center;padding:20px;font-family:"DM Sans","Helvetica Neue",Arial,sans-serif;';
  m.innerHTML='<div style="background:linear-gradient(145deg,#0a2540,#071628);border:1px solid rgba(0,180,216,.3);border-radius:10px;padding:24px;max-width:380px;width:100%;box-shadow:0 10px 40px rgba(0,0,0,.5);">'
    +'<div style="font-family:\'Bebas Neue\',sans-serif;font-size:16px;letter-spacing:2px;color:#48cae4;margin-bottom:6px">RESET ACCESS CODE</div>'
    +'<div style="font-size:12px;color:#cfe2eb;margin-bottom:14px">For: <b>'+esc(uname)+'</b></div>'
    +'<input id="ar2-rc-code" class="ar-inp" maxlength="4" placeholder="New 4-char code" autocapitalize="characters" style="text-transform:uppercase;letter-spacing:6px;font-family:\'JetBrains Mono\',monospace;text-align:center;margin-bottom:8px" />'
    +'<div id="ar2-rc-err" style="font-size:11px;color:#ef4444;min-height:14px;margin-bottom:8px"></div>'
    +'<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">'
      +'<button id="ar2-rc-cancel" class="ar-bank-act">Cancel</button>'
      +'<button id="ar2-rc-go" class="ar-bank-act primary">Save</button>'
    +'</div>'
  +'</div>';
  document.body.appendChild(m);
  function close(){ if(m.parentNode) m.parentNode.removeChild(m); }
  document.getElementById('ar2-rc-cancel').onclick=close;
  m.addEventListener('click',function(e){ if(e.target===m) close(); });
  var inp=document.getElementById('ar2-rc-code');
  inp.addEventListener('input',function(){ inp.value=(inp.value||'').toUpperCase(); });
  document.getElementById('ar2-rc-go').onclick=function(){
    var code=(inp.value||'').trim().toUpperCase();
    var err=document.getElementById('ar2-rc-err');
    if(code.length<4){ err.textContent='Code must be 4 characters.'; return; }
    var go=document.getElementById('ar2-rc-go');
    go.disabled=true; go.textContent='Saving…';
    AR2_CLOUD.adminResetUserCode(uid, code).then(function(){
      close(); populateAdminDashboard();
    }).catch(function(e){
      err.textContent = (e && e.message) ? e.message : 'Failed to reset code.';
      go.disabled=false; go.textContent='Save';
    });
  };
  setTimeout(function(){ inp.focus(); }, 50);
}

function showAdminChangeRoleModal(uid, uname, currentRole){
  var existing=document.getElementById('ar2-admro-modal');
  if(existing&&existing.parentNode) existing.parentNode.removeChild(existing);
  var m=document.createElement('div');
  m.id='ar2-admro-modal';
  m.style.cssText='position:fixed;inset:0;background:rgba(4,15,30,.85);backdrop-filter:blur(6px);-webkit-backdrop-filter:blur(6px);z-index:999998;display:flex;align-items:center;justify-content:center;padding:20px;font-family:"DM Sans","Helvetica Neue",Arial,sans-serif;';
  function opt(v,l){ return '<option value="'+v+'"'+(v===currentRole?' selected':'')+'>'+l+'</option>'; }
  m.innerHTML='<div style="background:linear-gradient(145deg,#0a2540,#071628);border:1px solid rgba(0,180,216,.3);border-radius:10px;padding:24px;max-width:380px;width:100%;box-shadow:0 10px 40px rgba(0,0,0,.5);">'
    +'<div style="font-family:\'Bebas Neue\',sans-serif;font-size:16px;letter-spacing:2px;color:#48cae4;margin-bottom:6px">CHANGE ROLE</div>'
    +'<div style="font-size:12px;color:#cfe2eb;margin-bottom:14px">For: <b>'+esc(uname)+'</b></div>'
    +'<select id="ar2-ro-sel" class="ar-sel" style="margin-bottom:14px">'
      +opt('user','User')+opt('admin','Admin')+opt('client','Client')
    +'</select>'
    +'<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">'
      +'<button id="ar2-ro-cancel" class="ar-bank-act">Cancel</button>'
      +'<button id="ar2-ro-go" class="ar-bank-act primary">Save</button>'
    +'</div>'
  +'</div>';
  document.body.appendChild(m);
  function close(){ if(m.parentNode) m.parentNode.removeChild(m); }
  document.getElementById('ar2-ro-cancel').onclick=close;
  m.addEventListener('click',function(e){ if(e.target===m) close(); });
  document.getElementById('ar2-ro-go').onclick=function(){
    var newRole=document.getElementById('ar2-ro-sel').value;
    if(newRole===currentRole){ close(); return; }
    AR2_CLOUD.adminSetUserRole(uid, newRole).then(function(){
      close(); populateAdminDashboard();
    }).catch(function(e){ alert('Role change failed: '+(e.message||e)); });
  };
}

/* Admin dashboard async populator — fills the placeholder after renderBank
   has injected the panel. Two requests in parallel: stats30Days + 90-day
   daily-by-user. The chart is drawn as a simple multi-line SVG (one polyline
   per user) using EST-bucketed daily counts. */
function populateAdminDashboard(){
  if(!(window.AR2_CLOUD && AR2_CLOUD.isAdmin())) return;
  AR2_CLOUD.statsLast30Days().then(function(s){
    var totalEl=document.getElementById('ar-admin-30d-total');
    if(totalEl) totalEl.textContent = s.total;
  }).catch(function(){});
  // User-stats table — replaces the old chip list. Shows per-user lifetime
  // login count + 30-day record count + 30-day login count.
  AR2_CLOUD.adminUserStats().then(function(rows){
    var tableEl = document.getElementById('ar-admin-userstats');
    if(!tableEl) return;
    if(!rows.length){
      tableEl.innerHTML = '<div style="color:var(--mu);font-size:11px;padding:8px">No users yet.</div>';
      return;
    }
    tableEl.innerHTML = '<table class="ar-admin-userstats-tbl">'
      + '<thead><tr>'
        + '<th>User</th>'
        + '<th>Role</th>'
        + '<th class="num" title="Records created in the last 30 days">Records (30d)</th>'
        + '<th class="num" title="Sessions in the last 30 days">Logins (30d)</th>'
        + '<th class="num" title="Lifetime sessions since cloud cutover">Lifetime</th>'
        + '<th>Last Login</th>'
        + '<th class="actions">Actions</th>'
      + '</tr></thead><tbody>'
      + rows.map(function(u){
          var roleClass = u.role === 'admin' ? 'role-admin' : (u.role === 'client' ? 'role-client' : 'role-user');
          var lastLogin = u.last_login_at
            ? new Date(u.last_login_at).toLocaleDateString('en-US',{month:'short',day:'numeric',year:'numeric'})
            : '—';
          var inactiveStyle = u.active ? '' : ' style="opacity:.55"';
          var toggleLabel = u.active ? 'Disable' : 'Enable';
          return '<tr'+inactiveStyle+'>'
            + '<td><b>'+esc(u.name)+'</b>'+(u.active?'':' <span class="ar-admin-disabled">disabled</span>')+'</td>'
            + '<td><span class="ar-admin-role '+roleClass+'">'+esc(u.role)+'</span></td>'
            + '<td class="num">'+u.records_30d+'</td>'
            + '<td class="num">'+u.logins_30d+'</td>'
            + '<td class="num">'+u.login_count+'</td>'
            + '<td class="muted">'+lastLogin+'</td>'
            + '<td class="actions">'
              + '<button class="ar-admin-row-act" data-action="admin-reset-code" data-uid="'+u.user_id+'" data-uname="'+esc(u.name)+'" title="Reset access code">Reset</button>'
              + '<button class="ar-admin-row-act" data-action="admin-change-role" data-uid="'+u.user_id+'" data-uname="'+esc(u.name)+'" data-urole="'+u.role+'" title="Change role">Role</button>'
              + '<button class="ar-admin-row-act'+(u.active?' danger':' enable')+'" data-action="admin-toggle-active" data-uid="'+u.user_id+'" data-uname="'+esc(u.name)+'" data-uactive="'+u.active+'" title="'+toggleLabel+' user">'+toggleLabel+'</button>'
            + '</td>'
          + '</tr>';
        }).join('')
      + '</tbody></table>';
  }).catch(function(){});
  AR2_CLOUD.stats90DailyByUser().then(function(d){
    var mount=document.getElementById('ar-admin-chart-mount');
    var legendEl=document.getElementById('ar-admin-chart-legend');
    if(!mount) return;
    mount.innerHTML = drawAdminChart(d);
    if(legendEl){
      legendEl.innerHTML = d.users.map(function(n,i){
        var c = ADMIN_CHART_COLORS[i % ADMIN_CHART_COLORS.length];
        return '<span><i style="background:'+c+'"></i>'+esc(n)+'</span>';
      }).join('');
    }
  }).catch(function(){});
}

var ADMIN_CHART_COLORS = ['#00b4d8','#f0a500','#22c55e','#a855f7','#ec4899','#ef4444','#3b82f6','#eab308'];

function drawAdminChart(d){
  if(!d || !d.users.length) return '<div style="color:var(--mu);font-size:11px;padding:10px">No activity in the last 90 days.</div>';
  var W = 720, H = 180, pad = { top: 8, right: 12, bottom: 22, left: 28 };
  var plotW = W - pad.left - pad.right;
  var plotH = H - pad.top - pad.bottom;
  var nDays = d.days.length;
  // Find ymax across all series
  var yMax = 1;
  d.users.forEach(function(n){
    d.series[n].forEach(function(v){ if(v > yMax) yMax = v; });
  });
  yMax = Math.ceil(yMax * 1.15);
  function x(i){ return pad.left + (i / Math.max(1,nDays-1)) * plotW; }
  function y(v){ return pad.top + plotH - (v / yMax) * plotH; }
  var svg = '<svg viewBox="0 0 '+W+' '+H+'" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">';
  // Grid lines (4 horizontal)
  for(var g=1; g<=4; g++){
    var gy = pad.top + (g/4) * plotH;
    svg += '<line x1="'+pad.left+'" y1="'+gy+'" x2="'+(pad.left+plotW)+'" y2="'+gy+'" stroke="rgba(255,255,255,.06)" stroke-width="1"/>';
  }
  // Axis baseline
  svg += '<line x1="'+pad.left+'" y1="'+(pad.top+plotH)+'" x2="'+(pad.left+plotW)+'" y2="'+(pad.top+plotH)+'" stroke="rgba(255,255,255,.18)" stroke-width="1"/>';
  // Y axis ticks
  for(var t=0; t<=4; t++){
    var v = Math.round(yMax * (4-t)/4);
    var ty = pad.top + (t/4)*plotH;
    svg += '<text x="'+(pad.left-4)+'" y="'+(ty+3)+'" text-anchor="end" font-size="9" fill="#7db8cc" font-family="JetBrains Mono,monospace">'+v+'</text>';
  }
  // X axis labels — start, midpoint, end
  function fmt(d0){
    var z = new Date(d0+'T00:00:00Z');
    return (z.getUTCMonth()+1)+'/'+z.getUTCDate();
  }
  svg += '<text x="'+pad.left+'" y="'+(H-6)+'" text-anchor="start" font-size="9" fill="#7db8cc" font-family="JetBrains Mono,monospace">'+fmt(d.days[0])+'</text>';
  svg += '<text x="'+(pad.left+plotW/2)+'" y="'+(H-6)+'" text-anchor="middle" font-size="9" fill="#7db8cc" font-family="JetBrains Mono,monospace">'+fmt(d.days[Math.floor(nDays/2)])+'</text>';
  svg += '<text x="'+(pad.left+plotW)+'" y="'+(H-6)+'" text-anchor="end" font-size="9" fill="#7db8cc" font-family="JetBrains Mono,monospace">'+fmt(d.days[nDays-1])+'</text>';
  // Series polylines
  d.users.forEach(function(n, ui){
    var c = ADMIN_CHART_COLORS[ui % ADMIN_CHART_COLORS.length];
    var pts = d.series[n].map(function(v, i){ return x(i)+','+y(v); }).join(' ');
    svg += '<polyline points="'+pts+'" fill="none" stroke="'+c+'" stroke-width="1.6" stroke-linejoin="round" stroke-linecap="round"/>';
  });
  svg += '</svg>';
  return svg;
}

/* ── Bank: duplicate an existing snapshot as a new editable record ──
   Shows a confirmation prompt (matching the Save-as-New flow style) and
   on confirm clones the snapshot with a new id, fresh savedAt, and a
   "Copy of" name prefix so the user can edit it independently. */
function bankDuplicate(snap){
  var origName=snap.propertyName||'Unnamed Property';
  showDuplicateConfirmModal(origName, function(){
    var newId = (window.crypto && crypto.randomUUID) ? crypto.randomUUID()
              : (Date.now().toString(36) + Math.random().toString(36).slice(2,6));
    var newName='Copy of '+origName;
    // Deep-clone via JSON round-trip (safe — snapshot is plain data)
    var copy=JSON.parse(JSON.stringify(snap));
    copy.id=newId;
    copy.propertyName=newName;
    copy.savedAt=new Date().toISOString();
    if(copy.state) copy.state.propertyName=newName;
    var entry={id:newId, propertyName:newName, savedAt:copy.savedAt, summary:copy.summary};
    window.storage.set(BANK_PFX+newId, JSON.stringify(copy))
      .then(function(){return bankGetIndex();})
      .then(function(idx){
        idx.unshift(entry);
        return window.storage.set(BANK_IDX, JSON.stringify(idx));
      })
      .then(function(){renderBank();})
      .catch(function(){alert('Could not duplicate report.');});
  });
}

/* ── Duplicate confirmation modal — matches Save-as-New style ── */
function showDuplicateConfirmModal(propName, onConfirm){
  var existing=document.getElementById('ar2-dup-modal');
  if(existing&&existing.parentNode) existing.parentNode.removeChild(existing);
  var m=document.createElement('div');
  m.id='ar2-dup-modal';
  m.style.cssText='position:fixed;inset:0;background:rgba(4,15,30,.75);backdrop-filter:blur(4px);-webkit-backdrop-filter:blur(4px);z-index:999998;display:flex;align-items:center;justify-content:center;padding:20px;font-family:"DM Sans","Helvetica Neue",Arial,sans-serif;';
  m.innerHTML='<div style="background:linear-gradient(145deg,#0a2540,#071628);border:1px solid rgba(0,180,216,.3);border-radius:10px;padding:28px;max-width:440px;width:100%;box-shadow:0 10px 40px rgba(0,0,0,.5);">'
    +'<div style="font-family:\'Bebas Neue\',sans-serif;font-size:18px;letter-spacing:2px;color:#48cae4;margin-bottom:10px">DUPLICATE ASSESSMENT</div>'
    +'<div style="font-size:13px;color:#cfe2eb;line-height:1.6;margin-bottom:22px">Create a duplicate of <strong style="color:#fff">"'+esc(propName)+'"</strong>?<br><br>The copy will be saved as <strong style="color:#fff">"Copy of '+esc(propName)+'"</strong> so you can edit it independently from the original.</div>'
    +'<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">'
      +'<button id="ar2-dup-cancel" style="background:rgba(255,255,255,.08);color:#cfe2eb;border:1px solid rgba(255,255,255,.15);padding:10px 12px;border-radius:6px;cursor:pointer;font-size:12px;font-weight:600;font-family:inherit">Cancel</button>'
      +'<button id="ar2-dup-confirm" style="background:linear-gradient(135deg,#f0a500,#f7c948);color:#071628;border:none;padding:10px 12px;border-radius:6px;cursor:pointer;font-size:12px;font-weight:600;font-family:inherit">Duplicate</button>'
    +'</div>'
  +'</div>';
  document.body.appendChild(m);
  var close=function(){if(m.parentNode)m.parentNode.removeChild(m);};
  document.getElementById('ar2-dup-confirm').onclick=function(){close();onConfirm();};
  document.getElementById('ar2-dup-cancel').onclick=close;
  m.addEventListener('click',function(e){if(e.target===m)close();});
}

/* ── Render Archive view ── */
function renderBank(){
  var el=document.getElementById('ar2-bank');
  if(!el)return;
  // Cloud-mode flags drive the admin dashboard + Created By column.
  var isCloudReady = !!(window.AR2_CLOUD && AR2_CLOUD.isReady());
  var isAdmin      = !!(window.AR2_CLOUD && AR2_CLOUD.isAdmin());
  el.innerHTML='<div class="ar-bank-wrap"><div class="ar-bank-hero">'
    +'<div class="ar-bank-title">Saved Assessments'+(isCloudReady?' <span style="font-size:11px;color:var(--mu);font-weight:400;letter-spacing:1px;margin-left:8px">'+esc(AR2_CLOUD.user().name)+(isAdmin?' \u00b7 ADMIN':'')+'</span>':'')+'</div>'
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
        // Created By cell \u2014 admin-only. Highlights the row owner's name + role.
        var createdByCell = '';
        if(isAdmin){
          var nm = entry.createdByName || '\u2014';
          var rl = entry.createdByRole || '';
          createdByCell = '<div class="ar-bank-createdby">'
            + '<div class="name">'+esc(nm)+'</div>'
            + (rl?'<div class="role'+(rl==='admin'?' admin':'')+'">'+esc(rl)+'</div>':'')
          + '</div>';
        }
        // Reassign button \u2014 admin-only, shown alongside the existing actions.
        var reassignBtn = isAdmin
          ? '<button class="ar-bank-act reassign" data-bank-action="reassign" data-bank-id="'+entry.id+'" title="Reassign to another user">\u2192</button>'
          : '';
        var classes = 'ar-bank-card' + (selectMode?' selmode':'') + (isSel?' selected':'') + (isAdmin?' admin-cols':'');
        return '<div class="'+classes+'" data-row-id="'+entry.id+'">'
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
          +createdByCell
          +'<div class="ar-bank-actions">'
            +'<button class="ar-bank-act primary" data-bank-action="recall" data-bank-id="'+entry.id+'" title="Load this assessment">'+I.file+'</button>'
            +'<button class="ar-bank-act" data-bank-action="duplicate" data-bank-id="'+entry.id+'" title="Duplicate this assessment">'+I.copy+'</button>'
            +'<button class="ar-bank-act" data-bank-action="portrait" data-bank-id="'+entry.id+'" title="Portrait PDF">'+I.port+'</button>'
            +'<button class="ar-bank-act" data-bank-action="landscape" data-bank-id="'+entry.id+'" title="Landscape PDF">'+I.land+'</button>'
            +reassignBtn
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
    // Admin gets an extra "Created By" header column. Class .admin-cols
    // shifts the grid template (CSS) to fit it.
    var thead='<div class="ar-bank-thead'+(isAdmin?' admin-cols':'')+'" id="ar-bank-thead">'
      +'<div>Property</div><div>Monthly</div><div>Annual</div><div>Investment</div><div>Weight</div><div>Devices</div><div>Volume</div><div>Payback</div>'
      +(isAdmin?'<div>Created By</div>':'')
      +'<div></div>'
    +'</div>';
    // Admin dashboard panel \u2014 placeholder; populated async after first list.
    // Lives inside the bank wrap, ABOVE the search/thead, so admins see
    // top-line stats the moment the archive opens.
    // Admin dashboard \u2014 collapsible drawer card. Default closed; click header
    // to expand. Open/closed state is remembered per-device in localStorage.
    var dashOpen = false;
    try { dashOpen = localStorage.getItem('ar2:admin-dash-open') === '1'; } catch(_){}
    var adminPanel = isAdmin
      ? '<div class="ar-admin-dash'+(dashOpen?' open':'')+'" id="ar-admin-dash">'
          +'<div class="ar-admin-dash-head" data-action="admin-dash-toggle">'
            +'<div class="ar-admin-dash-title">Admin Dashboard'
              +'<span class="ar-admin-dash-title-sub">Activity stats, sessions &amp; per-user trends</span>'
            +'</div>'
            +'<div class="ar-admin-dash-toggle" aria-label="Toggle dashboard">\u203a</div>'
          +'</div>'
          +'<div class="ar-admin-dash-body">'
            +'<div class="ar-admin-kpi-card" style="margin-bottom:14px">'
              +'<div class="ar-admin-kpi-lbl">Records \u00b7 Last 30 Days</div>'
              +'<div class="ar-admin-kpi-val" id="ar-admin-30d-total">\u2014</div>'
              +'<div class="ar-admin-kpi-sub">Across all users</div>'
            +'</div>'
            +'<div class="ar-admin-userstats-card">'
              +'<div class="ar-admin-userstats-title-row">'
                +'<div class="ar-admin-userstats-title">User Activity &amp; Management</div>'
                +'<button class="ar-admin-add-btn" data-action="admin-add-user">+ New User</button>'
              +'</div>'
              +'<div id="ar-admin-userstats"><div style="color:var(--mu);font-size:11px;padding:8px">Loading\u2026</div></div>'
            +'</div>'
            +'<div class="ar-admin-chart">'
              +'<div class="ar-admin-chart-title">Daily Records \u00b7 Last 90 Days \u00b7 By User (EST)</div>'
              +'<div id="ar-admin-chart-mount"></div>'
              +'<div class="ar-admin-chart-legend" id="ar-admin-chart-legend"></div>'
            +'</div>'
          +'</div>'
        +'</div>'
      : '';
    wrap.innerHTML='<div class="ar-bank-hero">'
      +'<div class="ar-bank-title">Saved Assessments'+(isCloudReady?' <span style="font-size:11px;color:var(--mu);font-weight:400;letter-spacing:1px;margin-left:8px">'+esc(AR2_CLOUD.user().name)+(isAdmin?' \u00b7 ADMIN':'')+'</span>':'')+' <span>\u00b7 '+idx.length+'</span></div>'
      +'<div style="display:flex;align-items:center;gap:8px">'
        +'<button class="ar-bank-act" data-action="bank-toggle-select" title="Select multiple">'+I.check+' Select</button>'
        +'<button class="ar-bank-act primary no-print" data-action="view-form">'+I.back+' Back to Calculator</button>'
      +'</div>'
    +'</div>'
    +adminPanel
    +(idx.length>3?'<input class="ar-bank-search" id="ar-bank-search" placeholder="Search by property name\u2026" type="search" />':'')
    +'<div class="ar-bank-toolbar" id="ar-bank-toolbar" style="display:none"></div>'
    +thead
    +'<div class="ar-bank-list" id="'+listId+'">'+renderCards(idx)+'</div>';
    // Populate admin dashboard contents only if it's already open. Otherwise
    // we lazy-load when the admin clicks the header to expand it.
    if(isAdmin && dashOpen) populateAdminDashboard();
    // Wire up the dashboard drawer toggle (click header → open/close, persist).
    if(isAdmin){
      var dashEl = document.getElementById('ar-admin-dash');
      var head = dashEl && dashEl.querySelector('.ar-admin-dash-head');
      if(head){
        head.addEventListener('click', function(){
          var willOpen = !dashEl.classList.contains('open');
          dashEl.classList.toggle('open', willOpen);
          try { localStorage.setItem('ar2:admin-dash-open', willOpen ? '1' : '0'); } catch(_){}
          // Lazy-load contents on first open
          if(willOpen && !dashEl.dataset.loaded){
            populateAdminDashboard();
            dashEl.dataset.loaded = '1';
          }
        });
        if(dashOpen) dashEl.dataset.loaded = '1';
      }
    }

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
  EX.inclLsCover=false; EX.inclLsExecSummary=false; EX.inclLsP2Col3Photos=false; EX.lsP2Col3Photos=[]; EX.inclLsBackCover=false;
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

var STEPS=['map-pools','pool-system','settings','quote','export'];
var STEP_LBLS=['Map Pools','Pool & System','Pricing & Settings','Quote','Export'];

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
  water_cost_per_gal:0.01, water_loss_reduction:0.41,
  chlorine_cost:0.0175,  chlorine_reduction:0.40,
  muriatic_cost:0.0072,  muriatic_reduction:0.25,
  bicarb_cost:0.00084,   bicarb_reduction:0.53,
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
/* ── Accept a photo file into the ES Page 2 Col 3 photo array (max 4) ── */
function acceptP2c3Photo(file, slotIdx){
  if(!file || !file.type || file.type.indexOf('image/')!==0) return;
  resizeAndEncodeImage(file, 800, 0.82, function(dataUrl){
    if(!dataUrl) return;
    if(!Array.isArray(EX.lsP2Col3Photos)) EX.lsP2Col3Photos=[];
    var photo={id:'p2c3-'+Date.now()+'-'+Math.random().toString(36).slice(2,6), data:dataUrl};
    if(slotIdx!=null && slotIdx>=0 && slotIdx<4){
      // Place in specific slot — pad array if needed
      while(EX.lsP2Col3Photos.length<slotIdx) EX.lsP2Col3Photos.push(null);
      EX.lsP2Col3Photos[slotIdx]=photo;
      // Remove any null gaps
      EX.lsP2Col3Photos=EX.lsP2Col3Photos.filter(function(p){return p;});
    } else if(EX.lsP2Col3Photos.length<4){
      EX.lsP2Col3Photos.push(photo);
    }
    if(EX.lsP2Col3Photos.length>4) EX.lsP2Col3Photos=EX.lsP2Col3Photos.slice(0,4);
    renderDevices();
  });
}
/* ── Drag-and-drop wiring for P2 Col 3 photo slots ── */
function wireP2c3DragDrop(root){
  var slots=root.querySelectorAll('[data-p2c3-slot]');
  for(var si=0;si<slots.length;si++){
    (function(slot){
      var idx=parseInt(slot.dataset.p2c3Slot,10);
      slot.addEventListener('dragover', function(e){e.preventDefault();slot.classList.add('dragging');});
      slot.addEventListener('dragleave', function(){slot.classList.remove('dragging');});
      slot.addEventListener('drop', function(e){
        e.preventDefault();
        slot.classList.remove('dragging');
        var dt=e.dataTransfer;
        if(dt && dt.files && dt.files[0]) acceptP2c3Photo(dt.files[0], idx);
      });
    })(slots[si]);
  }
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
    // Quote step (index 3) is hidden for Client users — add a marker so CSS
    // can hide both the dot and its connector line via the .app-client class.
    var stepId = STEPS[i];
    var clientHide = (stepId === 'quote') ? ' data-client-hide' : '';
    h+='<div class="ar-si"'+clientHide+'>'
      +'<div class="ar-dot '+dc+'">'+dot+'</div>'
      +'<span class="ar-sl '+dc+'">'+STEP_LBLS[i]+'</span>'
      +'</div>';
    if(i<STEP_LBLS.length-1)h+='<div class="ar-sc '+(i<S.step?'done':'')+'"'+clientHide+'></div>';
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
    // Step 3 (Quote / Order): the devices column is hidden by CSS
    // (#ar2.quote-step .ar-dev-col{display:none}). Empty content is fine —
    // the form occupies cols 1+2 and the preview lives in the results col.
    el.innerHTML='';
  } else if(S.step===4){
    // Step 4 (Export): Export options in middle column
    el.innerHTML=renderExportSection();
    // Wire drag-and-drop for the P2 Col 3 photo upload drawer (if rendered)
    var p2c3=document.getElementById('ar2-p2c3-drawer');
    if(p2c3) wireP2c3DragDrop(p2c3);
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
    +'<div class="ar-field" data-client-hide>'
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

/* ── Quote helpers ─────────────────────────────────────────────
   buildQuoteLineItems(): walks S.bodies + device qty to assemble equipment
   line items, then adds optional Warranty / Services / Shipping rows.
   Result is a flat array of { section, desc, rate, qty, taxable, amount,
   isText } objects. amount may be a number or 'included' string.
   buildQuoteTotals(): totals from line items + Q.taxRate + Q.discount +
   Q.otherFee + Q.depositPct.
*/
function quoteToday(){return new Date().toISOString().slice(0,10);}
function quoteAutoId(){
  var yr=new Date().getFullYear();
  var seed=Math.floor(Math.random()*9000+1000);
  return 'AQR-'+yr+'-'+seed;
}
function buildQuoteLineItems(){
  var items=[];
  // Equipment — one row per device size with qty>0. Equipment items never
  // carry the `included` flag (they're the deal). Per-line tax rates keyed
  // by PIPES.k via Q.lineTax so reps can charge mixed jurisdictions per line.
  PIPES.forEach(function(p){
    var qty=S[p.k]||0;
    if(!qty) return;
    var sizeIn=parseInt(p.sz,10);
    var desc='KD'+sizeIn+'X'+(sizeIn*2)+'X'+sizeIn+'- AquaRev Water HDC Treatement System - '+sizeIn+' Inch';
    items.push({section:'EQUIPMENT', key:p.k, desc:desc, rate:p.price, qty:qty, taxRate:Number(Q.lineTax[p.k])||0, amount:p.price*qty, included:false});
  });
  // Add-on items (Warranty / Services / Shipping) — each can be flagged
  // 'included' to print "INCLUDED" instead of $0 and exclude from totals.
  if(Q.warrantyEnabled){
    var wRate=Number(Q.warrantyRate)||0; var wQty=Number(Q.warrantyQty)||1;
    items.push({section:'WARRANTY', key:'warranty', desc:Q.warrantyText, rate:wRate, qty:wQty, taxRate:Number(Q.lineTax.warranty)||0, amount:wRate*wQty, included:!!Q.warrantyIncluded});
  }
  if(Q.servicesEnabled){
    var sRate=Number(Q.servicesRate)||0; var sQty=Number(Q.servicesQty)||1;
    items.push({section:'SERVICES', key:'services', desc:Q.servicesText, rate:sRate, qty:sQty, taxRate:Number(Q.lineTax.services)||0, amount:sRate*sQty, included:!!Q.servicesIncluded});
  }
  if(Q.shippingEnabled){
    var spRate=Number(Q.shippingRate)||0; var spQty=Number(Q.shippingQty)||1;
    items.push({section:'SHIPPING', key:'shipping', desc:Q.shippingText, rate:spRate, qty:spQty, taxRate:Number(Q.lineTax.shipping)||0, amount:spRate*spQty, included:!!Q.shippingIncluded});
  }
  return items;
}
function buildQuoteTotals(){
  var items=buildQuoteLineItems();
  // Equipment subtotal — discount applies only to this base.
  var equipSubTotal=0;
  // Non-equipment subtotal — only items NOT flagged included (those just
  // print "INCLUDED" and don't add to the deal value).
  var nonEquipSubTotal=0;
  var taxable=0;     // sum of taxable amounts (for display)
  var taxDue=0;      // sum of (amount * lineTaxRate) per non-included line
  items.forEach(function(it){
    if(typeof it.amount!=='number') return;
    if(it.section==='EQUIPMENT'){
      equipSubTotal+=it.amount;
    } else if(!it.included){
      nonEquipSubTotal+=it.amount;
    }
    if(!it.included){
      var rate=Number(it.taxRate)||0;
      if(rate>0){ taxable+=it.amount; taxDue+=it.amount*rate; }
    }
  });
  var subTotal=equipSubTotal+nonEquipSubTotal;
  // Discount % inherits from the Pricing slider (S.discount) until the rep
  // overrides it in the Quote form. Stored as a fraction (0..1). Applied
  // ONLY to the equipment subtotal — add-ons / services / shipping never
  // get discounted.
  var discPct = (Q.discountPct === null || Q.discountPct === undefined)
    ? (Number(S.discount)||0)
    : (Number(Q.discountPct)||0);
  var discAmt = equipSubTotal * discPct;
  var taxableAfter=Math.max(0,taxable-discAmt);
  var other=Number(Q.otherFee)||0;
  var total=subTotal-discAmt+taxDue+other;
  var depositPct=(Number(Q.depositPct)||0)/100;
  var depositAmt=total*depositPct;
  var balance=total-depositAmt;
  return {subTotal:subTotal, equipSubTotal:equipSubTotal, nonEquipSubTotal:nonEquipSubTotal,
    taxable:taxable, taxableAfter:taxableAfter, taxDue:taxDue,
    discountPct:discPct, discount:discAmt, other:other, total:total,
    depositPct:Number(Q.depositPct)||0, deposit:depositAmt, balance:balance};
}

/* ── Step 3: Quote / Order Form (left col — configuration) ────── */
function renderStepQuote(){
  // Lazy-default the Quote ID, date on first entry; column A holds identity
  // + buyer + ship-to + payment, column B holds the deal (line items +
  // totals + standard terms + Purchase Terms and Conditions).
  if(!Q.quoteId) Q.quoteId=quoteAutoId();
  if(!Q.date) Q.date=quoteToday();
  // One-time migration: convert legacy plain-text Q.termsText → HTML for
  // the new rich-text editor. Reuse the existing parser to preserve the
  // numbered + sub-letter structure, then null the legacy field.
  if(!Q.termsHtml && Q.termsText){
    Q.termsHtml = renderTermsHtml(Q.termsText);
    Q.termsText = '';
  }
  if(typeof Q.standardTerms === 'undefined') Q.standardTerms = QUOTE_DEFAULT_STANDARD_TERMS;
  if(typeof Q.warrantyIncluded === 'undefined') Q.warrantyIncluded = true;
  if(typeof Q.servicesIncluded === 'undefined') Q.servicesIncluded = false;
  if(typeof Q.shippingIncluded === 'undefined') Q.shippingIncluded = true;
  // Doc-kind toggle (Quote vs PO)
  var kindToggle='<div class="ar-card ar-fu" style="animation-delay:.04s">'
    +'<div class="ar-card-title-row"><div class="ar-card-title">Document Type</div>'
      +'<button class="ar-card-info-btn" data-card-info aria-label="Show help" title="Show help">!</button>'
    +'</div>'
    +'<div class="ar-card-info-pop">Toggles the document title between QUOTE, PURCHASE ORDER, and INVOICE on the rendered page.</div>'
    +'<div class="ar-btn-row" style="display:flex;gap:8px;margin-top:10px;flex-wrap:wrap">'
      +'<button class="ar-btn '+(Q.docKind==='quote'?'primary':'ghost')+'" data-q-kind="quote" style="flex:1;min-width:90px">Quote</button>'
      +'<button class="ar-btn '+(Q.docKind==='po'?'primary':'ghost')+'" data-q-kind="po" style="flex:1;min-width:120px">Purchase Order</button>'
      +'<button class="ar-btn '+(Q.docKind==='invoice'?'primary':'ghost')+'" data-q-kind="invoice" style="flex:1;min-width:90px">Invoice</button>'
    +'</div>'
  +'</div>';
  // Form ordering per spec: Quote#, Date, Days Valid, Buyer PO#, Rep, Customer ID.
  // PO# sits directly under Days Valid; Rep sits directly under PO#.
  var hdr='<div class="ar-card ar-fu">'
    +'<div class="ar-card-title">Header</div>'
    +'<div class="ar-form-row"><label>'+(Q.docKind==='po'?'PO':Q.docKind==='invoice'?'Invoice':'Quote')+' #</label><input class="ar-inp" data-q="quoteId" value="'+esc(Q.quoteId)+'"></div>'
    +'<div class="ar-form-row" style="display:grid;grid-template-columns:1fr 1fr;gap:8px">'
      +'<div><label>Date</label><input type="date" class="ar-inp" data-q="date" value="'+esc(Q.date)+'"></div>'
      +'<div><label>Days Valid</label><input type="number" class="ar-inp" data-q="daysValid" value="'+(Q.daysValid||14)+'"></div>'
    +'</div>'
    +'<div class="ar-form-row"><label>Buyer PO# <span style="font-size:10px;color:var(--mu);font-weight:400">(optional)</span></label><input class="ar-inp" data-q="po" value="'+esc(Q.po)+'"></div>'
    +'<div class="ar-form-row"><label>Rep</label><input class="ar-inp" data-q="rep" value="'+esc(Q.rep)+'" placeholder="Initials"></div>'
    +'<div class="ar-form-row"><label>Customer ID</label><input class="ar-inp" data-q="customerId" value="'+esc(Q.customerId)+'"></div>'
  +'</div>';
  var buyer='<div class="ar-card ar-fu" style="animation-delay:.06s">'
    +'<div class="ar-card-title">Buyer</div>'
    +'<div class="ar-form-row"><label>Buyer Name</label><input class="ar-inp" data-q="buyerName" value="'+esc(Q.buyerName)+'" placeholder="'+esc(S.propertyName||'Property name')+'"></div>'
    +'<div class="ar-form-row"><label>Address</label><textarea class="ar-textarea" data-q="buyerAddr" rows="2" placeholder="Street\\nCity, State Zip, Country">'+esc(Q.buyerAddr)+'</textarea></div>'
    +'<div class="ar-form-row" style="display:grid;grid-template-columns:1fr 1fr;gap:8px">'
      +'<div><label>Contact</label><input class="ar-inp" data-q="buyerContact" value="'+esc(Q.buyerContact)+'"></div>'
      +'<div><label>Phone</label><input class="ar-inp" data-q="buyerPhone" value="'+esc(Q.buyerPhone)+'"></div>'
    +'</div>'
    +'<div class="ar-form-row"><label>Email</label><input class="ar-inp" data-q="buyerEmail" value="'+esc(Q.buyerEmail)+'"></div>'
  +'</div>';
  // ── Line Items card ──
  // Equipment rows (auto-pulled from S device qty) followed by the
  // Equipment Sub-Total + Discount %. Discount lives here so the rep can
  // see it adjust the equipment subtotal in real time. Add-on subsections
  // (Warranty / Services / Shipping) each have an "Included" toggle that
  // prints "INCLUDED" on the rendered Quote and excludes the row from the
  // totals math.
  var qTotals=buildQuoteTotals();
  var discPctVal = (Q.discountPct === null || Q.discountPct === undefined)
    ? (Number(S.discount)||0)*100
    : (Number(Q.discountPct)||0)*100;
  var discPctSourceLabel = (Q.discountPct === null || Q.discountPct === undefined)
    ? 'auto from Pricing slider'
    : 'manual override';
  var equipmentRows = PIPES.map(function(p){
    var qty=S[p.k]||0; if(!qty) return '';
    var sizeIn=parseInt(p.sz,10);
    var rateVal = (Number(Q.lineTax[p.k])||0)*100;
    return '<div class="ar-q-line-row">'
      + '<div class="ar-q-line-desc"><span class="ar-q-line-sub">'+sizeIn+'" Device × '+qty+'</span><span class="ar-q-line-amt">'+fc(p.price*qty,0)+'</span></div>'
      + '<div class="ar-q-line-tax"><label>Tax %</label><input type="number" step="0.01" class="ar-inp" data-q-line-tax="'+p.k+'" value="'+rateVal.toFixed(2)+'"></div>'
    + '</div>';
  }).join('');
  // Add-on subsection — single source of truth for the markup pattern.
  // Layout:
  //   [Section title + Included toggle]
  //   [Description — full width, auto-grow textarea]
  //   [Rate | Qty | Tax %  — 3-column row]
  //   [Sub-total — right-aligned strip showing INCLUDED or rate × qty]
  function addonRow(opts){
    if(!opts.enabled) return '';
    var rate = Number(opts.rateVal)||0;
    var qty  = Number(opts.qtyVal)||1;
    var subAmt = rate * qty;
    var subDisplay = opts.included ? '<span style="color:var(--mu);font-style:italic;letter-spacing:1px">INCLUDED</span>' : fc(subAmt,0);
    var rateInput = opts.rateKey
      ? '<div class="ar-q-cell"><label>Rate</label><input type="number" class="ar-inp" data-q="'+opts.rateKey+'" value="'+rate+'"'+(opts.included?' disabled':'')+'></div>'
      : '<div class="ar-q-cell"><label>Rate</label><div class="ar-q-readonly">—</div></div>';
    var qtyInput = opts.qtyKey
      ? '<div class="ar-q-cell"><label>Qty</label><input type="number" class="ar-inp" data-q="'+opts.qtyKey+'" value="'+qty+'"></div>'
      : '<div class="ar-q-cell"><label>Qty</label><div class="ar-q-readonly">'+qty+'</div></div>';
    return '<div class="ar-q-addon">'
      + '<div class="ar-q-addon-head">'
        + '<div class="ar-q-addon-section-label">'+opts.sectionLabel+'</div>'
        + '<div class="ar-q-addon-incl" title="When on, prints \'INCLUDED\' and excludes from totals">'
          + '<span class="ar-q-addon-incl-label">Included</span>'
          + '<div class="ar-sw-track'+(opts.included?' on':'')+'" data-q-incl="'+opts.includedKey+'"><div class="ar-sw-thumb"></div></div>'
        + '</div>'
      + '</div>'
      + '<div class="ar-q-addon-desc-row"><label>Description</label><textarea class="ar-textarea ar-grow" rows="1" data-q="'+opts.descKey+'">'+esc(opts.descVal||'')+'</textarea></div>'
      + '<div class="ar-q-addon-numeric-row">'
        + rateInput
        + qtyInput
        + '<div class="ar-q-cell ar-q-cell-tax"><label>Tax %</label><input type="number" step="0.01" class="ar-inp" data-q-line-tax="'+opts.key+'" value="'+(opts.taxRateVal||0).toFixed(2)+'"'+(opts.included?' disabled':'')+'></div>'
      + '</div>'
      + '<div class="ar-q-addon-subtotal"><span>Sub-total</span><b>'+subDisplay+'</b></div>'
    + '</div>';
  }
  var lineItems='<div class="ar-card ar-fu" style="animation-delay:.08s">'
    +'<div class="ar-card-title-row"><div class="ar-card-title">Line Items</div>'
      +'<button class="ar-card-info-btn" data-card-info aria-label="Show help" title="Show help">!</button>'
    +'</div>'
    +'<div class="ar-card-info-pop">Equipment is auto-pulled from Step 1 device qty. Add-ons (Warranty / Services / Shipping) can be toggled "Included" to print on the Quote without adding to the total.</div>'
    +(equipmentRows
      ? '<div class="ar-q-subsection">Equipment</div>'+equipmentRows
        // Discount strip — sits directly under the equipment block. Live total
        // = equipment-only discount applied to equipment subtotal.
        + '<div class="ar-q-disc-strip">'
          + '<div class="ar-q-disc-row"><span>Equipment Sub-Total</span><b>'+fc(qTotals.equipSubTotal,0)+'</b></div>'
          + '<div class="ar-q-disc-row"><span>Discount % <span style="font-size:10px;color:var(--mu);font-weight:400">('+discPctSourceLabel+')</span></span>'
            + '<input type="number" step="0.01" min="0" max="100" class="ar-inp ar-inp-sm" data-q-disc-pct value="'+discPctVal.toFixed(2)+'">'
          + '</div>'
          + '<div class="ar-q-disc-row strong"><span>Discount</span><b style="color:var(--gr)">-'+fc(qTotals.discount,0)+'</b></div>'
        + '</div>'
      : '<div class="ar-help" style="font-size:11px;color:var(--mu)">Add devices on Step 1 to populate equipment lines.</div>')
    +'<div class="ar-q-subsection" style="margin-top:14px">Add-ons</div>'
    + addonRow({key:'warranty', sectionLabel:'Warranty', enabled:Q.warrantyEnabled, includedKey:'warrantyIncluded', included:!!Q.warrantyIncluded, descKey:'warrantyText', descVal:Q.warrantyText, rateKey:'warrantyRate', rateVal:Q.warrantyRate, qtyKey:'warrantyQty', qtyVal:Q.warrantyQty, taxRateVal:(Number(Q.lineTax.warranty)||0)*100})
    + addonRow({key:'services', sectionLabel:'Services', enabled:Q.servicesEnabled, includedKey:'servicesIncluded', included:!!Q.servicesIncluded, descKey:'servicesText', descVal:Q.servicesText, rateKey:'servicesRate', rateVal:Q.servicesRate, qtyKey:'servicesQty', qtyVal:Q.servicesQty, taxRateVal:(Number(Q.lineTax.services)||0)*100})
    + addonRow({key:'shipping', sectionLabel:'Shipping', enabled:Q.shippingEnabled, includedKey:'shippingIncluded', included:!!Q.shippingIncluded, descKey:'shippingText', descVal:Q.shippingText, rateKey:'shippingRate', rateVal:Q.shippingRate, qtyKey:'shippingQty', qtyVal:Q.shippingQty, taxRateVal:(Number(Q.lineTax.shipping)||0)*100})
  +'</div>';
  // Totals card (no longer holds the discount input — that lives in Line
  // Items directly under Equipment). Just shows the math + deposit / balance.
  var totals='<div class="ar-card ar-fu" style="animation-delay:.10s">'
    +'<div class="ar-card-title">Totals</div>'
    +'<div class="ar-q-tot-row"><span>Sub-Total</span><b>'+fc(qTotals.subTotal,0)+'</b></div>'
    +(qTotals.discount>0?'<div class="ar-q-tot-row" style="color:var(--gr)"><span>Discount ('+(qTotals.discountPct*100).toFixed(2)+'% of Equipment)</span><b>-'+fc(qTotals.discount,0)+'</b></div>':'')
    +'<div class="ar-q-tot-row"><span>Tax Due (sum of per-line)</span><b>'+fc(qTotals.taxDue,0)+'</b></div>'
    +'<div class="ar-form-row" style="margin-top:8px"><label>Other Fee ($)</label><input type="number" step="0.01" class="ar-inp" data-q="otherFee" value="'+(Number(Q.otherFee)||0)+'"></div>'
    +'<div class="ar-q-tot-row strong"><span>TOTAL</span><span>'+fc(qTotals.total,0)+'</span></div>'
    +'<div class="ar-form-row" style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:8px">'
      +'<div><label>Deposit (%)</label><input type="number" step="1" min="0" max="100" class="ar-inp" data-q="depositPct" value="'+(Number(Q.depositPct)||0)+'"></div>'
      +'<div><label>Deposit Due Date</label><input type="date" class="ar-inp" data-q="depositDueDate" value="'+esc(Q.depositDueDate)+'"></div>'
    +'</div>'
    +'<div class="ar-form-row"><label>Balance Due Terms</label><input class="ar-inp" data-q="balanceDueTerms" value="'+esc(Q.balanceDueTerms)+'"></div>'
  +'</div>';
  var shipOpts = SHIPPING_TERMS.map(function(t){
    return '<option value="'+t.code+'"'+(Q.shippingTerm===t.code?' selected':'')+'>'+t.code+' — '+esc(t.label)+'</option>';
  }).join('');
  // When "Same as Buyer" is on, the textarea shows the derived buyer address
  // (read-only) so the rep can see exactly what will print. The actual PDF
  // pulls the same value via the toggle, not the textarea contents.
  var shipToDisplay = Q.shipToSameAsBuyer
    ? ((Q.buyerName || S.propertyName || '') + (Q.buyerAddr ? '\n'+Q.buyerAddr : ''))
    : Q.shipTo;
  var ship='<div class="ar-card ar-fu" style="animation-delay:.08s">'
    +'<div class="ar-card-title">Ship-To Addresses</div>'
    +'<div class="ar-toggle-row" style="margin:0 0 10px"><label>Same as Buyer Address</label>'
      +'<div class="ar-sw-track'+(Q.shipToSameAsBuyer?' on':'')+'" data-q-sw="shipToSameAsBuyer"><div class="ar-sw-thumb"></div></div>'
    +'</div>'
    +'<textarea class="ar-textarea" data-q="shipTo" rows="4" placeholder="One destination per line. e.g. 1x 6\\" unit to: ..."'+(Q.shipToSameAsBuyer?' disabled':'')+'>'+esc(shipToDisplay)+'</textarea>'
    +'<div class="ar-form-row" style="margin-top:10px"><label>Shipping Terms</label>'
      +'<select class="ar-sel" data-q="shippingTerm">'
        +'<option value=""'+(Q.shippingTerm?'':' selected')+'>— Select shipping term —</option>'
        +shipOpts
      +'</select>'
    +'</div>'
  +'</div>';
  // Standard Terms — short paragraph, prints on the Order page above the
  // signature block. Plain text textarea is enough; no rich formatting.
  var stdTerms='<div class="ar-card ar-fu" style="animation-delay:.12s">'
    +'<div class="ar-card-title">Standard Terms <span style="font-size:10px;font-weight:500;color:var(--mu);letter-spacing:0;text-transform:none;margin-left:6px">Prints on the Order page</span></div>'
    +'<textarea class="ar-textarea" data-q="standardTerms" rows="5" style="font-size:11px;line-height:1.5;font-family:inherit">'+esc(Q.standardTerms)+'</textarea>'
  +'</div>';
  // Purchase Terms and Conditions — long legal block, prints on the
  // separate Terms page (page 2). Rich-text editor: contenteditable + a
  // toolbar of B / I / UL / OL / clear-formatting commands.
  var rte='<div class="ar-card ar-fu" style="animation-delay:.14s">'
    +'<div class="ar-card-title">Purchase Terms and Conditions <span style="font-size:10px;font-weight:500;color:var(--mu);letter-spacing:0;text-transform:none;margin-left:6px">Prints on the Terms page</span></div>'
    +'<div class="ar-rte-toolbar">'
      +'<button type="button" class="ar-rte-btn" data-rte-cmd="bold" title="Bold (Ctrl+B)"><b>B</b></button>'
      +'<button type="button" class="ar-rte-btn" data-rte-cmd="italic" title="Italic (Ctrl+I)"><i>I</i></button>'
      +'<button type="button" class="ar-rte-btn" data-rte-cmd="insertUnorderedList" title="Bulleted list">• List</button>'
      +'<button type="button" class="ar-rte-btn" data-rte-cmd="insertOrderedList" title="Numbered list">1. List</button>'
      +'<button type="button" class="ar-rte-btn" data-rte-cmd="removeFormat" title="Clear formatting">Tx</button>'
    +'</div>'
    +'<div class="ar-rte" id="ar2-q-rte" contenteditable="true" data-placeholder="Click to edit Purchase Terms and Conditions...">'+(Q.termsHtml||'')+'</div>'
  +'</div>';
  var pay='<div class="ar-card ar-fu" style="animation-delay:.16s">'
    +'<div class="ar-card-title-row"><div class="ar-card-title">Payment Method</div>'
      +'<button class="ar-card-info-btn" data-card-info aria-label="Show help" title="Show help">!</button>'
    +'</div>'
    +'<div class="ar-card-info-pop">The Payment Form page in the PDF renders all three options. Credit Card section shows blank fields for the buyer to fill in by hand and email back.</div>'
    +'<div class="ar-btn-row" style="display:flex;gap:6px;flex-wrap:wrap;margin-top:10px">'
      +'<button class="ar-btn '+(Q.paymentMethod==='cc'?'primary':'ghost')+'" data-q-pay="cc" style="flex:1;min-width:120px">Credit Card</button>'
      +'<button class="ar-btn '+(Q.paymentMethod==='wire'?'primary':'ghost')+'" data-q-pay="wire" style="flex:1;min-width:120px">Bank Wire</button>'
      +'<button class="ar-btn '+(Q.paymentMethod==='check'?'primary':'ghost')+'" data-q-pay="check" style="flex:1;min-width:120px">Check</button>'
    +'</div>'
  +'</div>';
  // Two-column form. Col A holds the identity/contact/fulfillment chain
  // (Doc Type → Header → Buyer → Ship-To → Payment Method) — "who is this
  // for?". Col B holds the deal stack (Line Items → Totals → Standard
  // Terms → Purchase Terms and Conditions) which mirrors the rendered
  // PDF order, so the form reads top-down like the document itself.
  return '<div class="ar-quote-form-grid">'
    + '<div class="ar-quote-col-a">' + kindToggle + hdr + buyer + ship + pay + '</div>'
    + '<div class="ar-quote-col-b">' + lineItems + totals + stdTerms + rte + '</div>'
  +'</div>';
}

/* ── Step 3 middle col: live preview of the Quote / Order page ── */
function renderQuoteMiddle(){
  var totals=buildQuoteTotals();
  var items=buildQuoteLineItems();
  var hasEquipment=items.some(function(it){return it.section==='EQUIPMENT';});
  return '<div class="ar-card ar-fu">'
    +'<div class="ar-card-title">Preview</div>'
    +(!hasEquipment?'<div class="ar-empty"><div style="font-size:13px;color:var(--mu);text-align:center;padding:14px 0">Add at least one device on Step 1 (Pool &amp; System) to see the quote preview.</div></div>'
      :'<div style="display:flex;flex-direction:column;gap:8px;font-size:11px;color:var(--tx)">'
        +'<div style="display:flex;justify-content:space-between"><span style="color:var(--mu)">Doc Type</span><b>'+(Q.docKind==='po'?'Purchase Order':Q.docKind==='invoice'?'Invoice':'Quote')+'</b></div>'
        +'<div style="display:flex;justify-content:space-between"><span style="color:var(--mu)">'+(Q.docKind==='po'?'PO':Q.docKind==='invoice'?'Invoice':'Quote')+' #</span><b>'+esc(Q.quoteId||'—')+'</b></div>'
        +'<div style="display:flex;justify-content:space-between"><span style="color:var(--mu)">Date</span><b>'+esc(Q.date||quoteToday())+'</b></div>'
        +'<div style="display:flex;justify-content:space-between"><span style="color:var(--mu)">Buyer</span><b>'+esc(Q.buyerName||S.propertyName||'—')+'</b></div>'
        +'<hr style="border:none;border-top:1px solid rgba(0,180,216,.18);margin:6px 0">'
        +items.filter(function(it){return it.section==='EQUIPMENT';}).map(function(it){return '<div style="display:flex;justify-content:space-between;font-size:10.5px"><span>'+esc(it.desc.split(' - ')[1]||it.desc)+' &times;'+it.qty+'</span><span>'+fc(it.amount,0)+'</span></div>';}).join('')
        +'<hr style="border:none;border-top:1px solid rgba(0,180,216,.18);margin:6px 0">'
        +'<div style="display:flex;justify-content:space-between"><span>Sub-Total</span><span>'+fc(totals.subTotal,0)+'</span></div>'
        +(totals.discount>0?'<div style="display:flex;justify-content:space-between;color:var(--gr)"><span>Discount</span><span>-'+fc(totals.discount,0)+'</span></div>':'')
        +(totals.taxDue>0?'<div style="display:flex;justify-content:space-between"><span>Tax ('+(totals.taxRate*100).toFixed(2)+'%)</span><span>'+fc(totals.taxDue,0)+'</span></div>':'')
        +(totals.other>0?'<div style="display:flex;justify-content:space-between"><span>Other</span><span>'+fc(totals.other,0)+'</span></div>':'')
        +'<div style="display:flex;justify-content:space-between;font-weight:700;font-size:13px;color:var(--t);margin-top:2px"><span>TOTAL</span><span>'+fc(totals.total,0)+'</span></div>'
        +(totals.deposit>0?'<div style="display:flex;justify-content:space-between"><span>Deposit ('+totals.depositPct+'%)</span><span>'+fc(totals.deposit,0)+'</span></div>':'')
        +(totals.deposit>0?'<div style="display:flex;justify-content:space-between"><span>Balance</span><span>'+fc(totals.balance,0)+'</span></div>':'')
      +'</div>'
    )
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

/* ── Step 3 results panel: live quote preview + Preview button. Replaces
   the regular KPI / breakdown panel with a focused quote summary. */
function renderQuoteResultsPanel(){
  var totals=buildQuoteTotals();
  var items=buildQuoteLineItems();
  var equipmentItems=items.filter(function(it){return it.section==='EQUIPMENT';});
  var hasEquipment=equipmentItems.length>0;
  var docKindLabel=(Q.docKind==='po')?'Purchase Order':(Q.docKind==='invoice')?'Invoice':'Quote';
  var idLabel=(Q.docKind==='po')?'PO #':(Q.docKind==='invoice')?'Invoice #':'Quote #';
  var summaryHtml = !hasEquipment
    ? '<div class="ar-empty"><div style="font-size:13px;color:var(--mu);text-align:center;padding:14px 0">Add at least one device on Step 1 to populate the quote.</div></div>'
    : '<div style="display:flex;flex-direction:column;gap:6px;font-size:11px;color:var(--tx)">'
        + '<div style="display:flex;justify-content:space-between"><span style="color:var(--mu)">Doc Type</span><b>'+docKindLabel+'</b></div>'
        + '<div style="display:flex;justify-content:space-between"><span style="color:var(--mu)">'+idLabel+'</span><b>'+esc(Q.quoteId||'—')+'</b></div>'
        + '<div style="display:flex;justify-content:space-between"><span style="color:var(--mu)">Date</span><b>'+esc(Q.date||quoteToday())+'</b></div>'
        + '<div style="display:flex;justify-content:space-between"><span style="color:var(--mu)">Buyer</span><b>'+esc(Q.buyerName||S.propertyName||'—')+'</b></div>'
        + '<hr style="border:none;border-top:1px solid rgba(0,180,216,.18);margin:6px 0">'
        + equipmentItems.map(function(it){return '<div style="display:flex;justify-content:space-between;font-size:10.5px"><span>'+esc((it.desc.split(' - ')[1]||it.desc))+' &times;'+it.qty+'</span><span>'+fc(it.amount,0)+'</span></div>';}).join('')
        + '<hr style="border:none;border-top:1px solid rgba(0,180,216,.18);margin:6px 0">'
        + '<div style="display:flex;justify-content:space-between"><span>Sub-Total</span><span>'+fc(totals.subTotal,0)+'</span></div>'
        + (totals.discount>0?'<div style="display:flex;justify-content:space-between;color:var(--gr)"><span>Discount ('+(totals.discountPct*100).toFixed(2)+'%)</span><span>-'+fc(totals.discount,0)+'</span></div>':'')
        + (totals.taxDue>0?'<div style="display:flex;justify-content:space-between"><span>Tax Due</span><span>'+fc(totals.taxDue,0)+'</span></div>':'')
        + (totals.other>0?'<div style="display:flex;justify-content:space-between"><span>Other</span><span>'+fc(totals.other,0)+'</span></div>':'')
        + '<div style="display:flex;justify-content:space-between;font-weight:700;font-size:13px;color:var(--t);margin-top:2px"><span>TOTAL</span><span>'+fc(totals.total,0)+'</span></div>'
        + (totals.deposit>0?'<div style="display:flex;justify-content:space-between"><span>Deposit ('+totals.depositPct+'%)</span><span>'+fc(totals.deposit,0)+'</span></div>':'')
        + (totals.deposit>0?'<div style="display:flex;justify-content:space-between"><span>Balance</span><span>'+fc(totals.balance,0)+'</span></div>':'')
      +'</div>';
  return '<div class="ar-card ar-fu">'
    +'<div class="ar-card-title">Live Preview</div>'
    + summaryHtml
    +'</div>'
    +'<div class="ar-card ar-fu" style="animation-delay:.04s">'
    + '<button class="ar-card-info-btn" data-card-info aria-label="Show help" title="Show help">!</button>'
    + '<button class="ar-btn primary full" data-action="preview-quote"'+(!hasEquipment?' disabled':'')+'>'
        + 'Preview Quote PDF'
      + '</button>'
    + '<div class="ar-card-info-pop">Opens the full document in PDF preview. Click <b>Return to Calculator</b> to come back to this step.</div>'
  +'</div>';
}

/* ── Results panel ── */
function renderResults(){
  var el=document.getElementById('ar2-results');
  if(!el)return;
  // Step 3 (Quote): replace the regular KPI / breakdown panel with the
  // quote preview panel + Preview button so the rep gets a focused view.
  if(S.step===3){ el.innerHTML = renderQuoteResultsPanel(); return; }
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
  else if(S.step===2) nextLabel='Continue \u2192 Quote';
  else if(S.step===3) nextLabel='Continue \u2192 Export';
  var backLabel='\u2190 Back';
  if(S.step===1) backLabel='\u2190 Map Pools';
  else if(S.step===2) backLabel='\u2190 Pool & System';
  else if(S.step===3) backLabel='\u2190 Pricing & Settings';
  else if(S.step===4) backLabel='\u2190 Quote';
  var html='<div class="ar-nav-stack">'
    +(isLast?'':'<button class="ar-btn primary advance full" data-nav="next"'+(disableNext?' disabled':'')+'>'+nextLabel+'</button>')
    +'<button class="ar-btn ghost retreat full" data-nav="back">'+backLabel+'</button>'
    +(disableNext?'<div class="ar-nav-hint">Select a device above to continue</div>':'')
  +'</div>';
  el.innerHTML=html;
}

/* ── Form ── */
function renderForm(){
  var el=document.getElementById('ar2-form');
  if(!el)return;
  // Step routing — order matches STEPS array:
  //   0=Map Pools  1=Pool & System  2=Pricing & Settings  3=Quote  4=Export
  var stepFn=[renderMapPool,renderStep0,renderStep1,renderStepQuote,renderStep3][S.step];
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
  if(root) root.classList.toggle('quote-step', S.step===3);
  // Role-based feature flags — toggles .app-client / .app-admin on #ar2 so
  // CSS rules can hide / show / restyle features per role. Reapplied on every
  // render so role changes (e.g. after sign-in) take effect immediately.
  if(root){
    var isCloudClient = !!(window.AR2_CLOUD && AR2_CLOUD.isReady() && AR2_CLOUD.isClient());
    var isCloudAdmin  = !!(window.AR2_CLOUD && AR2_CLOUD.isReady() && AR2_CLOUD.isAdmin());
    root.classList.toggle('app-client', isCloudClient);
    root.classList.toggle('app-admin',  isCloudAdmin);
    // Defense-in-depth: if a Client somehow lands on the Quote step (index 3),
    // auto-skip past it. Direction depends on which side they're coming from.
    if(isCloudClient && S.step === 3){
      S.step = 4; // forward to Export — most natural progression
      try { setTimeout(render, 0); } catch(_){}
    }
  }
  renderStepper();
  renderForm();
  renderDevices();
  renderNav();
  renderResults();
  // Re-initialize map canvas dimensions after visibility toggles
  if(S.step===0 && window.AR2_MAP && AR2_MAP.resize){ setTimeout(function(){ AR2_MAP.resize(); },60); }
}

/* ── Generate printable PDF report ── */
/* Render a plain-text Terms & Conditions string as a nested ordered list
   so numbered items get proper hanging indent and lettered sub-items
   (a. / b. / c.) render as a nested list under their parent. Top-level
   items match `^\d+\.` (e.g. "1.", "2.") and sub-items match leading
   whitespace + `^[a-z]\.`. Anything else becomes a paragraph. */
function renderTermsHtml(text){
  if(!text) return '';
  var lines = String(text).split(/\r?\n/);
  var html = '';
  var inOl = false, inSubOl = false;
  function closeSub(){ if(inSubOl){ html+='</ol>'; inSubOl=false; } }
  function closeOl(){ closeSub(); if(inOl){ html+='</ol>'; inOl=false; } }
  for (var i=0; i<lines.length; i++){
    var line = lines[i];
    var trimmed = line.replace(/^\s+/, '');
    if(!trimmed){ continue; }
    var topMatch = trimmed.match(/^(\d+)\.\s*(.*)$/);
    var subMatch = (line.match(/^\s+([a-z])\.\s*(.*)$/) || trimmed.match(/^([a-z])\.\s*(.*)$/));
    if(topMatch && !line.match(/^\s/)){
      closeSub();
      if(!inOl){ html += '<ol class="rpt-q-terms-ol">'; inOl=true; }
      html += '<li>'+esc(topMatch[2])+'</li>';
    } else if(subMatch){
      if(!inOl){ html += '<ol class="rpt-q-terms-ol">'; inOl=true; }
      // sub-list starts inside the most recent <li>
      if(!inSubOl){
        // backtrack the last </li> to splice the sub-list inside it
        if(html.slice(-5)==='</li>'){ html = html.slice(0,-5); }
        html += '<ol class="rpt-q-terms-sub-ol">';
        inSubOl = true;
      }
      html += '<li>'+esc(subMatch[2])+'</li>';
    } else {
      closeOl();
      html += '<p class="rpt-q-terms-p">'+esc(trimmed)+'</p>';
    }
    // close subOl when next iteration is a top-level
    if(i+1<lines.length){
      var nextLine = lines[i+1];
      var nextTrim = nextLine.replace(/^\s+/,'');
      var nextIsTop = nextTrim.match(/^\d+\./) && !nextLine.match(/^\s/);
      if(inSubOl && nextIsTop) closeSub();
    }
  }
  closeOl();
  return html;
}

/* ── Build Quote / Order Form PDF pages ──────────────────────────────
   Returns an HTML string containing zero, one, two, or three pages based
   on the EX.inclQuote / EX.inclQuoteTerms / EX.inclQuotePayment toggles.
   Each page reuses .rpt-es-page sizing + .rpt-es-head / .rpt-es-foot for
   look-and-feel parity with the Executive Summary. */
function buildQuoteHtml(){
  if(!EX.inclQuote && !EX.inclQuoteTerms && !EX.inclQuotePayment) return '';
  var prop = S.propertyName || 'Property Assessment';
  var todayStr = new Date().toLocaleDateString('en-US',{year:'numeric',month:'long',day:'numeric'});
  var docKindLabel = (Q.docKind==='po') ? 'PURCHASE ORDER' : (Q.docKind==='invoice') ? 'INVOICE' : 'QUOTE';
  var idLabel = (Q.docKind==='po') ? 'PO #' : (Q.docKind==='invoice') ? 'INVOICE #' : 'QUOTE #';
  var qDate = Q.date || quoteToday();
  // Header band — matches Executive Summary look (.rpt-es-head). NSF/ANSI 50
  // pill omitted on Quote pages (the certification belongs to the assessment,
  // not to the commercial quote).
  var qHeader = '<div class="rpt-es-head">'
    + '<div class="rpt-es-head-left">'
      + '<div class="rpt-es-logo">AQUAREV WATER</div>'
      + '<div class="rpt-es-logo-sub">' + docKindLabel + '</div>'
    + '</div>'
    + '<div class="rpt-es-head-right">'
      + '<div class="rpt-es-prop-name">' + esc(Q.buyerName || prop) + '</div>'
      + '<div class="rpt-es-prop-date">' + esc(qDate) + ' · ' + idLabel + ' ' + esc(Q.quoteId||'—') + '</div>'
    + '</div>'
  + '</div>';
  // Footer band — matches Exec Summary footer EXACTLY (rpt-foot has the dark
  // navy bg; rpt-es-foot adds margin-top:auto so the band pins to the page foot).
  var qFooter = '<div class="rpt-foot rpt-es-foot">'
    + '<div class="rpt-foot-logo">AQUAREV WATER</div>'
    + '<div class="rpt-foot-info">'
      + 't. 832-979-6758 · <a href="mailto:water@aquarevwater.us" style="color:inherit;text-decoration:none">water@aquarevwater.us</a> · <a href="https://www.aquarevwater.us" target="_blank" style="color:inherit;text-decoration:none">aquarevwater.us</a> · Made in USA<br>'
      + 'NSF/ANSI 50 · NSF-372 Lead-Free · US Pat. 10,934,180 · 11,358,881 · 12,037,269'
    + '</div>'
  + '</div>';
  // Seller block constant per spec: "KD Enterprises LLC, dba AquaRev Water"
  var SELLER_NAME = 'KD Enterprises LLC, dba AquaRev Water';
  var SELLER_BLOCK = SELLER_NAME + '\n4348 - Waialae Ave. #621\nHonolulu, HI, 96816, USA\nt. (832) 979-6758\ne. water@aquarevwater.us';
  // Buyer block — name + address + contact info, packed into the standardized
  // top row's middle column. Keeps each page's "Prepared For — Buyer" block
  // identical regardless of which page it lives on.
  var buyerLines = [];
  buyerLines.push(Q.buyerName || prop);
  if(Q.buyerAddr) buyerLines.push(Q.buyerAddr);
  if(Q.buyerContact) buyerLines.push('Attn: ' + Q.buyerContact);
  if(Q.buyerPhone)   buyerLines.push('t. ' + Q.buyerPhone);
  if(Q.buyerEmail)   buyerLines.push('e. ' + Q.buyerEmail);
  var BUYER_BLOCK = buyerLines.join('\n');
  // Header info card — date / ID / customer / days / rep / PO. Rendered in the
  // top row's right column on every page so the metadata stays consistent.
  // Title text is page-specific (Quote / Purchase Order / Purchase Terms /
  // Payment Form) so the card mirrors the page heading. Title sits OUTSIDE the
  // tinted card body so it lines up horizontally with the Seller and Buyer
  // titles in the other two columns.
  function quoteHeaderCardHtml(cardTitle){
    return '<div class="rpt-q-top-col">'
      + '<div class="rpt-q-block-title">'+esc(cardTitle)+'</div>'
      + '<div class="rpt-q-top-card-body">'
        + '<dl class="rpt-q-meta-rows">'
          + '<dt>Date</dt><dd>'+esc(qDate)+'</dd>'
          + '<dt>'+idLabel+'</dt><dd>'+esc(Q.quoteId||'—')+'</dd>'
          + '<dt>Days Valid</dt><dd>'+(Q.daysValid||14)+'</dd>'
          + (Q.rep?'<dt>Rep</dt><dd>'+esc(Q.rep)+'</dd>':'')
          + (Q.po?'<dt>PO#</dt><dd>'+esc(Q.po)+'</dd>':'')
          + (Q.customerId?'<dt>Customer ID</dt><dd>'+esc(Q.customerId)+'</dd>':'')
        + '</dl>'
      + '</div>'
    + '</div>';
  }
  // Standardized top row — Seller | Prepared For — Buyer | Header info card.
  // cardTitle is the page-specific label (QUOTE / PURCHASE ORDER / Purchase
  // Terms and Conditions / Payment Form).
  function quoteTopRowHtml(cardTitle){
    return '<div class="rpt-q-top-row">'
      + '<div class="rpt-q-top-col">'
        + '<div class="rpt-q-block-title">Seller</div>'
        + '<div class="rpt-q-block-text">'+esc(SELLER_BLOCK)+'</div>'
      + '</div>'
      + '<div class="rpt-q-top-col">'
        + '<div class="rpt-q-block-title">Prepared For — Buyer</div>'
        + '<div class="rpt-q-block-text">'+esc(BUYER_BLOCK)+'</div>'
      + '</div>'
      + quoteHeaderCardHtml(cardTitle)
    + '</div>';
  }
  // ── Page 1: Order ──
  var pageOrder = '';
  if(EX.inclQuote){
    var totals = buildQuoteTotals();
    var items = buildQuoteLineItems();
    // Group items by section so we can render section bands.
    var sections = {};
    items.forEach(function(it){ if(!sections[it.section]) sections[it.section]=[]; sections[it.section].push(it); });
    var rowsHtml = '';
    ['EQUIPMENT','WARRANTY','SERVICES','SHIPPING'].forEach(function(sec){
      if(!sections[sec]) return;
      rowsHtml += '<tr class="rpt-q-section-row"><td colspan="5">'+sec+'</td></tr>';
      sections[sec].forEach(function(it){
        // Included items print "INCLUDED" instead of a dollar amount and
        // their tax / rate cells dash out (already excluded from totals math).
        var amt, rate, taxLabel;
        if(it.included){
          amt = '<span class="rpt-q-included">INCLUDED</span>';
          rate = '—';
          taxLabel = '—';
        } else {
          amt = (typeof it.amount==='number') ? fc(it.amount,0) : esc(it.amount);
          rate = it.rate ? fc(it.rate,0) : '—';
          var taxPct = (Number(it.taxRate)||0)*100;
          taxLabel = taxPct>0 ? taxPct.toFixed(2)+'%' : 'N';
        }
        rowsHtml += '<tr>'
          + '<td>'+esc(it.desc)+'</td>'
          + '<td class="rate">'+rate+'</td>'
          + '<td class="qty">'+(it.qty||1)+'</td>'
          + '<td class="tax">'+taxLabel+'</td>'
          + '<td class="amt">'+amt+'</td>'
        + '</tr>';
      });
    });
    // Tax Rate row removed — tax % is per-line in the Tax column above; Tax
    // Due is the sum of (line.amount × line.taxRate) for transparency.
    // Discount label now shows the % AND clarifies it's applied only to the
    // equipment subtotal, matching the form-side math.
    var totalsBlock = '<dl class="rpt-q-totals-table">'
      + '<dt>Sub-Total</dt><dd>'+fc(totals.subTotal,0)+'</dd>'
      + (totals.discount>0 ? '<dt>Discount ('+(totals.discountPct*100).toFixed(2)+'% of Equipment)</dt><dd>-'+fc(totals.discount,0)+'</dd>' : '')
      + '<dt>Taxable</dt><dd>'+fc(totals.taxableAfter,0)+'</dd>'
      + '<dt>Tax Due</dt><dd>'+fc(totals.taxDue,0)+'</dd>'
      + (totals.other>0 ? '<dt>Other</dt><dd>'+fc(totals.other,0)+'</dd>' : '')
      + '<div class="strong" style="display:contents"><dt>TOTAL USD</dt><dd>'+fc(totals.total,0)+'</dd></div>'
      + (totals.deposit>0 ? '<dt>Deposit Due</dt><dd>'+fc(totals.deposit,0)+(Q.depositDueDate?'<br><span style="font-size:9px;color:#7d8a96">'+esc(Q.depositDueDate)+'</span>':'')+'</dd>' : '')
      + (totals.deposit>0 ? '<dt>Balance</dt><dd>'+fc(totals.balance,0)+'</dd>' : '')
      + '<dt>Balance Due</dt><dd>'+esc(Q.balanceDueTerms)+'</dd>'
    + '</dl>';
    pageOrder = '<div class="rpt-es-page rpt-q-page rpt-q-page-order">'
      + qHeader
      + '<div class="rpt-q-body">'
        + quoteTopRowHtml(docKindLabel)
        + '<table class="rpt-q-table">'
          + '<thead><tr><th>Description</th><th class="rate">Rate</th><th class="qty">Qty</th><th class="tax">Tax</th><th class="amt">Amount</th></tr></thead>'
          + '<tbody>'+rowsHtml+'</tbody>'
        + '</table>'
        + (function(){
            // Ship-To block lives in the LEFT column under Standard Terms so
            // it shares the column span with Standard Terms. Right column =
            // totals only. This pulls the signature block up so it fits on
            // the page without bleeding into the footer.
            var shipText = Q.shipToSameAsBuyer
              ? ((Q.buyerName || prop) + (Q.buyerAddr?'\n'+Q.buyerAddr:''))
              : Q.shipTo;
            var shipBlock = '';
            if(shipText || Q.shippingTerm){
              shipBlock = '<div class="rpt-q-shipto-box"><div class="rpt-q-block-title">Ship To</div>'
                + (shipText?'<div class="rpt-q-shipto">'+esc(shipText)+'</div>':'')
                + (Q.shippingTerm?'<div class="rpt-q-shipterm"><span class="rpt-q-shipterm-label">Shipping Terms:</span> <b>'+esc(Q.shippingTerm)+'</b> — '+esc(shippingTermLabel(Q.shippingTerm))+'</div>':'')
              + '</div>';
            }
            return '<div class="rpt-q-totals">'
              + '<div>'
                + '<div class="terms-title">Standard Terms</div>'
                + '<div class="terms">'+esc(Q.standardTerms||'')+'</div>'
                + shipBlock
              + '</div>'
              + '<div>'+totalsBlock+'</div>'
            + '</div>';
          })()
        + '<div class="rpt-q-sigblock">'
          + '<div>'
            + '<div class="rpt-q-block-title">Authorized Buyer Representative</div>'
            + '<div class="sigline" style="margin-top:6px"><label>Signature</label><div class="line"></div></div>'
            + '<div class="sigline"><label>Print Name</label><div class="line"></div></div>'
            + '<div class="sigline"><label>Title</label><div class="line"></div></div>'
            + '<div class="sigline"><label>Date</label><div class="line"></div></div>'
          + '</div>'
          + '<div style="text-align:right;align-self:end;font-size:11px;color:#0a2540;font-weight:600">Thank you for your business.<br><span style="font-size:9.5px;color:#7d8a96">www.aquarevwater.us</span></div>'
        + '</div>'
      + '</div>'
      + qFooter
    + '</div>';
  }
  // ── Page 2: Purchase Terms ──
  var pageTerms = '';
  if(EX.inclQuoteTerms){
    // Body innerHTML is the rich-text editor's HTML (already structured
    // with <p>/<ol>/<ul>/<li>/<b>/<i>/<u>/<br>). Sanitised on save.
    pageTerms = '<div class="rpt-es-page rpt-q-page rpt-q-page-terms">'
      + qHeader
      + '<div class="rpt-q-terms-body">'
        + quoteTopRowHtml('Purchase Terms and Conditions')
        + '<div class="rpt-q-terms-title">Purchase Terms and Conditions</div>'
        + '<div class="rpt-q-terms-text">'+(Q.termsHtml || '')+'</div>'
      + '</div>'
      + qFooter
    + '</div>';
  }
  // ── Page 3: Payment Form ──
  var pagePay = '';
  if(EX.inclQuotePayment){
    var ccChecked = (Q.paymentMethod==='cc') ? '☒' : '☐';
    var wireChecked = (Q.paymentMethod==='wire') ? '☒' : '☐';
    var checkChecked = (Q.paymentMethod==='check') ? '☒' : '☐';
    pagePay = '<div class="rpt-es-page rpt-q-page rpt-q-page-pay">'
      + qHeader.replace('<div class="rpt-es-logo-sub">' + docKindLabel + '</div>', '<div class="rpt-es-logo-sub">PAYMENT FORM</div>')
      + '<div class="rpt-q-pay-body">'
        + quoteTopRowHtml('Payment Form')
        + '<div class="rpt-q-pay-method-strip">'
          + '<div class="rpt-q-block-title">Selected Payment Method</div>'
          + '<div class="rpt-q-pay-method" style="font-size:11px;line-height:1.7">'
            + '<div>'+ccChecked+' Credit Card</div>'
            + '<div>'+wireChecked+' Bank Wire</div>'
            + '<div>'+checkChecked+' Check</div>'
          + '</div>'
        + '</div>'
        + '<div class="rpt-q-pay-cols">'
          + '<div class="rpt-q-pay-box">'
            + '<div class="col-title">1. Credit Card Information</div>'
            + '<div class="rpt-q-pay-field"><label>Cardholder Name</label><span class="val"></span></div>'
            + '<div class="rpt-q-pay-field"><label>Billing Address</label><span class="val"></span></div>'
            + '<div class="rpt-q-pay-field"><label>City</label><span class="val"></span></div>'
            + '<div class="rpt-q-pay-field"><label>State / Prov.</label><span class="val"></span></div>'
            + '<div class="rpt-q-pay-field"><label>ZIP / Postal</label><span class="val"></span></div>'
            + '<div class="rpt-q-pay-field"><label>Phone</label><span class="val"></span></div>'
            + '<div class="rpt-q-pay-field"><label>Email</label><span class="val"></span></div>'
            + '<div class="rpt-q-pay-field"><label>Card Number</label><span class="val"></span></div>'
            + '<div class="rpt-q-pay-field"><label>Expiration</label><span class="val"></span></div>'
            + '<div class="rpt-q-pay-field"><label>CVV</label><span class="val"></span></div>'
          + '</div>'
          + '<div style="display:flex;flex-direction:column;gap:10px">'
            + '<div class="rpt-q-pay-box">'
              + '<div class="col-title">2. Bank Wire Instructions</div>'
              + '<div class="rpt-q-pay-field"><label>Payee</label><span class="val">KD Enterprises LLC</span></div>'
              + '<div class="rpt-q-pay-field"><label>Bank</label><span class="val">Bank of Hawaii</span></div>'
              + '<div class="rpt-q-pay-field"><label>Routing</label><span class="val">121301028</span></div>'
              + '<div class="rpt-q-pay-field"><label>Account #</label><span class="val">86804468</span></div>'
              + '<div class="rpt-q-pay-field"><label>Bank Address</label><span class="val">PO Box 2900 Honolulu, HI 96846</span></div>'
              + '<div class="rpt-q-pay-field"><label>Federal Tax ID</label><span class="val">830804126</span></div>'
              + '<div class="rpt-q-pay-field" style="border-bottom:none;font-size:9px"><label style="flex:0 0 60px">Note</label><span class="val">Note company name on the wire memo with quote or invoice ID#. Notify water@aquarevwater.us.</span></div>'
            + '</div>'
            + '<div class="rpt-q-pay-box">'
              + '<div class="col-title">3. Check</div>'
              + '<div class="rpt-q-pay-field"><label>Payable To</label><span class="val">KD Enterprises LLC</span></div>'
              + '<div class="rpt-q-pay-field"><label>Address</label><span class="val">4348 Waialae Ave. #621, Honolulu, HI 96816</span></div>'
              + '<div class="rpt-q-pay-field"><label>Attn</label><span class="val">Accounts Receivable</span></div>'
              + '<div class="rpt-q-pay-field" style="border-bottom:none"><label>Ref</label><span class="val">'+esc(Q.quoteId||'—')+'</span></div>'
            + '</div>'
          + '</div>'
        + '</div>'
        + '<div class="rpt-q-pay-box rpt-q-pay-auth-box">'
          + '<div class="col-title">Authorization</div>'
          + '<div class="rpt-q-pay-auth">By completing and signing this Credit Card Authorization Form, the Cardholder acknowledges and expressly authorizes '+esc(SELLER_NAME)+' to use the credit card information provided herein to process charges for the products and services, and authorized usage described in this form. The Cardholder confirms that they are the lawful owner or an authorized user of the card and permits '+esc(SELLER_NAME)+' to initiate transactions in accordance with the specified amounts and terms outlined herein. This authorization is provided voluntarily and remains valid until revoked in writing by the Cardholder.</div>'
          + '<div class="rpt-q-pay-sig-grid">'
            + '<div class="rpt-q-pay-sig"><label>Cardholder Signature</label><div class="line"></div></div>'
            + '<div class="rpt-q-pay-sig"><label>Print Name</label><div class="line"></div></div>'
            + '<div class="rpt-q-pay-sig"><label>Date</label><div class="line"></div></div>'
          + '</div>'
        + '</div>'
        + '<div style="font-size:9.5px;color:#7d8a96;margin-top:auto;text-align:center">Email completed form to: <b>water@AquaRevWater.us</b></div>'
      + '</div>'
      + qFooter
    + '</div>';
  }
  return pageOrder + pageTerms + pagePay;
}

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
  var poolRowsArr=S.bodies.map(function(b,i){
    var g=bodyGallons(b);
    // Only surface dimensions when the pool is in dimensions mode — not gallons mode or manual.
    var hasDims=b.inputMode!=='gallons' && b.length && b.width && b.depth;
    var dims=hasDims?b.length+'\u202f\u00d7\u202f'+b.width+'\u202f\u00d7\u202f'+b.depth+'\u00a0ft':'';
    var sub=dims?'<span style="font-size:10px;color:#999;margin-left:6px">'+dims+'</span>':'';
    return '<div class="rpt-row">'
      +'<span class="k">'+esc(b.label)+'\u2002<em style="color:#999;font-size:10px">'+b.poolType+'</em>'+sub+'</span>'
      +'<span class="v">'+fn(Math.round(g))+'\u00a0gal</span>'
    +'</div>';
  });
  var poolRows=poolRowsArr.join('');

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

  // Fact sheet — removed from all versions of the calculator (2026-05-10).
  // Variable kept as empty string so the html assembly chain below stays valid.
  var fsHtml='';

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
  var deviceGraphic='https://cdn.prod.website-files.com/691fa5d63fc3a5a75a65efeb/69fa547c218410884aef0c68_7c39da892a2af616348807ae82c6c6e7_AquaRev-Device_Graphic-5b.png';
  var videoUrl='https://youtu.be/zWqMcZFWpyE';
  // ── 60-Month Investment Chart (function declaration — defined BEFORE its
  //    call below. Was previously declared inside the portrait Exec Summary
  //    if-block, but in strict-mode IIFE that scopes the function to the
  //    block and made it inaccessible at the call site. Moved here so both
  //    portrait and landscape Exec Summary builders can call it. ──
  function buildInvestmentChart(inv, totalMo, payback, net5){
    // viewBox aspect drives the chart's natural display height (col-width
    // ÷ aspect). Aspect 540×210 ≈ 2.57:1 keeps the chart shorter so it
    // fills the column width without overflowing into the footer when
    // displayed at ~452px column width (renders at ~176px tall).
    var W=540, H=210;
    var pad={top:32, right:24, bottom:30, left:96};
    var plotW=W-pad.left-pad.right;
    var plotH=H-pad.top-pad.bottom;
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
    var yTicks=[];
    for(var v=yMin; v<=yMax; v+=step) yTicks.push(v);
    var svg='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 '+W+' '+H+'" class="rpt-es-chart-svg" preserveAspectRatio="xMidYMid meet">'
      +'<defs><linearGradient id="invFill" x1="0" y1="0" x2="0" y2="1">'
        +'<stop offset="0%" stop-color="#16a34a" stop-opacity="0.95"/>'
        +'<stop offset="100%" stop-color="#4ade80" stop-opacity="0.45"/>'
      +'</linearGradient></defs>';
    yTicks.forEach(function(v){
      var py=yCoord(v);
      svg+='<line x1="'+pad.left+'" y1="'+py+'" x2="'+(W-pad.right)+'" y2="'+py+'" stroke="#e6e9ef" stroke-width="1"/>';
      svg+='<text x="'+(pad.left-8)+'" y="'+(py+4)+'" text-anchor="end" font-size="11" fill="#222" font-family="DM Sans, sans-serif">'+fmtTick(v)+'</text>';
    });
    var xBase=pad.top+plotH;
    svg+='<line x1="'+pad.left+'" y1="'+xBase+'" x2="'+(W-pad.right)+'" y2="'+xBase+'" stroke="#222" stroke-width="1"/>';
    svg+='<text x="'+x0+'" y="'+(xBase+18)+'" text-anchor="middle" font-size="11" fill="#222" font-family="DM Sans, sans-serif">0</text>';
    svg+='<text x="'+x60+'" y="'+(xBase+18)+'" text-anchor="middle" font-size="11" fill="#222" font-family="DM Sans, sans-serif">60</text>';
    svg+='<text x="14" y="'+(pad.top+plotH/2)+'" text-anchor="middle" font-size="11" fill="#222" font-family="DM Sans, sans-serif" transform="rotate(-90 14 '+(pad.top+plotH/2)+')">Cumulative Cash Flow ($)</text>';
    svg+='<text x="'+(pad.left+plotW/2)+'" y="'+(H-10)+'" text-anchor="middle" font-size="11" fill="#222" font-family="DM Sans, sans-serif">Time (Months)</text>';
    var fillPath='M '+x0+' '+y0+' L '+x60+' '+y60+' L '+x60+' '+yZero+' L '+x0+' '+yZero+' Z';
    svg+='<path d="'+fillPath+'" fill="url(#invFill)"/>';
    svg+='<line x1="'+x0+'" y1="'+y0+'" x2="'+x60+'" y2="'+y60+'" stroke="#15803d" stroke-width="2"/>';
    if(payback>0 && payback<=60){
      svg+='<line x1="'+paybackX+'" y1="'+yZero+'" x2="'+paybackX+'" y2="'+(yZero-12)+'" stroke="#15803d" stroke-width="1.2" stroke-dasharray="2,2"/>';
      svg+='<circle cx="'+paybackX+'" cy="'+yZero+'" r="3" fill="#15803d"/>';
    }
    svg+='</svg>';
    // Net Benefit + Payback Period labels are now rendered as HTML ABOVE the
    // SVG (not inside it) so they don't overlap chart graphic / data line
    // and remain clearly readable.
    var paybackHtml='';
    if(payback>0 && payback<=60){
      var paybackTxt=(payback>=10?Math.round(payback):payback.toFixed(1))+' Months';
      paybackHtml='<span class="rpt-es-chart-stat-pb">Payback Period: '+paybackTxt+'</span>';
    }
    return '<div class="rpt-es-chart">'
      +'<div class="rpt-es-chart-hdr">'
        +'<div class="rpt-es-chart-hdr-text">'
          +'<div class="rpt-es-chart-title">Investment &amp; Return Profile <span class="rpt-es-chart-sub-title">— 5-Year Outlook</span></div>'
          +'<div class="rpt-es-chart-sub">Based on one time capital investment. 60 Month financing available based on location.</div>'
        +'</div>'
        +'<div class="rpt-es-chart-stats">'
          +'<span class="rpt-es-chart-stat-net">'+fmtTick(Math.round(net5))+' Net Benefit</span>'
          +(paybackHtml?'<br>'+paybackHtml:'')
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

    // (buildInvestmentChart is now hoisted above — see definition before esChartHtml.)

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
        +'<div class="rpt-es-right-bottom">'
          +esChartHtml
          +esCustom
        +'</div>'
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
          +'<div class="rpt-es-h2 rpt-es-h2-tail">ESG and Sustainability Value</div>'
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
            +'<div class="rpt-es-out-card"><div class="rpt-es-out-pct">40%</div><div class="rpt-es-out-lbl">Chlorine Reduction</div></div>'
            +'<div class="rpt-es-out-card"><div class="rpt-es-out-pct">25%</div><div class="rpt-es-out-lbl">Acid Reduction</div></div>'
            +'<div class="rpt-es-out-card"><div class="rpt-es-out-pct">41%</div><div class="rpt-es-out-lbl">Water Loss Reduction</div></div>'
            +'<div class="rpt-es-out-card"><div class="rpt-es-out-pct">20%</div><div class="rpt-es-out-lbl">Energy-Use Reduction</div></div>'
            +'<div class="rpt-es-out-card"><div class="rpt-es-out-pct">36%</div><div class="rpt-es-out-lbl">Less Chloramines</div></div>'
            +'<div class="rpt-es-out-card"><div class="rpt-es-out-pct">25%</div><div class="rpt-es-out-lbl">Salt Use Reduction</div></div>'
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
          +'<p class="rpt-es-link"><a href="https://www.aquarevwater.us/turtlebay" target="_blank"><svg class="rpt-es-link-ico" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="12" height="11" rx="1"/><path d="M2 6h12"/><path d="M5 9h6M5 11h4"/></svg>The Ritz-Carlton, Turtle Bay \u2014 Case Study</a></p>'
          +'<div class="rpt-es-h2 rpt-es-h2-light rpt-es-h2-tail">Video Summary</div>'
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
    var lsBackBg='https://cdn.prod.website-files.com/691fa5d63fc3a5a75a65efeb/69fd65acdab5284ac598f1bc_Back-Cover_Landscape-v2.png';
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

    // ── PAGE 1 ── 3-col layout matching reference PDF:
    //   Col 1 (dark): Objective + Why This Matters → bottom: Operational Advantages | Outcome Impact
    //   Col 2 (light): AquaRev Water Technology + device → bottom: Inline Device Installation photo
    //   Col 3 (dark): Assessment Snapshot + Financial Impacts + Investment Profile + Chart
    var lsPage1='<div class="rpt-ls-es-page rpt-ls-es-page-1">'
      +lsHeader
      +'<div class="rpt-ls-es-body-3col">'
        // ── Col 1 (dark) ──
        +'<div class="rpt-ls-es-col rpt-ls-es-col-dark rpt-ls-col-with-anchor">'
          +'<div class="rpt-ls-col-content">'
            +'<div class="rpt-es-h2">Objective</div>'
            +'<p class="rpt-es-lead">'+lsPropName+' has a clear and immediate opportunity to materially reduce recurring pool operating costs while elevating water performance. By standardizing the deployment of AquaRev Water devices—engineered to seamlessly integrate with and enhance existing pool systems—the Property can unlock measurable improvements in operating efficiency, Net Operating Income (NOI), and ESG performance, without disruption to current infrastructure.</p>'
            +'<div class="rpt-es-h2">Why This Matters</div>'
            +'<p class="rpt-es-p">Pool and spa environments represent both a signature guest experience and a persistent operational burden within hospitality assets. These systems are inherently cost-intensive and often unpredictable—driven by ongoing chemical consumption, labor demands, energy use, water loss, and equipment degradation.</p>'
            +'<p class="rpt-es-p">While day-to-day management sits with Engineering, the broader impact extends far beyond operations—directly influencing NOI, guest satisfaction, brand perception, and compliance with evolving sustainability standards.</p>'
          +'</div>'
          +'<div class="rpt-ls-col-anchor rpt-ls-anchor-flow">'
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
        // ── Col 2 (light) ── AquaRev Water Technology + device + Inline Device Installation anchor
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
        // ── Col 3 (dark) ── Assessment Snapshot + Financial Impacts + Investment Profile + Chart
        +'<div class="rpt-ls-es-col rpt-ls-es-col-dark">'
          +'<div class="rpt-es-h2">Assessment Snapshot</div>'
          +'<p class="rpt-es-p">A general property assessment was conducted to estimate the measurable impact of deploying AquaRev Water devices across the pool and aquatic facilities of the property.</p>'
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
          +'<div class="rpt-es-h2">Financial Impacts</div>'
          +'<div class="rpt-es-statline"><span class="v">'+fmtMoneyK(lsGrossMo)+'</span><span class="k">Gross Monthly Savings</span></div>'
          +'<div class="rpt-es-statline"><span class="v">'+fmtMoneyK(lsGrossYr)+'</span><span class="k">Gross Annual Savings</span></div>'
          +'<div class="rpt-es-statline"><span class="v">'+fmtMoneyK(lsNet5)+'</span><span class="k">5-Year NET Benefit</span></div>'
          +'<div class="rpt-es-h2">Investment Profile 5-Year Outlook</div>'
          +'<div class="rpt-es-statline"><span class="v">'+fmtMoneyK(lsInv)+'</span><span class="k">One-Time Investment</span></div>'
          +'<div class="rpt-es-statline"><span class="v">'+fmtMoneyK(lsAdvMo)+'</span><span class="k">Monthly Payment Option</span></div>'
          +'<div class="rpt-es-statline"><span class="v">'+(lsPayback>0?(lsPayback>=10?Math.round(lsPayback):lsPayback.toFixed(1))+' Months':'—')+'</span><span class="k">Payback Period</span></div>'
          +'<div class="rpt-ls-chart-card">'+esChartHtml+'</div>'
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

    // ── PAGE 2 ── 3-col layout matching reference PDF:
    //   Col 1 (dark): Active Use Case + 6 stats + quote + ESG and Sustainability Value
    //   Col 2 (light): Documented Performance Outcomes + Why This is a Fit + Resources + Video Summary
    //   Col 3 (light): NSF Product Image (default) OR uploaded property photos (toggle)
    var lsPage2='<div class="rpt-ls-es-page rpt-ls-es-page-2">'
      +lsHeader
      +'<div class="rpt-ls-es-body-3col rpt-ls-es-body-p2">'
        // ── Col 1 (dark) ──
        +'<div class="rpt-ls-es-col rpt-ls-es-col-dark">'
          +'<div class="rpt-es-h2">Active Use Case Reference</div>'
          +'<p class="rpt-es-p"><strong>The Ritz-Carlton, Turtle Bay — O‘ahu, HI</strong></p>'
          +'<div class="rpt-es-ritz rpt-ls-ritz-fb">'+cdnImg('https://cdn.prod.website-files.com/691fa5d63fc3a5a75a65efeb/69ef5e25e47a5ed71f709c13_Ritz%20Fact%20Sheet%20Image.png','',900)+'</div>'
          +'<p class="rpt-es-p">Active use case with measured outcomes:</p>'
          +'<div class="rpt-es-statline"><span class="v">68%</span><span class="k">Operating Cost Reduction</span></div>'
          +'<div class="rpt-es-statline"><span class="v">30%</span><span class="k">Salt Reduction</span></div>'
          +'<div class="rpt-es-statline"><span class="v">70%</span><span class="k">Water Loss Reduction</span></div>'
          +'<div class="rpt-es-statline"><span class="v">20%</span><span class="k">Energy-Use Reduction</span></div>'
          +'<div class="rpt-es-statline"><span class="v">50%</span><span class="k">Sodium Bicarbonate Reduction</span></div>'
          +'<div class="rpt-es-statline"><span class="v">43%</span><span class="k">Acid Reduction</span></div>'
          +'<blockquote class="rpt-es-quote"><span class="quote-mark">“</span>Thank you again, we are still seeing savings since installing AquaRev.<span class="quote-mark">”</span><cite>Chief Engineer — Turtle Bay, Oahu, HI</cite></blockquote>'
          +'<div class="rpt-es-h2 rpt-es-h2-tail">ESG and Sustainability Value</div>'
          +'<p class="rpt-es-p">Implementation of AquaRev Water technology supports measurable ESG outcomes through:</p>'
          +'<ul class="rpt-es-ul-dark">'
            +'<li><strong>Environmental:</strong> Lower chemical load released, less packaging and freight</li>'
            +'<li><strong>Conservation:</strong> Reduced water loss from evaporation and backwashing</li>'
            +'<li><strong>Energy:</strong> Lower energy consumption in treatment cycles; no added power requirement</li>'
            +'<li><strong>Social:</strong> Healthier swimming environment for guests and responsible operations</li>'
          +'</ul>'
        +'</div>'
        // ── Col 2 (light) ──
        +'<div class="rpt-ls-es-col rpt-ls-es-col-light">'
          +'<div class="rpt-es-h2 rpt-es-h2-light">Documented Performance Outcomes</div>'
          +'<p class="rpt-es-p-light">Based on real-world use case averages and certified lab reports, properties deploying AquaRev Water have achieved material reductions across key cost centers:</p>'
          +'<div class="rpt-es-outcome-cards rpt-ls-outcome-cards">'
            +'<div class="rpt-es-out-card"><div class="rpt-es-out-pct">40%</div><div class="rpt-es-out-lbl">Chlorine Reduction</div></div>'
            +'<div class="rpt-es-out-card"><div class="rpt-es-out-pct">25%</div><div class="rpt-es-out-lbl">Acid Reduction</div></div>'
            +'<div class="rpt-es-out-card"><div class="rpt-es-out-pct">41%</div><div class="rpt-es-out-lbl">Water Loss Reduction</div></div>'
            +'<div class="rpt-es-out-card"><div class="rpt-es-out-pct">20%</div><div class="rpt-es-out-lbl">Energy-Use Reduction</div></div>'
            +'<div class="rpt-es-out-card"><div class="rpt-es-out-pct">36%</div><div class="rpt-es-out-lbl">Less Chloramines</div></div>'
            +'<div class="rpt-es-out-card"><div class="rpt-es-out-pct">25%</div><div class="rpt-es-out-lbl">Salt Use Reduction</div></div>'
          +'</div>'
          +'<div class="rpt-es-h2 rpt-es-h2-light">Why This is a Fit</div>'
          +'<p class="rpt-es-p-light">The AquaRev Water technology is designed to be a low-friction operational improvement across all aquatic facilities.</p>'
          +'<ul class="rpt-es-ul">'
            +'<li>Non-disruptive installation &amp; no downtime</li>'
            +'<li>No new operating complexity</li>'
            +'<li>Operations and engineering-aligned</li>'
            +'<li>Ownership value — lower OpEx &amp; stronger NOI</li>'
          +'</ul>'
          +'<div class="rpt-es-h2 rpt-es-h2-light">Resources</div>'
          +'<p class="rpt-es-p-light rpt-ls-video-caption-pre">Click to open</p>'
          +'<p class="rpt-es-link"><a href="https://www.aquarevwater.us/techpaper" target="_blank">'
            +'<svg class="rpt-es-link-ico" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 2h7l3 3v9H3V2z"/><path d="M10 2v3h3"/><path d="M5.5 8h5M5.5 10.5h5M5.5 13h3"/></svg>'
            +'Technical White Paper</a></p>'
          +'<p class="rpt-es-link"><a href="https://www.aquarevwater.us/data" target="_blank">'
            +'<svg class="rpt-es-link-ico" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M2 13h12"/><path d="M4 13V8"/><path d="M7 13V5"/><path d="M10 13V9"/><path d="M13 13V3"/></svg>'
            +'Resources, Data and Lab Reports</a></p>'
          +'<p class="rpt-es-link"><a href="https://www.aquarevwater.us/turtlebay" target="_blank">'
            +'<svg class="rpt-es-link-ico" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="12" height="11" rx="1"/><path d="M2 6h12"/><path d="M5 9h6M5 11h4"/></svg>'
            +'The Ritz-Carlton, Turtle Bay — Case Study</a></p>'
          +'<div class="rpt-es-h2 rpt-es-h2-light">Video Summary</div>'
          +'<p class="rpt-es-p-light rpt-ls-video-caption-pre">Click to view</p>'
          +'<a href="'+videoUrl+'" target="_blank" class="rpt-es-video rpt-ls-video-hero">'+cdnImg(videoThumb,'',900)+'</a>'
        +'</div>'
        // ── Col 3 (light) ── NSF Product Image (default) OR 4 uploaded property photos
        +'<div class="rpt-ls-es-col rpt-ls-es-col-light rpt-ls-p2c3">'
          +(EX.inclLsP2Col3Photos && EX.lsP2Col3Photos && EX.lsP2Col3Photos.length>0
            ? '<div class="rpt-ls-p2c3-stack">'
              + EX.lsP2Col3Photos.map(function(p){return '<div class="rpt-ls-p2c3-tile"><img src="'+p.data+'" alt="" /></div>';}).join('')
            +'</div>'
            : '<img src="https://cdn.prod.website-files.com/691fa5d63fc3a5a75a65efeb/69f5e2d4389fef473e3dd4de_Product%20Shot%20NSF.png" class="rpt-ls-p2c3-default-img" alt="" />')
        +'</div>'
      +'</div>'
      +lsFooter
    +'</div>';

    lsExecSummaryHtml=lsPage1+lsPage2;
  }

  // Presentation Deck removed — feature deferred.

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
    var allCards=[];   // Array of card HTML strings — chunked across pages below
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
      allCards=cardArr;
      cards=cardArr.join('');
      totG=totalGal;
      totPurch=perPoolPurch*nPools;
      totMonthly=perPoolMonthly*nPools;
      PIPES.forEach(function(p){ totDevQty+=(S[p.k]||0); });
      pageCount=nPools;
    } else if(S.bodies.length>0){
      // ── Normal mode: one card per body ──
      var nBodies=S.bodies.length||1;
      allCards=S.bodies.map(function(b,idx){
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
      });
      cards=allCards.join('');
      PIPES.forEach(function(p){ totDevQty+=(S[p.k]||0); });
      pageCount=S.bodies.length;
    }

    if(pageCount>0){
      // Header bar matches Exec Summary style: logo + "Pool Profile" subtitle
      // on the left; property name + date + pool count + NSF badge on the right.
      var ppHeader='<div class="rpt-es-head rpt-pp-es-head">'
        +'<div class="rpt-es-head-left">'
          +'<div class="rpt-es-logo">AQUAREV WATER</div>'
          +'<div class="rpt-es-logo-sub">Pool Profile</div>'
        +'</div>'
        +'<div class="rpt-es-head-right">'
          +'<div class="rpt-es-prop-name">'+esc(propName)+'</div>'
          +'<div class="rpt-es-prop-date">'+todayStr+' \u00b7 '+pageCount+' '+(pageCount===1?'pool':'pools')+'</div>'
          +'<span class="rpt-es-nsf-badge">NSF/ANSI 50 Certified \u00b7 IAPMO</span>'
        +'</div>'
      +'</div>';
      // ── Auto-pagination: chunk cards into multiple .rpt-pp-page wrappers ──
      // Landscape: 12 cards/page (3 cols × 4 rows). Portrait: 8 cards/page (2 cols × 4 rows).
      // Each page renders its own header band (with "Page X of Y" subtitle when paginated)
      // and its own footer band. Cards listed in user-defined order.
      var CARDS_PER_PAGE=(EX.layout==='landscape')?12:8;
      var totalPpPages=Math.max(1, Math.ceil(allCards.length/CARDS_PER_PAGE));
      poolProfilesHtml='';
      for(var ppPi=0; ppPi<totalPpPages; ppPi++){
        var ppChunkCards=allCards.slice(ppPi*CARDS_PER_PAGE, (ppPi+1)*CARDS_PER_PAGE).join('');
        var ppChunkCount=Math.min(CARDS_PER_PAGE, allCards.length-ppPi*CARDS_PER_PAGE);
        var ppPageHeader=(totalPpPages>1)
          ? ppHeader.replace(pageCount+' '+(pageCount===1?'pool':'pools'), pageCount+' '+(pageCount===1?'pool':'pools')+' · Page '+(ppPi+1)+' of '+totalPpPages)
          : ppHeader;
        poolProfilesHtml+='<div class="rpt-pp-page'+(EX.layout==='landscape'?' rpt-pp-page-landscape':'')+'">'
        +ppPageHeader
        +'<div class="rpt-pp-grid rpt-pp-grid-'+Math.min(ppChunkCount,12)+'">'+ppChunkCards+'</div>'
        // ── Footer band (spans full page width via negative margins) ──
        +'<div class="rpt-foot">'
          +'<div class="rpt-foot-logo">AQUAREV WATER</div>'
          +'<div class="rpt-foot-info">'
            +'t. 832-979-6758\u2002\u00b7\u2002<a href="mailto:water@aquarevwater.us" style="color:inherit;text-decoration:none">water@aquarevwater.us</a>\u2002\u00b7\u2002<a href="https://www.aquarevwater.us" target="_blank" style="color:inherit;text-decoration:none">aquarevwater.us</a>\u2002\u00b7\u2002Made in USA<br>'
            +'NSF/ANSI\u00a050\u2002\u00b7\u2002NSF-372 Lead-Free\u2002\u00b7\u2002US\u00a0Pat.\u00a010,934,180\u2002\u00b7\u200211,358,881\u2002\u00b7\u200212,037,269'
          +'</div>'
        +'</div>'
      +'</div>';
      }  // close pp-page for loop
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
  var singlePageAssessment='<div class="rpt'+(EX.layout==='landscape'?' rpt-landscape':'')+'">'

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
        // Each col is a flex column; content stacks at the top, Property
        // Images / Video Resources are pinned to the bottom of each col
        // via .rpt-ls-img-stack / .rpt-ls-media-stack with margin-top:auto.
        ?'<div class="rpt-sec rpt-cols rpt-ls-row-b">'
          +'<div class="rpt-ls-lcol">'
            +'<div>'
              +'<div class="rpt-stitle">Purchase Options</div>'
              +purBox+advBox
            +'</div>'
            +(imgHtml?'<div class="rpt-ls-img-stack">'+imgHtml+'</div>':'')
          +'</div>'
          +'<div class="rpt-ls-rcol">'
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
            +(ytHtml?'<div class="rpt-ls-media-stack">'+ytHtml+'</div>':'')
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

  +'</div>'; // end .rpt single-page version

  // ── Multi-page Assessment cascade ──
  // When pool count exceeds the threshold, sections that won't fit fully on
  // page 1 are bumped to subsequent pages. Rule: any section displayed must
  // be FULLY displayed on one page or the next — never cut off or bled off.
  // Page 1 keeps Pool Configuration (left, first chunk) + Device Selection
  // (right, fixed). Continuation pages stack remaining pool rows in 2-cols.
  // Last page hosts Purchase Options + Monthly Breakdown + Water Conservation
  // + Property Images (pinned bottom-left) + Video Resources (pinned
  // bottom-right) + CTA bar.
  var assessmentHtml;
  // Two distinct numbers:
  //   POOL_TRIGGER: above this → cascade. Tuned to the single-page max where
  //   ALL sections (pool + device + purchase + breakdown + water + images +
  //   videos + CTA) still fit without bleeding off the page.
  //   POOL_P1_FILL: in cascade mode, page 1 only carries pool config + device
  //   selection, so it holds many more rows. Body ~687px / row ~20px ≈ 30
  //   rows fit comfortably.
  //   POOL_CONT_FILL: continuation pages render in 2 sub-columns of pool
  //   rows, so they hold roughly twice the page-1 count.
  var POOL_TRIGGER = (EX.layout==='landscape') ? 12 : 10;
  var POOL_P1_FILL = (EX.layout==='landscape') ? 30 : 24;
  var POOL_CONT_FILL = (EX.layout==='landscape') ? 60 : 44;
  var nPoolRows = poolRowsArr.length;

  if (nPoolRows <= POOL_TRIGGER) {
    assessmentHtml = singlePageAssessment;
  } else {
    // Compute page count: page 1 (with first chunk + devices) + continuation
    // pages for remaining pool rows + final page (with Purchase, Breakdown,
    // images, CTA). Continuation pages render pool rows in 2-column grid.
    var rowsAfterP1 = nPoolRows - POOL_P1_FILL;
    var contPages = (rowsAfterP1>0) ? Math.ceil(rowsAfterP1/POOL_CONT_FILL) : 0;
    var totalAssessPages = 1 + contPages + 1;

    var assessFooter='<div class="rpt-foot">'
      +'<div class="rpt-foot-logo">AQUAREV WATER</div>'
      +'<div class="rpt-foot-info">'
        +'t. 832-979-6758 · <a href="mailto:water@aquarevwater.us" style="color:inherit;text-decoration:none">water@aquarevwater.us</a> · <a href="https://www.aquarevwater.us" target="_blank" style="color:inherit;text-decoration:none">aquarevwater.us</a> · Made in USA<br>'
        +'NSF/ANSI 50 · NSF-372 Lead-Free · US Pat. 10,934,180 · 11,358,881 · 12,037,269'
      +'</div>'
    +'</div>';

    var assessCta='<div class="rpt-cta-bar">'
      +'<span class="cta-label">AquaRev Reference Information</span>'
      +'<a href="https://www.aquarevwater.us/data" target="_blank">www.aquarevwater.us/data</a>'
    +'</div>';

    var assessHeader='<div class="rpt-head">'
      +'<div class="rpt-head-left">'
        +'<div class="rpt-logo">AQUAREV WATER</div>'
        +'<div class="rpt-logo-sub">Cost Savings Assessment</div>'
      +'</div>'
      +'<div class="rpt-head-right">'
        +'<div class="rpt-prop-name">'+esc(prop)+'</div>'
        +'<div class="rpt-prop-date">'+today+'</div>'
        +'<span class="rpt-nsf-badge">NSF/ANSI 50 Certified · IAPMO</span>'
      +'</div>'
    +'</div>';

    var assessHeaderCont='<div class="rpt-head">'
      +'<div class="rpt-head-left">'
        +'<div class="rpt-logo">AQUAREV WATER</div>'
        +'<div class="rpt-logo-sub">Cost Savings Assessment</div>'
      +'</div>'
      +'<div class="rpt-head-right">'
        +'<div class="rpt-prop-name">'+esc(prop)+'</div>'
        +'<div class="rpt-prop-date">'+today+' · Continued</div>'
        +'<span class="rpt-nsf-badge">NSF/ANSI 50 Certified · IAPMO</span>'
      +'</div>'
    +'</div>';

    var assessKpiStrip='<div class="rpt-kpis'+(EX.layout==='landscape'?' rpt-kpis-5':'')+'">'
      +'<div class="rpt-kpi"><div class="rpt-kpi-lbl">Devices</div><div class="rpt-kpi-val teal">'+R.total_dev+'</div></div>'
      +'<div class="rpt-kpi"><div class="rpt-kpi-lbl">Monthly Savings</div><div class="rpt-kpi-val green">'+fc(R.total_mo,0)+'</div></div>'
      +'<div class="rpt-kpi"><div class="rpt-kpi-lbl">Annual Savings</div><div class="rpt-kpi-val green">'+fc(R.total_yr,0)+'</div></div>'
      +'<div class="rpt-kpi"><div class="rpt-kpi-lbl">Purchase Payback</div><div class="rpt-kpi-val teal">'+(R.payback>0?Math.round(R.payback)+' mo':'N/A')+'</div></div>'
      +(EX.layout==='landscape'
        ? '<div class="rpt-kpi"><div class="rpt-kpi-lbl">Savings Projection Applied</div><div class="rpt-kpi-val teal">'+Math.round(S.savings_weight*100)+'%</div></div>'
        : '')
    +'</div>';

    var pgLbl=function(n){return ' <span style="font-weight:400;color:#7db8cc;font-size:11px;letter-spacing:1px"> · Page '+n+' of '+totalAssessPages+'</span>';};

    // ── Page 1: Pool Config (first chunk) | Device Selection ──
    assessmentHtml = '<div class="rpt'+(EX.layout==='landscape'?' rpt-landscape':'')+'">'
      + assessHeader + assessKpiStrip
      + '<div class="rpt-body">'
        + '<div class="rpt-sec rpt-cols">'
          + '<div>'
            + '<div class="rpt-stitle">Pool Configuration'+pgLbl(1)+'</div>'
            + poolRowsArr.slice(0, POOL_P1_FILL).join('')
          + '</div>'
          + '<div>'
            + '<div class="rpt-stitle">Device Selection</div>'
            + devRows
            + (R.disc_amt>0?'<div class="rpt-row"><span class="k">Discount Applied</span><span class="v pos">-'+fc(R.disc_amt,0)+'</span></div>':'')
            + '<div class="rpt-row strong"><span class="k">Total Investment</span><span class="v">'+fc(R.inv,0)+'</span></div>'
          + '</div>'
        + '</div>'
      + '</div>'
      + assessFooter
    + '</div>';

    // ── Continuation pages: Pool Config remainder in 2-col grid ──
    for (var cpi=0; cpi<contPages; cpi++) {
      var startIdx = POOL_P1_FILL + cpi*POOL_CONT_FILL;
      var endIdx = Math.min(startIdx+POOL_CONT_FILL, nPoolRows);
      var chunkRows = poolRowsArr.slice(startIdx, endIdx);
      var halfPt = Math.ceil(chunkRows.length/2);
      var leftColRows = chunkRows.slice(0, halfPt).join('');
      var rightColRows = chunkRows.slice(halfPt).join('');

      assessmentHtml += '<div class="rpt'+(EX.layout==='landscape'?' rpt-landscape':'')+'">'
        + assessHeaderCont
        + '<div class="rpt-body">'
          + '<div class="rpt-sec rpt-cols">'
            + '<div>'
              + '<div class="rpt-stitle">Pool Configuration'+pgLbl(2+cpi)+'</div>'
              + leftColRows
            + '</div>'
            + '<div>'
              + '<div class="rpt-stitle" style="visibility:hidden">.</div>'
              + rightColRows
            + '</div>'
          + '</div>'
        + '</div>'
        + assessFooter
      + '</div>';
    }

    // ── Last page: Volume totals + Purchase + Breakdown + Water + Images + Videos + CTA ──
    var totalsBlock = '<div class="rpt-row strong"><span class="k">Total Volume</span><span class="v">'+fn(S.pool_gallons)+' gal</span></div>'
      + (S.chlorine_pool_gallons!==S.pool_gallons?'<div class="rpt-row"><span class="k">Chlorine Pool Volume</span><span class="v teal">'+fn(S.chlorine_pool_gallons)+' gal</span></div>':'')
      + '<div class="rpt-row"><span class="k">CO2 pH Systems</span><span class="v">'+(S.co2_pool_gallons>0?fn(S.co2_pool_gallons)+' gal':'None enabled')+'</span></div>';

    assessmentHtml += '<div class="rpt'+(EX.layout==='landscape'?' rpt-landscape':'')+'">'
      + assessHeaderCont
      + '<div class="rpt-body">'
        + '<div class="rpt-sec" style="margin-bottom:10px">'
          + '<div class="rpt-stitle">Property Volume Totals'+pgLbl(totalAssessPages)+'</div>'
          + totalsBlock
        + '</div>'
        + (EX.layout==='landscape'
          ?'<div class="rpt-sec rpt-cols rpt-ls-row-b">'
            + '<div class="rpt-ls-lcol">'
              + '<div>'
                + '<div class="rpt-stitle">Purchase Options</div>'
                + purBox + advBox
              + '</div>'
              + (imgHtml?'<div class="rpt-ls-img-stack">'+imgHtml+'</div>':'')
            + '</div>'
            + '<div class="rpt-ls-rcol">'
              + '<div>'
                + '<div class="rpt-stitle">Monthly Savings Breakdown</div>'
                + '<table class="rpt-tbl">'
                  + '<thead><tr><th>Category</th><th>Monthly</th><th>%</th></tr></thead>'
                  + '<tbody>' + bkRows + '<tr class="tot"><td>Total</td><td>'+fc(R.total_mo)+'</td><td>100%</td></tr></tbody>'
                + '</table>'
                + (EX.inclWater?waterHtml:'')
              + '</div>'
              + (ytHtml?'<div class="rpt-ls-media-stack">'+ytHtml+'</div>':'')
            + '</div>'
          + '</div>'
          + '<div class="rpt-disc">Estimates based on lab-verified reduction rates (IAPMO R&amp;T). Actual savings vary by site. NSF/ANSI 50 certified.</div>'
          :'<div class="rpt-sec rpt-cols">'
            + '<div>'
              + '<div class="rpt-stitle">Purchase Options</div>'
              + purBox + advBox
            + '</div>'
            + '<div>'
              + '<div class="rpt-stitle">Monthly Savings Breakdown</div>'
              + '<table class="rpt-tbl">'
                + '<thead><tr><th>Category</th><th>Monthly Savings</th><th>% of Total</th></tr></thead>'
                + '<tbody>' + bkRows + '<tr class="tot"><td>Total</td><td>'+fc(R.total_mo)+'</td><td>100%</td></tr></tbody>'
              + '</table>'
              + '<div class="rpt-row rpt-sw-applied" style="border-top:1px dashed #e0ecf4;margin-top:6px;padding-top:6px"><span class="k" style="color:#00b4d8;font-size:11px">Savings Projection Applied</span><span class="v" style="color:#00b4d8;font-size:11px">'+Math.round(S.savings_weight*100)+'%</span></div>'
              + (EX.inclWater?'<div style="margin-top:10px">'+waterHtml+'</div>':'')
            + '</div>'
          + '</div>'
          + ((imgHtml||ytHtml)?'<div class="rpt-sec rpt-cols">'+imgHtml+ytHtml+'</div>':'')
          + commHtml
          + '<div class="rpt-disc">Estimates based on lab-verified reduction rates (IAPMO R&amp;T). Actual savings may vary by property size, usage patterns, climate, and maintenance practices. AquaRev devices are NSF/ANSI 50 certified and tested by IAPMO R&amp;T. Chemical reduction rates reflect controlled lab results. This assessment is for informational purposes only and does not constitute a guarantee of savings.</div>'
        )
      + '</div>'
      + assessCta
      + assessFooter
    + '</div>';
  }

  // ── Quote / Order Form pages — independently togglable in Export step ──
  var quoteHtml = buildQuoteHtml();

  var html=coverHtml+lsCoverHtml+execSummaryHtml+lsExecSummaryHtml
    +assessmentHtml
    +poolProfilesHtml
    +fsHtml
    +quoteHtml;

  // ── Portrait Back Cover — independent of fact sheet since 2026-04-23.
  // Uses .rpt-back-cover-page so the image can full-bleed (object-fit:cover)
  // without affecting the inner fact sheet pages, which need object-fit:contain. ──
  if(EX.inclBackCover && EX.layout==='portrait'){
    html+='<div class="rpt-fs-img-page rpt-back-cover-page">'
      +cdnImg('https://cdn.prod.website-files.com/691fa5d63fc3a5a75a65efeb/69fd65a10e9889939b9b992d_Back-Cover_Portrait-v2.png','',1100)
    +'</div>';
  }
  // ── Landscape Back Cover + Presentation Deck (Presentation deck follows back cover, separate document). ──
  html+=lsBackCoverHtml;
  // (presentationDeckHtml removed)

  // ── Mount report and print ──
  var rEl=document.getElementById('ar2-report');
  if(!rEl)return;
  rEl.innerHTML=html;

  // Keep @page orientation
  var orientEl=document.getElementById('ar2-orient');
  if(!orientEl){orientEl=document.createElement('style');orientEl.id='ar2-orient';document.head.appendChild(orientEl);}
  orientEl.textContent='@media print{@page{size:'+EX.layout+';margin:0mm;}}';

  // ── PDF page-size verification ──
  // After mounting, verify each page-element resolves to expected print
  // dimensions (1056×816 landscape / 816×1056 portrait). Logs to console
  // if any page is off — visible in DevTools so regressions are caught.
  try {
    var inch=96;
    var expectW = (EX.layout==='landscape') ? 11*inch : 8.5*inch;
    var expectH = (EX.layout==='landscape') ? 8.5*inch : 11*inch;
    var pageEls=rEl.querySelectorAll('.rpt, .rpt-cover-page, .rpt-pp-page, .rpt-es-page, .rpt-fs-img-page, .rpt-ls-cover-page, .rpt-ls-back-cover-page, .rpt-ls-es-page');
    var sizeIssues=[];
    pageEls.forEach(function(el){
      var box=el.getBoundingClientRect();
      var w=Math.round(box.width), h=Math.round(box.height);
      // Allow 2px tolerance for sub-pixel rendering
      if(Math.abs(w-expectW)>2 || Math.abs(h-expectH)>2){
        sizeIssues.push(el.className.split(' ').slice(0,2).join('.')+': '+w+'x'+h+' (expected '+expectW+'x'+expectH+')');
      }
    });
    if(sizeIssues.length){
      console.warn('[AquaRev PDF] Page-size verification — '+sizeIssues.length+' page(s) off:', sizeIssues);
    } else {
      console.log('[AquaRev PDF] Page-size verification passed: '+pageEls.length+' pages all '+expectW+'x'+expectH+'.');
    }
  } catch(e){ console.warn('[AquaRev PDF] Size-check failed:', e); }

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
          +'<div class="ar-toggle-row" data-client-hide><label>Include Cover Page</label>'
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
          +'<div class="ar-toggle-row" data-client-hide><label>Include Exec Summary</label>'
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
          // Include AquaRev Fact Sheet toggle removed per request — feature deferred.
          +'<div class="ar-toggle-row" data-client-hide><label>Include Back Cover</label>'
            +'<div class="ar-sw-track'+(EX.inclBackCover?' on':'')+'" data-ex-sw="inclBackCover"><div class="ar-sw-thumb"></div></div>'
          +'</div>'
         +'</div>'

        // ── LANDSCAPE panel — separate state keys, distinct identity ──
        :'<div class="ar-export-panel-label">Landscape Page Options</div>'
         +'<div style="margin-top:8px">'
          +'<div class="ar-toggle-row" data-client-hide><label>Include Cover Page</label>'
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
          +'<div class="ar-toggle-row" data-client-hide><label>Include Exec Summary</label>'
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
          // Custom Property Photos toggle (replaces NSF default image on ES Page 2 Col 3)
          +'<div class="ar-toggle-row"><label>Use Custom Property Photos (ES Page 2)</label>'
            +'<div class="ar-sw-track'+(EX.inclLsP2Col3Photos?' on':'')+'" data-ex-sw="inclLsP2Col3Photos"><div class="ar-sw-thumb"></div></div>'
          +'</div>'
          +(EX.inclLsP2Col3Photos
            ? (function(){
              var photos=EX.lsP2Col3Photos||[];
              var slots='';
              for(var pi=0;pi<4;pi++){
                var p=photos[pi];
                slots+='<div class="ar-p2c3-slot'+(p?' filled':'')+'" data-p2c3-slot="'+pi+'">';
                if(p){
                  slots+='<img src="'+p.data+'" alt="" />'
                    +'<button type="button" class="ar-p2c3-rm" data-p2c3-rm="'+pi+'" title="Remove">×</button>';
                }else{
                  slots+='<div class="ar-p2c3-slot-inner">'
                    +'<svg width="22" height="22" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="12" height="10" rx="1.5"/><circle cx="6" cy="7" r="1"/><path d="M2 11l4-4 3 3 2-2 3 3"/></svg>'
                    +'<span>Slot '+(pi+1)+' — click or drop photo</span>'
                    +'<input type="file" accept="image/*" data-p2c3-input="'+pi+'" />'
                    +'</div>';
                }
                slots+='</div>';
              }
              return '<div class="ar-p2c3-drawer" id="ar2-p2c3-drawer">'
                +'<p class="ar-export-note" style="margin:4px 0 8px">Up to 4 photos. Click a slot to upload, or drag-and-drop image files.</p>'
                +'<div class="ar-p2c3-slots">'+slots+'</div>'
              +'</div>';
            })()
            : ''
          )
          +'<div class="ar-toggle-row" data-client-hide><label>Include Back Cover</label>'
            +'<div class="ar-sw-track'+(EX.inclLsBackCover?' on':'')+'" data-ex-sw="inclLsBackCover"><div class="ar-sw-thumb"></div></div>'
          +'</div>'
         +'</div>'
      )
    +'</div>'

    // \u2500\u2500 Quote / Order Form pages \u2014 three independent toggles. Hidden until at
    //    least one device is selected (otherwise there's nothing in the Quote).
    +(function(){
      var hasDevices=S.pipe_2in+S.pipe_3in+S.pipe_4in+S.pipe_6in+S.pipe_8in+S.pipe_10in>0;
      if(!hasDevices) return '';
      return '<div class="ar-export-panel-label" style="margin-top:14px" data-client-hide>Quote / Order Form</div>'
        +'<div style="margin-top:8px" data-client-hide>'
          +'<div class="ar-toggle-row"><label>Include '+(Q.docKind==='po'?'Purchase Order':Q.docKind==='invoice'?'Invoice':'Quote')+' / Order Page</label>'
            +'<div class="ar-sw-track'+(EX.inclQuote?' on':'')+'" data-ex-sw="inclQuote"><div class="ar-sw-thumb"></div></div>'
          +'</div>'
          +'<div class="ar-toggle-row"><label>Include Purchase Terms Page</label>'
            +'<div class="ar-sw-track'+(EX.inclQuoteTerms?' on':'')+'" data-ex-sw="inclQuoteTerms"><div class="ar-sw-thumb"></div></div>'
          +'</div>'
          +'<div class="ar-toggle-row"><label>Include Payment Form Page</label>'
            +'<div class="ar-sw-track'+(EX.inclQuotePayment?' on':'')+'" data-ex-sw="inclQuotePayment"><div class="ar-sw-thumb"></div></div>'
          +'</div>'
          +'<p class="ar-export-note" style="margin-top:4px">Configure quote details on Step 4 (Quote). Each page is appended independently in the unified PDF.</p>'
        +'</div>';
    })()

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
  // Quote step Preview button — auto-enables the 3 quote-page toggles so
  // the rep doesn't have to bounce to Export and toggle each one. Other
  // export toggles stay as-is so the preview shows whatever bundle is
  // currently configured plus the quote pages.
  var prevQuoteBtn=e.target.closest('[data-action="preview-quote"]');
  if(prevQuoteBtn){
    EX.inclQuote = true;
    EX.inclQuoteTerms = true;
    EX.inclQuotePayment = true;
    EX.previewing = true;
    generateReport();
    return;
  }
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
  // Help button — step-aware tutorial overlay
  var helpClick=e.target.closest('[data-action="show-help"]');
  if(helpClick){ showHelpModal(); return; }
  // Admin User Manager actions (admin-only)
  var addUserClick=e.target.closest('[data-action="admin-add-user"]');
  if(addUserClick){ showAdminAddUserModal(); return; }
  var resetCodeClick=e.target.closest('[data-action="admin-reset-code"]');
  if(resetCodeClick){
    showAdminResetCodeModal(resetCodeClick.dataset.uid, resetCodeClick.dataset.uname);
    return;
  }
  var changeRoleClick=e.target.closest('[data-action="admin-change-role"]');
  if(changeRoleClick){
    showAdminChangeRoleModal(changeRoleClick.dataset.uid, changeRoleClick.dataset.uname, changeRoleClick.dataset.urole);
    return;
  }
  var toggleActiveClick=e.target.closest('[data-action="admin-toggle-active"]');
  if(toggleActiveClick){
    var uid=toggleActiveClick.dataset.uid;
    var uname=toggleActiveClick.dataset.uname;
    var wasActive=toggleActiveClick.dataset.uactive==='true';
    var verb = wasActive ? 'Disable' : 'Enable';
    if(!confirm(verb+' '+uname+'? '+(wasActive?'They won\'t be able to sign in. Their archive stays intact.':''))) return;
    AR2_CLOUD.adminSetUserActive(uid, !wasActive).then(function(){
      populateAdminDashboard();
    }).catch(function(e){ alert(verb+' failed: '+(e.message||e)); });
    return;
  }
  // Quick-add 4" device from empty state
  var qaBtn=e.target.closest('[data-action="quick-add-4in"]');
  if(qaBtn){ S.pipe_4in=(S.pipe_4in||0)+1; render(); return; }
  // Toggle view: form ↔ bank (password-gated first time per session).
  // In cloud mode the user is already authenticated by the calculator gate,
  // so the legacy archive passcode is skipped — single sign-in to the cloud
  // account opens both the calculator and the archive.
  var viewBank=e.target.closest('[data-action="view-bank"]');
  if(viewBank){
    var inCloud = !!(window.AR2_CLOUD && AR2_CLOUD.isReady());
    if(VIEW==='bank'){ showView('form'); }
    else if(inCloud || ARCHIVE_UNLOCKED){ if(inCloud) ARCHIVE_UNLOCKED=true; showView('bank'); }
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
  // Card help "!" button — toggles .show-info on the parent .ar-card. Stops
  // propagation so it doesn't bubble to other handlers and re-render the form.
  var cardInfo=e.target.closest('[data-card-info]');
  if(cardInfo){
    var card=cardInfo.closest('.ar-card');
    if(card) card.classList.toggle('show-info');
    return;
  }
  // Quote step — doc kind toggle (Quote vs Purchase Order)
  var qKind=e.target.closest('[data-q-kind]');
  if(qKind){ Q.docKind=qKind.dataset.qKind; renderForm(); renderDevices(); return; }
  // Quote step — toggle switches (warrantyEnabled, servicesEnabled, shippingEnabled)
  var qSw=e.target.closest('[data-q-sw]');
  if(qSw){
    var qKey=qSw.dataset.qSw;
    Q[qKey]=!Q[qKey];
    qSw.classList.toggle('on', Q[qKey]);
    renderForm(); renderDevices(); renderResults();
    return;
  }
  // Quote step — "Included" toggle on add-on rows. When on, the line prints
  // "INCLUDED" on the rendered Quote and is excluded from totals.
  var qIncl=e.target.closest('[data-q-incl]');
  if(qIncl){
    var iKey=qIncl.dataset.qIncl;
    Q[iKey]=!Q[iKey];
    qIncl.classList.toggle('on', Q[iKey]);
    renderForm(); renderResults();
    return;
  }
  // Quote step — payment method radio
  var qPay=e.target.closest('[data-q-pay]');
  if(qPay){ Q.paymentMethod=(Q.paymentMethod===qPay.dataset.qPay?'':qPay.dataset.qPay); renderForm(); return; }
  // Quote step — Rich-text editor toolbar. The companion mousedown handler
  // (registered separately) preventDefaults so the click doesn't move focus
  // out of the contenteditable div, preserving the selection for execCommand.
  var rteBtn=e.target.closest('.ar-rte-btn[data-rte-cmd]');
  if(rteBtn){
    var rteCmd=rteBtn.dataset.rteCmd;
    var rteEl=document.getElementById('ar2-q-rte');
    if(rteEl){
      try { document.execCommand(rteCmd, false, null); } catch(_){}
      Q.termsHtml = rteEl.innerHTML;
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
    // Export options live in #ar2-devices (middle column), so re-render that.
    if(swKey==='inclExecSummary'||swKey==='inclLsExecSummary'||swKey==='inclLsP2Col3Photos') renderDevices();
    return;
  }
  // Remove image
  var rmImg=e.target.closest('[data-rm-img]');
  if(rmImg){ EX.images=EX.images.filter(function(x){return x.id!==rmImg.dataset.rmImg;}); renderResults(); return; }
  // Remove a P2 Col 3 photo
  var rmP2c3=e.target.closest('[data-p2c3-rm]');
  if(rmP2c3){
    var rmIdx=parseInt(rmP2c3.dataset.p2c3Rm,10);
    if(!isNaN(rmIdx) && Array.isArray(EX.lsP2Col3Photos)){
      EX.lsP2Col3Photos.splice(rmIdx,1);
      renderDevices();
    }
    return;
  }
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
  // P2 Col 3 photo upload via file input
  if(el.dataset && el.dataset.p2c3Input!==undefined){
    var fIdx=parseInt(el.dataset.p2c3Input,10);
    var f=el.files && el.files[0];
    if(f && !isNaN(fIdx)){
      acceptP2c3Photo(f, fIdx);
    }
    return;
  }
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
  // Quote per-line tax % input. Stored as 0..1 fraction in Q.lineTax[key].
  // We avoid re-rendering the form (which would steal input focus) — only the
  // middle-col preview is refreshed. The per-line "tax due" cell on the form
  // stays stale until the rep clicks elsewhere (next form re-render).
  if(el.dataset.qLineTax){
    var lineKey = el.dataset.qLineTax;
    if(!Q.lineTax) Q.lineTax = {};
    Q.lineTax[lineKey] = (parseFloat(el.value)||0)/100;
    if(S.step===3){ renderDevices(); renderResults(); }
    return;
  }
  // Quote discount % override. Stored as fraction 0..1 in Q.discountPct.
  // Empty string falls back to S.discount (Pricing slider value).
  if(el.hasAttribute('data-q-disc-pct')){
    var v = el.value;
    Q.discountPct = (v === '' || v === null) ? null : (parseFloat(v)||0)/100;
    if(S.step===3) renderResults();
    return;
  }
  // Quote form fields — text/number/date/textarea inputs all funnel here.
  // data-q-mul lets a percent-style input (e.g. 8 = 0.08) store a fractional value.
  if(el.dataset.q){
    var qkey=el.dataset.q;
    var raw=el.value;
    var qmul=parseFloat(el.dataset.qMul);
    if(!isNaN(qmul)){
      Q[qkey]=(parseFloat(raw)||0)*qmul;
    } else if(['daysValid','servicesRate','servicesQty','otherFee','discount','depositPct'].indexOf(qkey)>-1){
      Q[qkey]=parseFloat(raw)||0;
    } else {
      Q[qkey]=raw;
    }
    // Live-update the middle col preview as the rep types.
    if(S.step===3) renderDevices();
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

/* ── Help system ──
   Step-aware tutorial overlay. Click the (?) Help button beside New →
   modal opens with instructions tailored to the user's current step.
   Content lives in HELP_CONTENT below; admins/users/clients all see it.
   Keyboard: Esc closes the modal. */
var HELP_CONTENT = {
  'map-pools': {
    title: 'Map Pools — Step 1 of 5',
    body:
      '<p>Use this step to identify and measure pools at the property.</p>'
     +'<ol>'
       +'<li><b>Property name</b> — type the hotel/resort name. Suggestions appear as you type.</li>'
       +'<li><b>Locate on map</b> — searches by name, address, or Plus Code, then centers the satellite map on the property.</li>'
       +'<li><b>Trace each pool</b> — click <b>Magic Wand</b> and click on a pool to auto-detect its outline, OR click <b>Trace polygon by hand</b> to draw it yourself.</li>'
       +'<li><b>Confirm details</b> — give it a name, type, and depth, then click <b>Register pool</b>.</li>'
       +'<li>Repeat for each pool, then click <b>Continue to Pool &amp; System</b>.</li>'
     +'</ol>'
     +'<p style="color:var(--mu);font-size:11px">Tip: Click <b>Skip Map Pools</b> at the top to jump straight to manual data entry if you already have pool sizes.</p>'
  },
  'pool-system': {
    title: 'Pool &amp; System — Step 2 of 5',
    body:
      '<p>Enter pool dimensions and pick the right AquaRev devices for each pool.</p>'
     +'<ol>'
       +'<li><b>Pool dimensions</b> — length, width, depth. Total volume calculates automatically.</li>'
       +'<li><b>Device selection</b> — pick the pipe size of each AquaRev device that will be installed.</li>'
       +'<li><b>Water Loss / Chemical Costs</b> — adjust expected reduction percentages and per-gallon costs to match the property\'s real numbers.</li>'
     +'</ol>'
     +'<p style="color:var(--mu);font-size:11px">Tip: The Results panel on the right updates live as you type — use it to sanity-check the savings.</p>'
  },
  'pricing': {
    title: 'Pricing &amp; Settings — Step 3 of 5',
    body:
      '<p>Apply discount, savings projection weight, and finalize the ROI numbers.</p>'
     +'<ul>'
       +'<li><b>Discount slider</b> — discount applied to the equipment subtotal.</li>'
       +'<li><b>Savings Weight</b> — caps projected savings to a conservative percentage of the lab-validated maximum (default 100%).</li>'
     +'</ul>'
     +'<p>When the numbers look right, click <b>Continue → Quote</b> to build the proposal.</p>'
  },
  'quote': {
    title: 'Quote — Step 4 of 5',
    body:
      '<p>Build the formal commercial document — Quote, Purchase Order, or Invoice.</p>'
     +'<ol>'
       +'<li><b>Document Type</b> — pick Quote, Purchase Order, or Invoice. The PDF header updates accordingly.</li>'
       +'<li><b>Header / Buyer</b> — fill in the buyer\'s name, address, and contact. Use the <b>Same as Buyer</b> toggle to copy buyer info into Ship-To.</li>'
       +'<li><b>Line Items</b> — equipment auto-pulls from Step 2. Add-ons (Warranty / Services / Shipping) can be toggled <b>Included</b> to print "INCLUDED" without adding to the total.</li>'
       +'<li><b>Standard Terms / Purchase Terms &amp; Conditions</b> — boilerplate is pre-filled; edit per deal as needed.</li>'
       +'<li><b>Payment Method</b> — pick CC / Wire / Check (the PDF shows all three options on the Payment Form page).</li>'
       +'<li><b>Preview Quote PDF</b> — see exactly what the customer will receive.</li>'
     +'</ol>'
  },
  'export': {
    title: 'Export — Step 5 of 5',
    body:
      '<p>Pick which pages to include in the final PDF, add property images / videos, and download.</p>'
     +'<ul>'
       +'<li><b>Toggles on the left</b> — Cover, Pool Profiles, Exec Summary, Quote pages, Back Cover. Toggle off any page you don\'t want.</li>'
       +'<li><b>Property Images</b> — upload up to 4 photos to appear on the Pool Profiles page.</li>'
       +'<li><b>YouTube Videos</b> — paste up to 4 video URLs to appear on the Exec Summary page.</li>'
       +'<li><b>Preview</b> — see the entire PDF in browser. <b>Download</b> generates a print-ready PDF. <b>Archive</b> saves a copy for later.</li>'
     +'</ul>'
  },
  'archive': {
    title: 'Archive',
    body:
      '<p>Saved assessments live here. You can recall, duplicate, regenerate PDFs, or delete records.</p>'
     +'<ul>'
       +'<li><b>Recall</b> — load this assessment back into the calculator to edit it.</li>'
       +'<li><b>Duplicate</b> — clone the record to start a new "Copy of" version (original stays untouched).</li>'
       +'<li><b>Portrait / Landscape PDF</b> — instantly regenerate the PDF without recalling.</li>'
       +'<li><b>Delete</b> — permanently remove. Cannot be undone.</li>'
     +'</ul>'
     +'<p style="color:var(--mu);font-size:11px">Tip: Use <b>Select</b> at the top to bulk-delete multiple records at once.</p>'
  },
  'admin': {
    title: 'Admin Dashboard',
    body:
      '<p>Admins (Jeff, Rob, Dinesh) see this drawer in the Archive view.</p>'
     +'<ul>'
       +'<li><b>Records · Last 30 Days</b> — total records created across all users in the last 30 days.</li>'
       +'<li><b>User Activity table</b> — per-user lifetime login count, 30-day records, 30-day logins, and last login date.</li>'
       +'<li><b>90-Day Chart</b> — daily records created, broken out per user, in EST.</li>'
       +'<li><b>Created By column</b> — every record shows who saved it. Use the orange ⇒ button to reassign records between users.</li>'
     +'</ul>'
  }
};

function helpKeyForCurrentView(){
  // Bank/Archive view trumps the calculator step
  try { if(typeof VIEW !== 'undefined' && VIEW === 'bank') return 'archive'; } catch(_){}
  try {
    var step = (typeof S !== 'undefined' && S && typeof S.step === 'number') ? S.step : 0;
    return ['map-pools','pool-system','pricing','quote','export'][step] || 'map-pools';
  } catch(_){ return 'map-pools'; }
}

function showHelpModal(){
  var existing=document.getElementById('ar2-help-modal');
  if(existing&&existing.parentNode) existing.parentNode.removeChild(existing);
  var key = helpKeyForCurrentView();
  var c = HELP_CONTENT[key] || HELP_CONTENT['map-pools'];
  var m=document.createElement('div');
  m.id='ar2-help-modal';
  m.style.cssText='position:fixed;inset:0;background:rgba(4,15,30,.78);backdrop-filter:blur(6px);-webkit-backdrop-filter:blur(6px);z-index:999998;display:flex;align-items:center;justify-content:center;padding:20px;font-family:"DM Sans","Helvetica Neue",Arial,sans-serif;';
  m.innerHTML='<div style="background:linear-gradient(145deg,#0a2540,#071628);border:1px solid rgba(0,180,216,.3);border-radius:12px;padding:28px 32px;max-width:560px;width:100%;max-height:85vh;overflow:auto;box-shadow:0 20px 60px rgba(0,0,0,.5);">'
    +'<div style="display:flex;align-items:center;justify-content:space-between;gap:12px;margin-bottom:14px">'
      +'<div style="font-family:\'Bebas Neue\',sans-serif;font-size:18px;letter-spacing:2.5px;color:#48cae4;text-transform:uppercase">'+c.title+'</div>'
      +'<button id="ar2-help-close" aria-label="Close" style="background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.18);color:#cfe2eb;width:30px;height:30px;border-radius:50%;cursor:pointer;font-size:16px;font-family:inherit;line-height:1">×</button>'
    +'</div>'
    +'<div class="ar-help-body" style="font-size:13px;color:#cfe2eb;line-height:1.6">'+c.body+'</div>'
    +'<div style="margin-top:18px;padding-top:14px;border-top:1px solid rgba(0,180,216,.18);font-size:10.5px;color:#7db8cc;text-align:center">Need more help? Call <b style="color:#cfe2eb">(832) 979-6758</b></div>'
  +'</div>';
  document.body.appendChild(m);
  function close(){ if(m.parentNode) m.parentNode.removeChild(m); document.removeEventListener('keydown', onKey); }
  function onKey(e){ if(e.key==='Escape') close(); }
  document.getElementById('ar2-help-close').onclick=close;
  m.addEventListener('click', function(e){ if(e.target===m) close(); });
  document.addEventListener('keydown', onKey);
}

/* Inject the Help button beside New on every page load. Done in JS so the
   live Webflow embed picks it up without a re-paste. */
function injectHelpButton(){
  if(document.getElementById('ar2-help-btn')) return;
  var actions = document.getElementById('ar2-bar-actions');
  if(!actions) return;
  var helpBtn = document.createElement('button');
  helpBtn.id = 'ar2-help-btn';
  helpBtn.className = 'ar-reset-btn no-print';
  helpBtn.dataset.action = 'show-help';
  helpBtn.title = 'How to use this page';
  helpBtn.innerHTML = '? <span style="margin-left:4px">Help</span>';
  helpBtn.style.cssText = 'background:rgba(0,180,216,.12);border-color:rgba(0,180,216,.4);color:var(--t);';
  // Place Help button right BEFORE the Archive button so the order reads:
  // Help · Archive · New
  var firstBtn = actions.querySelector('button');
  if(firstBtn) actions.insertBefore(helpBtn, firstBtn);
  else actions.appendChild(helpBtn);
}

/* ── Init ── */
function init(){
  var root=document.getElementById('ar2');
  if(!root)return;
  injectHelpButton();
  // Cloud-mode bootstrap — try to restore an existing Supabase session before
  // deciding whether to show the gate. If session is valid, skip the modal.
  // The Supabase SDK is loaded via <script src> in the HTML; if it's not yet
  // ready (CDN race), we still fall back to the gate which calls the edge fn.
  if(window.AR2_CLOUD && AR2_CLOUD.isEnabled()){
    AR2_CLOUD.restoreSession().then(function(u){
      if(u){
        CALC_UNLOCKED=true;
        try { localStorage.setItem(CALC_REMEMBER_KEY, '1'); } catch(_){}
        // Re-render so role-aware UI (Created By column, admin dashboard) shows
        try { render(); } catch(_){}
      } else {
        // Cloud mode: ALWAYS require sign-in if no live session, even if a
        // legacy 'ar2:calc-unlocked' flag is in localStorage from pre-cloud
        // usage. Without this, returning users would be silently locked out
        // (gate skipped + no cloud user = empty calculator).
        try { localStorage.removeItem(CALC_REMEMBER_KEY); } catch(_){}
        CALC_UNLOCKED = false;
        showCalcPasswordModal(function(){ try { render(); } catch(_){} });
      }
    });
  } else if(!CALC_UNLOCKED){
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
  // Quote rich-text editor — preventDefault on toolbar mousedown so the
  // selection / focus inside the contenteditable div survives the click.
  root.addEventListener('mousedown',function(e){
    if(e.target.closest && e.target.closest('.ar-rte-btn')) e.preventDefault();
  });
  // Capture rich-text edits as the rep types; only update Q (no re-render
  // — that would steal focus).
  root.addEventListener('input',function(e){
    if(e.target && e.target.id==='ar2-q-rte'){
      Q.termsHtml = e.target.innerHTML;
      // Live preview panel doesn't reflect HTML body, but a refresh is
      // cheap and keeps Save/Archive in sync.
      if(S.step===3) renderResults();
    }
  });
  // Strip styles on paste into the rich-text editor — only allow plain text
  // through, then re-apply formatting via the toolbar.
  root.addEventListener('paste',function(e){
    if(e.target && e.target.id==='ar2-q-rte'){
      e.preventDefault();
      var text = (e.clipboardData||window.clipboardData).getData('text/plain') || '';
      try { document.execCommand('insertText', false, text); } catch(_){}
    }
  });
  // Auto-grow the .ar-grow textareas inside the Quote step. Re-measure on
  // each input event; cap at 160px, then scroll.
  root.addEventListener('input',function(e){
    var el=e.target;
    if(el && el.tagName==='TEXTAREA' && el.classList && el.classList.contains('ar-grow')){
      el.style.height='auto';
      el.style.height=Math.min(el.scrollHeight, 160)+'px';
    }
  });
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
