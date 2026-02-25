/* ═══════════════════════════════════════════
   241stream — app.js v2.0 (Premium)
   Modern streaming UI engine
   ═══════════════════════════════════════════ */

const qs = (s, r = document) => r.querySelector(s);
const qsa = (s, r = document) => [...r.querySelectorAll(s)];

/* ===== Card Template (Premium) ===== */
function cardTemplate(item, index, opts = {}) {
  const rankBadge = opts.showRank
    ? `<div class="absolute top-2.5 left-2.5 z-10 w-8 h-8 bg-[#facc15] text-[#0a0a0c] font-extrabold text-sm rounded-full flex items-center justify-center shadow-lg">${index + 1}</div>`
    : "";

  const flag = item.flags?.new
    ? '<div class="absolute top-2.5 right-2.5 z-10 px-2.5 py-1 rounded-lg text-xs font-black text-white shadow-lg bg-gradient-to-r from-[#6366f1] to-[#818cf8]">NOUVEAU</div>'
    : item.flags?.top
    ? '<div class="absolute top-2.5 right-2.5 z-10 px-2.5 py-1 rounded-lg text-xs font-black text-white shadow-lg bg-gradient-to-r from-red-600 to-red-500">TOP</div>'
    : "";

  const hdBadge = '<div class="absolute top-2.5 right-2.5 z-10 px-2 py-0.5 rounded text-[10px] font-bold text-white/80 bg-white/10 backdrop-blur-sm border border-white/10" style="' + (item.flags?.new || item.flags?.top ? 'top:42px' : '') + '">HD</div>';

  const embedData = item.episodes ? JSON.stringify(item.episodes) : item.embed;

  return `
    <article class="stagger-child relative bg-[#1a1a20] rounded-2xl overflow-hidden shadow-[0_4px_18px_rgba(0,0,0,.6)] cursor-pointer transform transition-all duration-[400ms] ease-out hover:scale-105 hover:-translate-y-1.5 hover:shadow-[0_12px_40px_rgba(0,0,0,.85)] group/card flex-shrink-0 w-[170px] sm:w-[185px] snap-start"
      role="button" tabindex="0"
      data-title="${encodeURIComponent(item.title)}"
      data-embed='${encodeURIComponent(embedData)}'
      data-desc="${encodeURIComponent(item.desc || "")}">
      ${rankBadge}${flag}
      <div class="relative overflow-hidden">
        <img class="w-full h-[240px] sm:h-[260px] object-cover block brightness-[.92] group-hover/card:brightness-100 transition-all duration-300 group-hover/card:scale-110" 
             alt="${item.title}" 
             src="${item.thumb}" 
             loading="lazy">
        <!-- Hover overlay with play button -->
        <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-end p-3">
          <span class="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#facc15] text-[#0a0a0c] text-xs font-bold rounded-full transform translate-y-3 group-hover/card:translate-y-0 transition-all duration-300 shadow-[0_0_20px_rgba(250,204,21,.15)] mb-1">
            <ion-icon name="play-circle-outline"></ion-icon> Regarder
          </span>
        </div>
      </div>
      <div class="p-2 pt-1.5">
        <p class="font-semibold text-[0.78rem] text-center text-[#f5f5f5] line-clamp-2 leading-tight">${item.title}</p>
      </div>
    </article>
  `;
}

/* ===== Row Renderer (Premium) ===== */
function renderRow(container, items, opts = {}) {
  if (!container || !items || !items.length) return;

  container.innerHTML = `
    <button class="absolute left-1 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/60 backdrop-blur-sm text-white border border-white/10 flex items-center justify-center hover:bg-[#facc15] hover:text-[#0a0a0c] hover:border-[#facc15] transition-all duration-300 opacity-0 group-hover:opacity-100 shadow-lg cursor-pointer" aria-label="Précédent">
      <ion-icon name="chevron-back-outline"></ion-icon>
    </button>
    <div class="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-3 px-1 scrollbar-hide scroll-smooth">
      ${items.map((it, i) => cardTemplate(it, i, opts)).join("")}
    </div>
    <button class="absolute right-1 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/60 backdrop-blur-sm text-white border border-white/10 flex items-center justify-center hover:bg-[#facc15] hover:text-[#0a0a0c] hover:border-[#facc15] transition-all duration-300 opacity-0 group-hover:opacity-100 shadow-lg cursor-pointer" aria-label="Suivant">
      <ion-icon name="chevron-forward-outline"></ion-icon>
    </button>
  `;

  const scroller = container.querySelector('.flex.gap-4');
  if (!scroller) return;

  // Click & keyboard on cards
  scroller.addEventListener("click", (e) => {
    const card = e.target.closest("article");
    if (card) openPopupFromCard(card);
  });
  scroller.addEventListener("keydown", (e) => {
    const card = e.target.closest("article");
    if (!card) return;
    if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openPopupFromCard(card); }
  });

  // Navigation
  const step = () => Math.round(container.clientWidth * 0.85);
  const buttons = container.querySelectorAll('button');
  if (buttons[0]) buttons[0].addEventListener("click", () => scroller.scrollBy({ left: -step(), behavior: "smooth" }));
  if (buttons[1]) buttons[1].addEventListener("click", () => scroller.scrollBy({ left: step(), behavior: "smooth" }));
}

