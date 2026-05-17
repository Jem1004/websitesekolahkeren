/**
 * FAQ entries. Kept as data so the same source feeds both the rendered
 * <details> list and the FAQPage JSON-LD payload — keep them in sync.
 *
 * `answerHTML` is plain HTML so we can include <strong> emphasis without
 * polluting the JSON-LD answer text (the JSON-LD strips tags).
 */
export interface Faq {
  q: string;
  answerHTML: string;
  open?: boolean;
}

export const FAQS: Faq[] = [
  {
    q: 'Apakah saya perlu bisa coding untuk mengelola website ini?',
    answerHTML:
      'Tidak sama sekali. Semua konten — berita, foto, profil, menu — dikelola lewat panel admin yang mudah digunakan, mirip seperti mengisi formulir. Jika Anda terbiasa pakai WhatsApp atau Instagram, Anda pasti bisa.',
    open: true,
  },
  {
    q: 'Berapa lama proses pembuatan website?',
    answerHTML:
      'Estimasi 5–10 hari kerja setelah semua konten dan data dari sekolah diterima lengkap. Untuk paket Lengkap dengan fitur custom, durasi bisa sedikit lebih panjang tergantung kompleksitas request.',
  },
  {
    q: 'Apakah tampilan website bisa disesuaikan dengan warna sekolah kami?',
    answerHTML:
      'Ya! Warna utama, logo, dan font bisa disesuaikan dengan identitas visual sekolah Anda. Kami akan diskusikan pilihan palet warna saat tahap konsultasi awal.',
  },
  {
    q: 'Apakah ada biaya tahunan setelah pembuatan?',
    answerHTML:
      'Website menggunakan domain dan hosting yang perlu diperpanjang setiap tahun (biaya terpisah, sekitar Rp 300.000–600.000/tahun tergantung provider). Kami <strong>tidak memungut biaya langganan</strong> untuk sistem CMS-nya — sekali bayar, milik Anda selamanya.',
  },
  {
    q: 'Bagaimana jika kami butuh fitur yang tidak ada di daftar?',
    answerHTML:
      'Kami membuka request fitur! Diskusikan kebutuhan Anda saat konsultasi dan kami akan evaluasi untuk dimasukkan ke dalam scope pekerjaan. Untuk fitur kompleks, mungkin ada penyesuaian harga.',
  },
  {
    q: 'Apakah website ini aman dari hacking?',
    answerHTML:
      'Website dibangun dengan Next.js dan sistem autentikasi NextAuth.js. Setiap akun admin dilindungi dengan password terenkripsi (bcrypt) dan sistem hak akses berlapis (RBAC). Data tersimpan di cloud storage Amazon S3 yang ter-enkripsi.',
  },
  {
    q: 'Apakah bisa dipakai untuk sekolah swasta juga?',
    answerHTML:
      'Tentu saja! Sistem ini cocok untuk SD, SMP, SMA, SMK — baik negeri maupun swasta, termasuk sekolah Islam, pesantren modern, dan sekolah teknologi/vokasi.',
  },
];
