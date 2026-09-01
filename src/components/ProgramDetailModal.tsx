import React from 'react';
import { X, CheckCircle2, Clock, GraduationCap, BookOpen, Award, ArrowRight } from 'lucide-react';
import { ProgramDetail } from '../types';
import { BsccLogo } from './BsccLogo';

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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white border border-slate-200 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-500 hover:text-slate-900 p-2 rounded-xl bg-slate-100 hover:bg-slate-200 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header with Logo & Badge */}
        <div className="flex items-center gap-3 mb-4">
          <BsccLogo size="sm" className="shrink-0" />
          <span className="text-xs font-black uppercase tracking-wider px-3 py-1 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded-full">
            {program.setara}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-2xl font-black text-slate-900 mb-3">
          {program.title}
        </h3>
        <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
          {program.fullDesc}
        </p>

        {/* Info Grid */}
        <div className="grid sm:grid-cols-2 gap-4 mb-6 text-xs">
          <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200">
            <span className="text-slate-500 block mb-1 font-medium">Target Peserta:</span>
            <span className="text-slate-900 font-bold">{program.targetAudience}</span>
          </div>
          <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200">
            <span className="text-slate-500 block mb-1 font-medium">Estimasi Durasi:</span>
            <span className="text-emerald-700 font-bold flex items-center space-x-1">
              <Clock className="w-3.5 h-3.5 mr-1 inline" />
              {program.durasi}
            </span>
          </div>
        </div>

        {/* Mata Pelajaran / Materi */}
        <div className="mb-6">
          <h4 className="text-xs font-black uppercase tracking-wider text-slate-800 mb-3 flex items-center space-x-1.5">
            <BookOpen className="w-4 h-4 text-emerald-700" />
            <span>Mata Pelajaran & Kurikulum Utama</span>
          </h4>
          <div className="flex flex-wrap gap-2">
            {program.mataPelajaran.map((mp, idx) => (
              <span
                key={idx}
                className="px-3 py-1.5 bg-slate-100 text-slate-800 border border-slate-200 rounded-xl text-xs font-semibold"
              >
                {mp}
              </span>
            ))}
          </div>
        </div>

        {/* Persyaratan Dokumen */}
        <div className="mb-6">
          <h4 className="text-xs font-black uppercase tracking-wider text-slate-800 mb-3 flex items-center space-x-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-700" />
            <span>Syarat Berkas Dokumen Pendaftaran</span>
          </h4>
          <ul className="space-y-2 text-xs text-slate-700">
            {program.persyaratan.map((req, i) => (
              <li key={i} className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 shrink-0"></span>
                <span>{req}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Prospek Lulusan */}
        <div className="mb-8 p-4 bg-emerald-50/60 border border-emerald-200 rounded-2xl">
          <h4 className="text-xs font-black uppercase tracking-wider text-emerald-900 mb-2 flex items-center space-x-1.5">
            <Award className="w-4 h-4 text-emerald-700" />
            <span>Prospek & Manfaat Lulusan</span>
          </h4>
          <div className="grid sm:grid-cols-2 gap-2 text-xs text-slate-700">
            {program.prospek.map((p, idx) => (
              <div key={idx} className="flex items-center space-x-1.5">
                <span className="text-emerald-700 font-bold">✓</span>
                <span>{p}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Modal Actions */}
        <div className="flex items-center justify-end space-x-3 pt-4 border-t border-slate-200">
          <button
            onClick={onClose}
            className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold transition-colors cursor-pointer"
          >
            Tutup
          </button>
          <a
            href="#pendaftaran"
            onClick={() => {
              onSelectForRegister(program.code);
              onClose();
            }}
            className="px-5 py-2.5 bg-[#065f46] hover:bg-[#044c37] text-white rounded-xl text-xs font-bold transition-all flex items-center space-x-1.5 shadow-md cursor-pointer"
          >
            <span>Lanjut Daftar {program.title}</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};
