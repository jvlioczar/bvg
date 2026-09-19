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
      <img class="logo-pin" src="icon-bvg.svg" width="18" height="18" alt="BVG">
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
  const visitsLabel = document.getElementById('footerVisitsLabel');
  if (visitsLabel) visitsLabel.textContent = pt ? 'visitas' : 'visits';
  const visitCount = document.getElementById('siteVisitCount');
  if (visitCount && visitCount.dataset.count) visitCount.textContent = Number(visitCount.dataset.count).toLocaleString(pt ? 'pt-BR' : 'en-US');
  const skip = document.getElementById('skipLink');
  if (skip) skip.textContent = pt ? 'Pular para o conteúdo' : 'Skip to content';
  const langBtn = document.getElementById('langBtn');
  if (langBtn) langBtn.setAttribute('aria-label', pt ? 'Mudar idioma (EN/PT)' : 'Switch language (EN/PT)');
}

// Keep <html lang> in sync with the EN/PT toggle (screen readers, translation tools, language signal)
// and translate the shared header/footer at the same time.
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('langBtn');
  if (!btn) return;
  new MutationObserver(() => {
    const lang = btn.textContent.trim() === 'EN' ? 'pt' : 'en';
    document.documentElement.lang = lang;
    applySiteChromeLang(lang);
  }).observe(btn, { childList: true, characterData: true, subtree: true });
});
