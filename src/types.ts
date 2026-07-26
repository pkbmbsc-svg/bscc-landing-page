export interface RegistrationPayload {
  id: string;
  nama: string;
  whatsapp: string;
  program: string;
  lokasi: string;
  modeBelajar?: string;
  catatanKhusus?: string;
  timestamp: string;
  source: string;
}

export interface ProgramDetail {
  id: string;
  code: string;
  title: string;
  category: 'kesetaraan' | 'vokasi';
  setara: string;
  icon: string;
  color: string;
  shortDesc: string;
  fullDesc: string;
  targetAudience: string;
  durasi: string;
  metode: string[];
  persyaratan: string[];
  ijazah: string;
  prospek: string[];
  mataPelajaran: string[];
}

export interface FaqItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

export interface AlumniStory {
  id: string;
  nama: string;
  usia: number;
  kecamatan: string;
  program: string;
  tahunLulus: string;
  testimoni: string;
  pencapaianSekarang: string;
  foto?: string;
}

export interface GalleryItem {
  id: string;
  judul: string;
  kategori: string;
  imageUrl: string;
  deskripsi: string;
  hashtags?: string;
  timestamp: string;
  targetPlatforms?: string[];
}
