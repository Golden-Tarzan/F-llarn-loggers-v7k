// FÄLLARN SIMULATOR — statisk data (utrustning + nivåer). Laddas före huvudappen.
// ══════════════════════════════════════════
// EQUIPMENT DATA with SVG visuals — professional shaded mini-illustrations
let _eg=0;
function egrad(stops,x1,y1,x2,y2){const id='eg'+(_eg++);return{id,def:`<linearGradient id="${id}" x1="${x1??0}" y1="${y1??0}" x2="${x2??0}" y2="${y2??1}">${stops.map(([o,c])=>`<stop offset="${o}" stop-color="${c}"/>`).join('')}</linearGradient>`};}
function rgrad(stops,cx,cy,r){const id='eg'+(_eg++);return{id,def:`<radialGradient id="${id}" cx="${cx??0.35}" cy="${cy??0.32}" r="${r??0.85}">${stops.map(([o,c])=>`<stop offset="${o}" stop-color="${c}"/>`).join('')}</radialGradient>`};}
function ei(defs,inner,label,lc){return `<svg class="ei-svg" viewBox="0 0 120 52" xmlns="http://www.w3.org/2000/svg"><defs>${defs}</defs><ellipse cx="60" cy="44" rx="42" ry="3" fill="rgba(0,0,0,.25)"/>${inner}${label?`<text x="60" y="50" font-size="6.2" fill="${lc||'#c8c0a8'}" text-anchor="middle" font-family="sans-serif" font-weight="bold">${label}</text>`:''}</svg>`;}

