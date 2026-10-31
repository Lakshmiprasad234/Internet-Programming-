
const cfg=window.PROJECT_CONFIG;
const key='lab-demo-'+cfg.slug;
let rows=JSON.parse(localStorage.getItem(key)||'null')||cfg.seed;
const $=s=>document.querySelector(s);
function save(){localStorage.setItem(key,JSON.stringify(rows));}
function esc(v){return String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
function title(s){return s.replace(/([A-Z])/g,' $1').replace(/^./,c=>c.toUpperCase());}
function renderStats(){
 const stats=$('#stats'); if(!stats)return;
 const active=rows.filter(r=>!String(r.status||'').match(/cancel|out of stock|closed/i)).length;
 stats.innerHTML=`<div class="stat"><small>Total ${esc(cfg.entity)}</small><strong>${rows.length}</strong></div><div class="stat"><small>Active records</small><strong>${active}</strong></div><div class="stat"><small>Project modules</small><strong>${cfg.features.length}</strong></div><div class="stat"><small>Storage</small><strong>Local</strong></div>`;
}
function renderFeatures(){const el=$('#features');if(el)el.innerHTML=cfg.features.map((f,i)=>`<div class="feature"><b>0${i+1} · ${esc(f)}</b>Included in this interface demo</div>`).join('');}
function renderForm(){
 const el=$('#record-form');if(!el)return;
 el.innerHTML=cfg.fields.map(f=>`<label>${esc(title(f))}<input name="${esc(f)}" placeholder="Enter ${esc(title(f).toLowerCase())}" ${['date','checkIn','checkOut','travelDate','journeyDate','deliveryDate','validTill','startDate','endDate'].includes(f)?'type="date"':''} required></label>`).join('')+
 `<div class="form-actions"><button class="btn" type="submit">Add ${esc(cfg.entity.replace(/s$/,''))}</button><button class="btn outline" type="reset">Clear</button></div>`;
 el.onsubmit=e=>{e.preventDefault();const data=Object.fromEntries(new FormData(el).entries());rows.unshift(data);save();el.reset();render();toast('Record added successfully.');};
}
function renderTable(filter=''){
 const body=$('#table-body');if(!body)return;
 const filtered=rows.filter(r=>Object.values(r).join(' ').toLowerCase().includes(filter.toLowerCase()));
 if(!filtered.length){body.innerHTML=`<tr><td colspan="${cfg.fields.length+1}" class="empty">No matching records found.</td></tr>`;return;}
 body.innerHTML=filtered.map((r)=>`<tr>${cfg.fields.map(f=>`<td>${f==='status'?`<span class="badge">${esc(r[f]||'—')}</span>`:esc(r[f]||'—')}</td>`).join('')}<td><button class="btn outline delete" data-id="${rows.indexOf(r)}">Delete</button></td></tr>`).join('');
 body.querySelectorAll('.delete').forEach(b=>b.onclick=()=>{if(confirm('Delete this record?')){rows.splice(Number(b.dataset.id),1);save();render();}});
}
function toast(msg){let t=$('#toast');if(!t)return;t.textContent=msg;t.hidden=false;setTimeout(()=>t.hidden=true,2400);}
function render(){renderStats();renderFeatures();renderTable($('#search')?.value||'');}
if($('#record-form')){renderForm();render();}
if($('#search'))$('#search').addEventListener('input',e=>renderTable(e.target.value));
const login=$('#login-form');if(login)login.onsubmit=e=>{e.preventDefault();localStorage.setItem('lab-demo-user',login.username.value);location.href='../index.html';};
const logout=$('#logout');if(logout)logout.onclick=()=>{localStorage.removeItem('lab-demo-user');location.href='login.html';};
