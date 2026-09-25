// ── SHARED HEADER & FOOTER ──
// Single source of truth for the nav/header and footer markup used on every page.
// Edit here instead of copy-pasting into each HTML file.

const SITE_NAV_LINKS = [
  { href: 'food.html', label: 'Food' },
  { href: 'community.html', label: 'Community' },
  { href: 'people.html', label: 'People' },
  { href: 'vegan-kit.html', label: 'Vegan Kit' },
  { href: 'vegan-map.html', label: 'Vegan Map' },
  { href: 'vegan-finder.html', label: 'Vegan Finder' },
  { href: 'hire-a-vegan.html', label: 'Hire a Vegan' },
];

// Portuguese labels for the header and footer, applied when the visitor switches language (see applySiteChromeLang).
const SITE_NAV_PT = {
  'food.html': 'Comida', 'community.html': 'Comunidade', 'people.html': 'Pessoas',
  'vegan-kit.html': 'Kit Vegano', 'vegan-map.html': 'Mapa Vegano', 'vegan-finder.html': 'Buscador Vegano',
  'hire-a-vegan.html': 'Contrate Um Vegano', 'contribute.html': 'Contribua', 'about.html': 'Sobre',
};
const SITE_FOOTER_PT = {
  'food.html': 'Coma & Beba', 'community.html': 'Comunidade', 'people.html': 'Pessoas',
  'vegan-kit.html': 'Kit Vegano', 'vegan-map.html': 'Mapa Vegano', 'vegan-finder.html': 'Buscador Vegano',
  'hire-a-vegan.html': 'Contrate Um Vegano',
};

// Portuguese browser-tab titles, keyed by page file name (without .html). The English title is read from the page itself.
const SITE_TITLE_PT = {
  'index': 'Brisbane Vegan Guide — Restaurantes Veganos, Cafés e Comunidade',
  'food': 'Restaurantes e Cafés Veganos em Brisbane | Brisbane Vegan Guide',
  'community': 'Grupos da Comunidade Vegana em Brisbane | Brisbane Vegan Guide',
  'people': 'Vozes e Ativistas Veganos em Brisbane | Brisbane Vegan Guide',
  'vegan-kit': 'Kit Vegano: Veganismo Simplificado | Brisbane Vegan Guide',
  'vegan-map': 'Mapa Vegano de Brisbane | Brisbane Vegan Guide',
  'vegan-finder': 'Buscador Vegano: onde comer vegano em Brisbane | Brisbane Vegan Guide',
  'hire-a-vegan': 'Contrate Um Vegano em Brisbane | Brisbane Vegan Guide',
  'contribute': 'Contribua e Apoie | Brisbane Vegan Guide',
  'about': 'Sobre o Projeto | Brisbane Vegan Guide',
  '404': 'Página não encontrada | Brisbane Vegan Guide',
  'archie-am-pm': 'Archie AM:PM — Bistrô-Café Plant-Based em Carseldine',
  'cardamom-pod': 'Cardamom Pod Brickworks — Café Vegano na Gold Coast',
  'nurcha': 'Nurcha — Café Vegano e Loja na Sunshine Coast | Brisbane Vegan Guide',
  'jr-vegan-thai': 'JR Vegan Thai — Tailandês Vegano em Nambour | Brisbane Vegan Guide',
  'kindest-cakery': 'Kindest Cakery — Padaria Vegana Sem Glúten, Sunshine Coast',
  'kindest-kitchen': 'Kindest Kitchen — Refeições Veganas Congeladas, Sunshine Coast',
  'rosebed-and-finch': 'Rosebed & Finch — Café Vegano Cru e Sem Glúten em Eudlo',
  'tian-ran': 'Tian Ran — Restaurante Vegano Chinês em Mermaid Beach',
  'jing-si-books-and-cafe': 'Jing Si Books & Cafe — Café Vegano e Livraria em Salisbury',
  'charlies-raw-squeeze': "Charlie's Raw Squeeze — Suco Bar Vegano | Brisbane Vegan Guide",
  'dickis': "Dicki's — Café Vegano em New Farm | Brisbane Vegan Guide",
  'doko-demo-v': 'Doko Demo V — Restaurante Asiático Vegano na Gold Coast',
  'el-planta': 'El Planta — Restaurante Mexicano em South Brisbane',
  'grassfed': 'GrassFed — Trailer de Hambúrguer Vegano | Brisbane Vegan Guide',
  'greenhouse-canteen': 'Greenhouse Canteen — Restaurante e Bar na Gold Coast',
  'izakaya-midori': 'Izakaya Midori — Restaurante Japonês Vegano na Gold Coast',
  'loving-hut': 'Loving Hut — Fusão Vegana, Mount Gravatt | Brisbane Vegan Guide',
  'made-with-love-bakery': 'Made With Love Bakery — Padaria Vegana na Gold Coast',
  'neon-ramen': 'Neon Ramen — Ramen Bar Vegano em Everton Park',
  'piante-pizza':'Piante Pizza — Pizza Vegana Itinerante | Brisbane Vegan Guide',
  'pippas-pantry': "Pippa's Pantry — Loja de Bolos Veganos em Camp Hill",
  'the-green-edge': 'The Green Edge — Bistrô · Café · Deli em Windsor',
  'plant-baked': 'Plant Baked — Sobremesas Veganas Sem Glúten por Atacado',
  'sweet-nectar': 'Sweet Nectar — Sobremesas Veganas Integrais por Atacado',
  'u-tong': 'U-Tong — Tailandês Vegano em Clayfield | Brisbane Vegan Guide',
  'vega-cafe': 'Vega Cafe — Café Vegano · Cozinha Tailandesa em Spring Hill',
  'vegan-restaurant': 'Vegan Restaurant — Chinês Vegano em West End',
  'veganyumm': 'Veganyumm — Padaria Vegana em Everton Park | Brisbane Vegan Guide',
  'vegerama': 'Vege Rama — Buffet Vegetariano na Adelaide Street, CBD',
  'yavanna': 'Yavanna (Encerrado) — Restaurante e Bar Plant-Based em Paddington',
  'you-came-again': 'You Came Again (Encerrado) — Bar de Tapas Vegano em West End',
};

