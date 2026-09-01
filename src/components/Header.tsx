import React from 'react';
import { User, ShieldCheck, Laptop, ExternalLink } from 'lucide-react';
import { SCHOOL_PROFILE } from '../data/pkbmData';
import { BsccLogo } from './BsccLogo';

interface HeaderProps {
  onOpenEligibility: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenEligibility
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex justify-between items-center gap-4">
        {/* Logo & Identity matching the authentic crest emblem */}
        <a href="#" className="flex items-center space-x-3 group">
          {/* Authentic BSCC Learning Center Emblem Logo */}
          <BsccLogo size="md" className="group-hover:scale-105 transition-transform" />

          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-1.5 sm:gap-2 leading-none">
              <span className="font-black text-lg sm:text-xl tracking-tight text-slate-900 group-hover:text-emerald-950 transition-colors">
                BSCC
              </span>
              <span className="h-3.5 w-px bg-slate-300 hidden sm:inline-block"></span>
              <span className="font-extrabold text-xs sm:text-[13px] tracking-wide text-emerald-800 uppercase">
                Learning Center
              </span>
            </div>
            <div className="flex items-center gap-1.5 mt-1">
              <span className="text-[10px] sm:text-[11px] font-bold text-slate-500 tracking-wider uppercase">
                PKBM Berkah Sadaya
              </span>
              <span className="w-1 h-1 rounded-full bg-emerald-500/70 hidden sm:inline-block"></span>
              <span className="text-[10px] font-semibold text-slate-400 hidden sm:inline-block">
                Cianjur
              </span>
            </div>
          </div>
        </a>

        {/* Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-6 text-sm font-semibold text-slate-700">
          <a
            href="#"
            className="text-[#065f46] font-bold relative after:content-[''] after:absolute after:-bottom-2.5 after:left-0 after:w-full after:h-0.5 after:bg-[#065f46] after:rounded-full"
          >
            Beranda
          </a>
          <a href="#tentang" className="hover:text-[#065f46] transition-colors">
            Tentang Kami
          </a>
          <a href="#program" className="hover:text-[#065f46] transition-colors">
            Program
          </a>
          <a href="#galeri" className="hover:text-[#065f46] transition-colors">
            Galeri
          </a>
          <a href="#legalitas" className="hover:text-[#065f46] transition-colors">
            Informasi
          </a>
          <a href="#kontak" className="hover:text-[#065f46] transition-colors">
            Kontak
          </a>
        </nav>

        {/* Right CTA Button: Portal Sekolah & Daftar Sekarang */}
        <div className="flex items-center space-x-2.5">
          {/* Portal Sekolah Quick Access (Visible on mobile and desktop) */}
          <a
            href={SCHOOL_PROFILE.portalSekolahUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-1.5 text-xs font-bold text-emerald-800 hover:text-emerald-950 bg-emerald-50 hover:bg-emerald-100 px-3 py-2 rounded-xl transition-all border border-emerald-300/80 shadow-2xs group cursor-pointer"
            title="Buka Portal Sekolah BSCC Edu (https://bscc-edu.ai.studio)"
          >
            <Laptop className="w-3.5 h-3.5 text-emerald-700 group-hover:scale-110 transition-transform" />
            <span className="hidden sm:inline">Portal Sekolah</span>
            <span className="sm:hidden">Portal</span>
            <ExternalLink className="w-3 h-3 text-emerald-600" />
          </a>

          <button
            onClick={onOpenEligibility}
            className="hidden xl:inline-flex items-center text-xs font-semibold text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 px-3 py-2 rounded-xl transition-colors border border-slate-200"
          >
            <ShieldCheck className="w-3.5 h-3.5 mr-1 text-emerald-700" />
            <span>Cek Syarat</span>
          </button>

          <a
            href="#pendaftaran"
            className="bg-[#065f46] hover:bg-[#044c37] text-white font-semibold px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm transition-all shadow-sm hover:shadow-md flex items-center space-x-1.5 sm:space-x-2 shrink-0 group"
          >
            <User className="w-4 h-4 text-emerald-200 group-hover:text-white transition-colors" />
            <span>Daftar Sekarang</span>
          </a>
        </div>
      </div>
    </header>
  );
};
