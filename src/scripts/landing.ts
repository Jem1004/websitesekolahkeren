/**
 * Landing-page interactivity.
 *
 * Bundled by Astro as a single hashed module, deferred by default.
 * Every effect is a progressive enhancement — the page is fully readable
 * and crawlable without any of this running.
 */

// ── Navbar scroll state ────────────────────────────────────────────────
const nav = document.getElementById('nav');
const onScroll = () => {
  if (!nav) return;
  if (window.scrollY > 12) nav.classList.add('scrolled');
  else nav.classList.remove('scrolled');
};
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// ── Mobile menu ────────────────────────────────────────────────────────
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
navToggle?.addEventListener('click', () => {
  if (!navMenu) return;
  const open = navMenu.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(open));
});
navMenu?.querySelectorAll('a').forEach((a) =>
  a.addEventListener('click', () => {
    navMenu.classList.remove('open');
    navToggle?.setAttribute('aria-expanded', 'false');
  }),
);

// ── Reveal on scroll ───────────────────────────────────────────────────
// IntersectionObserver is supported in every browser we care about. Fall back
// to immediately revealing if it's missing, so the page never gets stuck blank.
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
  );
  document.querySelectorAll('.reveal').forEach((el) => io.observe(el));
} else {
  document.querySelectorAll('.reveal').forEach((el) => el.classList.add('in'));
}

// ── Template grid filter ───────────────────────────────────────────────
// CSS does the actual hiding via the [data-active-filter] attribute on the
// grid root; this script only swaps the attribute and toggles `.active` on
// the buttons. Keeps logic minimal and ensures filter state is purely visual.
const tplGrid = document.getElementById('tplGrid');
const tplFilters = document.querySelectorAll<HTMLButtonElement>('.tpl-filter');
tplFilters.forEach((btn) => {
  btn.addEventListener('click', () => {
    const key = btn.dataset.filter;
    if (!key || !tplGrid) return;
    tplGrid.setAttribute('data-active-filter', key);
    tplFilters.forEach((other) => {
      const isActive = other === btn;
      other.classList.toggle('active', isActive);
      other.setAttribute('aria-selected', String(isActive));
    });
  });
});

// ── FAQ: only one open at a time ───────────────────────────────────────
document.querySelectorAll<HTMLDetailsElement>('.faq-item').forEach((item) => {
  item.addEventListener('toggle', () => {
    if (item.open) {
      document.querySelectorAll<HTMLDetailsElement>('.faq-item').forEach((o) => {
        if (o !== item) o.open = false;
      });
    }
  });
});

// ── Smooth in-page anchor scroll with header offset ────────────────────
// Native CSS smooth scroll doesn't account for the fixed nav, so anchors
// land underneath it. Override and pad by 80px.
document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((a) => {
  a.addEventListener('click', (e) => {
    const id = a.getAttribute('href');
    if (!id || id.length < 2) return;
    const target = document.querySelector(id);
    if (!target) return;
    e.preventDefault();
    const top = target.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});

export {};
