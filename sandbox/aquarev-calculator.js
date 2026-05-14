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
    // Email field — only revealed for Client codes after the server prompts
    // for it (HTTP 422 needs_email). Hidden by default for Users/Admins so
    // their flow stays one-field.
    +'<div id="ar2-calc-email-row" style="display:none;text-align:left;margin-bottom:8px">'
      +'<div style="font-size:11.5px;color:#cfe2eb;margin-bottom:4px;letter-spacing:.4px">Your email</div>'
      +'<input id="ar2-calc-email-input" type="email" autocomplete="email" placeholder="you@company.com" style="width:100%;background:rgba(0,0,0,.35);border:1px solid rgba(0,180,216,.35);color:#fff;padding:11px 14px;border-radius:6px;font-size:14px;font-family:inherit;box-sizing:border-box;outline:none" />'
      +'<div style="font-size:10.5px;color:#7db8cc;margin-top:4px;line-height:1.4">First time? We\'ll create a profile for you under this account.</div>'
    +'</div>'
    +'<div id="ar2-calc-pw-err" style="font-size:11px;color:#ef4444;min-height:15px;margin-bottom:8px"></div>'
    // Remember-code checkbox shown in BOTH modes now. In cloud mode the
    // checked code pre-fills the input on next page load — user still has
    // to click Unlock so each session counts as a real login event.
    +'<label style="display:flex;align-items:center;gap:8px;font-size:12px;color:#cfe2eb;margin-bottom:14px;cursor:pointer;user-select:none">'
      +'<input id="ar2-calc-pw-remember" type="checkbox" style="width:14px;height:14px;cursor:pointer;accent-color:#00b4d8" />'
      +'<span>Remember code on this device</span>'
    +'</label>'
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
  // Cloud mode: pre-fill the access code if the user previously checked
  // "Remember code on this device". Pre-fill defaults the checkbox to ON
  // so the user can stay-checked-in. The Unlock button still has to be
  // clicked — that's the explicit auth event we count toward login_count.
  var REMEMBER_CODE_KEY = 'ar2:cloud-remembered-code';
  if(cloudMode){
    try {
      var rcode = localStorage.getItem(REMEMBER_CODE_KEY);
      if(rcode){
        input.value = rcode;
        if(remember) remember.checked = true;
      }
    } catch(_){}
  }

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

  // Email-row helpers — show/hide the email field for the Client two-step flow
  var emailRow = document.getElementById('ar2-calc-email-row');
  var emailInp = document.getElementById('ar2-calc-email-input');
  var REMEMBER_EMAIL_KEY = 'ar2:cloud-remembered-email';
  // Pre-fill remembered email if any
  try {
    var rEmail = localStorage.getItem(REMEMBER_EMAIL_KEY);
    if(rEmail && emailInp) emailInp.value = rEmail;
  } catch(_){}
  function showEmailField(){
    if(!emailRow) return;
    emailRow.style.display='block';
    setTimeout(function(){ try { emailInp.focus(); emailInp.select(); } catch(_){} }, 50);
  }

  // Cloud-mode submit — calls edge function via Cloud.gateLogin.
  // Two-step flow for Clients: first call sends just the code; if the
  // server responds with `email_required`, we reveal the email field and
  // the next click sends both code + email.
  function submitCloud(){
    var code=(input.value||'').trim().toUpperCase();
    if(!code){ err.textContent='Please enter your access code'; return; }
    var email = (emailInp && emailRow && emailRow.style.display !== 'none')
      ? (emailInp.value || '').trim()
      : '';
    err.textContent='';
    unlockBtn.disabled=true;
    unlockBtn.textContent='Signing in…';
    AR2_CLOUD.gateLogin(code, email).then(function(u){
      // Successful login — close gate, run migration prompt, then unlock app
      if(m.parentNode) m.parentNode.removeChild(m);
      CALC_UNLOCKED=true;
      try { localStorage.setItem(CALC_REMEMBER_KEY, '1'); } catch(e){}
      // Save / clear the remembered access code + email based on the checkbox
      try {
        if(remember && remember.checked){
          localStorage.setItem(REMEMBER_CODE_KEY, code);
          if(email) localStorage.setItem(REMEMBER_EMAIL_KEY, email);
          else localStorage.removeItem(REMEMBER_EMAIL_KEY);
        } else {
          localStorage.removeItem(REMEMBER_CODE_KEY);
          localStorage.removeItem(REMEMBER_EMAIL_KEY);
        }
      } catch(e){}
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
      } else if(b.error === 'email_required'){
        // Client code matched — reveal the email field on the same gate.
        // Code stays pre-filled (so user knows what code they're using);
        // they fill email + click Unlock again.
        showEmailField();
        err.textContent = 'This is a shared client account — please enter your email.';
      } else if(b.error === 'invalid_email'){
        showEmailField();
        err.textContent = 'That email looks invalid. Please check and try again.';
      } else if(b.error === 'email_in_use'){
        showEmailField();
        err.textContent = 'That email is already linked to another account. Try a different email.';
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

  function gateLogin(code, email){
    var dev = deviceId();
    var body = { code: code, app_id: APP_ID, device_id: dev };
    if(email) body.email = email;
    return fetch(SUPA_URL + '/functions/v1/gate-login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': SUPA_KEY,
        'Authorization': 'Bearer ' + SUPA_KEY
      },
      body: JSON.stringify(body)
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
          // Use .then(noop,noop) instead of .catch — Supabase's PostgrestBuilder
          // is thenable but doesn't expose .catch directly; calling .catch on
          // it throws "is not a function". This pattern guarantees the chain
          // resolves regardless of RPC success/failure.
          try { c.rpc('track_login').then(function(){}, function(){}); } catch(_){}
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
      // Look up app_user row to get role/name (RLS allows self-read).
      // logo_data is fetched too so Client branding (header text + PDF logo)
      // applies on the very first render after a restored session.
      return c.from('app_users').select('id,email,name,role,active,logo_data').eq('id', sess.user.id).maybeSingle().then(function(rs){
        if(rs.error || !rs.data) return null;
        if(!rs.data.active) { c.auth.signOut(); return null; }
        user = {
          id: rs.data.id,
          name: rs.data.name,
          email: rs.data.email,
          role: rs.data.role,
          // Only Clients have logos. Other roles get null for consistency.
          logo_data: rs.data.role === 'client' ? (rs.data.logo_data || null) : null
        };
        installStorageAdapter();
        // NOTE: track_login is intentionally NOT called here. Cloud mode
        // shows the gate on every page load — each Unlock click in
        // gateLogin() is the explicit auth event we count as a login.
        // restoreSession() is now only used internally as a fallback (e.g.
        // for tabs that already have a live session); it doesn't represent
        // a fresh user-initiated login.
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
      // Sign Out also forgets the remembered access code + email — next
      // user on this device starts from a blank gate.
      localStorage.removeItem('ar2:cloud-remembered-code');
      localStorage.removeItem('ar2:cloud-remembered-email');
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

  // Admin-only: portfolio-aware totals for the top of the dashboard.
  // Returns aggregate counts across assessments + portfolios + properties
  // (hard-deleted records never appear here — Supabase returns only live rows).
  function statsAdminKpis(){
    var c = getClient();
    if(!c || !user || user.role !== 'admin') return Promise.reject(new Error('not_admin'));
    var since7 = new Date(Date.now() - 7*86400000).toISOString();
    // Assessments table stores the full session under `snapshot` jsonb
    // (snapshot.state.bodies, snapshot.state.manualPoolCount, etc.).
    // Older versions of this query asked for a top-level `state` column —
    // that doesn't exist on the schema, which makes the whole Promise reject
    // and leaves the dashboard KPIs at their em-dash placeholder.
    return Promise.all([
      c.from('assessments').select('id,created_at,summary,snapshot').eq('app_id', APP_ID),
      c.from('portfolios').select('id,created_at'),
      c.from('portfolio_properties').select('id,state_json,computed_kpis,excluded_from_rollup,created_at')
    ]).then(function(arr){
      var asRes = arr[0], pfRes = arr[1], ppRes = arr[2];
      if (asRes.error) throw asRes.error;
      if (pfRes.error) throw pfRes.error;
      if (ppRes.error) throw ppRes.error;
      var ass = asRes.data || [], pfs = pfRes.data || [], pps = ppRes.data || [];
      var recordsLast7Days = 0;
      var poolsTotal = 0, valueTotal = 0;
      ass.forEach(function(r){
        if (r.created_at && r.created_at >= since7) recordsLast7Days++;
        // snapshot.state holds the bodies array; legacy records may have
        // bodies directly on snapshot. Try both for robustness.
        var snap = r.snapshot || {};
        var st = snap.state || snap || {};
        var bodies = Array.isArray(st.bodies) ? st.bodies : [];
        if (st.manualVolume) poolsTotal += Math.max(1, Number(st.manualPoolCount) || 1);
        else                 poolsTotal += bodies.length;
        var sum = r.summary || {};
        valueTotal += Number(sum.inv) || 0;
      });
      pfs.forEach(function(r){
        if (r.created_at && r.created_at >= since7) recordsLast7Days++;
      });
      pps.forEach(function(r){
        var sj = r.state_json || {};
        var bodies = Array.isArray(sj.bodies) ? sj.bodies : [];
        if (sj.manualVolume) poolsTotal += Math.max(1, Number(sj.manualPoolCount) || 1);
        else                 poolsTotal += bodies.length;
        var k = r.computed_kpis || {};
        valueTotal += Number(k.inv) || 0;
      });
      return {
        recordsLast7Days: recordsLast7Days,
        assessmentsTotal: ass.length,
        portfoliosTotal:  pfs.length,
        propertiesTotal:  pps.length,
        poolsTotal:       poolsTotal,
        valueTotal:       valueTotal
      };
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
    statsAdminKpis:  statsAdminKpis,
    stats90DailyByUser: stats90DailyByUser,
    adminUserStats: adminUserStats,
    isClient: function(){ return !!user && user.role === 'client'; },
    adminCreateUser: function(name, code, role, logoDataUrl){
      var c = getClient();
      if(!c || !user || user.role !== 'admin') return Promise.reject(new Error('not_admin'));
      return c.rpc('admin_create_user', {
        p_name: name,
        p_code: code,
        p_role: role,
        p_logo_data: logoDataUrl || null
      }).then(function(r){
        if(r.error) throw r.error;
        return r.data;
      });
    },
    adminSetUserLogo: function(userId, logoDataUrl){
      var c = getClient();
      if(!c || !user || user.role !== 'admin') return Promise.reject(new Error('not_admin'));
      return c.rpc('admin_set_user_logo', {
        p_user_id: userId,
        p_logo_data: logoDataUrl || null
      }).then(function(r){
        if(r.error) throw r.error;
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
    adminDeleteUser: function(userId, transferToUserId){
      var c = getClient();
      if(!c || !user || user.role !== 'admin') return Promise.reject(new Error('not_admin'));
      return c.rpc('admin_delete_user', {
        p_user_id: userId,
        p_transfer_to_user_id: transferToUserId || null
      }).then(function(r){
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

/* ════════════════════════════════════════════════════════════════════
   AR2_PF — Portfolio Tool namespace (SANDBOX BUILD, Phase 1)
   Production calculator does not include this code path; this lives only
   in the sandbox master HTML at /calculator-sandbox.
   Strict isolation contract:
     - Uses its OWN state object (pfState). Never reads or writes AR2_CLOUD
       internals or single-property state (S, Q, EX).
     - All UI selectors are .ar-pf-* prefixed. No collisions with existing
       .ar-* classes.
     - Database calls only against the new portfolios / portfolio_properties
       / portfolio_quotes tables. Existing assessments / quotes tables are
       never touched by this code.
     - When user is Client role (or AR2_CLOUD not ready), isEnabled() is
       false and the entire feature is dormant — archive renders exactly
       as it does on production.
   ════════════════════════════════════════════════════════════════════ */
window.AR2_PF = (function(){
  var pfState = {
    initialized: false,
    enabled: false,
    activeTab: 'single',         // 'single' | 'portfolios'
    portfolios: null,            // null = not loaded yet; array once loaded
    loading: false,
    loadError: null,
    // Phase 1b — Portfolio Overview navigation
    viewMode: 'list',            // 'list' | 'overview'
    selectedPortfolioId: null,   // when viewMode === 'overview'
    properties: {},              // { [portfolioId]: { rows, loading, error } }
    rollup: {},                  // { [portfolioId]: { data, loading, error } }
    // Phase 1c — Property mode (calculator scoped to one portfolio property)
    propertyMode: false,
    loadedProperty: null,        // full portfolio_properties row currently open
    savedSnapshot: null,         // { S, EX } captured before entering property mode
    saveStatus: 'idle',          // 'idle' | 'saving' | 'saved' | 'error'
    saveError: null,
    saveTimer: null,             // debounce handle for autosave
    AUTOSAVE_DEBOUNCE_MS: 1500
  };

  // AR2_CLOUD's public API exposes `getClient` (not `client`). Using the
  // correct name here is critical — without it, every Supabase call in
  // this namespace silently rejects with "cloud not ready".
  function client(){
    return window.AR2_CLOUD && AR2_CLOUD.getClient && AR2_CLOUD.getClient();
  }
  function user(){
    return window.AR2_CLOUD && AR2_CLOUD.user && AR2_CLOUD.user();
  }

  // Called once when AR2_CLOUD signals it's ready (or on first archive open
  // if AR2_CLOUD was already ready). Decides whether the portfolio feature
  // is available for this user.
  function init(){
    if (pfState.initialized) return;
    pfState.initialized = true;
    if (!window.AR2_CLOUD || !AR2_CLOUD.isReady()) return;
    var u = user();
    // Clients are explicitly excluded per Phase 1 product decision.
    if (!u || u.role === 'client') { pfState.enabled = false; return; }
    pfState.enabled = true;
  }

  function isEnabled(){ return pfState.enabled === true; }
  function activeTab(){ return pfState.activeTab; }

  function setActiveTab(tab){
    if (tab !== 'single' && tab !== 'portfolios') return;
    if (pfState.activeTab === tab) return;
    pfState.activeTab = tab;
    if (typeof renderArchive === 'function') renderArchive();
  }

  // Fetch portfolio list for the current user. Idempotent — pfState.portfolios
  // caches the result. Call refreshPortfolios() to force a reload.
  function loadPortfolios(){
    if (pfState.loading) return Promise.resolve(pfState.portfolios);
    if (pfState.portfolios !== null) return Promise.resolve(pfState.portfolios);
    var c = client();
    if (!c) return Promise.reject(new Error('cloud not ready'));
    pfState.loading = true;
    pfState.loadError = null;
    return c.from('portfolios')
      .select('id,name,status,default_currency,client_contact_name,last_modified_at,created_at,user_id')
      .order('last_modified_at', { ascending: false })
      .then(function(rs){
        pfState.loading = false;
        if (rs.error) { pfState.loadError = rs.error.message || 'load failed'; pfState.portfolios = []; }
        else { pfState.portfolios = rs.data || []; }
        return pfState.portfolios;
      }, function(err){
        pfState.loading = false;
        pfState.loadError = (err && err.message) || 'load failed';
        pfState.portfolios = [];
        return pfState.portfolios;
      });
  }

  function refreshPortfolios(){
    pfState.portfolios = null;
    return loadPortfolios();
  }

  // Delete a portfolio (and cascade-delete all properties via FK ON DELETE
  // CASCADE in the schema). RLS already gates this so users can only delete
  // their own; admins can delete any.
  function deletePortfolio(portfolioId){
    var c = client();
    if (!c) return Promise.reject(new Error('cloud not ready'));
    if (!portfolioId) return Promise.reject(new Error('portfolio id required'));
    return c.from('portfolios').delete().eq('id', portfolioId).then(function(rs){
      if (rs.error) throw new Error(rs.error.message);
      // Drop from local caches so the Archive re-renders without the row.
      if (Array.isArray(pfState.portfolios)){
        pfState.portfolios = pfState.portfolios.filter(function(p){ return p.id !== portfolioId; });
      }
      if (pfState.properties)      pfState.properties[portfolioId]      = null;
      if (pfState.rollup)          pfState.rollup[portfolioId]          = null;
      if (pfState.propertyStates)  pfState.propertyStates[portfolioId]  = null;
      if (pfState.quoteState)      pfState.quoteState[portfolioId]      = null;
      if (pfState.exportState)     pfState.exportState[portfolioId]     = null;
      // If the deleted portfolio was selected, drop back to the list view.
      if (pfState.selectedPortfolioId === portfolioId){
        pfState.selectedPortfolioId = null;
        pfState.viewMode = 'list';
      }
      return true;
    });
  }

  // Create a new portfolio. Returns the inserted row.
  function createPortfolio(name){
    var c = client();
    var u = user();
    if (!c || !u) return Promise.reject(new Error('cloud not ready'));
    var trimmed = String(name || '').trim();
    if (!trimmed) return Promise.reject(new Error('Name required'));
    return c.from('portfolios')
      .insert({ user_id: u.id, name: trimmed, status: 'draft' })
      .select('id,name,status,default_currency,client_contact_name,last_modified_at,created_at,user_id')
      .single()
      .then(function(rs){
        if (rs.error) throw new Error(rs.error.message);
        // Prepend to local cache so the UI updates without a full refetch
        if (pfState.portfolios === null) pfState.portfolios = [];
        pfState.portfolios = [rs.data].concat(pfState.portfolios);
        return rs.data;
      });
  }

  // Roll-up RPC — server-side aggregation over portfolio_properties.
  // Returns the JSONB result documented in the SQL migration.
  function rollup(portfolioId){
    var c = client();
    if (!c) return Promise.reject(new Error('cloud not ready'));
    return c.rpc('portfolio_rollup', { p_portfolio_id: portfolioId })
      .then(function(rs){
        if (rs.error) throw new Error(rs.error.message);
        return rs.data;
      });
  }

  // ─── UI: Tab strip + Portfolio panel ──────────────────────────────
  function tabStripHtml(){
    var single = pfState.activeTab === 'single';
    return '<div class="ar-pf-tabstrip" role="tablist">'
      + '<button class="ar-pf-tab' + (single?' active':'') + '" data-pf-tab="single" role="tab" type="button">Single Assessments</button>'
      + '<button class="ar-pf-tab' + (!single?' active':'') + '" data-pf-tab="portfolios" role="tab" type="button">Portfolios'
      +   (Array.isArray(pfState.portfolios) && pfState.portfolios.length
            ? ' <span class="ar-pf-tab-count">'+pfState.portfolios.length+'</span>'
            : '')
      + '</button>'
      + '</div>';
  }

  // Render the Portfolios panel into the given mount element.
  // Dispatches by viewMode: 'list' shows the portfolios collection;
  // 'overview' shows the Portfolio Overview for the selected portfolio.
  function renderPortfoliosPanel(mount){
    if (!mount) return;
    if (pfState.viewMode === 'export' && pfState.selectedPortfolioId){
      return renderPortfolioExport(mount);
    }
    if (pfState.viewMode === 'quote-builder' && pfState.selectedPortfolioId){
      return renderQuoteBuilder(mount);
    }
    if (pfState.viewMode === 'overview' && pfState.selectedPortfolioId){
      return renderPortfolioOverview(mount);
    }
    // Hero header (always shown)
    var hero = '<div class="ar-pf-panel-hero">'
      +   '<div>'
      +     '<div class="ar-pf-panel-title">Portfolios</div>'
      +     '<div class="ar-pf-panel-sub">Multi-property proposals · sandbox preview</div>'
      +   '</div>'
      +   '<button class="ar-pf-newbtn" data-pf-action="new-portfolio" type="button">New Portfolio</button>'
      + '</div>';

    // Loading state — only on first fetch
    if (pfState.portfolios === null) {
      mount.innerHTML = '<div class="ar-pf-panel">' + hero
        + '<div class="ar-pf-empty" style="opacity:.7">Loading portfolios…</div>'
        + '</div>';
      loadPortfolios().then(function(){
        // Re-look up by ID — see comment in renderPortfolioOverview for
        // why we don't capture `mount` in closure.
        var live = document.getElementById('ar2-bank-portfolios');
        if (live) renderPortfoliosPanel(live);
      });
      return;
    }

    // Error state
    if (pfState.loadError) {
      mount.innerHTML = '<div class="ar-pf-panel">' + hero
        + '<div class="ar-pf-empty">'
        +   '<div class="ar-pf-empty-icon" style="color:#f87171;border-color:rgba(239,68,68,.32);background:rgba(239,68,68,.12)">!</div>'
        +   '<div class="ar-pf-empty-title">Couldn\'t load portfolios</div>'
        +   '<div class="ar-pf-empty-body">' + esc(pfState.loadError) + '</div>'
        + '</div></div>';
      return;
    }

    // Empty state
    if (!pfState.portfolios.length) {
      mount.innerHTML = '<div class="ar-pf-panel">' + hero
        + '<div class="ar-pf-empty">'
        +   '<div class="ar-pf-empty-icon">P</div>'
        +   '<div class="ar-pf-empty-title">No portfolios yet</div>'
        +   '<div class="ar-pf-empty-body">'
        +     'Build a multi-property proposal by creating a portfolio, then add each property\'s pool profile, devices and savings. Portfolio totals roll up automatically.'
        +   '</div>'
        +   '<button class="ar-pf-newbtn" data-pf-action="new-portfolio" type="button">Create your first portfolio</button>'
        + '</div></div>';
      return;
    }

    // Populated list (Phase 1: simple rows; Phase 2 = full roster grid)
    var rows = pfState.portfolios.map(function(p){
      var dateStr = p.last_modified_at
        ? new Date(p.last_modified_at).toLocaleDateString('en-US',{month:'short',day:'numeric',year:'numeric'})
        : '—';
      var statusClass = (p.status || 'draft').toLowerCase();
      return '<div class="ar-pf-row" data-pf-portfolio="' + p.id + '" role="button" tabindex="0">'
        +   '<div>'
        +     '<div class="ar-pf-row-name">' + esc(p.name || 'Untitled portfolio') + '</div>'
        +     '<div class="ar-pf-row-meta">' + (p.client_contact_name ? esc(p.client_contact_name) + ' · ' : '') + dateStr + '</div>'
        +   '</div>'
        +   '<span class="ar-pf-row-status ' + statusClass + '">' + esc(p.status || 'draft').replace('_',' ') + '</span>'
        +   '<div class="ar-pf-row-kpi"><div class="v">—</div><div class="l">Properties</div></div>'
        +   '<div class="ar-pf-row-kpi"><div class="v">—</div><div class="l">Investment</div></div>'
        + '</div>';
    }).join('');

    mount.innerHTML = '<div class="ar-pf-panel">' + hero
      + '<div class="ar-pf-list">' + rows + '</div>'
      + '</div>';
  }

  // ─── New Portfolio modal ──────────────────────────────────────────
  function openNewPortfolioModal(){
    if (document.getElementById('ar-pf-new-modal')) return;
    var backdrop = document.createElement('div');
    backdrop.id = 'ar-pf-new-modal';
    backdrop.className = 'ar-pf-modal-backdrop';
    backdrop.innerHTML = '<div class="ar-pf-modal" role="dialog" aria-modal="true" aria-labelledby="ar-pf-new-title">'
      + '<div class="ar-pf-modal-title" id="ar-pf-new-title">New portfolio</div>'
      + '<label class="ar-pf-modal-lbl" for="ar-pf-new-name">Portfolio name</label>'
      + '<input class="ar-pf-modal-input" id="ar-pf-new-name" type="text" maxlength="120" placeholder="e.g. Marriott LATAM Phase 1" autocomplete="off" />'
      + '<div class="ar-pf-modal-err" id="ar-pf-new-err"></div>'
      + '<div class="ar-pf-modal-actions">'
      +   '<button class="ar-pf-modal-btn" data-pf-action="modal-cancel" type="button">Cancel</button>'
      +   '<button class="ar-pf-modal-btn primary" data-pf-action="modal-create" type="button">Create</button>'
      + '</div>'
      + '</div>';
    document.body.appendChild(backdrop);
    setTimeout(function(){ var i = document.getElementById('ar-pf-new-name'); if (i) i.focus(); }, 30);
    // Click delegate scoped TO the modal itself, not to #ar2. The main app's
    // click handler is bound to #ar2, but this modal is mounted at document
    // .body level so its events never bubble there. Without this listener,
    // Cancel and Create buttons were inert. Backdrop click also closes.
    backdrop.addEventListener('click', function(e){
      if (e.target === backdrop) { closeNewPortfolioModal(); return; }
      var act = e.target.closest('[data-pf-action]');
      if (!act) return;
      var a = act.getAttribute('data-pf-action');
      if (a === 'modal-cancel') { closeNewPortfolioModal(); return; }
      if (a === 'modal-create') { submitNewPortfolio();     return; }
    });
    // Keyboard: Esc closes, Enter on the name input submits.
    backdrop.addEventListener('keydown', function(e){
      if (e.key === 'Escape') closeNewPortfolioModal();
      if (e.key === 'Enter' && e.target.id === 'ar-pf-new-name') submitNewPortfolio();
    });
  }
  function closeNewPortfolioModal(){
    var el = document.getElementById('ar-pf-new-modal');
    if (el && el.parentNode) el.parentNode.removeChild(el);
  }
  function submitNewPortfolio(){
    var input = document.getElementById('ar-pf-new-name');
    var err = document.getElementById('ar-pf-new-err');
    var btn = document.querySelector('[data-pf-action="modal-create"]');
    if (!input) return;
    var name = input.value.trim();
    if (!name) { if (err) err.textContent = 'Name is required.'; input.focus(); return; }
    if (btn) { btn.disabled = true; btn.textContent = 'Creating…'; }
    createPortfolio(name).then(function(){
      closeNewPortfolioModal();
      // Stay on Portfolios tab, re-render to show the new row
      pfState.activeTab = 'portfolios';
      if (typeof renderArchive === 'function') renderArchive();
    }).catch(function(e){
      if (btn) { btn.disabled = false; btn.textContent = 'Create'; }
      if (err) err.textContent = (e && e.message) || 'Create failed.';
    });
  }

  // ════════════════════════════════════════════════════════════════
  // Phase 1b — Portfolio Overview, Properties, Add Property
  // ════════════════════════════════════════════════════════════════

  // Look up a portfolio header from the cached portfolios list. Used by
  // the overview renderer to pull the portfolio name/status without an
  // extra fetch. Returns undefined if not in cache.
  function getPortfolio(id){
    if (!pfState.portfolios) return undefined;
    for (var i = 0; i < pfState.portfolios.length; i++){
      if (pfState.portfolios[i].id === id) return pfState.portfolios[i];
    }
    return undefined;
  }

  // Fetch the property list for a portfolio. Cached in pfState.properties
  // keyed by portfolioId. Each entry: { rows, loading, error }.
  function loadProperties(portfolioId){
    if (!portfolioId) return Promise.resolve([]);
    var slot = pfState.properties[portfolioId] || {};
    if (slot.loading) return Promise.resolve(slot.rows || []);
    if (slot.rows)    return Promise.resolve(slot.rows);
    var c = client();
    if (!c) return Promise.reject(new Error('cloud not ready'));
    slot.loading = true;
    slot.error = null;
    pfState.properties[portfolioId] = slot;
    return c.from('portfolio_properties')
      .select('id,portfolio_id,property_name,order_index,country,formatted_address,computed_kpis,excluded_from_rollup,created_at,updated_at')
      .eq('portfolio_id', portfolioId)
      .order('order_index', { ascending: true })
      .order('created_at',  { ascending: true })
      .then(function(rs){
        slot.loading = false;
        if (rs.error) { slot.error = rs.error.message || 'load failed'; slot.rows = []; }
        else          { slot.rows  = rs.data || []; }
        return slot.rows;
      }, function(err){
        slot.loading = false;
        slot.error = (err && err.message) || 'load failed';
        slot.rows = [];
        return slot.rows;
      });
  }
  /* P5: fetch full state_json blobs for all properties in a portfolio.
     loadProperties() omits state_json for roster performance; line items
     roll-up needs it. Cached separately so the roster fetch stays light. */
  function loadPropertyStates(portfolioId){
    if (!portfolioId) return Promise.resolve([]);
    if (!pfState.propertyStates) pfState.propertyStates = {};
    var slot = pfState.propertyStates[portfolioId] || {};
    if (slot.loading) return Promise.resolve(slot.rows || []);
    if (slot.rows)    return Promise.resolve(slot.rows);
    var c = client();
    if (!c) return Promise.reject(new Error('cloud not ready'));
    slot.loading = true;
    pfState.propertyStates[portfolioId] = slot;
    return c.from('portfolio_properties')
      .select('id,property_name,state_json,formatted_address,excluded_from_rollup')
      .eq('portfolio_id', portfolioId)
      .order('order_index', { ascending: true })
      .order('created_at',  { ascending: true })
      .then(function(rs){
        slot.loading = false;
        if (rs.error){ slot.rows = []; }
        else         { slot.rows = (rs.data || []).filter(function(r){ return !r.excluded_from_rollup; }); }
        return slot.rows;
      }, function(){
        slot.loading = false;
        slot.rows = [];
        return slot.rows;
      });
  }
  /* P5: compute the line items roll-up. PIPES is a flat catalog so we
     loop it once, summing each property's pipe_Nin field. overrides shape:
     { pipe_2in: { qty: <num>|null, price: <num>|null } } — null means
     "use auto"; a number overrides the rolled-up value. */
  function computeLineItemsRollup(propertyRows, overrides){
    overrides = overrides || {};
    if (typeof PIPES === 'undefined') return [];
    return PIPES.map(function(spec){
      var ov = overrides[spec.k] || {};
      // Auto qty: sum the SKU count across all properties' state_json.
      var autoQty = 0;
      var perProp = [];
      for (var i = 0; i < propertyRows.length; i++){
        var r = propertyRows[i];
        var sj = r.state_json || {};
        var n = Number(sj[spec.k]) || 0;
        if (n > 0){
          perProp.push({ id: r.id, name: r.property_name || 'Property', qty: n });
          autoQty += n;
        }
      }
      var qty = (ov.qty != null && ov.qty !== '') ? Number(ov.qty)   : autoQty;
      var price = (ov.price != null && ov.price !== '') ? Number(ov.price) : spec.price;
      return {
        sku: spec.k,
        label: spec.sz + ' AquaRev Device',
        flow: spec.flow,
        autoQty: autoQty,
        autoPrice: spec.price,
        qty: qty,
        price: price,
        total: qty * price,
        hasOverride: !!(ov.qty != null && ov.qty !== '') || !!(ov.price != null && ov.price !== ''),
        breakdown: perProp
      };
    }).filter(function(row){ return row.qty > 0 || row.hasOverride; });
  }

  function refreshProperties(portfolioId){
    if (pfState.properties[portfolioId]) pfState.properties[portfolioId].rows = null;
    return loadProperties(portfolioId);
  }

  // Compute the next order_index for a new property in this portfolio.
  // Phase 1b ordering: append to the bottom. Phase 2 will add drag-to-
  // reorder; until then order_index is just an append counter.
  function nextOrderIndex(portfolioId){
    var rows = (pfState.properties[portfolioId] && pfState.properties[portfolioId].rows) || [];
    var maxIdx = -1;
    for (var i = 0; i < rows.length; i++){
      var o = rows[i].order_index;
      if (typeof o === 'number' && o > maxIdx) maxIdx = o;
    }
    return maxIdx + 1;
  }

  // Create a new property in the given portfolio. Server-side defaults
  // populate empty state_json / ex_json / computed_kpis. The newly-
  // created row is appended to the local cache so the roster updates
  // without a refetch.
  function createProperty(portfolioId, name){
    var c = client();
    if (!c) return Promise.reject(new Error('cloud not ready'));
    var trimmed = String(name || '').trim();
    if (!portfolioId) return Promise.reject(new Error('portfolio required'));
    if (!trimmed)     return Promise.reject(new Error('Name required'));
    return c.from('portfolio_properties')
      .insert({
        portfolio_id: portfolioId,
        property_name: trimmed,
        order_index: nextOrderIndex(portfolioId)
      })
      .select('id,portfolio_id,property_name,order_index,country,formatted_address,computed_kpis,excluded_from_rollup,created_at,updated_at')
      .single()
      .then(function(rs){
        if (rs.error) throw new Error(rs.error.message);
        var slot = pfState.properties[portfolioId] || { rows: [], loading: false, error: null };
        slot.rows = (slot.rows || []).concat([rs.data]);
        pfState.properties[portfolioId] = slot;
        // Roll-up changes → invalidate the cached aggregate so the KPI
        // strip pulls fresh numbers on next render.
        pfState.rollup[portfolioId] = null;
        return rs.data;
      });
  }

  // Server-side roll-up of computed_kpis. Cached per portfolio; null
  // entries trigger a fresh fetch.
  function getRollup(portfolioId){
    var slot = pfState.rollup[portfolioId];
    if (slot && slot.data) return Promise.resolve(slot.data);
    if (slot && slot.loading) return Promise.resolve(null);
    pfState.rollup[portfolioId] = { data: null, loading: true, error: null };
    return rollup(portfolioId).then(function(data){
      pfState.rollup[portfolioId] = { data: data, loading: false, error: null };
      return data;
    }, function(err){
      pfState.rollup[portfolioId] = { data: null, loading: false, error: (err && err.message) || 'rollup failed' };
      return null;
    });
  }

  /* ── P4: portfolio_quotes load + save ──────────────────────────────
     Loads the existing quote row for a portfolio (or null), and upserts
     it back. The schema has dedicated columns for the most-used fields
     (buyer_name, buyer_email, portfolio_discount_pct, tax_rate,
     shipping_cost, shipping_term, notes) and a quote_state jsonb for
     everything else (phone, bill-to, deposit, balance terms, std terms,
     status). loadQuote merges both halves into a flat in-memory shape
     that matches getQuoteState().
     ─────────────────────────────────────────────────────────────────── */
  function loadQuote(portfolioId){
    var c = client();
    if (!c || !portfolioId) return Promise.resolve(null);
    return c.from('portfolio_quotes')
      .select('id,portfolio_id,quote_state,portfolio_discount_pct,shipping_cost,shipping_term,tax_rate,buyer_name,buyer_email,notes')
      .eq('portfolio_id', portfolioId)
      .maybeSingle()
      .then(function(rs){
        if (rs.error) throw new Error(rs.error.message);
        if (!rs.data) return null;
        var qs = rs.data.quote_state || {};
        var q = _defaultQuoteState();
        q.buyerName       = rs.data.buyer_name || '';
        q.buyerEmail      = rs.data.buyer_email || '';
        q.buyerPhone      = qs.buyerPhone || '';
        q.billTo          = qs.billTo || '';
        q.discountPct     = Number(rs.data.portfolio_discount_pct) || 0;
        q.taxRate         = Number(rs.data.tax_rate) || 0;
        q.shippingCost    = Number(rs.data.shipping_cost) || 0;
        q.shippingTerm    = rs.data.shipping_term || '';
        q.depositPct      = Number(qs.depositPct) || 0;
        q.depositDueDate  = qs.depositDueDate || '';
        q.balanceDueTerms = qs.balanceDueTerms || '';
        q.stdTerms        = qs.stdTerms || '';
        q.purchaseTerms   = (qs.purchaseTerms != null) ? qs.purchaseTerms : (typeof QUOTE_DEFAULT_TERMS !== 'undefined' ? QUOTE_DEFAULT_TERMS : '');
        q.notes           = rs.data.notes || '';
        q.status          = qs.status || 'draft';
        q.lineOverrides   = qs.lineOverrides || {};
        q.shipTos         = qs.shipTos || { mode:'split', perProp:{}, consolidated:{address:'',notes:''} };
        // Cache into pfState so renderQuoteBuilder picks it up.
        if (!pfState.quoteState) pfState.quoteState = {};
        pfState.quoteState[portfolioId] = q;
        // If a quote row exists, mark the Export panel section as Ready
        // so it can be toggled on without re-saving from scratch.
        if (!pfState.exportState) pfState.exportState = {};
        if (!pfState.exportState[portfolioId]) pfState.exportState[portfolioId] = _defaultExportState();
        pfState.exportState[portfolioId].quoteReady = true;
        return q;
      });
  }
  function saveQuote(portfolioId, q){
    var c = client();
    if (!c || !portfolioId) return Promise.reject(new Error('cloud not ready'));
    // Pack non-column fields into quote_state jsonb
    var quoteState = {
      buyerPhone:      q.buyerPhone || '',
      billTo:          q.billTo || '',
      depositPct:      Number(q.depositPct) || 0,
      depositDueDate:  q.depositDueDate || '',
      balanceDueTerms: q.balanceDueTerms || '',
      stdTerms:        q.stdTerms || '',
      purchaseTerms:   q.purchaseTerms || '',
      status:          q.status || 'draft',
      lineOverrides:   q.lineOverrides || {},
      shipTos:         q.shipTos || { mode:'split', perProp:{}, consolidated:{address:'',notes:''} }
    };
    var payload = {
      portfolio_id:           portfolioId,
      buyer_name:             q.buyerName || '',
      buyer_email:            q.buyerEmail || '',
      portfolio_discount_pct: Number(q.discountPct) || 0,
      tax_rate:               Number(q.taxRate) || 0,
      shipping_cost:          Number(q.shippingCost) || 0,
      shipping_term:          q.shippingTerm || '',
      notes:                  q.notes || '',
      quote_state:            quoteState
    };
    // Upsert by portfolio_id (UNIQUE constraint in the schema makes this
    // safe). Returns the row so we can confirm the write.
    return c.from('portfolio_quotes')
      .upsert(payload, { onConflict: 'portfolio_id' })
      .select('id,portfolio_id')
      .single()
      .then(function(rs){
        if (rs.error) throw new Error(rs.error.message);
        return rs.data;
      });
  }

  // ── Navigation: list ↔ overview ↔ export ↔ quote-builder ──────
  function openPortfolio(portfolioId){
    if (!portfolioId) return;
    pfState.selectedPortfolioId = portfolioId;
    pfState.viewMode = 'overview';
    if (typeof renderArchive === 'function') renderArchive();
  }
  function backToPortfoliosList(){
    pfState.viewMode = 'list';
    pfState.selectedPortfolioId = null;
    if (typeof renderArchive === 'function') renderArchive();
  }
  // Portfolio Export panel — section toggles + Preview/Download/Archive
  // CTAs. The Portfolio Quote section is unlocked from here via the
  // "Unlock & Configure" affordance, which routes into the Quote builder.
  function openExport(portfolioId){
    if (portfolioId) pfState.selectedPortfolioId = portfolioId;
    if (!pfState.selectedPortfolioId) return;
    pfState.viewMode = 'export';
    // Lazy-load properties so we can show "X properties" counts in the
    // section toggles. Roster is already cached when arriving from Overview.
    if (typeof renderArchive === 'function') renderArchive();
  }
  function backToOverview(){
    if (!pfState.selectedPortfolioId){
      // No portfolio selected — fall all the way back to the list.
      pfState.viewMode = 'list';
    } else {
      pfState.viewMode = 'overview';
    }
    if (typeof renderArchive === 'function') renderArchive();
  }
  // Quote builder — full-screen surface that replaces the Export panel.
  // The "Back to Export" button returns the rep so the section toggles
  // can be reviewed with the Quote now unlocked.
  function openQuoteBuilder(portfolioId){
    if (portfolioId) pfState.selectedPortfolioId = portfolioId;
    if (!pfState.selectedPortfolioId) return;
    // Dirty-state guard — if the rep is in property mode with pending
    // edits, the Quote rolls up stale data. Save first.
    if (pfState.propertyMode && pfState.loadedProperty){
      var ok = confirm(
        '"' + (pfState.loadedProperty.property_name || 'This property') + '" hasn\'t been saved yet.' +
        '\n\nThe Portfolio Quote pulls live data from saved properties, so we need to save it first.' +
        '\n\nSave and continue?'
      );
      if (!ok) return;
      saveCurrentProperty().then(function(){
        exitProperty().then(function(){
          pfState.viewMode = 'quote-builder';
          if (typeof renderArchive === 'function') renderArchive();
        });
      }).catch(function(e){
        alert('Could not save property: ' + ((e && e.message) || 'unknown error'));
      });
      return;
    }
    pfState.viewMode = 'quote-builder';
    if (typeof renderArchive === 'function') renderArchive();
    // Hydrate from the DB after the first paint so existing values land in
    // the form. We don't await this — the builder renders defaults first,
    // then re-renders with persisted values when the load completes.
    var pid = pfState.selectedPortfolioId;
    if (pid){
      loadQuote(pid).then(function(q){
        if (!q) return;
        var mount = document.getElementById('ar2-bank-overview-mount');
        if (mount && pfState.viewMode === 'quote-builder') renderQuoteBuilder(mount);
      }).catch(function(_){});
    }
  }
  function backFromQuoteBuilder(){
    pfState.viewMode = 'export';
    if (typeof renderArchive === 'function') renderArchive();
  }

  // ── Portfolio Overview render ──────────────────────────────────
  // Mounts: header (portfolio name + back btn), KPI strip (rollup
  // aggregates), property roster (rows), add-property CTA.
  function renderPortfolioOverview(mount){
    if (!mount) return;
    var pid = pfState.selectedPortfolioId;
    if (!pid){ pfState.viewMode = 'list'; return renderPortfoliosPanel(mount); }
    var p = getPortfolio(pid);
    var headerName = p ? (p.name || 'Untitled portfolio') : 'Loading…';
    var statusClass = ((p && p.status) || 'draft').toLowerCase();
    var statusLabel = ((p && p.status) || 'draft').replace('_',' ');

    // Hero: back btn + portfolio name + status + action group
    // Action group (right-pinned via margin-left:auto): Quote · Export · + Add Property.
    // Order matches the natural workflow — capture properties (right), prepare
    // the quote (middle), package the export (left). Quote + Export wire up in
    // the next sandbox pass (P3); for now they show a "coming soon" placeholder
    // so the layout is visible and testable.
    var hero = '<div class="ar-pf-ov-hero">'
      +   '<button class="ar-pf-back" data-pf-action="back-to-list" type="button" aria-label="Back to portfolios">&#x2190; Portfolios</button>'
      +   '<div class="ar-pf-ov-title-wrap">'
      +     '<div class="ar-pf-ov-title">' + esc(headerName) + '</div>'
      +     '<div class="ar-pf-ov-meta">'
      +       '<span class="ar-pf-row-status ' + statusClass + '">' + esc(statusLabel) + '</span>'
      +     '</div>'
      +   '</div>'
      +   '<div class="ar-pf-ov-actions">'
      +     '<button class="ar-pf-actbtn" data-pf-action="open-quote" type="button" title="Configure the Portfolio Quote">Quote</button>'
      +     '<button class="ar-pf-actbtn primary" data-pf-action="open-export" type="button" title="Package the portfolio for export and distribution">Export &rarr;</button>'
      +     '<button class="ar-pf-actbtn" data-pf-action="import-csv" type="button" title="Bulk-import properties from a CSV / Excel template">&uarr; Import CSV</button>'
      +     '<button class="ar-pf-newbtn" data-pf-action="new-property" type="button">Add Property</button>'
      +   '</div>'
      + '</div>';

    // KPI strip — pulls aggregates from getRollup(). Renders a "loading"
    // skeleton on first paint, then re-renders with the data.
    var rollupSlot = pfState.rollup[pid];
    var r = rollupSlot && rollupSlot.data;
    var kpiLine = function(lbl, val, color){
      return '<div class="ar-pf-kpi">'
        +   '<div class="ar-pf-kpi-lbl">' + esc(lbl) + '</div>'
        +   '<div class="ar-pf-kpi-val' + (color ? ' ' + color : '') + '">' + val + '</div>'
        + '</div>';
    };
    var kpis;
    if (!r){
      kpis = '<div class="ar-pf-kpistrip">'
        + kpiLine('Properties', '—')
        + kpiLine('Devices',    '—')
        + kpiLine('Pool Volume','—')
        + kpiLine('Monthly',    '—')
        + kpiLine('Annual',     '—')
        + kpiLine('Payback',    '—')
        + '</div>';
    } else {
      var nProp = Number(r.property_count) || 0;
      var nDev  = Number(r.total_dev)      || 0;
      var totGal= Number(r.total_pool_gal) || 0;
      var mo    = Number(r.total_mo)       || 0;
      var yr    = Number(r.total_yr)       || 0;
      var pay   = r.blended_payback_mo == null ? null : Number(r.blended_payback_mo);
      // Pool volume — show K / M suffix to keep the tile compact at scale
      var gallonsStr = (totGal >= 1e6 ? (totGal/1e6).toFixed(1)+'M' :
                        totGal >= 1e3 ? (totGal/1e3).toFixed(0)+'K' :
                        String(Math.round(totGal))) + ' gal';
      kpis = '<div class="ar-pf-kpistrip">'
        + kpiLine('Properties', String(nProp))
        + kpiLine('Devices',    String(nDev), 'teal')
        + kpiLine('Pool Volume',gallonsStr)
        + kpiLine('Monthly',    (mo  ? fc(mo,0)  : '—'), mo ? 'green' : '')
        + kpiLine('Annual',     (yr  ? fc(yr,0)  : '—'), yr ? 'green' : '')
        + kpiLine('Payback',    (pay && pay>0 ? Math.round(pay)+' mo' : '—'), 'teal')
        + '</div>';
    }

    // Roster — empty state OR list of property cards
    var slot = pfState.properties[pid];
    var roster;
    if (!slot || (slot.loading && !slot.rows)){
      roster = '<div class="ar-pf-empty" style="opacity:.7">Loading properties…</div>';
    } else if (slot.error){
      roster = '<div class="ar-pf-empty">'
        + '<div class="ar-pf-empty-icon" style="color:#f87171;border-color:rgba(239,68,68,.32);background:rgba(239,68,68,.12)">!</div>'
        + '<div class="ar-pf-empty-title">Couldn\'t load properties</div>'
        + '<div class="ar-pf-empty-body">' + esc(slot.error) + '</div>'
        + '</div>';
    } else if (!slot.rows || !slot.rows.length){
      roster = '<div class="ar-pf-empty">'
        + '<div class="ar-pf-empty-icon">+</div>'
        + '<div class="ar-pf-empty-title">No properties in this portfolio yet</div>'
        + '<div class="ar-pf-empty-body">Add each hotel, resort or location individually. Each property keeps its own pool profile, device mix, and economics — and rolls up into the portfolio totals at the top.</div>'
        + '<button class="ar-pf-newbtn" data-pf-action="new-property" type="button">Add the first property</button>'
        + '</div>';
    } else {
      var rows = slot.rows.map(function(prop, idx){
        var k    = prop.computed_kpis || {};
        var nDev = Number(k.total_dev)  || 0;
        var mo   = Number(k.total_mo)   || 0;
        var inv  = Number(k.inv)        || 0;
        var country = prop.country ? esc(prop.country) : '';
        var subline = country ? country : (prop.formatted_address ? esc(prop.formatted_address) : '');
        var incomplete = nDev === 0;
        return '<div class="ar-pf-prop-row" data-pf-property="' + prop.id + '" role="button" tabindex="0">'
          +   '<div class="ar-pf-prop-idx">' + (idx + 1) + '</div>'
          +   '<div class="ar-pf-prop-id">'
          +     '<div class="ar-pf-prop-name">' + esc(prop.property_name || 'Untitled property') + '</div>'
          +     '<div class="ar-pf-prop-sub">' + (subline || '<span style="opacity:.55">No location set</span>') + '</div>'
          +   '</div>'
          +   '<div class="ar-pf-prop-kpi"><div class="v">' + (nDev ? String(nDev) : '—') + '</div><div class="l">Devices</div></div>'
          +   '<div class="ar-pf-prop-kpi"><div class="v">' + (inv ? fc(inv,0)   : '—') + '</div><div class="l">Investment</div></div>'
          +   '<div class="ar-pf-prop-kpi"><div class="v">' + (mo  ? fc(mo,0)    : '—') + '</div><div class="l">Monthly</div></div>'
          +   '<div class="ar-pf-prop-status' + (incomplete ? ' incomplete' : ' ready') + '">'
          +     (incomplete ? 'Incomplete' : 'Ready')
          +   '</div>'
          + '</div>';
      }).join('');
      roster = '<div class="ar-pf-prop-list">' + rows + '</div>';
    }

    mount.innerHTML = '<div class="ar-pf-panel">' + hero + kpis + roster + '</div>';

    // Kick off any pending fetches (idempotent — they short-circuit if
    // a fresh entry is already cached). The .then handlers re-look up
    // the mount element by ID rather than capturing the current `mount`
    // in closure — this way a re-render of the archive shell (which
    // replaces the #ar2-bank-portfolios container with a fresh DOM node)
    // doesn't strand the fetch result on a detached element.
    if (!slot || (!slot.rows && !slot.loading)){
      loadProperties(pid).then(function(){
        var live = document.getElementById('ar2-bank-portfolios');
        if (live) renderPortfolioOverview(live);
      });
    }
    if (!rollupSlot || (!rollupSlot.data && !rollupSlot.loading && !rollupSlot.error)){
      getRollup(pid).then(function(){
        var live = document.getElementById('ar2-bank-portfolios');
        if (live) renderPortfolioOverview(live);
      });
    }
  }

  // ── Add Property modal (similar shape to New Portfolio modal) ──
  /* ── P3: Portfolio Export panel ────────────────────────────────────
     Section-toggles checklist + action CTAs. Replaces the Overview view
     when pfState.viewMode === 'export'. The Portfolio Quote section is
     locked until the rep clicks "Unlock & Configure" — that routes them
     to the Quote builder, after which they return here with the Quote
     section toggleable.

     Section state lives in pfState.exportState keyed by portfolio id —
     in-memory only for now; DB persistence to portfolio_quotes.notes
     lands in P4 alongside the Quote builder fields.
     ───────────────────────────────────────────────────────────────── */
  function _defaultExportState(){
    return {
      cover:                true,
      execSummary:          true,
      propertyProfile:      true,           // NEW: Property Profile page(s)
      propertyProfileLayout:'cards',        // 'cards' | 'list-by-country'
      poolProfiles:         true,
      poolProfilesLayout:   'cards',        // 'cards' | 'list' (compact rows grouped by property)
      perProperty:          true,
      quote:                false,           // off by default; flips true after Quote unlock
      stdTerms:             true,
      backCover:            true,
      quoteReady:           false             // becomes true once the Quote builder is saved
    };
  }
  function getExportState(pid){
    if (!pfState.exportState) pfState.exportState = {};
    if (!pfState.exportState[pid]) pfState.exportState[pid] = _defaultExportState();
    return pfState.exportState[pid];
  }
  function setExportSection(pid, key, value){
    var st = getExportState(pid);
    st[key] = !!value;
  }
  function renderPortfolioExport(mount){
    if (!mount) return;
    var pid = pfState.selectedPortfolioId;
    if (!pid){ pfState.viewMode = 'list'; return renderPortfoliosPanel(mount); }
    var p = getPortfolio(pid);
    var name = p ? (p.name || 'Untitled portfolio') : 'Loading…';
    var st = getExportState(pid);
    // Property count for the per-property toggle label
    var propsSlot = pfState.properties[pid];
    var propCount = (propsSlot && propsSlot.rows) ? propsSlot.rows.length : 0;
    // Kick off a load if we don't have the roster yet
    if (!propsSlot || (!propsSlot.rows && !propsSlot.loading)){
      loadProperties(pid).then(function(){
        var live = document.getElementById('ar2-bank-overview-mount');
        if (live && pfState.viewMode === 'export') renderPortfolioExport(live);
      });
    }
    // Check the DB once for an existing quote row — if there is one, the
    // Quote section flips from Locked to Ready without the rep having to
    // re-open the builder. Cheap: maybeSingle on a UNIQUE-indexed column.
    if (!pfState._quoteProbed) pfState._quoteProbed = {};
    if (!pfState._quoteProbed[pid] && !st.quoteReady){
      pfState._quoteProbed[pid] = true;
      loadQuote(pid).then(function(q){
        if (!q) return;
        var live = document.getElementById('ar2-bank-overview-mount');
        if (live && pfState.viewMode === 'export') renderPortfolioExport(live);
      }).catch(function(_){});
    }
    // Builds an .ar-toggle-row using the same chrome single-property uses
    // (.ar-sw-track + .ar-sw-thumb). meta is shown as a small dimmed
    // sub-line under the title. The toggle itself carries the data-pf-action.
    function _expRow(key, title, meta, isOn){
      return '<div class="ar-toggle-row" style="align-items:center">'
        + '<label style="flex:1;line-height:1.3">'
          + '<div>' + esc(title) + '</div>'
          + (meta ? '<div style="font-size:11px;color:var(--mu);font-weight:400;margin-top:2px">' + meta + '</div>' : '')
        + '</label>'
        + '<div class="ar-sw-track' + (isOn?' on':'') + '" data-pf-action="exp-toggle" data-exp-key="' + key + '" role="switch" aria-checked="' + (!!isOn) + '"><div class="ar-sw-thumb"></div></div>'
      + '</div>';
    }
    // Sub-options strip — sits below a parent toggle row when that section
    // has Cards/List style choices.
    function _expSubRow(layoutKey, options, currentValue){
      var pills = options.map(function(opt){
        var active = (currentValue === opt.value) || (!currentValue && opt.value === options[0].value);
        return '<span class="ar-pf-exp-radio' + (active?' active':'') + '" data-pf-action="exp-set-layout" data-layout-key="' + layoutKey + '" data-layout-value="' + opt.value + '" role="radio" aria-checked="' + active + '">' + esc(opt.label) + '</span>';
      }).join('');
      return '<div class="ar-pf-exp-sub-row"><span class="ar-pf-exp-radio-group" role="radiogroup">' + pills + '</span></div>';
    }
    // Quote row — same .ar-toggle-row chrome, but the toggle stays visually
    // disabled until the rep configures the Quote. A right-side action button
    // surfaces "Unlock & Configure" when locked or "Edit" when ready.
    var quoteRow;
    if (st.quoteReady){
      quoteRow = '<div class="ar-toggle-row" style="align-items:center">'
        + '<label style="flex:1;line-height:1.3">'
          + '<div>Portfolio Quote</div>'
          + '<div style="font-size:11px;color:var(--gr);font-weight:600;margin-top:2px;display:flex;align-items:center;gap:8px">✓ Configured <button class="ar-pf-exp-edit" type="button" data-pf-action="open-quote">Edit</button></div>'
        + '</label>'
        + '<div class="ar-sw-track' + (st.quote?' on':'') + '" data-pf-action="exp-toggle" data-exp-key="quote" role="switch" aria-checked="' + !!st.quote + '"><div class="ar-sw-thumb"></div></div>'
      + '</div>';
    } else {
      quoteRow = '<div class="ar-toggle-row" style="align-items:center;opacity:.92">'
        + '<label style="flex:1;line-height:1.3">'
          + '<div>Portfolio Quote</div>'
          + '<div style="font-size:11px;color:var(--mu);font-weight:400;margin-top:2px;display:flex;align-items:center;gap:8px">🔒 Locked <button class="ar-pf-exp-unlock" type="button" data-pf-action="open-quote">Unlock &amp; Configure →</button></div>'
        + '</label>'
        + '<div class="ar-sw-track" style="opacity:.45;pointer-events:none" aria-disabled="true"><div class="ar-sw-thumb"></div></div>'
      + '</div>';
    }
    mount.innerHTML =
      '<div class="ar-pf-ov-hero">'
      +   '<button class="ar-pf-back" data-pf-action="back-to-overview" type="button" aria-label="Back to portfolio overview">&#x2190; Portfolio</button>'
      +   '<div class="ar-pf-ov-title-wrap">'
      +     '<div class="ar-pf-ov-title">' + esc(name) + ' — Export</div>'
      +     '<div class="ar-pf-ov-meta"><span class="ar-pf-row-status draft">Configure sections to include in the PDF</span></div>'
      +   '</div>'
      + '</div>'
      + '<div class="ar-pf-exp-wrap">'
      +   '<div class="ar-pf-exp-card">'
      +     '<div class="ar-pf-exp-card-title">Sections to include</div>'
      +     _expRow('cover',           'Cover Page',           'Portfolio name + buyer info',                                                                       st.cover)
      +     _expRow('execSummary',     'Executive Summary',    'Rolled-up KPIs across all properties',                                                              st.execSummary)
      +     _expRow('perProperty',     'Portfolio Assessment', 'Portfolio summary + per-property assessment pages',                                                 st.perProperty)
      +     _expRow('propertyProfile', 'Property Profiles',    propCount + ' propert' + (propCount===1?'y':'ies') + ' — overview cards or country list',           st.propertyProfile)
      +     _expSubRow('propertyProfileLayout', [{value:'cards',label:'Cards'},{value:'list-by-country',label:'List by Country'}], st.propertyProfileLayout)
      +     _expRow('poolProfiles',    'Property Pool Profiles','Pool detail grouped by property — cards or compact list',                                          st.poolProfiles)
      +     _expSubRow('poolProfilesLayout',    [{value:'cards',label:'Cards'},{value:'list',label:'List'}],                                  st.poolProfilesLayout)
      +     quoteRow
      +     _expRow('stdTerms',        'Purchase Terms and Conditions', 'Pulls from Quote section 6 if configured',                                                st.stdTerms)
      +     _expRow('backCover',       'Back Cover',           '',                                                                                                  st.backCover)
      +   '</div>'
      +   '<div class="ar-pf-exp-actions">'
      +     '<button class="ar-pf-exp-btn" type="button" data-pf-action="exp-preview">Preview PDF</button>'
      +     '<button class="ar-pf-exp-btn primary" type="button" data-pf-action="exp-download">Download PDF</button>'
      +     '<button class="ar-pf-exp-btn archive" type="button" data-pf-action="exp-archive">Save to Archive</button>'
      +   '</div>'
      +   '<div class="ar-pf-exp-note">Preview · Download · Archive will hook into the Portfolio PDF templates in the next sandbox pass (P7).</div>'
      + '</div>';
  }

  /* ── P3: Quote builder shell ───────────────────────────────────────
     Full-screen surface replacing the Export panel while the rep is
     configuring the Portfolio Quote. Sections 1, 4, 5, 6 (Recipient,
     Adjustments, Deposit & Terms, Standard Terms / Notes) render as
     manual forms — DB persistence wires up in P4. Sections 2 + 3
     (Ship-To list, Line Items roll-up) are P5+/P6.
     ───────────────────────────────────────────────────────────────── */
  function _defaultQuoteState(){
    return {
      // 1. Recipient
      buyerName: '', buyerEmail: '', buyerPhone: '', billTo: '',
      // 4. Adjustments
      discountPct: 0, taxRate: 0, shippingCost: 0, shippingTerm: '',
      // 5. Deposit & Terms
      depositPct: 0, depositDueDate: '', balanceDueTerms: '',
      // 6. Standard Terms & Notes
      stdTerms: '', notes: '',
      // 6b. Purchase Terms & Conditions — long legal block, prints on its
      // own page after the Quote page. Defaults to the same QUOTE_DEFAULT_TERMS
      // single-property quotes use, so the rep gets a sensible starting point.
      purchaseTerms: (typeof QUOTE_DEFAULT_TERMS !== 'undefined' ? QUOTE_DEFAULT_TERMS : ''),
      // status flag (used by Export panel to flip quote section to "Ready")
      status: 'draft'
    };
  }
  function getQuoteState(pid){
    if (!pfState.quoteState) pfState.quoteState = {};
    if (!pfState.quoteState[pid]) pfState.quoteState[pid] = _defaultQuoteState();
    return pfState.quoteState[pid];
  }
  /* P6: Ship-To list — one destination per property by default, populated
     from portfolio_properties.formatted_address. Reps can override per-row,
     add notes per destination, or flip to "consolidated" mode for a single
     ship-to.
     State shape on quote_state:
       q.shipTos = {
         mode: 'split' | 'consolidated',
         perProp: { [propId]: { override: '', notes: '' } },
         consolidated: { address: '', notes: '' }
       }
     ─────────────────────────────────────────────────────────────────── */
  function _ensureShipTosState(q){
    if (!q.shipTos) q.shipTos = { mode: 'split', perProp: {}, consolidated: { address: '', notes: '' } };
    if (!q.shipTos.perProp) q.shipTos.perProp = {};
    if (!q.shipTos.consolidated) q.shipTos.consolidated = { address: '', notes: '' };
    return q.shipTos;
  }
  function renderShipTosSection(pid, q){
    if (!pid) return '';
    var st = _ensureShipTosState(q);
    var states = (pfState.propertyStates && pfState.propertyStates[pid] && pfState.propertyStates[pid].rows) || null;
    if (!states){
      // loadPropertyStates already kicked off by Section 3; this just waits.
      return ''
        + '<div class="ar-pf-qb-card">'
        +   '<div class="ar-pf-qb-section-num">2</div>'
        +   '<div class="ar-pf-qb-card-title">Ship-To Addresses</div>'
        +   '<div class="ar-pf-qb-placeholder">Loading property addresses…</div>'
        + '</div>';
    }
    var modeToggle = ''
      + '<div class="ar-pf-ship-mode">'
      +   '<label class="ar-pf-ship-mode-radio"><input type="radio" name="ship-mode" value="split" ' + (st.mode!=='consolidated'?'checked':'') + ' data-pf-action="ship-mode"> Split — one per property</label>'
      +   '<label class="ar-pf-ship-mode-radio"><input type="radio" name="ship-mode" value="consolidated" ' + (st.mode==='consolidated'?'checked':'') + ' data-pf-action="ship-mode"> Consolidated — single destination</label>'
      + '</div>';

    var body;
    if (st.mode === 'consolidated'){
      body = ''
        + '<div class="ar-pf-ship-consolid">'
        +   '<label class="ar-pf-qb-field full"><span>Consolidated Ship-To Address</span><textarea rows="3" data-qb-ship-cons="address" placeholder="Single delivery destination for the whole portfolio">' + esc(st.consolidated.address || '') + '</textarea></label>'
        +   '<label class="ar-pf-qb-field full"><span>Notes</span><input type="text" data-qb-ship-cons="notes" value="' + esc(st.consolidated.notes || '') + '" placeholder="e.g. Receiver: Operations, weekday delivery only"></label>'
        + '</div>';
    } else {
      body = '<div class="ar-pf-ship-list">';
      for (var i = 0; i < states.length; i++){
        var r = states[i];
        var pp = st.perProp[r.id] || { override: '', notes: '' };
        // Auto address comes from formatted_address — when override is empty
        // we show the auto value as a placeholder.
        var autoAddr = r.formatted_address || '';
        body += ''
          + '<div class="ar-pf-ship-row">'
          +   '<div class="ar-pf-ship-row-head">'
          +     '<span class="ar-pf-ship-row-name">' + esc(r.property_name || 'Property') + '</span>'
          +     (autoAddr ? '<span class="ar-pf-ship-row-auto">' + esc(autoAddr) + '</span>' : '<span class="ar-pf-ship-row-auto missing">No address captured</span>')
          +   '</div>'
          +   '<textarea rows="2" class="ar-pf-ship-row-input" data-qb-ship-prop="' + esc(r.id) + '" data-qb-ship-field="override" placeholder="' + (autoAddr ? esc('Auto: ' + autoAddr) : 'Enter ship-to address') + '">' + esc(pp.override || '') + '</textarea>'
          +   '<input type="text" class="ar-pf-ship-row-notes" data-qb-ship-prop="' + esc(r.id) + '" data-qb-ship-field="notes" placeholder="Notes (optional)" value="' + esc(pp.notes || '') + '">'
          + '</div>';
      }
      body += '</div>';
      if (!states.length){
        body = '<div class="ar-pf-qb-placeholder">No properties yet — add properties to populate destinations.</div>';
      }
    }
    return ''
      + '<div class="ar-pf-qb-card">'
      +   '<div class="ar-pf-qb-section-num">2</div>'
      +   '<div class="ar-pf-qb-card-title">Ship-To Addresses</div>'
      +   modeToggle
      +   body
      + '</div>';
  }

  /* P5: Line Items section renderer. Reads cached property states + the
     quote's lineOverrides map, runs computeLineItemsRollup, and emits the
     SKU rows with expandable per-property breakdowns. Empty rows include
     all SKUs with zero qty so reps can still type in an override (manual-add).
     Kicks off loadPropertyStates if not already cached — re-renders on resolve. */
  function renderLineItemsSection(pid, q){
    if (!pid) return '';
    var states = (pfState.propertyStates && pfState.propertyStates[pid] && pfState.propertyStates[pid].rows) || null;
    // Kick a load if needed; the .then re-renders the builder once states arrive.
    if (!states){
      loadPropertyStates(pid).then(function(){
        var live = document.getElementById('ar2-bank-overview-mount');
        if (live && pfState.viewMode === 'quote-builder') renderQuoteBuilder(live);
      });
      return ''
        + '<div class="ar-pf-qb-card">'
        +   '<div class="ar-pf-qb-section-num">3</div>'
        +   '<div class="ar-pf-qb-card-title">Line Items</div>'
        +   '<div class="ar-pf-qb-placeholder">Loading property states…</div>'
        + '</div>';
    }
    var overrides = q.lineOverrides || {};
    var rows = computeLineItemsRollup(states, overrides);
    if (!rows.length){
      return ''
        + '<div class="ar-pf-qb-card">'
        +   '<div class="ar-pf-qb-section-num">3</div>'
        +   '<div class="ar-pf-qb-card-title">Line Items</div>'
        +   '<div class="ar-pf-qb-placeholder">No devices configured on any property yet. Add devices in property mode (Step 2) to populate line items.</div>'
        + '</div>';
    }
    var subtotal = rows.reduce(function(s,r){ return s + r.total; }, 0);
    var html = ''
      + '<div class="ar-pf-qb-card">'
      +   '<div class="ar-pf-qb-section-num">3</div>'
      +   '<div class="ar-pf-qb-card-title">Line Items</div>'
      +   '<div class="ar-pf-li-thead">'
      +     '<div>SKU</div>'
      +     '<div class="num">Qty</div>'
      +     '<div class="num">Unit Price</div>'
      +     '<div class="num">Line Total</div>'
      +   '</div>';
    for (var i = 0; i < rows.length; i++){
      var r = rows[i];
      var qtyDisplay   = r.qty;
      var priceDisplay = r.price;
      var qtyOverride   = (overrides[r.sku] && overrides[r.sku].qty   != null) ? overrides[r.sku].qty   : '';
      var priceOverride = (overrides[r.sku] && overrides[r.sku].price != null) ? overrides[r.sku].price : '';
      html += ''
        + '<div class="ar-pf-li-row' + (r.hasOverride ? ' has-override' : '') + '">'
        +   '<div class="ar-pf-li-sku">'
        +     '<div class="ar-pf-li-sku-label">' + esc(r.label) + '</div>'
        +     '<div class="ar-pf-li-sku-meta">' + esc(r.flow) + '</div>'
        +   '</div>'
        +   '<div class="ar-pf-li-cell num">'
        +     '<input type="number" min="0" step="1" placeholder="' + r.autoQty + '" value="' + esc(String(qtyOverride)) + '" data-qb-override-sku="' + r.sku + '" data-qb-override-field="qty" title="Auto: ' + r.autoQty + '">'
        +   '</div>'
        +   '<div class="ar-pf-li-cell num">'
        +     '<input type="number" min="0" step="0.01" placeholder="' + r.autoPrice + '" value="' + esc(String(priceOverride)) + '" data-qb-override-sku="' + r.sku + '" data-qb-override-field="price" title="Auto: ' + r.autoPrice + '">'
        +   '</div>'
        +   '<div class="ar-pf-li-cell num"><b>$' + fn(r.total) + '</b></div>'
        + '</div>';
      if (r.breakdown.length){
        html += '<details class="ar-pf-li-breakdown"><summary>Per-property breakdown</summary><div class="ar-pf-li-bd-body">';
        for (var b = 0; b < r.breakdown.length; b++){
          var bp = r.breakdown[b];
          html += '<div class="ar-pf-li-bd-row"><span>' + esc(bp.name) + '</span><span class="num">×' + bp.qty + '</span></div>';
        }
        html += '</div></details>';
      }
    }
    html += ''
      +   '<div class="ar-pf-li-subtotal">'
      +     '<span>Devices subtotal</span>'
      +     '<b>$' + fn(subtotal) + '</b>'
      +   '</div>'
      +   '<div class="ar-pf-li-note">Empty inputs use the auto-rolled value (shown as placeholder). Type a number to override.</div>'
      + '</div>';
    return html;
  }

  function renderQuoteBuilder(mount){
    if (!mount) return;
    var pid = pfState.selectedPortfolioId;
    if (!pid){ pfState.viewMode = 'list'; return renderPortfoliosPanel(mount); }
    var p = getPortfolio(pid);
    var name = p ? (p.name || 'Untitled portfolio') : 'Loading…';
    var q = getQuoteState(pid);
    mount.innerHTML =
      '<div class="ar-pf-ov-hero">'
      +   '<button class="ar-pf-back" data-pf-action="back-from-quote" type="button" aria-label="Back to export">&#x2190; Export</button>'
      +   '<div class="ar-pf-ov-title-wrap">'
      +     '<div class="ar-pf-ov-title">' + esc(name) + ' — Quote</div>'
      +     '<div class="ar-pf-ov-meta"><span class="ar-pf-row-status draft">Configure the Portfolio Quote</span></div>'
      +   '</div>'
      +   '<div class="ar-pf-ov-actions">'
      +     '<button class="ar-pf-actbtn" type="button" data-pf-action="quote-save-draft">Save Draft</button>'
      +     '<button class="ar-pf-actbtn primary" type="button" data-pf-action="quote-save-return">Save &amp; Return →</button>'
      +   '</div>'
      + '</div>'
      + '<div class="ar-pf-qb-wrap">'

      // Section 1 — Recipient
      +   '<div class="ar-pf-qb-card">'
      +     '<div class="ar-pf-qb-section-num">1</div>'
      +     '<div class="ar-pf-qb-card-title">Recipient</div>'
      +     '<div class="ar-pf-qb-grid two">'
      +       '<label class="ar-pf-qb-field"><span>Buyer Name</span><input type="text" data-qb-key="buyerName" value="' + esc(q.buyerName) + '" placeholder="Property group / entity name"></label>'
      +       '<label class="ar-pf-qb-field"><span>Buyer Email</span><input type="email" data-qb-key="buyerEmail" value="' + esc(q.buyerEmail) + '"></label>'
      +       '<label class="ar-pf-qb-field"><span>Phone</span><input type="tel" data-qb-key="buyerPhone" value="' + esc(q.buyerPhone) + '"></label>'
      +       '<label class="ar-pf-qb-field full"><span>Bill-To Address</span><textarea data-qb-key="billTo" rows="2" placeholder="Street, City, State / Country, Postal">' + esc(q.billTo) + '</textarea></label>'
      +     '</div>'
      +   '</div>'

      // Section 2/3 placeholders (P5/P6)
      +   renderShipTosSection(pid, q)
      +   renderLineItemsSection(pid, q)

      // Section 4 — Adjustments
      +   '<div class="ar-pf-qb-card">'
      +     '<div class="ar-pf-qb-section-num">4</div>'
      +     '<div class="ar-pf-qb-card-title">Adjustments</div>'
      +     '<div class="ar-pf-qb-grid two">'
      +       '<label class="ar-pf-qb-field"><span>Portfolio Discount (%)</span><input type="number" min="0" max="100" step="0.5" data-qb-key="discountPct" value="' + q.discountPct + '"></label>'
      +       '<label class="ar-pf-qb-field"><span>Tax Rate (%)</span><input type="number" min="0" max="100" step="0.01" data-qb-key="taxRate" value="' + q.taxRate + '"></label>'
      +       '<label class="ar-pf-qb-field"><span>Consolidated Shipping ($)</span><input type="number" min="0" step="0.01" data-qb-key="shippingCost" value="' + q.shippingCost + '"></label>'
      +       '<label class="ar-pf-qb-field"><span>Shipping Term</span><input type="text" data-qb-key="shippingTerm" value="' + esc(q.shippingTerm) + '" placeholder="e.g. EXW Origin, FOB Destination"></label>'
      +     '</div>'
      +   '</div>'

      // Section 5 — Deposit & Terms
      +   '<div class="ar-pf-qb-card">'
      +     '<div class="ar-pf-qb-section-num">5</div>'
      +     '<div class="ar-pf-qb-card-title">Deposit &amp; Payment Terms</div>'
      +     '<div class="ar-pf-qb-grid two">'
      +       '<label class="ar-pf-qb-field"><span>Deposit (%)</span><input type="number" min="0" max="100" step="1" data-qb-key="depositPct" value="' + q.depositPct + '"></label>'
      +       '<label class="ar-pf-qb-field"><span>Deposit Due Date</span><input type="date" data-qb-key="depositDueDate" value="' + esc(q.depositDueDate) + '"></label>'
      +       '<label class="ar-pf-qb-field full"><span>Balance Due Terms</span><input type="text" data-qb-key="balanceDueTerms" value="' + esc(q.balanceDueTerms) + '" placeholder="e.g. Net 30 from delivery"></label>'
      +     '</div>'
      +   '</div>'

      // Section 6 — Standard Terms, Purchase Terms & Notes
      +   '<div class="ar-pf-qb-card">'
      +     '<div class="ar-pf-qb-section-num">6</div>'
      +     '<div class="ar-pf-qb-card-title">Standard Terms, Purchase Terms &amp; Notes</div>'
      +     '<label class="ar-pf-qb-field full" style="margin-top:6px"><span>Standard Terms <em style="text-transform:none;letter-spacing:0;color:#7db8cc;font-weight:400">— short, prints on the Quote page above signature</em></span><textarea data-qb-key="stdTerms" rows="3" placeholder="Boilerplate terms that print on the Order page above the signature block">' + esc(q.stdTerms) + '</textarea></label>'
      +     '<label class="ar-pf-qb-field full"><span>Purchase Terms and Conditions <em style="text-transform:none;letter-spacing:0;color:#7db8cc;font-weight:400">— long-form legal, prints on its own page after the Quote</em></span><textarea data-qb-key="purchaseTerms" rows="12" placeholder="Long-form legal terms — printed on a dedicated Purchase Terms page after the Quote.">' + esc(q.purchaseTerms || '') + '</textarea></label>'
      +     '<label class="ar-pf-qb-field full"><span>Notes <em style="text-transform:none;letter-spacing:0;color:#7db8cc;font-weight:400">— internal, does not print</em></span><textarea data-qb-key="notes" rows="2" placeholder="Internal notes (won\'t print)">' + esc(q.notes) + '</textarea></label>'
      +   '</div>'

      + '</div>';
  }

  function openAddPropertyModal(){
    if (document.getElementById('ar-pf-add-prop-modal')) return;
    var backdrop = document.createElement('div');
    backdrop.id = 'ar-pf-add-prop-modal';
    backdrop.className = 'ar-pf-modal-backdrop';
    backdrop.innerHTML = '<div class="ar-pf-modal" role="dialog" aria-modal="true" aria-labelledby="ar-pf-add-prop-title">'
      + '<div class="ar-pf-modal-title" id="ar-pf-add-prop-title">Add property</div>'
      + '<label class="ar-pf-modal-lbl" for="ar-pf-add-prop-name">Property name</label>'
      + '<input class="ar-pf-modal-input" id="ar-pf-add-prop-name" type="text" maxlength="160" placeholder="e.g. Ritz-Carlton, Turks &amp; Caicos" autocomplete="off" />'
      + '<div class="ar-pf-modal-hint">You\'ll configure pools, devices, and savings on the next page (Phase 1c).</div>'
      + '<div class="ar-pf-modal-err" id="ar-pf-add-prop-err"></div>'
      + '<div class="ar-pf-modal-actions">'
      +   '<button class="ar-pf-modal-btn" data-pf-action="add-prop-cancel" type="button">Cancel</button>'
      +   '<button class="ar-pf-modal-btn primary" data-pf-action="add-prop-create" type="button">Add property</button>'
      + '</div>'
      + '</div>';
    document.body.appendChild(backdrop);
    setTimeout(function(){ var i = document.getElementById('ar-pf-add-prop-name'); if (i) i.focus(); }, 30);
    backdrop.addEventListener('click', function(e){
      if (e.target === backdrop) { closeAddPropertyModal(); return; }
      var act = e.target.closest('[data-pf-action]');
      if (!act) return;
      var a = act.getAttribute('data-pf-action');
      if (a === 'add-prop-cancel') { closeAddPropertyModal(); return; }
      if (a === 'add-prop-create') { submitNewProperty();     return; }
    });
    backdrop.addEventListener('keydown', function(e){
      if (e.key === 'Escape') closeAddPropertyModal();
      if (e.key === 'Enter' && e.target.id === 'ar-pf-add-prop-name') submitNewProperty();
    });
  }
  function closeAddPropertyModal(){
    var el = document.getElementById('ar-pf-add-prop-modal');
    if (el && el.parentNode) el.parentNode.removeChild(el);
  }
  function submitNewProperty(){
    var pid = pfState.selectedPortfolioId;
    if (!pid) { closeAddPropertyModal(); return; }
    var input = document.getElementById('ar-pf-add-prop-name');
    var err = document.getElementById('ar-pf-add-prop-err');
    var btn = document.querySelector('[data-pf-action="add-prop-create"]');
    if (!input) return;
    var name = input.value.trim();
    if (!name) { if (err) err.textContent = 'Name is required.'; input.focus(); return; }
    if (btn) { btn.disabled = true; btn.textContent = 'Adding…'; }
    createProperty(pid, name).then(function(){
      closeAddPropertyModal();
      if (typeof renderArchive === 'function') renderArchive();
    }).catch(function(e){
      if (btn) { btn.disabled = false; btn.textContent = 'Add property'; }
      if (err) err.textContent = (e && e.message) || 'Add failed.';
    });
  }

  // ════════════════════════════════════════════════════════════════
  // Phase 1c — Property mode (calculator scoped to a portfolio property)
  // ════════════════════════════════════════════════════════════════

  // Deep-clone via JSON round-trip. Adequate for S/EX which hold plain
  // data only (no functions, DOM nodes, dates). Used for snapshots and
  // state hydration when entering/exiting property mode.
  function cloneJson(v){
    try { return JSON.parse(JSON.stringify(v)); }
    catch(e){ return v; }
  }

  function inPropertyMode(){ return pfState.propertyMode === true; }
  function loadedProperty(){ return pfState.loadedProperty; }
  function saveStatus(){ return pfState.saveStatus; }

  // Fetch the full portfolio_properties row including the heavy fields
  // (state_json, ex_json, pool_measure_json) that the roster query omits
  // for list-view performance.
  function fetchPropertyFull(propertyId){
    var c = client();
    if (!c) return Promise.reject(new Error('cloud not ready'));
    return c.from('portfolio_properties')
      .select('id,portfolio_id,property_name,order_index,country,formatted_address,state_json,ex_json,pool_measure_json,image_urls,computed_kpis,excluded_from_rollup,created_at,updated_at')
      .eq('id', propertyId)
      .single()
      .then(function(rs){
        if (rs.error) throw new Error(rs.error.message);
        return rs.data;
      });
  }

  // Reset the calculator's global S / EX to fresh-default state WITHOUT
  // calling render(). Mirrors the body of resetApp() but skips the
  // render trigger so we can apply property state on top before the
  // first paint.
  function _resetCalcStateSilent(){
    if (window.AR2_MAP && AR2_MAP.reset){ try { AR2_MAP.reset(); } catch(e){} }
    S.step = 0; S.activeTab = 'advantage';
    S.propertyName = '';
    S.bodies = [{id:Date.now(),label:'Pool 1',poolType:'chlorine',inputMode:'dimensions',length:'',width:'',depth:'',manualGallons:'',co2Use:false,image:null,pipe_2in:0,pipe_3in:0,pipe_4in:0,pipe_6in:0,pipe_8in:0,pipe_10in:0}];
    S.devicesByPool = false;
    S.pool_gallons = 0; S.chlorine_pool_gallons = 0; S.co2_pool_gallons = 0;
    S.manualVolume = false; S.manualTotalGallons = ''; S.manualChlorineGallons = ''; S.manualCo2 = false; S.manualPoolCount = 1;
    S.propertiesCount = 1;
    S.pipe_2in = 0; S.pipe_3in = 0; S.pipe_4in = 0; S.pipe_6in = 0; S.pipe_8in = 0; S.pipe_10in = 0;
    S.discount = 0; S.savings_weight = 1;
    EX.images = []; EX.ytEntries = []; EX.comments = '';
    EX.scenario = 'advantage'; EX.bothScenarios = true; EX.layout = 'portrait';
    EX.inclCover = false; EX.inclWater = true; EX.inclFactSheet = false; EX.inclBackCover = false; EX.inclPoolProfiles = false; EX.inclExecSummary = false;
    EX.execCustomTitle = ''; EX.execCustomCopy = '';
    EX.inclLsCover = false; EX.inclLsExecSummary = false; EX.inclLsP2Col3Photos = false; EX.lsP2Col3Photos = []; EX.inclLsBackCover = false;
    EX.saving = false; EX.saveStatus = null; EX.exporting = false;
    if (typeof initDefaultYt === 'function') initDefaultYt();
  }

  // Shallow-assign object fields. Used to hydrate S from state_json
  // without losing any keys that S has and state_json doesn't.
  function _assignFields(target, src){
    if (!src || typeof src !== 'object') return;
    for (var k in src){
      if (Object.prototype.hasOwnProperty.call(src, k)){
        target[k] = src[k];
      }
    }
  }

  // Enter property mode. Loads the property row, snapshots the user's
  // current single-property state, hydrates S/EX from state_json/ex_json,
  // shows the breadcrumb subbar, and re-renders the calculator.
  // Internal flag `_navWithinPortfolio` (set by prev/next nav) preserves
  // the existing snapshot so exiting after multi-property navigation
  // still restores the original single-property session.
  function enterProperty(propertyId, _navWithinPortfolio){
    if (!propertyId) return Promise.reject(new Error('property id required'));
    return fetchPropertyFull(propertyId).then(function(prop){
      // Snapshot the user's current single-property session — only on the
      // INITIAL entry. Prev/Next navigation within property mode keeps
      // the original snapshot so a multi-property session still restores
      // back to the original single-property work on exit.
      if (!_navWithinPortfolio || !pfState.savedSnapshot){
        pfState.savedSnapshot = {
          S: cloneJson(S),
          EX: cloneJson(EX)
        };
      }
      // Reset calculator to clean defaults so any field the property's
      // state_json doesn't carry falls back to its default value.
      _resetCalcStateSilent();
      // Hydrate from property state. property_name overrides S.propertyName
      // so the calculator UI shows the property's name as the property name.
      if (prop.state_json && typeof prop.state_json === 'object'){
        _assignFields(S, prop.state_json);
      }
      if (prop.ex_json && typeof prop.ex_json === 'object'){
        _assignFields(EX, prop.ex_json);
      }
      // Force-set the property name to match the portfolio_properties.name
      // (source of truth for the property's identity).
      if (prop.property_name) S.propertyName = prop.property_name;
      // Step index mapping (existing calculator, 0-indexed S.step):
      //   0 → Map Pools          (UI label "Step 1")
      //   1 → Pool & System      (UI label "Step 2")
      //   2 → Pricing & Settings (UI label "Step 3")
      //   3 → Quote              (UI label "Step 4")
      //   4 → Export             (UI label "Step 5")
      // A brand-new property has empty state_json, so S.step inherits
      // the _resetCalcStateSilent default of 0 (Map Pools) — that's
      // where the rep starts when adding a new property. Returning to
      // an existing property restores whatever step they last saved.
      // Just clamp to the valid range; never force a minimum.
      var stepN = Number(S.step);
      if (!(stepN >= 0 && stepN <= 4)) stepN = 0;
      S.step = stepN;
      pfState.propertyMode = true;
      pfState.loadedProperty = prop;
      pfState.saveStatus = 'idle';
      pfState.saveError = null;
      _renderSubbar();
      _toggleSubbar(true);
      // Show calculator (hide archive), then re-render with new S.
      if (typeof showView === 'function') showView('form');
      if (typeof render === 'function') render();
      // Restore Map Pools state (polygons, boundary, centre, property name).
      // Done AFTER render() so the persistent #ap2 mount has finished its
      // own paint cycle and is ready to accept the snapshot.
      if (prop.pool_measure_json && window.AR2_MAP && AR2_MAP.loadSnapshot){
        try { AR2_MAP.loadSnapshot(prop.pool_measure_json); } catch(_){}
      } else if (window.AR2_MAP && AR2_MAP.reset){
        // No map data for this property — start clean (don't carry the
        // last property's polygons over).
        try { AR2_MAP.reset(); } catch(_){}
      }
    });
  }

  // Exit property mode. Saves any pending changes, restores the original
  // single-property snapshot, navigates back to the Portfolio Overview.
  function exitProperty(opts){
    var skipSave = opts && opts.skipSave;
    // Capture which portfolio we're returning to BEFORE we clear
    // loadedProperty (which is the source of truth for portfolio_id).
    var returnPortfolioId = (pfState.loadedProperty && pfState.loadedProperty.portfolio_id)
                          || pfState.selectedPortfolioId;
    var done = function(){
      // Restore the user's prior single-property session
      if (pfState.savedSnapshot){
        _resetCalcStateSilent();
        _assignFields(S, pfState.savedSnapshot.S);
        _assignFields(EX, pfState.savedSnapshot.EX);
      }
      pfState.savedSnapshot = null;
      pfState.propertyMode = false;
      pfState.loadedProperty = null;
      pfState.saveStatus = 'idle';
      pfState.saveError = null;
      if (pfState.saveTimer){ clearTimeout(pfState.saveTimer); pfState.saveTimer = null; }
      _toggleSubbar(false);
      // Belt-and-suspenders cache invalidation. saveCurrentProperty already
      // null'd these, but if the save failed (or was skipped) the caches
      // could still be stale. Clear both so the Overview re-fetches fresh
      // numbers when it renders below.
      if (returnPortfolioId){
        pfState.rollup[returnPortfolioId] = null;
        var slot = pfState.properties[returnPortfolioId];
        if (slot) slot.rows = null;
      }
      // Navigate back to Portfolio Overview (Portfolios tab, overview view)
      pfState.activeTab = 'portfolios';
      pfState.viewMode  = 'overview';
      // Make sure selectedPortfolioId points at the portfolio we just
      // exited from, even if it was somehow cleared elsewhere.
      if (returnPortfolioId) pfState.selectedPortfolioId = returnPortfolioId;
      // showView('bank') already calls renderArchive() internally, so
      // calling renderArchive() again here would race: the first render
      // captures a mount reference, the second wipes that mount and
      // creates a new one, but the pending fetch from the first render
      // writes its result to the detached old mount. Result: visible UI
      // stuck on "Loading properties…" forever. Single renderArchive
      // call only.
      if (typeof showView === 'function') showView('bank');
    };
    if (skipSave || !pfState.loadedProperty){ done(); return Promise.resolve(); }
    return saveCurrentProperty().then(done, function(err){
      // Save failed — surface it but still allow exit so the user can
      // navigate away. They'll see the error indicator next time they
      // open this property.
      try { console.warn('[AR2_PF] save before exit failed:', err); } catch(_){}
      done();
    });
  }

  // Compute the computed_kpis blob from the current S/EX/R. Field names
  // match what portfolio_rollup(uuid) expects to aggregate.
  function _buildKpisFromState(){
    var R = (typeof calcROI === 'function') ? calcROI() : null;
    if (!R) return {};
    return {
      total_dev:      Number(R.total_dev) || 0,
      total_pool_gal: Number(S.pool_gallons) || 0,
      total_mo:       Number(R.total_mo) || 0,
      total_yr:       Number(R.total_yr) || 0,
      inv:            Number(R.inv) || 0,
      payback:        Number(R.payback) || 0,
      roi5:           Number(R.roi5) || 0,
      water_5yr:      Number(R.gal_saved_5yr) || 0,
      disc_amt:       Number(R.disc_amt) || 0
    };
  }

  // Persist current S/EX + freshly-computed KPIs to portfolio_properties.
  // Returns a promise resolving when the UPDATE completes.
  function saveCurrentProperty(){
    if (!pfState.propertyMode || !pfState.loadedProperty){
      return Promise.reject(new Error('not in property mode'));
    }
    // Cancel any pending debounced autosave — we're saving now, so the
    // pending one is redundant and would risk double-fire after exit.
    if (pfState.saveTimer){ clearTimeout(pfState.saveTimer); pfState.saveTimer = null; }
    var c = client();
    if (!c) return Promise.reject(new Error('cloud not ready'));
    var prop = pfState.loadedProperty;
    var kpis = _buildKpisFromState();
    // state_json mirrors single-property assessments.snapshot shape so
    // hydration on next open is symmetric. ex_json saves images + export
    // toggles. Both could grow large (images); Phase 2 migrates images
    // to Supabase Storage. For Phase 1c we save inline.
    var stateJson = cloneJson(S);
    var exJson    = cloneJson(EX);
    // Capture the AR2_MAP snapshot too (pool polygons, boundary, centre).
    // Without this, every save would erase the map work — reps would trace
    // pools on entry, navigate forward, then find the map blank on return.
    var poolMeasureJson = null;
    try { if (window.AR2_MAP && AR2_MAP.exportSnapshot) poolMeasureJson = AR2_MAP.exportSnapshot(); } catch(_){}
    pfState.saveStatus = 'saving';
    pfState.saveError  = null;
    _renderSubbar();
    var updatePayload = {
      state_json: stateJson,
      ex_json:    exJson,
      computed_kpis: kpis,
      // Persist a normalized property_name only if user has entered one
      // in the calculator (S.propertyName); otherwise keep the existing.
      property_name: (S.propertyName && String(S.propertyName).trim()) || prop.property_name
    };
    // Only overwrite pool_measure_json when AR2_MAP is available — if the
    // map module hasn't loaded, leave the existing value alone rather than
    // nuking it.
    if (window.AR2_MAP && AR2_MAP.exportSnapshot){
      updatePayload.pool_measure_json = poolMeasureJson;
    }
    // Same defensive rule for the formatted address — only write when the
    // map module is loaded (and only when the rep actually typed/picked an
    // address). Preserves prior value otherwise. Address feeds the Property
    // Profiles roster, ship-to auto-populate, and country-grouping logic.
    if (window.AR2_MAP && AR2_MAP.getFormattedAddress){
      var addrNow = '';
      try { addrNow = AR2_MAP.getFormattedAddress() || ''; } catch(_){}
      if (addrNow){
        updatePayload.formatted_address = addrNow;
        stateJson.formattedAddress = addrNow; // mirror into state for round-trip
      }
    }
    return c.from('portfolio_properties')
      .update(updatePayload)
      .eq('id', prop.id)
      .select('id,property_name,computed_kpis,updated_at')
      .single()
      .then(function(rs){
        if (rs.error) throw new Error(rs.error.message);
        // Update local caches so the Portfolio Overview reflects new
        // KPIs without a refetch.
        pfState.loadedProperty.property_name = rs.data.property_name;
        pfState.loadedProperty.computed_kpis = rs.data.computed_kpis;
        pfState.loadedProperty.updated_at    = rs.data.updated_at;
        var portfolioId = prop.portfolio_id;
        var slot = pfState.properties[portfolioId];
        if (slot && slot.rows){
          for (var i = 0; i < slot.rows.length; i++){
            if (slot.rows[i].id === prop.id){
              slot.rows[i].property_name  = rs.data.property_name;
              slot.rows[i].computed_kpis  = rs.data.computed_kpis;
              slot.rows[i].updated_at     = rs.data.updated_at;
              break;
            }
          }
        }
        // Invalidate the cached rollup so the Overview KPI strip
        // refetches with the new aggregates next time it renders.
        // Use direct assignment (not the truthy-guarded variant) so any
        // shape — null, undefined, or stale object — gets cleared.
        pfState.rollup[portfolioId] = null;
        pfState.saveStatus = 'saved';
        _renderSubbar();
        // Reset to idle after a short success window so the UI doesn't
        // pin to "Saved" indefinitely.
        setTimeout(function(){
          if (pfState.saveStatus === 'saved') { pfState.saveStatus = 'idle'; _renderSubbar(); }
        }, 2500);
        return rs.data;
      }, function(err){
        pfState.saveStatus = 'error';
        pfState.saveError  = (err && err.message) || 'Save failed';
        _renderSubbar();
        throw err;
      });
  }

  // Debounced autosave — call from render() and on field changes. The
  // debounce window collapses bursts of edits (typing, slider drag) into
  // a single save once activity quiets down.
  function scheduleAutosave(){
    if (!pfState.propertyMode) return;
    if (pfState.saveTimer) clearTimeout(pfState.saveTimer);
    pfState.saveTimer = setTimeout(function(){
      pfState.saveTimer = null;
      saveCurrentProperty().catch(function(){ /* error surfaced via saveStatus */ });
    }, pfState.AUTOSAVE_DEBOUNCE_MS);
  }

  // ── Prev/Next property navigation within a portfolio ────────────
  // Returns { idx, total } for the currently-loaded property within the
  // ordered roster of its portfolio. Returns null if either no property
  // is loaded or the roster hasn't been fetched yet.
  function _propertyPosition(){
    var prop = pfState.loadedProperty;
    if (!prop) return null;
    var rows = (pfState.properties[prop.portfolio_id] && pfState.properties[prop.portfolio_id].rows) || null;
    if (!rows) return null;
    for (var i = 0; i < rows.length; i++){
      if (rows[i].id === prop.id) return { idx: i, total: rows.length };
    }
    return null;
  }

  // Navigate to the previous / next property in the portfolio. Saves the
  // current property's state first, then loads the adjacent property via
  // enterProperty(..., true) — the second arg preserves the original
  // single-property snapshot so exiting still restores the user's pre-
  // portfolio session correctly even after multi-property navigation.
  function _navigateAdjacent(direction){
    var pos = _propertyPosition();
    if (!pos) return Promise.resolve(null);
    var prop = pfState.loadedProperty;
    var rows = pfState.properties[prop.portfolio_id].rows;
    var targetIdx = pos.idx + direction;
    if (targetIdx < 0 || targetIdx >= rows.length) return Promise.resolve(null);
    var targetId = rows[targetIdx].id;
    if (pfState.saveTimer){ clearTimeout(pfState.saveTimer); pfState.saveTimer = null; }
    return saveCurrentProperty().then(function(){
      return enterProperty(targetId, true);
    }, function(err){
      // If save fails, still allow navigation but warn — the property
      // state isn't lost (it's in S/EX), but the cloud copy is stale.
      try { console.warn('[AR2_PF] save before nav failed:', err); } catch(_){}
      return enterProperty(targetId, true);
    });
  }
  function prevProperty(){ return _navigateAdjacent(-1); }
  function nextProperty(){ return _navigateAdjacent(+1); }

  // ── Subbar (in-property breadcrumb + Save & Close) ────────────
  function _renderSubbar(){
    var bar = document.getElementById('ar2-pf-subbar');
    if (!bar) return;
    if (!pfState.propertyMode || !pfState.loadedProperty){ bar.innerHTML = ''; return; }
    var prop  = pfState.loadedProperty;
    var pfRec = getPortfolio(prop.portfolio_id);
    var pfName = pfRec ? (pfRec.name || 'Portfolio') : 'Portfolio';
    var propName = (S.propertyName && S.propertyName.trim()) || prop.property_name || 'Property';
    var status = pfState.saveStatus;
    var statusHtml = '';
    if (status === 'saving'){
      statusHtml = '<span class="ar-pf-sub-status saving">Saving…</span>';
    } else if (status === 'saved'){
      statusHtml = '<span class="ar-pf-sub-status saved">Saved</span>';
    } else if (status === 'error'){
      statusHtml = '<span class="ar-pf-sub-status error" title="' + esc(pfState.saveError||'') + '">Save failed</span>';
    }
    // Property position within the portfolio's roster — drives Prev/Next
    // enable state and the "(2 of 7)" indicator. _propertyPosition returns
    // null if the roster hasn't been fetched yet; we hide the nav block
    // in that case rather than render broken arrows.
    var pos = _propertyPosition();
    var navHtml = '';
    if (pos && pos.total > 1){
      var prevDisabled = pos.idx === 0;
      var nextDisabled = pos.idx === pos.total - 1;
      navHtml = '<div class="ar-pf-sub-nav">'
        + '<button class="ar-pf-sub-navbtn" data-pf-action="prev-property" type="button" aria-label="Previous property"'
        +   (prevDisabled ? ' disabled' : '') + '>&#x2190;</button>'
        + '<span class="ar-pf-sub-navpos">' + (pos.idx + 1) + ' of ' + pos.total + '</span>'
        + '<button class="ar-pf-sub-navbtn" data-pf-action="next-property" type="button" aria-label="Next property"'
        +   (nextDisabled ? ' disabled' : '') + '>&#x2192;</button>'
        + '</div>';
    }
    bar.innerHTML = '<div class="ar-pf-sub-inner">'
      + '<button class="ar-pf-sub-back" data-pf-action="exit-property" type="button" aria-label="Back to portfolio">'
      +   '&#x2190; ' + esc(pfName)
      + '</button>'
      + '<span class="ar-pf-sub-sep">/</span>'
      + '<span class="ar-pf-sub-prop">' + esc(propName) + '</span>'
      + navHtml
      + statusHtml
      + '<div class="ar-pf-sub-actions">'
      +   '<button class="ar-pf-sub-act" data-pf-action="save-property" type="button">Save</button>'
      +   '<button class="ar-pf-sub-act primary" data-pf-action="save-and-close" type="button">Save &amp; Close</button>'
      + '</div>'
      + '</div>';
  }
  function _toggleSubbar(show){
    var bar = document.getElementById('ar2-pf-subbar');
    var bodyEl = document.body;
    if (!bar) return;
    // Use CSS class for visibility — more robust than inline style toggles
    // which can be lost if anything else writes to bar.style.
    if (show){
      bar.classList.add('is-active');
      // Defensive: clear any legacy inline display value from previous
      // sandbox builds that used the inline-style approach.
      bar.style.display = '';
    } else {
      bar.classList.remove('is-active');
      bar.style.display = '';
    }
    // body-level class lets CSS hide bar-actions and other single-mode
    // chrome while in property mode without touching the DOM.
    if (show) bodyEl.classList.add('pf-property-mode');
    else      bodyEl.classList.remove('pf-property-mode');
  }

  // Helper: simple HTML escape (mirrors esc() used in single-property code)
  function esc(s){
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }

  // Public API
  return {
    init: init,
    isEnabled: isEnabled,
    activeTab: activeTab,
    setActiveTab: setActiveTab,
    portfolios: function(){ return pfState.portfolios ? pfState.portfolios.slice() : []; },
    tabStripHtml: tabStripHtml,
    renderPortfoliosPanel: renderPortfoliosPanel,
    loadPortfolios: loadPortfolios,
    refreshPortfolios: refreshPortfolios,
    createPortfolio: createPortfolio,
    deletePortfolio: deletePortfolio,
    rollup: rollup,
    openNewPortfolioModal: openNewPortfolioModal,
    closeNewPortfolioModal: closeNewPortfolioModal,
    submitNewPortfolio: submitNewPortfolio,
    // Phase 1b
    viewMode: function(){ return pfState.viewMode; },
    selectedPortfolioId: function(){ return pfState.selectedPortfolioId; },
    openPortfolio: openPortfolio,
    backToPortfoliosList: backToPortfoliosList,
    openExport: openExport,
    backToOverview: backToOverview,
    openQuoteBuilder: openQuoteBuilder,
    backFromQuoteBuilder: backFromQuoteBuilder,
    getExportState: getExportState,
    setExportSection: setExportSection,
    getQuoteState: getQuoteState,
    loadQuote: loadQuote,
    saveQuote: saveQuote,
    loadPropertyStates: loadPropertyStates,
    computeLineItemsRollup: computeLineItemsRollup,
    renderPortfolioOverview: renderPortfolioOverview,
    renderPortfolioExport: renderPortfolioExport,
    renderQuoteBuilder: renderQuoteBuilder,
    loadProperties: loadProperties,
    refreshProperties: refreshProperties,
    createProperty: createProperty,
    getRollup: getRollup,
    openAddPropertyModal: openAddPropertyModal,
    closeAddPropertyModal: closeAddPropertyModal,
    submitNewProperty: submitNewProperty,
    // Phase 1c — property mode
    inPropertyMode: inPropertyMode,
    loadedProperty: loadedProperty,
    saveStatus: saveStatus,
    enterProperty: enterProperty,
    exitProperty: exitProperty,
    saveCurrentProperty: saveCurrentProperty,
    scheduleAutosave: scheduleAutosave,
    _renderSubbar: _renderSubbar,
    // Phase 1d — Prev/Next property navigation
    prevProperty: prevProperty,
    nextProperty: nextProperty,
    _state: pfState  // exposed for debug only
  };
})();

/* ── Map Pools Property/Portfolio mode radios (Phase 1d sandbox) ──────
   Three-mode radio strip on the Map Pools "Add Property or Portfolio" card:
     • Property          — single assessment (default, saves to assessments)
     • Add to Portfolio  — single assessment bound to an existing portfolio
                           (saves to portfolio_properties — wired in Pass 2)
     • Portfolio         — create a new portfolio (opens New Portfolio modal)
   Role gating: the latter two radios have data-pf-only and are hidden by
   CSS until body.pf-enabled is set by AR2_PF.init() — so Clients never see
   them. Users and Admins see them; the picker contents are scoped by RLS
   (users see own portfolios, admins see all).

   The chosen "add-to-portfolio" target is stashed on window.AR2_MAP_PF_TARGET
   for the Pass-2 save routing branch in bankSaveReport. Pass 1 only wires
   the UI — saves still go to the assessments table.
   ────────────────────────────────────────────────────────────────────── */
window.AR2_MAP_PF_TARGET = null; // { id, name } when a portfolio is bound; null otherwise

/* ── Duplicate a portfolio — server-side: insert a new portfolios row with
   suffixed name, then bulk-copy portfolio_properties rows to point at the
   new portfolio id. RLS already gates this (users → own; admins → all). */
function duplicatePortfolio(srcId){
  var c = (window.AR2_CLOUD && AR2_CLOUD.getClient) ? AR2_CLOUD.getClient() : null;
  if (!c || !srcId) return Promise.reject(new Error('cloud not ready'));
  return c.from('portfolios').select('*').eq('id', srcId).single().then(function(rs){
    if (rs.error) throw new Error(rs.error.message);
    var src = rs.data;
    var copy = {
      user_id: src.user_id, // RLS keeps this scoped; admins can also duplicate
      client_org_id: src.client_org_id,
      name: (src.name || 'Untitled') + ' (Copy)',
      client_contact_name: src.client_contact_name,
      client_contact_email: src.client_contact_email,
      cover_image_url: src.cover_image_url,
      brand_logo_data: src.brand_logo_data,
      status: 'draft',
      default_currency: src.default_currency,
      default_discount_pct: src.default_discount_pct,
      default_savings_weight: src.default_savings_weight,
      default_advantage_term: src.default_advantage_term,
      notes: src.notes
    };
    return c.from('portfolios').insert(copy).select('id').single().then(function(rs2){
      if (rs2.error) throw new Error(rs2.error.message);
      var newId = rs2.data.id;
      return c.from('portfolio_properties').select('*').eq('portfolio_id', srcId).then(function(pp){
        if (pp.error) throw new Error(pp.error.message);
        var rows = (pp.data || []).map(function(p){
          return {
            portfolio_id: newId,
            order_index: p.order_index,
            property_name: p.property_name,
            property_brand: p.property_brand,
            country: p.country,
            lat: p.lat, lng: p.lng,
            formatted_address: p.formatted_address,
            state_json: p.state_json,
            ex_json: p.ex_json,
            pool_measure_json: p.pool_measure_json,
            image_urls: p.image_urls,
            computed_kpis: p.computed_kpis,
            is_template: p.is_template,
            excluded_from_rollup: p.excluded_from_rollup
          };
        });
        if (!rows.length) return newId;
        return c.from('portfolio_properties').insert(rows).then(function(ins){
          if (ins.error) throw new Error(ins.error.message);
          // Invalidate AR2_PF caches so the new portfolio appears
          if (window.AR2_PF && AR2_PF._state){
            AR2_PF._state.portfolios = null;
            AR2_PF._state.properties[newId] = null;
            AR2_PF._state.rollup[newId] = null;
          }
          if (window.AR2_PF && AR2_PF.refreshPortfolios){ try { AR2_PF.refreshPortfolios(); } catch(_){} }
          return newId;
        });
      });
    });
  });
}

/* ── Copy single assessment → portfolio modal.
   Lets the rep pick a target portfolio + decide between "Add as New Property"
   (creates a new portfolio_properties row) or "Update Existing Property"
   (overwrites a property in the portfolio with this assessment's state). */
/* ── CSV bulk-import for portfolio properties ──────────────────────────
   Opens a modal with a drag-and-drop zone + template download. Parses the
   uploaded CSV, shows a preview table, then bulk-inserts one
   portfolio_properties row per CSV row into the current portfolio.

   Template columns (case-insensitive headers):
     property_name      (required)
     formatted_address  (optional)
     country            (optional)
     property_brand     (optional)
     lat                (optional, numeric)
     lng                (optional, numeric)
   Any unknown columns are kept as part of state_json so reps can include
   custom metadata that survives round-trips.
   ──────────────────────────────────────────────────────────────────────── */
function openImportCsvModal(portfolioId){
  if (document.getElementById('ar-csv-modal')) return;
  if (!portfolioId){
    alert('Open a portfolio first, then import properties into it.');
    return;
  }
  var bd = document.createElement('div');
  bd.id = 'ar-csv-modal';
  bd.className = 'ar-pf-modal-backdrop';
  bd.dataset.portfolioId = portfolioId;
  bd.innerHTML = '<div class="ar-pf-modal" role="dialog" aria-modal="true" aria-labelledby="ar-csv-title" style="max-width:640px">'
    + '<div class="ar-pf-modal-title" id="ar-csv-title">Import Properties from CSV</div>'
    + '<div style="font-size:13px;color:#cfe2eb;line-height:1.55;margin-bottom:14px">'
    +   'Drop a CSV / Excel-exported file here, or click to browse. Each row becomes a property in this portfolio. '
    +   '<button class="ar-pf-exp-edit" type="button" data-pf-action="csv-download-template" style="margin-left:4px">Download template</button>'
    + '</div>'
    + '<div class="ar-csv-drop" id="ar-csv-drop" tabindex="0" role="button" aria-label="Drop a CSV file here or click to browse">'
    +   '<div style="font-size:14px;color:var(--tx);font-weight:600">&uarr; Drop CSV here</div>'
    +   '<div style="font-size:11.5px;color:var(--mu);margin-top:6px">or click to browse</div>'
    +   '<input type="file" id="ar-csv-file" accept=".csv,text/csv,application/vnd.ms-excel,text/plain" style="position:absolute;inset:0;opacity:0;cursor:pointer">'
    + '</div>'
    + '<div id="ar-csv-preview" style="display:none;margin-top:14px"></div>'
    + '<div class="ar-pf-modal-err" id="ar-csv-err"></div>'
    + '<div class="ar-pf-modal-actions">'
    +   '<button class="ar-pf-modal-btn" data-pf-action="csv-cancel" type="button">Cancel</button>'
    +   '<button class="ar-pf-modal-btn primary" data-pf-action="csv-import" type="button" id="ar-csv-import-btn" disabled>Import 0 properties</button>'
    + '</div>'
  + '</div>';
  document.body.appendChild(bd);
  var drop = document.getElementById('ar-csv-drop');
  var fileEl = document.getElementById('ar-csv-file');
  function loadFile(f){
    if (!f) return;
    var reader = new FileReader();
    reader.onload = function(e){
      try {
        var parsed = parseCsvForPortfolioImport(String(e.target.result || ''));
        renderCsvPreview(parsed);
        bd.dataset.parsedRows = JSON.stringify(parsed.rows);
        var btn = document.getElementById('ar-csv-import-btn');
        if (btn){
          btn.disabled = !parsed.rows.length;
          btn.textContent = 'Import ' + parsed.rows.length + ' propert' + (parsed.rows.length===1?'y':'ies');
        }
        var errEl = document.getElementById('ar-csv-err');
        if (errEl) errEl.textContent = parsed.warnings.length ? parsed.warnings.join(' · ') : '';
      } catch(parseErr){
        var errEl2 = document.getElementById('ar-csv-err');
        if (errEl2) errEl2.textContent = (parseErr && parseErr.message) || 'Could not parse file.';
      }
    };
    reader.onerror = function(){
      var errEl3 = document.getElementById('ar-csv-err');
      if (errEl3) errEl3.textContent = 'Could not read the file.';
    };
    reader.readAsText(f);
  }
  fileEl.addEventListener('change', function(){ loadFile(fileEl.files && fileEl.files[0]); });
  // Drag-and-drop UX — highlight on dragenter, accept on drop.
  ['dragenter','dragover'].forEach(function(ev){
    drop.addEventListener(ev, function(e){ e.preventDefault(); drop.classList.add('is-drag'); });
  });
  ['dragleave','dragend','drop'].forEach(function(ev){
    drop.addEventListener(ev, function(e){ e.preventDefault(); drop.classList.remove('is-drag'); });
  });
  drop.addEventListener('drop', function(e){
    e.preventDefault();
    var f = e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0];
    if (f) loadFile(f);
  });
  bd.addEventListener('click', function(e){
    if (e.target === bd) { closeImportCsvModal(); return; }
    var btn = e.target.closest('[data-pf-action]');
    if (!btn) return;
    var act = btn.getAttribute('data-pf-action');
    if (act === 'csv-cancel')            { closeImportCsvModal(); return; }
    if (act === 'csv-download-template') { downloadCsvImportTemplate(); return; }
    if (act === 'csv-import')            { submitImportCsv(); return; }
  });
  bd.addEventListener('keydown', function(e){ if (e.key === 'Escape') closeImportCsvModal(); });
  setTimeout(function(){ try { drop.focus(); } catch(_){} }, 40);
}
function closeImportCsvModal(){
  var el = document.getElementById('ar-csv-modal');
  if (el && el.parentNode) el.parentNode.removeChild(el);
}

/* CSV parser — handles quoted fields (with escaped quotes) and CRLF. Maps
   recognized columns into a known shape; preserves unknown columns under
   `extras` so reps can include custom metadata. Skips fully-blank rows. */
function parseCsvForPortfolioImport(text){
  if (!text || !text.trim()) throw new Error('File is empty.');
  // Strip BOM, normalize newlines
  text = text.replace(/^﻿/, '').replace(/\r\n?/g, '\n');
  var lines = text.split('\n');
  // Field-aware split (handles "quoted, values" + escaped "" quotes)
  function splitCsvLine(line){
    var out = [], cur = '', inQ = false;
    for (var i=0; i<line.length; i++){
      var ch = line[i];
      if (inQ){
        if (ch === '"' && line[i+1] === '"'){ cur += '"'; i++; }
        else if (ch === '"') inQ = false;
        else cur += ch;
      } else {
        if (ch === ',') { out.push(cur); cur = ''; }
        else if (ch === '"') inQ = true;
        else cur += ch;
      }
    }
    out.push(cur);
    return out.map(function(s){ return s.trim(); });
  }
  // Find header line — first non-empty
  var headerLine = '';
  var startIdx = 0;
  for (var i=0; i<lines.length; i++){
    if (lines[i].trim()){ headerLine = lines[i]; startIdx = i + 1; break; }
  }
  if (!headerLine) throw new Error('No header row found.');
  var headers = splitCsvLine(headerLine).map(function(h){ return String(h||'').toLowerCase().replace(/\s+/g,'_'); });
  // Map header aliases to canonical keys
  var aliases = {
    property_name: ['property_name','name','property','hotel','hotel_name','site','site_name'],
    formatted_address: ['formatted_address','address','full_address','street','street_address'],
    country: ['country','region'],
    property_brand: ['property_brand','brand','chain'],
    lat: ['lat','latitude'],
    lng: ['lng','long','longitude','lon']
  };
  function canonicalize(h){
    for (var key in aliases){
      if (aliases[key].indexOf(h) > -1) return key;
    }
    return null;
  }
  var canonHeaders = headers.map(function(h){ return canonicalize(h) || h; });
  // Must have at least property_name (under any alias)
  if (canonHeaders.indexOf('property_name') === -1){
    throw new Error('CSV missing required column: property_name (or alias: name, property, hotel, hotel_name, site).');
  }
  var rows = [];
  var warnings = [];
  for (var r=startIdx; r<lines.length; r++){
    var rawLine = lines[r];
    if (!rawLine.trim()) continue;
    var cells = splitCsvLine(rawLine);
    var row = { extras: {} };
    for (var c=0; c<headers.length; c++){
      var key = canonHeaders[c];
      var val = (cells[c] != null ? cells[c] : '').trim();
      if (val === '') continue;
      if (key === 'lat' || key === 'lng'){
        var n = parseFloat(val);
        if (!isNaN(n)) row[key] = n;
        else warnings.push('Row ' + (r+1) + ': ' + key + ' is not numeric, skipped.');
      } else if (key === 'property_name' || key === 'formatted_address' || key === 'country' || key === 'property_brand'){
        row[key] = val;
      } else {
        row.extras[key || headers[c]] = val;
      }
    }
    if (!row.property_name){
      warnings.push('Row ' + (r+1) + ': missing property_name, skipped.');
      continue;
    }
    rows.push(row);
  }
  if (!rows.length) throw new Error('No valid rows found. Make sure at least one row has a property_name.');
  return { rows: rows, headers: headers, warnings: warnings };
}

function renderCsvPreview(parsed){
  var el = document.getElementById('ar-csv-preview');
  if (!el) return;
  var rows = parsed.rows.slice(0, 5);
  var more = parsed.rows.length - rows.length;
  var tbl = '<div style="font-size:11px;color:var(--mu);margin-bottom:6px;letter-spacing:.5px;text-transform:uppercase">Preview — first ' + rows.length + ' of ' + parsed.rows.length + ' rows</div>'
    + '<div style="border:1px solid rgba(0,180,216,.18);border-radius:8px;overflow:auto;max-height:220px">'
    + '<table style="width:100%;border-collapse:collapse;font-size:11.5px;color:#cfe2eb">'
    + '<thead><tr style="background:rgba(7,22,40,.6);border-bottom:1px solid rgba(0,180,216,.25)">'
      + '<th style="text-align:left;padding:6px 10px;letter-spacing:.5px;color:#7db8cc">Name</th>'
      + '<th style="text-align:left;padding:6px 10px;letter-spacing:.5px;color:#7db8cc">Address</th>'
      + '<th style="text-align:left;padding:6px 10px;letter-spacing:.5px;color:#7db8cc">Country</th>'
      + '<th style="text-align:left;padding:6px 10px;letter-spacing:.5px;color:#7db8cc">Brand</th>'
    + '</tr></thead><tbody>'
    + rows.map(function(r){
        return '<tr style="border-bottom:1px solid rgba(255,255,255,.04)">'
          + '<td style="padding:6px 10px">' + esc(r.property_name || '') + '</td>'
          + '<td style="padding:6px 10px;color:var(--mu)">' + esc(r.formatted_address || '—') + '</td>'
          + '<td style="padding:6px 10px;color:var(--mu)">' + esc(r.country || '—') + '</td>'
          + '<td style="padding:6px 10px;color:var(--mu)">' + esc(r.property_brand || '—') + '</td>'
        + '</tr>';
      }).join('')
    + '</tbody></table></div>'
    + (more > 0 ? '<div style="font-size:11px;color:var(--mu);margin-top:6px">+ ' + more + ' more row' + (more===1?'':'s') + ' will be imported</div>' : '');
  el.innerHTML = tbl;
  el.style.display = 'block';
}

function downloadCsvImportTemplate(){
  var csv = 'property_name,formatted_address,country,property_brand,lat,lng\n'
    + '"Marriott Marina Bay","2 Bayfront Avenue, Singapore 018972","Singapore","Marriott","",""\n'
    + '"Hilton Caribbean","123 Coral Drive, Nassau","Bahamas","Hilton","",""\n'
    + '"Iberostar Punta Cana","Playa Bavaro, Punta Cana 23000","Dominican Republic","Iberostar","",""\n';
  var blob = new Blob([csv], { type: 'text/csv' });
  var url = URL.createObjectURL(blob);
  var a = document.createElement('a');
  a.href = url;
  a.download = 'aquarev_portfolio_import_template.csv';
  document.body.appendChild(a);
  a.click();
  setTimeout(function(){ document.body.removeChild(a); URL.revokeObjectURL(url); }, 100);
}

function submitImportCsv(){
  var bd = document.getElementById('ar-csv-modal');
  if (!bd) return;
  var pid = bd.dataset.portfolioId;
  var rawRows = bd.dataset.parsedRows;
  if (!pid || !rawRows) return;
  var rows;
  try { rows = JSON.parse(rawRows); } catch(_){ rows = []; }
  if (!rows.length) return;
  var c = (window.AR2_CLOUD && AR2_CLOUD.getClient) ? AR2_CLOUD.getClient() : null;
  if (!c){
    var errEl = document.getElementById('ar-csv-err');
    if (errEl) errEl.textContent = 'Cloud unavailable.';
    return;
  }
  var btn = document.getElementById('ar-csv-import-btn');
  if (btn){ btn.disabled = true; btn.textContent = 'Importing…'; }
  // Build the rows for portfolio_properties insertion. Each property gets
  // an empty state_json (rep will fill in pools/devices later), preserving
  // any non-standard columns under state_json.import_extras.
  var inserts = rows.map(function(r, idx){
    var stateJson = { propertyName: r.property_name };
    if (r.formatted_address) stateJson.formattedAddress = r.formatted_address;
    if (r.extras && Object.keys(r.extras).length) stateJson.import_extras = r.extras;
    return {
      portfolio_id: pid,
      property_name: r.property_name,
      order_index: 1000 + idx, // appended at the end; rep can reorder later
      country: r.country || null,
      property_brand: r.property_brand || null,
      formatted_address: r.formatted_address || null,
      lat: (typeof r.lat === 'number') ? r.lat : null,
      lng: (typeof r.lng === 'number') ? r.lng : null,
      state_json: stateJson
    };
  });
  c.from('portfolio_properties').insert(inserts).select('id').then(function(rs){
    if (rs.error){
      if (btn){ btn.disabled = false; btn.textContent = 'Import ' + rows.length + ' propert' + (rows.length===1?'y':'ies'); }
      var errEl2 = document.getElementById('ar-csv-err');
      if (errEl2) errEl2.textContent = (rs.error.message || 'Insert failed.');
      return;
    }
    // Invalidate caches so the roster + rollup refresh
    try {
      if (window.AR2_PF && AR2_PF._state){
        AR2_PF._state.properties[pid] = null;
        AR2_PF._state.rollup[pid]     = null;
        if (AR2_PF._state.propertyStates) AR2_PF._state.propertyStates[pid] = null;
      }
    } catch(_){}
    closeImportCsvModal();
    alert('Imported ' + (rs.data ? rs.data.length : rows.length) + ' propert' + (rows.length===1?'y':'ies') + ' into the portfolio.');
    if (typeof renderArchive === 'function') renderArchive();
  }).catch(function(err){
    if (btn){ btn.disabled = false; btn.textContent = 'Import ' + rows.length + ' propert' + (rows.length===1?'y':'ies'); }
    var errEl3 = document.getElementById('ar-csv-err');
    if (errEl3) errEl3.textContent = (err && err.message) || 'Import failed.';
  });
}

function openCopyToPortfolioModal(assessmentId){
  if (document.getElementById('ar-copy-pf-modal')) return;
  if (!window.AR2_PF || !AR2_PF.isEnabled || !AR2_PF.isEnabled()){
    alert('Portfolios are not available in this account.');
    return;
  }
  AR2_PF.loadPortfolios().then(function(){
    var list = (AR2_PF.portfolios && AR2_PF.portfolios()) || [];
    if (!list.length){
      alert('No portfolios yet. Create a portfolio first, then copy this assessment to it.');
      return;
    }
    var bd = document.createElement('div');
    bd.id = 'ar-copy-pf-modal';
    bd.className = 'ar-pf-modal-backdrop';
    var pfOptions = list.map(function(p){
      return '<option value="' + esc(p.id) + '">' + esc(p.name || 'Untitled') + '</option>';
    }).join('');
    bd.innerHTML = '<div class="ar-pf-modal" role="dialog" aria-modal="true" aria-labelledby="ar-copy-pf-title">'
      + '<div class="ar-pf-modal-title" id="ar-copy-pf-title">Copy to Portfolio</div>'
      + '<div style="font-size:13px;color:#cfe2eb;line-height:1.55;margin-bottom:14px">Add this assessment to a portfolio as a property. You can either create a new property in the portfolio or update an existing one.</div>'
      + '<label class="ar-pf-modal-lbl" for="ar-copy-pf-select">Target portfolio</label>'
      + '<select class="ar-pf-modal-input" id="ar-copy-pf-select">' + pfOptions + '</select>'
      + '<label class="ar-pf-modal-lbl" style="margin-top:12px" for="ar-copy-pf-prop-select">Existing property to update <span style="font-weight:400;text-transform:none;letter-spacing:0;color:var(--mu)">(only used by "Save & Update")</span></label>'
      + '<select class="ar-pf-modal-input" id="ar-copy-pf-prop-select"><option value="">— Loading properties… —</option></select>'
      + '<div class="ar-pf-modal-err" id="ar-copy-pf-err"></div>'
      + '<div class="ar-pf-modal-actions">'
        + '<button class="ar-pf-modal-btn" data-copy-pf-action="cancel" type="button">Cancel</button>'
        + '<button class="ar-pf-modal-btn" data-copy-pf-action="update" type="button">Save &amp; Update</button>'
        + '<button class="ar-pf-modal-btn primary" data-copy-pf-action="new" type="button">Save as New</button>'
      + '</div>'
    + '</div>';
    document.body.appendChild(bd);
    bd.dataset.assessmentId = assessmentId;
    // Load property list for the first portfolio on open, and re-load on change
    function refreshPropList(pid){
      var propSel = document.getElementById('ar-copy-pf-prop-select');
      if (!propSel) return;
      propSel.innerHTML = '<option value="">— Loading properties… —</option>';
      AR2_PF.loadProperties(pid).then(function(rows){
        rows = rows || [];
        if (!rows.length){ propSel.innerHTML = '<option value="">— No properties in this portfolio —</option>'; return; }
        propSel.innerHTML = '<option value="">— Select a property —</option>'
          + rows.map(function(r){ return '<option value="' + esc(r.id) + '">' + esc(r.property_name || 'Untitled') + '</option>'; }).join('');
      }).catch(function(){
        propSel.innerHTML = '<option value="">— Could not load —</option>';
      });
    }
    refreshPropList(list[0].id);
    bd.addEventListener('change', function(e){
      if (e.target && e.target.id === 'ar-copy-pf-select') refreshPropList(e.target.value);
    });
    bd.addEventListener('click', function(e){
      if (e.target === bd) { closeCopyToPortfolioModal(); return; }
      var btn = e.target.closest('[data-copy-pf-action]');
      if (!btn) return;
      var act = btn.getAttribute('data-copy-pf-action');
      if (act === 'cancel') { closeCopyToPortfolioModal(); return; }
      if (act === 'new')    { submitCopyToPortfolio('new'); return; }
      if (act === 'update') { submitCopyToPortfolio('update'); return; }
    });
    bd.addEventListener('keydown', function(e){ if (e.key === 'Escape') closeCopyToPortfolioModal(); });
    setTimeout(function(){ var s = document.getElementById('ar-copy-pf-select'); if (s) try { s.focus(); } catch(_){} }, 30);
  }).catch(function(err){
    alert('Could not load portfolios: ' + ((err && err.message) || 'unknown error'));
  });
}
function closeCopyToPortfolioModal(){
  var el = document.getElementById('ar-copy-pf-modal');
  if (el && el.parentNode) el.parentNode.removeChild(el);
}
function submitCopyToPortfolio(mode){
  var bd = document.getElementById('ar-copy-pf-modal');
  if (!bd) return;
  var assessmentId = bd.dataset.assessmentId;
  var pfSel = document.getElementById('ar-copy-pf-select');
  var propSel = document.getElementById('ar-copy-pf-prop-select');
  var err = document.getElementById('ar-copy-pf-err');
  var pid = pfSel && pfSel.value;
  if (!pid) { if (err) err.textContent = 'Pick a target portfolio.'; return; }
  if (mode === 'update'){
    var targetPropId = propSel && propSel.value;
    if (!targetPropId) { if (err) err.textContent = 'Pick a property to update.'; return; }
  }
  if (err) err.textContent = '';
  var btns = bd.querySelectorAll('[data-copy-pf-action]');
  for (var b=0;b<btns.length;b++) btns[b].disabled = true;
  var c = (window.AR2_CLOUD && AR2_CLOUD.getClient) ? AR2_CLOUD.getClient() : null;
  if (!c) { if (err) err.textContent = 'Cloud unavailable.'; return; }
  // Fetch the source assessment row (state + summary + property_name)
  c.from('assessments').select('id,property_name,summary,state,snapshot').eq('id', assessmentId).single().then(function(rs){
    if (rs.error) throw new Error(rs.error.message);
    var src = rs.data;
    // assessments stores state in `state` jsonb; older records may use `snapshot`
    var stateBlob = src.state || (src.snapshot && src.snapshot.state) || {};
    var exBlob    = (src.snapshot && src.snapshot.ex) || {};
    var mapBlob   = (src.snapshot && src.snapshot.mapping) || null;
    var kpis      = src.summary || {};
    var propName  = src.property_name || 'Imported Property';
    if (mode === 'new'){
      // Insert a new portfolio_properties row
      return c.from('portfolio_properties').insert({
        portfolio_id: pid,
        property_name: propName,
        order_index: 999, // placed at end; the rep can drag later
        state_json: stateBlob,
        ex_json: exBlob,
        pool_measure_json: mapBlob,
        computed_kpis: {
          inv: Number(kpis.inv) || 0,
          total_mo: Number(kpis.monthly) || 0,
          total_yr: Number(kpis.annual) || 0,
          total_dev: Number(kpis.devices) || 0,
          total_pool_gal: Number(kpis.poolGallons) || 0,
          payback: Number(kpis.payback) || 0
        }
      }).select('id').single();
    }
    // mode === 'update' — overwrite the chosen property row
    var targetPropId = propSel.value;
    return c.from('portfolio_properties').update({
      property_name: propName,
      state_json: stateBlob,
      ex_json: exBlob,
      pool_measure_json: mapBlob,
      computed_kpis: {
        inv: Number(kpis.inv) || 0,
        total_mo: Number(kpis.monthly) || 0,
        total_yr: Number(kpis.annual) || 0,
        total_dev: Number(kpis.devices) || 0,
        total_pool_gal: Number(kpis.poolGallons) || 0,
        payback: Number(kpis.payback) || 0
      }
    }).eq('id', targetPropId).select('id').single();
  }).then(function(rs){
    if (rs && rs.error) throw new Error(rs.error.message);
    // Invalidate caches so the portfolio's roster + roll-up reload fresh
    if (window.AR2_PF && AR2_PF._state){
      AR2_PF._state.properties[pid] = null;
      AR2_PF._state.rollup[pid] = null;
      AR2_PF._state.propertyStates && (AR2_PF._state.propertyStates[pid] = null);
    }
    closeCopyToPortfolioModal();
    alert('Copied to portfolio.');
    if (typeof renderArchive === 'function') renderArchive();
  }).catch(function(e){
    var err2 = document.getElementById('ar-copy-pf-err');
    if (err2) err2.textContent = (e && e.message) || 'Copy failed.';
    var btns2 = bd.querySelectorAll('[data-copy-pf-action]');
    for (var b2=0;b2<btns2.length;b2++) btns2[b2].disabled = false;
  });
}

/* ── P7: Portfolio Report (pixel-perfect, reuses single-property design) ──
   Strategy: hydrate each portfolio property's state_json/ex_json into the
   global S/EX, call generateReport() in capture mode, and harvest the
   resulting HTML. Each property's pages render identically to a single-
   property report — same .rpt-head, .rpt-kpis, .rpt-stat, .rpt-foot, exact
   page sizes (8.5×11), exact page breaks, exact NSF badges, exact CTA bar.

   The portfolio shell wraps these per-property pages with:
     • Portfolio Cover — identical .rpt-cover-page chrome (same cover BG image),
       portfolio name in the overlay
     • Portfolio Quote — .rpt-es-head + .rpt-q-top-row + .rpt-q-tbl chrome
       with rolled-up SKU line items across all properties
     • Portfolio Back Cover — identical .rpt-back-cover-page image

   All section toggles from the Export panel are honored.
   ─────────────────────────────────────────────────────────────────────── */
function buildPortfolioReportPreview(pid, mode){
  if (!window.AR2_PF) return Promise.reject(new Error('AR2_PF not loaded'));
  var st = AR2_PF.getExportState(pid);
  var p  = (AR2_PF._state && AR2_PF._state.portfolios && AR2_PF._state.portfolios.filter(function(x){return x.id===pid;})[0]) || null;
  var pName = (p && p.name) || 'Portfolio';

  // Pull what we need in parallel: full property states + rollup + quote
  var loadStatesP = AR2_PF.loadProperties(pid).then(function(){
    return AR2_PF.loadPropertyStates ? AR2_PF.loadPropertyStates(pid) : Promise.resolve([]);
  });
  var rollupP = AR2_PF.getRollup(pid).catch(function(){ return null; });
  var quoteP  = (st.quoteReady ? AR2_PF.loadQuote(pid).catch(function(){ return null; }) : Promise.resolve(null));

  return Promise.all([loadStatesP, rollupP, quoteP]).then(function(arr){
    var states = arr[0] || [];
    var roll   = arr[1] || {};
    var quote  = arr[2] || null;
    var today  = new Date().toLocaleDateString('en-US',{year:'numeric',month:'long',day:'numeric'});

    // Compute line items if quote is ready — same logic the Quote builder uses.
    var lineItems = (quote && AR2_PF.computeLineItemsRollup) ?
      AR2_PF.computeLineItemsRollup(states, quote.lineOverrides || {}) : [];

    var sections = [];

    // ──────────────────────────────────────────────────────────────
    //  1. Portfolio Cover — IDENTICAL to single-property cover, with
    //     the portfolio name on the overlay. Same .rpt-cover-page +
    //     .rpt-cover-bg + .rpt-cover-overlay chrome and same hosted
    //     cover image. Honors the Cover Page section toggle.
    // ──────────────────────────────────────────────────────────────
    if (st.cover){
      sections.push(
        '<div class="rpt-cover-page">'
        + cdnImg('https://cdn.prod.website-files.com/691fa5d63fc3a5a75a65efeb/69de6e658f0a11dd1b3d7563_AquaRev_Fact%20Sheet_COVER1-01.jpg','class="rpt-cover-bg"',1100)
        + '<div class="rpt-cover-overlay">'
          + '<div style="font-family:\'DM Sans\',sans-serif;font-size:12px;letter-spacing:4px;text-transform:uppercase;color:#48cae4;font-weight:600">Water Enhancement &amp; Cost Saving Assessment</div>'
          + '<div style="margin-top:10px;font-family:\'Bebas Neue\',sans-serif;font-size:28px;letter-spacing:3px;color:#fff;line-height:1.1">' + esc(pName) + '</div>'
          + '<div style="margin-top:8px;font-family:\'DM Sans\',sans-serif;font-size:12px;color:#7db8cc">' + ((Number(roll.property_count)||states.length) + ' Properties · ' + today) + '</div>'
        + '</div>'
      + '</div>'
      );
    }

    // ──────────────────────────────────────────────────────────────
    //  2. Portfolio Executive Summary — rolled-up exec narrative across
    //     the whole portfolio. Sits RIGHT AFTER the cover so reps see
    //     the executive view before any per-property detail. Per-property
    //     exec summaries are suppressed in the capture loop below to
    //     prevent duplication.
    // ──────────────────────────────────────────────────────────────
    if (st.execSummary && states.length){
      var portfolioExecHtml = buildPortfolioExecSummaryPageHtml(pName, states, roll, today);
      if (portfolioExecHtml) sections.push(portfolioExecHtml);
    }

    // ──────────────────────────────────────────────────────────────
    //  3. Portfolio Assessment — single page summarizing the whole
    //     portfolio. Uses the same .rpt chrome as single-property's
    //     Assessment page. Slots BEFORE Property Profiles / Pool
    //     Profiles so the list pages populate below the Assessment.
    //     Honors the Portfolio Assessment toggle so the rep can
    //     suppress it if they want bare per-property pages only.
    // ──────────────────────────────────────────────────────────────
    if (st.perProperty && states.length){
      var portfolioAssessmentHtml = buildPortfolioAssessmentPageHtml(pName, states, roll, today);
      if (portfolioAssessmentHtml) sections.push(portfolioAssessmentHtml);
    }

    // ──────────────────────────────────────────────────────────────
    //  3a. Portfolio Property Profiles — one card per property, or a
    //      list grouped by country. Independent of per-property capture.
    // ──────────────────────────────────────────────────────────────
    if (st.propertyProfile && states.length){
      var propLayout = (st.propertyProfileLayout === 'list-by-country') ? 'list-by-country' : 'cards';
      var propPages = buildPropertyProfilesPages(pName, states, today, propLayout);
      for (var ppi = 0; ppi < propPages.length; ppi++) sections.push(propPages[ppi]);
    }

    // ──────────────────────────────────────────────────────────────
    //  2b. Portfolio Pool Profiles — LIST mode bypasses per-property
    //      capture and renders a compact list grouped by property,
    //      paginated ~24 rows per page. (Cards mode flows through the
    //      capture loop below so each property's pool profile pages
    //      are pixel-identical to single-property — and now max 10
    //      cards per page.)
    // ──────────────────────────────────────────────────────────────
    var poolProfilesUseList = (st.poolProfiles && st.poolProfilesLayout === 'list');
    if (poolProfilesUseList){
      var plPages = buildPortfolioPoolProfilesListPages(pName, states, today);
      for (var pli = 0; pli < plPages.length; pli++) sections.push(plPages[pli]);
    }

    // ──────────────────────────────────────────────────────────────
    //  3. Per-Property Pages — hydrate each property's state into the
    //     global S/EX, run generateReport in capture mode, harvest
    //     the resulting HTML. Each property produces its full Pool
    //     Profile + Assessment (and optionally Exec Summary) pages
    //     IDENTICAL to a single-property report — same .rpt-head,
    //     .rpt-kpis, .rpt-stat, .rpt-foot chrome, exact page sizes,
    //     exact page breaks, exact NSF badge, exact CTA bar.
    //
    //     We force per-property cover/quote/back-cover OFF — those
    //     belong at the portfolio level. Exec Summary inherits the
    //     portfolio's execSummary toggle so the rep can choose
    //     between portfolio-level only vs portfolio + per-property.
    //     Pool Profiles in capture flow is suppressed when the rep
    //     selected the List layout (rendered above).
    // ──────────────────────────────────────────────────────────────
    var poolProfilesUseCapture = (st.poolProfiles && st.poolProfilesLayout !== 'list');
    if (poolProfilesUseCapture || st.perProperty){
      // Split buckets: pool profile pages get grouped together (right after
      // Property Profiles), then per-property Assessment / Exec pages follow.
      var _capPoolPages = [];
      var _capRestPages = [];
      // Snapshot the live state — this is critical, we restore on every
      // exit path including failures.
      var savedS  = JSON.parse(JSON.stringify(S));
      var savedEX = JSON.parse(JSON.stringify(EX));
      var savedQ  = JSON.parse(JSON.stringify(Q));
      var savedR  = (typeof R !== 'undefined') ? JSON.parse(JSON.stringify(R)) : null;
      // Helper — reset live S/EX to the saved snapshot baseline between
      // properties so stale keys from property A don't leak into B.
      function _resetToSnapshot(){
        for (var dk in S){ if (S.hasOwnProperty(dk) && !(dk in savedS))  delete S[dk]; }
        for (var sk in savedS){ if (savedS.hasOwnProperty(sk)) S[sk] = savedS[sk]; }
        for (var dek in EX){ if (EX.hasOwnProperty(dek) && !(dek in savedEX)) delete EX[dek]; }
        for (var sek in savedEX){ if (savedEX.hasOwnProperty(sek)) EX[sek] = savedEX[sek]; }
      }
      try {
        for (var pi = 0; pi < states.length; pi++){
          var prop = states[pi];
          // Reset to baseline THEN overlay this property's state — clean slate
          // between properties prevents stale keys (e.g. bodies from a prior
          // property carrying over) from corrupting the render.
          _resetToSnapshot();
          if (prop.state_json && typeof prop.state_json === 'object'){
            for (var k1 in prop.state_json){ if (prop.state_json.hasOwnProperty(k1)) S[k1] = prop.state_json[k1]; }
          }
          if (prop.ex_json && typeof prop.ex_json === 'object'){
            for (var k2 in prop.ex_json){ if (prop.ex_json.hasOwnProperty(k2)) EX[k2] = prop.ex_json[k2]; }
          }
          // Override per-property sections that belong at the portfolio level
          EX.inclCover         = false;
          EX.inclLsCover       = false;
          EX.inclBackCover     = false;
          EX.inclLsBackCover   = false;
          EX.inclQuote         = false;
          EX.inclQuoteTerms    = false;
          EX.inclQuotePayment  = false;
          // Per-property exec summary is suppressed — the portfolio-level
          // Exec Summary above (rendered after Cover) covers the executive
          // narrative. Keeping per-property exec on here would produce
          // duplicate exec pages later in the doc.
          EX.inclExecSummary   = false;
          EX.inclLsExecSummary = false;                   // portrait only
          EX.inclPoolProfiles  = !!poolProfilesUseCapture; // Cards mode only; List mode is rendered separately above
          EX.layout            = 'portrait';
          EX._captureMode      = true;
          // Property name flows through S.propertyName for the per-property
          // header band ("Cost Savings Assessment · [Property Name]").
          if (prop.property_name) S.propertyName = prop.property_name;
          window.__pfCapturedHtml = '';
          try { generateReport(); } catch(genErr){
            console.warn('[Portfolio Report] property capture failed:', prop.property_name, genErr);
            window.__pfCapturedHtml = '';
          }
          if (window.__pfCapturedHtml){
            // Split the captured HTML into Pool Profile pages vs everything
            // else, so Pool Profiles for ALL properties group together
            // BEFORE per-property Assessment / Exec pages. Honors the user's
            // ordering: Cover → Exec → Assessment → Property Profiles →
            // Pool Profiles → Per-Property Assessments → Quote → Terms → Back.
            try {
              var capTmp = document.createElement('div');
              capTmp.innerHTML = window.__pfCapturedHtml;
              var ppEls = capTmp.querySelectorAll('.rpt-pp-page');
              for (var pe = 0; pe < ppEls.length; pe++){
                _capPoolPages.push(ppEls[pe].outerHTML);
                ppEls[pe].parentNode.removeChild(ppEls[pe]);
              }
              var rest = capTmp.innerHTML;
              if (rest && rest.trim()) _capRestPages.push(rest);
            } catch(splitErr){
              // Defensive: if split fails, append the whole capture verbatim
              _capRestPages.push(window.__pfCapturedHtml);
            }
          }
        }
      } finally {
        // ALWAYS restore live state — even if capture threw mid-loop.
        EX._captureMode = false;
        // Restore S
        for (var dk in S){ if (S.hasOwnProperty(dk) && !(dk in savedS)) delete S[dk]; }
        for (var sk in savedS){ if (savedS.hasOwnProperty(sk)) S[sk] = savedS[sk]; }
        // Restore EX
        for (var dek in EX){ if (EX.hasOwnProperty(dek) && !(dek in savedEX)) delete EX[dek]; }
        for (var sek in savedEX){ if (savedEX.hasOwnProperty(sek)) EX[sek] = savedEX[sek]; }
        // Restore Q
        for (var dqk in Q){ if (Q.hasOwnProperty(dqk) && !(dqk in savedQ)) delete Q[dqk]; }
        for (var sqk in savedQ){ if (savedQ.hasOwnProperty(sqk)) Q[sqk] = savedQ[sqk]; }
        // Restore R (best-effort — calcROI will recompute)
        if (savedR && typeof R !== 'undefined'){
          for (var srk in savedR){ if (savedR.hasOwnProperty(srk)) R[srk] = savedR[srk]; }
        }
      }
      // Append in the user-specified order: all Pool Profile pages first
      // (grouped together right after Property Profiles), then per-property
      // Assessment / Exec Summary pages.
      // Per-property capture only contributes Pool Profile pages now.
      // The Assessment page is owned by the portfolio-level builder
      // (buildPortfolioAssessmentPageHtml) — appending the per-property
      // Assessment captures here would duplicate it in the output.
      for (var cpp = 0; cpp < _capPoolPages.length; cpp++) sections.push(_capPoolPages[cpp]);
    }

    // ──────────────────────────────────────────────────────────────
    //  3. Portfolio Quote — uses the EXACT single-property quote
    //     chrome (.rpt-es-head header, .rpt-q-top-row Seller / Buyer /
    //     Meta band, .rpt-q-tbl line items with section bands,
    //     .rpt-q-totals subtotal/discount/tax/shipping/total stack,
    //     .rpt-foot.rpt-es-foot footer). Data swapped for portfolio
    //     roll-ups: line items aggregated across all properties,
    //     buyer block from the Portfolio Quote builder, totals
    //     respecting portfolio discount/tax/shipping.
    // ──────────────────────────────────────────────────────────────
    if (st.quote && quote){
      sections.push(buildPortfolioQuotePageHtml(pName, quote, lineItems, states, today));
      // Purchase Terms — separate page IFF the rep has content. Same chrome
      // as the single-property terms page (rpt-es-page + rpt-q-page-terms)
      // so it gets full-page height + footer-pinned layout.
      var pt = (quote.purchaseTerms || '').trim();
      if (pt){
        sections.push(buildPortfolioPurchaseTermsPageHtml(pName, quote, pt, today));
      }
    }

    // ──────────────────────────────────────────────────────────────
    //  4. Portfolio Back Cover — IDENTICAL to single-property back
    //     cover, same hosted image. .rpt-fs-img-page + .rpt-back-cover-page.
    // ──────────────────────────────────────────────────────────────
    if (st.backCover){
      sections.push(
        '<div class="rpt-fs-img-page rpt-back-cover-page">'
        + cdnImg('https://cdn.prod.website-files.com/691fa5d63fc3a5a75a65efeb/69fd65a10e9889939b9b992d_Back-Cover_Portrait-v2.png','',1100)
      + '</div>'
      );
    }

    if (!sections.length){
      alert('No sections enabled — toggle at least one section on the Export panel to generate the report.');
      return;
    }
    // Mount into #ar2-report and use the same hide-body + window.print()
    // pipeline single-property uses. Produces a native browser PDF with
    // the @page sizing and page breaks already wired into .rpt-* CSS.
    renderPortfolioReportToDOM(pName, sections, mode);
  });
}

/* P7+: Portfolio Assessment page.
   Mirrors the single-property Assessment page structure pixel-for-pixel
   (.rpt + .rpt-head + .rpt-kpis + .rpt-body + .rpt-cta-bar + .rpt-foot)
   with portfolio-rolled data:
     • Header band: "Cost Savings Assessment" subtitle, portfolio name on right
     • KPI strip (5 columns): Properties/Pools (X/Y) · Devices · Monthly Savings ·
       Annual Savings · Purchase Payback
     • "Property Configuration" section (replaces single's "Pool Configuration"):
       one row per property — name, pool count, total gallons + a Total row
     • "AquaRev Devices Required (on Return Pipes)" section: rolled-up device
       counts across all properties + total investment
     • Investment & Return Profile chart (reuses buildInvestmentChart) */
/* P7+: Portfolio Assessment page — REUSE single-property generateReport().
   Synthesizes a portfolio-aggregate S/EX, calls generateReport() in capture
   mode to harvest the full assessment HTML (header band, KPI strip, Body
   Row A/Row B, Property Images + Video Resources media row, comments,
   disclaimer, CTA bar, footer, multi-page cascade rules — all of it),
   then runs ONLY the two label edits the user asked for:
     • "Pool Configuration" → "Property Configuration" (with per-property rows)
     • KPI strip gets a NEW first cell: "Properties / Pools" (X/Y)
   Everything else stays byte-identical to single-property output, so layout
   rules + page breaks + design language are preserved.
   Always restores live S/EX/R in a finally — no live-state side effects. */
/* P7+: Portfolio Executive Summary page(s).
   Same capture-based approach as Portfolio Assessment — hydrate a portfolio-
   aggregate S/EX, run generateReport in capture mode with inclExecSummary=true,
   then extract ONLY the .rpt-es-page blocks. Renders at the TOP of the
   document (right after Cover) so reps see the rolled-up executive narrative
   before any per-property detail. */
function buildPortfolioExecSummaryPageHtml(pName, states, roll, today){
  if (!states || !states.length) return '';
  if (typeof generateReport !== 'function' || typeof PIPES === 'undefined') return '';
  // Aggregate the same totals the Assessment page uses
  var deviceTotals = {};
  for (var p0=0; p0<PIPES.length; p0++) deviceTotals[PIPES[p0].k] = 0;
  var totalGal = 0, totalPools = 0;
  for (var i=0; i<states.length; i++){
    var sj = states[i].state_json || {};
    if (sj.manualVolume){
      totalPools += Math.max(1, Number(sj.manualPoolCount) || 1);
      totalGal += Number(sj.manualTotalGallons) || 0;
    } else if (Array.isArray(sj.bodies)){
      totalPools += sj.bodies.length;
      for (var b=0; b<sj.bodies.length; b++){
        totalGal += (typeof bodyGallons === 'function') ? bodyGallons(sj.bodies[b]) : (Number(sj.bodies[b].gallons) || 0);
      }
    }
    for (var pi=0; pi<PIPES.length; pi++){
      var k = PIPES[pi].k;
      deviceTotals[k] += Number(sj[k]) || 0;
    }
  }
  // Snapshot live state
  var savedS  = JSON.parse(JSON.stringify(S));
  var savedEX = JSON.parse(JSON.stringify(EX));
  var savedR  = null;
  try { savedR = (typeof R !== 'undefined' && R) ? JSON.parse(JSON.stringify(R)) : null; } catch(_){}
  var captured = '';
  try {
    for (var dk in S){ if (S.hasOwnProperty(dk)) delete S[dk]; }
    for (var sk in savedS){ if (savedS.hasOwnProperty(sk)) S[sk] = savedS[sk]; }
    S.propertyName          = pName;
    S.bodies                = [];
    S.manualVolume          = false;
    S.manualPoolCount       = totalPools;       // exec summary references this for "pool count" copy
    S.manualTotalGallons    = 0;
    S.pool_gallons          = totalGal;
    S.chlorine_pool_gallons = totalGal;
    S.co2_pool_gallons      = 0;
    S.devicesByPool         = false;
    S.propertiesCount       = states.length;    // exec summary references this in "X Property / Y Feature Pools" copy
    for (var pi2=0; pi2<PIPES.length; pi2++){
      S[PIPES[pi2].k] = deviceTotals[PIPES[pi2].k];
    }
    // EX: only Exec Summary renders
    for (var dek in EX){ if (EX.hasOwnProperty(dek)) delete EX[dek]; }
    for (var sek in savedEX){ if (savedEX.hasOwnProperty(sek)) EX[sek] = savedEX[sek]; }
    EX.inclCover          = false;
    EX.inclLsCover        = false;
    EX.inclExecSummary    = true;
    EX.inclLsExecSummary  = false;
    EX.inclPoolProfiles   = false;
    EX.inclBackCover      = false;
    EX.inclLsBackCover    = false;
    EX.inclQuote          = false;
    EX.inclQuoteTerms     = false;
    EX.inclQuotePayment   = false;
    EX.layout             = 'portrait';
    EX.images             = [];
    // Populate Video Resources with DEFAULT_YT_URLS so the media row renders
    // (it's the bottom-pinned slot — without it the body collapses and the
    // page doesn't fill the full 11" sheet). Mirrors what initDefaultYt does
    // on a fresh single-property session.
    EX.ytEntries          = [];
    try {
      if (typeof DEFAULT_YT_URLS !== 'undefined' && typeof ytVideoId === 'function'){
        DEFAULT_YT_URLS.forEach(function(url){
          var vid = ytVideoId(url);
          if (vid) EX.ytEntries.push({ id:'yt-'+vid, url:url, videoId:vid, comment:'' });
        });
      }
    } catch(_){}
    EX.comments           = '';
    EX._captureMode       = true;
    window.__pfCapturedHtml = '';
    try { generateReport(); } catch(genErr){
      try { console.warn('[Portfolio Exec Summary] capture failed:', genErr); } catch(_){}
      window.__pfCapturedHtml = '';
    }
    captured = window.__pfCapturedHtml || '';
  } finally {
    if (typeof EX !== 'undefined' && EX) EX._captureMode = false;
    for (var dks in S){  if (S.hasOwnProperty(dks)  && !(dks in savedS))  delete S[dks]; }
    for (var sks in savedS){  if (savedS.hasOwnProperty(sks))  S[sks]  = savedS[sks]; }
    for (var dke in EX){ if (EX.hasOwnProperty(dke) && !(dke in savedEX)) delete EX[dke]; }
    for (var sek2 in savedEX){ if (savedEX.hasOwnProperty(sek2)) EX[sek2] = savedEX[sek2]; }
    if (savedR && typeof R !== 'undefined' && R){
      for (var srk in savedR){ if (savedR.hasOwnProperty(srk)) R[srk] = savedR[srk]; }
    }
  }
  if (!captured) return '';
  // Extract ONLY the Exec Summary pages — the capture also includes the
  // (unwanted) Assessment block. .rpt-es-page is the exec-only marker.
  try {
    var tmp = document.createElement('div');
    tmp.innerHTML = captured;
    var esEls = tmp.querySelectorAll('.rpt-es-page');
    if (!esEls.length) return '';
    var out = '';
    for (var ei=0; ei<esEls.length; ei++) out += esEls[ei].outerHTML;
    return out;
  } catch(extractErr){
    return '';
  }
}

function buildPortfolioAssessmentPageHtml(pName, states, roll, today){
  if (!states || !states.length) return '';
  if (typeof generateReport !== 'function' || typeof PIPES === 'undefined') return '';

  // Aggregate device counts, total gallons, total pools, per-property roster
  var deviceTotals = {};
  for (var p0=0; p0<PIPES.length; p0++) deviceTotals[PIPES[p0].k] = 0;
  var totalGal = 0, totalPools = 0, propRows = [];
  for (var i=0; i<states.length; i++){
    var sj = states[i].state_json || {};
    var pGal = 0, pPools = 0;
    if (sj.manualVolume){
      pPools = Math.max(1, Number(sj.manualPoolCount) || 1);
      pGal = Number(sj.manualTotalGallons) || 0;
    } else if (Array.isArray(sj.bodies)){
      pPools = sj.bodies.length;
      for (var b=0; b<sj.bodies.length; b++){
        pGal += (typeof bodyGallons === 'function') ? bodyGallons(sj.bodies[b]) : (Number(sj.bodies[b].gallons) || 0);
      }
    }
    totalGal += pGal;
    totalPools += pPools;
    propRows.push({ name: states[i].property_name || 'Property', poolCount: pPools, gal: pGal });
    for (var pi=0; pi<PIPES.length; pi++){
      var k = PIPES[pi].k;
      deviceTotals[k] += Number(sj[k]) || 0;
    }
  }
  var propCount = states.length;

  // Snapshot live state — restored unconditionally in finally
  var savedS  = JSON.parse(JSON.stringify(S));
  var savedEX = JSON.parse(JSON.stringify(EX));
  var savedR  = null;
  try { savedR = (typeof R !== 'undefined' && R) ? JSON.parse(JSON.stringify(R)) : null; } catch(_){}

  var captured = '';
  try {
    // Hydrate S with portfolio aggregate. S.bodies stays empty so the
    // captured Pool Configuration section renders ONLY its Total Volume
    // strong row — we then inject per-property rows via post-process.
    for (var dk in S){ if (S.hasOwnProperty(dk)) delete S[dk]; }
    for (var sk in savedS){ if (savedS.hasOwnProperty(sk)) S[sk] = savedS[sk]; }
    S.propertyName           = pName;
    S.bodies                 = [];
    S.manualVolume           = false;
    S.manualPoolCount        = 1;
    S.manualTotalGallons     = 0;
    S.pool_gallons           = totalGal;
    S.chlorine_pool_gallons  = totalGal;
    S.co2_pool_gallons       = 0;
    S.devicesByPool          = false;
    for (var pi2=0; pi2<PIPES.length; pi2++){
      S[PIPES[pi2].k] = deviceTotals[PIPES[pi2].k];
    }
    // EX: hide every section EXCEPT Assessment (which renders unconditionally).
    // Wipe images/videos/comments since portfolio doesn't have those at the
    // portfolio level; the media row stays in the layout but renders empty,
    // preserving the bottom-pinned slot that the page-break rules reserve.
    for (var dek in EX){ if (EX.hasOwnProperty(dek)) delete EX[dek]; }
    for (var sek in savedEX){ if (savedEX.hasOwnProperty(sek)) EX[sek] = savedEX[sek]; }
    EX.inclCover          = false;
    EX.inclLsCover        = false;
    EX.inclExecSummary    = false;
    EX.inclLsExecSummary  = false;
    EX.inclPoolProfiles   = false;
    EX.inclBackCover      = false;
    EX.inclLsBackCover    = false;
    EX.inclQuote          = false;
    EX.inclQuoteTerms     = false;
    EX.inclQuotePayment   = false;
    EX.layout             = 'portrait';
    EX.images             = [];
    // Populate Video Resources with DEFAULT_YT_URLS so the media row renders
    // (it's the bottom-pinned slot — without it the body collapses and the
    // page doesn't fill the full 11" sheet). Mirrors what initDefaultYt does
    // on a fresh single-property session.
    EX.ytEntries          = [];
    try {
      if (typeof DEFAULT_YT_URLS !== 'undefined' && typeof ytVideoId === 'function'){
        DEFAULT_YT_URLS.forEach(function(url){
          var vid = ytVideoId(url);
          if (vid) EX.ytEntries.push({ id:'yt-'+vid, url:url, videoId:vid, comment:'' });
        });
      }
    } catch(_){}
    EX.comments           = '';
    EX._captureMode       = true;
    window.__pfCapturedHtml = '';
    try { generateReport(); } catch(genErr){
      try { console.warn('[Portfolio Assessment] generateReport capture failed:', genErr); } catch(_){}
      window.__pfCapturedHtml = '';
    }
    captured = window.__pfCapturedHtml || '';
  } finally {
    // Restore live state — even on capture failure
    if (typeof EX !== 'undefined' && EX) EX._captureMode = false;
    for (var dks in S){  if (S.hasOwnProperty(dks)  && !(dks in savedS))  delete S[dks]; }
    for (var sks in savedS){  if (savedS.hasOwnProperty(sks))  S[sks]  = savedS[sks]; }
    for (var dke in EX){ if (EX.hasOwnProperty(dke) && !(dke in savedEX)) delete EX[dke]; }
    for (var sek2 in savedEX){ if (savedEX.hasOwnProperty(sek2)) EX[sek2] = savedEX[sek2]; }
    if (savedR && typeof R !== 'undefined' && R){
      for (var srk in savedR){ if (savedR.hasOwnProperty(srk)) R[srk] = savedR[srk]; }
    }
  }
  if (!captured) return '';

  // ── Post-process: only the two label changes the user asked for ──
  // (1) "Pool Configuration" header → "Property Configuration" + per-property rows
  var propRowsHtml = propRows.map(function(p){
    return '<div class="rpt-row">'
      + '<span class="k">' + esc(p.name) + ' <em style="color:#999;font-size:10px">' + p.poolCount + ' pool' + (p.poolCount===1?'':'s') + '</em></span>'
      + '<span class="v">' + fn(Math.round(p.gal)) + ' gal</span>'
    + '</div>';
  }).join('');
  captured = captured.replace(
    /<div class="rpt-stitle">Pool Configuration<\/div>/g,
    '<div class="rpt-stitle">Property Configuration</div>' + propRowsHtml
  );
  // The "Total Volume" strong row immediately follows the (now empty) pool
  // rows in the captured HTML. It already shows the portfolio's pool_gallons
  // total because we set S.pool_gallons = totalGal before capture.

  // (2) KPI strip — prepend "Properties / Pools" cell + bump to 5-col grid
  var newKpi = '<div class="rpt-kpi"><div class="rpt-kpi-lbl">Properties / Pools</div><div class="rpt-kpi-val teal">' + propCount + '/' + totalPools + '</div></div>';
  captured = captured.replace(
    /<div class="rpt-kpis(?:\s+rpt-kpis-5)?">/,
    '<div class="rpt-kpis rpt-kpis-5">' + newKpi
  );

  return captured;
}

function buildPortfolioAssessmentPageHtml_OLD_DELETED(pName, states, roll, today){
  if (!states || !states.length) return '';
  // Roll-up KPIs (same fields the per-property assessment uses)
  var propCount    = Number(roll.property_count) || states.length;
  var totalInv     = Number(roll.total_inv)      || 0;
  var totalMo      = Number(roll.total_mo)       || 0;
  var totalYr      = Number(roll.total_yr)       || 0;
  var totalDev     = Number(roll.total_dev)      || 0;
  var totalPoolGal = Number(roll.total_pool_gal) || 0;
  var blendedPb    = Number(roll.blended_payback_mo) || 0;
  // Tally pool count + per-SKU device counts across all properties (rollup
  // doesn't break down SKU counts, so compute directly from state_json).
  var totalPools = 0;
  var deviceTotals = {}; if (typeof PIPES !== 'undefined'){ for (var p0=0;p0<PIPES.length;p0++) deviceTotals[PIPES[p0].k] = 0; }
  for (var i=0; i<states.length; i++){
    var sj = states[i].state_json || {};
    if (sj.manualVolume){
      totalPools += Math.max(1, Number(sj.manualPoolCount) || 1);
    } else if (Array.isArray(sj.bodies)){
      totalPools += sj.bodies.length;
    }
    if (typeof PIPES !== 'undefined'){
      for (var pi=0; pi<PIPES.length; pi++){
        var k = PIPES[pi].k;
        deviceTotals[k] += Number(sj[k]) || 0;
      }
    }
  }
  // Property Configuration rows — name, pools, gallons per property
  var propConfigRows = '';
  for (var pj=0; pj<states.length; pj++){
    var st = states[pj];
    var sj2 = st.state_json || {};
    var pPoolCount = 0;
    var pGal = 0;
    if (sj2.manualVolume){
      pPoolCount = Math.max(1, Number(sj2.manualPoolCount) || 1);
      pGal = Number(sj2.manualTotalGallons) || 0;
    } else if (Array.isArray(sj2.bodies)){
      pPoolCount = sj2.bodies.length;
      for (var bb=0; bb<sj2.bodies.length; bb++){
        pGal += (typeof bodyGallons === 'function') ? bodyGallons(sj2.bodies[bb]) : (Number(sj2.bodies[bb].gallons) || 0);
      }
    }
    propConfigRows += '<div class="rpt-row"><span class="k">' + esc(st.property_name || 'Property') + ' <em style="color:#999;font-size:10px;font-style:normal">' + pPoolCount + ' pool' + (pPoolCount===1?'':'s') + '</em></span><span class="v">' + fn(Math.round(pGal)) + ' gal</span></div>';
  }
  // Device rows — one per SKU with rolled-up qty and line cost
  var devRows = '';
  if (typeof PIPES !== 'undefined'){
    for (var pk=0; pk<PIPES.length; pk++){
      var spec = PIPES[pk];
      var qty = deviceTotals[spec.k] || 0;
      if (qty <= 0) continue;
      devRows += '<div class="rpt-row"><span class="k">' + qty + ' × ' + spec.sz + ' AquaRev' + (qty>1?' Devices':' Device') + '</span><span class="v">' + fc(spec.price*qty, 0) + '</span></div>';
    }
  }
  if (!devRows){ devRows = '<div class="rpt-row"><span class="k" style="color:#999;font-style:italic">No devices configured across the portfolio yet</span><span class="v">—</span></div>'; }
  // Header
  var head = '<div class="rpt-head">'
    + '<div class="rpt-head-left">'
      + '<div class="rpt-logo">Cost Savings Assessment — Portfolio</div>'
      + '<div class="rpt-logo-sub">AQUAREV WATER</div>'
    + '</div>'
    + '<div class="rpt-head-right">'
      + '<div class="rpt-prop-name">' + esc(pName) + '</div>'
      + '<div class="rpt-prop-date">' + esc(today) + '</div>'
      + '<span class="rpt-nsf-badge">NSF/ANSI 50 Certified · IAPMO</span>'
    + '</div>'
  + '</div>';
  // KPI strip — first KPI: Properties/Pools (X/Y), then Devices, Monthly, Annual, Payback
  var kpis = '<div class="rpt-kpis rpt-kpis-5">'
    + '<div class="rpt-kpi"><div class="rpt-kpi-lbl">Properties / Pools</div><div class="rpt-kpi-val teal">' + propCount + '/' + totalPools + '</div></div>'
    + '<div class="rpt-kpi"><div class="rpt-kpi-lbl">Devices</div><div class="rpt-kpi-val teal">' + totalDev + '</div></div>'
    + '<div class="rpt-kpi"><div class="rpt-kpi-lbl">Monthly Savings</div><div class="rpt-kpi-val green">' + fc(totalMo, 0) + '</div></div>'
    + '<div class="rpt-kpi"><div class="rpt-kpi-lbl">Annual Savings</div><div class="rpt-kpi-val green">' + fc(totalYr, 0) + '</div></div>'
    + '<div class="rpt-kpi"><div class="rpt-kpi-lbl">Purchase Payback</div><div class="rpt-kpi-val teal">' + (blendedPb>0?Math.round(blendedPb)+' mo':'N/A') + '</div></div>'
  + '</div>';
  // Investment chart — reuse the same builder single-property uses. SVG
  // gradient ID is unique per call so the portfolio's Assessment chart
  // and any per-property Exec Summary charts don't collide.
  // Roll up R-style values across all properties by hydrating each property
  // into the globals + calling calcROI(). Same snapshot/restore pattern the
  // per-property capture loop uses, but in isolation here.
  var portfolioR = { items: [], inv: totalInv, total_mo: totalMo, total_yr: totalYr, total_dev: totalDev,
                     adv_mo: 0, adv_net_mo: 0, adv_net_yr: 0, adv_net_5: 0,
                     net5: 0, roi5: 0, payback: blendedPb,
                     gal_saved_5yr: 0, disc_amt: 0 };
  var itemsAccum = {};
  var savedS_a  = JSON.parse(JSON.stringify(S));
  var savedEX_a = JSON.parse(JSON.stringify(EX));
  try {
    for (var ai=0; ai<states.length; ai++){
      var aProp = states[ai];
      for (var dk1 in S){ if (S.hasOwnProperty(dk1) && !(dk1 in savedS_a))  delete S[dk1]; }
      for (var sk1 in savedS_a){ if (savedS_a.hasOwnProperty(sk1)) S[sk1] = savedS_a[sk1]; }
      if (aProp.state_json && typeof aProp.state_json === 'object'){
        for (var kk in aProp.state_json){ if (aProp.state_json.hasOwnProperty(kk)) S[kk] = aProp.state_json[kk]; }
      }
      var aR = null;
      try { aR = (typeof calcROI === 'function') ? calcROI() : null; } catch(_){ aR = null; }
      if (!aR) continue;
      portfolioR.adv_mo        += Number(aR.adv_mo)        || 0;
      portfolioR.gal_saved_5yr += Number(aR.gal_saved_5yr) || 0;
      portfolioR.disc_amt      += Number(aR.disc_amt)      || 0;
      if (Array.isArray(aR.items)){
        for (var it=0; it<aR.items.length; it++){
          var line = aR.items[it];
          var lbl = line.lbl || 'Unknown';
          if (!itemsAccum[lbl]) itemsAccum[lbl] = { lbl: lbl, sav: 0, pct: 0 };
          itemsAccum[lbl].sav += Number(line.sav) || 0;
        }
      }
    }
  } finally {
    for (var dks in S){  if (S.hasOwnProperty(dks)  && !(dks in savedS_a))  delete S[dks]; }
    for (var sks in savedS_a){  if (savedS_a.hasOwnProperty(sks))  S[sks]  = savedS_a[sks]; }
    for (var dke in EX){ if (EX.hasOwnProperty(dke) && !(dke in savedEX_a)) delete EX[dke]; }
    for (var ske in savedEX_a){ if (savedEX_a.hasOwnProperty(ske)) EX[ske] = savedEX_a[ske]; }
  }
  portfolioR.items = Object.keys(itemsAccum).map(function(k){ return itemsAccum[k]; });
  portfolioR.items.sort(function(a,b){ return b.sav - a.sav; });
  var totalSavCheck = portfolioR.items.reduce(function(s,x){ return s + x.sav; }, 0) || 1;
  portfolioR.items.forEach(function(x){ x.pct = x.sav / totalSavCheck; });
  portfolioR.net5       = (portfolioR.total_mo * 60) - portfolioR.inv;
  portfolioR.roi5       = portfolioR.inv > 0 ? portfolioR.net5 / portfolioR.inv : 0;
  portfolioR.adv_net_mo = portfolioR.total_mo - portfolioR.adv_mo;
  portfolioR.adv_net_yr = portfolioR.adv_net_mo * 12;
  portfolioR.adv_net_5  = portfolioR.adv_net_yr * 5;
  // Scenario visibility (mirrors single-property)
  var showAdv = (typeof EX !== 'undefined') ? (EX.bothScenarios || EX.scenario === 'advantage') : true;
  var showPur = (typeof EX !== 'undefined') ? (EX.bothScenarios || EX.scenario === 'purchase')  : true;
  // Purchase + Advantage scenario boxes — same .rpt-sbox markup as single
  var advBox = '', purBox = '';
  if (showAdv){
    advBox = '<div class="rpt-sbox">'
      + '<div class="rpt-sbox-title">Advantage Plan · 60 Month Finance</div>'
      + '<div class="rpt-row"><span class="k">60 Month Finance</span><span class="v">' + fc(portfolioR.adv_mo, 0) + '/mo</span></div>'
      + '<div class="rpt-row"><span class="k">Net Monthly Savings</span><span class="v ' + (portfolioR.adv_net_mo>=0?'pos':'neg') + '">' + fc(portfolioR.adv_net_mo, 0) + '</span></div>'
      + '<div class="rpt-row"><span class="k">Net Annual Savings</span><span class="v ' + (portfolioR.adv_net_yr>=0?'pos':'neg') + '">' + fc(portfolioR.adv_net_yr, 0) + '</span></div>'
      + '<div class="rpt-row strong"><span class="k">5-Year Net Savings</span><span class="v ' + (portfolioR.adv_net_5>=0?'pos':'neg') + '">' + fc(portfolioR.adv_net_5, 0) + '</span></div>'
    + '</div>';
  }
  if (showPur){
    purBox = '<div class="rpt-sbox pur">'
      + '<div class="rpt-sbox-title">Purchase · One-Time Investment</div>'
      + '<div class="rpt-row"><span class="k">Total Investment</span><span class="v">' + fc(portfolioR.inv, 0) + '</span></div>'
      + '<div class="rpt-row"><span class="k">Payback Period</span><span class="v teal">' + Math.round(portfolioR.payback) + ' months</span></div>'
      + '<div class="rpt-row"><span class="k">5-Year Net Savings</span><span class="v pos">' + fc(portfolioR.net5, 0) + '</span></div>'
      + '<div class="rpt-row strong"><span class="k">5-Year ROI</span><span class="v pos">' + (typeof fp === 'function' ? fp(portfolioR.roi5) : (Math.round(portfolioR.roi5*100)+'%')) + '</span></div>'
    + '</div>';
  }
  // Monthly Savings Breakdown — same inline-bar table single-property uses
  var maxSav = portfolioR.items.length ? Math.max.apply(null, portfolioR.items.map(function(x){return x.sav;})) : 1;
  var bkRows = portfolioR.items.map(function(x){
    var pct = Math.max(3, Math.round((x.sav/maxSav)*100));
    return '<tr>'
      + '<td><div class="rpt-bar-wrap">'
        + '<span style="min-width:120px;display:inline-block">' + esc(x.lbl) + '</span>'
        + '<div class="rpt-bar-bg"><div class="rpt-bar-fill" style="width:' + pct + '%"></div></div>'
      + '</div></td>'
      + '<td>' + fc(x.sav) + '</td>'
      + '<td>' + (typeof fp === 'function' ? fp(x.pct) : Math.round(x.pct*100)+'%') + '</td>'
    + '</tr>';
  }).join('');
  // Water Conservation 5-year total
  var waterHtml = '';
  if (typeof EX !== 'undefined' && EX.inclWater && portfolioR.gal_saved_5yr > 0){
    waterHtml = '<div>'
      + '<div class="rpt-stitle">Water Conservation — 5 Years</div>'
      + '<div class="rpt-stat-grid">'
        + '<div class="rpt-stat" style="grid-column:1/-1"><div class="rpt-stat-val">' + fn(Math.round(portfolioR.gal_saved_5yr)) + '</div><div class="rpt-stat-lbl">5-Year Water Conservation Total (Gallons)</div></div>'
      + '</div>'
    + '</div>';
  }
  // Savings projection weight (from current S.savings_weight if set)
  var savWeightVal = (typeof S !== 'undefined' && S.savings_weight != null) ? Math.round(Number(S.savings_weight) * 100) : null;
  // Investment chart — reuse the same builder single-property uses.
  var chartHtml = '';
  if (typeof buildInvestmentChart === 'function'){
    try { chartHtml = buildInvestmentChart(portfolioR.inv, portfolioR.total_mo, portfolioR.payback, portfolioR.net5); } catch(_){ chartHtml = ''; }
  }
  // Body — Property Configuration | AquaRev Devices Required + chart
  var body = '<div class="rpt-body">'
    // Row A: Property Configuration (left) | Devices Required (right)
    + '<div class="rpt-sec rpt-cols">'
      + '<div>'
        + '<div class="rpt-stitle">Property Configuration</div>'
        + propConfigRows
        + '<div class="rpt-row strong"><span class="k">Total Pool Volume</span><span class="v">' + fn(Math.round(totalPoolGal)) + ' gal</span></div>'
        + '<div class="rpt-row"><span class="k">Total Properties</span><span class="v">' + propCount + '</span></div>'
        + '<div class="rpt-row"><span class="k">Total Pools</span><span class="v">' + totalPools + '</span></div>'
      + '</div>'
      + '<div>'
        + '<div class="rpt-stitle">AquaRev Devices Required <span style="font-weight:500;color:#666;font-size:11px;letter-spacing:0;text-transform:none">(on Return Pipes)</span></div>'
        + devRows
        + (portfolioR.disc_amt > 0 ? '<div class="rpt-row"><span class="k">Discount Applied</span><span class="v pos">-' + fc(portfolioR.disc_amt, 0) + '</span></div>' : '')
        + '<div class="rpt-row strong"><span class="k">Total Investment</span><span class="v">' + fc(portfolioR.inv, 0) + '</span></div>'
      + '</div>'
    + '</div>'
    // Row B: Purchase Options + Advantage (stacked left) | Monthly Savings
    // Breakdown table + Water Conservation (right). Same layout as the
    // single-property portrait Assessment page.
    + '<div class="rpt-sec rpt-cols">'
      + '<div>'
        + '<div class="rpt-stitle">Purchase Options</div>'
        + purBox + advBox
      + '</div>'
      + '<div>'
        + '<div class="rpt-stitle">Monthly Savings Breakdown</div>'
        + '<table class="rpt-tbl">'
          + '<thead><tr><th>Category</th><th>Monthly Savings</th><th>% of Total</th></tr></thead>'
          + '<tbody>' + bkRows + '<tr class="tot"><td>Total</td><td>' + fc(portfolioR.total_mo) + '</td><td>100%</td></tr></tbody>'
        + '</table>'
        + (savWeightVal != null ? '<div class="rpt-row rpt-sw-applied" style="border-top:1px dashed #e0ecf4;margin-top:6px;padding-top:6px"><span class="k" style="color:#00b4d8;font-size:11px">Savings Projection Applied</span><span class="v" style="color:#00b4d8;font-size:11px">' + savWeightVal + '%</span></div>' : '')
        + (waterHtml ? '<div style="margin-top:10px">' + waterHtml + '</div>' : '')
      + '</div>'
    + '</div>'
    // Row C: Investment chart (full width)
    + (chartHtml ? '<div class="rpt-sec">' + chartHtml + '</div>' : '')
    + '<div class="rpt-disc">Portfolio aggregates rolled up from ' + propCount + ' propert' + (propCount===1?'y':'ies') + '. Per-property breakdowns follow on subsequent pages. Estimates based on lab-verified reduction rates (IAPMO R&amp;T). Actual savings may vary by property size, usage patterns, climate, and maintenance practices. AquaRev devices are NSF/ANSI 50 certified and tested by IAPMO R&amp;T.</div>'
  + '</div>';
  // CTA bar + footer match single-property
  var cta = '<div class="rpt-cta-bar">'
    + '<span class="cta-label">AquaRev Reference Information</span>'
    + '<a href="https://www.aquarevwater.us/data" target="_blank">www.aquarevwater.us/data</a>'
  + '</div>';
  var foot = '<div class="rpt-foot">'
    + '<div class="rpt-foot-logo">AQUAREV WATER</div>'
    + '<div class="rpt-foot-info">'
      + 't. 832-979-6758 · <a href="mailto:water@aquarevwater.us" style="color:inherit;text-decoration:none">water@aquarevwater.us</a> · <a href="https://www.aquarevwater.us" target="_blank" style="color:inherit;text-decoration:none">aquarevwater.us</a> · Made in USA<br>'
      + 'NSF/ANSI 50 · NSF-372 Lead-Free · US Pat. 10,934,180 · 11,358,881 · 12,037,269'
    + '</div>'
  + '</div>';
  return '<div class="rpt">' + head + kpis + body + cta + foot + '</div>';
}

/* P7+: Portfolio Property Profiles page(s).
   Two layouts:
     • cards          — one card per property (image stand-in + KPIs)
     • list-by-country — compact table grouped by country header
   Honors the 10-per-page rule for cards; list view paginates by row count. */
function buildPropertyProfilesPages(pName, states, today, layout){
  if (!states || !states.length) return [];
  function ppHeader(subtitle){
    return '<div class="rpt-es-head rpt-pp-es-head">'
      + '<div class="rpt-es-head-left">'
        + '<div class="rpt-es-logo">Property Profiles</div>'
        + '<div class="rpt-es-logo-sub">AQUAREV WATER</div>'
      + '</div>'
      + '<div class="rpt-es-head-right">'
        + '<div class="rpt-es-prop-name">' + esc(pName) + '</div>'
        + '<div class="rpt-es-prop-date">' + esc(today) + ' · ' + states.length + ' propert' + (states.length===1?'y':'ies') + (subtitle?' · ' + esc(subtitle):'') + '</div>'
        + '<span class="rpt-es-nsf-badge">NSF/ANSI 50 Certified · IAPMO</span>'
      + '</div>'
    + '</div>';
  }
  var ppFooter = '<div class="rpt-foot">'
    + '<div class="rpt-foot-logo">AQUAREV WATER</div>'
    + '<div class="rpt-foot-info">'
      + 't. 832-979-6758 · <a href="mailto:water@aquarevwater.us" style="color:inherit;text-decoration:none">water@aquarevwater.us</a> · <a href="https://www.aquarevwater.us" target="_blank" style="color:inherit;text-decoration:none">aquarevwater.us</a> · Made in USA<br>'
      + 'NSF/ANSI 50 · NSF-372 Lead-Free · US Pat. 10,934,180 · 11,358,881 · 12,037,269'
    + '</div>'
  + '</div>';
  // Build a card per property — same .rpt-pp-card chrome single uses, so
  // the layout / typography / pagination are pixel-identical to pool profiles.
  function cardHtml(p){
    var k = p.computed_kpis || {};
    var sj = p.state_json || {};
    var bodies = sj.bodies || [];
    var poolCount = bodies.length || Number(sj.manualPoolCount) || 0;
    var totalGal = 0;
    for (var b=0;b<bodies.length;b++) totalGal += Number(bodyGallons ? bodyGallons(bodies[b]) : bodies[b].gallons) || 0;
    if (!totalGal) totalGal = Number(sj.manualTotalGallons) || 0;
    var inv = Number(k.inv) || 0;
    var mo  = Number(k.total_mo) || 0;
    var pb  = k.payback ? Math.round(Number(k.payback)) : null;
    var country = p.country || '';
    var addr = p.formatted_address || '';
    // Image stand-in — same .rpt-pp-img-empty SVG as pool cards so visual
    // weight matches the pool profiles pages exactly.
    var img = '<div class="rpt-pp-img rpt-pp-img-empty"><svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#7db8cc" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 21h18"/><path d="M5 21V8l4-3v16"/><path d="M9 21V5l8-2v18"/><path d="M9 9h0M9 13h0M9 17h0M13 7h0M13 11h0M13 15h0M13 19h0"/></svg><div class="rpt-pp-img-empty-lbl">Property</div></div>';
    return '<div class="rpt-pp-card">'
      + img
      + '<div class="rpt-pp-info">'
        + '<div class="rpt-pp-head">'
          + '<div class="rpt-pp-name">' + esc(p.property_name || 'Property') + '</div>'
          + (country ? '<span class="rpt-pp-pill" style="background:#0891b2;color:#fff;border-color:#0891b2">' + esc(country) + '</span>' : '')
        + '</div>'
        + '<div class="rpt-pp-rows">'
          + (addr ? '<div class="rpt-pp-row"><span class="k">Address</span><span class="v" style="font-size:9.5px;text-align:right">' + esc(addr) + '</span></div>' : '')
          + '<div class="rpt-pp-row"><span class="k">Pools</span><span class="v">' + poolCount + '</span></div>'
          + '<div class="rpt-pp-row"><span class="k">Total Volume</span><span class="v">' + fn(Math.round(totalGal)) + ' gal</span></div>'
          + '<div class="rpt-pp-row"><span class="k">Investment</span><span class="v">' + (inv?fc(inv,0):'—') + '</span></div>'
          + '<div class="rpt-pp-row strong"><span class="k">Monthly Plan</span><span class="v pos">' + (mo?fc(mo,0) + ' / mo':'—') + '</span></div>'
          + (pb!=null ? '<div class="rpt-pp-row"><span class="k">Payback</span><span class="v">' + pb + ' mo</span></div>' : '')
        + '</div>'
      + '</div>'
    + '</div>';
  }
  // List-by-country: compact table grouped under country headers. ~24 rows
  // per page comfortably fits in a 8.5×11 portrait layout.
  if (layout === 'list-by-country'){
    var byCountry = {};
    var order = [];
    for (var i=0; i<states.length; i++){
      var c = (states[i].country && String(states[i].country).trim()) || 'Other';
      if (!byCountry[c]){ byCountry[c] = []; order.push(c); }
      byCountry[c].push(states[i]);
    }
    order.sort();
    var rowsHtml = '';
    for (var ci=0; ci<order.length; ci++){
      var cc = order[ci];
      var props = byCountry[cc];
      rowsHtml += '<tr class="rpt-ppl-country-row"><td colspan="5">' + esc(cc) + ' <span style="font-weight:400;opacity:.7">· ' + props.length + ' propert' + (props.length===1?'y':'ies') + '</span></td></tr>';
      for (var pi=0; pi<props.length; pi++){
        var pp = props[pi];
        var kk = pp.computed_kpis || {};
        var sjj = pp.state_json || {};
        var bb = sjj.bodies || [];
        var ppPools = bb.length || Number(sjj.manualPoolCount) || 0;
        var ppInv = Number(kk.inv) || 0;
        var ppMo  = Number(kk.total_mo) || 0;
        var ppPb  = kk.payback ? Math.round(Number(kk.payback)) : null;
        rowsHtml += '<tr class="rpt-ppl-row">'
          + '<td>' + esc(pp.property_name || 'Property') + (pp.formatted_address?'<div class="rpt-ppl-addr">' + esc(pp.formatted_address) + '</div>':'') + '</td>'
          + '<td class="num">' + ppPools + '</td>'
          + '<td class="num">' + (ppInv?fc(ppInv,0):'—') + '</td>'
          + '<td class="num">' + (ppMo?fc(ppMo,0) + ' / mo':'—') + '</td>'
          + '<td class="num">' + (ppPb!=null?ppPb + ' mo':'—') + '</td>'
        + '</tr>';
      }
    }
    return ['<div class="rpt-pp-page">'
      + ppHeader('List by Country')
      + '<div class="rpt-ppl-wrap" style="flex:1 1 0;min-height:0;overflow:hidden;padding:14px 22px;">'
        + '<table class="rpt-ppl-tbl">'
          + '<thead><tr><th>Property</th><th class="num">Pools</th><th class="num">Investment</th><th class="num">Monthly Plan</th><th class="num">Payback</th></tr></thead>'
          + '<tbody>' + rowsHtml + '</tbody>'
        + '</table>'
      + '</div>'
      + ppFooter
    + '</div>'];
  }
  // Cards: chunk 10 per page (matches the pool profile cards limit).
  var cardsArr = states.map(cardHtml);
  var PER_PAGE = 10;
  var total = Math.max(1, Math.ceil(cardsArr.length / PER_PAGE));
  var pages = [];
  for (var pp=0; pp<total; pp++){
    var slice = cardsArr.slice(pp*PER_PAGE, (pp+1)*PER_PAGE).join('');
    pages.push(
      '<div class="rpt-pp-page">'
      + ppHeader(total>1 ? ('Page ' + (pp+1) + ' of ' + total) : '')
      + '<div class="rpt-pp-grid">' + slice + '</div>'
      + ppFooter
    + '</div>'
    );
  }
  return pages;
}

/* P7+: Portfolio Pool Profiles "List" view — compact rows grouped under
   per-property headers. Used when poolProfilesLayout === 'list' on the
   Export panel. ~22-24 rows per page in portrait. */
function buildPortfolioPoolProfilesListPages(pName, states, today){
  if (!states || !states.length) return [];
  function ppHeader(subtitle){
    return '<div class="rpt-es-head rpt-pp-es-head">'
      + '<div class="rpt-es-head-left">'
        + '<div class="rpt-es-logo">Pool Profiles</div>'
        + '<div class="rpt-es-logo-sub">AQUAREV WATER</div>'
      + '</div>'
      + '<div class="rpt-es-head-right">'
        + '<div class="rpt-es-prop-name">' + esc(pName) + '</div>'
        + '<div class="rpt-es-prop-date">' + esc(today) + ' · ' + states.length + ' propert' + (states.length===1?'y':'ies') + (subtitle?' · ' + esc(subtitle):'') + '</div>'
        + '<span class="rpt-es-nsf-badge">NSF/ANSI 50 Certified · IAPMO</span>'
      + '</div>'
    + '</div>';
  }
  var ppFooter = '<div class="rpt-foot">'
    + '<div class="rpt-foot-logo">AQUAREV WATER</div>'
    + '<div class="rpt-foot-info">'
      + 't. 832-979-6758 · <a href="mailto:water@aquarevwater.us" style="color:inherit;text-decoration:none">water@aquarevwater.us</a> · <a href="https://www.aquarevwater.us" target="_blank" style="color:inherit;text-decoration:none">aquarevwater.us</a> · Made in USA<br>'
      + 'NSF/ANSI 50 · NSF-372 Lead-Free · US Pat. 10,934,180 · 11,358,881 · 12,037,269'
    + '</div>'
  + '</div>';
  // Flatten into a list of "row items": one per pool, with a sentinel-style
  // "header row" preceding each property block.
  var items = [];
  for (var pi=0; pi<states.length; pi++){
    var p = states[pi];
    var sj = p.state_json || {};
    var bodies = sj.bodies || [];
    var poolCount = bodies.length;
    items.push({ kind:'property', name:p.property_name||'Property', count:poolCount, country:p.country||'' });
    if (bodies.length){
      for (var b=0; b<bodies.length; b++){
        var body = bodies[b];
        var g = (typeof bodyGallons === 'function') ? bodyGallons(body) : (Number(body.gallons)||0);
        items.push({
          kind: 'pool',
          label: body.label || ('Pool ' + (b+1)),
          type:  (body.poolType === 'saltwater') ? 'Saltwater' : 'Chlorine',
          dims:  (body.inputMode !== 'gallons' && body.length && body.width && body.depth) ? (body.length+'×'+body.width+'×'+body.depth+' ft') : '',
          gal:   Math.round(g),
          co2:   !!body.co2Use
        });
      }
    } else if (sj.manualVolume){
      // Manual mode — synthesize one row showing the manual aggregate
      var nMan = Math.max(1, Number(sj.manualPoolCount) || 1);
      var gMan = Math.round(Number(sj.manualTotalGallons) || 0);
      items.push({ kind:'pool', label:nMan + ' pool' + (nMan===1?'':'s') + ' (manual estimate)', type:'Manual', dims:'', gal:gMan, co2:false });
    }
  }
  // Paginate — ~24 rows per page in portrait.
  var ROWS_PER_PAGE = 24;
  var pages = [];
  var total = Math.max(1, Math.ceil(items.length / ROWS_PER_PAGE));
  for (var pgi=0; pgi<total; pgi++){
    var chunk = items.slice(pgi*ROWS_PER_PAGE, (pgi+1)*ROWS_PER_PAGE);
    var rowsHtml = '';
    for (var ri=0; ri<chunk.length; ri++){
      var it = chunk[ri];
      if (it.kind === 'property'){
        rowsHtml += '<tr class="rpt-ppl-country-row"><td colspan="4">' + esc(it.name) + (it.country?' <span style="opacity:.7;font-weight:400">· ' + esc(it.country) + '</span>':'') + ' <span style="opacity:.7;font-weight:400">· ' + it.count + ' pool' + (it.count===1?'':'s') + '</span></td></tr>';
      } else {
        rowsHtml += '<tr class="rpt-ppl-row">'
          + '<td>' + esc(it.label) + (it.dims?'<div class="rpt-ppl-addr">' + esc(it.dims) + '</div>':'') + (it.co2?' <span class="rpt-pp-pill" style="background:#ecfeff;color:#0891b2;border-color:#a5f3fc;font-size:8.5px;padding:1px 5px">CO₂</span>':'') + '</td>'
          + '<td>' + esc(it.type) + '</td>'
          + '<td class="num">' + fn(it.gal) + ' gal</td>'
          + '<td></td>'
        + '</tr>';
      }
    }
    pages.push(
      '<div class="rpt-pp-page">'
      + ppHeader(total>1 ? ('Page ' + (pgi+1) + ' of ' + total) : '')
      + '<div class="rpt-ppl-wrap" style="flex:1 1 0;min-height:0;overflow:hidden;padding:14px 22px;">'
        + '<table class="rpt-ppl-tbl">'
          + '<thead><tr><th>Pool</th><th>Type</th><th class="num">Volume</th><th></th></tr></thead>'
          + '<tbody>' + rowsHtml + '</tbody>'
        + '</table>'
      + '</div>'
      + ppFooter
    + '</div>'
    );
  }
  return pages;
}

/* P7: Portfolio quote page — replicates the single-property quote chrome
   (Seller / Prepared For / Quote-meta top row + Equipment line items table
   + subtotal stack + footer) but with portfolio-rolled data. */
function buildPortfolioQuotePageHtml(pName, quote, lineItems, states, today){
  var qDate = today;
  // Header band — matches Executive Summary look (.rpt-es-head).
  var qHeader = '<div class="rpt-es-head">'
    + '<div class="rpt-es-head-left">'
      + '<div class="rpt-es-logo">PORTFOLIO QUOTE</div>'
      + '<div class="rpt-es-logo-sub">AQUAREV WATER</div>'
    + '</div>'
    + '<div class="rpt-es-head-right">'
      + '<div class="rpt-es-prop-name">' + esc(pName) + '</div>'
      + '<div class="rpt-es-prop-date">' + esc(qDate) + ' · ' + states.length + ' propert' + (states.length===1?'y':'ies') + '</div>'
    + '</div>'
  + '</div>';
  var qFooter = '<div class="rpt-foot rpt-es-foot">'
    + '<div class="rpt-foot-logo">AQUAREV WATER</div>'
    + '<div class="rpt-foot-info">'
      + 't. 832-979-6758 · <a href="mailto:water@aquarevwater.us" style="color:inherit;text-decoration:none">water@aquarevwater.us</a> · <a href="https://www.aquarevwater.us" target="_blank" style="color:inherit;text-decoration:none">aquarevwater.us</a> · Made in USA<br>'
      + 'NSF/ANSI 50 · NSF-372 Lead-Free · US Pat. 10,934,180 · 11,358,881 · 12,037,269'
    + '</div>'
  + '</div>';
  var SELLER_BLOCK = 'KD Enterprises LLC, dba AquaRev Water\n4348 - Waialae Ave. #621\nHonolulu, HI, 96816, USA\nt. (832) 979-6758\ne. water@aquarevwater.us';
  var buyerLines = [];
  buyerLines.push(quote.buyerName || pName);
  if (quote.billTo)     buyerLines.push(quote.billTo);
  if (quote.buyerPhone) buyerLines.push('t. ' + quote.buyerPhone);
  if (quote.buyerEmail) buyerLines.push('e. ' + quote.buyerEmail);
  var BUYER_BLOCK = buyerLines.join('\n');
  // Top row — Seller / Buyer / Meta — same .rpt-q-top-row chrome single uses.
  var topRow = '<div class="rpt-q-top-row">'
    + '<div class="rpt-q-top-col">'
      + '<div class="rpt-q-block-title">Seller</div>'
      + '<div class="rpt-q-block-text">' + esc(SELLER_BLOCK) + '</div>'
    + '</div>'
    + '<div class="rpt-q-top-col">'
      + '<div class="rpt-q-block-title">Prepared For — Buyer</div>'
      + '<div class="rpt-q-block-text">' + esc(BUYER_BLOCK) + '</div>'
    + '</div>'
    + '<div class="rpt-q-top-col">'
      + '<div class="rpt-q-block-title">PORTFOLIO QUOTE</div>'
      + '<div class="rpt-q-top-card-body">'
        + '<dl class="rpt-q-meta-rows">'
          + '<dt>Date</dt><dd>' + esc(qDate) + '</dd>'
          + '<dt>Properties</dt><dd>' + states.length + '</dd>'
          + '<dt>Currency</dt><dd>USD</dd>'
          + (quote.shippingTerm ? '<dt>Shipping</dt><dd>' + esc(quote.shippingTerm) + '</dd>' : '')
        + '</dl>'
      + '</div>'
    + '</div>'
  + '</div>';
  // Equipment line items — same .rpt-q-tbl chrome + .rpt-q-section-row band.
  var rowsHtml = '<tr class="rpt-q-section-row"><td colspan="5">EQUIPMENT</td></tr>';
  if (lineItems && lineItems.length){
    rowsHtml += lineItems.map(function(L){
      return '<tr>'
        + '<td>' + esc(L.label) + (L.flow?' <span style="color:#888;font-size:9.5px">— ' + esc(L.flow) + '</span>':'') + '</td>'
        + '<td class="rpt-q-num">' + L.qty + '</td>'
        + '<td class="rpt-q-num">$' + fn(L.price) + '</td>'
        + '<td class="rpt-q-num">$' + fn(L.total) + '</td>'
        + '<td class="rpt-q-num"></td>'
      + '</tr>';
    }).join('');
  } else {
    rowsHtml += '<tr><td colspan="5" style="text-align:center;font-style:italic;color:#888;padding:14px 8px">No line items rolled up. Add devices on at least one property.</td></tr>';
  }
  // If shipping > 0 add a SHIPPING section row + line
  var ship = Number(quote.shippingCost) || 0;
  if (ship > 0){
    rowsHtml += '<tr class="rpt-q-section-row"><td colspan="5">SHIPPING</td></tr>'
      + '<tr>'
        + '<td>Consolidated Shipping' + (quote.shippingTerm?' (' + esc(quote.shippingTerm) + ')':'') + '</td>'
        + '<td class="rpt-q-num">1</td>'
        + '<td class="rpt-q-num">$' + fn(ship) + '</td>'
        + '<td class="rpt-q-num">$' + fn(ship) + '</td>'
        + '<td class="rpt-q-num"></td>'
      + '</tr>';
  }
  // Totals — match the single-property buildQuoteTotals layout (rpt-q-totals)
  var liSubtotal = (lineItems||[]).reduce(function(s,L){ return s + (L.total||0); }, 0);
  var disc       = Number(quote.discountPct) || 0;
  var discAmt    = liSubtotal * (disc/100);
  var afterDisc  = liSubtotal - discAmt;
  var taxRate    = Number(quote.taxRate) || 0;
  var taxAmt     = (afterDisc + ship) * (taxRate/100);
  var grandTotal = afterDisc + ship + taxAmt;
  var depositPct = Number(quote.depositPct) || 0;
  var depositAmt = grandTotal * (depositPct/100);
  var totalsBlock = '<dl class="rpt-q-totals-table">'
    + '<dt>Subtotal</dt><dd>$' + fn(liSubtotal) + '</dd>'
    + (disc>0   ? '<dt>Discount (' + disc + '%)</dt><dd>-$' + fn(discAmt) + '</dd>' : '')
    + (ship>0   ? '<dt>Shipping</dt><dd>$' + fn(ship) + '</dd>' : '')
    + (taxRate>0? '<dt>Tax (' + taxRate + '%)</dt><dd>$' + fn(taxAmt) + '</dd>' : '')
    + '<div class="strong"><dt>Total</dt><dd>$' + fn(grandTotal) + '</dd></div>'
    + (depositPct>0 ? '<dt>Deposit (' + depositPct + '%)</dt><dd>$' + fn(depositAmt) + '</dd>' : '')
  + '</dl>';
  var termsBlock = quote.stdTerms ? '<div class="terms"><div class="terms-title">Standard Terms</div>' + esc(quote.stdTerms).replace(/\n/g,'<br>') + '</div>' : '<div class="terms"></div>';
  var totalsRow = '<div class="rpt-q-totals">' + termsBlock + totalsBlock + '</div>';
  // Assemble page using .rpt-es-page chrome — this gives us the full
  // 8.5×11 page height, footer pinned to bottom via flex auto-margin,
  // and proper @page break behavior. Identical to single-property quote.
  return '<div class="rpt-es-page rpt-q-page rpt-q-page-order">'
    + qHeader
    + '<div class="rpt-q-body" style="flex:1 1 0;min-height:0;overflow:hidden;padding:18px 32px 14px;display:flex;flex-direction:column">'
      + topRow
      + '<table class="rpt-q-tbl" style="width:100%;border-collapse:collapse;margin-top:14px;font-size:10.5px;color:#222">'
        + '<thead><tr style="background:#f5fbff;border-bottom:1.5px solid #48cae4">'
          + '<th style="text-align:left;padding:6px 8px;font-family:\'Bebas Neue\',sans-serif;font-size:9.5px;letter-spacing:1.5px;color:#0a2540">Item</th>'
          + '<th style="text-align:right;padding:6px 8px;font-family:\'Bebas Neue\',sans-serif;font-size:9.5px;letter-spacing:1.5px;color:#0a2540">Qty</th>'
          + '<th style="text-align:right;padding:6px 8px;font-family:\'Bebas Neue\',sans-serif;font-size:9.5px;letter-spacing:1.5px;color:#0a2540">Unit</th>'
          + '<th style="text-align:right;padding:6px 8px;font-family:\'Bebas Neue\',sans-serif;font-size:9.5px;letter-spacing:1.5px;color:#0a2540">Line Total</th>'
          + '<th style="text-align:right;padding:6px 8px;font-family:\'Bebas Neue\',sans-serif;font-size:9.5px;letter-spacing:1.5px;color:#0a2540"></th>'
        + '</tr></thead>'
        + '<tbody>' + rowsHtml + '</tbody>'
      + '</table>'
      + totalsRow
    + '</div>'
    + qFooter
  + '</div>';
}

/* P7: Portfolio Purchase Terms page — full-page legal block.
   Uses the EXACT same chrome as single-property: .rpt-es-page +
   .rpt-q-page-terms with the .rpt-q-terms-body wrapper, .rpt-q-terms-title,
   .rpt-q-terms-text. Footer pins to the bottom of the page. */
function buildPortfolioPurchaseTermsPageHtml(pName, quote, termsText, today){
  // Render plain-text terms as HTML — single-property has an RTE so its
  // termsHtml is already nicely structured. For the portfolio textarea
  // input we convert newlines and the standard "N." numbering into the
  // same .rpt-q-terms-ol structure single uses. Falls back to safe
  // line-break preservation for free-form text.
  var bodyHtml;
  if (typeof renderTermsHtml === 'function'){
    bodyHtml = renderTermsHtml(termsText);
  } else {
    // Fallback: escape + preserve newlines as <br>
    bodyHtml = esc(termsText).replace(/\n/g, '<br>');
  }
  var qHeader = '<div class="rpt-es-head">'
    + '<div class="rpt-es-head-left">'
      + '<div class="rpt-es-logo">PURCHASE TERMS</div>'
      + '<div class="rpt-es-logo-sub">AQUAREV WATER</div>'
    + '</div>'
    + '<div class="rpt-es-head-right">'
      + '<div class="rpt-es-prop-name">' + esc(pName) + '</div>'
      + '<div class="rpt-es-prop-date">' + esc(today) + '</div>'
    + '</div>'
  + '</div>';
  var qFooter = '<div class="rpt-foot rpt-es-foot">'
    + '<div class="rpt-foot-logo">AQUAREV WATER</div>'
    + '<div class="rpt-foot-info">'
      + 't. 832-979-6758 · <a href="mailto:water@aquarevwater.us" style="color:inherit;text-decoration:none">water@aquarevwater.us</a> · <a href="https://www.aquarevwater.us" target="_blank" style="color:inherit;text-decoration:none">aquarevwater.us</a> · Made in USA<br>'
      + 'NSF/ANSI 50 · NSF-372 Lead-Free · US Pat. 10,934,180 · 11,358,881 · 12,037,269'
    + '</div>'
  + '</div>';
  // Top row (Seller / Buyer / Meta) — same as quote page so the rep gets
  // visual continuity. Reuse SELLER + buyer assembly from the quote builder.
  var SELLER_BLOCK = 'KD Enterprises LLC, dba AquaRev Water\n4348 - Waialae Ave. #621\nHonolulu, HI, 96816, USA\nt. (832) 979-6758\ne. water@aquarevwater.us';
  var buyerLines = [];
  buyerLines.push(quote.buyerName || pName);
  if (quote.billTo)     buyerLines.push(quote.billTo);
  if (quote.buyerPhone) buyerLines.push('t. ' + quote.buyerPhone);
  if (quote.buyerEmail) buyerLines.push('e. ' + quote.buyerEmail);
  var BUYER_BLOCK = buyerLines.join('\n');
  var topRow = '<div class="rpt-q-top-row">'
    + '<div class="rpt-q-top-col">'
      + '<div class="rpt-q-block-title">Seller</div>'
      + '<div class="rpt-q-block-text">' + esc(SELLER_BLOCK) + '</div>'
    + '</div>'
    + '<div class="rpt-q-top-col">'
      + '<div class="rpt-q-block-title">Prepared For — Buyer</div>'
      + '<div class="rpt-q-block-text">' + esc(BUYER_BLOCK) + '</div>'
    + '</div>'
    + '<div class="rpt-q-top-col">'
      + '<div class="rpt-q-block-title">Purchase Terms and Conditions</div>'
      + '<div class="rpt-q-top-card-body">'
        + '<dl class="rpt-q-meta-rows">'
          + '<dt>Date</dt><dd>' + esc(today) + '</dd>'
          + '<dt>Portfolio</dt><dd>' + esc(pName) + '</dd>'
        + '</dl>'
      + '</div>'
    + '</div>'
  + '</div>';
  return '<div class="rpt-es-page rpt-q-page rpt-q-page-terms">'
    + qHeader
    + '<div class="rpt-q-terms-body">'
      + topRow
      + '<div class="rpt-q-terms-title">Purchase Terms and Conditions</div>'
      + '<div class="rpt-q-terms-text">' + bodyHtml + '</div>'
    + '</div>'
    + qFooter
  + '</div>';
}

/* Mount portfolio report into #ar2-report and invoke the same print path
   single-property generateReport uses. Reps see either the same Preview
   toolbar (Preview mode) or jump straight to Save-as-PDF (Download mode). */
function renderPortfolioReportToDOM(pName, sections, mode){
  var rEl = document.getElementById('ar2-report');
  if (!rEl){
    alert('Report mount not found — refresh and try again.');
    return;
  }
  // Every section returned by buildPortfolioReportPreview is already wrapped
  // in proper .rpt-cover-page / .rpt-es-page / .rpt-pp-page / .rpt / .rpt-fs-img-page
  // chrome — same classes single-property uses — so the existing print CSS
  // handles page breaks + page sizes correctly. We just concatenate.
  rEl.innerHTML = sections.join('');

  // Force portrait letter (8.5×11) for the portfolio report — matches the
  // single-property portrait layout so reps don't get jarring size shifts.
  var orientEl = document.getElementById('ar2-orient');
  if (!orientEl){ orientEl = document.createElement('style'); orientEl.id = 'ar2-orient'; document.head.appendChild(orientEl); }
  orientEl.textContent = '@media print{@page{size:portrait;margin:0mm;}}';

  // Hide all body children except #ar2-report (matches generateReport flow)
  var hiddenEls = [];
  var bodyKids = document.body.children;
  for (var bi = 0; bi < bodyKids.length; bi++){
    if (bodyKids[bi].id !== 'ar2-report' && bodyKids[bi].id !== 'ar2-orient'){
      hiddenEls.push({ el: bodyKids[bi], prev: bodyKids[bi].style.cssText });
      bodyKids[bi].style.cssText += 'display:none!important;';
    }
  }
  var rElParent = rEl.parentNode;
  var rElNext   = rEl.nextSibling;
  document.body.appendChild(rEl);
  rEl.style.cssText = 'display:block;';

  var origDocTitle = document.title;
  document.title = pName + ' — Portfolio';

  function restoreApp(){
    document.title = origDocTitle;
    rEl.style.cssText = 'display:none;';
    if (rElNext) rElParent.insertBefore(rEl, rElNext);
    else rElParent.appendChild(rEl);
    for (var ri = 0; ri < hiddenEls.length; ri++){
      hiddenEls[ri].el.style.cssText = hiddenEls[ri].prev;
    }
    window.scrollTo(0, 0);
  }

  // Wait for fonts + images, then either show the preview toolbar
  // (Preview mode) or print directly (Download mode).
  var fontReady = (document.fonts && document.fonts.ready) ? document.fonts.ready : Promise.resolve();
  fontReady.then(function(){
    var imgs = rEl.querySelectorAll('img');
    var imgPromises = [];
    for (var ii = 0; ii < imgs.length; ii++){
      if (!imgs[ii].complete){
        imgPromises.push(new Promise(function(resolve){
          var im = imgs[ii];
          im.onload = resolve;
          im.onerror = resolve;
        }));
      }
    }
    Promise.all(imgPromises).then(function(){
      setTimeout(function(){
        var restored = false;
        function doRestore(){ if (restored) return; restored = true; restoreApp(); }
        if (mode === 'exp-preview'){
          var tb = document.createElement('div');
          tb.id = 'ar2-preview-toolbar';
          tb.style.cssText = 'position:fixed;top:0;left:0;right:0;background:#040f1e;padding:12px 20px;display:flex;justify-content:space-between;align-items:center;z-index:999999;box-shadow:0 2px 10px rgba(0,0,0,.4);';
          tb.innerHTML = '<button id="ar2-pf-prev-back" style="background:rgba(255,255,255,.1);color:#fff;border:1px solid rgba(255,255,255,.2);padding:8px 16px;border-radius:6px;cursor:pointer;font-size:13px">← Return to Portfolio</button>'
            + '<div style="color:#fff;font-size:13px;font-weight:600">' + escHtml(pName) + ' — Portfolio Preview</div>'
            + '<button id="ar2-pf-prev-dl" style="background:linear-gradient(135deg,#00b4d8,#48cae4);color:#fff;border:none;padding:8px 20px;border-radius:6px;cursor:pointer;font-size:13px;font-weight:600">Download PDF</button>';
          document.body.appendChild(tb);
          rEl.style.paddingTop = '56px';
          document.getElementById('ar2-pf-prev-back').onclick = function(){
            document.body.removeChild(tb);
            rEl.style.paddingTop = '';
            doRestore();
          };
          document.getElementById('ar2-pf-prev-dl').onclick = function(){
            document.body.removeChild(tb);
            rEl.style.paddingTop = '';
            window.addEventListener('afterprint', function onAfter(){
              window.removeEventListener('afterprint', onAfter);
              setTimeout(doRestore, 100);
            });
            window.print();
            setTimeout(function(){ if (!restored) doRestore(); }, 3000);
          };
        } else if (mode === 'exp-archive'){
          // Save to Archive — currently a stub. We still want the rep to
          // SEE the report (so they know what was archived) so we run the
          // preview path. Real DB persistence of the rendered portfolio PDF
          // is a follow-up; for now this confirms the data + flow.
          alert('Portfolio report preview generated. Real archive persistence (PDF blob saved to Supabase Storage) is a follow-up; for now the preview is open so you can verify the output.');
          var tb2 = document.createElement('div');
          tb2.id = 'ar2-preview-toolbar';
          tb2.style.cssText = 'position:fixed;top:0;left:0;right:0;background:#040f1e;padding:12px 20px;display:flex;justify-content:space-between;align-items:center;z-index:999999;box-shadow:0 2px 10px rgba(0,0,0,.4);';
          tb2.innerHTML = '<button id="ar2-pf-prev-back" style="background:rgba(255,255,255,.1);color:#fff;border:1px solid rgba(255,255,255,.2);padding:8px 16px;border-radius:6px;cursor:pointer;font-size:13px">← Return to Portfolio</button>'
            + '<div style="color:#fff;font-size:13px;font-weight:600">' + escHtml(pName) + ' — Archive preview</div>'
            + '<button id="ar2-pf-prev-dl" style="background:linear-gradient(135deg,#22c55e,#4ade80);color:#040f1e;border:none;padding:8px 20px;border-radius:6px;cursor:pointer;font-size:13px;font-weight:700">Download PDF</button>';
          document.body.appendChild(tb2);
          rEl.style.paddingTop = '56px';
          document.getElementById('ar2-pf-prev-back').onclick = function(){
            document.body.removeChild(tb2);
            rEl.style.paddingTop = '';
            doRestore();
          };
          document.getElementById('ar2-pf-prev-dl').onclick = function(){
            document.body.removeChild(tb2);
            rEl.style.paddingTop = '';
            window.addEventListener('afterprint', function onAfter(){
              window.removeEventListener('afterprint', onAfter);
              setTimeout(doRestore, 100);
            });
            window.print();
            setTimeout(function(){ if (!restored) doRestore(); }, 3000);
          };
        } else {
          // Download mode — print directly
          window.addEventListener('afterprint', function onAfter(){
            window.removeEventListener('afterprint', onAfter);
            setTimeout(doRestore, 100);
          });
          window.print();
          setTimeout(function(){ if (!restored) doRestore(); }, 3000);
        }
      }, 500);
    });
  });
}
// Tiny helpers used by buildPortfolioReportPreview
function kpiCard(lbl, val){
  return '<div style="padding:12px 14px;background:rgba(0,180,216,.06);border:1px solid rgba(0,180,216,.18);border-radius:8px">'
    + '<div style="font-size:10px;letter-spacing:1.5px;text-transform:uppercase;color:#7db8cc;margin-bottom:4px">' + escHtml(lbl) + '</div>'
    + '<div style="font-family:\'JetBrains Mono\',monospace;font-size:18px;color:#fff;font-weight:700">' + (typeof val==='string'?escHtml(val):val) + '</div>'
    + '</div>';
}
function escHtml(s){ return String(s==null?'':s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); }

/* ── P2: orphan-data fix ────────────────────────────────────────────────
   When the rep is mid-trace on Map Pools and flips the "Portfolio" radio,
   this function fires AFTER the New Portfolio modal succeeds. It captures
   the live calculator + map state and writes it directly into a brand-new
   property inside the just-created portfolio — then enters property mode
   so the rep keeps working without losing anything.

   Falls back to the Portfolio Overview (empty roster) on insert failure
   so the rep can re-add manually if anything goes wrong.
   ──────────────────────────────────────────────────────────────────────── */
function seedFirstPropertyFromMapPools(newPortfolio){
  var c = (window.AR2_CLOUD && AR2_CLOUD.getClient) ? AR2_CLOUD.getClient() : null;
  if (!c){
    alert('Portfolio created, but cloud is unavailable to save the current property. Add it manually from the Portfolio Overview.');
    if (window.AR2_PF) AR2_PF.openPortfolio(newPortfolio.id);
    var bankBtn = document.getElementById('ar2-bank-nav');
    if (bankBtn) bankBtn.click();
    return;
  }
  // Resolve a property name from whatever the rep has provided so far —
  // calculator state first, Map Pools input second, generic fallback last.
  var mapName = '';
  try { if (window.AR2_MAP && AR2_MAP.getPropertyName) mapName = AR2_MAP.getPropertyName() || ''; } catch(_){}
  var propName = (S.propertyName && String(S.propertyName).trim()) ||
                 (mapName && String(mapName).trim()) ||
                 'New Property';
  // Snapshot the live state. cloneJson lives in AR2_PF's IIFE so we
  // duplicate inline here — defensive deep clone.
  var stateJson = JSON.parse(JSON.stringify(S));
  var exJson    = JSON.parse(JSON.stringify(EX));
  var poolMeasureJson = null;
  try { if (window.AR2_MAP && AR2_MAP.exportSnapshot) poolMeasureJson = AR2_MAP.exportSnapshot() || null; } catch(_){}
  // Capture the map-resolved formatted address (if the rep located the
  // property via Google search). Persists to portfolio_properties.formatted_address
  // so it surfaces in the Property Profiles roster + can drive future
  // grouping (country headers, ship-to auto-populate, etc.).
  var formattedAddr = '';
  try { if (window.AR2_MAP && AR2_MAP.getFormattedAddress) formattedAddr = AR2_MAP.getFormattedAddress() || ''; } catch(_){}
  // Ensure the property name is reflected in the persisted state too —
  // so the calc reads it back consistently on re-entry.
  if (propName && !stateJson.propertyName) stateJson.propertyName = propName;
  // Also mirror the address into S.formattedAddress so it survives a
  // round-trip through enterProperty / saveCurrentProperty.
  if (formattedAddr && !stateJson.formattedAddress) stateJson.formattedAddress = formattedAddr;

  c.from('portfolio_properties').insert({
    portfolio_id: newPortfolio.id,
    property_name: propName,
    order_index: 0,
    formatted_address: formattedAddr || null,
    state_json: stateJson,
    ex_json: exJson,
    pool_measure_json: poolMeasureJson
  }).select('id').single().then(function(rs){
    if (rs.error){
      alert('Portfolio created but the current property could not be saved: ' +
            (rs.error.message || 'unknown error') +
            '. Add it manually from the Portfolio Overview.');
      AR2_PF.openPortfolio(newPortfolio.id);
      var bb = document.getElementById('ar2-bank-nav');
      if (bb) bb.click();
      return;
    }
    // Invalidate the AR2_PF property-list cache for this portfolio so the
    // Overview roster shows the new property immediately.
    try {
      if (AR2_PF._state){
        AR2_PF._state.properties[newPortfolio.id] = null;
        AR2_PF._state.rollup[newPortfolio.id]     = null;
      }
    } catch(_){}
    // Enter property mode for the new property. enterProperty fetches the
    // full row, snapshots the user's prior session, hydrates S/EX from
    // state_json, and loads pool_measure_json into AR2_MAP. The rep ends
    // up on Map Pools with their work intact, now bound to this portfolio.
    AR2_PF.enterProperty(rs.data.id);
  }).catch(function(e){
    alert('Portfolio created but the current property could not be saved: ' +
          (e.message || 'unknown error') +
          '. Add it manually from the Portfolio Overview.');
    AR2_PF.openPortfolio(newPortfolio.id);
    var bb = document.getElementById('ar2-bank-nav');
    if (bb) bb.click();
  });
}

(function(){
  var picker, pickerSel, pickerHint, pickerChip, pickerChipName;
  function $els(){
    picker         = picker         || document.getElementById('ap-pf-picker');
    pickerSel      = pickerSel      || document.getElementById('ap-pf-picker-select');
    pickerHint     = pickerHint     || document.getElementById('ap-pf-picker-hint');
    pickerChip     = pickerChip     || document.getElementById('ap-pf-picker-chip');
    pickerChipName = pickerChipName || document.getElementById('ap-pf-picker-chip-name');
  }
  function getRadio(value){
    return document.querySelector('input[name="ap-create-mode"][value="'+value+'"]');
  }
  function checkRadio(value){
    var r = getRadio(value);
    if (r) r.checked = true;
  }
  function showPicker(show){
    $els();
    if (!picker) return;
    picker.classList.toggle('is-active', !!show);
  }
  function setChip(name){
    $els();
    if (!pickerChip) return;
    if (name){
      if (pickerChipName) pickerChipName.textContent = name;
      pickerChip.classList.add('is-active');
    } else {
      pickerChip.classList.remove('is-active');
    }
  }
  function clearTarget(){
    window.AR2_MAP_PF_TARGET = null;
    setChip(null);
  }
  function setTarget(id, name){
    window.AR2_MAP_PF_TARGET = { id: id, name: name };
    setChip(name);
  }

  // Populate the <select> from AR2_PF.portfolios(). RLS already scopes the
  // list to what the signed-in user can see, so we don't filter client-side.
  function populatePicker(){
    $els();
    if (!pickerSel) return;
    var list = (window.AR2_PF && AR2_PF.portfolios && AR2_PF.portfolios()) || [];
    var sel = pickerSel;
    sel.disabled = false;
    // Rebuild options. First item is always the placeholder; last item is
    // the "+ New portfolio…" pivot. Existing portfolios sit in between.
    var html = '<option value="" disabled selected>'
      + (list.length ? '— Select a portfolio —' : '— No portfolios yet —')
      + '</option>';
    for (var i = 0; i < list.length; i++){
      var p = list[i];
      html += '<option value="'+p.id+'">'+ (p.name || 'Untitled') +'</option>';
    }
    html += '<option value="__new__">+ New portfolio…</option>';
    sel.innerHTML = html;
    if (pickerHint){
      var isAdmin = !!(window.AR2_CLOUD && AR2_CLOUD.isAdmin && AR2_CLOUD.isAdmin());
      pickerHint.textContent = list.length
        ? (isAdmin
            ? 'Admin view — showing all portfolios across users.'
            : 'Showing portfolios you own.')
        : 'No portfolios yet — choose "+ New portfolio…" to create one.';
    }
  }

  // Load portfolios from Supabase if we haven't yet. Shows a "Loading…"
  // state on the <select> while the fetch is in flight.
  function loadAndPopulate(){
    $els();
    if (!pickerSel) return;
    if (!window.AR2_PF || !AR2_PF.isEnabled || !AR2_PF.isEnabled()){
      pickerSel.innerHTML = '<option value="" disabled selected>Portfolios unavailable</option>';
      pickerSel.disabled = true;
      if (pickerHint) pickerHint.textContent = 'Portfolios are not available in this account.';
      return;
    }
    pickerSel.disabled = true;
    pickerSel.innerHTML = '<option value="" disabled selected>Loading…</option>';
    if (pickerHint) pickerHint.textContent = 'Loading your portfolios…';
    AR2_PF.loadPortfolios().then(function(){ populatePicker(); })
      .catch(function(e){
        pickerSel.disabled = false;
        pickerSel.innerHTML = '<option value="" disabled selected>— Couldn\'t load —</option>';
        if (pickerHint) pickerHint.textContent = (e && e.message) || 'Load failed. Try again.';
      });
  }

  // After New Portfolio modal closes, this watches for the modal node being
  // removed from <body>. On removal: if the portfolios count grew, we treat
  // it as a successful create and act accordingly per the caller's context.
  function watchPortfolioModal(onCreated, onCancelled){
    var modal = document.getElementById('ar-pf-new-modal');
    if (!modal || !window.MutationObserver){
      if (onCancelled) onCancelled();
      return;
    }
    var before = (window.AR2_PF && AR2_PF.portfolios && AR2_PF.portfolios().length) || 0;
    var obs = new MutationObserver(function(){
      if (document.getElementById('ar-pf-new-modal')) return;
      obs.disconnect();
      var after = (window.AR2_PF && AR2_PF.portfolios && AR2_PF.portfolios().length) || 0;
      if (after > before){
        // Newest portfolio is prepended to the array (see createPortfolio
        // in AR2_PF — line where pfState.portfolios is updated).
        var list = AR2_PF.portfolios();
        var newest = list && list[0];
        if (onCreated) onCreated(newest);
      } else {
        if (onCancelled) onCancelled();
      }
    });
    obs.observe(document.body, { childList: true });
  }

  // Main radio change handler.
  function onModeChange(e){
    var t = e.target;
    if (!t || t.name !== 'ap-create-mode') return;
    var mode = t.value;

    // Mode: "property" — clear any portfolio binding, hide picker.
    if (mode === 'property'){
      clearTarget();
      showPicker(false);
      return;
    }

    // Both portfolio modes require AR2_PF to be enabled.
    if (!window.AR2_PF || !AR2_PF.isEnabled || !AR2_PF.isEnabled()){
      alert('Portfolios are not available in this account.');
      checkRadio('property');
      clearTarget();
      showPicker(false);
      return;
    }

    // Mode: "add-to-portfolio" — show picker, populate it.
    if (mode === 'add-to-portfolio'){
      showPicker(true);
      loadAndPopulate();
      return;
    }

    // Mode: "portfolio" — open New Portfolio modal. On Create, lock in the
    // rep's CURRENT Map Pools work by creating the first property inside the
    // new portfolio with state_json/ex_json/pool_measure_json pre-loaded
    // from the live calculator + map snapshot. Then enter property mode for
    // that property so the rep keeps working seamlessly.
    //
    // This closes the orphan-data loop — before this fix, flipping the radio
    // mid-trace would create the portfolio + dump the rep in Archive while
    // silently losing the polygons they just drew.
    if (mode === 'portfolio'){
      AR2_PF.openNewPortfolioModal();
      watchPortfolioModal(
        function onCreated(newPortfolio){
          checkRadio('property');
          clearTarget();
          showPicker(false);
          if (newPortfolio && newPortfolio.id){
            seedFirstPropertyFromMapPools(newPortfolio);
          } else {
            // Defensive fallback — shouldn't happen since onCreated only
            // fires when watchPortfolioModal saw the portfolios cache grow.
            try { AR2_PF.setActiveTab('portfolios'); } catch(_){}
            var bankBtn = document.getElementById('ar2-bank-nav');
            if (bankBtn) bankBtn.click();
          }
        },
        function onCancelled(){
          checkRadio('property');
          clearTarget();
          showPicker(false);
        }
      );
      return;
    }
  }

  // Picker <select> change — bind to a portfolio, or pivot to "+ New portfolio…"
  function onPickerChange(e){
    var sel = e.target;
    if (!sel || sel.id !== 'ap-pf-picker-select') return;
    var v = sel.value;
    if (!v) return;
    if (v === '__new__'){
      // Reset the select so it doesn't stay stuck on "+ New portfolio…"
      // — this way after the modal closes the user can pick from the list.
      sel.value = '';
      AR2_PF.openNewPortfolioModal();
      watchPortfolioModal(
        function onCreated(newest){
          // Auto-bind to the just-created portfolio. Repopulate so the
          // new row appears in the <select>, then select it.
          populatePicker();
          if (newest){
            sel.value = newest.id;
            setTarget(newest.id, newest.name);
          }
        },
        function onCancelled(){
          // User backed out — leave the select on the placeholder.
        }
      );
      return;
    }
    // Picked an existing portfolio. Look up the name from AR2_PF cache.
    var list = (AR2_PF.portfolios && AR2_PF.portfolios()) || [];
    var match = null;
    for (var i = 0; i < list.length; i++){ if (list[i].id === v){ match = list[i]; break; } }
    if (match) setTarget(match.id, match.name);
  }

  // Chip "×" — clear the bound portfolio. Drop back to Property mode.
  function onChipClear(e){
    var btn = e.target && e.target.closest && e.target.closest('#ap-pf-picker-chip-clear');
    if (!btn) return;
    e.preventDefault();
    clearTarget();
    var sel = document.getElementById('ap-pf-picker-select');
    if (sel) sel.value = '';
    checkRadio('property');
    showPicker(false);
  }

  document.addEventListener('change', function(e){
    onModeChange(e);
    onPickerChange(e);
  });
  document.addEventListener('click', onChipClear);
})();

/* ── Init the role-gated UI on login ────────────────────────────────────
   AR2_PF.init() is normally lazy — it runs the first time the Archive is
   opened. For the Map Pools radios to know the role from the first paint,
   we need to run init() the moment cloud auth is ready.

   IMPORTANT: AR2_PF.init() is idempotent via pfState.initialized — if we
   call it before AR2_CLOUD.isReady() is true, it marks itself initialized
   and returns early, leaving pfState.enabled forever undefined. So we MUST
   poll for cloud-ready first, then call init() exactly once. */
(function(){
  function applyPfBody(){
    try {
      if (window.AR2_PF && AR2_PF.init){ AR2_PF.init(); }
    } catch(_){}
    var enabled = !!(window.AR2_PF && AR2_PF.isEnabled && AR2_PF.isEnabled());
    document.body.classList.toggle('pf-enabled', enabled);
    // Preload portfolios so the picker opens instantly when the rep flips
    // the radio (no spinner on first interaction).
    if (enabled && AR2_PF.loadPortfolios){
      try { AR2_PF.loadPortfolios(); } catch(_){}
    }
  }
  // Poll for cloud-ready every 500ms (up to ~2 min cap). The moment the
  // user finishes gateLogin, AR2_CLOUD.isReady() flips true; we then call
  // init() ONCE and stop polling. This avoids the early-init race where
  // AR2_PF.init() bails out and locks pfState.initialized=true.
  var ticks = 0;
  var iv = setInterval(function(){
    ticks++;
    if (ticks > 240) { clearInterval(iv); return; }
    if (!window.AR2_CLOUD || !AR2_CLOUD.isReady()) return;
    clearInterval(iv);
    applyPfBody();
  }, 500);
  // Safety net: re-evaluate whenever the Archive is opened. Covers
  // sign-out/sign-in within the same session and any oddball race.
  document.addEventListener('click', function(e){
    var btn = e.target && e.target.closest && e.target.closest('[data-action="view-bank"]');
    if (btn) setTimeout(applyPfBody, 60);
  });
})();

function bankGetIndex(){
  return window.storage.get(BANK_IDX)
    .then(function(r){if(!r)return[];var s=typeof r==='string'?r:r.value;return s?JSON.parse(s):[];})
    .catch(function(){return [];});
}

/* P1.5 — Unified Archive index.
   Returns a Promise resolving to a merged list of [single assessments + portfolios],
   sorted DESC by saved date. Each entry has `archiveType: 'single' | 'portfolio'`
   so renderCards can branch on row type.

   For clients / non-PF mode this falls through to bankGetIndex unchanged.
   Portfolio rollup KPIs are fetched in parallel per portfolio. RLS already
   scopes the list (users see own; admins see all). */
function getArchiveListIndex(){
  if (!window.AR2_PF || !AR2_PF.isEnabled || !AR2_PF.isEnabled()){
    return bankGetIndex().then(function(idx){
      return idx.map(function(e){ e.archiveType = 'single'; return e; });
    });
  }
  var singlesP = bankGetIndex().then(function(idx){
    return (idx || []).map(function(e){ e.archiveType = 'single'; return e; });
  });
  var portsP = AR2_PF.loadPortfolios().then(function(list){
    if (!list || !list.length) return [];
    var rollupPromises = list.map(function(p){
      return AR2_PF.getRollup(p.id).then(function(r){ return { p:p, r:r||{} }; },
                                          function(){   return { p:p, r:{}    }; });
    });
    return Promise.all(rollupPromises).then(function(items){
      return items.map(function(it){
        var p = it.p, r = it.r;
        return {
          id: p.id,
          propertyName: p.name || 'Untitled Portfolio',
          savedAt: p.last_modified_at || p.created_at,
          archiveType: 'portfolio',
          portfolioStatus: p.status || 'draft',
          summary: {
            monthly:      Number(r.total_mo)       || 0,
            annual:       Number(r.total_yr)       || 0,
            inv:          Number(r.total_inv)      || 0,
            devices:      Number(r.property_count) || 0, // "devices" col reused for property count
            poolGallons:  Number(r.total_pool_gal) || 0,
            payback:      r.blended_payback_mo ? Math.round(Number(r.blended_payback_mo)) : 0,
            savingsWeight: null
          }
        };
      });
    });
  }).catch(function(){ return []; });
  return Promise.all([singlesP, portsP]).then(function(arr){
    var merged = arr[0].concat(arr[1]);
    merged.sort(function(a,b){
      var ta = new Date(a.savedAt).getTime() || 0;
      var tb = new Date(b.savedAt).getTime() || 0;
      return tb - ta;
    });
    return merged;
  });
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
  m.innerHTML='<div class="ar2-modal-card" style="background:linear-gradient(145deg,#0a2540,#071628);border:1px solid rgba(0,180,216,.3);border-radius:10px;padding:26px;max-width:420px;width:100%;box-shadow:0 10px 40px rgba(0,0,0,.5);">'
    +'<div style="font-family:\'Bebas Neue\',sans-serif;font-size:18px;letter-spacing:2px;color:#48cae4;margin-bottom:10px">REASSIGN RECORD</div>'
    +'<div style="font-size:13px;color:#cfe2eb;line-height:1.6;margin-bottom:14px">Move this record to another user. The new owner will see it in their archive.</div>'
    +'<select id="ar2-reassign-sel" style="margin-bottom:12px"><option value="">Loading users…</option></select>'
    +'<div id="ar2-reassign-err" style="font-size:11.5px;color:#fca5a5;min-height:14px;margin-bottom:10px"></div>'
    +'<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">'
      +'<button id="ar2-reassign-cancel" class="ar2-mb">Cancel</button>'
      +'<button id="ar2-reassign-go" class="ar2-mb primary" disabled>Reassign</button>'
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
      // CSS .ar2-mb:disabled handles opacity now — no inline style needed.
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
  m.innerHTML='<div class="ar2-modal-card" style="background:linear-gradient(145deg,#0a2540,#071628);border:1px solid rgba(0,180,216,.3);border-radius:10px;padding:28px;max-width:460px;width:100%;box-shadow:0 10px 40px rgba(0,0,0,.5);">'
    +'<div style="font-family:\'Bebas Neue\',sans-serif;font-size:18px;letter-spacing:2px;color:#48cae4;margin-bottom:14px">ADD NEW USER</div>'
    +'<div style="margin-bottom:12px"><label>Name</label>'
      +'<input id="ar2-au-name" type="text" placeholder="e.g. Sarah Johnson · or company name for Clients" autocomplete="off" />'
    +'</div>'
    +'<div style="margin-bottom:12px"><label>Access Code (4 chars)</label>'
      +'<input id="ar2-au-code" type="text" maxlength="4" placeholder="SJ01" autocapitalize="characters" style="text-transform:uppercase;letter-spacing:6px;font-family:\'JetBrains Mono\',monospace;text-align:center" />'
    +'</div>'
    +'<div style="margin-bottom:14px"><label>Role</label>'
      +'<select id="ar2-au-role">'
        +'<option value="user">User — own records, standard features</option>'
        +'<option value="admin">Admin — sees all records + this dashboard</option>'
        +'<option value="client">Client — limited features (no quotes/exports)</option>'
      +'</select>'
    +'</div>'
    // Logo upload — only meaningful when Role=Client. Hidden by JS for other roles.
    +'<div id="ar2-au-logo-row" style="margin-bottom:14px;display:none">'
      +'<label>Client Logo <span style="font-size:10px;color:rgba(255,255,255,.55);font-weight:400">(optional · PNG/JPG/SVG · max 500KB)</span></label>'
      +'<input id="ar2-au-logo" type="file" accept="image/png,image/jpeg,image/svg+xml" />'
      +'<div id="ar2-au-logo-preview" style="display:none;margin-top:8px;padding:8px;background:rgba(0,180,216,.05);border:1px dashed rgba(0,180,216,.25);border-radius:6px;text-align:center"></div>'
    +'</div>'
    +'<div id="ar2-au-err" style="font-size:11.5px;color:#fca5a5;min-height:14px;margin-bottom:10px"></div>'
    +'<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">'
      +'<button id="ar2-au-cancel" class="ar2-mb">Cancel</button>'
      +'<button id="ar2-au-go" class="ar2-mb primary">Create User</button>'
    +'</div>'
  +'</div>';
  document.body.appendChild(m);
  function close(){ if(m.parentNode) m.parentNode.removeChild(m); }
  document.getElementById('ar2-au-cancel').onclick=close;
  m.addEventListener('click',function(e){ if(e.target===m) close(); });
  var codeInp=document.getElementById('ar2-au-code');
  codeInp.addEventListener('input',function(){ codeInp.value=(codeInp.value||'').toUpperCase(); });

  // Show / hide the logo upload row based on role selection
  var roleSel = document.getElementById('ar2-au-role');
  var logoRow = document.getElementById('ar2-au-logo-row');
  function syncLogoRow(){ logoRow.style.display = (roleSel.value === 'client') ? '' : 'none'; }
  roleSel.addEventListener('change', syncLogoRow);
  syncLogoRow();

  // Capture chosen logo file as base64 dataURL on input change.
  var logoInp = document.getElementById('ar2-au-logo');
  var previewEl = document.getElementById('ar2-au-logo-preview');
  var pendingLogoDataUrl = null;
  logoInp.addEventListener('change', function(){
    var file = logoInp.files && logoInp.files[0];
    if(!file){ pendingLogoDataUrl = null; previewEl.style.display='none'; return; }
    if(file.size > 500*1024){
      document.getElementById('ar2-au-err').textContent = 'Logo file too large. Max 500KB.';
      logoInp.value = ''; pendingLogoDataUrl = null; previewEl.style.display='none';
      return;
    }
    var reader = new FileReader();
    reader.onload = function(){
      pendingLogoDataUrl = reader.result;
      previewEl.innerHTML = '<img src="'+pendingLogoDataUrl+'" alt="Logo preview" style="max-height:60px;max-width:100%;display:inline-block" />';
      previewEl.style.display = 'block';
    };
    reader.readAsDataURL(file);
  });

  document.getElementById('ar2-au-go').onclick=function(){
    var name=(document.getElementById('ar2-au-name').value||'').trim();
    var code=(document.getElementById('ar2-au-code').value||'').trim().toUpperCase();
    var role=roleSel.value;
    var err=document.getElementById('ar2-au-err');
    if(!name){ err.textContent='Name is required.'; return; }
    if(code.length<4){ err.textContent='Access code must be 4 characters.'; return; }
    err.textContent='';
    var go=document.getElementById('ar2-au-go');
    go.disabled=true; go.textContent='Creating…';
    var logoArg = (role === 'client' && pendingLogoDataUrl) ? pendingLogoDataUrl : null;
    AR2_CLOUD.adminCreateUser(name, code, role, logoArg).then(function(){
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

// Delete-user modal — admin-only, hard delete with mandatory transfer
// target if the user has any records. The user being deleted is removed
// from auth.users which cascades through app_users → user_app_access →
// user_auth_secrets. assessments owned by them are reassigned to the
// transfer target first (RLS prevents losing data on accidental delete).
function showAdminDeleteUserModal(uid, uname, totalRecords){
  var existing=document.getElementById('ar2-admdel-modal');
  if(existing&&existing.parentNode) existing.parentNode.removeChild(existing);
  var m=document.createElement('div');
  m.id='ar2-admdel-modal';
  m.style.cssText='position:fixed;inset:0;background:rgba(4,15,30,.85);backdrop-filter:blur(6px);-webkit-backdrop-filter:blur(6px);z-index:999998;display:flex;align-items:center;justify-content:center;padding:20px;font-family:"DM Sans","Helvetica Neue",Arial,sans-serif;';
  var hasRecords = totalRecords > 0;
  var transferRowHtml = hasRecords
    ? '<div style="margin-bottom:12px"><label>Transfer their '+totalRecords+' record'+(totalRecords===1?'':'s')+' to</label>'
        +'<select id="ar2-del-target"><option value="">Loading users…</option></select>'
      +'</div>'
    : '<div style="font-size:11.5px;color:#7db8cc;margin-bottom:14px">No records to transfer — this user can be deleted directly.</div>';
  m.innerHTML='<div class="ar2-modal-card" style="background:linear-gradient(145deg,#0a2540,#071628);border:1px solid rgba(239,68,68,.4);border-radius:10px;padding:24px;max-width:440px;width:100%;box-shadow:0 10px 40px rgba(0,0,0,.5);">'
    +'<div style="font-family:\'Bebas Neue\',sans-serif;font-size:18px;letter-spacing:2px;color:#fca5a5;margin-bottom:6px">DELETE USER PERMANENTLY</div>'
    +'<div style="font-size:13px;color:#cfe2eb;margin-bottom:14px">Deleting: <b style="color:#fff">'+esc(uname)+'</b></div>'
    +'<div style="background:rgba(239,68,68,.08);border:1px solid rgba(239,68,68,.25);border-radius:6px;padding:10px 12px;margin-bottom:14px;font-size:11.5px;line-height:1.5;color:#fca5a5">'
      +'<b>This cannot be undone.</b> The user will be signed out and removed from the database. If you only want to revoke access, use <b>Disable</b> instead.'
    +'</div>'
    +transferRowHtml
    +'<div id="ar2-del-err" style="font-size:11.5px;color:#fca5a5;min-height:14px;margin-bottom:10px"></div>'
    +'<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">'
      +'<button id="ar2-del-cancel" class="ar2-mb">Cancel</button>'
      +'<button id="ar2-del-go" class="ar2-mb danger"'+(hasRecords?' disabled':'')+'>Delete '+esc(uname)+'</button>'
    +'</div>'
  +'</div>';
  document.body.appendChild(m);
  function close(){ if(m.parentNode) m.parentNode.removeChild(m); }
  document.getElementById('ar2-del-cancel').onclick=close;
  m.addEventListener('click',function(e){ if(e.target===m) close(); });

  var go = document.getElementById('ar2-del-go');
  var err = document.getElementById('ar2-del-err');

  // Populate the transfer-target dropdown when records exist. Excludes
  // the user being deleted + any disabled users (server-side rejects
  // disabled targets anyway).
  if(hasRecords){
    AR2_CLOUD.listUsers().then(function(users){
      var sel = document.getElementById('ar2-del-target');
      var opts = '<option value="">Select user…</option>' + users.filter(function(u){
        return u.active && u.id !== uid;
      }).map(function(u){
        return '<option value="'+u.id+'">'+esc(u.name)+' · '+esc(u.role)+'</option>';
      }).join('');
      sel.innerHTML = opts;
      sel.onchange = function(){ go.disabled = !sel.value; };
    }).catch(function(){
      err.textContent = 'Failed to load users.';
    });
  }

  go.onclick = function(){
    var transferTo = null;
    if(hasRecords){
      var sel = document.getElementById('ar2-del-target');
      if(!sel.value){ err.textContent='Pick a transfer target.'; return; }
      transferTo = sel.value;
    }
    err.textContent='';
    go.disabled=true; go.textContent='Deleting…';
    AR2_CLOUD.adminDeleteUser(uid, transferTo).then(function(){
      close();
      // Refresh the dashboard so the deleted user disappears.
      var dashEl = document.getElementById('ar-admin-dash');
      if(dashEl) dashEl.dataset.loaded = '';
      populateAdminDashboard();
      // Also refresh archive list so reassigned records reflect new owners.
      try { renderBank(); } catch(_){}
    }).catch(function(e){
      err.textContent = (e && e.message) ? e.message : 'Delete failed.';
      go.disabled=false; go.textContent='Delete '+uname;
    });
  };
}

// Edit-logo modal — admin-only, used to set / replace / remove a Client's logo
function showAdminEditLogoModal(uid, uname){
  var existing=document.getElementById('ar2-admlogo-modal');
  if(existing&&existing.parentNode) existing.parentNode.removeChild(existing);
  var m=document.createElement('div');
  m.id='ar2-admlogo-modal';
  m.style.cssText='position:fixed;inset:0;background:rgba(4,15,30,.85);backdrop-filter:blur(6px);-webkit-backdrop-filter:blur(6px);z-index:999998;display:flex;align-items:center;justify-content:center;padding:20px;font-family:"DM Sans","Helvetica Neue",Arial,sans-serif;';
  m.innerHTML='<div class="ar2-modal-card" style="background:linear-gradient(145deg,#0a2540,#071628);border:1px solid rgba(0,180,216,.3);border-radius:10px;padding:24px;max-width:420px;width:100%;box-shadow:0 10px 40px rgba(0,0,0,.5);">'
    +'<div style="font-family:\'Bebas Neue\',sans-serif;font-size:16px;letter-spacing:2px;color:#48cae4;margin-bottom:6px">EDIT CLIENT LOGO</div>'
    +'<div style="font-size:13px;color:#cfe2eb;margin-bottom:14px">For: <b style="color:#fff">'+esc(uname)+'</b></div>'
    +'<input id="ar2-el-input" type="file" accept="image/png,image/jpeg,image/svg+xml" style="margin-bottom:10px" />'
    +'<div id="ar2-el-preview" style="display:none;margin-bottom:10px;padding:10px;background:rgba(0,180,216,.05);border:1px dashed rgba(0,180,216,.25);border-radius:6px;text-align:center"></div>'
    +'<div id="ar2-el-err" style="font-size:11.5px;color:#fca5a5;min-height:14px;margin-bottom:10px"></div>'
    +'<div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px">'
      +'<button id="ar2-el-cancel" class="ar2-mb">Cancel</button>'
      +'<button id="ar2-el-clear" class="ar2-mb danger">Remove</button>'
      +'<button id="ar2-el-go" class="ar2-mb primary">Save</button>'
    +'</div>'
  +'</div>';
  document.body.appendChild(m);
  function close(){ if(m.parentNode) m.parentNode.removeChild(m); }
  document.getElementById('ar2-el-cancel').onclick=close;
  m.addEventListener('click',function(e){ if(e.target===m) close(); });

  var inp = document.getElementById('ar2-el-input');
  var prev = document.getElementById('ar2-el-preview');
  var err = document.getElementById('ar2-el-err');
  var pending = null;
  inp.addEventListener('change', function(){
    var file = inp.files && inp.files[0];
    if(!file){ pending = null; prev.style.display='none'; return; }
    if(file.size > 500*1024){
      err.textContent = 'Logo too large (max 500KB).';
      inp.value=''; pending=null; prev.style.display='none';
      return;
    }
    var reader = new FileReader();
    reader.onload = function(){
      pending = reader.result;
      prev.innerHTML = '<img src="'+pending+'" alt="Logo preview" style="max-height:60px;max-width:100%;display:inline-block" />';
      prev.style.display='block';
    };
    reader.readAsDataURL(file);
  });

  document.getElementById('ar2-el-go').onclick = function(){
    if(!pending){ err.textContent='Pick a logo file first.'; return; }
    err.textContent='';
    var go=document.getElementById('ar2-el-go'); go.disabled=true; go.textContent='Saving…';
    AR2_CLOUD.adminSetUserLogo(uid, pending).then(function(){
      close(); populateAdminDashboard();
    }).catch(function(e){
      err.textContent = (e && e.message) ? e.message : 'Save failed.';
      go.disabled=false; go.textContent='Save';
    });
  };
  document.getElementById('ar2-el-clear').onclick = function(){
    if(!confirm('Remove logo for '+uname+'?')) return;
    AR2_CLOUD.adminSetUserLogo(uid, null).then(function(){
      close(); populateAdminDashboard();
    }).catch(function(e){ alert('Remove failed: '+(e.message||e)); });
  };
}

function showAdminResetCodeModal(uid, uname){
  var existing=document.getElementById('ar2-admrc-modal');
  if(existing&&existing.parentNode) existing.parentNode.removeChild(existing);
  var m=document.createElement('div');
  m.id='ar2-admrc-modal';
  m.style.cssText='position:fixed;inset:0;background:rgba(4,15,30,.85);backdrop-filter:blur(6px);-webkit-backdrop-filter:blur(6px);z-index:999998;display:flex;align-items:center;justify-content:center;padding:20px;font-family:"DM Sans","Helvetica Neue",Arial,sans-serif;';
  m.innerHTML='<div class="ar2-modal-card" style="background:linear-gradient(145deg,#0a2540,#071628);border:1px solid rgba(0,180,216,.3);border-radius:10px;padding:24px;max-width:380px;width:100%;box-shadow:0 10px 40px rgba(0,0,0,.5);">'
    +'<div style="font-family:\'Bebas Neue\',sans-serif;font-size:16px;letter-spacing:2px;color:#48cae4;margin-bottom:6px">RESET ACCESS CODE</div>'
    +'<div style="font-size:13px;color:#cfe2eb;margin-bottom:14px">For: <b style="color:#fff">'+esc(uname)+'</b></div>'
    +'<input id="ar2-rc-code" type="text" maxlength="4" placeholder="New 4-char code" autocapitalize="characters" style="text-transform:uppercase;letter-spacing:6px;font-family:\'JetBrains Mono\',monospace;text-align:center;margin-bottom:10px" />'
    +'<div id="ar2-rc-err" style="font-size:11.5px;color:#fca5a5;min-height:14px;margin-bottom:10px"></div>'
    +'<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">'
      +'<button id="ar2-rc-cancel" class="ar2-mb">Cancel</button>'
      +'<button id="ar2-rc-go" class="ar2-mb primary">Save</button>'
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
  m.innerHTML='<div class="ar2-modal-card" style="background:linear-gradient(145deg,#0a2540,#071628);border:1px solid rgba(0,180,216,.3);border-radius:10px;padding:24px;max-width:380px;width:100%;box-shadow:0 10px 40px rgba(0,0,0,.5);">'
    +'<div style="font-family:\'Bebas Neue\',sans-serif;font-size:16px;letter-spacing:2px;color:#48cae4;margin-bottom:6px">CHANGE ROLE</div>'
    +'<div style="font-size:13px;color:#cfe2eb;margin-bottom:14px">For: <b style="color:#fff">'+esc(uname)+'</b></div>'
    +'<select id="ar2-ro-sel" style="margin-bottom:14px">'
      +opt('user','User')+opt('admin','Admin')+opt('client','Client')
    +'</select>'
    +'<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">'
      +'<button id="ar2-ro-cancel" class="ar2-mb">Cancel</button>'
      +'<button id="ar2-ro-go" class="ar2-mb primary">Save</button>'
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
  // 6-card KPI grid — assessments + portfolios + properties + pools + value
  // + last-7-day record count. Excludes hard-deleted records automatically.
  if (AR2_CLOUD.statsAdminKpis){
    AR2_CLOUD.statsAdminKpis().then(function(k){
      var set = function(id, val){ var el = document.getElementById(id); if (el) el.textContent = val; };
      set('ar-admin-kpi-7d',    String(k.recordsLast7Days));
      set('ar-admin-kpi-ass',   String(k.assessmentsTotal));
      set('ar-admin-kpi-pf',    String(k.portfoliosTotal));
      set('ar-admin-kpi-prop',  String(k.propertiesTotal));
      set('ar-admin-kpi-pools', (typeof fn==='function'?fn(k.poolsTotal):String(k.poolsTotal)));
      set('ar-admin-kpi-value', (typeof fc==='function'?fc(Math.round(k.valueTotal),0):('$'+Math.round(k.valueTotal))));
    }).catch(function(err){
      try { console.warn('[admin KPI] load failed', err); } catch(_){}
    });
  }
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
        + '<th>Email</th>'
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
          // "Real" emails are anything that isn't the auto-generated
          // placeholder (aqr-{hex}@aquarev.local). Those placeholders are
          // never user-facing — used internally for Supabase auth only.
          var hasRealEmail = u.email && u.email.indexOf('@') > 0 && !/@aquarev\.local$/i.test(u.email);
          var emailCell = hasRealEmail ? esc(u.email) : '<span class="muted">—</span>';
          return '<tr'+inactiveStyle+'>'
            + '<td><b>'+esc(u.name)+'</b>'+(u.active?'':' <span class="ar-admin-disabled">disabled</span>')+'</td>'
            + '<td class="muted email">'+emailCell+'</td>'
            + '<td><span class="ar-admin-role '+roleClass+'">'+esc(u.role)+'</span></td>'
            + '<td class="num">'+u.records_30d+'</td>'
            + '<td class="num">'+u.logins_30d+'</td>'
            + '<td class="num">'+u.login_count+'</td>'
            + '<td class="muted">'+lastLogin+'</td>'
            + '<td class="actions">'
              + '<button class="ar-admin-row-act" data-action="admin-reset-code" data-uid="'+u.user_id+'" data-uname="'+esc(u.name)+'" title="Reset access code">Reset</button>'
              + '<button class="ar-admin-row-act" data-action="admin-change-role" data-uid="'+u.user_id+'" data-uname="'+esc(u.name)+'" data-urole="'+u.role+'" title="Change role">Role</button>'
              // Logo button — only Clients use logos. Show for any role so admin
              // can upload one when promoting a user, but most useful on Clients.
              + (u.role === 'client'
                ? '<button class="ar-admin-row-act" data-action="admin-edit-logo" data-uid="'+u.user_id+'" data-uname="'+esc(u.name)+'" title="Edit Client logo">Logo</button>'
                : '')
              + '<button class="ar-admin-row-act'+(u.active?' danger':' enable')+'" data-action="admin-toggle-active" data-uid="'+u.user_id+'" data-uname="'+esc(u.name)+'" data-uactive="'+u.active+'" title="'+toggleLabel+' user">'+toggleLabel+'</button>'
              // Delete button — admin-only hard delete. Hidden on the
              // current admin's own row (server-side check also prevents
              // self-delete as a defense-in-depth).
              + (u.user_id === AR2_CLOUD.user().id
                ? ''
                : '<button class="ar-admin-row-act danger" data-action="admin-delete-user" data-uid="'+u.user_id+'" data-uname="'+esc(u.name)+'" data-utotal="'+(u.records_total||0)+'" title="Permanently delete user">Delete</button>')
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
/* ── renderArchive — Phase 1 entry point for the Archive view ─────
   When AR2_PF is enabled (User + Admin roles in sandbox builds), this
   wraps renderBank's output with a tab strip and provides a Portfolios
   tab alongside the existing Single Assessments view. When AR2_PF is
   disabled (Client role, or production calculator without AR2_PF code
   loaded), it falls through to renderBank() directly — identical UX to
   production. Important: showView('bank') calls renderArchive(), but
   every OTHER caller of renderBank() across the codebase (admin actions
   that refresh the archive after delete/restore/reassign, etc.) still
   calls renderBank() directly. Those callers usually want to refresh
   only the singles list; when AR2_PF is active we route them through
   renderArchive so the tabs/state stay correct.                       */
function renderArchive(){
  var el = document.getElementById('ar2-bank');
  if (!el) return;
  if (!window.AR2_PF || !AR2_PF.isEnabled()) {
    // Feature disabled (Client / no-PF): production behavior, single assessments only.
    return renderBank();
  }
  // Portfolio drill-down views — Overview, Export panel, or Quote builder.
  // Routed via pfState.viewMode + selectedPortfolioId. Each shares the same
  // archive wrap mount so the chrome (back navigation, archive width) stays
  // consistent.
  var vm = AR2_PF.viewMode && AR2_PF.viewMode();
  if ((vm === 'overview' || vm === 'export' || vm === 'quote-builder') &&
      AR2_PF.selectedPortfolioId && AR2_PF.selectedPortfolioId()){
    el.innerHTML = '<div class="ar-pf-archive-wrap"><div id="ar2-bank-overview-mount"></div></div>';
    AR2_PF.renderPortfoliosPanel(document.getElementById('ar2-bank-overview-mount'));
    return;
  }
  // Unified list — singles + portfolios mixed, sorted by date. No tabs.
  // renderBank below pulls its data from getArchiveListIndex() instead of
  // bankGetIndex() when AR2_PF is enabled, so the same renderer powers both
  // types. The list lives directly in #ar2-bank.
  renderBank();
}

// Accepts optional `targetId` (string) so the Portfolio tabs wrapper can
// redirect renderBank's output into a sub-container (#ar2-bank-singles).
// Defaults to '#ar2-bank' so every existing caller works unchanged.
function renderBank(targetId){
  var el=document.getElementById(targetId || 'ar2-bank');
  if(!el)return;
  // Cloud-mode flags drive the admin dashboard + Created By column.
  var isCloudReady = !!(window.AR2_CLOUD && AR2_CLOUD.isReady());
  var isAdmin      = !!(window.AR2_CLOUD && AR2_CLOUD.isAdmin());
  el.innerHTML='<div class="ar-bank-wrap"><div class="ar-bank-hero">'
    +'<div class="ar-bank-title">Assessments'+(isCloudReady?' <span style="font-size:11px;color:var(--mu);font-weight:400;letter-spacing:1px;margin-left:8px">'+esc(AR2_CLOUD.user().name)+(isAdmin?' \u00b7 ADMIN':'')+'</span>':'')+'</div>'
    +'<button class="ar-bank-act primary no-print" data-action="view-form">'
      +I.back+' Back to Calculator'
    +'</button>'
  +'</div><div class="ar-bank-loading">Loading\u2026</div></div>';

  getArchiveListIndex().then(function(idx){
    var wrap=el.querySelector('.ar-bank-wrap');
    if(!idx||idx.length===0){
      wrap.innerHTML='<div class="ar-bank-hero">'
        +'<div class="ar-bank-title">Assessments</div>'
        +'<button class="ar-bank-act primary no-print" data-action="view-form">'+I.back+' Back to Calculator</button>'
      +'</div>'
      +'<div class="ar-bank-empty">'
        +I.bank
        +'<div style="font-size:15px;color:#fff;margin-bottom:8px">No saved assessments or portfolios yet</div>'
        +'Complete an assessment and click <strong style="color:var(--t)">Archive</strong>, or create a Portfolio from Map Pools to get started.'
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
        var isPortfolio = entry.archiveType === 'portfolio';
        // Type indicator \u2014 a small icon-only marker before the record name.
        // Singles get a single-page document icon in teal; portfolios get a
        // stacked-layers icon in green. The visual differentiation is the
        // icon SHAPE + COLOR \u2014 no text pills. Combined with a left-edge
        // accent stripe on the row itself (CSS) for fast scan-pattern.
        var typeBadge = isPortfolio
          ? '<span class="ar-bank-typeicon portfolio" title="Portfolio" aria-label="Portfolio"><svg viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" width="14" height="14"><path d="M2 4.5h7l1.5 1.5h.5"/><rect x="2" y="4" width="10" height="8" rx="1.2"/><path d="M3 7h8"/></svg></span>'
          : '<span class="ar-bank-typeicon single" title="Single Assessment" aria-label="Single Assessment"><svg viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" width="14" height="14"><path d="M3.5 1.5h5L11 4v8.5H3.5z"/><path d="M8.5 1.5V4H11"/><path d="M5 7h4M5 9h4M5 11h2.5"/></svg></span>';
        // Created By cell \u2014 admin-only. Highlights the row owner's name + role.
        // Portfolios don't carry user joins yet, so the cell shows "\u2014" for them.
        var createdByCell = '';
        if(isAdmin){
          var nm = entry.createdByName || '\u2014';
          var rl = entry.createdByRole || '';
          createdByCell = '<div class="ar-bank-createdby">'
            + '<div class="name">'+esc(nm)+'</div>'
            + (rl?'<div class="role'+(rl==='admin'?' admin':'')+'">'+esc(rl)+'</div>':'')
          + '</div>';
        }
        // Reassign button \u2014 admin-only, applies to singles only for now.
        // Portfolio reassign needs its own RPC; tracked for a later pass.
        var reassignBtn = (isAdmin && !isPortfolio)
          ? '<button class="ar-bank-act reassign" data-bank-action="reassign" data-bank-id="'+entry.id+'" title="Reassign to another user">\u2192</button>'
          : '';
        // Per-row actions branch by type:
        //   Singles    \u2014 recall \u00b7 duplicate \u00b7 portrait \u00b7 landscape \u00b7 (reassign) \u00b7 delete
        //   Portfolios \u2014 open (recall) \u00b7 delete  (PDF + duplicate live at portfolio level)
        // Per-row actions branch by type. Portfolios get duplicate + reassign
        // parity with singles (plus the new "open" + delete already wired);
        // singles get a new "Copy to Portfolio" action that opens a picker
        // letting the rep add this assessment to an existing portfolio.
        var actions = isPortfolio
          ? '<button class="ar-bank-act primary" data-bank-action="recall" data-bank-id="'+entry.id+'" data-bank-type="portfolio" title="Open portfolio">'+I.file+'</button>'
            +'<button class="ar-bank-act" data-bank-action="duplicate" data-bank-id="'+entry.id+'" data-bank-type="portfolio" title="Duplicate portfolio">'+I.copy+'</button>'
            +(isAdmin?'<button class="ar-bank-act reassign" data-bank-action="reassign" data-bank-id="'+entry.id+'" data-bank-type="portfolio" title="Reassign portfolio to another user">→</button>':'')
            +'<button class="ar-bank-act danger" data-bank-action="delete" data-bank-id="'+entry.id+'" data-bank-type="portfolio" title="Delete portfolio">'+I.trash+'</button>'
          : '<button class="ar-bank-act primary" data-bank-action="recall" data-bank-id="'+entry.id+'" title="Load this assessment">'+I.file+'</button>'
            +'<button class="ar-bank-act" data-bank-action="duplicate" data-bank-id="'+entry.id+'" title="Duplicate this assessment">'+I.copy+'</button>'
            +'<button class="ar-bank-act" data-bank-action="copy-to-portfolio" data-bank-id="'+entry.id+'" title="Copy to portfolio">+☰</button>'
            +'<button class="ar-bank-act" data-bank-action="portrait" data-bank-id="'+entry.id+'" title="Portrait PDF">'+I.port+'</button>'
            +'<button class="ar-bank-act" data-bank-action="landscape" data-bank-id="'+entry.id+'" title="Landscape PDF">'+I.land+'</button>'
            +reassignBtn
            +'<button class="ar-bank-act danger" data-bank-action="delete" data-bank-id="'+entry.id+'" title="Delete">'+I.trash+'</button>';
        var classes = 'ar-bank-card' + (selectMode?' selmode':'') + (isSel?' selected':'') + (isAdmin?' admin-cols':'') + (isPortfolio?' is-portfolio':'');
        // "Devices" column header is reused for property count when the row
        // is a portfolio \u2014 same numeric scale, different meaning. Tooltip
        // clarifies on hover.
        var countLabel = isPortfolio
          ? (s.devices||0) + (s.devices===1?' prop':' props')
          : (s.devices||'\u2014');
        return '<div class="'+classes+'" data-row-id="'+entry.id+'" data-archive-type="'+(isPortfolio?'portfolio':'single')+'">'
          +(selectMode && !isPortfolio?'<div class="ar-bank-chk"><input type="checkbox" data-sel-id="'+entry.id+'"'+(isSel?' checked':'')+'></div>':selectMode?'<div class="ar-bank-chk"></div>':'')
          +'<div class="ar-bank-name">'
            +'<div class="ar-bank-prop">'+typeBadge+esc(entry.propertyName)+'</div>'
            +'<div class="ar-bank-date">'+dateStr+'</div>'
          +'</div>'
          +'<div class="ar-bank-cell"><div class="ar-bank-cell-val '+clr+'">'+fc(s.monthly,0)+'</div></div>'
          +'<div class="ar-bank-cell"><div class="ar-bank-cell-val">'+fc(s.annual,0)+'</div></div>'
          +'<div class="ar-bank-cell"><div class="ar-bank-cell-val">'+(s.inv?fc(s.inv,0):'\u2014')+'</div></div>'
          +'<div class="ar-bank-cell"><div class="ar-bank-cell-val">'+(isPortfolio?'\u2014':(s.savingsWeight!=null?Math.round(s.savingsWeight*100)+'%':'\u2014'))+'</div></div>'
          +'<div class="ar-bank-cell"><div class="ar-bank-cell-val" title="'+(isPortfolio?'Property count':'Device count')+'">'+countLabel+'</div></div>'
          +'<div class="ar-bank-cell"><div class="ar-bank-cell-val">'+(s.poolGallons?fn(s.poolGallons):'\u2014')+'</div></div>'
          +'<div class="ar-bank-cell"><div class="ar-bank-cell-val">'+(s.payback?Math.round(s.payback)+' mo':'\u2014')+'</div></div>'
          +createdByCell
          +'<div class="ar-bank-actions">'
            +actions
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
      +'<div>Record</div><div>Monthly</div><div>Annual</div><div>Investment</div><div>Weight</div><div>Devices</div><div>Volume</div><div>Payback</div>'
      +(isAdmin?'<div class="ar-bank-th-createdby">Created By</div>':'')
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
            // 6-card KPI grid at the top of the dashboard. Hard-deleted
            // records are excluded automatically (the underlying queries
            // only return live rows).
            +'<div class="ar-admin-kpis-grid" style="display:grid;grid-template-columns:repeat(6,minmax(0,1fr));gap:10px;margin-bottom:14px">'
              +'<div class="ar-admin-kpi-card"><div class="ar-admin-kpi-lbl">Records \u00b7 7 Days</div><div class="ar-admin-kpi-val" id="ar-admin-kpi-7d" style="font-size:22px">\u2014</div></div>'
              +'<div class="ar-admin-kpi-card"><div class="ar-admin-kpi-lbl">Assessments</div><div class="ar-admin-kpi-val" id="ar-admin-kpi-ass" style="font-size:22px">\u2014</div></div>'
              +'<div class="ar-admin-kpi-card"><div class="ar-admin-kpi-lbl">Portfolios</div><div class="ar-admin-kpi-val" id="ar-admin-kpi-pf" style="font-size:22px">\u2014</div></div>'
              +'<div class="ar-admin-kpi-card"><div class="ar-admin-kpi-lbl">Properties</div><div class="ar-admin-kpi-val" id="ar-admin-kpi-prop" style="font-size:22px">\u2014</div></div>'
              +'<div class="ar-admin-kpi-card"><div class="ar-admin-kpi-lbl">Pools</div><div class="ar-admin-kpi-val" id="ar-admin-kpi-pools" style="font-size:22px">\u2014</div></div>'
              +'<div class="ar-admin-kpi-card"><div class="ar-admin-kpi-lbl">Value</div><div class="ar-admin-kpi-val" id="ar-admin-kpi-value" style="font-size:22px">\u2014</div></div>'
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
      +'<div class="ar-bank-title">Assessments'+(isCloudReady?' <span style="font-size:11px;color:var(--mu);font-weight:400;letter-spacing:1px;margin-left:8px">'+esc(AR2_CLOUD.user().name)+(isAdmin?' \u00b7 ADMIN':'')+'</span>':'')+' <span>\u00b7 '+idx.length+'</span></div>'
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
  // Wipe the Map Pools step state too — without this, the "New" button only
  // clears the calculator's S/EX but leaves the pool-measure suite (#ap2)
  // showing the previous session's polygons, boundary, and incrementing
  // pool numbers. The bridge to the suite exposes a reset() helper.
  if(window.AR2_MAP && AR2_MAP.reset){
    try { AR2_MAP.reset(); } catch(e){}
  }
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
    // renderArchive() routes through AR2_PF tab UI when enabled; otherwise
    // identical to a direct renderBank() call. Defaults preserve prod UX.
    if(bankEl){bankEl.style.display='block';renderArchive();}
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
    // Quote step (index 3) is hidden for two modes:
    //   • Client users  → via .app-client + [data-client-hide]
    //   • Portfolio property mode → via body.pf-property-mode + [data-pf-prop-hide]
    // Both markers are stamped on the dot, the label, and the connector line.
    var stepId = STEPS[i];
    var hideAttr = (stepId === 'quote') ? ' data-client-hide data-pf-prop-hide' : '';
    h+='<div class="ar-si"'+hideAttr+'>'
      +'<div class="ar-dot '+dc+'">'+dot+'</div>'
      +'<span class="ar-sl '+dc+'">'+STEP_LBLS[i]+'</span>'
      +'</div>';
    if(i<STEP_LBLS.length-1)h+='<div class="ar-sc '+(i<S.step?'done':'')+'"'+hideAttr+'></div>';
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

/* ── Name-required gate ─────────────────────────────────────────────────
   Pops a modal with instructions if the user tries to advance from Step 2
   (Pool & System, S.step===1) to Step 3 (Pricing, S.step===2) without a
   Property Name. Returns true if the advance can proceed, false if blocked
   (modal shown). Hooked into both [data-nav="next"] and the step-arrow
   [data-step-nav="next"] handlers so all paths converge through it. */
function requireNameOrPopup(direction){
  if (direction !== 'next') return true;
  if (S.step !== 1) return true; // only gates the Step 2 → Step 3 jump
  var name = (S.propertyName || '').trim();
  if (name) return true;
  showNameRequiredModal();
  return false;
}
function showNameRequiredModal(){
  if (document.getElementById('ar-name-required-modal')) return;
  var bd = document.createElement('div');
  bd.id = 'ar-name-required-modal';
  bd.className = 'ar-pf-modal-backdrop';
  bd.innerHTML =
    '<div class="ar-pf-modal" role="dialog" aria-modal="true" aria-labelledby="ar-name-req-title">'
    + '<div class="ar-pf-modal-title" id="ar-name-req-title" style="color:var(--gr);letter-spacing:2.5px">Property Name Required</div>'
    + '<div style="font-size:13px;color:#cfe2eb;line-height:1.6;margin:4px 0 14px">'
    +   'Every assessment needs a unique Property Name before pricing.'
    +   ' This prevents duplicate entries in your Archive.'
    + '</div>'
    + '<div style="font-size:12px;color:#7db8cc;line-height:1.7;margin-bottom:14px">'
    +   '<b style="color:var(--tx)">How to fix:</b>'
    +   '<ol style="margin:6px 0 0 18px;padding:0">'
    +     '<li>Type the property name in the <b>Property Name</b> field at the top of this step, <i>or</i></li>'
    +     '<li>Go back to <b>Map Pools</b> and enter the name in the <b>Name</b> field on the top card.</li>'
    +   '</ol>'
    + '</div>'
    + '<div class="ar-pf-modal-actions">'
    +   '<button class="ar-pf-modal-btn primary" data-name-req-action="ok" type="button">Got it</button>'
    + '</div>'
    + '</div>';
  document.body.appendChild(bd);
  function close(){
    if (bd.parentNode) bd.parentNode.removeChild(bd);
    // Move focus to the Property Name input so the rep can start typing.
    var inp = document.querySelector('#ar2-form [data-f="propertyName"]');
    if (inp){ try { inp.focus(); inp.select && inp.select(); } catch(_){} }
  }
  bd.addEventListener('click', function(e){
    if (e.target === bd) { close(); return; }
    var act = e.target.closest('[data-name-req-action]');
    if (act && act.getAttribute('data-name-req-action') === 'ok') close();
  });
  bd.addEventListener('keydown', function(e){
    if (e.key === 'Escape' || e.key === 'Enter') close();
  });
  setTimeout(function(){
    var ok = bd.querySelector('[data-name-req-action="ok"]');
    if (ok) try { ok.focus(); } catch(_){}
  }, 30);
}

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

  // 5-Year Water Conservation card — surfaces the rolled-up water loss
  // reduction total. Sits above Monthly Savings Breakdown so reps can see
  // the headline conservation number at a glance.
  var water5 = Number(R.gal_saved_5yr) || 0;
  var water = '<div class="ar-card" style="background:linear-gradient(145deg,rgba(34,197,94,.06),rgba(72,202,228,.04));border:1px solid rgba(34,197,94,.28)">'
    +'<div style="font-size:11px;font-weight:600;color:#7db8cc;letter-spacing:1.5px;text-transform:uppercase;margin-bottom:6px">5-Year Water Conservation</div>'
    +'<div style="display:flex;align-items:baseline;gap:10px">'
      +'<div style="font-family:\'JetBrains Mono\',monospace;font-size:24px;font-weight:700;color:var(--gr);line-height:1">'+fn(Math.round(water5))+'</div>'
      +'<div style="font-size:12px;color:var(--mu)">gallons</div>'
    +'</div>'
    +'<div style="font-size:11px;color:#7db8cc;margin-top:6px;line-height:1.45">5-Year Water Loss Reduction Total</div>'
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
    +water+bk+badges+disc;
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
  // Step 1 (Pool & System) gates the Continue button visually on having
  // at least one device selected — the device picker is right above so the
  // disabled state pairs cleanly with the rep's eye line.
  // The Property Name requirement is enforced separately by the nav-handler
  // popup (see requireNameOrPopup below), so reps who try to advance without
  // a name get explicit instructions instead of a silently-disabled button.
  var nameOK = !!(S.propertyName && String(S.propertyName).trim());
  var disableNext=S.step===1 && !hasDevices;
  // Tailored hint so the rep knows what's missing before they click.
  var navHint = '';
  if (S.step===1){
    if (!nameOK && !hasDevices) navHint = 'Enter a Property Name and select a device to continue';
    else if (!nameOK)            navHint = 'A Property Name is required to continue';
    else if (!hasDevices)        navHint = 'Select a device above to continue';
  }
  // Continue button is omitted on the final step — Export panel below is the action.
  // Clients skip the Quote step (index 3) \u2014 labels swap accordingly so they
  // see "Continue \u2192 Export" from Pricing and "\u2190 Pricing & Settings" from Export.
  var isClientNav = !!(window.AR2_CLOUD && AR2_CLOUD.isReady() && AR2_CLOUD.isClient());
  // Portfolio property mode also skips the Quote step \u2014 Quote lives at the
  // portfolio level, not per-property. Treat it the same as client nav for
  // label purposes so reps see "Continue \u2192 Export" / "\u2190 Pricing & Settings"
  // instead of references to a step they'll never visit.
  var inPfProp = !!(window.AR2_PF && AR2_PF.inPropertyMode && AR2_PF.inPropertyMode());
  var skipQuote = isClientNav || inPfProp;
  var nextLabel='Continue \u2192';
  if(S.step===1) nextLabel='Continue \u2192 Pricing';
  else if(S.step===2) nextLabel = skipQuote ? 'Continue \u2192 Export' : 'Continue \u2192 Quote';
  else if(S.step===3) nextLabel='Continue \u2192 Export';
  var backLabel='\u2190 Back';
  if(S.step===1) backLabel='\u2190 Map Pools';
  else if(S.step===2) backLabel='\u2190 Pool & System';
  else if(S.step===3) backLabel='\u2190 Pricing & Settings';
  else if(S.step===4) backLabel = skipQuote ? '\u2190 Pricing & Settings' : '\u2190 Quote';
  var html='<div class="ar-nav-stack">'
    +(isLast?'':'<button class="ar-btn primary advance full" data-nav="next"'+(disableNext?' disabled':'')+'>'+nextLabel+'</button>')
    // Step 5 (Export) gets a second Archive entrypoint above the Back button
    // so the rep doesn't have to scroll to the Export panel just to save.
    // Hidden in portfolio property mode — saves happen via "Save & Close",
    // not the single-property Archive flow.
    +(isLast && !inPfProp?'<button class="ar-btn full" data-action="save-report" style="background:linear-gradient(135deg,var(--gr),#4ade80);color:var(--nv);border:none;font-weight:700"'+(EX.saving?' disabled':'')+'>Save to Archive</button>':'')
    +'<button class="ar-btn ghost retreat full" data-nav="back">'+backLabel+'</button>'
    +(navHint?'<div class="ar-nav-hint">'+navHint+'</div>':'')
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
    // Client header branding — replace "AQUAREV WATER" wordmark in the top
    // bar with the Client's name (which the admin types as the company name
    // when creating the user). Co-brand below with subtle "powered by"
    // attribution on the existing "ROI Calculator" subtitle.
    var brandEl = document.querySelector('#ar2 .ar-bn');
    var subEl   = document.querySelector('#ar2 .ar-bs');
    if(brandEl && subEl){
      // Cache the originals on first render so we can restore on logout
      if(brandEl.dataset.origText == null) brandEl.dataset.origText = brandEl.textContent;
      if(subEl.dataset.origText   == null) subEl.dataset.origText   = subEl.textContent;
      if(isCloudClient){
        var clientName = (AR2_CLOUD.user() && AR2_CLOUD.user().name) || brandEl.dataset.origText;
        brandEl.textContent = clientName;
        // Tighter single-line layout for client name — overrides the default
        // .ar-bn styles that were causing two-word names to wrap.
        brandEl.style.whiteSpace = 'nowrap';
        brandEl.style.lineHeight = '1';
        brandEl.style.maxWidth = 'none';
        // Subtitle stays "ROI Calculator" — no co-brand text per request.
        subEl.textContent = subEl.dataset.origText;
      } else {
        brandEl.textContent = brandEl.dataset.origText;
        // Restore default styles for non-client users
        brandEl.style.whiteSpace = '';
        brandEl.style.lineHeight = '';
        brandEl.style.maxWidth = '';
        subEl.textContent   = subEl.dataset.origText;
      }
    }
    // Defense-in-depth: if a Client somehow lands on the Quote step (index 3)
    // via a non-arrow path (e.g. archived snapshot, deep link), bounce them
    // forward to Export. The step-arrow handler skips Quote in either direction
    // so this only fires for those edge cases — no infinite loop possible.
    if(isCloudClient && S.step === 3){
      S.step = 4;
    }
    // Keep the user-chip (top-bar avatar) in sync with the current cloud user.
    try { updateUserChip(); } catch(_){}
  }
  renderStepper();
  renderForm();
  renderDevices();
  renderNav();
  renderResults();
  // Re-initialize map canvas dimensions after visibility toggles
  if(S.step===0 && window.AR2_MAP && AR2_MAP.resize){ setTimeout(function(){ AR2_MAP.resize(); },60); }
  // Portfolio property mode (sandbox): every render() means state may
  // have changed — debounced autosave to portfolio_properties. No-op
  // when AR2_PF isn't loaded or the user isn't in property mode.
  if (window.AR2_PF && AR2_PF.inPropertyMode && AR2_PF.inPropertyMode()){
    try { AR2_PF.scheduleAutosave(); } catch(_){}
    // Re-render the subbar so the breadcrumb picks up live edits to
    // S.propertyName the moment the user types in the name field.
    try { AR2_PF._renderSubbar(); } catch(_){}
  }
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
      + '<div class="rpt-es-logo">' + docKindLabel + '</div>'
      + '<div class="rpt-es-logo-sub">AQUAREV WATER</div>'
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
      + qHeader.replace('<div class="rpt-es-logo">' + docKindLabel + '</div>', '<div class="rpt-es-logo">PAYMENT FORM</div>')
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
    // Unique gradient ID per chart instance — portfolio reports may stack
    // multiple Exec Summary charts in the same DOM (one per property), and
    // duplicate `id` attributes break fill="url(#…)" resolution after the
    // first match. Random suffix is collision-safe across reasonable chart
    // counts. Also belt-and-suspenders: SVG IDs that include underscores
    // and a base-36 suffix avoid clashing with any other inline SVGs.
    var chartId = 'invFill_' + Math.floor(Math.random()*1e9).toString(36);
    var svg='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 '+W+' '+H+'" class="rpt-es-chart-svg" preserveAspectRatio="xMidYMid meet">'
      +'<defs><linearGradient id="'+chartId+'" x1="0" y1="0" x2="0" y2="1">'
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
    // The data line goes from (x0,y0) below zero up to (x60,y60) above zero.
    // Filling the wedge between the line and the zero baseline as ONE polygon
    // creates a self-intersection at the payback crossing — print engines
    // render the self-intersecting polygon inconsistently (PDF often drops
    // most of the fill while screen happens to look right). Splitting at
    // paybackX into two non-crossing triangles renders identically in both.
    //   • negWedge: investment-recovery period (below zero baseline)
    //   • posWedge: net-benefit period (above zero baseline)
    // When payback is outside [0,60], paybackX clamps to a boundary and one
    // triangle degenerates harmlessly to zero area.
    var negWedge = 'M '+x0+' '+yZero+' L '+x0+' '+y0+' L '+paybackX+' '+yZero+' Z';
    var posWedge = 'M '+paybackX+' '+yZero+' L '+x60+' '+y60+' L '+x60+' '+yZero+' Z';
    svg+='<path d="'+negWedge+'" fill="url(#'+chartId+')" fill-opacity="0.55"/>';
    svg+='<path d="'+posWedge+'" fill="url(#'+chartId+')"/>';
    // Data line drawn on top of the wedges so it's always visible regardless
    // of fill rendering. Stroke uses an explicit color so it never depends on
    // gradient ID resolution.
    svg+='<line x1="'+x0+'" y1="'+y0+'" x2="'+x60+'" y2="'+y60+'" stroke="#15803d" stroke-width="2" stroke-linecap="round"/>';
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
    // Title/subtitle order is reversed across all reports: the section
    // name owns the large position; the brand (AQUAREV WATER wordmark or
    // the client's logo in client mode) sits in the smaller subtitle slot.
    var esHeaderBrand = clientLogo
      ? '<img src="'+clientLogo+'" alt="'+esc(clientName)+' logo" style="max-height:18px;max-width:160px;display:block;margin-top:4px" />'
      : '<div class="rpt-es-logo-sub">AQUAREV WATER</div>';
    var esHeader='<div class="rpt-es-head">'
      +'<div class="rpt-es-head-left">'
        +'<div class="rpt-es-logo">Executive Summary</div>'
        +esHeaderBrand
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
        +'<div class="rpt-es-logo">Executive Summary</div>'
        +'<div class="rpt-es-logo-sub">AQUAREV WATER</div>'
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
          +'<div class="rpt-pp-img rpt-pp-img-empty"><svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#7db8cc" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 14c1.5 0 1.5 1 3 1s1.5-1 3-1 1.5 1 3 1 1.5-1 3-1 1.5 1 3 1 1.5-1 3-1"/><path d="M3 18c1.5 0 1.5 1 3 1s1.5-1 3-1 1.5 1 3 1 1.5-1 3-1 1.5 1 3 1 1.5-1 3-1"/><path d="M7 14V6a2 2 0 014 0"/><path d="M13 14V6a2 2 0 014 0v8"/></svg><div class="rpt-pp-img-empty-lbl">Pool</div></div>'
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
          : '<div class="rpt-pp-img rpt-pp-img-empty"><svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#7db8cc" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 14c1.5 0 1.5 1 3 1s1.5-1 3-1 1.5 1 3 1 1.5-1 3-1 1.5 1 3 1 1.5-1 3-1"/><path d="M3 18c1.5 0 1.5 1 3 1s1.5-1 3-1 1.5 1 3 1 1.5-1 3-1 1.5 1 3 1 1.5-1 3-1"/><path d="M7 14V6a2 2 0 014 0"/><path d="M13 14V6a2 2 0 014 0v8"/></svg><div class="rpt-pp-img-empty-lbl">Pool</div></div>';
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
          +'<div class="rpt-es-logo">Pool Profile</div>'
          +'<div class="rpt-es-logo-sub">AQUAREV WATER</div>'
        +'</div>'
        +'<div class="rpt-es-head-right">'
          +'<div class="rpt-es-prop-name">'+esc(propName)+'</div>'
          +'<div class="rpt-es-prop-date">'+todayStr+' \u00b7 '+pageCount+' '+(pageCount===1?'pool':'pools')+'</div>'
          +'<span class="rpt-es-nsf-badge">NSF/ANSI 50 Certified \u00b7 IAPMO</span>'
        +'</div>'
      +'</div>';
      // ── Auto-pagination: chunk cards into multiple .rpt-pp-page wrappers ──
      // Landscape: 15 cards/page (3 cols × 5 rows). Portrait: 10 cards/page (2 cols × 5 rows).
      // Bumped from 12/8 → 15/10 (2026-05-13) for tighter presentation density.
      // Each page renders its own header band (with "Page X of Y" subtitle when paginated)
      // and its own footer band. Cards listed in user-defined order.
      var CARDS_PER_PAGE=(EX.layout==='landscape')?15:10;
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

  // Client logo (base64 dataURL) — only for signed-in Client users.
  // Embedded into the Cover Page + Exec Summary header so PDFs are co-branded.
  var clientLogo = (window.AR2_CLOUD && AR2_CLOUD.isReady() && AR2_CLOUD.isClient() && AR2_CLOUD.user() && AR2_CLOUD.user().logo_data) || '';
  var clientName = (window.AR2_CLOUD && AR2_CLOUD.isReady() && AR2_CLOUD.isClient() && AR2_CLOUD.user() && AR2_CLOUD.user().name) || '';

  // ── Cover page — overlay text on CDN image ──
  var coverHtml='';
  if(EX.inclCover&&EX.layout==='portrait'){
    // Client logo block — sits above the "Water Enhancement..." kicker line.
    // Hidden when not in client mode. Max 80px tall, centered.
    var coverLogoHtml = clientLogo
      ? '<div style="margin-bottom:18px;text-align:center"><img src="'+clientLogo+'" alt="'+esc(clientName)+' logo" style="max-height:80px;max-width:280px;display:inline-block" /></div>'
      : '';
    coverHtml='<div class="rpt-cover-page">'
      +cdnImg('https://cdn.prod.website-files.com/691fa5d63fc3a5a75a65efeb/69de6e658f0a11dd1b3d7563_AquaRev_Fact%20Sheet_COVER1-01.jpg','class="rpt-cover-bg"',1100)
      +'<div class="rpt-cover-overlay">'
        +coverLogoHtml
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
    // Client mode: replace the AQUAREV WATER wordmark with the client's
    // uploaded logo on the Assessment page (which is what Clients actually
    // see — Cover Page + Exec Summary toggles are hidden for them).
    +'<div class="rpt-head">'
      +'<div class="rpt-head-left">'
        +'<div class="rpt-logo">Cost Savings Assessment</div>'
        +(clientLogo
          ? '<img src="'+clientLogo+'" alt="'+esc(clientName)+' logo" style="max-height:20px;max-width:200px;display:block;margin-top:5px" />'
          : '<div class="rpt-logo-sub">AQUAREV WATER</div>')
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
          +'<div class="rpt-stitle">AquaRev Devices Required <span style="font-weight:500;color:#666;font-size:11px;letter-spacing:0;text-transform:none">(on Return Pipes)</span></div>'
          +devRows
          +(R.disc_amt>0?'<div class="rpt-row"><span class="k">Discount Applied</span><span class="v pos">\u2212'+fc(R.disc_amt,0)+'</span></div>':'')
          +'<div class="rpt-row strong"><span class="k">Total Investment</span><span class="v">'+fc(R.inv,0)+'</span></div>'
        +'</div>'
      +'</div>'

      // Rows B-D: layout-aware
      +(EX.layout==='landscape'
        // ── LANDSCAPE: compact single-page layout ──
        // Row B = Purchase Options | Monthly Savings Breakdown (2 cols,
        // natural height). Row C = Property Images | Video Resources
        // (separate 2-col row at the bottom of body). Previous structure
        // nested the media stacks INSIDE each column of Row B and tried
        // to bottom-pin them with margin-top:auto / grid 1fr — Chrome's
        // print engine wouldn't size the inner grid tracks against a
        // definite parent height, so the bottom stacks got pushed past
        // the body's overflow clip and vanished from PDF. Pulling the
        // media into its own sibling row removes the inner-grid sizing
        // dependency entirely; natural flow handles it cleanly.
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
        +((imgHtml||ytHtml)?'<div class="rpt-sec rpt-cols rpt-ls-media-row">'+imgHtml+ytHtml+'</div>':'')
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
        // .rpt-pt-media-row hooks into the @media print rule that pins
        // this row to the bottom of the body slot (margin-top:auto +
        // flex:0 0 auto). Guarantees Property Images / Video Resources
        // stay fully visible even when upper content (Pool Config +
        // Purchase + Breakdown + Water) runs tall — overflow clips the
        // upper rows first, never the media row.
        +((imgHtml||ytHtml)?'<div class="rpt-sec rpt-cols rpt-pt-media-row">'+imgHtml+ytHtml+'</div>':'')
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

    // Title/subtitle reversed across all reports: section name in the large
    // position, brand (or client logo when in client mode) in the smaller
    // subtitle position.
    var assessHeaderBrand = clientLogo
      ? '<img src="'+clientLogo+'" alt="'+esc(clientName)+' logo" style="max-height:20px;max-width:200px;display:block;margin-top:5px" />'
      : '<div class="rpt-logo-sub">AQUAREV WATER</div>';
    var assessHeader='<div class="rpt-head">'
      +'<div class="rpt-head-left">'
        +'<div class="rpt-logo">Cost Savings Assessment</div>'
        +assessHeaderBrand
      +'</div>'
      +'<div class="rpt-head-right">'
        +'<div class="rpt-prop-name">'+esc(prop)+'</div>'
        +'<div class="rpt-prop-date">'+today+'</div>'
        +'<span class="rpt-nsf-badge">NSF/ANSI 50 Certified · IAPMO</span>'
      +'</div>'
    +'</div>';

    var assessHeaderCont='<div class="rpt-head">'
      +'<div class="rpt-head-left">'
        +'<div class="rpt-logo">Cost Savings Assessment</div>'
        +assessHeaderBrand
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
            + '<div class="rpt-stitle">AquaRev Devices Required <span style="font-weight:500;color:#666;font-size:11px;letter-spacing:0;text-transform:none">(on Return Pipes)</span></div>'
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
          // Cascade last-page landscape — same restructure as the single-
          // page path: Row B = Purchase | Breakdown (2-col, natural),
          // Row C = Property Images | Video Resources as its own row.
          ?'<div class="rpt-sec rpt-cols">'
            + '<div>'
              + '<div class="rpt-stitle">Purchase Options</div>'
              + purBox + advBox
            + '</div>'
            + '<div>'
              + '<div class="rpt-stitle">Monthly Savings Breakdown</div>'
              + '<table class="rpt-tbl">'
                + '<thead><tr><th>Category</th><th>Monthly</th><th>%</th></tr></thead>'
                + '<tbody>' + bkRows + '<tr class="tot"><td>Total</td><td>'+fc(R.total_mo)+'</td><td>100%</td></tr></tbody>'
              + '</table>'
              + (EX.inclWater?waterHtml:'')
            + '</div>'
          + '</div>'
          + ((imgHtml||ytHtml)?'<div class="rpt-sec rpt-cols rpt-ls-media-row">'+imgHtml+ytHtml+'</div>':'')
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
          // Cascade last-page portrait — same .rpt-pt-media-row hook so
          // the multi-page Assessment final page pins Property Images +
          // Video Resources to the bottom of the body slot.
          + ((imgHtml||ytHtml)?'<div class="rpt-sec rpt-cols rpt-pt-media-row">'+imgHtml+ytHtml+'</div>':'')
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

  // ── P7-pp: capture mode short-circuit ──
  // When the portfolio report builder is hydrating per-property state and
  // calling generateReport just to harvest its HTML output, EX._captureMode
  // is set. Hand the HTML back via window.__pfCapturedHtml and exit before
  // mount/print — the caller is responsible for restoring document.title.
  if (EX._captureMode){
    window.__pfCapturedHtml = html;
    document.title = origDocTitle;
    return;
  }
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
  // Portfolio property mode replaces the per-property export panel with a
  // single "Save & Close" card. Quote + PDF + roll-up happen at the
  // portfolio level — there's no per-property PDF in this mode, so the
  // Preview / Download / Archive trio is replaced with one action that
  // returns the rep to the Portfolio Overview. Autosave has already
  // persisted any pending state, so this button is purely navigational.
  if (window.AR2_PF && AR2_PF.inPropertyMode && AR2_PF.inPropertyMode()){
    var lp = (AR2_PF.loadedProperty && AR2_PF.loadedProperty()) || null;
    var propName = (lp && lp.property_name) || S.propertyName || 'this property';
    return '<div class="ar-card ar-fu ar-export">'
      +'<div class="ar-card-title" style="display:flex;align-items:center;gap:8px;color:var(--gr)">'+I.check+' Property complete</div>'
      +'<div style="font-size:13px;color:#cfe2eb;line-height:1.6;margin:10px 0 16px">'
        +'All calculator data for <b style="color:#fff">'+esc(propName)+'</b> has been saved to the portfolio.'
        +'<br><br>'
        +'<span style="color:#7db8cc">The <b style="color:var(--tx)">Portfolio Quote</b>, consolidated discounts, shipping, and PDF export all live at the <b style="color:var(--tx)">portfolio level</b>. Return to the Portfolio Overview to keep working.</span>'
      +'</div>'
      +'<button class="ar-gen-btn" data-pf-action="save-and-close" style="width:100%;background:linear-gradient(135deg,var(--gr),#4ade80);color:var(--nv);font-weight:700;letter-spacing:1px">Save &amp; Close → Portfolio Overview</button>'
    +'</div>';
  }
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
            // Pool Profiles is now always toggleable. When no pool photos
            // are uploaded, the Profile page renders a grey placeholder
            // card with a pool icon for each registered pool. Hint helps
            // the user know they CAN upload images for richer output.
            var hasImg=S.bodies.some(function(b){return !!b.image;});
            var hint=hasImg?'':' <span style="font-size:10px;color:var(--mu)">(Photos optional — placeholders used if none)</span>';
            return '<div class="ar-toggle-row"><label>Include Pool Profiles'+hint+'</label>'
              +'<div class="ar-sw-track'+(EX.inclPoolProfiles?' on':'')+'" data-ex-sw="inclPoolProfiles"><div class="ar-sw-thumb"></div></div>'
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
            // Pool Profiles is now always toggleable. When no pool photos
            // are uploaded, the Profile page renders a grey placeholder
            // card with a pool icon for each registered pool. Hint helps
            // the user know they CAN upload images for richer output.
            var hasImg=S.bodies.some(function(b){return !!b.image;});
            var hint=hasImg?'':' <span style="font-size:10px;color:var(--mu)">(Photos optional — placeholders used if none)</span>';
            return '<div class="ar-toggle-row"><label>Include Pool Profiles'+hint+'</label>'
              +'<div class="ar-sw-track'+(EX.inclPoolProfiles?' on':'')+'" data-ex-sw="inclPoolProfiles"><div class="ar-sw-thumb"></div></div>'
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
      +'<button class="ar-gen-btn" data-action="save-report" style="background:linear-gradient(135deg,var(--gr),#4ade80);color:var(--nv)"'+(EX.saving?' disabled':'')+'>Save</button>'
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
    // In portfolio property mode, "New" doesn't make sense — there's no
    // new-assessment workflow inside a property. Exit property mode first,
    // saving the current property's state, and return to the Portfolio
    // Overview where the user can pick "Add Property" instead.
    if (window.AR2_PF && AR2_PF.inPropertyMode()){
      AR2_PF.exitProperty();
      return;
    }
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
  // User chip — opens Sign Out menu
  var userMenuClick=e.target.closest('[data-action="user-menu"]');
  if(userMenuClick){ showUserMenu(userMenuClick); return; }
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
  var editLogoClick=e.target.closest('[data-action="admin-edit-logo"]');
  if(editLogoClick){
    showAdminEditLogoModal(editLogoClick.dataset.uid, editLogoClick.dataset.uname);
    return;
  }
  var deleteUserClick=e.target.closest('[data-action="admin-delete-user"]');
  if(deleteUserClick){
    showAdminDeleteUserModal(
      deleteUserClick.dataset.uid,
      deleteUserClick.dataset.uname,
      parseInt(deleteUserClick.dataset.utotal, 10) || 0
    );
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
  // ── Portfolio tool (sandbox) — tab switch + actions ────────────
  // All AR2_PF interactions route through this branch. Production
  // calculator doesn't load AR2_PF code, so these early-returns are
  // dead code paths there.
  if (window.AR2_PF) {
    var pfTabBtn = e.target.closest('[data-pf-tab]');
    if (pfTabBtn) { AR2_PF.setActiveTab(pfTabBtn.getAttribute('data-pf-tab')); return; }
    var pfAct = e.target.closest('[data-pf-action]');
    if (pfAct) {
      var act = pfAct.getAttribute('data-pf-action');
      // List view — new portfolio
      if (act === 'new-portfolio')    { AR2_PF.openNewPortfolioModal();    return; }
      if (act === 'modal-cancel')     { AR2_PF.closeNewPortfolioModal();   return; }
      if (act === 'modal-create')     { AR2_PF.submitNewPortfolio();       return; }
      // Overview view — navigation + properties (Phase 1b)
      if (act === 'back-to-list')     { AR2_PF.backToPortfoliosList();     return; }
      if (act === 'new-property')     { AR2_PF.openAddPropertyModal();     return; }
      if (act === 'add-prop-cancel')  { AR2_PF.closeAddPropertyModal();    return; }
      if (act === 'add-prop-create')  { AR2_PF.submitNewProperty();        return; }
      // Property mode subbar (Phase 1c)
      if (act === 'exit-property')    { AR2_PF.exitProperty();             return; }
      if (act === 'save-and-close')   { AR2_PF.exitProperty();             return; }
      // P3: Portfolio Overview action buttons — Quote + Export entrypoints
      if (act === 'open-quote')       { AR2_PF.openQuoteBuilder();         return; }
      if (act === 'open-export')      { AR2_PF.openExport();               return; }
      // CSV bulk-import — drag-and-drop modal that creates multiple portfolio
      // properties from a single uploaded template.
      if (act === 'import-csv')       { openImportCsvModal(AR2_PF.selectedPortfolioId()); return; }
      // P3: Export panel nav + Quote builder nav
      if (act === 'back-to-overview') { AR2_PF.backToOverview();           return; }
      if (act === 'back-from-quote')  { AR2_PF.backFromQuoteBuilder();     return; }
      // P7-lite: Export panel actions — Preview opens an HTML preview in a
      // new window using rolled-up data + per-property pages. Download +
      // Archive route to the same builder but with PDF / archive notes
      // (full html2canvas→jspdf integration in a follow-up; this delivers
      // visible output reps can verify against today).
      if (act === 'exp-preview' || act === 'exp-download' || act === 'exp-archive'){
        var pidE = AR2_PF.selectedPortfolioId();
        if (!pidE) return;
        buildPortfolioReportPreview(pidE, act).catch(function(err){
          alert('Could not build portfolio report: ' + ((err && err.message) || 'unknown error'));
        });
        return;
      }
      // P4: Quote builder Save actions — write to portfolio_quotes table.
      // Save Draft → status='draft', stays on builder. Save & Return →
      // status='ready', flips Export section to toggleable, navigates back.
      if (act === 'quote-save-draft' || act === 'quote-save-return'){
        var pid = AR2_PF.selectedPortfolioId();
        if (!pid) return;
        var isReturn = (act === 'quote-save-return');
        var q = AR2_PF.getQuoteState(pid);
        q.status = isReturn ? 'ready' : 'draft';
        // Optimistic UI — flip the Export section to ready/on immediately;
        // if the save fails we revert below.
        var st = AR2_PF.getExportState(pid);
        var prevReady = st.quoteReady;
        var prevOn    = st.quote;
        st.quoteReady = true;
        if (isReturn) st.quote = true;
        var btn = e.target.closest('[data-pf-action="' + act + '"]');
        var origLbl = btn ? btn.textContent : '';
        if (btn){ btn.disabled = true; btn.textContent = isReturn ? 'Saving…' : 'Saving…'; }
        AR2_PF.saveQuote(pid, q).then(function(){
          if (btn){ btn.textContent = isReturn ? 'Saved ✓' : 'Saved ✓'; }
          setTimeout(function(){
            if (isReturn){
              AR2_PF.backFromQuoteBuilder();
            } else if (btn){
              btn.textContent = origLbl;
              btn.disabled = false;
            }
          }, 600);
        }).catch(function(err){
          // Revert optimistic Export state on failure
          st.quoteReady = prevReady;
          st.quote = prevOn;
          if (btn){ btn.textContent = origLbl; btn.disabled = false; }
          alert('Quote could not be saved: ' + ((err && err.message) || 'unknown error'));
        });
        return;
      }
      // P3: Export section toggle — .ar-sw-track click flips the section's
      // boolean state. The toggle's visual "on" class comes from the
      // re-render, so we always re-render after the state mutation.
      if (act === 'exp-toggle'){
        e.preventDefault();
        e.stopPropagation();
        var pidT = AR2_PF.selectedPortfolioId();
        var key = pfAct.getAttribute('data-exp-key');
        if (pidT && key){
          var stCur = AR2_PF.getExportState(pidT);
          AR2_PF.setExportSection(pidT, key, !stCur[key]);
          var live = document.getElementById('ar2-bank-overview-mount');
          // viewMode is a closure inside AR2_PF — read it via the public
          // accessor, never `pfState.viewMode` from this outer scope (that
          // would be a ReferenceError and silently kill the re-render).
          if (live && AR2_PF.viewMode && AR2_PF.viewMode() === 'export') AR2_PF.renderPortfolioExport(live);
        }
        return;
      }
      // P7+: Layout sub-radio (Cards / List for Pool Profiles, Cards /
      // List-by-Country for Property Profiles). Pills are <span> elements
      // — not <input>/<label> — to avoid nested-label conflicts with the
      // outer .ar-pf-exp-row label (which would otherwise toggle the row's
      // checkbox every time the inner pill was clicked). Value comes from
      // data-layout-value, NOT .value (spans have no value property).
      // stopPropagation prevents the click from bubbling up to the row's
      // <label>, which would toggle the parent checkbox.
      if (act === 'exp-set-layout'){
        e.preventDefault();
        e.stopPropagation();
        var pidL = AR2_PF.selectedPortfolioId();
        var lk = pfAct.getAttribute('data-layout-key');
        var lv = pfAct.getAttribute('data-layout-value');
        if (pidL && lk && lv){
          var stL = AR2_PF.getExportState(pidL);
          stL[lk] = lv;
          var live = document.getElementById('ar2-bank-overview-mount');
          if (live && AR2_PF.viewMode && AR2_PF.viewMode() === 'export') AR2_PF.renderPortfolioExport(live);
        }
        return;
      }
      // P6: Ship-To mode toggle (split vs consolidated). Re-render the
      // Quote builder so the body section swaps between modes.
      if (act === 'ship-mode'){
        var pidS = AR2_PF.selectedPortfolioId();
        if (pidS){
          var qS = AR2_PF.getQuoteState(pidS);
          if (!qS.shipTos) qS.shipTos = { mode:'split', perProp:{}, consolidated:{address:'',notes:''} };
          qS.shipTos.mode = pfAct.value === 'consolidated' ? 'consolidated' : 'split';
          qS.status = 'draft';
          var live = document.getElementById('ar2-bank-overview-mount');
          if (live && AR2_PF.viewMode && AR2_PF.viewMode() === 'quote-builder') AR2_PF.renderQuoteBuilder(live);
        }
        return;
      }
      if (act === 'save-property')    {
        AR2_PF.saveCurrentProperty().catch(function(){ /* error surfaced in subbar */ });
        return;
      }
      // Prev/Next property navigation (Phase 1d)
      if (act === 'prev-property')    { AR2_PF.prevProperty(); return; }
      if (act === 'next-property')    { AR2_PF.nextProperty(); return; }
    }
    var pfRow = e.target.closest('[data-pf-portfolio]');
    if (pfRow) {
      AR2_PF.openPortfolio(pfRow.getAttribute('data-pf-portfolio'));
      return;
    }
    var pfProp = e.target.closest('[data-pf-property]');
    if (pfProp) {
      // Phase 1c — open the property in the existing calculator step flow.
      // AR2_PF.enterProperty loads state_json/ex_json into S/EX, shows the
      // breadcrumb subbar, and routes the user to the calculator.
      AR2_PF.enterProperty(pfProp.getAttribute('data-pf-property')).catch(function(err){
        alert('Could not open property: ' + (err && err.message || err));
      });
      return;
    }
  }
  // Toggle view: form ↔ bank (password-gated first time per session).
  // In cloud mode the user is already authenticated by the calculator gate,
  // so the legacy archive passcode is skipped — single sign-in to the cloud
  // account opens both the calculator and the archive.
  var viewBank=e.target.closest('[data-action="view-bank"]');
  if(viewBank){
    var inCloud = !!(window.AR2_CLOUD && AR2_CLOUD.isReady());
    // In portfolio property mode, the Archive button doubles as a "back
    // to portfolio" shortcut — saves the property and exits to the
    // Portfolio Overview. Without this branch, clicking Archive while
    // in property mode would leave the property state half-loaded.
    if (window.AR2_PF && AR2_PF.inPropertyMode()){
      AR2_PF.exitProperty();
      return;
    }
    // Lazy-init the Portfolio Tool the moment the archive is opened.
    // Idempotent — safe to call every time. Becomes enabled iff Cloud
    // is ready AND the signed-in user role is NOT 'client'.
    if (inCloud && window.AR2_PF) { try { AR2_PF.init(); } catch(_){} }
    if(VIEW==='bank'){ showView('form'); }
    else if(inCloud || ARCHIVE_UNLOCKED){ if(inCloud) ARCHIVE_UNLOCKED=true; showView('bank'); }
    else { showArchivePasswordModal(function(){ ARCHIVE_UNLOCKED=true; showView('bank'); }); }
    return;
  }
  var viewForm=e.target.closest('[data-action="view-form"]');
  if(viewForm){ showView('form'); return; }
  // Unified Archive — title click opens the record. Title is .ar-bank-prop;
  // clicking anywhere else on the row does NOT open it (per UX decision).
  // Portfolio rows route to AR2_PF.openPortfolio; singles use the existing
  // bankAction(recall) path.
  var bankProp = e.target.closest('.ar-bank-prop');
  if (bankProp && !e.target.closest('[data-bank-action]')){
    var card = bankProp.closest('.ar-bank-card[data-row-id]');
    // In multi-select mode the inner renderBank handler owns row clicks
    // (toggles the row's selected state). Skip the title-open behavior so
    // both handlers don't race.
    if (card && !card.classList.contains('selmode')){
      var rowId = card.dataset.rowId;
      var rowType = card.dataset.archiveType;
      if (rowType === 'portfolio' && window.AR2_PF && AR2_PF.openPortfolio){
        AR2_PF.openPortfolio(rowId);
      } else {
        bankAction(rowId, 'recall');
      }
      return;
    }
  }
  // Archive card actions
  var bankBtn=e.target.closest('[data-bank-action]');
  if(bankBtn){
    var bAct=bankBtn.dataset.bankAction;
    var bId=bankBtn.dataset.bankId;
    var bType=bankBtn.dataset.bankType; // 'portfolio' on portfolio rows; undefined for singles
    // Portfolio recall — open the Portfolio Overview drill-down view.
    if (bAct==='recall' && bType==='portfolio' && window.AR2_PF && AR2_PF.openPortfolio){
      AR2_PF.openPortfolio(bId);
      return;
    }
    // Portfolio duplicate — clones the portfolio + properties under a new name.
    if (bAct==='duplicate' && bType==='portfolio'){
      duplicatePortfolio(bId).then(function(){ renderArchive(); })
        .catch(function(err){ alert('Could not duplicate portfolio: ' + ((err && err.message) || 'unknown error')); });
      return;
    }
    // Portfolio reassign (admin only) — surface a "coming soon" until the
    // dedicated reassign RPC for portfolios lands.
    if (bAct==='reassign' && bType==='portfolio'){
      alert('Portfolio reassign — coming in the next sandbox ship.');
      return;
    }
    // Copy a single assessment to a portfolio — opens the picker modal.
    if (bAct==='copy-to-portfolio'){
      openCopyToPortfolioModal(bId);
      return;
    }
    // Portfolio delete — cascades to portfolio_properties + portfolio_quotes
    // via the FK ON DELETE CASCADE in the schema. RLS gates ownership.
    if (bAct==='delete' && bType==='portfolio'){
      if (!window.AR2_PF || !AR2_PF.deletePortfolio){
        alert('Portfolio delete not available — refresh and retry.');
        return;
      }
      if (!confirm('Delete this portfolio? All properties inside it will be deleted. This cannot be undone.')) return;
      AR2_PF.deletePortfolio(bId).then(function(){
        renderArchive();
      }).catch(function(err){
        alert('Could not delete portfolio: ' + ((err && err.message) || 'unknown error'));
      });
      return;
    }
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
  // Helper — Two modes skip the Quote step (index 3):
  //   • Client users (Quote is rep-only)
  //   • Portfolio property mode (Quote lives at the portfolio level)
  // When nav would land on Quote, skip in the same direction.
  function resolveStepForClient(target, direction){
    var isClient = !!(window.AR2_CLOUD && AR2_CLOUD.isReady() && AR2_CLOUD.isClient());
    var inPfProp = !!(window.AR2_PF && AR2_PF.inPropertyMode && AR2_PF.inPropertyMode());
    if(!(isClient || inPfProp) || target !== 3) return target;
    if(direction === 'next') return Math.min(STEPS.length - 1, target + 1);
    if(direction === 'back') return Math.max(0, target - 1);
    return target;
  }
  // Step arrow nav
  var stepNav=e.target.closest('[data-step-nav]');
  if(stepNav){
    var sdir=stepNav.dataset.stepNav;
    if(sdir==='next'&&S.step<STEPS.length-1){
      if(!requireNameOrPopup('next')) return;
      S.step=resolveStepForClient(S.step+1,'next');render();
    }
    else if(sdir==='back'&&S.step>0){S.step=resolveStepForClient(S.step-1,'back');render();}
    return;
  }
  // Nav back/next
  var navBtn=e.target.closest('[data-nav]');
  if(navBtn){
    var dir=navBtn.dataset.nav;
    if(dir==='next'&&S.step<STEPS.length-1){
      if(!requireNameOrPopup('next')) return;
      S.step=resolveStepForClient(S.step+1,'next');render();
    }
    else if(dir==='back'&&S.step>0){S.step=resolveStepForClient(S.step-1,'back');render();}
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
  // P3: Quote builder field — write back to pfState quote draft.
  if (el.dataset && el.dataset.qbKey && window.AR2_PF && AR2_PF.selectedPortfolioId){
    var pidQ = AR2_PF.selectedPortfolioId();
    if (pidQ){
      var qSt = AR2_PF.getQuoteState(pidQ);
      var keyQ = el.dataset.qbKey;
      var valQ = el.value;
      // Numeric coercion for the fields we know are numeric
      if (keyQ === 'discountPct' || keyQ === 'taxRate' || keyQ === 'shippingCost' || keyQ === 'depositPct'){
        valQ = parseFloat(valQ) || 0;
      }
      qSt[keyQ] = valQ;
      // Mark dirty so the Export panel knows quote needs (re-)saving
      qSt.status = 'draft';
    }
    return;
  }
  // P6: Ship-To inputs — per-property and consolidated.
  if (el.dataset && window.AR2_PF && AR2_PF.selectedPortfolioId){
    var pidSh = AR2_PF.selectedPortfolioId();
    if (pidSh){
      if (el.dataset.qbShipProp){
        var qShP = AR2_PF.getQuoteState(pidSh);
        if (!qShP.shipTos) qShP.shipTos = { mode:'split', perProp:{}, consolidated:{address:'',notes:''} };
        if (!qShP.shipTos.perProp) qShP.shipTos.perProp = {};
        var propId = el.dataset.qbShipProp;
        var fld    = el.dataset.qbShipField; // 'override' | 'notes'
        if (!qShP.shipTos.perProp[propId]) qShP.shipTos.perProp[propId] = { override:'', notes:'' };
        qShP.shipTos.perProp[propId][fld] = el.value;
        qShP.status = 'draft';
        return;
      }
      if (el.dataset.qbShipCons){
        var qShC = AR2_PF.getQuoteState(pidSh);
        if (!qShC.shipTos) qShC.shipTos = { mode:'consolidated', perProp:{}, consolidated:{address:'',notes:''} };
        if (!qShC.shipTos.consolidated) qShC.shipTos.consolidated = { address:'', notes:'' };
        qShC.shipTos.consolidated[el.dataset.qbShipCons] = el.value;
        qShC.status = 'draft';
        return;
      }
    }
  }
  // P5: Line item override input (qty or unit price per SKU). Empty string
  // clears the override (= "use auto"); any number sticks. Live-recompute
  // the line total by re-rendering only the section. Full re-render of the
  // Quote builder would steal input focus mid-typing, so we patch in place.
  if (el.dataset && el.dataset.qbOverrideSku && window.AR2_PF && AR2_PF.selectedPortfolioId){
    var pidL = AR2_PF.selectedPortfolioId();
    if (pidL){
      var qStL = AR2_PF.getQuoteState(pidL);
      if (!qStL.lineOverrides) qStL.lineOverrides = {};
      var sku = el.dataset.qbOverrideSku;
      var field = el.dataset.qbOverrideField; // 'qty' | 'price'
      if (!qStL.lineOverrides[sku]) qStL.lineOverrides[sku] = { qty: null, price: null };
      var raw = el.value;
      qStL.lineOverrides[sku][field] = (raw === '' || raw == null) ? null : (parseFloat(raw) || 0);
      qStL.status = 'draft';
      // Patch only the line total + subtotal — leave the input alone so
      // the cursor doesn't jump. Find the row by walking up.
      var rowEl = el.closest('.ar-pf-li-row');
      if (rowEl){
        var states = (window.AR2_PF._state && AR2_PF._state.propertyStates && AR2_PF._state.propertyStates[pidL] && AR2_PF._state.propertyStates[pidL].rows) || [];
        // Recompute just this SKU's row total
        var rowRoll = (function(){
          if (typeof PIPES === 'undefined') return null;
          var spec = null;
          for (var i=0;i<PIPES.length;i++){ if (PIPES[i].k === sku){ spec = PIPES[i]; break; } }
          if (!spec) return null;
          var autoQty = 0;
          for (var j=0;j<states.length;j++){
            var sj = states[j].state_json || {};
            autoQty += Number(sj[sku]) || 0;
          }
          var ov = qStL.lineOverrides[sku] || {};
          var qty   = (ov.qty   != null) ? ov.qty   : autoQty;
          var price = (ov.price != null) ? ov.price : spec.price;
          return { qty: qty, price: price, total: qty * price };
        })();
        if (rowRoll){
          var totalCell = rowEl.querySelectorAll('.ar-pf-li-cell.num b');
          if (totalCell.length){
            totalCell[totalCell.length-1].textContent = '$' + fn(rowRoll.total);
          }
          // Update subtotal across all rows
          var all = document.querySelectorAll('.ar-pf-li-row');
          var sum = 0;
          for (var k=0;k<all.length;k++){
            var tEl = all[k].querySelector('.ar-pf-li-cell.num b');
            if (tEl){
              var v = (tEl.textContent || '').replace(/[^0-9.\-]/g, '');
              sum += parseFloat(v) || 0;
            }
          }
          var subEl = document.querySelector('.ar-pf-li-subtotal b');
          if (subEl) subEl.textContent = '$' + fn(sum);
        }
      }
    }
    return;
  }
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
  // Map Pools "Name" input (Step 1) — mirror typed value into S.propertyName
  // so the Step 2 form pre-fills, and so the Step 2 → Step 3 gate sees the
  // name immediately (without waiting for save / step transition).
  if(el.id==='ap-name'){
    S.propertyName = el.value;
    var stepInput = document.querySelector('#ar2-form [data-f="propertyName"]');
    if(stepInput && stepInput !== el) stepInput.value = el.value;
    try { renderNav(); } catch(_){}
    return;
  }
  // Generic calculator field
  if(el.dataset.f){
    var key=el.dataset.f;
    var raw=el.value;
    // Property Name (Step 2) — mirror back to the persistent Map Pools input
    // so navigating back to Step 1 shows the same value, and refresh the
    // nav so the Continue → Pricing gate updates as the rep types.
    if(key==='propertyName'){
      S.propertyName=raw;
      var apName = document.getElementById('ap-name');
      if(apName && apName !== el) apName.value = raw;
      try { if(window.AR2_MAP && AR2_MAP.setPropertyName) AR2_MAP.setPropertyName(raw); } catch(_){}
      try { renderNav(); } catch(_){}
      return;
    }
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
      '<p>Identify and measure each pool at the property. The first card has a <b style="color:var(--gr)">green top border</b> — that\'s your "start here" anchor.</p>'
     +'<ol>'
       +'<li><b>Add Property or Portfolio</b> — pick the record type at the top:'
         +'<ul>'
           +'<li><b>Property</b> — single assessment (default).</li>'
           +'<li><b>Add to Portfolio</b> — attach this property to an existing portfolio. A picker appears with portfolios you can access; pick one, or choose <b>+ New portfolio…</b> to create one inline.</li>'
           +'<li><b>Portfolio</b> — start a brand-new portfolio. Whatever you\'ve traced so far becomes the portfolio\'s first property automatically.</li>'
         +'</ul>'
       +'</li>'
       +'<li><b>Property name</b> — type the hotel/resort name. Suggestions appear as you type. The name auto-mirrors into Step 2.</li>'
       +'<li><b>Locate on map</b> — searches by name, address, or Plus Code, then centers the satellite map. The resolved address is saved with the record for grouping + future ship-to use.</li>'
       +'<li><b>Trace each pool</b> — click <b>Magic Wand</b> and tap a pool for auto-detect, or click <b>Trace polygon by hand</b> to draw it yourself. Centre / Merge mode / Undo controls sit at the bottom-left of the map.</li>'
       +'<li><b>Confirm details</b> — name, type, depth, then <b>Register pool</b>.</li>'
       +'<li>Repeat for each pool, then click <b>Continue to Pool &amp; System</b> (top of the right column).</li>'
     +'</ol>'
     +'<p style="color:var(--mu);font-size:11px">Tip: <b>Skip Map Pools</b> (top of the right column) jumps straight to manual data entry if you already know pool sizes.</p>'
  },
  'pool-system': {
    title: 'Pool &amp; System — Step 2 of 5',
    body:
      '<p>Enter pool dimensions and pick the AquaRev devices needed for each pool.</p>'
     +'<ol>'
       +'<li><b>Property Name</b> — required to advance. Auto-mirrors from Map Pools if you typed it there. Attempting to continue without a name pops an instruction modal.</li>'
       +'<li><b>Pool dimensions</b> — length, width, depth. Total volume calculates automatically.</li>'
       +'<li><b>AquaRev Devices Required (on Return Pipes)</b> — pick the pipe size of each device that will be installed.</li>'
       +'<li><b>Water Loss / Chemical Costs</b> — tune the expected reduction percentages and per-gallon costs to match the property\'s real numbers.</li>'
     +'</ol>'
     +'<p style="color:var(--mu);font-size:11px">Tip: The results column on the right updates live as you type — use it to sanity-check the numbers before clicking Continue.</p>'
  },
  'pricing': {
    title: 'Pricing &amp; Settings — Step 3 of 5',
    body:
      '<p>Apply discount, savings projection, and finalize the ROI before quoting.</p>'
     +'<ul>'
       +'<li><b>Discount slider</b> — discount applied to the equipment subtotal.</li>'
       +'<li><b>Savings Weight</b> — caps projected savings to a conservative percentage of the lab-validated maximum (default 100%).</li>'
       +'<li><b>5-Year Water Conservation</b> card — totals the 5-year water loss reduction in gallons, shown right above the Monthly Savings Breakdown.</li>'
     +'</ul>'
     +'<p>When the numbers look right, click <b>Continue → Quote</b> to build the proposal.</p>'
  },
  'quote': {
    title: 'Quote — Step 4 of 5',
    body:
      '<p>Build the formal commercial document — Quote, Purchase Order, or Invoice.</p>'
     +'<ol>'
       +'<li><b>Document Type</b> — pick Quote, Purchase Order, or Invoice. The PDF header updates accordingly.</li>'
       +'<li><b>Header / Buyer</b> — buyer name, address, contact. Use the <b>Same as Buyer</b> toggle to copy buyer info into Ship-To.</li>'
       +'<li><b>Line Items</b> — equipment auto-pulls from Step 2. Warranty / Services / Shipping can be toggled <b>Included</b> to print "INCLUDED" without adding to the total.</li>'
       +'<li><b>Standard Terms</b> — short legal block on the Quote page. <b>Purchase Terms &amp; Conditions</b> — long-form legal, prints on its own page.</li>'
       +'<li><b>Payment Method</b> — CC / Wire / Check (the PDF shows all three on the Payment Form page).</li>'
       +'<li><b>Preview Quote PDF</b> — see exactly what the customer will receive.</li>'
     +'</ol>'
     +'<p style="color:var(--mu);font-size:11px">Portfolio assessments skip this step entirely — quote prep happens at the portfolio level in the Archive.</p>'
  },
  'export': {
    title: 'Export — Step 5 of 5',
    body:
      '<p>Pick which pages go into the final PDF, add property images / videos, and download.</p>'
     +'<ul>'
       +'<li><b>Sections to include</b> — Cover, Pool Profiles, Exec Summary, Quote pages, Back Cover. Toggle any page off you don\'t want.</li>'
       +'<li><b>Property Images</b> — upload up to 4 photos to appear on the Pool Profiles page.</li>'
       +'<li><b>YouTube Videos</b> — paste up to 4 URLs to appear on the Exec Summary page.</li>'
       +'<li><b>Preview</b> — see the entire PDF in browser. <b>Download</b> generates a print-ready PDF.</li>'
       +'<li><b>Save</b> (middle column) and <b>Save to Archive</b> (right column nav) — both store the assessment to your archive for later.</li>'
     +'</ul>'
     +'<p style="color:var(--mu);font-size:11px">In portfolio property mode this step collapses to a single <b>Save &amp; Close → Portfolio Overview</b> action — the portfolio handles PDF generation at the portfolio level.</p>'
  },
  'archive': {
    title: 'Assessments',
    body:
      '<p>Every saved record — single assessments and portfolios — lives here in one unified list.</p>'
     +'<ul>'
       +'<li><b>Type indicator</b> — single rows have a teal document icon + teal left-edge stripe; portfolios have a green stack icon + green stripe. Scan-pattern at a glance.</li>'
       +'<li><b>Title click</b> opens the record. Singles load into the calculator; portfolios open the Portfolio Overview.</li>'
       +'<li><b>Per-row buttons</b> — Open · Duplicate · Copy to Portfolio (singles only) · Portrait / Landscape PDF · Reassign (admin) · Delete.</li>'
       +'<li><b>Copy to Portfolio</b> — takes a single assessment and adds it to an existing portfolio. Choose Save as New (new property in the portfolio) or Save &amp; Update (overwrite an existing property).</li>'
       +'<li><b>Search</b> — filters by record name across both types.</li>'
       +'<li><b>Select</b> — at the top, enables bulk delete.</li>'
     +'</ul>'
     +'<p style="color:var(--mu);font-size:11px">Tip: Need to import a list of properties from a hotel-chain CSV? Open the portfolio first, then click <b>↑ Import CSV</b> on the Overview to bulk-create properties.</p>'
  },
  'portfolio-overview': {
    title: 'Portfolio Overview',
    body:
      '<p>Manage the properties in this portfolio, prepare the quote, and package the export.</p>'
     +'<ul>'
       +'<li><b>KPI strip</b> — properties count, total investment, total monthly / annual savings, blended payback.</li>'
       +'<li><b>+ Add Property</b> — adds one property manually. Drops you into property mode on the Map Pools step to fill it in.</li>'
       +'<li><b>↑ Import CSV</b> — bulk-import properties from a hotel-chain CSV (drag-and-drop or click). Use the <b>Download template</b> link in the modal for the recognized header format.</li>'
       +'<li><b>Quote</b> — opens the Portfolio Quote builder (Recipient, Ship-Tos, Line Items, Adjustments, Deposit &amp; Terms, Purchase Terms, Notes).</li>'
       +'<li><b>Export →</b> — opens the Portfolio Export panel with section toggles for the final PDF.</li>'
       +'<li><b>Property roster</b> — click any row to enter property mode and edit that property\'s pools / devices / savings.</li>'
     +'</ul>'
     +'<p style="color:var(--mu);font-size:11px">RLS gates portfolio data: users see their own portfolios; admins see every portfolio across the team.</p>'
  },
  'portfolio-export': {
    title: 'Portfolio Export',
    body:
      '<p>Pick which sections go into the portfolio PDF, then Preview, Download, or Save to Archive.</p>'
     +'<ul>'
       +'<li><b>Cover Page</b> — portfolio name + buyer info.</li>'
       +'<li><b>Executive Summary</b> — rolled-up KPIs across all properties.</li>'
       +'<li><b>Portfolio Assessment</b> — single page summarizing the entire portfolio (Property Configuration, AquaRev Devices Required roll-up, Purchase Options, Monthly Savings Breakdown, Water Conservation, Investment chart).</li>'
       +'<li><b>Property Profiles</b> — one card per property (Cards mode) or a compact table grouped by country (List by Country mode).</li>'
       +'<li><b>Property Pool Profiles</b> — pool detail grouped by property. Cards (full per-pool cards) or List (compact row table).</li>'
       +'<li><b>Portfolio Quote</b> — locked until you configure it. Click <b>Unlock &amp; Configure →</b> to open the Quote builder, then return here with the section toggleable.</li>'
       +'<li><b>Purchase Terms and Conditions</b> — long-form legal page (pulls from Quote section 6).</li>'
       +'<li><b>Back Cover</b> — closing branded page.</li>'
     +'</ul>'
  },
  'quote-builder': {
    title: 'Portfolio Quote',
    body:
      '<p>Configure the portfolio-wide quote. All sections persist automatically.</p>'
     +'<ol>'
       +'<li><b>Recipient</b> — buyer name, email, phone, bill-to address.</li>'
       +'<li><b>Ship-To Addresses</b> — split (one per property, auto-populated from property addresses) or consolidated (single destination).</li>'
       +'<li><b>Line Items</b> — auto-rolled SKUs across all properties. Override qty or unit price per SKU; expand <b>Per-property breakdown</b> to see attribution.</li>'
       +'<li><b>Adjustments</b> — portfolio discount %, tax rate, consolidated shipping cost + term.</li>'
       +'<li><b>Deposit &amp; Payment Terms</b> — deposit %, due date, balance due terms.</li>'
       +'<li><b>Standard Terms &amp; Purchase Terms and Conditions</b> — short terms on the Quote page + long-form legal on its own page. Notes are internal-only.</li>'
     +'</ol>'
     +'<p><b>Save Draft</b> keeps you on the builder; <b>Save &amp; Return →</b> writes to the portfolio quote table and drops you back at Export with the Quote section now toggleable.</p>'
  },
  'admin': {
    title: 'Admin Dashboard',
    body:
      '<p>Admins see this drawer at the top of the Assessments page.</p>'
     +'<ul>'
       +'<li><b>KPI grid</b> — six cards across the top: Records · 7 Days · Assessments Total · Portfolios Total · Properties Total · Pools Total · Value Total. Deleted records are excluded automatically.</li>'
       +'<li><b>User Activity table</b> — per-user lifetime login count, 30-day records, 30-day logins, last login date.</li>'
       +'<li><b>90-Day Chart</b> — daily records created, broken out per user, in EST.</li>'
       +'<li><b>Created By column</b> — every record shows who saved it. Use the orange ⇒ button to reassign records between users.</li>'
     +'</ul>'
  }
};

function helpKeyForCurrentView(){
  // Portfolio surfaces take precedence — the rep is inside a portfolio context.
  try {
    if (window.AR2_PF && AR2_PF.viewMode){
      var vm = AR2_PF.viewMode();
      if (vm === 'export')        return 'portfolio-export';
      if (vm === 'quote-builder') return 'quote-builder';
      if (vm === 'overview')      return 'portfolio-overview';
    }
  } catch(_){}
  // Bank/Archive view trumps the calculator step
  try { if(typeof VIEW !== 'undefined' && VIEW === 'bank') return 'archive'; } catch(_){}
  try {
    var step = (typeof S !== 'undefined' && S && typeof S.step === 'number') ? S.step : 0;
    return ['map-pools','pool-system','pricing','quote','export'][step] || 'map-pools';
  } catch(_){ return 'map-pools'; }
}

/* ── Guided Product Tour ────────────────────────────────────────────────
   Interactive step-by-step walkthrough. Each step targets a CSS selector,
   draws a spotlight ring around it, dims everything else, and shows a
   coach-mark card with Back / Next / Skip controls. The user can still
   interact with the highlighted element (the dim overlay has pointer-events
   only outside the spotlight). Steps with a missing target are skipped.

   Tour keys mirror HELP_CONTENT keys so the same "start tour" button on
   the help modal launches the right walkthrough for the current view. */
var TOUR_STEPS = {
  'map-pools': [
    { selector:'#ap2 .ap-card.ap-card-start',     title:'Pick the record type',
      body:'Property = a single assessment. Add to Portfolio = attach this property to an existing portfolio. Portfolio = create a brand-new portfolio (whatever you trace becomes its first property).' },
    { selector:'#ap-name',                        title:'Name the property',
      body:'Type the hotel or resort name. Suggestions appear as you type. This name auto-mirrors into Step 2.' },
    { selector:'#ap-query',                       title:'Locate on the map',
      body:'Type an address or Plus Code, then click Locate on map. The resolved Google address is saved with the record for grouping + future ship-to use.' },
    { selector:'[data-action="magic-wand"]',      title:'Trace pools',
      body:'Click Magic Wand and tap a pool on the map for auto-detect. Or use Trace polygon by hand to draw it manually.' },
    { selector:'#ap-map',                         title:'The map workspace',
      body:'Pools you trace appear here. Centre, Merge mode, and Undo sit at the bottom-left of the map.' },
    { selector:'#ap-btn-map-continue',            title:'Continue → Pool & System',
      body:'When every pool is registered, click here to move on. Or click Skip Map Pools just above if you already know pool sizes.' }
  ],
  'pool-system': [
    { selector:'#ar2-form [data-f="propertyName"]', title:'Property Name (required)',
      body:'Auto-mirrors from Map Pools. Required to advance — trying to continue without one pops an instruction modal.' },
    { selector:'#ar2-form .ar-card',                title:'Pool dimensions',
      body:'Length × width × depth for each pool. Total volume auto-calculates.' },
    { selector:'#ar2-devices',                      title:'AquaRev Devices Required',
      body:'Pick the pipe size of each AquaRev device that will be installed on the return pipes.' },
    { selector:'#ar2-results',                      title:'Live results',
      body:'Numbers refresh as you type — sanity-check savings here before clicking Continue.' },
    { selector:'#ar2-nav [data-nav="next"]',        title:'Continue → Pricing',
      body:'When the numbers look right, advance to Step 3.' }
  ],
  'pricing': [
    { selector:'#ar2-form',                         title:'Discount + Savings Weight',
      body:'Apply a discount to the equipment subtotal. Savings Weight caps projected savings to a conservative % of the lab maximum (default 100%).' },
    { selector:'#ar2-results',                      title:'KPIs + Water Conservation',
      body:'The 5-Year Water Conservation card surfaces total water loss reduction in gallons. Below it, Monthly Savings Breakdown shows each category.' },
    { selector:'#ar2-nav [data-nav="next"]',        title:'Continue → Quote',
      body:'When the proposal numbers are dialed in, advance to build the formal Quote document.' }
  ],
  'quote': [
    { selector:'#ar2-form',                         title:'Document Type + Buyer',
      body:'Pick Quote / Purchase Order / Invoice and fill in the buyer block.' },
    { selector:'#ar2-devices',                      title:'Line Items + Terms',
      body:'Equipment auto-pulls from Step 2. Standard Terms = short legal on the Quote page. Purchase Terms & Conditions = long-form legal on its own page.' },
    { selector:'#ar2-results',                      title:'Quote preview',
      body:'Click Preview to see the exact PDF the customer will receive.' }
  ],
  'export': [
    { selector:'#ar2-devices',                      title:'Section toggles',
      body:'Pick which pages go into the final PDF. Cover, Pool Profiles, Exec Summary, Quote pages, Back Cover — toggle off any you don\'t want.' },
    { selector:'#ar2-form',                         title:'Property Images + Videos',
      body:'Upload up to 4 photos for the Pool Profiles page. Paste up to 4 YouTube URLs for the Exec Summary page.' },
    { selector:'[data-action="preview-report"]',    title:'Preview the PDF',
      body:'See the entire document in-browser before downloading.' },
    { selector:'[data-action="save-report"]',       title:'Save to Archive',
      body:'Download generates the print-ready PDF. Save / Save to Archive stores the assessment for later recall.' }
  ],
  'archive': [
    { selector:'#ar-bank-search',                   title:'Search records',
      body:'Filters across all single assessments and portfolios by name.' },
    { selector:'.ar-bank-card .ar-bank-prop',       title:'Type indicator + title click',
      body:'Teal icon + stripe = single assessment. Green icon + stripe = portfolio. Click the title to open: singles load into the calculator, portfolios open the Portfolio Overview.' },
    { selector:'.ar-bank-card .ar-bank-actions',    title:'Per-row actions',
      body:'Open · Duplicate · Copy to Portfolio (singles only) · Portrait/Landscape PDF · Reassign (admin) · Delete.' },
    { selector:'#ar-admin-dash',                    title:'Admin Dashboard',
      body:'Six KPI cards summarize Records · 7 Days, Assessments, Portfolios, Properties, Pools, and Value across the whole team. Deleted records excluded automatically.' }
  ],
  'portfolio-overview': [
    { selector:'.ar-pf-ov-hero',                    title:'Portfolio header',
      body:'Back button, portfolio name + status, plus the action group: Quote · Export → · Import CSV · + Add Property.' },
    { selector:'[data-pf-action="open-quote"]',     title:'Portfolio Quote',
      body:'Opens the Quote builder where you configure recipient, ship-tos, line items, adjustments, deposit, and terms once for the whole portfolio.' },
    { selector:'[data-pf-action="open-export"]',    title:'Export the portfolio',
      body:'Opens the Portfolio Export panel — section toggles for the final PDF + Preview / Download / Save to Archive actions.' },
    { selector:'[data-pf-action="import-csv"]',     title:'Bulk import properties',
      body:'Drop a CSV/Excel export of a hotel chain list — every row becomes a property in this portfolio. Click Download template inside the modal for the recognized format.' },
    { selector:'[data-pf-action="new-property"]',   title:'Add one property',
      body:'Adds a single property manually and drops you into property mode on Map Pools to fill it in.' }
  ],
  'portfolio-export': [
    { selector:'.ar-pf-exp-card',                   title:'Section toggles',
      body:'Pick which pages go into the portfolio PDF. Each toggle uses the same on/off slider as the single-property Export.' },
    { selector:'.ar-pf-exp-sub-row',                title:'Cards or List sub-options',
      body:'Property Profiles can render as Cards or as a List grouped by Country. Pool Profiles can render as Cards (per-property pages) or a single compact List.' },
    { selector:'[data-pf-action="open-quote"]',     title:'Unlock the Quote',
      body:'The Portfolio Quote section starts locked. Click Unlock & Configure → to open the Quote builder; return here with the section toggleable.' },
    { selector:'.ar-pf-exp-actions',                title:'Preview · Download · Archive',
      body:'Preview opens the full PDF in-browser. Download generates the print-ready PDF. Save to Archive stores the bundle for later.' }
  ],
  'quote-builder': [
    { selector:'.ar-pf-qb-wrap > .ar-pf-qb-card:nth-child(1)', title:'Section 1 · Recipient',
      body:'Buyer name, email, phone, bill-to address.' },
    { selector:'.ar-pf-qb-wrap > .ar-pf-qb-card:nth-child(2)', title:'Section 2 · Ship-To',
      body:'Split (one destination per property, auto-populated from property addresses) or Consolidated (single destination).' },
    { selector:'.ar-pf-qb-wrap > .ar-pf-qb-card:nth-child(3)', title:'Section 3 · Line Items',
      body:'SKUs auto-roll across all properties. Override qty or price per SKU. Expand Per-property breakdown to see attribution.' },
    { selector:'.ar-pf-qb-wrap > .ar-pf-qb-card:nth-child(4)', title:'Section 4 · Adjustments',
      body:'Portfolio discount %, tax rate, consolidated shipping cost + term.' },
    { selector:'.ar-pf-qb-wrap > .ar-pf-qb-card:nth-child(5)', title:'Section 5 · Deposit & Terms',
      body:'Deposit %, due date, balance due terms.' },
    { selector:'.ar-pf-qb-wrap > .ar-pf-qb-card:nth-child(6)', title:'Section 6 · Terms & Notes',
      body:'Standard Terms (short, prints on Quote page). Purchase Terms (long-form, prints on its own page). Notes (internal only).' },
    { selector:'[data-pf-action="quote-save-return"]', title:'Save & Return',
      body:'Writes to the portfolio quote table and drops you back at Export with the Quote section now toggleable on.' }
  ]
};

var tourState = { active:false, key:null, idx:0, steps:[], resizeBound:false };

function tourKeyForCurrentView(){
  return helpKeyForCurrentView();
}

function startTour(key){
  endTour(); // clean any prior tour
  var steps = TOUR_STEPS[key];
  if (!steps || !steps.length) return;
  tourState.active = true;
  tourState.key = key;
  tourState.idx = 0;
  tourState.steps = steps;
  // Build overlay (4 mask bands + spotlight ring + coach card)
  var frag = document.createElement('div');
  frag.id = 'ar2-tour-root';
  frag.innerHTML =
      '<div class="ar2-tour-mask" id="ar2-tour-top"></div>'
    + '<div class="ar2-tour-mask" id="ar2-tour-right"></div>'
    + '<div class="ar2-tour-mask" id="ar2-tour-bottom"></div>'
    + '<div class="ar2-tour-mask" id="ar2-tour-left"></div>'
    + '<div class="ar2-tour-ring" id="ar2-tour-ring"></div>'
    + '<div class="ar2-tour-card" id="ar2-tour-card" role="dialog" aria-live="polite"></div>';
  document.body.appendChild(frag);
  if (!tourState.resizeBound){
    window.addEventListener('resize', _tourReposition);
    window.addEventListener('scroll', _tourReposition, true);
    tourState.resizeBound = true;
  }
  _tourShowStep();
}
function endTour(){
  tourState.active = false;
  var root = document.getElementById('ar2-tour-root');
  if (root && root.parentNode) root.parentNode.removeChild(root);
}
function _tourShowStep(){
  if (!tourState.active) return;
  // Find a step with an existing target — skip steps whose target isn't in the DOM.
  var step = tourState.steps[tourState.idx];
  var target = step ? document.querySelector(step.selector) : null;
  var skips = 0;
  while (!target && tourState.idx < tourState.steps.length - 1 && skips < tourState.steps.length){
    tourState.idx++;
    step = tourState.steps[tourState.idx];
    target = step ? document.querySelector(step.selector) : null;
    skips++;
  }
  if (!target){ endTour(); return; }
  // Scroll target into view if needed
  var rect = target.getBoundingClientRect();
  if (rect.top < 80 || rect.bottom > window.innerHeight - 80){
    target.scrollIntoView({ behavior:'smooth', block:'center' });
    setTimeout(_tourReposition, 350);
  }
  _tourReposition();
  // Card content
  var card = document.getElementById('ar2-tour-card');
  if (!card) return;
  var total = tourState.steps.length;
  var i = tourState.idx + 1;
  var isLast = tourState.idx === total - 1;
  card.innerHTML =
      '<div class="ar2-tour-card-progress">Step ' + i + ' of ' + total + '</div>'
    + '<div class="ar2-tour-card-title">' + esc(step.title) + '</div>'
    + '<div class="ar2-tour-card-body">' + step.body + '</div>'
    + '<div class="ar2-tour-card-actions">'
    +   '<button class="ar2-tour-btn ghost" data-tour-action="skip" type="button">Skip tour</button>'
    +   '<div style="flex:1"></div>'
    +   (tourState.idx>0 ? '<button class="ar2-tour-btn" data-tour-action="prev" type="button">← Back</button>' : '')
    +   '<button class="ar2-tour-btn primary" data-tour-action="next" type="button">' + (isLast?'Finish':'Next →') + '</button>'
    + '</div>';
}
function _tourReposition(){
  if (!tourState.active) return;
  var step = tourState.steps[tourState.idx];
  var target = step ? document.querySelector(step.selector) : null;
  if (!target) return;
  var rect = target.getBoundingClientRect();
  var pad = 6;
  var top    = Math.max(0, rect.top - pad);
  var left   = Math.max(0, rect.left - pad);
  var right  = Math.min(window.innerWidth,  rect.right + pad);
  var bottom = Math.min(window.innerHeight, rect.bottom + pad);
  function set(id, css){ var el = document.getElementById(id); if (el) el.style.cssText = css; }
  // 4 mask bands form the dim backdrop with a rectangular hole
  set('ar2-tour-top',    'top:0;left:0;right:0;height:' + top + 'px;');
  set('ar2-tour-bottom', 'top:' + bottom + 'px;left:0;right:0;bottom:0;');
  set('ar2-tour-left',   'top:' + top + 'px;left:0;width:' + left + 'px;height:' + (bottom-top) + 'px;');
  set('ar2-tour-right',  'top:' + top + 'px;left:' + right + 'px;right:0;height:' + (bottom-top) + 'px;');
  // Spotlight ring sits exactly over the target
  set('ar2-tour-ring',   'top:' + top + 'px;left:' + left + 'px;width:' + (right-left) + 'px;height:' + (bottom-top) + 'px;');
  // Coach card — place below the target if there's room, else above. Width 340.
  var card = document.getElementById('ar2-tour-card');
  if (card){
    var cardW = 340;
    var cardH = card.getBoundingClientRect().height || 200;
    var spaceBelow = window.innerHeight - bottom;
    var spaceAbove = top;
    var cardTop  = (spaceBelow > cardH + 24) ? (bottom + 14) :
                   (spaceAbove > cardH + 24) ? (top - cardH - 14) :
                   Math.max(24, (window.innerHeight - cardH) / 2);
    var midX = (left + right) / 2;
    var cardLeft = Math.max(24, Math.min(window.innerWidth - cardW - 24, midX - cardW/2));
    card.style.cssText = 'top:' + cardTop + 'px;left:' + cardLeft + 'px;width:' + cardW + 'px;';
  }
}
function tourNext(){
  if (!tourState.active) return;
  if (tourState.idx >= tourState.steps.length - 1){ endTour(); return; }
  tourState.idx++; _tourShowStep();
}
function tourPrev(){
  if (!tourState.active) return;
  if (tourState.idx <= 0) return;
  tourState.idx--; _tourShowStep();
}
// Global click handler — handles tour controls + Escape key
document.addEventListener('click', function(e){
  var t = e.target.closest && e.target.closest('[data-tour-action]');
  if (!t) return;
  var act = t.getAttribute('data-tour-action');
  if (act === 'next') tourNext();
  else if (act === 'prev') tourPrev();
  else if (act === 'skip') endTour();
}, true);
document.addEventListener('keydown', function(e){
  if (!tourState.active) return;
  if (e.key === 'Escape') endTour();
  else if (e.key === 'ArrowRight') tourNext();
  else if (e.key === 'ArrowLeft') tourPrev();
});

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
    +(TOUR_STEPS[key]?'<div style="margin-top:18px;padding-top:14px;border-top:1px solid rgba(0,180,216,.18);display:flex;justify-content:center"><button id="ar2-help-start-tour" style="background:linear-gradient(135deg,#00b4d8,#48cae4);color:#040f1e;border:none;border-radius:8px;padding:10px 22px;font-family:inherit;font-size:13px;font-weight:700;letter-spacing:.5px;cursor:pointer">▶ Start interactive tutorial</button></div>':'')
    +'<div style="margin-top:14px;font-size:10.5px;color:#7db8cc;text-align:center">Need more help? Call <b style="color:#cfe2eb">(832) 979-6758</b></div>'
  +'</div>';
  document.body.appendChild(m);
  function close(){ if(m.parentNode) m.parentNode.removeChild(m); document.removeEventListener('keydown', onKey); }
  function onKey(e){ if(e.key==='Escape') close(); }
  document.getElementById('ar2-help-close').onclick=close;
  m.addEventListener('click', function(e){ if(e.target===m) close(); });
  var startBtn = document.getElementById('ar2-help-start-tour');
  if (startBtn) startBtn.onclick = function(){ close(); startTour(key); };
  document.addEventListener('keydown', onKey);
}

/* Inject the Help button beside New on every page load. Done in JS so the
   live Webflow embed picks it up without a re-paste. Renders as a small
   `?` icon circle (matches the user chip styling) and sits to the right
   of the New button. Reading order in the top bar:
     Archive · New · Help · UserChip */
function injectHelpButton(){
  if(document.getElementById('ar2-help-btn')) return;
  var actions = document.getElementById('ar2-bar-actions');
  if(!actions) return;
  var helpBtn = document.createElement('button');
  helpBtn.id = 'ar2-help-btn';
  helpBtn.className = 'ar-help-icon no-print';
  helpBtn.dataset.action = 'show-help';
  helpBtn.title = 'How to use this page';
  helpBtn.setAttribute('aria-label','Help');
  helpBtn.textContent = '?';
  // Place AFTER the New button. updateUserChip appends the chip later, so
  // the final reading order is: Archive · New · Help · UserChip.
  actions.appendChild(helpBtn);
}

/* User chip in the top bar — small avatar + name beside the New button.
   Click opens a Sign Out menu. Auto-rebuilds on every render so it
   reflects the current cloud user state (incl. immediately after login). */
function updateUserChip(){
  var actions = document.getElementById('ar2-bar-actions');
  if(!actions) return;
  var existing = document.getElementById('ar2-user-chip');
  var u = (window.AR2_CLOUD && AR2_CLOUD.isReady()) ? AR2_CLOUD.user() : null;
  // No signed-in cloud user → remove the chip if it exists.
  if(!u){ if(existing && existing.parentNode) existing.parentNode.removeChild(existing); return; }
  var initial = (u.name || '?').trim().charAt(0).toUpperCase();
  var role = u.role || 'user';
  if(existing){
    // Update in place if the user changed (rare — usually login/logout reload).
    existing.className = 'ar-user-chip ar-user-chip-icononly no-print role-' + role;
    existing.querySelector('.ar-user-chip-avatar').textContent = initial;
    existing.title = 'Signed in as ' + (u.name || 'User') + ' · Click to sign out';
    existing.dataset.uid = u.id;
    return;
  }
  var chip = document.createElement('button');
  chip.id = 'ar2-user-chip';
  // Icon-only chip. The user's name is surfaced in the dropdown menu instead
  // of in the chip itself per UX request — keeps the header clean even when
  // the client name takes up most of the brand area.
  chip.className = 'ar-user-chip ar-user-chip-icononly no-print role-' + role;
  chip.dataset.action = 'user-menu';
  chip.title = 'Signed in as ' + (u.name || 'User') + ' · Click to sign out';
  chip.innerHTML = '<span class="ar-user-chip-avatar">'+esc(initial)+'</span>';
  // Place AFTER the New button so reading order is: Help · Archive · New · UserChip
  actions.appendChild(chip);
}

/* Pop a small menu under the chip with full name, role, and Sign Out button. */
function showUserMenu(anchorEl){
  var existing = document.querySelector('.ar-user-menu');
  if(existing && existing.parentNode){ existing.parentNode.removeChild(existing); return; }
  var u = (window.AR2_CLOUD && AR2_CLOUD.isReady()) ? AR2_CLOUD.user() : null;
  if(!u) return;
  var rect = anchorEl.getBoundingClientRect();
  var role = u.role || 'user';
  var menu = document.createElement('div');
  menu.className = 'ar-user-menu';
  // Position below the chip, right-aligned to it
  menu.style.top = (rect.bottom + 8) + 'px';
  menu.style.right = (window.innerWidth - rect.right) + 'px';
  menu.innerHTML =
    '<div class="ar-user-menu-name">'+esc(u.name)+'</div>'
   +'<div class="ar-user-menu-role role-'+role+'">'+esc(role)+(u.email && u.email.indexOf('@aquarev.local') < 0 ? ' · '+esc(u.email) : '')+'</div>'
   +'<div class="ar-user-menu-divider"></div>'
   +'<button id="ar2-user-signout" class="ar-user-menu-btn">Sign Out</button>';
  document.body.appendChild(menu);
  // Close on outside click (defer one tick so the click that opened it doesn't immediately close it).
  setTimeout(function(){
    function onDoc(e){
      if(menu.contains(e.target)) return;
      if(anchorEl.contains(e.target)) return;
      if(menu.parentNode) menu.parentNode.removeChild(menu);
      document.removeEventListener('click', onDoc);
    }
    document.addEventListener('click', onDoc);
  }, 0);
  // Sign Out → clear cloud session + reload (gate appears on next load).
  document.getElementById('ar2-user-signout').onclick = function(){
    if(menu.parentNode) menu.parentNode.removeChild(menu);
    try { AR2_CLOUD.signOut(); } catch(_){}
    // Hard reload so init() runs fresh and shows the gate.
    setTimeout(function(){ window.location.reload(); }, 80);
  };
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
    // Cloud mode: ALWAYS show the gate on every page load. No silent
    // auto-restore. Each Unlock click is the explicit auth event we count
    // as a real login. The remembered access code (if any) pre-fills the
    // input so the user just clicks Unlock instead of retyping.
    try { localStorage.removeItem(CALC_REMEMBER_KEY); } catch(_){}
    CALC_UNLOCKED = false;
    showCalcPasswordModal(function(){ try { render(); } catch(_){} });
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
