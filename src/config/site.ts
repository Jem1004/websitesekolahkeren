/**
 * Single source of truth for site-wide constants.
 * Edit values here and they propagate across SEO meta, structured data, and UI.
 */
export const SITE = {
  url: 'https://websekolahkeren.id',
  name: 'websekolahkeren',
  shortName: 'websekolahkeren',
  locale: 'id-ID',
  language: 'id',
  // Primary brand pitch — kept under 60 chars where possible for SERP.
  title: 'websekolahkeren — Website Sekolah Modern, CMS Mudah, Harga All-In',
  description:
    'Website sekolah modern dengan CMS mudah dikelola sendiri. Domain .sch.id dan hosting sudah termasuk. Fitur bisa disesuaikan request sekolah. Mulai Rp 1 Juta.',
  keywords: [
    // Brand variants — penulisan nama yang umum dipakai user saat mencari
    'websekolahkeren',
    'web sekolah keren',
    'website sekolah keren',
    'websitesekolah',
    'website sekolah',
    'websekolah',
    'web sekolah',

    // Service intent — apa yang dicari calon klien
    'jasa pembuatan website sekolah',
    'jasa website sekolah',
    'pembuatan website sekolah murah',
    'buat website sekolah',
    'bikin website sekolah',
    'website sekolah modern',
    'website sekolah profesional',
    'website sekolah cms',
    'website sekolah responsive',

    // Per jenjang — calon klien sering search by jenjang
    'website sd',
    'website smp',
    'website sma',
    'website smk',
    'jasa website sd',
    'jasa website smp',
    'jasa website sma',
    'jasa website smk',
    'website sekolah islam',
    'website pesantren',
    'website madrasah',

    // Fitur spesifik
    'website ppdb online',
    'website sekolah dengan e-rapor',
    'aplikasi e-rapor sekolah',
    'cms sekolah',
    'sistem informasi sekolah',
    'website sekolah domain sch.id',

    // Lokasi & harga
    'website sekolah indonesia',
    'website sekolah murah',
    'paket website sekolah all in',

    // Brand parent
    'astro digital solution',
  ],
  contact: {
    email: 'websekolahkeren@gmail.com',
    phone: '+6287784451080',
    waNumber: '6287784451080', // wa.me format (no plus, no leading zero)
    waUrl: 'https://wa.me/6287784451080',
    waMessage: 'Halo, saya tertarik dengan websekolahkeren. Boleh info lebih lanjut soal paket dan fiturnya?',
  },
  social: {
    instagram: 'https://instagram.com/websekolahkeren',
    facebook: 'https://facebook.com/websekolahkeren',
    youtube: 'https://youtube.com/@websekolahkeren',
  },
  business: {
    foundingYear: 2024,
    serviceArea: 'Indonesia',
    currency: 'IDR',
    priceRange: 'Rp 1.000.000 - Rp 1.300.000',
  },
  // OG image is shipped as SVG (renders crisp on every viewport). For broader
  // social platform support (older Facebook/LinkedIn), generate a 1200x630 PNG
  // from this SVG and replace the path here.
  ogImage: '/og-image.svg',
  themeColor: '#0A0F1E',
} as const;

export type Site = typeof SITE;