/* ===== Popup (Premium Modal) ===== */
function openPopupFromCard(card) {
  const title = decodeURIComponent(card.dataset.title);
  const desc = decodeURIComponent(card.dataset.desc || "");
  const embedData = decodeURIComponent(card.dataset.embed);

  const overlay = document.createElement("div");
  overlay.className = "fixed inset-0 z-[1000] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4";
  overlay.style.animation = "fadeIn .3s ease-out";

  overlay.innerHTML = `
    <div class="bg-[#131317] w-full max-w-3xl rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,.9)] overflow-hidden relative max-h-[90vh] overflow-y-auto" style="animation:scaleIn .3s ease-out" role="dialog" aria-modal="true" aria-label="${title}">
      <button class="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-[#facc15] text-[#0a0a0c] flex items-center justify-center font-bold text-xl hover:bg-[#ffe84d] transition-all cursor-pointer" aria-label="Fermer">&times;</button>
      <div class="p-5 pb-2">
        <h3 class="font-bold text-lg text-[#f5f5f5] pr-12">${title}</h3>
        ${desc ? `<p class="text-[#a1a1aa] text-sm mt-2 leading-relaxed line-clamp-3">${desc}</p>` : ''}
      </div>
      <div class="px-5 pb-5 modal-body"></div>
    </div>
  `;

  document.body.appendChild(overlay);
  document.body.style.overflow = "hidden";

  const close = () => { overlay.remove(); document.body.style.overflow = ""; };
  overlay.querySelector("button").addEventListener("click", close);
  overlay.addEventListener("click", (e) => { if (e.target === overlay) close(); });
  window.addEventListener("keydown", function esc(e) {
    if (e.key === "Escape") { close(); window.removeEventListener("keydown", esc); }
  });

  let playerHTML = "";
  try {
    const episodes = JSON.parse(embedData);
    if (Array.isArray(episodes) && episodes.length > 0) {
      playerHTML = `
        <div class="flex flex-wrap gap-2 mb-4">
          ${episodes.map((ep) =>
            `<button class="ep-btn px-4 py-2 bg-[#1a1a20] text-[#f5f5f5] font-semibold text-sm rounded-xl border border-white/10 hover:bg-[#facc15] hover:text-[#0a0a0c] hover:border-[#facc15] transition-all duration-200 cursor-pointer" data-embed="${ep.embed}">${ep.title}</button>`
          ).join("")}
        </div>
        <div id="player-zone" class="aspect-video w-full bg-black/50 rounded-2xl flex items-center justify-center text-[#a1a1aa] text-sm">
          <p>Sélectionnez un épisode pour lancer la vidéo</p>
        </div>
      `;
    } else {
      playerHTML = `<div id="player-zone"><button class="play-btn inline-flex items-center gap-2 px-5 py-3 bg-[#facc15] text-[#0a0a0c] font-extrabold rounded-xl shadow-[0_0_20px_rgba(250,204,21,.15)] hover:bg-[#ffe84d] hover:shadow-[0_0_40px_rgba(250,204,21,.25)] transition-all duration-300 cursor-pointer transform hover:scale-105"><ion-icon name="play-outline"></ion-icon> Lire la vidéo</button></div>`;
    }
  } catch (e) {
    playerHTML = `<div id="player-zone"><button class="play-btn inline-flex items-center gap-2 px-5 py-3 bg-[#facc15] text-[#0a0a0c] font-extrabold rounded-xl shadow-[0_0_20px_rgba(250,204,21,.15)] hover:bg-[#ffe84d] hover:shadow-[0_0_40px_rgba(250,204,21,.25)] transition-all duration-300 cursor-pointer transform hover:scale-105"><ion-icon name="play-outline"></ion-icon> Lire la vidéo</button></div>`;
  }

  overlay.querySelector(".modal-body").innerHTML = playerHTML;

  // Episode clicks
  qsa(".ep-btn", overlay).forEach((btn) => {
    btn.addEventListener("click", () => {
      qsa(".ep-btn", overlay).forEach(b => { b.classList.remove("bg-[#facc15]", "text-[#0a0a0c]", "border-[#facc15]"); b.classList.add("bg-[#1a1a20]", "text-[#f5f5f5]"); });
      btn.classList.add("bg-[#facc15]", "text-[#0a0a0c]", "border-[#facc15]");
      btn.classList.remove("bg-[#1a1a20]", "text-[#f5f5f5]");
      qs("#player-zone", overlay).innerHTML = `<div class="aspect-video w-full bg-black rounded-2xl overflow-hidden"><iframe src="${btn.dataset.embed}" allowfullscreen allow="autoplay" class="w-full h-full border-0"></iframe></div>`;
    });
  });

  // Play button (films)
  const playBtn = qs(".play-btn", overlay);
  if (playBtn) {
    playBtn.addEventListener("click", () => {
      qs("#player-zone", overlay).innerHTML = `<div class="aspect-video w-full bg-black rounded-2xl overflow-hidden"><iframe src="${embedData}" allowfullscreen allow="autoplay" class="w-full h-full border-0"></iframe></div>`;
    }, { once: true });
  }
}

