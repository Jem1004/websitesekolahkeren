/**
 * Demo gallery data.
 *
 * Two live demos available — each links to its own subdomain so prospective
 * clients can interact with the actual site, not just see a screenshot.
 */
export interface Demo {
  key: string;
  name: string;
  desc: string;
  fit: string;
  image: string;          // path under /public
  imageAlt: string;
  demoUrl: string;        // external live demo URL
}

export const DEMOS: Demo[] = [
  {
    key: 'demo1',
    name: 'Demo 1',
    desc:
      'Tampilan modern dengan nuansa formal yang cocok untuk sekolah negeri maupun swasta. Fokus pada keterbacaan informasi penting seperti PPDB, profil sekolah, dan berita kegiatan.',
    fit: 'SD · SMP · SMA · SMK',
    image: '/demo1.png',
    imageAlt: 'Pratinjau Demo 1 — tampilan website sekolah modern dari websekolahkeren',
    demoUrl: 'https://smkmutuppu.sch.id',
  },
  {
    key: 'demo2',
    name: 'Demo 2',
    desc:
      'Tampilan alternatif dengan pendekatan visual yang lebih segar. Cocok untuk sekolah yang ingin tampil ramah dan menyambut, dengan fokus pada galeri kegiatan dan profil guru.',
    fit: 'SD · SMP · Sekolah Islam',
    image: '/demo2.png',
    imageAlt: 'Pratinjau Demo 2 — tampilan website sekolah alternatif dari websekolahkeren',
    demoUrl: 'https://demo2.websekolahkeren.id',
  },
];
