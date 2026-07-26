import { ProgramDetail, FaqItem, AlumniStory, GalleryItem } from '../types';

export const CIANJUR_KECAMATAN = [
  'Karangtengah',
  'Cianjur Kota',
  'Ciranjang',
  'Warungkondang',
  'Cibeber',
  'Cilaku',
  'Sukaluyu',
  'Cipanas',
  'Pacet',
  'Cugenang',
  'Gekbrong',
  'Mande',
  'Cikalongkulon',
  'Bojongpicung',
  'Haurwangi',
  'Sukaresmi',
  'Campaka',
  'Campakamulya',
  'Sukanagara',
  'Pagelaran',
  'Tanggeung',
  'Cibinong',
  'Sindangbarang',
  'Agrabinta',
  'Leles',
  'Cidaun',
  'Naringgul',
  'Kadupandak',
  'Pasirkuda',
  'Cijati',
  'Takokak',
  'Lainnya (Luar Cianjur)'
];

export const PROGRAMS: ProgramDetail[] = [
  {
    id: 'paket-a',
    code: 'Paket A (Setara SD)',
    title: 'Kejar Paket A',
    category: 'kesetaraan',
    setara: 'Setara Sekolah Dasar (SD)',
    icon: 'BookOpen',
    color: 'amber',
    shortDesc: 'Program pendidikan kesetaraan tingkat dasar untuk mendapatkan Ijazah Resmi SD/Setara.',
    fullDesc: 'Program Kejar Paket A diselenggarakan bagi warga masyarakat yang belum sempat menyelesaikan pendidikan tingkat SD. Pembelajaran dirancang ramah usia, fleksibel, serta menekankan kemandirian membaca, menulis, berhitung, dan pembentukan karakter.',
    targetAudience: 'Putus sekolah SD, belum memiliki ijazah SD, atau lulusan Madrasah Ibtidaiyah/Pesantren non-formal.',
    durasi: 'Fleksibel (1 - 3 Tahun disesuaikan kelas terakhir)',
    metode: ['Tatap Muka Akhir Pekan', 'Modul Moduler / Belajar Mandiri', 'Panduan Tutor Pendamping'],
    persyaratan: [
      'Fotokopi Kartu Keluarga (KK) 3 Lembar',
      'Fotokopi KTP Orang Tua / Sendiri (jika ada)',
      'Pas Foto 3x4 (Background Merah) 4 Lembar',
      'Akte Kelahiran (jika ada)'
    ],
    ijazah: 'Ijazah Kesetaraan Resmi terdaftar di Dapodik Kementerian Pendidikan Dasar & Menengah RI.',
    prospek: ['Melanjutkan ke Kejar Paket B (SMP)', 'Persyaratan Usaha/Kerja Non-Formal', 'Lembaga Keagamaan & Ormas'],
    mataPelajaran: ['Bahasa Indonesia', 'Matematika Dasar', 'IPAS (IPA & IPS)', 'Pendidikan Pancasila', 'Pendidikan Agama & Budi Pekerti']
  },
  {
    id: 'paket-b',
    code: 'Paket B (Setara SMP)',
    title: 'Kejar Paket B',
    category: 'kesetaraan',
    setara: 'Setara Sekolah Menengah Pertama (SMP)',
    icon: 'GraduationCap',
    color: 'emerald',
    shortDesc: 'Program pendidikan kesetaraan jenjang SMP dengan Ijazah Resmi Kemendikbud.',
    fullDesc: 'Program Kejar Paket B membantu warga Cianjur yang terhenti di tingkat SMP/MTs untuk menyelesaikan pendidikan dasar 9 tahun. Sangat cocok bagi pekerja, santri pesantren, atau mereka yang ingin melanjutkan ke jenjang SMA/Paket C.',
    targetAudience: 'Lulusan SD/Paket A yang belum tamat SMP, pekerja usia muda/dewasa.',
    durasi: 'Fleksibel (1 - 3 Tahun tergantung rapor terakhir)',
    metode: ['Pembelajaran Online Daring (LMS)', 'Tatap Muka Fleksibel', 'Penugasan Berbasis Proyek'],
    persyaratan: [
      'Fotokopi Ijazah SD / Paket A dilegalisir (3 Lembar)',
      'Fotokopi Kartu Keluarga (KK) & KTP',
      'Pas Foto 3x4 (Background Biru/Merah) 4 Lembar',
      'Rapor Terakhir (jika pernah sekolah SMP)'
    ],
    ijazah: 'Ijazah Resmi Setara SMP Kemendikbud (Berhak mengikuti tes CPNS/TNI/Polri/Kerja/Melanjutkan Sekolah).',
    prospek: ['Lanjut ke Paket C / SMA / SMK', 'Persyaratan Masuk Kerja Pabrik / Industri', 'Peningkatan Jenjang Karir'],
    mataPelajaran: ['Bahasa Indonesia', 'Bahasa Inggris', 'Matematika', 'IPA', 'IPS', 'PPKn', 'Pendidikan Agama']
  },
  {
    id: 'paket-c',
    code: 'Paket C (Setara SMA)',
    title: 'Kejar Paket C',
    category: 'kesetaraan',
    setara: 'Setara Sekolah Menengah Atas (SMA/IPA/IPS)',
    icon: 'Award',
    color: 'sky',
    shortDesc: 'Ijazah Resmi Setara SMA untuk kuliah di Perguruan Tinggi, syarat kerja, atau CPNS.',
    fullDesc: 'Program paling populer di PKBM Berkah Sadaya Cianjur. Membuka akses penuh untuk kuliah di Perguruan Tinggi Negeri/Swasta (UT, Unpad, Unsika, Suryakancana, dll.), melamar pekerjaan di instansi pemerintah/pabrik, atau kenaikan jabatan kerja.',
    targetAudience: 'Lulusan SMP/Paket B, siswa putus sekolah SMA/SMK, pekerja shift, atlet, santri, dewasa karir.',
    durasi: '1 - 3 Tahun (disesuaikan dengan kelas rapor SMA terakhir)',
    metode: ['Hybrid / Online Learning Daring', 'Tatap Muka Sabtu-Minggu', 'Kelas Khusus Karyawan'],
    persyaratan: [
      'Fotokopi Ijazah SMP / Paket B dilegalisir (3 Lembar)',
      'Fotokopi KK & KTP (3 Lembar)',
      'Pas Foto 3x4 (Background Merah) 5 Lembar',
      'Rapor SMA/SMK Terakhir (jika ada mutasi/pindahan)'
    ],
    ijazah: 'Ijazah Kesetaraan Paket C Resmi terdaftar Kemendikbud & Sivil (Sistem Verifikasi Ijazah Elektronik).',
    prospek: ['Kuliah PTN / PTS / UT', 'Pendaftaran CPNS / PPPK / TNI / POLRI', 'Pekerjaan Karyawan Swasta / BUMN', 'Wirausaha Mandiri'],
    mataPelajaran: ['Bahasa Indonesia', 'Bahasa Inggris', 'Matematika', 'Sosiologi/Biologi', 'Ekonomi/Kimia', 'Geografi/Fisika', 'PPKn', 'Kewirausahaan']
  },
  {
    id: 'vokasi-digital',
    code: 'Vokasi & Keterampilan',
    title: 'Pelatihan Komputer & Digital Skills',
    category: 'vokasi',
    setara: 'Sertifikat Kompetensi Vokasi Digital',
    icon: 'Cpu',
    color: 'indigo',
    shortDesc: 'Kursus praktis komputer kantoran, pemasaran digital, dan desain grafis siap kerja.',
    fullDesc: 'Program vokasi unggulan BSCC Learning Center untuk membekali warga Cianjur dengan keahlian praktis yang dibutuhkan di era digital. Mempelajari Microsoft Office Word/Excel/PowerPoint, Pemasaran Media Sosial (TikTok/Shopee Seller), serta Desain Grafis Canva/Photoshop.',
    targetAudience: 'Siswa Paket A/B/C, pencari kerja umum, pelaku UMKM Cianjur, pemuda desa.',
    durasi: '1 - 3 Bulan (24 Sesi Pertemuan Intensif + Magang)',
    metode: ['Praktik Lab Komputer', 'Proyek Riil Client', 'Bimbingan Portofolio Kerja'],
    persyaratan: [
      'Fotokopi KTP / KK',
      'Pas Foto 3x4 (2 Lembar)',
      'Niat belajar dan komitmen mengikuti pelatihan'
    ],
    ijazah: 'Sertifikat Pelatihan Vokasi Resmi dari PKBM Berkah Sadaya & Lembaga Mitra Digital.',
    prospek: ['Staf Admin Kantor / Toko', 'Operator Komputer & Data Entry', 'Digital Marketer / Admin Online Shop', 'Desain Grafis Freelance'],
    mataPelajaran: ['Aplikasi Perkantoran Word & Excel Advanced', 'Desain Grafis Canva & Branding', 'Digital Marketing & Live Streaming Sales', 'Etika Kerja & Komunikasi Komersial']
  },
  {
    id: 'vokasi-menjahit',
    code: 'Pendidikan Menjahit & Busana',
    title: 'Pendidikan Menjahit & Tata Busana',
    category: 'vokasi',
    setara: 'Sertifikat Vokasi Tata Busana & Konveksi',
    icon: 'Scissors',
    color: 'pink',
    shortDesc: 'Pelatihan pola, pembuatan pakaian, teknik jahit konveksi, hingga wirausaha tata busana mandiri.',
    fullDesc: 'Membekali peserta dengan keterampilan mengukur, membuat pola busana wanita/pria, pengoperasian mesin jahit high-speed, teknik jahit konveksi, serta manajemen usaha penjahitan/boutique mandiri di Cianjur.',
    targetAudience: 'Ibu rumah tangga, pemudi desa, alumni Paket B/C, pencari kerja konveksi.',
    durasi: '2 - 3 Bulan (Praktik Mesin Jahit & Pembuatan Pakaian Ready-to-Wear)',
    metode: ['Praktik Studio Jahit', 'Pembuatan 5 Model Pakaian Asli', 'Mentoring Bisnis Busana'],
    persyaratan: ['Fotokopi KTP / KK', 'Pas foto 3x4 (2 Lembar)', 'Semangat belajar jahit'],
    ijazah: 'Sertifikat Kompetensi Tata Busana Resmi PKBM Berkah Sadaya.',
    prospek: ['Wirausaha Penjahit / Tailor Mandiri', 'Tenaga Kerja Garmen / Konveksi', 'Desainer Busana Lokal'],
    mataPelajaran: ['Pengenalan Mesin Jahit & Perawatan', 'Konstruksi Pola Dasar & Pecah Pola', 'Teknik Menjahit Pakaian & Finishing', 'Perhitungan HPP & Pemasaran Busana']
  },
  {
    id: 'vokasi-otomotif',
    code: 'Vokasi Otomotif & Mekanik',
    title: 'Vokasi Otomotif & Mekanik Sepeda Motor',
    category: 'vokasi',
    setara: 'Sertifikat Mekanik Sepeda Motor & Injeksi',
    icon: 'Wrench',
    color: 'amber',
    shortDesc: 'Perawatan & perbaikan kendaraan motor, sistem injeksi PGM-FI, dan manajemen perbengkelan.',
    fullDesc: 'Pelatihan praktis mekanik motor berbasis teknologi injeksi modern. Peserta belajar bongkar pasang mesin, kelistrikan bodi, tune-up komputer alat scanner injeksi, serta manajemen bengkel sepeda motor mandiri.',
    targetAudience: 'Pemuda karang taruna, pencari kerja bengkel, siswa Paket B/C Cianjur.',
    durasi: '2 Bulan (Praktik Otomotif Direct Bengkel)',
    metode: ['Praktik Workshop Bengkel', 'Simulasi Kerusakan Injeksi', 'Magang Bengkel Mitra'],
    persyaratan: ['Fotokopi KTP / KK', 'Pas Foto 3x4 (2 Lembar)'],
    ijazah: 'Sertifikat Kelulusan Mekanik Otomotif Sepeda Motor BSCC Cianjur.',
    prospek: ['Mekanik Bengkel Resmi / Swasta', 'Pemilik Bengkel Motor Mandiri', 'Teknisi Maintenance'],
    mataPelajaran: ['Sistem Kerja Mesin 4-Tak & 2-Tak', 'Sistem Injeksi & Diagnostic Scanner', 'Kelistrikan Bodi & Pengisian', 'Manajemen Usaha Bengkel Motor']
  },
  {
    id: 'vokasi-pertanian',
    code: 'Pertanian & Mekanisasi',
    title: 'Pertanian & Mekanisasi Pertanian Modern',
    category: 'vokasi',
    setara: 'Sertifikat Agribisnis & Teknologi Pertanian',
    icon: 'Sprout',
    color: 'emerald',
    shortDesc: 'Teknik bercocok tanam organik, penggunaan alat mekanisasi pertanian, dan pengolahan hasil panen.',
    fullDesc: 'Mengoptimalkan potensi pertanian Cianjur dengan mengenalkan teknik hidroponik, budidaya tanaman pangan/hortikultura berdaya jual tinggi, pupuk organik, operasional alat mekanisasi pertanian, hingga pemasaran rantai pasok.',
    targetAudience: 'Petani muda Cianjur, kelompok tani, wirausahawan agribisnis.',
    durasi: '1.5 Bulan (Praktik Lapangan Kebun & Lahan)',
    metode: ['Praktik Lahan Pertanian', 'Pembuatan Pupuk Organik', 'Akses Pasar Digital'],
    persyaratan: ['Fotokopi KTP / KK'],
    ijazah: 'Sertifikat Kompetensi Agribisnis & Mekanisasi Pertanian PKBM.',
    prospek: ['Wirausaha Agribisnis Modern', 'Pengelola Kelompok Tani', 'Supplier Sayur & Buah Organik'],
    mataPelajaran: ['Budidaya Hortikultura & Organik', 'Pengoperasian Mesin Pertanian', 'Pengolahan Pascapanen & Packaging', 'Pemasaran Agribisnis Digital']
  },
  {
    id: 'vokasi-alqolam',
    code: 'Program Tahfidz & Quran Engineering',
    title: 'Program Tahfidz & Keagamaan Al-Qolam',
    category: 'vokasi',
    setara: 'Sertifikat Tahfidz & Pembina Keagamaan',
    icon: 'BookCheck',
    color: 'teal',
    shortDesc: 'Pendalaman al-Quran, program tahfidz hafalan, serta pembentukan karakter akhlak mulia.',
    fullDesc: 'Program pembinaan spiritual terpadu yang memadukan pendidikan kesetaraan Paket A/B/C dengan bimbingan hafalan Al-Quran (Tahfidz), tahsin, tajwid, serta pembekalan metode mengajar TPA/TPQ bagi warga Cianjur.',
    targetAudience: 'Santri, pengajar mengaji desa, peserta Paket A/B/C.',
    durasi: 'Berkelanjutan (Sesuai target hafalan)',
    metode: ['Bimbingan Setoran Hafalan', 'Halaqah Tahsin Tajwid', 'Ujian Syahadah'],
    persyaratan: ['Fotokopi KTP / KK', 'Niat ikhlas membumikan Al-Quran'],
    ijazah: 'Sertifikat Syahadah Tahfidz Al-Quran PKBM Berkah Sadaya.',
    prospek: ['Guru Mengaji / Ustadz TPA', 'Pengelola Majelis Ta\'lim', 'Siswa Berakhlak & Berijazah Kesetaraan'],
    mataPelajaran: ['Tahsin & Tajwid Al-Quran Al-Qolam', 'Metode Hafalan Efektif', 'Fiqih Ibadah & Muamalah', 'Bimbingan Akhlak & Leadership']
  },
  {
    id: 'vokasi-kewirausahaan',
    code: 'Pelatihan Kewirausahaan & UMKM',
    title: 'Kewirausahaan & Bisnis Lokal',
    category: 'vokasi',
    setara: 'Sertifikat Kewirausahaan & Pendampingan NIB',
    icon: 'Briefcase',
    color: 'rose',
    shortDesc: 'Pelatihan manajemen usaha, packaging produk, dan legalitas NIB/PIRT bagi warga.',
    fullDesc: 'Diperuntukkan bagi peserta yang ingin membuka usaha sendiri di Cianjur. Mencakup manajemen keuangan sederhana, pengemasan produk makanan/kerajinan khas Cianjur, pemasaran WhatsApp Business, serta pendampingan pembuatan Izin Usaha (NIB).',
    targetAudience: 'Ibu rumah tangga, pemuda karang taruna, alumni Paket C, pemilik usaha mikro.',
    durasi: '1 Bulan (Kelas Praktik & Pendampingan Bisnis)',
    metode: ['Workshop Praktik Direct', 'Konsultasi Legalitas Usaha', 'Mentoring Produk'],
    persyaratan: ['Fotokopi KTP', 'Draft Ide Produk / Produk Usaha yang sudah berjalan'],
    ijazah: 'Sertifikat Kelulusan Pelatihan & Akses Pendampingan NIB OSS.',
    prospek: ['Wirausahawan Mandiri', 'Mitra UMKM Binaan PKBM', 'Manajer Toko / Usaha Keluarga'],
    mataPelajaran: ['Manajemen Keuangan Usaha Kecil', 'Packaging & Visual Branding', 'Pemasaran Online Local SEO & WhatsApp', 'Sistem Perizinan Usaha OSS NIB']
  }
];