const SITE_INSTAGRAM_SVG ='<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/></svg>';

// Same pages as the hero index on the home page, same numbering/labels.
const SITE_FOOTER_NAV = [
  { href: 'food.html', label: 'Eat & Drink' },
  { href: 'community.html', label: 'Community' },
  { href: 'people.html', label: 'People' },
  { href: 'vegan-kit.html', label: 'Vegan Kit' },
  { href: 'vegan-map.html', label: 'Vegan Map' },
  { href: 'vegan-finder.html', label: 'Vegan Finder' },
  { href: 'hire-a-vegan.html', label: 'Hire a Vegan' },
];

// Public (no auth needed) CounterAPI "up" endpoint — safe to call directly from the browser.
const SITE_VISIT_COUNTER_URL = 'https://api.counterapi.dev/v2/jvlioczars-team-5564/first-counter-5564/up';

function renderSiteHeader(activeHref) {
  const aboutActive = activeHref === 'about.html' ? ' class="active"' : '';
  const contributeActive = activeHref === 'contribute.html' ? ' class="active"' : '';
  const navLink = (l) => `<a href="${l.href}" data-nav="${l.href}"${l.href === activeHref ? ' class="active"' : ''}>${l.label}</a>`;
  const centerLinks = SITE_NAV_LINKS.map(navLink).join('\n      ');
  const mobileLinks = SITE_NAV_LINKS.map(navLink).join('\n    ');

  let isFirstVisit = false;
  try {
    isFirstVisit = !localStorage.getItem('bvgVisited');
    localStorage.setItem('bvgVisited', '1');
  } catch (e) { /* localStorage unavailable (private mode, etc.) — just skip the animation */ }

  const logoInner = isFirstVisit
    ? `<span class="logo-word">B</span><span class="logo-collapse">risbane</span><span class="logo-space"> </span><span class="logo-word">V</span><span class="logo-collapse">egan</span><span class="logo-space"> </span><span class="logo-word">G</span><span class="logo-collapse">uide</span>`
    : `<span class="logo-word">B</span><span class="logo-word">V</span><span class="logo-word">G</span>`;

  if (isFirstVisit) {
    setTimeout(() => {
      document.querySelectorAll('.logo-collapse').forEach((el) => el.classList.add('collapsed'));
      document.querySelectorAll('.logo-space').forEach((el) => el.classList.add('collapsed'));
    }, 2400);
  }

  return `<a href="#main-content" class="skip-link" id="skipLink">Skip to content</a>
  <nav class="nav" id="navbar" aria-label="Main">
    <a href="index.html" class="nav-logo">
      <img class="logo-pin" src="icon-bvg.svg" width="18" height="18" alt="">
      ${logoInner}
    </a>
    <div class="nav-center">
      ${centerLinks}
    </div>
    <div class="nav-right">
      <div class="nav-meta">
        <a href="contribute.html" data-nav="contribute.html"${contributeActive}>Contribute</a>
        <a href="about.html" data-nav="about.html"${aboutActive}>About</a>
        <a href="https://instagram.com/brisbaneveg" target="_blank" rel="noopener" title="Instagram" style="display:inline-flex;align-items:center;">${SITE_INSTAGRAM_SVG}</a>
      </div>
      <button class="hamburger" id="hamburger" onclick="toggleMenu()" aria-label="Menu" aria-expanded="false" aria-controls="mobileMenu"><span></span><span></span><span></span></button>
      <button class="lang-btn" id="langBtn" onclick="toggleLang()" aria-label="Switch language (EN/PT)">PT</button>
    </div>
  </nav>
  <div class="nav-overlay" id="navOverlay" onclick="toggleMenu()"></div>
  <div class="mobile-menu" id="mobileMenu">
    ${mobileLinks}
    <div class="mobile-menu-sep"></div>
    <a href="contribute.html" data-nav="contribute.html"${contributeActive}>Contribute</a>
    <a href="about.html" data-nav="about.html"${aboutActive}>About</a>
    <a href="https://instagram.com/brisbaneveg" target="_blank" rel="noopener">${SITE_INSTAGRAM_SVG} Instagram</a>
  </div>`;
}

