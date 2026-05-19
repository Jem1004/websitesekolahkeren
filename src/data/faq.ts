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
      'Tidak sama sekali. Semua konten — berita, foto, profil, menu — dikelola lewat panel admin yang sederhana, mirip mengisi formulir online. Kalau terbiasa pakai WhatsApp atau media sosial, pasti langsung bisa.',
    open: true,
  },
  {
    q: 'Berapa lama proses pembuatan website?',
    answerHTML:
      'Maksimal 3 hari kerja setelah konten dan data dari sekolah diterima lengkap. Hari pertama konsultasi dan pilih template, hari kedua pengumpulan konten, hari ketiga website sudah live.',
  },
  {
    q: 'Apakah harga Rp 1,1 juta itu per tahun? Apa saja yang sudah termasuk?',
    answerHTML:
      'Ya, Rp 1.100.000 per tahun dan sudah <strong>all-in</strong> — termasuk domain .sch.id dan hosting cloud. Tidak ada biaya tambahan saat perpanjangan. Harga perpanjangan sama dengan harga pertama.',
  },
  {
    q: 'Bagaimana kalau website bermasalah atau ada yang perlu diperbaiki?',
    answerHTML:
      'Kami menyediakan support via WhatsApp dengan respons cepat di jam kerja. Untuk masalah teknis, kami tangani langsung — tidak perlu menunggu berhari-hari seperti vendor konvensional. Paket Pro mendapat prioritas support 30 hari pertama.',
  },
  {
    q: 'Apa itu e-rapor di Paket Pro? Bagaimana cara kerjanya?',
    answerHTML:
      'E-rapor adalah sistem penilaian digital berbasis Windows Server yang terintegrasi dengan website sekolah. Guru bisa input nilai langsung dari browser, dan rapor bisa dicetak tanpa perlu software tambahan. Cocok untuk sekolah yang ingin digitalisasi proses penilaian.',
  },
  {
    q: 'Apakah tampilan dan fitur bisa disesuaikan dengan kebutuhan sekolah kami?',
    answerHTML:
      'Ya. Warna, logo, dan font bisa disesuaikan dengan identitas sekolah. Fitur dan halaman juga bisa di-request — ini salah satu keunggulan websekolahkeren. Website berkembang sesuai kebutuhan sekolah, bukan sebaliknya.',
  },
  {
    q: 'Apakah bisa dipakai untuk semua jenjang sekolah?',
    answerHTML:
      'Tentu. websekolahkeren cocok untuk SD, SMP, SMA, SMK — negeri maupun swasta, termasuk sekolah Islam dan pesantren modern. Kami punya template yang dirancang untuk karakter masing-masing jenjang.',
  },
];