export const FAQS: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'Ijazah & Legalitas',
    question: 'Apakah Ijazah Kejar Paket A, B, C dari PKBM Berkah Sadaya Cianjur Resmi?',
    answer: 'SANGAT RESMI. PKBM Berkah Sadaya Cianjur terdaftar resmi di Kementerian Pendidikan Dasar dan Menengah RI dengan Nomor Pokok Sekolah Nasional (NPSN) valid. Ijazah yang diterbitkan dicetak langsung oleh Kemendikbud dan memiliki hak sipil sama persis dengan ijazah sekolah formal (SD/SMP/SMA).'
  },
  {
    id: 'faq-2',
    category: 'Kuliah & Karir',
    question: 'Apakah Ijazah Paket C bisa dipakai untuk Kuliah, Daftar CPNS, atau Kerja di Pabrik?',
    answer: 'Ya, BISA BANGET. Ijazah Paket C diakui oleh seluruh Perguruan Tinggi Negeri (PTN) dan Swasta (PTS) di Indonesia seperti Universitas Terbuka (UT), UNSIL, UNPAD, UNSUR Cianjur, dll. Ijazah juga berlaku sah untuk pendaftaran CPNS, PPPK, TNI, POLRI, serta persyaratan melamar kerja di pabrik/perusahaan.'
  },
  {
    id: 'faq-3',
    category: 'Metode Belajar',
    question: 'Saya bekerja shift / tinggal jauh dari pusat kota Cianjur. Apakah bisa belajar online?',
    answer: 'Bisa! PKBM Berkah Sadaya (BSCC) menyediakan jalur pembelajaran Daring/Online Fleksibel dan Belajar Mandiri Moduler. Anda bisa mengakses materi dan tugas kapan saja tanpa mengganggu jam kerja atau kegiatan harian Anda.'
  },
  {
    id: 'faq-4',
    category: 'Persyaratan & Usia',
    question: 'Apakah ada batasan umur untuk mendaftar Kejar Paket?',
    answer: 'TIDAK ADA batasan usia maksimal! Siapapun, baik usia remaja (15-18 tahun) maupun usia dewasa (20, 30, 40, hingga 50+ tahun) sangat disambut untuk belajar dan meraih ijazah di PKBM Berkah Sadaya Cianjur.'
  },
  {
    id: 'faq-5',
    category: 'Biaya & Pembayaran',
    question: 'Bagaimana dengan biaya pendaftaran dan administrasi di PKBM Berkah Sadaya?',
    answer: 'Biaya pendidikan di PKBM Berkah Sadaya Cianjur sangat terjangkau dengan sistem angsuran/cicilan bulanan yang fleksibel. Bagi calon peserta dari keluarga pra-sejahtera usia sekolah, tersedia pula program bantuan operasional (BOP) sesuai ketentuan Kemendikbud.'
  },
  {
    id: 'faq-6',
    category: 'Prosedur Ujian',
    question: 'Di mana pelaksanaan ujian sekolah dan ANBK?',
    answer: 'Ujian dilaksanakan di gedung/tempat belajar PKBM Berkah Sadaya Cianjur atau secara CBT (Computer Based Test) berbasis digital sesuai petunjuk resmi Dinas Pendidikan Kabupaten Cianjur.'
  }
];

