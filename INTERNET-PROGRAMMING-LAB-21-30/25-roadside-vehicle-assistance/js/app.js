
const cfg=window.PROJECT_CONFIG,key='lab-demo-'+cfg.slug;
let rows=JSON.parse(localStorage.getItem(key)||'null')||cfg.seed;
const $=s=>document.querySelector(s);
const esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const title=s=>s.replace(/([A-Z])/g,' $1').replace(/^./,c=>c.toUpperCase());
function save(){localStorage.setItem(key,JSON.stringify(rows))}
function render(){
 const stats=$('#stats');if(stats){let active=rows.filter(r=>!String(Object.values(r).join(' ')).match(/cancelled|closed/i)).length;stats.innerHTML=`<div class="stat"><small>Total ${esc(cfg.entity)}</small><strong>${rows.length}</strong></div><div class="stat"><small>Active records</small><strong>${active}</strong></div><div class="stat"><small>Modules</small><strong>${cfg.features.length}</strong></div><div class="stat"><small>Storage</small><strong>Local</strong></div>`}
 const features=$('#features');if(features)features.innerHTML=cfg.features.map((f,i)=>`<div class="feature"><b>0${i+1} · ${esc(f)}</b>Included in this lab prototype</div>`).join('');
 const body=$('#table-body');if(body){let q=$('#search')?.value||'',found=rows.filter(r=>Object.values(r).join(' ').toLowerCase().includes(q.toLowerCase()));body.innerHTML=found.length?found.map(r=>`<tr>${cfg.fields.map(f=>`<td>${f.toLowerCase().includes('status')||f==='approval'?`<span class="badge">${esc(r[f])}</span>`:esc(r[f]||'—')}</td>`).join('')}<td><button class="btn outline delete" data-i="${rows.indexOf(r)}">Delete</button></td></tr>`).join(''):`<tr><td class="notice">No matching records found.</td></tr>`;body.querySelectorAll('.delete').forEach(b=>b.onclick=()=>{if(confirm('Delete this record?')){rows.splice(+b.dataset.i,1);save();render()}})}
}
const form=$('#record-form');if(form){form.innerHTML=cfg.fields.map(f=>`<label>${esc(title(f))}<input name="${esc(f)}" placeholder="Enter ${esc(title(f).toLowerCase())}" required></label>`).join('')+'<div class="form-actions"><button class="btn" type="submit">Add record</button><button class="btn outline" type="reset">Clear</button></div>';form.onsubmit=e=>{e.preventDefault();rows.unshift(Object.fromEntries(new FormData(form).entries()));save();form.reset();render()};}
if($('#search'))$('#search').addEventListener('input',render);
if($('#login-form'))$('#login-form').onsubmit=e=>{e.preventDefault();alert('Demo login successful.');location.href='../index.html'};
render();
