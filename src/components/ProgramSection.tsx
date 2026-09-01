import React, { useState } from 'react';
import { ProgramDetail } from '../types';
import { PROGRAMS, SCHOOL_PROFILE } from '../data/pkbmData';
import {
  BookOpen,
  GraduationCap,
  Award,
  Cpu,
  Briefcase,
  ChevronRight,
  Check,
  Eye,
  Scissors,
  Wrench,
  Sprout,
  BookCheck,
  Laptop,
  PlayCircle,
  FileText,
  CheckCircle2,
  Sparkles,
  ExternalLink
} from 'lucide-react';

interface ProgramSectionProps {
  onSelectProgram: (program: ProgramDetail) => void;
  onSelectForRegister: (programName: string) => void;
}

export const ProgramSection: React.FC<ProgramSectionProps> = ({
  onSelectProgram,
  onSelectForRegister
}) => {
  const [filter, setFilter] = useState<'semua' | 'kesetaraan' | 'vokasi'>('semua');

  const filteredPrograms = PROGRAMS.filter((p) => {
    if (filter === 'semua') return true;
    return p.category === filter;
  });

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'BookOpen':
        return <BookOpen className="w-6 h-6" />;
      case 'GraduationCap':
        return <GraduationCap className="w-6 h-6" />;
      case 'Award':
        return <Award className="w-6 h-6" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6" />;
      case 'Briefcase':
        return <Briefcase className="w-6 h-6" />;
      case 'Scissors':
        return <Scissors className="w-6 h-6" />;
      case 'Wrench':
        return <Wrench className="w-6 h-6" />;
      case 'Sprout':
        return <Sprout className="w-6 h-6" />;
      case 'BookCheck':
        return <BookCheck className="w-6 h-6" />;
      default:
        return <BookOpen className="w-6 h-6" />;
    }
  };

  return (
    <section id="program" className="py-20 px-4 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="inline-flex items-center space-x-1.5 px-3.5 py-1 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold rounded-full mb-3">
          <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
          <span>Dua Jalur Pembelajaran Terpadu</span>
        </span>
        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-4">
          Pendidikan Kesetaraan & Pelatihan Vokasi
        </h2>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          Pilih jalur pendidikan kesetaraan ijazah resmi bersama <strong className="text-emerald-800 font-bold">{SCHOOL_PROFILE.namaBrandLengkap}</strong> atau tingkatkan keahlian praktis siap kerja dan wirausaha melalui portal <strong className="text-emerald-700 font-bold">{SCHOOL_PROFILE.namaLms}</strong>.
        </p>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center items-center gap-2 mt-8 bg-slate-100 p-1.5 rounded-2xl border border-slate-200 w-fit mx-auto text-xs sm:text-sm">
          <button
            onClick={() => setFilter('semua')}
            className={`px-5 py-2.5 rounded-xl font-bold transition-all cursor-pointer ${
              filter === 'semua'
                ? 'bg-[#065f46] text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Semua Program
          </button>
          <button
            onClick={() => setFilter('kesetaraan')}
            className={`px-5 py-2.5 rounded-xl font-bold transition-all cursor-pointer ${
              filter === 'kesetaraan'
                ? 'bg-[#065f46] text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            🎓 Kejar Paket A, B, C (Ijazah Resmi)
          </button>
          <button
            onClick={() => setFilter('vokasi')}
            className={`px-5 py-2.5 rounded-xl font-bold transition-all cursor-pointer ${
              filter === 'vokasi'
                ? 'bg-[#065f46] text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            ⚙️ Kursus Vokasi & Keterampilan
          </button>
        </div>
      </div>

      {/* Program Cards Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filteredPrograms.map((prog) => {
          const isKesetaraan = prog.category === 'kesetaraan';
          return (
            <div
              key={prog.id}
              className={`bg-white border rounded-3xl p-6 transition-all flex flex-col justify-between group shadow-sm hover:shadow-xl ${
                isKesetaraan ? 'border-slate-200 hover:border-emerald-500' : 'border-slate-200 hover:border-teal-500'
              }`}
            >
              <div>
                {/* Header Icon & Tag */}
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border group-hover:scale-105 transition-transform ${
                    isKesetaraan
                      ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                      : 'bg-teal-50 text-teal-700 border-teal-200'
                  }`}>
                    {renderIcon(prog.icon)}
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] font-bold block text-slate-500 uppercase tracking-wider mb-0.5">
                      {isKesetaraan ? 'Pendidikan Kesetaraan' : 'Pelatihan Vokasi'}
                    </span>
                    <span className="text-[11px] font-bold px-2.5 py-0.5 bg-slate-100 text-slate-800 rounded-md border border-slate-200 inline-block">
                      {prog.setara}
                    </span>
                  </div>
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-extrabold text-slate-900 mb-2 group-hover:text-emerald-700 transition-colors">
                  {prog.title}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                  {prog.shortDesc}
                </p>

                {/* Quick Highlights */}
                <div className="space-y-2 mb-6 pt-3 border-t border-slate-100">
                  <div className="text-xs text-slate-700 flex items-start space-x-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Durasi:</strong> {prog.durasi}</span>
                  </div>
                  <div className="text-xs text-slate-700 flex items-start space-x-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Output:</strong> {prog.ijazah.substring(0, 56)}...</span>
                  </div>
                </div>
              </div>

              {/* Card Actions */}
              <div className="pt-4 border-t border-slate-100 flex items-center space-x-2">
                <button
                  onClick={() => onSelectProgram(prog)}
                  className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold py-2.5 px-3 rounded-xl text-xs transition-all flex items-center justify-center space-x-1.5"
                >
                  <Eye className="w-3.5 h-3.5 text-emerald-700" />
                  <span>Kurikulum</span>
                </button>

                <a
                  href="#pendaftaran"
                  onClick={() => onSelectForRegister(prog.code)}
                  className={`font-bold py-2.5 px-4 rounded-xl text-xs transition-all flex items-center justify-center space-x-1 shadow-sm ${
                    isKesetaraan
                      ? 'bg-[#065f46] hover:bg-[#044c37] text-white'
                      : 'bg-emerald-600 hover:bg-emerald-500 text-white'
                  }`}
                >
                  <span>Daftar</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          );
        })}
      </div>

      {/* Dedicated Showcase: BSCC Learning Center (BSC Edu LMS) */}
      <div id="vokasi-lms" className="mt-16 bg-gradient-to-br from-slate-900 via-[#081c3b] to-slate-900 text-white rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-bold rounded-full">
              <Laptop className="w-3.5 h-3.5" />
              <span>Divisi Vokasi & E-Learning</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-black text-white">
              {SCHOOL_PROFILE.namaVokasi} ({SCHOOL_PROFILE.namaLms})
            </h3>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Portal pembelajaran digital dan pusat pelatihan vokasi mandiri yang dirancang untuk membekali warga belajar dengan sertifikasi keahlian terapan, akses modul e-learning kapan saja, serta bimbingan praktisi ahli.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-200 pt-2">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Modul Online & Video Pembelajaran Praktik</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Lab Komputer & Praktik Bengkel/Studio</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Sertifikat Kompetensi Kerja Terstandar</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Pendampingan Portofolio & Bisnis Mandiri</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-slate-950/80 border border-slate-800 rounded-2xl p-5 space-y-3">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-lg bg-emerald-500 text-slate-950 flex items-center justify-center font-black text-xs">
                  EDU
                </div>
                <div>
                  <p className="text-white text-xs font-bold">{SCHOOL_PROFILE.namaLms} Learning Hub</p>
                  <p className="text-[11px] text-slate-400">by {SCHOOL_PROFILE.namaVokasi}</p>
                </div>
              </div>
              <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                Akses Flexi
              </span>
            </div>

            <div className="space-y-2 text-xs">
              <div className="p-2.5 bg-slate-900/90 rounded-xl border border-slate-800 flex items-center justify-between">
                <div className="flex items-center space-x-2 text-slate-300">
                  <PlayCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Video & Modul Praktik Terstruktur</span>
                </div>
                <span className="text-[10px] text-slate-400">HD Video</span>
              </div>

              <div className="p-2.5 bg-slate-900/90 rounded-xl border border-slate-800 flex items-center justify-between">
                <div className="flex items-center space-x-2 text-slate-300">
                  <FileText className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Tugas Praktik & Portofolio Karya</span>
                </div>
                <span className="text-[10px] text-slate-400">Review Tutor</span>
              </div>

              <div className="p-2.5 bg-slate-900/90 rounded-xl border border-slate-800 flex items-center justify-between">
                <div className="flex items-center space-x-2 text-slate-300">
                  <Award className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>Ujian Kompetensi & Sertifikat Digital</span>
                </div>
                <span className="text-[10px] text-emerald-400 font-semibold">Resmi</span>
              </div>
            </div>

            <div className="pt-2 space-y-2">
              <a
                href={SCHOOL_PROFILE.portalSekolahUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold py-2.5 px-4 rounded-xl text-xs flex items-center justify-center space-x-1.5 transition-colors shadow-lg group cursor-pointer"
              >
                <Laptop className="w-4 h-4 text-slate-950" />
                <span>Masuk Portal Sekolah ({SCHOOL_PROFILE.portalSekolahUrl.replace('https://', '')})</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-950 group-hover:translate-x-0.5 transition-transform" />
              </a>

              <a
                href="#pendaftaran"
                onClick={() => onSelectForRegister('Vokasi & Keterampilan')}
                className="w-full bg-slate-900 hover:bg-slate-800 text-emerald-400 border border-emerald-500/30 font-bold py-2 px-4 rounded-xl text-xs flex items-center justify-center space-x-1.5 transition-colors cursor-pointer"
              >
                <span>Daftar Pelatihan Vokasi ({SCHOOL_PROFILE.namaVokasi})</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