/* ===== Search (Premium) ===== */
function setupSearch(scope = document) {
  const form = qs(".search-form", scope);
  if (!form) return;
  const input = form.querySelector('input[name="q"]');

  const filter = () => {
    const q = (input.value || "").trim().toLowerCase();
    qsa("article[data-title]", scope).forEach((c) => {
      const t = decodeURIComponent(c.dataset.title || "").toLowerCase();
      const show = !q || t.includes(q);
      c.style.display = show ? "" : "none";
      if (show && q) c.style.animation = "fadeIn .3s ease-out";
    });
  };
  form.addEventListener("submit", (e) => { e.preventDefault(); filter(); });
  input.addEventListener("input", filter);
}

/* ===== Mobile Menu ===== */
function setupMenu() {
  const btn = qs("#menu-toggle");
  const menu = qs("#mobile-menu");
  if (!btn || !menu) return;
  btn.addEventListener("click", () => {
    const isOpen = !menu.classList.contains("hidden");
    menu.classList.toggle("hidden", isOpen);
    btn.querySelector("ion-icon").setAttribute("name", isOpen ? "menu-outline" : "close-outline");
  });
  // Close on link click
  qsa("a", menu).forEach(link => {
    link.addEventListener("click", () => menu.classList.add("hidden"));
  });
}

/* ===== Lazy Loading Observer ===== */
function setupLazyLoad() {
  if (!('IntersectionObserver' in window)) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
        }
        observer.unobserve(img);
      }
    });
  }, { rootMargin: '200px' });

  qsa('img[data-src]').forEach(img => observer.observe(img));
}

/* ===== Page Builders ===== */
function buildHome() {
  if (typeof DATA === 'undefined') return;
  const allItems = [...DATA.films, ...DATA.series, ...DATA.animes];
  const top10 = allItems.filter((x) => x.flags?.top).slice(0, 10);
  const news = allItems.filter((x) => x.flags?.new).slice(0, 12);
  const recos = allItems.slice(0, 18);

  renderRow(qs("#row-top10"), top10, { showRank: true });
  renderRow(qs("#row-news"), news);
  renderRow(qs("#row-recos"), recos);
}

function buildFilms() {
  if (typeof DATA === 'undefined') return;
  const films = DATA.films;
  renderRow(qs("#row-action"), films.filter(f => f.categorie === "action"));
  renderRow(qs("#row-horreur"), films.filter(f => f.categorie === "horreur"));
  renderRow(qs("#row-comedie"), films.filter(f => f.categorie === "comedie"));
  renderRow(qs("#row-films"), films, { showRank: true });
}

function buildSeries() {
  if (typeof DATA === 'undefined') return;
  const series = DATA.series;
  renderRow(qs("#row-series-action"), series.filter(s => s.categorie === "action"));
  renderRow(qs("#row-series-horreur"), series.filter(s => s.categorie === "horreur"));
  renderRow(qs("#row-series-comedie"), series.filter(s => s.categorie === "comedie"));
  renderRow(qs("#row-series"), series, { showRank: true });
}

function buildAnimes() {
  if (typeof DATA === 'undefined') return;
  const animes = DATA.animes;
  renderRow(qs("#row-animes-action"), animes.filter(a => a.categorie === "action"));
  renderRow(qs("#row-animes-horreur"), animes.filter(a => a.categorie === "horreur"));
  renderRow(qs("#row-animes-comedie"), animes.filter(a => a.categorie === "comedie"));
  renderRow(qs("#row-animes"), animes, { showRank: true });
}

/* ===== Init ===== */
window.addEventListener("DOMContentLoaded", () => {
  setupMenu();
  setupSearch();
  setupLazyLoad();

  const page = document.body.dataset.page;
  switch (page) {
    case "home": buildHome(); break;
    case "films": buildFilms(); break;
    case "series": buildSeries(); break;
    case "animes": buildAnimes(); break;
  }

  // Setup FAQ accordion if present
  qsa(".faq-question").forEach(btn => {
    btn.addEventListener("click", () => {
      const answer = btn.nextElementSibling;
      const icon = btn.querySelector("ion-icon");
      const isOpen = answer.style.maxHeight && answer.style.maxHeight !== "0px";
      
      // Close all
      qsa(".faq-answer").forEach(a => { a.style.maxHeight = "0px"; a.style.opacity = "0"; });
      qsa(".faq-question ion-icon").forEach(i => i.style.transform = "rotate(0)");
      
      if (!isOpen) {
        answer.style.maxHeight = answer.scrollHeight + "px";
        answer.style.opacity = "1";
        if (icon) icon.style.transform = "rotate(180deg)";
      }
    });
  });
});
