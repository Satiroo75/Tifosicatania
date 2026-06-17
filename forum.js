
const KEY='tifosi_posts_v2';
const USER='tifosi_user_v2';
const emojis=['🔴','🔵','⚽','💙','❤️','🔥','💪','👏','🏟️','🐘','🌋','🤝','👍','👎','😂','😡'];
function load(k,d){try{return JSON.parse(localStorage.getItem(k))||d}catch(e){return d}}
function save(k,v){localStorage.setItem(k,JSON.stringify(v))}
function now(){return new Date().toLocaleString('it-IT',{dateStyle:'short',timeStyle:'short'})}
function esc(s){return String(s||'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[m]))}
function user(){return load(USER,{nick:'Utente Rossazzurro',role:'utente'})}
function setUser(){save(USER,{nick:document.querySelector('#nick').value.trim()||'Utente Rossazzurro',role:document.querySelector('#role').value||'utente'});render()}
function seed(){if(!load(KEY,null)){save(KEY,[{id:crypto.randomUUID(),title:'Benvenuti sul Muro dei tifosi',body:'Questo è il primo spazio della community. Scrivi, rispondi, usa emoticon e segnala contenuti non civili. 🔴🔵',author:'SOM',role:'admin',date:now(),likes:8,reports:0,pinned:true,hidden:false,comments:[{id:crypto.randomUUID(),author:'Utente Rossazzurro',body:'Forza Catania! ⚽🔴🔵',date:now(),likes:2}]}])}}
function addEmoji(target,e){const el=document.querySelector(target);el.value+=(el.value?' ':'')+e;el.focus()}
function publish(){let title=document.querySelector('#title').value.trim();let body=document.querySelector('#body').value.trim();if(!title||!body){alert('Inserisci titolo e messaggio.');return}let u=user(), posts=load(KEY,[]);posts.unshift({id:crypto.randomUUID(),title,body,author:u.nick,role:u.role,date:now(),likes:0,reports:0,pinned:false,hidden:false,comments:[]});save(KEY,posts);document.querySelector('#title').value='';document.querySelector('#body').value='';render()}
function like(id){let p=load(KEY,[]);p.find(x=>x.id===id).likes++;save(KEY,p);render()}
function report(id){let p=load(KEY,[]);p.find(x=>x.id===id).reports++;save(KEY,p);render()}
function removePost(id){if(confirm('Eliminare questo messaggio?')){save(KEY,load(KEY,[]).filter(x=>x.id!==id));render()}}
function pin(id){let p=load(KEY,[]);let post=p.find(x=>x.id===id);post.pinned=!post.pinned;save(KEY,p);render()}
function hidePost(id){let p=load(KEY,[]);let post=p.find(x=>x.id===id);post.hidden=!post.hidden;save(KEY,p);render()}
function editPost(id){let p=load(KEY,[]);let post=p.find(x=>x.id===id);let n=prompt('Modifica messaggio:',post.body);if(n!==null){post.body=n;save(KEY,p);render()}}
function reply(id){let txt=document.querySelector('#reply-'+id).value.trim();if(!txt)return;let p=load(KEY,[]), post=p.find(x=>x.id===id), u=user();post.comments.push({id:crypto.randomUUID(),author:u.nick,body:txt,date:now(),likes:0});save(KEY,p);render()}
function likeComment(pid,cid){let p=load(KEY,[]);let c=p.find(x=>x.id===pid).comments.find(x=>x.id===cid);c.likes++;save(KEY,p);render()}
function render(){
  seed();
  let u=user();
  if(document.querySelector('#nick'))document.querySelector('#nick').value=u.nick;
  if(document.querySelector('#role'))document.querySelector('#role').value=u.role;
  let emojiBox=document.querySelector('#emojiBox'); if(emojiBox)emojiBox.innerHTML=emojis.map(e=>`<button onclick="addEmoji('#body','${e}')">${e}</button>`).join('');
  let posts=load(KEY,[]);
  let q=(document.querySelector('#search')?.value||'').toLowerCase();
  let sort=document.querySelector('#sort')?.value||'recenti';
  posts=posts.filter(p=>(p.title+p.body+p.author).toLowerCase().includes(q));
  posts.sort((a,b)=>(b.pinned-a.pinned)||(sort==='like'?b.likes-a.likes:sort==='commenti'?b.comments.length-a.comments.length:0));
  let list=document.querySelector('#posts'); if(!list)return;
  list.innerHTML=posts.map(p=>`
    <article class="post ${p.pinned?'pinned':''} ${p.hidden?'hidden':''}">
      <div class="post-head"><span><strong>${esc(p.author)}</strong> · ${esc(p.date)} · <span class="badge">${esc(p.role)}</span>${p.pinned?' · 📌 fissato':''}${p.hidden?' · nascosto':''}</span><span>🚩 ${p.reports}</span></div>
      <h3>${esc(p.title)}</h3>
      <p>${esc(p.body)}</p>
      <div class="post-actions">
        <span class="action" onclick="like('${p.id}')">👍 ${p.likes}</span>
        <span class="action" onclick="editPost('${p.id}')">✏️ modifica</span>
        <span class="action" onclick="report('${p.id}')">🚩 segnala</span>
        <span class="action" onclick="pin('${p.id}')">📌 fissa</span>
        <span class="action" onclick="hidePost('${p.id}')">👁️ nascondi</span>
        <span class="action" onclick="removePost('${p.id}')">🗑️ elimina</span>
      </div>
      <div class="comments">
        ${p.comments.map(c=>`<div class="comment"><div class="comment-head"><strong>${esc(c.author)}</strong><span>${esc(c.date)}</span></div><div>${esc(c.body)}</div><div class="comment-actions"><span class="action" onclick="likeComment('${p.id}','${c.id}')">👍 ${c.likes}</span></div></div>`).join('')}
        <textarea id="reply-${p.id}" class="textarea" placeholder="Rispondi con emoticon 🔴🔵⚽"></textarea>
        <div class="row">${emojis.slice(0,10).map(e=>`<button class="btn small secondary" onclick="addEmoji('#reply-${p.id}','${e}')">${e}</button>`).join('')}<button class="btn small" onclick="reply('${p.id}')">Rispondi</button></div>
      </div>
    </article>`).join('');
}
document.addEventListener('DOMContentLoaded',render);