function renderSiteFooter() {
  setTimeout(initSiteVisitCounter, 0);
  const navLinks = SITE_FOOTER_NAV.map((l, i) =>
    `<a href="${l.href}" data-foot="${l.href}"><span class="footer-nav-num">${i + 1}</span> <span class="footer-nav-label">${l.label}</span></a>`
  ).join('\n      ');

  return `<footer class="footer">
    <div class="footer-nav">
      ${navLinks}
    </div>
    <div class="footer-animals">
      <span>🐄</span><span>🐖</span><span>🐔</span><span>🐑</span><span>🐇</span><span>🐟</span><span>🐝</span><span>🦐</span>
    </div>
    <div class="footer-tagline" data-i18n="footer.tagline">A better world for the animals.</div>
    <div class="footer-credit">
      <span>© 2026 Brisbane Vegan Guide</span>
      <span class="sep">|</span>
      <a href="privacy.html" data-i18n="footer.privacy">Privacy Policy</a>
      <span class="sep">|</span>
      <span id="footerVisits" style="display:none;">🐾 <span id="siteVisitCount">···</span> <span id="footerVisitsLabel">visits</span></span>
      <span class="sep" id="footerVisitsSep" style="display:none;">|</span>
      <span><span data-i18n="footer.created">Created by</span> <a href="https://www.instagram.com/sencientista" target="_blank" rel="noopener">Julio Cesar Prava</a></span>
    </div>
  </footer>`;
}

function initSiteVisitCounter() {
  const wrap = document.getElementById('footerVisits');
  const sep = document.getElementById('footerVisitsSep');
  const countEl = document.getElementById('siteVisitCount');
  if (!wrap || !countEl) return;

  fetch(SITE_VISIT_COUNTER_URL)
    .then((res) => res.json())
    .then((json) => {
      const count = json && json.data && json.data.up_count;
      if (typeof count !== 'number') throw new Error('Unexpected response');
      countEl.dataset.count = count;
      countEl.textContent = count.toLocaleString(document.documentElement.lang === 'pt' ? 'pt-BR' : 'en-US');
      wrap.style.display = '';
      sep.style.display = '';
    })
    .catch(() => {
      wrap.style.display = 'none';
      sep.style.display = 'none';
    });
}

function toggleMenu() {
  document.getElementById('hamburger').classList.toggle('open');
  document.getElementById('mobileMenu').classList.toggle('open');
  document.getElementById('navOverlay').classList.toggle('open');
  const menuOpen = document.getElementById('mobileMenu').classList.contains('open');
  document.getElementById('hamburger').setAttribute('aria-expanded', menuOpen ? 'true' : 'false');
  document.body.style.overflow = menuOpen ? 'hidden' : '';
}

document.addEventListener('click', (e) => {
  const link = e.target.closest('#mobileMenu a');
  if (link && window.innerWidth <= 768) toggleMenu();
});

window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (navbar) navbar.classList.toggle('scrolled', window.scrollY > 40);
});

