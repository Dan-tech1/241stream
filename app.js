/* ===== Utils ===== */
const qs = (s,r=document)=>r.querySelector(s);
const qsa = (s,r=document)=>[...r.querySelectorAll(s)];

/* ===== Cards ===== */
function cardTemplate(item, index, opts={}) {
  const rankBadge = opts.showRank ? `<div class="badge">${index+1}</div>` : "";
  const flag = item.flags?.new ? '<div class="badge-flag">NOUVEAU</div>' :
               item.flags?.top ? '<div class="badge-flag">TOP</div>' : "";
  // Si c'est une série/anime avec épisodes, on stocke JSON, sinon embed normal
  const embedData = item.episodes ? JSON.stringify(item.episodes) : item.embed;
  return `
    <article class="card" role="button" tabindex="0"
      data-title="${encodeURIComponent(item.title)}"
      data-embed='${encodeURIComponent(embedData)}'
      data-desc="${encodeURIComponent(item.desc||'')}">
      ${rankBadge}${flag}
      <img class="thumb" alt="${item.title}" src="${item.thumb}">
      <div class="card-title">${item.title}</div>
    </article>
  `;
}

/* ===== Row Renderer ===== */
function renderRow(container, items, opts={}) {
  container.innerHTML = `
    <button class="nav-btn nav-prev" aria-label="Précédent"><ion-icon name="chevron-back-outline"></ion-icon></button>
    <div class="scroller">${items.map((it,i)=>cardTemplate(it,i,opts)).join('')}</div>
    <button class="nav-btn nav-next" aria-label="Suivant"><ion-icon name="chevron-forward-outline"></ion-icon></button>
  `;

  const scroller = qs('.scroller',container);

  // Click & keyboard
  scroller.addEventListener('click', e=>{
    const card = e.target.closest('.card');
    if(card) openPopupFromCard(card);
  });
  scroller.addEventListener('keydown', e=>{
    const card = e.target.closest('.card');
    if(!card) return;
    if(e.key==='Enter'||e.key===' ') { e.preventDefault(); openPopupFromCard(card);}
  });

  // Navigation buttons
  const step = ()=>Math.round(container.clientWidth*0.9);
  qs('.nav-prev',container).addEventListener('click', ()=>scroller.scrollBy({left:-step(),behavior:'smooth'}));
  qs('.nav-next',container).addEventListener('click', ()=>scroller.scrollBy({left:step(),behavior:'smooth'}));
}

/* ===== Popup ===== */
function openPopupFromCard(card){
  const title = decodeURIComponent(card.dataset.title);
  const desc  = decodeURIComponent(card.dataset.desc||"");
  const embedData = decodeURIComponent(card.dataset.embed);

  const overlay = document.createElement('div');
  overlay.className='overlay';
  overlay.innerHTML = `
    <div class="modal" role="dialog" aria-modal="true" aria-label="${title}">
      <button class="modal-close" aria-label="Fermer">&times;</button>
      <div class="modal-header"><div class="modal-title">${title}</div></div>
      <div class="modal-body">
        <div class="modal-desc">${desc}</div>
      </div>
    </div>
  `;
  document.body.appendChild(overlay);
  document.body.style.overflow='hidden';

  const close = ()=>{ overlay.remove(); document.body.style.overflow=''; };
  qs('.modal-close',overlay).addEventListener('click', close);
  overlay.addEventListener('click', e=>{ if(e.target===overlay) close(); });
  window.addEventListener('keydown', function onEsc(e){ if(e.key==='Escape'){ close(); window.removeEventListener('keydown',onEsc); }});

  let playerHTML = '';

  try {
    const episodes = JSON.parse(embedData);
    if(Array.isArray(episodes) && episodes.length>0){
      // Série/anime multi-épisodes
      playerHTML = `
        <div class="episode-list">
          ${episodes.map((ep,i)=>`<button class="ep-btn" data-embed="${ep.embed}">${ep.title}</button>`).join('')}
        </div>
        <div class="modal-player" id="player-zone">
          <p>Sélectionnez un épisode pour lancer la vidéo</p>
        </div>
      `;
    } else {
      // Film / anime solo
      playerHTML = `<div class="modal-player" id="player-zone">
        <button class="play-btn" id="play-now">▶ Lire la vidéo</button>
      </div>`;
    }
  } catch(e){
    // Film / anime solo
    playerHTML = `<div class="modal-player" id="player-zone">
      <button class="play-btn" id="play-now">▶ Lire la vidéo</button>
    </div>`;
  }

  qs('.modal-body', overlay).innerHTML += playerHTML;

  // Clic sur épisode
  qsa('.ep-btn', overlay).forEach(btn => {
    btn.addEventListener('click', ()=>{
      const epEmbed = btn.dataset.embed;
      qs('#player-zone', overlay).innerHTML = `<iframe src="${epEmbed}" allowfullscreen allow="autoplay" style="width:100%;height:360px;border:0;border-radius:12px;"></iframe>`;
    });
  });

  // Clic sur play now (films/animes)
  const playBtn = qs('#play-now', overlay);
  if(playBtn){
    playBtn.addEventListener('click', ()=>{
      qs('#player-zone', overlay).innerHTML = `<iframe src="${embedData}" allowfullscreen allow="autoplay" style="width:100%;height:360px;border:0;border-radius:12px;"></iframe>`;
    }, {once:true});
  }
}

/* ===== Search ===== */
function setupSearch(scope=document){
  const form = qs('.search-form',scope);
  if(!form) return;
  const input = form.querySelector('input[name="q"]');

  const filter = ()=>{
    const q = (input.value||'').trim().toLowerCase();
    qsa('.card',scope).forEach(c=>{
      const t = decodeURIComponent(c.dataset.title||'').toLowerCase();
      const show = !q || t.includes(q);
      c.style.display = show?'':'none';
    });
  };
  form.addEventListener('submit', e=>{ e.preventDefault(); filter(); });
  input.addEventListener('input', filter);
}

/* ===== Menu mobile ===== */
function setupMenu(){
  const btn = qs('.menu-toggle');
  const list = qs('.nav-links ul');
  if(!btn||!list) return;
  btn.addEventListener('click', ()=>list.classList.toggle('show'));
}

/* ===== Page Builder ===== */
function buildHome(){
  const allItems = [...DATA.films,...DATA.series,...DATA.animes];
  const top10 = allItems.filter(x=>x.flags?.top).slice(0,10);
  const news = allItems.filter(x=>x.flags?.new).slice(0,12);
  const recos = allItems.slice(0,18);

  renderRow(qs('#row-top10'), top10, {showRank:true});
  renderRow(qs('#row-news'), news);
  renderRow(qs('#row-recos'), recos);
}

/* ===== Init ===== */
window.addEventListener('DOMContentLoaded', ()=>{
  setupMenu();
  setupSearch();
  if(document.body.dataset.page==='home') buildHome();
});


document.addEventListener("contextmenu", function(e){
    e.preventDefault();
    alert("Le clic droit est désactivé sur ce site.");
}, false);

// Bloquer certaines touches (F12, Ctrl+U, Ctrl+Shift+I)
document.onkeydown = function(e) {
    if (e.keyCode == 123) { // F12
        return false;
    }
    if (e.ctrlKey && e.shiftKey && (e.keyCode == 73 || e.keyCode == 74)) { // Ctrl+Shift+I ou J
        return false;
    }
    if (e.ctrlKey && e.keyCode == 85) { // Ctrl+U
        return false;
    }
};