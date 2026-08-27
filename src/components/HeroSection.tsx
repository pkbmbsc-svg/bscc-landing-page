import React, { useState } from 'react';
import { Sparkles, ArrowRight, CheckCircle2, FileCheck2, Send, Smartphone, User, BookOpen, ShieldCheck } from 'lucide-react';
import heroBanner from '../assets/images/pkbm_hero_banner_1785071380972.jpg';
import { SCHOOL_PROFILE } from '../data/pkbmData';

interface HeroSectionProps {
  onOpenEligibility: () => void;
  onSelectForRegister?: (programCode: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenEligibility,
  onSelectForRegister
}) => {
  const [quickNama, setQuickNama] = useState('');
  const [quickWA, setQuickWA] = useState('');
  const [quickProgram, setQuickProgram] = useState('Paket C (Setara SMA)');

  const quickPrograms = [
    { code: 'Paket C (Setara SMA)', label: '🎓 Paket C (SMA)' },
    { code: 'Paket B (Setara SMP)', label: '📘 Paket B (SMP)' },
    { code: 'Paket A (Setara SD)', label: '📗 Paket A (SD)' },
    { code: 'Kursus Vokasi Otomotif Roda Dua', label: '⚙️ Vokasi Otomotif' },
    { code: 'Kursus Tata Busana & Menjahit', label: '👗 Vokasi Menjahit' }
  ];

  const handleQuickSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formattedMsg = `Halo Admin ${SCHOOL_PROFILE.namaBrandLengkap} (${SCHOOL_PROFILE.namaResmi}), saya ingin mendaftar / konsultasi kilat:

- *Nama*: ${quickNama || '[Nama Belum Diisi]'}
- *Nomor WA*: ${quickWA || '[WA Belum Diisi]'}
- *Program Pilihan*: ${quickProgram}

Mohon informasi rincian pendaftaran dan panduan berkas. Terima kasih!`;

    const adminWA = SCHOOL_PROFILE.whatsappNumberUrl || '6289509828343';
    const encoded = encodeURIComponent(formattedMsg);
    window.open(`https://wa.me/${adminWA}?text=${encoded}`, '_blank');
  };

  const handleQuickPillClick = (progCode: string) => {
    setQuickProgram(progCode);
    if (onSelectForRegister) {
      onSelectForRegister(progCode);
    }
  };

  return (
    <section className="relative py-10 md:py-16 px-4 overflow-hidden border-b border-slate-800/80">
      {/* Background ambient lighting */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10 grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">
        {/* Left Column: Text Content & Quick Program Selector */}
        <div className="lg:col-span-7 text-left space-y-5">
          <div className="inline-flex flex-wrap items-center gap-2 px-3.5 py-1.5 bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold rounded-full">
            <span className="flex items-center space-x-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{SCHOOL_PROFILE.kepanjanganBrand}</span>
            </span>
            <span className="text-amber-500/40">•</span>
            <span>NPSN: {SCHOOL_PROFILE.npsn}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Putus Sekolah Bukan Akhir. <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-amber-400 via-amber-300 to-emerald-400 bg-clip-text text-transparent">
              Raih Ijazah & Keterampilan Bersama BSC.
            </span>
          </h1>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
            Raih Ijazah Resmi <strong className="text-amber-400 font-semibold">Kejar Paket A, B, C</strong> bersama <strong className="text-white font-semibold">{SCHOOL_PROFILE.namaBrandLengkap}</strong> (Satuan Pendidikan Resmi: <span className="text-slate-200 underline decoration-amber-500/50">{SCHOOL_PROFILE.namaResmi}</span>, NPSN: {SCHOOL_PROFILE.npsn}). Belajar fleksibel didukung portal <strong className="text-emerald-400 font-semibold">{SCHOOL_PROFILE.namaLms}</strong>.
          </p>

          {/* Key Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm text-slate-300 pt-1">
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Ijazah Sah untuk Kuliah, Kerja & CPNS</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Jadwal Belajar Fleksibel (Online / Modul)</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Terdaftar Dapodik Kemendikdasmen RI</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Bebas Batas Usia & Biaya Bisa Diangsur</span>
            </div>
          </div>

          {/* Quick Program Pills */}
          <div className="pt-2">
            <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center space-x-1.5">
              <BookOpen className="w-3.5 h-3.5 text-amber-400" />
              <span>Pilih Program Langsung:</span>
            </p>
            <div className="flex flex-wrap gap-2">
              {quickPrograms.map((qp) => (
                <button
                  key={qp.code}
                  type="button"
                  onClick={() => handleQuickPillClick(qp.code)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center space-x-1 border ${
                    quickProgram === qp.code
                      ? 'bg-amber-500 text-slate-950 border-amber-400 font-bold shadow-md shadow-amber-500/20'
                      : 'bg-slate-800/80 text-slate-300 border-slate-700 hover:border-amber-500/50 hover:text-white'
                  }`}
                >
                  <span>{qp.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Quick Action Navigation Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <a
              href="#pendaftaran"
              className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-6 py-3 rounded-xl shadow-lg shadow-amber-500/20 text-center transition-all flex items-center justify-center space-x-2 text-sm group"
            >
              <span>Formulir Pendaftaran Lengkap</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <button
              onClick={onOpenEligibility}
              className="bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold px-5 py-3 rounded-xl text-center transition-all text-sm flex items-center justify-center space-x-2"
            >
              <span>Cek Kelayakan Usia & Syarat</span>
            </button>
          </div>
        </div>

        {/* Right Column: Quick Registration Form Card & Visual Snapshot */}
        <div className="lg:col-span-5">
          <div className="bg-slate-800/90 border border-slate-700/90 rounded-2xl p-5 sm:p-6 shadow-2xl backdrop-blur-md relative overflow-hidden">
            {/* Header Form Quick Action */}
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-700/70">
              <div>
                <div className="inline-flex items-center space-x-1 text-[11px] font-bold text-amber-400 uppercase tracking-wider">
                  <Sparkles className="w-3 h-3 text-amber-400" />
                  <span>Quick Action • Pendaftaran Cepat</span>
                </div>
                <h3 className="text-base font-extrabold text-white mt-0.5">
                  Konsultasi / Daftar Kilat
                </h3>
              </div>
              <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                <FileCheck2 className="w-5 h-5" />
              </div>
            </div>

            {/* Form Fields */}
            <form onSubmit={handleQuickSubmit} className="space-y-3.5">
              <div>
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-slate-300 mb-1 flex items-center space-x-1">
                  <User className="w-3 h-3 text-amber-400" />
                  <span>Nama Calon Siswa</span>
                </label>
                <input
                  type="text"
                  placeholder="Contoh: Ahmad Fauzi"
                  value={quickNama}
                  onChange={(e) => setQuickNama(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3.5 py-2 text-xs sm:text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-amber-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-slate-300 mb-1 flex items-center space-x-1">
                  <Smartphone className="w-3 h-3 text-emerald-400" />
                  <span>Nomor WhatsApp Aktif</span>
                </label>
                <input
                  type="tel"
                  placeholder="Contoh: 081234567890"
                  value={quickWA}
                  onChange={(e) => setQuickWA(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3.5 py-2 text-xs sm:text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-amber-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-slate-300 mb-1 flex items-center space-x-1">
                  <BookOpen className="w-3 h-3 text-amber-400" />
                  <span>Program yang Dipilih</span>
                </label>
                <select
                  value={quickProgram}
                  onChange={(e) => setQuickProgram(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3.5 py-2 text-xs sm:text-sm text-white focus:outline-none focus:border-amber-500 transition-colors"
                >
                  <option value="Paket C (Setara SMA)">🎓 Paket C (Setara SMA) - Ijazah Resmi</option>
                  <option value="Paket B (Setara SMP)">📘 Paket B (Setara SMP) - Ijazah Resmi</option>
                  <option value="Paket A (Setara SD)">📗 Paket A (Setara SD) - Ijazah Resmi</option>
                  <option value="Kursus Vokasi Otomotif Roda Dua">⚙️ Kursus Vokasi Otomotif Sepeda Motor</option>
                  <option value="Kursus Tata Busana & Menjahit">👗 Kursus Tata Busana & Menjahit</option>
                  <option value="Kursus Komputer & Digital Skills">💻 Kursus Komputer & Digital Skills</option>
                  <option value="Program Al-Qolam (Tahfidz & Diniyah)">📖 Program Al-Qolam (Tahfidz & Diniyah)</option>
                  <option value="Vokasi Pertanian & Agribisnis">🌱 Vokasi Pertanian & Agribisnis</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-slate-950 font-extrabold py-3 px-4 rounded-xl text-xs sm:text-sm transition-all flex items-center justify-center space-x-2 shadow-lg shadow-amber-500/20 group"
              >
                <Send className="w-4 h-4 text-slate-950 group-hover:translate-x-0.5 transition-transform" />
                <span>Kirim via WhatsApp Admin</span>
              </button>
            </form>

            {/* Quick Trust Footer */}
            <div className="mt-4 pt-3 border-t border-slate-700/60 flex items-center justify-between text-[11px] text-slate-400">
              <div className="flex items-center space-x-1 text-emerald-400">
                <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
                <span>NPSN: {SCHOOL_PROFILE.npsn}</span>
              </div>
              <a
                href="#pendaftaran"
                className="text-amber-400 hover:underline font-semibold"
              >
                Form Lengkap & Detail Berkas →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
