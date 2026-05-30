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
    demoUrl: 'https://demo1.websekolahkeren.id',
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
  {
    key: 'demo3',
    name: 'Demo 3',
    desc:
      'Desain kreatif, ceria, dan penuh warna dengan nuansa bersahabat (playful). Sangat tepat untuk menonjolkan aktivitas interaktif, kenyamanan belajar, dan membangun kedekatan emosional dengan calon siswa dan orang tua.',
    fit: 'SD · TK · PAUD',
    image: '/demo3.png',
    imageAlt: 'Pratinjau Demo 3 — tampilan website sekolah kreatif dan playful untuk SD, TK, dan PAUD dari websekolahkeren',
    demoUrl: 'https://demo3.websekolahkeren.id',
  },
  {
    key: 'demo4',
    name: 'Demo 4',
    desc:
      'Desain mewah, eksklusif, dan profesional dengan dominasi warna hijau botol dan aksen emas. Menampilkan prakata pimpinan yang berwibawa serta integrasi informasi pengumuman dan agenda yang dinamis.',
    fit: 'SD · SMP · SMA · SMK · Sekolah Model',
    image: '/demo4.png',
    imageAlt: 'Pratinjau Demo 4 — tampilan website sekolah premium dengan nuansa hijau tua dan emas dari websekolahkeren',
    demoUrl: 'https://demo4.websekolahkeren.id',
  },
  {
    key: 'demo5',
    name: 'Demo 5',
    desc:
      'Desain modern yang trendi dengan tata letak minimalis, berjiwa muda, dan berkinerja tinggi. Sangat tepat untuk memamerkan galeri karya, jurusan keahlian, prestasi kompetensi, serta memfasilitasi publikasi kegiatan akademik yang interaktif.',
    fit: 'SMK · SMA · Lembaga Kursus · Kampus Kreatif',
    image: '/demo5.png',
    imageAlt: 'Pratinjau Demo 5 — tampilan website sekolah modern minimalis dan berkinerja tinggi dari websekolahkeren',
    demoUrl: 'https://demo5.websekolahkeren.id',
  },
];