// ── BACK TO TOP ──
function initBackToTop() {
  if (document.getElementById('backToTop')) return;
  const btn = document.createElement('button');
  btn.id = 'backToTop';
  btn.className = 'back-to-top';
  btn.setAttribute('aria-label', 'Back to top');
  btn.innerHTML = '<svg width="18" height="18" viewBox="0 0 16 16" fill="none"><path d="M8 12.5V3.5M3.5 8L8 3.5 12.5 8" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  document.body.appendChild(btn);
  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 500);
  });
}
document.addEventListener('DOMContentLoaded', initBackToTop);

// ── SHARE BUTTON ──
// Uses the native share sheet where available (mobile browsers, some desktop ones);
// otherwise copies the page link to the clipboard and shows a small confirmation toast.
function initShareButton() {
  if (document.getElementById('shareBtn')) return;
  const btn = document.createElement('button');
  btn.id = 'shareBtn';
  btn.className = 'share-fab';
  btn.setAttribute('aria-label', 'Share this page');
  btn.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.6" y1="10.6" x2="15.4" y2="6.4"/><line x1="8.6" y1="13.4" x2="15.4" y2="17.6"/></svg>';
  btn.addEventListener('click', shareCurrentPage);
  document.body.appendChild(btn);
}

function shareCurrentPage() {
  const pt = document.documentElement.lang === 'pt';
  const url = location.href;
  if (navigator.share) {
    navigator.share({ title: document.title, url }).catch(() => { /* user cancelled the share sheet — nothing to do */ });
    return;
  }
  const onCopied = () => showShareToast(pt ? 'Link copiado!' : 'Link copied!');
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(url).then(onCopied).catch(() => fallbackCopyLink(url, onCopied));
  } else {
    fallbackCopyLink(url, onCopied);
  }
}

function fallbackCopyLink(url, onDone) {
  try {
    const ta = document.createElement('textarea');
    ta.value = url;
    ta.style.cssText = 'position:fixed;opacity:0;pointer-events:none';
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
    onDone();
  } catch (e) { /* clipboard unavailable — fail silently rather than throw */ }
}

function showShareToast(message) {
  let toast = document.getElementById('shareToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'shareToast';
    toast.className = 'share-toast';
    toast.setAttribute('role', 'status');
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add('visible');
  clearTimeout(toast._hideTimer);
  toast._hideTimer = setTimeout(() => toast.classList.remove('visible'), 2200);
}
document.addEventListener('DOMContentLoaded', initShareButton);

// Translate the shared header and footer (each page only translates its own content).
function applySiteChromeLang(lang) {
  const pt = lang === 'pt';
  document.querySelectorAll('[data-nav]').forEach((a) => {
    const href = a.dataset.nav;
    if (!a.dataset.en) a.dataset.en = a.textContent;
    a.textContent = pt ? SITE_NAV_PT[href] : a.dataset.en;
  });
  document.querySelectorAll('[data-foot]').forEach((a) => {
    const label = a.querySelector('.footer-nav-label');
    if (!label) return;
    if (!label.dataset.en) label.dataset.en = label.textContent;
    label.textContent = pt ? SITE_FOOTER_PT[a.dataset.foot] : label.dataset.en;
  });
  // Browser-tab title (the page's own English <title> is restored when switching back)
  const pageKey = (location.pathname.split('/').pop() || 'index').replace(/\.html$/, '') || 'index';
  if (!window._siteEnTitle) window._siteEnTitle = document.title;
  if (SITE_TITLE_PT[pageKey]) document.title = pt ? SITE_TITLE_PT[pageKey] : window._siteEnTitle;
  const visitsLabel = document.getElementById('footerVisitsLabel');
  if (visitsLabel) visitsLabel.textContent = pt ? 'visitas' : 'visits';
  const visitCount = document.getElementById('siteVisitCount');
  if (visitCount && visitCount.dataset.count) visitCount.textContent = Number(visitCount.dataset.count).toLocaleString(pt ? 'pt-BR' : 'en-US');
  const fieldLabels = { contentFilter: ['Filter by content', 'Filtrar por conteúdo'], categoryFilter: ['Filter by category', 'Filtrar por categoria'] };
  Object.keys(fieldLabels).forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.setAttribute('aria-label', fieldLabels[id][pt ? 1 : 0]);
  });
  const skip = document.getElementById('skipLink');
  if (skip) skip.textContent = pt ? 'Pular para o conteúdo' : 'Skip to content';
  const langBtn = document.getElementById('langBtn');
  if (langBtn) langBtn.setAttribute('aria-label', pt ? 'Mudar idioma (EN/PT)' : 'Switch language (EN/PT)');
  const backToTop = document.getElementById('backToTop');
  if (backToTop) backToTop.setAttribute('aria-label', pt ? 'Voltar ao topo' : 'Back to top');
  const shareBtn = document.getElementById('shareBtn');
  if (shareBtn) shareBtn.setAttribute('aria-label', pt ? 'Compartilhar esta página' : 'Share this page');
}

