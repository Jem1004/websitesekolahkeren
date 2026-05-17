/**
 * Landing-page interactivity.
 *
 * Astro bundles this with the page (script tag with type="module") and
 * injects it once. All effects are progressive enhancements — the page is
 * fully readable and crawlable without any of this running.
 */

interface Template {
  key: string;
  cls: string;
  name: string;
  style: string;
  desc: string;
  fit: string;
  mood: string;
  badge: { label: string; cls: 'avail' | 'soon' };
  url: string;
  logoName: string;
  heroTitle: string;
  heroSub: string;
}

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

// ── Template switcher ──────────────────────────────────────────────────
const tplData = document.getElementById('tpl-data');
const TEMPLATES: Record<string, Template> = (() => {
  if (!tplData?.textContent) return {};
  try {
    const arr = JSON.parse(tplData.textContent) as Template[];
    return Object.fromEntries(arr.map((t) => [t.key, t]));
  } catch {
    return {};
  }
})();

const tabs = document.querySelectorAll<HTMLButtonElement>('.tpl-tab');
const frame = document.getElementById('tplFrame');
const tplUrl = document.getElementById('tplUrl');
const tplLogoName = document.getElementById('tplLogoName');
const tplHeroTitle = document.getElementById('tplHeroTitle');
const tplHeroSub = document.getElementById('tplHeroSub');
const tplName = document.getElementById('tplName');
const tplStyle = document.getElementById('tplStyle');
const tplDesc = document.getElementById('tplDesc');
const tplFit = document.getElementById('tplFit');
const tplMood = document.getElementById('tplMood');
const tplBadge = document.getElementById('tplBadge');

function setTemplate(key: string): void {
  const t = TEMPLATES[key];
  if (!t || !frame) return;
  // Reset all variant classes before applying the new one.
  Object.values(TEMPLATES).forEach((v) => frame.classList.remove(v.cls));
  frame.classList.add(t.cls);
  if (tplUrl) tplUrl.textContent = t.url;
  if (tplLogoName) tplLogoName.textContent = t.logoName;
  if (tplHeroTitle) tplHeroTitle.textContent = t.heroTitle;
  if (tplHeroSub) tplHeroSub.textContent = t.heroSub;
  if (tplName) tplName.textContent = t.name;
  if (tplStyle) tplStyle.textContent = t.style;
  if (tplDesc) tplDesc.textContent = t.desc;
  if (tplFit) tplFit.textContent = t.fit;
  if (tplMood) tplMood.textContent = t.mood;
  if (tplBadge) {
    tplBadge.textContent = t.badge.label;
    tplBadge.className = `tpl-badge ${t.badge.cls}`;
  }
  tabs.forEach((tab) => tab.classList.toggle('active', tab.dataset.tpl === key));
}
tabs.forEach((tab) =>
  tab.addEventListener('click', () => {
    if (tab.dataset.tpl) setTemplate(tab.dataset.tpl);
  }),
);

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

// ── Contact form ───────────────────────────────────────────────────────
// Front-end only validation + success ack. Wire to a real backend when ready
// (e.g. POST to a serverless function, or use Formspree/Web3Forms).
const form = document.getElementById('contactForm') as HTMLFormElement | null;
form?.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(form).entries()) as Record<string, string>;
  const required = ['name', 'school', 'wa', 'city'] as const;
  const missing = required.filter((k) => !data[k]?.trim());
  if (missing.length) {
    form.querySelector<HTMLInputElement>(`[name="${missing[0]}"]`)?.focus();
    return;
  }
  document.getElementById('formSuccess')?.classList.add('show');
  const submitBtn = form.querySelector<HTMLButtonElement>('button[type="submit"]');
  if (submitBtn) submitBtn.textContent = '✓ Terkirim';
  setTimeout(() => {
    form.reset();
    document.getElementById('formSuccess')?.classList.remove('show');
    if (submitBtn) {
      submitBtn.innerHTML =
        'Kirim &amp; Konsultasi Gratis <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>';
    }
  }, 4000);
});

// ── Smooth in-page anchor scroll with header offset ────────────────────
// The native CSS `scroll-behavior: smooth` doesn't account for the fixed
// nav, so anchors land underneath it. Override and pad by 80px.
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