export const ALUMNI_TESTIMONIALS: AlumniStory[] = [
  {
    id: '1',
    nama: 'Asep Ridwan',
    usia: 26,
    kecamatan: 'Karangtengah, Cianjur',
    program: 'Kejar Paket C (Lulus 2024)',
    tahunLulus: '2024',
    testimoni: 'Dulu saya terpaksa putus sekolah SMA karena kendala biaya keluarga. Setelah kerja serabutan, saya disarankan daftar Paket C di PKBM Berkah Sadaya. Belajarnya fleksibel, tutornya sangat membimbing. Sekarang ijazah saya dipakai kuliah di Universitas Terbuka dan promosi di tempat kerja!',
    pencapaianSekarang: 'Mahasiswa Universitas Terbuka & Supervisor Gudang'
  },
  {
    id: '2',
    nama: 'Siti Nurhaliza',
    usia: 21,
    kecamatan: 'Ciranjang, Cianjur',
    program: 'Kejar Paket C + Pelatihan Komputer',
    tahunLulus: '2025',
    testimoni: 'Selain dapat Ijazah Paket C resmi, saya juga ikut Pelatihan Komputer Digital Skills di BSCC Learning Center. Praktik Excel dan Canva-nya benar-benar kepakai. Begitu lulus, langsung diterima jadi Admin Toko Grosir di Ciranjang.',
    pencapaianSekarang: 'Admin Operational & Social Media Specialist'
  },
  {
    id: '3',
    nama: 'Dedi Kurnia',
    usia: 34,
    kecamatan: 'Cibeber, Cianjur',
    program: 'Kejar Paket B & Paket C',
    tahunLulus: '2023',
    testimoni: 'Jangan pernah malu belajar walau usia sudah kepala tiga. Pengajar di PKBM Berkah Sadaya ramah dan tidak membeda-bedakan. Proses pengurusan berkas sampai ijazah keluar sangat transparan dan sesuai jadwal.',
    pencapaianSekarang: 'Wirausaha Bengkel & Ketua RT'
  }
];

