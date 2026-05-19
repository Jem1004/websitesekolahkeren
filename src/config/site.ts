/**
 * Single source of truth for site-wide constants.
 * Edit values here and they propagate across SEO meta, structured data, and UI.
 */
export const SITE = {
  url: 'https://websitesekolahkeren.id',
  name: 'websekolahkeren',
  shortName: 'websekolahkeren',
  locale: 'id-ID',
  language: 'id',
  // Primary brand pitch — kept under 60 chars where possible for SERP.
  title: 'websekolahkeren — Website Sekolah Modern, CMS Mudah, Harga All-In',
  description:
    'Website sekolah modern dengan CMS mudah dikelola sendiri. Domain .sch.id dan hosting sudah termasuk. Fitur bisa disesuaikan request sekolah. Mulai Rp 1,1 juta.',
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
    email: 'websekolahkeren@gmail.com',
    phone: '+6287784451080',
    waNumber: '6287784451080', // wa.me format (no plus, no leading zero)
    waUrl: 'https://wa.me/6287784451080',
    waMessage: 'Halo, saya tertarik dengan websekolahkeren. Boleh info lebih lanjut soal paket dan fiturnya?',
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