// Keep <html lang> in sync with the EN/PT toggle (screen readers, translation tools, language signal),
// translate the shared header/footer at the same time, and remember the choice across pages.
const SITE_LANG_STORAGE_KEY = 'bvgLang';
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('langBtn');
  if (!btn) return;
  applySiteChromeLang('en');
  new MutationObserver(() => {
    const lang = btn.textContent.trim() === 'EN' ? 'pt' : 'en';
    document.documentElement.lang = lang;
    applySiteChromeLang(lang);
    try { localStorage.setItem(SITE_LANG_STORAGE_KEY, lang); } catch (e) { /* private mode / storage disabled — just don't persist */ }
  }).observe(btn, { childList: true, characterData: true, subtree: true });
  // Restore the visitor's last language choice (each page defaults to English otherwise)
  try {
    if (localStorage.getItem(SITE_LANG_STORAGE_KEY) === 'pt' && typeof window.toggleLang === 'function') {
      window.toggleLang();
    }
  } catch (e) { /* private mode / storage disabled — page just stays in English */ }
});

// ── RATING CONFIDENCE TOOLTIP ──
// Any element with data-conf-votes="<total reviews>" shows the rating's Review Confidence on hover/focus/tap.
// Same curve as the Final Rating formula: 0.99 * (1 - ((5000 - n) / 5000)^4), capped at 99% from 5,000 reviews.
function bvgConfidence(n) {
  n = Number(n) || 0;
  if (n <= 0) return 0;
  if (n >= 5000) return 99;
  return 99 * (1 - Math.pow((5000 - n) / 5000, 4));
}
(function () {
  let tip = null, current = null;
  function build(el) {
    const pt = document.documentElement.lang === 'pt';
    const n = Number(el.getAttribute('data-conf-votes')) || 0;
    const pct = bvgConfidence(n).toFixed(2);
    const num = n.toLocaleString(pt ? 'pt-BR' : 'en-AU');
    if (pt) return '<strong>Confiança da nota: ' + pct.replace('.', ',') + '%</strong><span>Com base em ' + num + (n === 1 ? ' avaliação' : ' avaliações') + '. Quanto mais avaliações, mais confiável a nota.</span>';
    return '<strong>Rating confidence: ' + pct + '%</strong><span>Based on ' + num + (n === 1 ? ' review' : ' reviews') + '. The more reviews, the more reliable the score.</span>';
  }
  function show(el) {
    if (!tip) { tip = document.createElement('div'); tip.className = 'conf-tip-bubble'; tip.setAttribute('role', 'tooltip'); document.body.appendChild(tip); }
    current = el;
    tip.innerHTML = build(el);
    tip.classList.add('visible');
    const r = el.getBoundingClientRect(), w = tip.offsetWidth, h = tip.offsetHeight;
    let left = r.left + r.width / 2 - w / 2;
    left = Math.max(8, Math.min(left, document.documentElement.clientWidth - w - 8));
    let top = r.top - h - 10;
    if (top < 8) top = r.bottom + 10;
    tip.style.left = left + 'px';
    tip.style.top = top + 'px';
  }
  function hide() { if (tip) tip.classList.remove('visible'); current = null; }
  function target(e) { return e.target && e.target.closest ? e.target.closest('[data-conf-votes]') : null; }
  document.addEventListener('mouseover', e => { const el = target(e); if (el && el !== current) show(el); });
  document.addEventListener('mouseout', e => { const el = target(e); if (el && !(e.relatedTarget && el.contains(e.relatedTarget))) hide(); });
  document.addEventListener('focusin', e => { const el = target(e); if (el) show(el); });
  document.addEventListener('focusout', e => { if (target(e)) hide(); });
  document.addEventListener('click', e => { const el = target(e); if (el) { if (current === el && tip && tip.classList.contains('visible') && e.detail === 0) hide(); else show(el); } else hide(); });
  window.addEventListener('scroll', hide, { passive: true });
})();