export const DEFAULT_GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    judul: 'Praktik Service Sistem Injeksi Sepeda Motor',
    kategori: 'Vokasi Otomotif',
    imageUrl: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=800&auto=format&fit=crop&q=80',
    deskripsi: 'Siswa vokasi otomotif BSCC Cianjur sedang mempelajari diagnosa komputer alat scanner untuk mesin injeksi motor modern.',
    hashtags: '#PKBMBerkahSadaya #BSCCCianjur #VokasiOtomotif #CianjurBangkit',
    timestamp: new Date().toISOString()
  },
  {
    id: 'gal-2',
    judul: 'Ujian Praktik Menjahit & Pembuatan Pola Busana',
    kategori: 'Vokasi Menjahit',
    imageUrl: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=800&auto=format&fit=crop&q=80',
    deskripsi: 'Peserta pelatihan menjahit sedang menyelesaikan pembuatan pola dan busana siap pakai dengan mesin jahit konveksi high-speed.',
    hashtags: '#PKBMBerkahSadaya #TataBusana #CianjurKreatif #PendidikanVokasi',
    timestamp: new Date().toISOString()
  },
  {
    id: 'gal-3',
    judul: 'Praktik Budidaya Sayur Organik & Mekanisasi Lahan',
    kategori: 'Pertanian',
    imageUrl: 'https://images.unsplash.com/photo-1592417817098-8f3d6eb12735?w=800&auto=format&fit=crop&q=80',
    deskripsi: 'Kelompok belajar vokasi pertanian mempraktikkan olah tanah dengan mesin traktor cilik serta sistem pemupukan organik di Karangtengah.',
    hashtags: '#PKBMBerkahSadaya #PertanianCianjur #AgribisnisModern #CianjurSejahtera',
    timestamp: new Date().toISOString()
  },
  {
    id: 'gal-4',
    judul: 'Setoran Hafalan & Tahsin Al-Quran Program Al-Qolam',
    kategori: 'Al-Qolam',
    imageUrl: 'https://images.unsplash.com/photo-1609599006353-e629aa5d9137?w=800&auto=format&fit=crop&q=80',
    deskripsi: 'Santri dan peserta kesetaraan menyimak bimbingan tahsin tajwid dan hafalan juz Al-Quran bersama pengajar ahli Al-Qolam.',
    hashtags: '#PKBMBerkahSadaya #TahfidzAlQuran #CianjurReligius #AlQolam',
    timestamp: new Date().toISOString()
  }
];

