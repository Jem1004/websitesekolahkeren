/**
 * Template gallery data.
 *
 * Used at build time to render the initial active template (Navy) and
 * serialized via JSON to power the runtime template switcher script.
 *
 * Keep "navy" as the first entry — it's the default state shown on first paint.
 */
export interface Template {
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
  swatch: string;
  label: string;
}

export const TEMPLATES: Template[] = [
  {
    key: 'navy',
    cls: 'tpl-navy',
    name: 'Navy Premium',
    style: 'Elegan navy-gold, formal',
    desc:
      'Template formal dengan dominasi navy dan aksen gold. Memberi kesan terpercaya, mapan, dan otoritatif — cocok untuk sekolah negeri yang ingin tampil profesional.',
    fit: 'SMK · SMA · SMP Negeri',
    mood: 'Formal · Elegan',
    badge: { label: 'Tersedia', cls: 'avail' },
    url: 'smknegeri.sch.id',
    logoName: 'SMK Negeri 1',
    heroTitle: 'Sekolah Vokasi Unggulan, Siap Industri',
    heroSub: 'Mempersiapkan generasi kompeten dengan kurikulum link & match.',
    swatch: 'linear-gradient(135deg,#1E40AF,#F59E0B)',
    label: 'Navy Premium',
  },
  {
    key: 'green',
    cls: 'tpl-green',
    name: 'Fresh Green',
    style: 'Hijau-putih, segar dan modern',
    desc:
      'Nuansa segar, ramah, dan optimis. Cocok untuk sekolah dasar atau menengah swasta yang ingin tampil hangat dan menyambut. Banyak ruang putih, ringan dimuat.',
    fit: 'SD · SMP Swasta',
    mood: 'Segar · Ramah',
    badge: { label: 'Tersedia', cls: 'avail' },
    url: 'sdkasihbangsa.sch.id',
    logoName: 'SD Kasih Bangsa',
    heroTitle: 'Tumbuh Cerdas, Tumbuh Bahagia',
    heroSub: 'Sekolah ramah anak dengan kurikulum pembelajaran aktif dan menyenangkan.',
    swatch: 'linear-gradient(135deg,#059669,#34D399)',
    label: 'Fresh Green',
  },
  {
    key: 'purple',
    cls: 'tpl-purple',
    name: 'Edu Purple',
    style: 'Ungu modern, futuristik',
    desc:
      'Tampilan futuristik dengan palet ungu yang berani. Cocok untuk sekolah Islam modern, pesantren milenial, atau institusi yang ingin menonjolkan inovasi.',
    fit: 'Sekolah Islam · Pesantren Modern',
    mood: 'Inovatif · Berani',
    badge: { label: 'Tersedia', cls: 'avail' },
    url: 'pondokmodern.sch.id',
    logoName: 'Pondok Modern',
    heroTitle: 'Akhlak Mulia, Prestasi Mendunia',
    heroSub: 'Memadukan nilai pesantren dengan kurikulum global dan teknologi modern.',
    swatch: 'linear-gradient(135deg,#7C3AED,#C084FC)',
    label: 'Edu Purple',
  },
  {
    key: 'red',
    cls: 'tpl-red',
    name: 'Bold Red',
    style: 'Merah-putih, patriotik',
    desc:
      'Identitas kuat dengan warna merah dominan. Cocok untuk sekolah dengan warna seragam merah atau institusi yang ingin tampilan tegas dan penuh semangat.',
    fit: 'Sekolah Patriotik · Kebangsaan',
    mood: 'Tegas · Semangat',
    badge: { label: 'Tersedia', cls: 'avail' },
    url: 'smannusantara.sch.id',
    logoName: 'SMA Nusantara',
    heroTitle: 'Cerdas, Berkarakter, Cinta Tanah Air',
    heroSub: 'Membentuk pemimpin masa depan dengan nilai-nilai kebangsaan yang kuat.',
    swatch: 'linear-gradient(135deg,#DC2626,#FCA5A5)',
    label: 'Bold Red',
  },
  {
    key: 'dark',
    cls: 'tpl-dark',
    name: 'Dark Elite',
    style: 'Dark mode premium',
    desc:
      'Tampilan dark mode minimalis dengan tipografi tegas. Sangat cocok untuk SMK teknologi, sekolah vokasi IT, atau institusi yang menargetkan calon siswa Gen-Z.',
    fit: 'SMK Teknologi · Vokasi IT',
    mood: 'Premium · Minimalis',
    badge: { label: 'Segera Hadir', cls: 'soon' },
    url: 'smktech.sch.id',
    logoName: 'SMK Tech',
    heroTitle: 'Code the Future. Built for Industry.',
    heroSub: 'Program kejuruan IT, multimedia, dan robotika berstandar industri global.',
    swatch: 'linear-gradient(135deg,#0A0A0A,#71717A)',
    label: 'Dark Elite',
  },
];