function svgSaw(bodyColor, accentColor, barLen, brand){
  const b=egrad([[0,'#ffffff22'],[0.15,bodyColor],[1,'#00000055']]);
  const m=egrad([[0,'#e8e8ee'],[.5,'#b8b8c0'],[1,'#82828a']]);
  const teeth=Array.from({length:Math.floor(barLen/6)},(_,i)=>`<path d="M${52+i*6} 22 l3 0 l-1.5 -3 z M${52+i*6} 30 l3 0 l-1.5 3 z" fill="#222"/>`).join('');
  return ei(b.def+m.def,`
    <rect x="48" y="22" width="${barLen}" height="8" rx="3" fill="url(#${m.id})" stroke="#26241f" stroke-width="1.2"/>
    <line x1="52" y1="26" x2="${44+barLen}" y2="26" stroke="#6d6d74" stroke-width="1"/>
    <circle cx="${45+barLen}" cy="26" r="1.6" fill="#16140f"/>${teeth}
    <path d="M6 18 Q6 13 12 13 L20 13 L23 16 L40 17 Q48 18 48 24 L48 34 Q48 39 42 39 L12 39 Q6 39 6 34 Z" fill="url(#${b.id})" stroke="#16140f" stroke-width="1.4"/>
    <path d="M8 16 Q20 12 40 17" stroke="rgba(255,255,255,.45)" stroke-width="1.6" fill="none"/>
    <circle cx="44" cy="31" r="5.5" fill="url(#${m.id})" stroke="#16140f" stroke-width="1.1"/><circle cx="44" cy="31" r="2.6" fill="none" stroke="#7c7a72" stroke-width=".8"/>
    <rect x="14" y="14.5" width="12" height="6" rx="1.5" fill="rgba(0,0,0,.22)" stroke="#16140f" stroke-width=".7"/>
    <path d="M16 15 v5 M19 15 v5 M22 15 v5" stroke="rgba(255,255,255,.4)" stroke-width=".7"/>
    <path d="M10 13 Q14 3 30 4 Q38 4.5 40 11" stroke="#141414" stroke-width="3.4" fill="none" stroke-linecap="round"/>
    <path d="M10 13 Q14 3 30 4 Q38 4.5 40 11" stroke="#4a4a4a" stroke-width="1.4" fill="none" stroke-linecap="round"/>
    <path d="M6 20 Q1 24 2 31 Q3 37 8 38" stroke="#141414" stroke-width="3.2" fill="none" stroke-linecap="round"/>
    <path d="M6 20 Q1 24 2 31 Q3 37 8 38" stroke="#4a4a4a" stroke-width="1.3" fill="none" stroke-linecap="round"/>
    <path d="M36 9 Q40 13 38 18" stroke="#2c2c2c" stroke-width="2.6" fill="none" stroke-linecap="round"/>
    <circle cx="30" cy="22" r="2" fill="#fff" opacity=".55"/>
  `,brand,accentColor);
}
function svgBar(len,label){
  const m=egrad([[0,'#eeeef2'],[.5,'#bfbfc7'],[1,'#84848c']]);
  const teeth=Array.from({length:Math.floor(len/6)},(_,i)=>`<path d="M${12+i*6} 20.5 l3 0 l-1.5 -3 z M${12+i*6} 31.5 l3 0 l-1.5 3 z" fill="#222"/>`).join('');
  return ei(m.def,`
    <rect x="8" y="21" width="${len}" height="10" rx="4" fill="url(#${m.id})" stroke="#26241f" stroke-width="1.3"/>
    <line x1="14" y1="26" x2="${len}" y2="26" stroke="#6d6d74" stroke-width="1"/>
    <circle cx="${len+4}" cy="26" r="2" fill="#16140f"/>
    <rect x="9" y="24" width="7" height="4" rx="1.5" fill="#3a3a40"/>
    <circle cx="20" cy="26" r="1.4" fill="#3a3a40"/><circle cx="27" cy="26" r="1.4" fill="#3a3a40"/>
    ${teeth}
    <path d="M10 22 L${len} 22" stroke="rgba(255,255,255,.55)" stroke-width="1"/>
  `,label,'#aab');
}
function svgAxe(size){
  const w=egrad([[0,'#9a6a30'],[.5,'#7a5020'],[1,'#5a3a14']],0,0,1,0);
  const s=egrad([[0,'#cfd6dd'],[.45,'#8f9aa6'],[1,'#5d6873']]);
  const extra=size===3?`<rect x="4" y="33" width="20" height="9" rx="2" fill="#4a5a6a" stroke="#26241f" stroke-width=".9"/><path d="M6 35 h16" stroke="rgba(255,255,255,.3)" stroke-width=".8"/><text x="14" y="40.5" font-size="4.6" fill="#dde" text-anchor="middle">KOFOT</text>`:'';
  return ei(w.def+s.def,`
    <line x1="26" y1="44" x2="88" y2="8" stroke="url(#${w.id})" stroke-width="${size===1?4:5}" stroke-linecap="round"/>
    <path d="M30 41 L84 10 M32 43 L86 12" stroke="rgba(0,0,0,.18)" stroke-width=".7"/>
    <polygon points="78,3 104,16 93,31 66,17" fill="url(#${s.id})" stroke="#26241f" stroke-width="1.3"/>
    <polygon points="95,25 110,33 102,43 87,34" fill="#5d6873" stroke="#26241f" stroke-width="1"/>
    <path d="M104 17 L96 28" stroke="#fff" stroke-width="1.4" opacity=".6"/>
    <path d="M80 6 L98 15" stroke="rgba(255,255,255,.5)" stroke-width="1.2"/>
    ${extra}
  `,'');
}
function svgWedge(fill){
  const top=egrad([[0,'#ffffff'],[1,fill]]);
  const side=egrad([[0,fill],[1,'#00000066']]);
  return ei(top.def+side.def,`
    <polygon points="14,40 104,28 110,32 20,45" fill="url(#${top.id})" stroke="#26241f" stroke-width="1.1"/>
    <polygon points="20,45 110,32 110,40 20,50" fill="url(#${side.id})" stroke="#26241f" stroke-width="1.1"/>
    <path d="M30 38.6 L33 43.8 M46 36.5 L49 42 M62 34.4 L65 40 M78 32.3 L81 38 M94 30.2 L97 36" stroke="rgba(0,0,0,.35)" stroke-width="1"/>
    <path d="M16 39.6 L102 28.4" stroke="rgba(255,255,255,.6)" stroke-width="1"/>
  `,'');
}
function svgKofot(label,w){
  const s=egrad([[0,'#cfd6dd'],[.5,'#8f9aa6'],[1,'#5d6873']]);
  return ei(s.def,`
    <rect x="14" y="23" width="${w}" height="7" rx="3" fill="url(#${s.id})" stroke="#26241f" stroke-width="1.2"/>
    <path d="M16 24.5 L${10+w} 24.5" stroke="rgba(255,255,255,.6)" stroke-width="1"/>
    <path d="M14 26 Q4 24 5 17 L10 16 Q9 22 16 23.4 Z" fill="url(#${s.id})" stroke="#26241f" stroke-width="1.1"/>
    <path d="M${14+w} 23 q6 1.5 5 7 l-5 .5 q1 -4 -3 -4.6 Z" fill="#5d6873" stroke="#26241f" stroke-width="1"/>
  `,label,'#aab');
}
function svgHelmet(domeColor,label){
  const d=rgrad([[0,'#ffffff'],[.3,domeColor],[1,'#00000088']]);
  const c=rgrad([[0,'#5a5a64'],[.5,'#303038'],[1,'#16161c']]);
  return ei(d.def+c.def,`
    <ellipse cx="29" cy="27" rx="7" ry="11" fill="url(#${c.id})" stroke="#101014" stroke-width="1"/>
    <ellipse cx="91" cy="27" rx="7" ry="11" fill="url(#${c.id})" stroke="#101014" stroke-width="1"/>
    <ellipse cx="27.5" cy="25" rx="2.5" ry="4" fill="rgba(255,255,255,.18)"/>
    <path d="M30 19 Q60 10 90 19" stroke="#404048" stroke-width="2.2" fill="none"/>
    <path d="M34 25 Q34 8 60 8 Q86 8 86 25 L84 29 L36 29 Z" fill="url(#${d.id})" stroke="#16140f" stroke-width="1.4"/>
    <path d="M41 13 Q51 8.5 62 10.5" stroke="rgba(255,255,255,.55)" stroke-width="2" fill="none"/>
    <path d="M48 14 L54 14 M60 12 L66 12 M72 14 L78 14" stroke="#1a1008" stroke-width="1.1"/>
    <path d="M32 27 Q32 39 40 41 L80 41 Q88 39 88 27 L86 27 Q86 37 78 37 L42 37 Q34 37 34 27 Z" fill="rgba(160,200,185,.28)" stroke="#2c2c30" stroke-width="1"/>
    <path d="M36 31 L84 31 M36 34.5 L84 34.5 M44 28 V37 M56 28 V38 M68 28 V38 M78 28 V37" stroke="rgba(60,60,60,.35)" stroke-width=".4"/>
  `,label,domeColor);
}
function svgGloves(fillColor,label){
  const g=egrad([[0,'#ffffff33'],[.2,fillColor],[1,'#00000055']]);
  const one=(tx,fl)=>`<g transform="translate(${tx} 26) ${fl?'scale(-1 1)':''}">
    <rect x="-12" y="-4" width="18" height="14" rx="3.5" fill="url(#${g.id})" stroke="#16100a" stroke-width="1"/>
    <rect x="-10" y="-14" width="4" height="10.5" rx="2" fill="url(#${g.id})" stroke="#16100a" stroke-width=".8"/>
    <rect x="-5" y="-16" width="4" height="12.5" rx="2" fill="url(#${g.id})" stroke="#16100a" stroke-width=".8"/>
    <rect x="0" y="-15" width="4" height="11.5" rx="2" fill="url(#${g.id})" stroke="#16100a" stroke-width=".8"/>
    <ellipse cx="-14" cy="2" rx="3" ry="5" fill="url(#${g.id})" stroke="#16100a" stroke-width=".8" transform="rotate(-25 -14 2)"/>
    <path d="M-10 -2 h14 M-10 1 h14" stroke="rgba(0,0,0,.25)" stroke-width=".6"/>
    <rect x="-12" y="7" width="18" height="4.5" rx="1.5" fill="rgba(0,0,0,.35)"/>
    <path d="M-11 -3 q4 -2 8 0" stroke="rgba(255,255,255,.4)" stroke-width=".8" fill="none"/>
  </g>`;
  return ei(g.def,one(32)+one(88,true),label,fillColor);
}
function svgPants(type){
  if(type==='vanliga'){
    const g=egrad([[0,'#7a8088'],[1,'#454a52']]);
    return ei(g.def,`
      <path d="M44 6 L76 6 L78 38 L64 38 L60 18 L56 38 L42 38 Z" fill="url(#${g.id})" stroke="#1c1c20" stroke-width="1.3"/>
      <path d="M44 11 h32" stroke="rgba(0,0,0,.3)" stroke-width="1"/>
      <path d="M46 7 L48 36 M74 7 L72 36" stroke="rgba(255,255,255,.18)" stroke-width="1"/>
    `,'INGET SÅGSKYDD','#c08070');
  }
  if(type==='chaps'){
    const g=egrad([[0,'#5a8038'],[1,'#2c4418']]);
    const o=egrad([[0,'#f5a623'],[1,'#b06a10']]);
    const leg=(tx)=>`<g transform="translate(${tx} 0)">
      <path d="M0 8 L16 8 L18 40 L2 40 Z" fill="url(#${g.id})" stroke="#16200c" stroke-width="1.2"/>
      <path d="M3 9 L5 39" stroke="url(#${o.id})" stroke-width="4"/>
      <path d="M16 14 q6 1 6 4 M16 26 q6 1 6 4" stroke="#2a2a2e" stroke-width="2" fill="none"/>
      <rect x="20" y="16" width="4" height="3" rx="1" fill="#888" stroke="#222" stroke-width=".6"/>
      <rect x="20" y="28" width="4" height="3" rx="1" fill="#888" stroke="#222" stroke-width=".6"/>
      <path d="M1 8.8 h14" stroke="rgba(255,255,255,.35)" stroke-width="1"/>
    </g>`;
    return ei(g.def+o.def,leg(30)+leg(64),'SPÄNNS UTANPÅ','#9c6');
  }
  const g=egrad([[0,'#56803a'],[1,'#283f16']]);
  const o=egrad([[0,'#f5a623'],[1,'#c87410']]);
  return ei(g.def+o.def,`
    <path d="M42 6 L78 6 L82 40 L66 40 L60 16 L54 40 L38 40 Z" fill="url(#${g.id})" stroke="#16200c" stroke-width="1.3"/>
    <path d="M44 7 L52 38 L56 38 L49 7 Z M76 7 L68 38 L64 38 L71 7 Z" fill="url(#${o.id})" opacity=".95"/>
    <path d="M42 11 h36" stroke="rgba(0,0,0,.35)" stroke-width="1.4"/>
    <rect x="56" y="7" width="8" height="3" rx="1" fill="#1c1c20"/>
    <path d="M40 33 L52 33 M68 33 L80 33" stroke="#d8d8d8" stroke-width="2"/>
    <path d="M43 7 L46 9" stroke="rgba(255,255,255,.4)" stroke-width="1"/>
  `,'SÅGSKYDD FRAM','#9c6');
}
function svgBoot(type){
  if(type==='vanlig'){
    const g=egrad([[0,'#8a8f96'],[1,'#4c5158']]);
    return ei(g.def,`
      <path d="M30 26 L30 36 Q30 40 36 40 L86 40 Q92 40 90 34 L78 28 L70 27 Q60 24 56 26 Z" fill="url(#${g.id})" stroke="#1c1c20" stroke-width="1.2"/>
      <rect x="30" y="39" width="60" height="3.5" rx="1.6" fill="#26262a"/>
      <path d="M56 27 L64 28 M58 30 L66 31" stroke="#2c2c30" stroke-width="1"/>
    `,'INGET SÅGSKYDD','#c08070');
  }
  if(type==='stovel'){
    const g=egrad([[0,'#3f6a35'],[1,'#1c3416']]);
    return ei(g.def,`
      <path d="M40 6 L62 6 L62 26 L80 30 Q90 33 88 38 Q87 41 80 41 L40 41 Z" fill="url(#${g.id})" stroke="#101c0c" stroke-width="1.3"/>
      <rect x="38" y="40" width="52" height="3.5" rx="1.6" fill="#26262a"/>
      <path d="M40 12 h22 M40 9 h22" stroke="rgba(255,255,255,.25)" stroke-width="1"/>
      <path d="M64 28 Q74 30 80 33" stroke="rgba(245,166,35,.85)" stroke-width="2.4" fill="none"/>
      <path d="M42 7 L42 39" stroke="rgba(255,255,255,.2)" stroke-width="1.4"/>
    `,'SÅGSKYDD + TÅHÄTTA','#9c6');
  }
  const g=egrad([[0,'#8a5a2a'],[1,'#4a2c10']]);
  return ei(g.def,`
    <path d="M36 10 L56 10 L58 24 L78 28 Q90 31 88 37 Q87 41 80 41 L36 41 Z" fill="url(#${g.id})" stroke="#1c1006 " stroke-width="1.3"/>
    <rect x="34" y="40" width="56" height="3.5" rx="1.6" fill="#26262a"/>
    <path d="M40 13 L54 13 M41 17 L55 17 M42 21 L56 21" stroke="#1c1006" stroke-width="1"/>
    <circle cx="40" cy="13" r="1" fill="#e8c98e"/><circle cx="54" cy="13" r="1" fill="#e8c98e"/><circle cx="41" cy="17" r="1" fill="#e8c98e"/><circle cx="55" cy="17" r="1" fill="#e8c98e"/>
    <path d="M70 28 Q82 30 86 35" stroke="rgba(200,205,215,.9)" stroke-width="2.6" fill="none"/>
    <path d="M61 26 Q72 28 80 31" stroke="rgba(245,166,35,.8)" stroke-width="2" fill="none"/>
    <path d="M38 11 L39 39" stroke="rgba(255,255,255,.25)" stroke-width="1.4"/>
  `,'SÅGSKYDD + TÅHÄTTA','#9c6');
}
function svgVis(type){
  if(type==='vanlig'){
    const g=egrad([[0,'#70757c'],[1,'#3c4046']]);
    return ei(g.def,`
      <path d="M44 10 L52 6 L68 6 L76 10 L82 20 L74 23 L74 40 L46 40 L46 23 L38 20 Z" fill="url(#${g.id})" stroke="#1c1c20" stroke-width="1.2"/>
      <path d="M60 7 L60 40" stroke="#26262a" stroke-width="1.2"/>
    `,'INGET VARSEL','#c08070');
  }
  if(type==='vast'){
    const g=egrad([[0,'#ffc830'],[1,'#e08a00']]);
    return ei(g.def,`
      <path d="M46 8 L54 5 L60 9 L66 5 L74 8 L78 18 L72 20 L72 40 L48 40 L48 20 L42 18 Z" fill="url(#${g.id})" stroke="#5a3c00" stroke-width="1.2"/>
      <path d="M49 26 h22 M49 32 h22" stroke="#d8d8dc" stroke-width="3"/>
      <path d="M52 7 L52 40 M68 7 L68 40" stroke="#d8d8dc" stroke-width="3"/>
      <path d="M60 9 L60 40" stroke="rgba(90,60,0,.5)" stroke-width="1"/>
    `,'EN ISO 20471','#fb3');
  }
  const g=egrad([[0,'#ff9420'],[1,'#d05a00']]);
  return ei(g.def,`
    <path d="M42 10 L52 5 L60 9 L68 5 L78 10 L84 22 L76 25 L76 40 L44 40 L44 25 L36 22 Z" fill="url(#${g.id})" stroke="#5a2800" stroke-width="1.2"/>
    <path d="M44 9 L40 22 M76 9 L80 22" stroke="rgba(90,40,0,.45)" stroke-width="1"/>
    <path d="M46 28 h28 M46 34 h28" stroke="#d8d8dc" stroke-width="3"/>
    <path d="M53 6.5 L53 40 M67 6.5 L67 40" stroke="#d8d8dc" stroke-width="3"/>
    <path d="M60 9 L60 40" stroke="rgba(90,40,0,.5)" stroke-width="1.2"/>
    <path d="M44 12 q8 -4 16 -3" stroke="rgba(255,255,255,.45)" stroke-width="1.4" fill="none"/>
  `,'EN ISO 20471','#fb3');
}
function svgSikt(){
  const m=egrad([[0,'#e85a2a'],[1,'#90300e']]);
  return ei(m.def,`
    <rect x="14" y="22" width="92" height="7" rx="2.5" fill="url(#${m.id})" stroke="#3c1404" stroke-width="1.1"/>
    <path d="M16 23.5 h88" stroke="rgba(255,255,255,.4)" stroke-width="1"/>
    <path d="M26 22 v-7 M26 15 l4 3 -4 3" stroke="#e8e8e8" stroke-width="1.6" fill="none"/>
    <path d="M94 22 v-7 M94 15 l-4 3 4 3" stroke="#e8e8e8" stroke-width="1.6" fill="none"/>
    <rect x="56" y="18" width="8" height="4" fill="#2c2c30"/><path d="M60 18 v-5" stroke="#2c2c30" stroke-width="1.4"/>
    <path d="M20 29 v4 M40 29 v4 M60 29 v4 M80 29 v4 M100 29 v4" stroke="#3c1404" stroke-width="1"/>
  `,'SIKTA FÄLLRIKTNING','#e96');
}
function svgMatt(){
  const c=rgrad([[0,'#ffe060'],[.4,'#e8a818'],[1,'#7c5404']]);
  return ei(c.def,`
    <circle cx="38" cy="24" r="14" fill="url(#${c.id})" stroke="#3c2800" stroke-width="1.3"/>
    <circle cx="38" cy="24" r="5" fill="#2c2c30"/><circle cx="38" cy="24" r="2" fill="#888"/>
    <rect x="50" y="21" width="54" height="7" fill="#f5f0d8" stroke="#3c2800" stroke-width="1"/>
    <path d="M56 21 v3 M62 21 v4.5 M68 21 v3 M74 21 v4.5 M80 21 v3 M86 21 v4.5 M92 21 v3 M98 21 v4.5" stroke="#3c2800" stroke-width=".9"/>
    <rect x="102" y="19" width="4" height="11" rx="1" fill="#888" stroke="#3c2800" stroke-width=".8"/>
    <path d="M30 15 q6 -4 13 -2" stroke="rgba(255,255,255,.6)" stroke-width="1.6" fill="none"/>
  `,'MÄT DBH & SNITT','#fc6');
}
function svgSprej(){
  const b=egrad([[0,'#ffb650'],[.5,'#f08018'],[1,'#a04c00']],0,0,1,0);
  return ei(b.def,`
    <rect x="50" y="14" width="20" height="28" rx="3" fill="url(#${b.id})" stroke="#3c1c00" stroke-width="1.2"/>
    <rect x="53" y="9" width="14" height="6" rx="2" fill="#cfd4da" stroke="#3c3c40" stroke-width="1"/>
    <rect x="57" y="5" width="6" height="5" rx="1.4" fill="#e84818" stroke="#3c1c00" stroke-width=".9"/>
    <path d="M64 6 q6 -2 10 1 M65 8 q5 0 8 2" stroke="rgba(255,160,60,.9)" stroke-width="1.4" fill="none"/>
    <circle cx="78" cy="5" r="1.1" fill="#ffa040"/><circle cx="82" cy="8" r="1" fill="#ffa040"/><circle cx="79" cy="11" r=".9" fill="#ffa040"/>
    <rect x="52" y="22" width="16" height="12" rx="2" fill="rgba(255,255,255,.85)"/>
    <path d="M55 26 h10 M55 29 h10" stroke="#a04c00" stroke-width="1.4"/>
    <path d="M52.5 15 L52.5 41" stroke="rgba(255,255,255,.5)" stroke-width="1.4"/>
  `,'MÄRKSPRAY','#fa6');
}
function svgVinsch(){
  const d=egrad([[0,'#9aa2ac'],[.5,'#646d78'],[1,'#3a414a']]);
  return ei(d.def,`
    <rect x="30" y="16" width="40" height="20" rx="4" fill="url(#${d.id})" stroke="#1c2026" stroke-width="1.3"/>
    <circle cx="50" cy="26" r="8" fill="#2c3038" stroke="#14161c" stroke-width="1"/>
    <path d="M50 26 m-6 0 a6 6 0 1 0 12 0 a6 6 0 1 0 -12 0 M50 26 m-3.5 0 a3.5 3.5 0 1 0 7 0 a3.5 3.5 0 1 0 -7 0" stroke="#8a929c" stroke-width="1" fill="none"/>
    <path d="M70 22 Q86 20 96 26 L102 24" stroke="#c8ccd4" stroke-width="1.6" fill="none"/>
    <path d="M102 22 q5 2 3 6 q-2 3 -5 1" stroke="#c8ccd4" stroke-width="1.8" fill="none"/>
    <path d="M30 20 L18 14 M30 32 L18 38" stroke="#3a414a" stroke-width="2.6"/>
    <path d="M32 17.5 h36" stroke="rgba(255,255,255,.4)" stroke-width="1.2"/>
    <rect x="36" y="38" width="28" height="3" rx="1.4" fill="#26262a"/>
  `,'1.6 TON · WIRE','#aab');
}
function svgRep(col){
  const r=egrad([[0,col],[1,'#00000066']]);
  return ei(r.def,`
    <ellipse cx="55" cy="25" rx="26" ry="15" fill="none" stroke="url(#${r.id})" stroke-width="5"/>
    <ellipse cx="55" cy="25" rx="17" ry="9" fill="none" stroke="url(#${r.id})" stroke-width="4.4"/>
    <path d="M30 25 q-3 9 4 13 M80 24 q4 8 -2 13" stroke="url(#${r.id})" stroke-width="4" fill="none"/>
    <path d="M84 36 q8 2 10 7" stroke="url(#${r.id})" stroke-width="3.6" fill="none"/>
    <path d="M40 14 q14 -5 28 0" stroke="rgba(255,255,255,.4)" stroke-width="1.4" fill="none"/>
    <rect x="50" y="22" width="11" height="6" rx="2" fill="#2c2c30"/>
  `,'');
}
function svgTalja(){
  const m=egrad([[0,'#aeb6c0'],[1,'#4c5560']]);
  return ei(m.def,`
    <path d="M52 6 L68 6 L72 14 L72 32 L66 38 L54 38 L48 32 L48 14 Z" fill="url(#${m.id})" stroke="#1c2026" stroke-width="1.3"/>
    <circle cx="60" cy="24" r="9" fill="#343a42" stroke="#14161c" stroke-width="1"/>
    <circle cx="60" cy="24" r="3" fill="#8a929c"/>
    <path d="M51 24 a9 9 0 0 1 18 0" stroke="#d8b060" stroke-width="3" fill="none"/>
    <path d="M51 24 L51 44 M69 24 L69 44" stroke="#d8b060" stroke-width="3"/>
    <path d="M60 6 L60 1 M56 3.5 a4 3 0 0 1 8 0" stroke="#8a929c" stroke-width="2" fill="none"/>
    <path d="M54 8 h12" stroke="rgba(255,255,255,.45)" stroke-width="1.2"/>
  `,'4:1 UTVÄXLING','#aab');
}
function svgBryt(){
  const s=egrad([[0,'#cfd6dd'],[.5,'#8f9aa6'],[1,'#5d6873']],0,0,1,0);
  return ei(s.def,`
    <rect x="12" y="24" width="78" height="5.5" rx="2.5" fill="url(#${s.id})" stroke="#26241f" stroke-width="1.1"/>
    <path d="M90 26.5 q12 -2 14 -10 l-4 -2 q-3 7 -10 8 Z" fill="#5d6873" stroke="#26241f" stroke-width="1"/>
    <path d="M88 24 q8 4 6 12 l4 1 q2 -10 -6 -15 Z" fill="#7d8893" stroke="#26241f" stroke-width="1"/>
    <rect x="8" y="22" width="10" height="9" rx="3" fill="#3c444c" stroke="#1c2026" stroke-width="1"/>
    <path d="M14 25.5 h70" stroke="rgba(255,255,255,.5)" stroke-width="1"/>
  `,'VÄNDKROK + BRYT','#aab');
}
function svgDunk(){
  const r=egrad([[0,'#ff6a4a'],[.5,'#d83018'],[1,'#7c1404']]);
  return ei(r.def,`
    <path d="M34 14 L74 14 L80 20 L80 40 L34 40 Z" fill="url(#${r.id})" stroke="#3c0c04" stroke-width="1.3"/>
    <rect x="40" y="9" width="9" height="6" rx="2" fill="#2c2c30" stroke="#14161c" stroke-width=".9"/>
    <rect x="60" y="9" width="9" height="6" rx="2" fill="#1c1c40" stroke="#0c0c24" stroke-width=".9"/>
    <path d="M38 20 L76 20" stroke="rgba(0,0,0,.3)" stroke-width="1.4"/>
    <rect x="40" y="24" width="20" height="12" rx="2" fill="rgba(255,255,255,.88)"/>
    <path d="M43 28 h14 M43 31.5 h11" stroke="#7c1404" stroke-width="1.6"/>
    <path d="M86 16 q5 6 0 12" stroke="#2c2c30" stroke-width="2.4" fill="none"/>
    <path d="M36 15.5 L36 39" stroke="rgba(255,255,255,.4)" stroke-width="1.6"/>
  `,'BENSIN + KEDJEOLJA','#f86');
}
function svgKedja(){
  const m=egrad([[0,'#d8dde4'],[1,'#70787f']]);
  const link=(a)=>{const x=60+30*Math.cos(a),y=24+12*Math.sin(a);return `<rect x="${x-4}" y="${y-2.5}" width="8" height="5" rx="2" transform="rotate(${a*57.3+90} ${x} ${y})" fill="url(#${m.id})" stroke="#26241f" stroke-width=".8"/>`;};
  let links='';for(let i=0;i<16;i++)links+=link(i/16*Math.PI*2);
  return ei(m.def,`<ellipse cx="60" cy="24" rx="30" ry="12" fill="none" stroke="#3c4046" stroke-width="1.4"/>${links}
    <path d="M44 15 l3 -4 l3 4 z M60 12.5 l3 -4 l3 4 z M76 15 l3 -4 l3 4 z" fill="#26241f"/>
  `,'SLIPADE · RÄTT DELNING','#aab');
}
function svgFil(){
  const w=egrad([[0,'#b07838'],[1,'#6a4214']],0,0,1,0);
  const s=egrad([[0,'#c8ccd4'],[1,'#7c848c']],0,0,1,0);
  return ei(w.def+s.def,`
    <rect x="14" y="22" width="24" height="9" rx="4.5" fill="url(#${w.id})" stroke="#3c2408" stroke-width="1.1"/>
    <rect x="38" y="24.5" width="62" height="4" rx="2" fill="url(#${s.id})" stroke="#3c4046" stroke-width="1"/>
    <path d="M42 24.5 l3 4 m4 -4 l3 4 m4 -4 l3 4 m4 -4 l3 4 m4 -4 l3 4 m4 -4 l3 4 m4 -4 l3 4 m4 -4 l3 4" stroke="#5c646c" stroke-width=".7"/>
    <rect x="30" y="12" width="56" height="5" rx="1.5" fill="#e8b040" stroke="#7c5404" stroke-width="1" opacity=".95"/>
    <path d="M36 13 v3 M48 13 v3 M60 13 v3 M72 13 v3" stroke="#7c5404" stroke-width=".8"/>
  `,'RUNDFIL + FILMALL','#da6');
}
function svgTnyckel(){
  const m=egrad([[0,'#cfd6dd'],[1,'#5d6873']]);
  return ei(m.def,`
    <rect x="34" y="12" width="52" height="7" rx="3.5" fill="url(#${m.id})" stroke="#26241f" stroke-width="1.2"/>
    <rect x="56" y="18" width="8" height="20" rx="2.5" fill="url(#${m.id})" stroke="#26241f" stroke-width="1.2"/>
    <rect x="53" y="36" width="14" height="8" rx="2" fill="#3c444c" stroke="#1c2026" stroke-width="1.1"/>
    <circle cx="60" cy="40" r="2.4" fill="#14161c"/>
    <path d="M36 14 h48" stroke="rgba(255,255,255,.55)" stroke-width="1.1"/>
  `,'KOMBINYCKEL','#aab');
}
function svgForband(){
  const w=egrad([[0,'#ffffff'],[1,'#b8bcc4']]);
  return ei(w.def,`
    <rect x="34" y="16" width="36" height="20" rx="10" fill="url(#${w.id})" stroke="#5c6066" stroke-width="1.2"/>
    <ellipse cx="70" cy="26" rx="7" ry="10" fill="#e8eaee" stroke="#5c6066" stroke-width="1.2"/>
    <ellipse cx="70" cy="26" rx="3" ry="5" fill="#9ca0a8"/>
    <path d="M38 20 h26 M38 26 h24 M38 32 h26" stroke="rgba(120,124,132,.5)" stroke-width="1"/>
    <path d="M77 22 q14 -2 22 4 l-2 4 q-8 -5 -20 -3 Z" fill="#e8eaee" stroke="#5c6066" stroke-width="1"/>
    <rect x="44" y="10" width="14" height="9" rx="2" fill="#d82820"/>
    <path d="M51 11.5 v6 M48 14.5 h6" stroke="#fff" stroke-width="2"/>
  `,'TRYCKFÖRBAND','#e88');
}
function svgTourniquet(){
  return ei('',`
    <rect x="26" y="20" width="68" height="9" rx="4" fill="#1c1c20" stroke="#000" stroke-width="1"/>
    <path d="M28 22 h64" stroke="rgba(255,255,255,.2)" stroke-width="1.2"/>
    <rect x="40" y="16" width="14" height="17" rx="2" fill="#d82820" stroke="#5c0c08" stroke-width="1.1"/>
    <rect x="58" y="10" width="5" height="20" rx="2.4" fill="#3c3c44" stroke="#1c1c20" stroke-width="1" transform="rotate(28 60 20)"/>
    <path d="M94 24.5 q8 0 8 -5" stroke="#1c1c20" stroke-width="4" fill="none"/>
    <text x="47" y="27.5" font-size="5" fill="#fff" text-anchor="middle" font-weight="bold">CAT</text>
  `,'AVSNÖRANDE FÖRBAND','#e66');
}
function svgRadio(){
  const b=egrad([[0,'#4a525c'],[1,'#1e2228']]);
  return ei(b.def,`
    <rect x="48" y="12" width="24" height="30" rx="4" fill="url(#${b.id})" stroke="#0c0e12" stroke-width="1.3"/>
    <rect x="52" y="17" width="16" height="9" rx="1.5" fill="#9fd8a8" stroke="#0c0e12" stroke-width=".8"/>
    <path d="M54 21 l3 -2 2 3 3 -3 2 2" stroke="#2c5c34" stroke-width="1" fill="none"/>
    <circle cx="55" cy="32" r="2.2" fill="#c8ccd4"/><circle cx="61" cy="32" r="2.2" fill="#c8ccd4"/><circle cx="67" cy="32" r="2.2" fill="#c8ccd4"/>
    <path d="M52 37 h16" stroke="#2c3038" stroke-width="2"/>
    <rect x="52" y="3" width="3.4" height="10" rx="1.7" fill="#1c1c20"/>
    <path d="M49.5 13 L49.5 41" stroke="rgba(255,255,255,.22)" stroke-width="1.2"/>
  `,'LARMA VID OLYCKA','#9cd');
}
function svgVissla(){
  const o=egrad([[0,'#ffc040'],[1,'#c87410']]);
  return ei(o.def,`
    <path d="M44 18 L80 18 L80 28 Q80 40 66 40 Q52 40 52 28 L44 28 Z" fill="url(#${o.id})" stroke="#5a3400" stroke-width="1.3"/>
    <circle cx="66" cy="30" r="5" fill="#2c2c30"/>
    <circle cx="47" cy="14" r="4" fill="none" stroke="#5a3400" stroke-width="2"/>
    <path d="M46 19 h32" stroke="rgba(255,255,255,.5)" stroke-width="1.2"/>
    <path d="M84 20 q6 0 8 -4 M84 25 q7 1 10 -1 M84 30 q6 2 8 6" stroke="#e8c98e" stroke-width="1.6" fill="none"/>
  `,'LJUDLARM','#fc6');
}
function svgFHV(){
  const r=egrad([[0,'#ff5848'],[1,'#a81408']]);
  return ei(r.def,`
    <rect x="34" y="14" width="52" height="26" rx="4" fill="url(#${r.id})" stroke="#4c0804" stroke-width="1.3"/>
    <rect x="52" y="9" width="16" height="6" rx="2" fill="#7c1008" stroke="#4c0804" stroke-width="1"/>
    <circle cx="60" cy="27" r="9" fill="#fff"/>
    <path d="M60 21 v12 M54 27 h12" stroke="#d82820" stroke-width="3.6"/>
    <path d="M36 16 h48" stroke="rgba(255,255,255,.35)" stroke-width="1.4"/>
  `,'KOMPLETT KIT','#f88');
}
function svgSlackare(){
  const r=egrad([[0,'#ff5040'],[.5,'#d01808'],[1,'#700804']],0,0,1,0);
  return ei(r.def,`
    <rect x="50" y="14" width="18" height="28" rx="6" fill="url(#${r.id})" stroke="#3c0404" stroke-width="1.3"/>
    <rect x="55" y="8" width="8" height="7" rx="2" fill="#2c2c30" stroke="#0c0c10" stroke-width="1"/>
    <path d="M55 9 q-8 0 -9 5" stroke="#1c1c20" stroke-width="2.4" fill="none"/>
    <path d="M46 14 q-4 4 -2 10" stroke="#1c1c20" stroke-width="2.2" fill="none"/>
    <circle cx="59" cy="11" r="2.6" fill="#e8eaee" stroke="#0c0c10" stroke-width=".8"/>
    <rect x="52" y="22" width="14" height="10" rx="1.5" fill="rgba(255,255,255,.88)"/>
    <path d="M55 26 h8 M55 29 h6" stroke="#a81408" stroke-width="1.4"/>
    <path d="M52.5 16 L52.5 40" stroke="rgba(255,255,255,.4)" stroke-width="1.5"/>
  `,'6KG PULVER','#f66');
}
function svgGPS(){
  const b=egrad([[0,'#3c5c48'],[1,'#16241c']]);
  return ei(b.def,`
    <rect x="48" y="8" width="24" height="34" rx="5" fill="url(#${b.id})" stroke="#0a120c" stroke-width="1.3"/>
    <rect x="52" y="13" width="16" height="16" rx="2" fill="#bfe8c8" stroke="#0a120c" stroke-width=".8"/>
    <path d="M54 25 q4 -7 7 -3 q3 4 7 -4" stroke="#2c6038" stroke-width="1.1" fill="none"/>
    <path d="M60 16 a3 3 0 1 1 .01 0 M60 19 l0 4" stroke="#d83018" stroke-width="1.6" fill="none"/>
    <circle cx="56" cy="35" r="2" fill="#9ca8a0"/><circle cx="64" cy="35" r="2" fill="#9ca8a0"/>
    <rect x="54" y="4" width="3" height="5" rx="1.4" fill="#1c1c20"/>
    <path d="M49.5 10 L49.5 40" stroke="rgba(255,255,255,.2)" stroke-width="1.2"/>
  `,'NÖDPOSITION','#9d9');
}
function svgKarbin(){
  const m=egrad([[0,'#e8eef4'],[.5,'#a8b2bc'],[1,'#5c6670']]);
  return ei(m.def,`
    <path d="M52 8 Q40 8 40 22 L40 30 Q40 44 54 44 Q66 44 67 33" fill="none" stroke="url(#${m.id})" stroke-width="6" stroke-linecap="round"/>
    <path d="M52 8 Q70 8 68 26" fill="none" stroke="url(#${m.id})" stroke-width="6" stroke-linecap="round"/>
    <rect x="62" y="24" width="9" height="12" rx="3" fill="#7c868f" stroke="#3c464f" stroke-width="1.1"/>
    <path d="M52 8 Q42 8.5 41 20" stroke="rgba(255,255,255,.6)" stroke-width="1.6" fill="none"/>
  `,'EN 362 · 22kN','#aab');
}
function svgSele(){
  const o=egrad([[0,'#ff8830'],[1,'#b84808']]);
  return ei(o.def,`
    <path d="M34 14 L86 14 L84 22 L36 22 Z" fill="url(#${o.id})" stroke="#5a2400" stroke-width="1.2"/>
    <path d="M42 22 L38 36 L54 36 L52 24 M68 24 L66 36 L82 36 L78 22" fill="none" stroke="url(#${o.id})" stroke-width="5"/>
    <rect x="55" y="15.5" width="10" height="5.5" rx="1.5" fill="#c8ccd4" stroke="#3c4046" stroke-width="1"/>
    <circle cx="44" cy="18.5" r="2.2" fill="#3c4046"/><circle cx="76" cy="18.5" r="2.2" fill="#3c4046"/>
    <path d="M36 15.5 h48" stroke="rgba(255,255,255,.4)" stroke-width="1.1"/>
  `,'EN 358/813','#fa6');
}
function svgFallsele(){
  const o=egrad([[0,'#ff9430'],[1,'#b85808']]);
  return ei(o.def,`
    <path d="M48 5 L52 22 M72 5 L68 22 M48 5 Q60 11 72 5" fill="none" stroke="url(#${o.id})" stroke-width="4.4"/>
    <path d="M40 22 L80 22 L78 29 L42 29 Z" fill="url(#${o.id})" stroke="#5a2800" stroke-width="1.1"/>
    <path d="M46 29 L42 41 L56 41 L54 30 M66 30 L64 41 L78 41 L74 29" fill="none" stroke="url(#${o.id})" stroke-width="4.6"/>
    <rect x="55" y="23" width="10" height="5" rx="1.5" fill="#c8ccd4" stroke="#3c4046" stroke-width="1"/>
    <circle cx="60" cy="9" r="2.4" fill="none" stroke="#3c4046" stroke-width="1.6"/>
  `,'EN 361 HELKROPP','#fa6');
}
function svgAtta(col){
  const m=egrad([[0,'#e8eef4'],[.5,col],[1,'#3c464f']]);
  return ei(m.def,`
    <circle cx="60" cy="15" r="9" fill="none" stroke="url(#${m.id})" stroke-width="6"/>
    <circle cx="60" cy="34" r="11" fill="none" stroke="url(#${m.id})" stroke-width="6.4"/>
    <path d="M54 11 a8 8 0 0 1 9 -1" stroke="rgba(255,255,255,.55)" stroke-width="1.6" fill="none"/>
  `,'REPBROMS','#caa');
}
function svgAscender(){
  const m=egrad([[0,'#ffd040'],[1,'#b87408']]);
  return ei(m.def,`
    <path d="M58 4 L58 46" stroke="#3070d0" stroke-width="4"/>
    <path d="M58 4 L58 46" stroke="rgba(255,255,255,.3)" stroke-width="1.2"/>
    <path d="M56 14 L74 16 Q80 17 80 24 L80 30 Q80 36 73 36 L64 35" fill="url(#${m.id})" stroke="#5a3800" stroke-width="1.3"/>
    <path d="M64 22 L74 22 L74 30 L64 30 Z" fill="rgba(0,0,0,.3)" rx="2"/>
    <circle cx="61" cy="17" r="2.6" fill="#3c4046"/>
    <path d="M58 14 q-5 2 -4 8 l4 2" fill="none" stroke="#5a3800" stroke-width="2"/>
  `,'REPKLÄTTRING','#fc6');
}
function svgKastlina(){
  const b=egrad([[0,'#e85a2a'],[1,'#90300e']]);
  return ei(b.def,`
    <path d="M40 16 Q38 38 52 40 Q66 38 64 16 Q62 10 52 10 Q42 10 40 16 Z" fill="url(#${b.id})" stroke="#3c1404" stroke-width="1.3"/>
    <path d="M44 14 q8 -3 16 0" stroke="rgba(255,255,255,.4)" stroke-width="1.3" fill="none"/>
    <circle cx="52" cy="8" r="2.6" fill="none" stroke="#3c1404" stroke-width="1.6"/>
    <path d="M55 8 Q80 4 86 14 Q92 24 78 26 Q66 28 72 36 Q76 42 92 38" stroke="#e8c050" stroke-width="1.8" fill="none"/>
    <path d="M44 24 h16 M44 29 h16" stroke="rgba(0,0,0,.3)" stroke-width="1.4"/>
  `,'THROWLINE','#e96');
}
function svgCambium(){
  const s=egrad([[0,'#8a6030'],[1,'#4c3010']]);
  return ei(s.def,`
    <path d="M30 22 Q60 8 90 22" stroke="url(#${s.id})" stroke-width="7" fill="none"/>
    <path d="M30 22 Q60 9.5 90 22" stroke="rgba(255,255,255,.3)" stroke-width="1.4" fill="none"/>
    <circle cx="28" cy="26" r="6.5" fill="none" stroke="#c8ccd4" stroke-width="3.6"/>
    <circle cx="92" cy="26" r="6.5" fill="none" stroke="#c8ccd4" stroke-width="3.6"/>
    <path d="M24 22.5 a6.5 6.5 0 0 1 7 -2" stroke="rgba(255,255,255,.6)" stroke-width="1.2" fill="none"/>
  `,'SKYDDAR BARK & REP','#ca8');
}
function svgTopSaw(){
  return svgSaw('#f06000','#ffd060',36,'');
}
function svgLanyard(){
  const m=egrad([[0,'#c8ccd4'],[1,'#5c6670']]);
  return ei(m.def,`
    <path d="M28 30 Q34 14 50 18 Q66 22 74 16 Q84 10 92 18" stroke="#4c5560" stroke-width="4.4" fill="none"/>
    <path d="M28 30 Q34 14 50 18 Q66 22 74 16 Q84 10 92 18" stroke="rgba(255,255,255,.25)" stroke-width="1.4" fill="none"/>
    <path d="M22 32 Q16 32 16 38 Q16 44 23 44 Q29 44 29 38 L26 36" fill="none" stroke="url(#${m.id})" stroke-width="4" stroke-linecap="round"/>
    <path d="M92 18 q8 1 8 8 q0 7 -8 8 q-7 0 -8 -7" fill="none" stroke="url(#${m.id})" stroke-width="4" stroke-linecap="round"/>
  `,'TAPPSÄKRING','#aab');
}
function svgKit(col){
  const b=egrad([[0,col],[1,'#5c0c08']]);
  return ei(b.def,`
    <path d="M36 16 Q36 10 44 10 L76 10 Q84 10 84 16 L84 34 Q84 40 76 40 L44 40 Q36 40 36 34 Z" fill="url(#${b.id})" stroke="#3c0604" stroke-width="1.3"/>
    <path d="M52 10 Q52 5 60 5 Q68 5 68 10" fill="none" stroke="#3c0604" stroke-width="2.4"/>
    <circle cx="60" cy="25" r="8.5" fill="#fff"/>
    <path d="M60 19.5 v11 M54.5 25 h11" stroke="${col}" stroke-width="3.4"/>
    <path d="M38 13 q10 -2 20 -1" stroke="rgba(255,255,255,.35)" stroke-width="1.3" fill="none"/>
  `,'NEDFIRNING + PLAN','#f88');
}
function svgForankring(){
  const m=egrad([[0,'#e8eef4'],[.5,'#a8b2bc'],[1,'#5c6670']]);
  return ei(m.def,`
    <path d="M30 26 Q45 14 60 26 Q75 38 90 26" stroke="#3060a0" stroke-width="4.6" fill="none"/>
    <path d="M30 26 Q45 14 60 26 Q75 38 90 26" stroke="rgba(255,255,255,.25)" stroke-width="1.4" fill="none"/>
    <path d="M24 28 q-7 1 -7 8 q0 6 7 7 q7 0 7 -7 l-3 -3" fill="none" stroke="url(#${m.id})" stroke-width="3.8" stroke-linecap="round"/>
    <path d="M96 28 q7 1 7 8 q0 6 -7 7 q-7 0 -7 -7 l3 -3" fill="none" stroke="url(#${m.id})" stroke-width="3.8" stroke-linecap="round"/>
  `,'EN 354/355','#aab');
}
function svgPlan(){
  return ei('',`
    <rect x="42" y="8" width="36" height="34" rx="3" fill="#ece8da" stroke="#5c5648" stroke-width="1.2"/>
    <rect x="52" y="4" width="16" height="8" rx="2" fill="#8a929c" stroke="#3c4046" stroke-width="1"/>
    <path d="M47 18 h26 M47 23 h26 M47 28 h20" stroke="#8a8474" stroke-width="1.3"/>
    <path d="M47 34 l3 3 5 -6" stroke="#3a8a48" stroke-width="2" fill="none"/>
    <path d="M58 35 h14" stroke="#8a8474" stroke-width="1.3"/>
  `,'DOKUMENTERAD','#cc9');
}
function svgDoc(kind){
  let mark='';
  if(kind==='kr') mark=`<text x="60" y="31" font-size="11" fill="#3a6a40" text-anchor="middle" font-weight="bold">kr</text><circle cx="60" cy="27.5" r="8.5" fill="none" stroke="#3a6a40" stroke-width="1.6"/>`;
  else if(kind==='shield') mark=`<path d="M60 17 L69 21 L69 28 Q69 35 60 38 Q51 35 51 28 L51 21 Z" fill="#3060a0" stroke="#1c3860" stroke-width="1.2"/><path d="M56 27 l3 3 6 -6" stroke="#fff" stroke-width="2" fill="none"/>`;
  else if(kind==='card') mark=`<rect x="47" y="19" width="26" height="17" rx="2.5" fill="#e8b040" stroke="#7c5404" stroke-width="1.1"/><circle cx="54" cy="26" r="3.4" fill="#7c5404"/><path d="M60 23 h10 M60 27 h10 M60 31 h7" stroke="#7c5404" stroke-width="1.2"/>`;
  else if(kind==='warn') mark=`<path d="M60 16 L71 35 L49 35 Z" fill="#e8b040" stroke="#7c5404" stroke-width="1.3"/><path d="M60 22 v7" stroke="#3c2c04" stroke-width="2.4"/><circle cx="60" cy="32" r="1.3" fill="#3c2c04"/>`;
  else if(kind==='heart') mark=`<path d="M60 36 Q47 27 50 20 Q53 14 60 20 Q67 14 70 20 Q73 27 60 36 Z" fill="#d83030" stroke="#6c0c0c" stroke-width="1.2"/><path d="M52 26 h5 l2 -4 2 7 2 -3 h5" stroke="#fff" stroke-width="1.5" fill="none"/>`;
  else mark=`<path d="M50 20 h20 M50 25 h20 M50 30 h14" stroke="#8a8474" stroke-width="1.4"/><path d="M50 35 l3 3 5 -6" stroke="#3a8a48" stroke-width="2" fill="none"/>`;
  return ei('',`
    <path d="M42 6 L70 6 L78 14 L78 44 L42 44 Z" fill="#ece8da" stroke="#5c5648" stroke-width="1.2"/>
    <path d="M70 6 L70 14 L78 14" fill="#d4cfbe" stroke="#5c5648" stroke-width="1"/>
    ${mark}
  `,'');
}
// Generic icon card (fallback)
function svgIcon(emoji, label, bg){
  bg=bg||'#2a3a1c';
  return `<svg class="ei-svg" viewBox="0 0 120 52" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="3" width="114" height="46" rx="6" fill="${bg}" opacity="0.35" stroke="${bg}" stroke-width="1.2"/>
    <text x="60" y="30" font-size="22" text-anchor="middle" dominant-baseline="middle">${emoji}</text>
    <text x="60" y="46" font-size="7" fill="#c8c0a8" text-anchor="middle" font-family="sans-serif">${label}</text>
  </svg>`;
}

