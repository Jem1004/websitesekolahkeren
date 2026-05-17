/**
 * Single source of truth for site-wide constants.
 * Edit values here and they propagate across SEO meta, structured data, and UI.
 */
export const SITE = {
  url: 'https://websitesekolahkeren.id',
  name: 'Website Sekolah Keren',
  shortName: 'SekolahKeren',
  locale: 'id-ID',
  language: 'id',
  // Primary brand pitch — kept under 60 chars where possible for SERP.
  title: 'Website Sekolah Keren — Website Sekolah Modern, Bukan Sekadar Tampilan',
  description:
    'Solusi digital lengkap untuk sekolah Indonesia. Website sekolah modern berbasis CMS dengan teknologi Next.js. Mulai Rp 1,1 juta — domain & hosting opsional.',
  keywords: [
    'website sekolah keren',
    'jasa pembuatan website sekolah',
    'website sekolah modern',
    'website sekolah cms',
    'website sekolah murah',
    'jasa website smk',
    'jasa website sma',
    'jasa website smp',
    'jasa website sd',
    'website sekolah indonesia',
    'website sekolah profesional',
    'website ppdb online',
  ],
  contact: {
    email: 'halo@websitesekolahkeren.id',
    phone: '+6281234567890',
    waNumber: '6281234567890', // wa.me format (no plus, no leading zero)
    waUrl: 'https://wa.me/6281234567890',
    /**
     * WhatsApp pre-filled message. Encoded once at build time and appended to
     * waUrl when used as a CTA. Keeps the message single-source so we don't
     * end up with three different opening lines on three different buttons.
     */
    waMessage: 'Halo, saya tertarik dengan jasa Website Sekolah Keren. Boleh info lebih lanjut soal paketnya?',
  },
  social: {
    instagram: 'https://instagram.com/websitesekolahkeren',
    facebook: 'https://facebook.com/websitesekolahkeren',
    youtube: 'https://youtube.com/@websitesekolahkeren',
  },
  business: {
    foundingYear: 2024,
    serviceArea: 'Indonesia',
    currency: 'IDR',
    priceRange: 'Rp 1.100.000 - Rp 1.500.000',
  },
  // OG image is shipped as SVG (renders crisp on every viewport). For broader
  // social platform support (older Facebook/LinkedIn), generate a 1200x630 PNG
  // from this SVG and replace the path here.
  ogImage: '/og-image.svg',
  themeColor: '#0A0F1E',
} as const;

export type Site = typeof SITE;
