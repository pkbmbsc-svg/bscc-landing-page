import React from 'react';
import { X, CheckCircle2, Clock, GraduationCap, BookOpen, Award, ArrowRight } from 'lucide-react';
import { ProgramDetail } from '../types';

interface ProgramDetailModalProps {
  program: ProgramDetail | null;
  onClose: () => void;
  onSelectForRegister: (programCode: string) => void;
}

export const ProgramDetailModal: React.FC<ProgramDetailModalProps> = ({
  program,
  onClose,
  onSelectForRegister
}) => {
  if (!program) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-slate-900 border border-slate-700 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white p-2 rounded-xl bg-slate-800 hover:bg-slate-700 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Badge */}
        <div className="mb-4">
          <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 bg-amber-500/10 text-amber-400 border border-amber-500/20 rounded-full">
            {program.setara}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-2xl font-extrabold text-white mb-3">
          {program.title}
        </h3>
        <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
          {program.fullDesc}
        </p>

        {/* Info Grid */}
        <div className="grid sm:grid-cols-2 gap-4 mb-6 text-xs">
          <div className="p-3.5 bg-slate-800/80 rounded-xl border border-slate-700">
            <span className="text-slate-400 block mb-1 font-medium">Target Peserta:</span>
            <span className="text-white font-semibold">{program.targetAudience}</span>
          </div>
          <div className="p-3.5 bg-slate-800/80 rounded-xl border border-slate-700">
            <span className="text-slate-400 block mb-1 font-medium">Estimasi Durasi:</span>
            <span className="text-amber-400 font-semibold flex items-center space-x-1">
              <Clock className="w-3.5 h-3.5 mr-1 inline" />
              {program.durasi}
            </span>
          </div>
        </div>

        {/* Mata Pelajaran / Materi */}
        <div className="mb-6">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-3 flex items-center space-x-1.5">
            <BookOpen className="w-4 h-4 text-amber-400" />
            <span>Mata Pelajaran & Kurikulum Utama</span>
          </h4>
          <div className="flex flex-wrap gap-2">
            {program.mataPelajaran.map((mp, idx) => (
              <span
                key={idx}
                className="px-3 py-1.5 bg-slate-800 text-slate-200 border border-slate-700 rounded-lg text-xs font-medium"
              >
                {mp}
              </span>
            ))}
          </div>
        </div>

        {/* Persyaratan Dokumen */}
        <div className="mb-6">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-3 flex items-center space-x-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Syarat Berkas Dokumen Pendaftaran</span>
          </h4>
          <ul className="space-y-2 text-xs text-slate-300">
            {program.persyaratan.map((req, i) => (
              <li key={i} className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0"></span>
                <span>{req}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Prospek Lulusan */}
        <div className="mb-8 p-4 bg-emerald-950/20 border border-emerald-500/30 rounded-xl">
          <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-2 flex items-center space-x-1.5">
            <Award className="w-4 h-4" />
            <span>Prospek & Manfaat Lulusan</span>
          </h4>
          <div className="grid sm:grid-cols-2 gap-2 text-xs text-slate-300">
            {program.prospek.map((p, idx) => (
              <div key={idx} className="flex items-center space-x-1.5">
                <span className="text-emerald-400 font-bold">✓</span>
                <span>{p}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Modal Actions */}
        <div className="flex items-center justify-end space-x-3 pt-4 border-t border-slate-800">
          <button
            onClick={onClose}
            className="px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl text-xs font-semibold transition-colors"
          >
            Tutup
          </button>
          <a
            href="#pendaftaran"
            onClick={() => {
              onSelectForRegister(program.code);
              onClose();
            }}
            className="px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 rounded-xl text-xs font-bold transition-all flex items-center space-x-1.5 shadow-lg"
          >
            <span>Lanjut Daftar {program.title}</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};
