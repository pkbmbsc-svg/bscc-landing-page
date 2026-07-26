import React, { useState } from 'react';
import { ProgramDetail } from '../types';
import { PROGRAMS } from '../data/pkbmData';
import { BookOpen, GraduationCap, Award, Cpu, Briefcase, ChevronRight, Check, Sparkles, Eye, Scissors, Wrench, Sprout, BookCheck } from 'lucide-react';

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
    <section id="program" className="py-20 px-4 max-w-6xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="inline-block px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold rounded-full mb-3">
          Resmi Kemendikbud & Vokasi Terapan
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
          Program Pendidikan & Pelatihan Vokasi
        </h2>
        <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
          Pilih jalur pendidikan kesetaraan atau keahlian vokasi digital yang fleksibel sesuai kebutuhan karir dan pendidikan Anda di Cianjur.
        </p>

        {/* Filter Tabs */}
        <div className="flex justify-center items-center space-x-2 mt-8 bg-slate-800/80 p-1.5 rounded-xl border border-slate-700/80 w-fit mx-auto text-xs sm:text-sm">
          <button
            onClick={() => setFilter('semua')}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              filter === 'semua'
                ? 'bg-amber-500 text-slate-950 font-bold shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Semua Program
          </button>
          <button
            onClick={() => setFilter('kesetaraan')}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              filter === 'kesetaraan'
                ? 'bg-amber-500 text-slate-950 font-bold shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Kejar Paket A, B, C
          </button>
          <button
            onClick={() => setFilter('vokasi')}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              filter === 'vokasi'
                ? 'bg-amber-500 text-slate-950 font-bold shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Vokasi & Keterampilan
          </button>
        </div>
      </div>

      {/* Program Cards Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filteredPrograms.map((prog) => {
          return (
            <div
              key={prog.id}
              className="bg-slate-800/60 border border-slate-700/80 rounded-2xl p-6 hover:border-amber-500/60 transition-all flex flex-col justify-between group shadow-lg hover:shadow-2xl"
            >
              <div>
                {/* Header Icon & Tag */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-amber-500/10 text-amber-400 rounded-xl flex items-center justify-center border border-amber-500/20 group-hover:scale-110 transition-transform">
                    {renderIcon(prog.icon)}
                  </div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 bg-slate-900 text-slate-300 rounded-md border border-slate-700">
                    {prog.setara}
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                  {prog.title}
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-4">
                  {prog.shortDesc}
                </p>

                {/* Quick Highlights */}
                <div className="space-y-2 mb-6 pt-2 border-t border-slate-700/60">
                  <div className="text-xs text-slate-300 flex items-start space-x-2">
                    <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Durasi:</strong> {prog.durasi}</span>
                  </div>
                  <div className="text-xs text-slate-300 flex items-start space-x-2">
                    <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Ijazah:</strong> {prog.ijazah.substring(0, 55)}...</span>
                  </div>
                </div>
              </div>

              {/* Card Actions */}
              <div className="pt-4 border-t border-slate-700/60 flex items-center space-x-2">
                <button
                  onClick={() => onSelectProgram(prog)}
                  className="flex-1 bg-slate-900 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold py-2.5 px-3 rounded-xl text-xs transition-all flex items-center justify-center space-x-1"
                >
                  <Eye className="w-3.5 h-3.5 text-amber-400" />
                  <span>Lihat Kurikulum</span>
                </button>

                <a
                  href="#pendaftaran"
                  onClick={() => onSelectForRegister(prog.code)}
                  className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold py-2.5 px-3 rounded-xl text-xs transition-all flex items-center justify-center space-x-1 shadow-md"
                >
                  <span>Daftar</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
