import React, { useState } from 'react';
import {
  GraduationCap,
  PlayCircle,
  Laptop,
  Award,
  Users,
  ShieldCheck,
  HeartHandshake,
  Building2,
  BookOpen,
  Target,
  Trophy,
  ArrowRight,
  Sparkles,
  X,
  ExternalLink
} from 'lucide-react';
import studentHeroImg from '../assets/images/bscc_students_hero_1788135293504.jpg';
import { SCHOOL_PROFILE } from '../data/pkbmData';

interface HeroSectionProps {
  onOpenEligibility: () => void;
  onSelectForRegister?: (programCode: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenEligibility,
  onSelectForRegister
}) => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const handleStartLearning = () => {
    if (onSelectForRegister) {
      onSelectForRegister('Paket C (Setara SMA)');
    }
    const target = document.getElementById('program');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-gradient-to-b from-sky-50/60 via-emerald-50/30 to-white pt-6 sm:pt-10 pb-0 overflow-hidden">
      {/* Background Soft Sky & Mountain Ambient Gradient */}
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-sky-100/50 via-emerald-50/20 to-transparent pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Main Hero Grid: Left Content & Right Student Image + Quote */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-6 items-center min-h-[500px] lg:min-h-[560px]">
          
          {/* Left Column: Headline, Subtitle, 4 Cards & CTAs */}
          <div className="lg:col-span-6 xl:col-span-6 z-10 space-y-6 pt-2 pb-6">
            {/* 3-Line Headline matching reference image */}
            <div className="space-y-1">
              <h1 className="text-3xl sm:text-4xl lg:text-[46px] xl:text-[50px] font-black text-[#0f172a] leading-[1.12] tracking-tight">
                Belajar Hari Ini,
              </h1>
              <h1 className="text-3xl sm:text-4xl lg:text-[46px] xl:text-[50px] font-black text-[#059669] leading-[1.12] tracking-tight">
                Sukses Esok Hari,
              </h1>
              <h1 className="text-3xl sm:text-4xl lg:text-[46px] xl:text-[50px] font-black text-[#0f172a] leading-[1.12] tracking-tight">
                Raih Ijazahmu!
              </h1>
            </div>

            {/* Subtitle Description */}
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-xl font-normal">
              <strong className="text-slate-800 font-semibold">{SCHOOL_PROFILE.namaBrandLengkap}</strong> hadir untuk semua. Belajar fleksibel, berkualitas, dan berkarakter. Wujudkan masa depan yang lebih baik bersama kami.
            </p>

            {/* 4 Feature Cards Row matching exact design */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 pt-1">
              {/* Card 1: Pembelajaran Fleksibel */}
              <div className="bg-white/95 backdrop-blur-sm border border-slate-200/90 rounded-2xl p-3 sm:p-3.5 text-center shadow-xs hover:shadow-md transition-all group flex flex-col items-center justify-center">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#1e40af] flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                  <Laptop className="w-5 h-5" />
                </div>
                <h4 className="text-xs font-bold text-slate-800 leading-tight">
                  Pembelajaran Fleksibel
                </h4>
              </div>

              {/* Card 2: Bimbingan Berkualitas */}
              <div className="bg-white/95 backdrop-blur-sm border border-slate-200/90 rounded-2xl p-3 sm:p-3.5 text-center shadow-xs hover:shadow-md transition-all group flex flex-col items-center justify-center">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#047857] flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <h4 className="text-xs font-bold text-slate-800 leading-tight">
                  Bimbingan Berkualitas
                </h4>
              </div>

              {/* Card 3: Ijazah Resmi Diakui */}
              <div className="bg-white/95 backdrop-blur-sm border border-slate-200/90 rounded-2xl p-3 sm:p-3.5 text-center shadow-xs hover:shadow-md transition-all group flex flex-col items-center justify-center">
                <div className="w-10 h-10 rounded-xl bg-teal-50 text-[#0f766e] flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                  <Award className="w-5 h-5" />
                </div>
                <h4 className="text-xs font-bold text-slate-800 leading-tight">
                  Ijazah Resmi Diakui
                </h4>
              </div>

              {/* Card 4: Karakter & Keterampilan */}
              <div className="bg-white/95 backdrop-blur-sm border border-slate-200/90 rounded-2xl p-3 sm:p-3.5 text-center shadow-xs hover:shadow-md transition-all group flex flex-col items-center justify-center">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-[#b45309] flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                  <Users className="w-5 h-5" />
                </div>
                <h4 className="text-xs font-bold text-slate-800 leading-tight">
                  Karakter & Keterampilan
                </h4>
              </div>
            </div>

            {/* CTA Buttons Row */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={handleStartLearning}
                className="bg-[#065f46] hover:bg-[#044c37] text-white font-bold px-6 py-3 rounded-xl shadow-md hover:shadow-lg transition-all flex items-center space-x-2 text-sm group cursor-pointer"
              >
                <GraduationCap className="w-4 h-4 text-emerald-200" />
                <span>Mulai Belajar</span>
              </button>

              <a
                href={SCHOOL_PROFILE.portalSekolahUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-50 hover:bg-emerald-100/90 text-emerald-900 border border-emerald-300 font-bold px-5 py-3 rounded-xl shadow-xs transition-all flex items-center space-x-2 text-sm group"
                title="Buka Portal E-Learning BSCC Edu"
              >
                <Laptop className="w-4 h-4 text-[#065f46] group-hover:scale-110 transition-transform" />
                <span>Portal Sekolah (BSCC Edu)</span>
                <ExternalLink className="w-3.5 h-3.5 text-emerald-700" />
              </a>

              <button
                onClick={() => setIsVideoModalOpen(true)}
                className="bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 hover:border-slate-400 font-bold px-4 py-3 rounded-xl shadow-xs transition-all flex items-center space-x-2 text-sm group cursor-pointer"
              >
                <PlayCircle className="w-4 h-4 text-blue-600 group-hover:scale-110 transition-transform" />
                <span>Lihat Video</span>
              </button>
            </div>
          </div>

          {/* Right Column: Visual of Indonesian Students with Integrated Quote & Badges */}
          <div className="lg:col-span-6 xl:col-span-6 relative flex flex-col items-center justify-center">
            {/* Students Image Card with high-contrast typography overlays */}
            <div className="relative w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 group">
              <img
                src={studentHeroImg}
                alt="Siswa Siswi BSCC Learning Center PKBM Berkah Sadaya Cianjur"
                className="w-full h-[360px] sm:h-[420px] lg:h-[440px] object-cover object-center group-hover:scale-[1.02] transition-transform duration-700"
              />

              {/* High Contrast Multi-directional Gradient Overlays for Guaranteed Text Legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-slate-950/70 pointer-events-none" />

              {/* Integrated Top-Right Quote Box Inside Image */}
              <div className="absolute top-3.5 right-3.5 left-3.5 sm:left-auto sm:max-w-xs bg-slate-950/85 backdrop-blur-md p-3.5 sm:p-4 rounded-2xl border border-amber-400/40 shadow-2xl">
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center gap-1.5 text-amber-400 font-bold text-[10px] sm:text-xs tracking-wider uppercase">
                    <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                    <span>Motto BSCC</span>
                  </div>
                  <div className="w-8 h-0.5 bg-amber-400 rounded-full"></div>
                </div>
                
                <p className="text-xs sm:text-[13px] font-medium text-white italic leading-relaxed drop-shadow-md">
                  “Ilmu adalah kunci menuju masa depan. Belajar adalah langkah, Ijazah adalah bukti, Sukses adalah tujuan.”
                </p>
              </div>

              {/* Integrated Bottom Info Badges Inside Image */}
              <div className="absolute bottom-3.5 left-3.5 right-3.5 flex flex-wrap items-center justify-between gap-2">
                <div className="bg-slate-950/90 backdrop-blur-md text-white px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-xl text-[11px] sm:text-xs font-bold border border-emerald-500/50 shadow-xl flex items-center space-x-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Ijazah Resmi Kemendikdasmen • NPSN: {SCHOOL_PROFILE.npsn}</span>
                </div>

                <div className="bg-emerald-600/90 backdrop-blur-md text-white px-3 py-1.5 rounded-xl text-[11px] font-bold border border-emerald-400/40 shadow-lg hidden sm:flex items-center space-x-1">
                  <span>Terakreditasi</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Step Flow Ribbon Bar: BELAJAR -> BERKEMBANG -> RAIH IJAZAH -> SUKSES */}
        <div className="mt-8 relative">
          <div className="bg-[#081c3b] text-white rounded-3xl p-5 sm:p-6 shadow-2xl border border-slate-700/60 relative overflow-hidden">
            {/* Background ambient glow */}
            <div className="absolute -top-24 -left-24 w-60 h-60 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center pr-0 lg:pr-36">
              
              {/* Step 1: BELAJAR */}
              <div className="flex items-center space-x-3.5 relative">
                <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-lg shadow-emerald-500/30">
                  <BookOpen className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-extrabold text-sm sm:text-base text-white tracking-wide">
                    BELAJAR
                  </h3>
                  <p className="text-xs text-slate-300 leading-snug mt-0.5">
                    Belajar dengan semangat dan bimbingan terbaik
                  </p>
                </div>
                {/* Arrow */}
                <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 text-emerald-400 font-bold text-lg">
                  →
                </div>
              </div>

              {/* Step 2: BERKEMBANG */}
              <div className="flex items-center space-x-3.5 relative">
                <div className="w-12 h-12 rounded-full bg-amber-500 text-white flex items-center justify-center shrink-0 shadow-lg shadow-amber-500/30">
                  <Target className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-extrabold text-sm sm:text-base text-white tracking-wide">
                    BERKEMBANG
                  </h3>
                  <p className="text-xs text-slate-300 leading-snug mt-0.5">
                    Tingkatkan kemampuan, keterampilan, dan karakter diri
                  </p>
                </div>
                {/* Arrow */}
                <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 text-emerald-400 font-bold text-lg">
                  →
                </div>
              </div>

              {/* Step 3: RAIH IJAZAH */}
              <div className="flex items-center space-x-3.5 relative">
                <div className="w-12 h-12 rounded-full bg-sky-500 text-white flex items-center justify-center shrink-0 shadow-lg shadow-sky-500/30">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-extrabold text-sm sm:text-base text-white tracking-wide">
                    RAIH IJAZAH
                  </h3>
                  <p className="text-xs text-slate-300 leading-snug mt-0.5">
                    Dapatkan ijazah resmi yang diakui setara dengan sekolah formal
                  </p>
                </div>
                {/* Arrow */}
                <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 text-emerald-400 font-bold text-lg">
                  →
                </div>
              </div>

              {/* Step 4: SUKSES */}
              <div className="flex items-center space-x-3.5">
                <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-lg shadow-emerald-500/30">
                  <Trophy className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-extrabold text-sm sm:text-base text-white tracking-wide">
                    SUKSES
                  </h3>
                  <p className="text-xs text-slate-300 leading-snug mt-0.5">
                    Wujudkan cita-cita, masa depan cerah, dan hidup bermakna
                  </p>
                </div>
              </div>
            </div>

            {/* Overlapping Gold Rosette Ribbon Badge on Right */}
            <div className="hidden lg:flex absolute right-4 -top-3 -bottom-3 items-center">
              <div className="relative flex flex-col items-center">
                {/* Gold Rosette Outer */}
                <div className="w-28 h-28 rounded-full bg-gradient-to-tr from-amber-600 via-amber-400 to-yellow-200 p-1 shadow-2xl flex items-center justify-center border-2 border-amber-300 transform hover:scale-105 transition-transform">
                  <div className="w-full h-full rounded-full bg-gradient-to-b from-amber-500 via-amber-600 to-amber-700 flex flex-col items-center justify-center text-center p-2 text-slate-950 border border-yellow-200">
                    <span className="text-[8px] font-black tracking-widest uppercase text-slate-900 leading-none">
                      IJAZAH RESMI
                    </span>
                    <span className="text-xs font-black text-slate-950 tracking-tight my-0.5">
                      SETARA
                    </span>
                    <span className="text-base font-black text-slate-950 leading-none tracking-tighter">
                      SMA
                    </span>
                    <div className="flex items-center space-x-0.5 my-0.5">
                      <span className="text-[9px] text-yellow-200">★</span>
                      <span className="text-[9px] text-yellow-200">★</span>
                      <span className="text-[9px] text-yellow-200">★</span>
                    </div>
                    <span className="text-[7px] font-black tracking-wider uppercase text-slate-900 leading-none">
                      DIAKUI NASIONAL
                    </span>
                  </div>
                </div>

                {/* Blue Ribbons Hanging Below */}
                <div className="flex space-x-2 -mt-2">
                  <div className="w-4 h-6 bg-[#0b2545] border border-amber-400/50 transform -rotate-12 [clip-path:polygon(0_0,100%_0,100%_100%,50%_75%,0_100%)]"></div>
                  <div className="w-4 h-6 bg-[#0b2545] border border-amber-400/50 transform rotate-12 [clip-path:polygon(0_0,100%_0,100%_100%,50%_75%,0_100%)]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Value Proposition Pillars underneath matching bottom of image */}
        <div className="mt-8 py-6 px-4 bg-white rounded-2xl border border-slate-200/80 shadow-xs grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Pillar 1: TERPERCAYA */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 border border-emerald-200">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-extrabold text-xs sm:text-sm text-slate-900 uppercase tracking-wide">
                TERPERCAYA
              </h4>
              <p className="text-xs text-slate-600 leading-snug">
                Pengelolaan amanah dan profesional
              </p>
            </div>
          </div>

          {/* Pillar 2: TERBUKA UNTUK SEMUA */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 border border-emerald-200">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-extrabold text-xs sm:text-sm text-slate-900 uppercase tracking-wide">
                TERBUKA UNTUK SEMUA
              </h4>
              <p className="text-xs text-slate-600 leading-snug">
                Usia berapa pun, pendidikan untuk semua
              </p>
            </div>
          </div>

          {/* Pillar 3: BERKARAKTER */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 border border-emerald-200">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-extrabold text-xs sm:text-sm text-slate-900 uppercase tracking-wide">
                BERKARAKTER
              </h4>
              <p className="text-xs text-slate-600 leading-snug">
                Beriman, bertanggung jawab, dan berakhlak mulia
              </p>
            </div>
          </div>

          {/* Pillar 4: BERMITRA UNTUK NEGERI */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 border border-emerald-200">
              <Building2 className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-extrabold text-xs sm:text-sm text-slate-900 uppercase tracking-wide">
                BERMITRA UNTUK NEGERI
              </h4>
              <p className="text-xs text-slate-600 leading-snug">
                Bersinergi membangun generasi cerdas dan berdaya saing
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Video Preview Modal */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-6 shadow-2xl relative border border-slate-200">
            <button
              onClick={() => setIsVideoModalOpen(false)}
              className="absolute top-4 right-4 text-slate-500 hover:text-slate-900 p-2 rounded-xl bg-slate-100 hover:bg-slate-200 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-4">
              <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full uppercase tracking-wider">
                Profil & Pembelajaran BSCC
              </span>
              <h3 className="text-xl font-bold text-slate-900 mt-2">
                Mengenal BSCC Learning Center ({SCHOOL_PROFILE.namaResmi})
              </h3>
            </div>

            <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-900 flex items-center justify-center">
              <img
                src={studentHeroImg}
                alt="Video Profil PKBM"
                className="w-full h-full object-cover opacity-60"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center text-white">
                <PlayCircle className="w-16 h-16 text-emerald-400 mb-3 animate-pulse" />
                <p className="text-sm font-semibold max-w-md">
                  Pusat Kegiatan Belajar Masyarakat Berkah Sadaya Cianjur • Layanan Kejar Paket A, B, C & Pelatihan Vokasi Siap Kerja
                </p>
              </div>
            </div>

            <div className="mt-4 flex justify-end">
              <button
                onClick={() => setIsVideoModalOpen(false)}
                className="px-5 py-2 bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold rounded-xl"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