const EQUIP_DATA = {
  saw:[
    {id:'s1', name:'Husqvarna 550 XP', desc:'Allround 50cc', stat:'50cc · 3.4kW · 5.9kg',
     svg:svgSaw('#f05a00','#ffd060',52,'HUSQVARNA 550 XP')},
    {id:'s2', name:'Husqvarna 572 XP', desc:'Proffs 70cc', stat:'70cc · 5.2kW · 6.6kg',
     svg:svgSaw('#e04000','#fff060',58,'HUSQVARNA 572 XP')},
    {id:'s3', name:'Stihl MS 261 C',   desc:'Lättvikt proffs', stat:'50cc · 3.4kW · 5.4kg',
     svg:svgSaw('#e05010','#88ff88',50,'STIHL MS 261 C')},
  ],
  bar:[
    {id:'b1', svg:svgBar(58,'38 cm'), name:'38 cm svärd', desc:'Kort & smidig', stat:'Lättvikt · träd <35cm', len:38},
    {id:'b2', svg:svgBar(76,'45 cm'), name:'45 cm svärd', desc:'Standard allround', stat:'Medium · träd 35-50cm', len:45},
    {id:'b3', svg:svgBar(96,'60 cm'), name:'60 cm svärd', desc:'Stora träd', stat:'Tungt · träd >50cm', len:60},
  ],
  // ── KROPPSSKYDD: sågskyddsbyxor (grundkrav) ──
  legs:[
    {id:'l1', svg:svgPants('byxor'), name:'Sågskyddsbyxor KL.1', desc:'Sågskydd fram, EN ISO 11393', stat:'EN ISO 11393 · KL.1 20m/s', req:true},
    {id:'l2', svg:svgPants('chaps'), name:'Sågskyddschaps', desc:'Byxholkar — spänns utanpå', stat:'EN ISO 11393 · ventilerad', req:true},
    {id:'l3', svg:svgPants('vanliga'), name:'Vanliga arbetsbyxor', desc:'INGET sågskydd — ej tillåtet', stat:'⚠ Saknar sågskydd', bad:true},
  ],
  // ── FOTSKYDD: motorsågskängor (grundkrav) ──
  boots:[
    {id:'bo1', svg:svgBoot('kanga'), name:'Motorsågskängor', desc:'Tåhätta, sågskydd, halksula', stat:'EN ISO 17249 · S3', req:true},
    {id:'bo2', svg:svgBoot('stovel'), name:'Motorsågsstövlar', desc:'Gummi, sågskydd, ankelstöd', stat:'EN ISO 17249 · vattentät', req:true},
    {id:'bo3', svg:svgBoot('vanlig'), name:'Vanliga kängor', desc:'INGET sågskydd — ej tillåtet', stat:'⚠ Saknar sågskydd', bad:true},
  ],
  // ── VARSEL / JACKA: överkropp (grundkrav) ──
  vis:[
    {id:'v1', svg:svgVis('jacka'), name:'Varseljacka skog', desc:'Varsel på överkropp, robust', stat:'EN ISO 20471 · varsel', req:true},
    {id:'v2', svg:svgVis('vast'), name:'Varselväst', desc:'Varsel överkropp, ventilerad', stat:'EN ISO 20471 · klass 2', req:true},
    {id:'v3', svg:svgVis('vanlig'), name:'Vanlig jacka', desc:'INGET varsel — syns dåligt', stat:'⚠ Saknar varsel', bad:true},
  ],
  axe:[
    {id:'a1', svg:svgAxe(1), name:'Gransfors Liten', desc:'Lätta träd', stat:'800g · 60cm skaft'},
    {id:'a2', svg:svgAxe(2), name:'Gransfors Stor', desc:'Kraftig kilslagning', stat:'1.3kg · 80cm skaft'},
    {id:'a3', svg:svgAxe(3), name:'Fällkofot+yxa', desc:'Combo kofot & yxa', stat:'1.5kg · specialskaft'},
  ],
  wedge:[
    {id:'w1', svg:svgWedge('#e8d080'), name:'Plastkil 16cm', desc:'Lätt grundkil', stat:'16cm · 400g · plast'},
    {id:'w2', svg:svgWedge('#a0a0b8'), name:'Slagkil stål 20cm', desc:'Kraftfull slagkil', stat:'20cm · 800g · stål'},
    {id:'w3', svg:svgWedge('#c0d8e8'), name:'Dubbla kilar x2', desc:'Tung stam / lutning', stat:'18cm×2 · alu'},
  ],
  bj:[
    {id:'bj1', svg:svgKofot('Kofot 80cm',82), name:'Brytjärn 80cm', desc:'Standard', stat:'80cm · 1.2kg'},
    {id:'bj2', svg:svgKofot('Kofot 120cm',104), name:'Brytjärn 120cm', desc:'Ökad hävstång', stat:'120cm · 1.8kg'},
  ],
  helmet:[
    {id:'h1', svg:svgHelmet('#f5a623','HJÄLM + HÖRSEL + VISIR'), name:'Skogshjälm standard', desc:'Hjälm + hörselskydd + nätvisir', stat:'EN397/EN352/EN1731', req:true},
    {id:'h2', svg:svgHelmet('#e03028','HJÄLM + HÖRSEL + VISIR'), name:'Proffshjälm med bluetooth', desc:'Elektroniskt hörselskydd + komm.', stat:'EN397 · aktivt hörsel', req:true},
    {id:'h3', svg:svgHelmet('#f0c840','HJÄLM + HÖRSEL + VISIR'), name:'Lättvikt sommarhjälm', desc:'Ventilerad, visir & hörselskydd', stat:'EN397 · 380g', req:true},
  ],
  gloves:[
    {id:'g1', svg:svgGloves('#8a5a2a','LÄDERHANDSKAR'), name:'Läderhandskar', desc:'Kraftiga arbetshandskar i läder', stat:'EN388 · grepp', req:true},
    {id:'g2', svg:svgGloves('#e05010','VIBRATIONS-HANDSKAR'), name:'Vibrationsdämpande', desc:'Gel-insats mot vita fingrar', stat:'EN ISO 10819', req:true},
    {id:'g3', svg:svgGloves('#3a5525','SÅGSKYDDS-HANDSKAR'), name:'Sågskyddshandskar KL.1', desc:'Vänster hand med sågstopp', stat:'EN381-7 KL.1', req:true},
  ],
  // ── FÄLLNINGSVERKTYG (multi-select) ──
  felltools:[
    {id:'ft1', svg:svgSikt(), name:'Fällriktare', desc:'Siktverktyg för exakt riktning', stat:'Precision · obstaklar', toggle:true, scen:'precise'},
    {id:'ft2', svg:svgMatt(), name:'Måttband', desc:'Mät DBH & riktskärsdjup', stat:'5m · skogsbruk', toggle:true, rec:true},
    {id:'ft3', svg:svgSprej(), name:'Märkspray', desc:'Markera fällriktning & snitt', stat:'Fluorescerande', toggle:true, rec:true},
  ],
  // ── FASTFÄLLDA TRÄD: bärgning (multi-select, scenariokrav) ──
  rescue:[
    {id:'r1', svg:svgVinsch(), name:'Skogsvinsch', desc:'Drar ner fastfällt träd', stat:'1.6 ton · wire', toggle:true, scen:'stuck'},
    {id:'r2', svg:svgRep('#a06020'), name:'Draglina', desc:'Förstärkt fälldragning', stat:'30m · 5 ton brott', toggle:true, scen:'stuck'},
    {id:'r3', svg:svgTalja(), name:'Block & talja', desc:'Hävstångsförstärkning', stat:'4:1 utväxling', toggle:true, scen:'stuck'},
    {id:'r4', svg:svgBryt(), name:'Brytverktyg', desc:'Vrid loss fastkört träd', stat:'Vändkrok + bryt', toggle:true, scen:'stuck'},
  ],
  // ── BRÄNSLE & SERVICE (multi-select, rekommenderat) ──
  service:[
    {id:'sv1', svg:svgDunk(), name:'Kombidunk', desc:'Bensin + kedjeolja', stat:'5L+3L · säker', toggle:true, rec:true},
    {id:'sv2', svg:svgKedja(), name:'Reservkedjor', desc:'Extra slipade kedjor', stat:'x2 · rätt delning', toggle:true, rec:true},
    {id:'sv3', svg:svgFil(), name:'Filar & filmall', desc:'Slipa kedjan i fält', stat:'Rundfil + mall', toggle:true, rec:true},
    {id:'sv4', svg:svgTnyckel(), name:'Tändstiftsnyckel', desc:'Kombi-/multiverktyg', stat:'Service i fält', toggle:true, rec:true},
    {id:'sv5', svg:svgBar(70,'RESERVSVÄRD'), name:'Extra svärd', desc:'Reserv vid skada', stat:'Samma fäste', toggle:true},
  ],
  // ── ARBETSPLATSSÄKERHET + PERSONLIGT (multi-select) ──
  worksafe:[
    {id:'ws1', svg:svgForband(), name:'Första förband', desc:'Personligt på kroppen', stat:'Tryckförband', toggle:true, req:true},
    {id:'ws2', svg:svgTourniquet(), name:'Tourniquet', desc:'Avsnörande förband', stat:'CAT · blodstopp', toggle:true, rec:true},
    {id:'ws3', svg:svgRadio(), name:'Mobil / komradio', desc:'Larma vid olycka', stat:'Ensamarbete krävs', toggle:true, req:true},
    {id:'ws4', svg:svgVissla(), name:'Visselpipa', desc:'Larmsignal (arborist)', stat:'Ljudlarm', toggle:true},
    {id:'ws5', svg:svgFHV(), name:'Första hjälpen-väska', desc:'På arbetsplatsen', stat:'Komplett kit', toggle:true, rec:true},
    {id:'ws6', svg:svgSlackare(), name:'Brandsläckare', desc:'Vid heta arbeten/torka', stat:'6kg pulver', toggle:true, rec:true},
    {id:'ws7', svg:svgGPS(), name:'GPS / kartstöd', desc:'Position i stora områden', stat:'Nödposition', toggle:true},
  ],
  // ── ARBORIST: KLÄTTRING (multi-select, scenario klättring) ──
  climb:[
    {id:'c1', svg:svgSele(), name:'Klättersele', desc:'Arboristsele', stat:'EN 358/813', toggle:true, scen:'climb'},
    {id:'c2', svg:svgRep('#3070d0'), name:'Klätterrep + reservrep', desc:'Dynamiskt + statiskt', stat:'EN 1891', toggle:true, scen:'climb'},
    {id:'c3', svg:svgKarbin(), name:'Karbiner', desc:'Låsbara kopplingar', stat:'EN 362 · 22kN', toggle:true, scen:'climb'},
    {id:'c4', svg:svgAtta('#a05020'), name:'Friktionsbroms', desc:'Descender/positionering', stat:'Kontrollerad nedfärd', toggle:true, scen:'climb'},
    {id:'c5', svg:svgAscender(), name:'Ascenders', desc:'Repklättring uppåt', stat:'Hand/fot', toggle:true, scen:'climb'},
    {id:'c6', svg:svgAtta('#7c4848'), name:'Descenders', desc:'Kontrollerad nedfirning', stat:'Repbroms', toggle:true, scen:'climb'},
    {id:'c7', svg:svgKastlina(), name:'Kastlina + kastpåse', desc:'Etablera rep i krona', stat:'Throwline', toggle:true, scen:'climb'},
    {id:'c8', svg:svgCambium(), name:'Cambium saver', desc:'Friktionsskydd på gren', stat:'Skyddar bark & rep', toggle:true, scen:'climb'},
    {id:'c9', svg:svgTopSaw(), name:'Topphandssåg', desc:'Godkänd för arboristarbete', stat:'Enhandssåg i träd', toggle:true, scen:'climb'},
    {id:'c10', svg:svgLanyard(), name:'Sågstropp + verktygssäkring', desc:'Säkrar sågen i trädet', stat:'Tappsäkring', toggle:true, scen:'climb'},
    {id:'c11', svg:svgKit('#d82020'), name:'Räddningskit + plan', desc:'Nedfirning + räddningsplan', stat:'Förutbestämd plan', toggle:true, scen:'climb'},
  ],
  // ── SKYLIFT (multi-select, scenario lift) ──
  lift:[
    {id:'lf1', svg:svgFallsele(), name:'Fallskyddssele', desc:'Helkroppssele för lift', stat:'EN 361', toggle:true, scen:'lift'},
    {id:'lf2', svg:svgForankring(), name:'Förankringslina', desc:'Godkänd kopplad i korg', stat:'EN 354/355', toggle:true, scen:'lift'},
    {id:'lf3', svg:svgPlan(), name:'Räddningsplan lift', desc:'Plan + liftutbildning', stat:'Dokumenterad', toggle:true, scen:'lift'},
  ],
  // ── EGEN FIRMA: behörighet & dokument (multi-select) ──
  firma:[
    {id:'fm1', svg:svgDoc('kr'), name:'F-skatt', desc:'Godkänd för F-skatt', stat:'Skatteverket', toggle:true, biz:true},
    {id:'fm2', svg:svgDoc('shield'), name:'Ansvarsförsäkring', desc:'Skydd vid skada', stat:'Företagsförsäkring', toggle:true, biz:true},
    {id:'fm3', svg:svgDoc('card'), name:'Motorsågskörkort AB+', desc:'Behörighet trädfällning', stat:'Nivå AB el. högre', toggle:true, biz:true},
    {id:'fm4', svg:svgDoc('warn'), name:'Riskbedömning', desc:'Dokumenterad inför jobb', stat:'Skriftlig', toggle:true, biz:true},
    {id:'fm5', svg:svgDoc('clip'), name:'Arbetsmiljörutiner', desc:'Rutiner & egenkontroll', stat:'Systematiskt AM', toggle:true, biz:true},
    {id:'fm6', svg:svgDoc('heart'), name:'HLR + Första hjälpen-utb.', desc:'Giltig utbildning', stat:'Certifierad', toggle:true, biz:true},
  ],
  extra:[
    {id:'e1', svg:svgRep('#c8a050'),
     name:'Rep 20m', desc:'Dragningsrep', stat:'20m · 12mm', toggle:true, scen:'stuck'},
  ]
};

