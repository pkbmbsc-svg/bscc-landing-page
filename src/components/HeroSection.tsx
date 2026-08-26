import React from 'react';
import { Sparkles, ArrowRight, CheckCircle2, ShieldCheck, FileCheck2, Clock, Users, ExternalLink } from 'lucide-react';
import heroBanner from '../assets/images/pkbm_hero_banner_1785071380972.jpg';
import { SCHOOL_PROFILE } from '../data/pkbmData';

interface HeroSectionProps {
  onOpenEligibility: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenEligibility }) => {
  return (
    <section className="relative py-12 md:py-20 px-4 overflow-hidden border-b border-slate-800/80">
      {/* Background ambient lighting */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10 grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Text Content */}
        <div className="lg:col-span-7 text-left space-y-6">
          <div className="inline-flex flex-wrap items-center gap-2 px-3.5 py-1.5 bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold rounded-full">
            <span className="flex items-center space-x-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{SCHOOL_PROFILE.kepanjanganBrand}</span>
            </span>
            <span className="text-amber-500/40">•</span>
            <span>NPSN: {SCHOOL_PROFILE.npsn}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Putus Sekolah Bukan Akhir. <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-amber-400 via-amber-300 to-emerald-400 bg-clip-text text-transparent">
              Raih Ijazah & Keterampilan Bersama BSC.
            </span>
          </h1>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
            Raih Ijazah Resmi <strong className="text-amber-400 font-semibold">Kejar Paket A, B, C</strong> bersama <strong className="text-white font-semibold">{SCHOOL_PROFILE.namaBrandLengkap}</strong> (Legalitas Resmi: <span className="text-slate-200 underline decoration-amber-500/50">{SCHOOL_PROFILE.namaResmi}</span>, NPSN: {SCHOOL_PROFILE.npsn}). Belajar fleksibel didukung portal e-learning <strong className="text-emerald-400 font-semibold">{SCHOOL_PROFILE.namaLms}</strong>.
          </p>

          {/* Key Bullet Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-300 pt-1">
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Ijazah Sah untuk Kuliah, Kerja & CPNS</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Jadwal Belajar Online & Flexi</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Terdaftar Dapodik Kemendikdasmen RI</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Bebas Batas Usia Maksimal</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <a
              href="#pendaftaran"
              className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-8 py-4 rounded-xl shadow-lg shadow-amber-500/20 text-center transition-all flex items-center justify-center space-x-2 text-base group"
            >
              <span>Form Pendaftaran Siswa</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <button
              onClick={onOpenEligibility}
              className="bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold px-6 py-4 rounded-xl text-center transition-all text-base flex items-center justify-center space-x-2"
            >
              <span>Cek Kelayakan Usia & Syarat</span>
            </button>
          </div>
        </div>

        {/* Hero Visual Showcase */}
        <div className="lg:col-span-5 relative">
          <div className="relative rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl bg-slate-800 group">
            <img
              src={heroBanner}
              alt="Suasana Belajar PKBM Berkah Sadaya Cianjur"
              className="w-full h-72 sm:h-96 lg:h-[420px] object-cover group-hover:scale-105 transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>

            {/* Overlaid Badge */}
            <div className="absolute bottom-4 left-4 right-4 bg-slate-900/90 backdrop-blur-md p-4 rounded-xl border border-slate-700/80 text-xs flex items-center justify-between">
              <div>
                <p className="font-bold text-white text-sm">{SCHOOL_PROFILE.namaBrandLengkap}</p>
                <p className="text-slate-400">Legalitas: {SCHOOL_PROFILE.namaResmi} ({SCHOOL_PROFILE.desaKelurahan}, Kec. {SCHOOL_PROFILE.kecamatan})</p>
              </div>
              <span className="px-2.5 py-1 bg-amber-500/20 text-amber-300 font-semibold border border-amber-500/30 rounded-lg shrink-0 ml-2">
                NPSN {SCHOOL_PROFILE.npsn}
              </span>
            </div>
          </div>

          {/* Floating Metric Badge */}
          <div className="absolute -top-4 -right-2 sm:-top-6 sm:-right-4 bg-slate-800/95 backdrop-blur-md border border-slate-700 text-white p-3 sm:p-4 rounded-2xl shadow-2xl flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <FileCheck2 className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-slate-400">Status Satuan Pendidikan</p>
              <p className="text-sm font-bold text-emerald-400">Resmi Kemendikdasmen</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