// ══════════════════════════════════════════
// LEVELS
// ══════════════════════════════════════════
const LEVELS = [
  {id:1, title:'Rak tall', icon:'🌲', diff:'Nybörjare', species:'Tall', dbh:30, height:18,
   wind:2, windDir:'S', tilt:0, tiltDir:'—', slope:0, slopeDir:'—', fallDir:'S',
   obstacle:'Ingen', recom:'Grundteknik', scenario:'mark'},
  {id:2, title:'Gran — lätt utförsbacke', icon:'🌲', diff:'Nybörjare', species:'Gran', dbh:38, height:22,
   wind:3, windDir:'V', tilt:3, tiltDir:'S', slope:5, slopeDir:'S', fallDir:'S',
   obstacle:'Dike 15m N', recom:'80° vinkel', scenario:'mark'},
  {id:3, title:'Björk — uppförsbacke', icon:'🍂', diff:'Medel', species:'Björk', dbh:42, height:20,
   wind:4, windDir:'N', tilt:5, tiltDir:'O', slope:10, slopeDir:'N', fallDir:'S',
   obstacle:'Häck 8m V', recom:'60° vinkel', scenario:'mark'},
  {id:4, title:'Tall vid kraftledning', icon:'⚡', diff:'Medel', species:'Tall', dbh:50, height:28,
   wind:5, windDir:'N', tilt:8, tiltDir:'O', slope:3, slopeDir:'V', fallDir:'V',
   obstacle:'Kraftledning 12m O', recom:'Dubbelt instick', scenario:'mark'},
  {id:5, title:'Stor ek — tung krona', icon:'🌳', diff:'Medel', species:'Ek', dbh:60, height:25,
   wind:3, windDir:'S', tilt:4, tiltDir:'N-O', slope:6, slopeDir:'N', fallDir:'S',
   obstacle:'Hus 20m N', recom:'Dubbla kilar + rep', scenario:'mark'},
  {id:6, title:'Stormskadad gran', icon:'🌪️', diff:'Avancerad', species:'Gran', dbh:45, height:26,
   wind:7, windDir:'V', tilt:12, tiltDir:'O', slope:8, slopeDir:'O', fallDir:'S',
   obstacle:'Väg 10m O · Stup V', recom:'Borrsnitt + rep', scenario:'mark'},
  {id:7, title:'Lönn i park (arborist)', icon:'🍁', diff:'Avancerad', species:'Lönn', dbh:55, height:22,
   wind:2, windDir:'N', tilt:6, tiltDir:'S', slope:2, slopeDir:'S', fallDir:'N',
   obstacle:'Lekplats S 8m', recom:'Klättring + sektionsfällning', scenario:'climb'},
  {id:8, title:'Tall — tätt bestånd', icon:'🌲🌲', diff:'Expert', species:'Tall', dbh:35, height:20,
   wind:6, windDir:'N-V', tilt:5, tiltDir:'N', slope:4, slopeDir:'N', fallDir:'S',
   obstacle:'Grannträd 3m O/V', recom:'Smalt fönster', scenario:'mark'},
  {id:9, title:'Bok vid byggnad (skylift)', icon:'🟤', diff:'Expert', species:'Bok', dbh:65, height:30,
   wind:4, windDir:'O', tilt:10, tiltDir:'V', slope:7, slopeDir:'V', fallDir:'N',
   obstacle:'Byggnad 12m V · Dike S', recom:'Skylift + bitvis nedtagning', scenario:'lift'},
  {id:10, title:'MASTER — Stormvind', icon:'⛈️', diff:'MASTER', species:'Gran', dbh:70, height:35,
   wind:9, windDir:'N-V', tilt:15, tiltDir:'O', slope:10, slopeDir:'V', fallDir:'S',
   obstacle:'Hus 10m O · Ledning N', recom:'Full teknikkedja + vinsch', scenario:'mark'},
];
