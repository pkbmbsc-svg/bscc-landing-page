import React from 'react';
import { BookOpen, GraduationCap, ShieldCheck } from 'lucide-react';

interface HeaderProps {
  onOpenEligibility: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenEligibility
}) => {
  return (
    <nav className="sticky top-0 z-40 bg-slate-900/90 backdrop-blur-md border-b border-slate-800 transition-all">
      <div className="max-w-6xl mx-auto px-4 py-3 sm:py-4 flex flex-wrap justify-between items-center gap-3">
        {/* Logo & Identity */}
        <a href="#" className="flex items-center space-x-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 via-amber-400 to-emerald-500 flex items-center justify-center font-extrabold text-slate-950 text-xl shadow-md group-hover:scale-105 transition-transform">
            BS
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <span className="font-bold text-base sm:text-lg tracking-wide block leading-none text-white">
                BSCC Learning Center
              </span>
              <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <ShieldCheck className="w-3 h-3 mr-1" /> Terakreditasi
              </span>
            </div>
            <span className="text-xs text-slate-400 block mt-0.5">
              PKBM Berkah Sadaya Cianjur
            </span>
          </div>
        </a>

        {/* Links */}
        <div className="hidden lg:flex items-center space-x-6 text-sm font-medium text-slate-300">
          <a href="#program" className="hover:text-amber-400 transition-colors">
            Program Sekolah
          </a>
          <a href="#galeri" className="hover:text-amber-400 transition-colors">
            Galeri Kegiatan
          </a>
          <button
            onClick={onOpenEligibility}
            className="text-amber-400 hover:text-amber-300 font-semibold transition-colors flex items-center space-x-1"
          >
            <span>Cek Kelayakan</span>
          </button>
          <a href="#faq" className="hover:text-amber-400 transition-colors">
            FAQ
          </a>
          <a href="#lokasi" className="hover:text-amber-400 transition-colors">
            Kontak
          </a>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center space-x-2 sm:space-x-3">
          <a
            href="#pendaftaran"
            className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-4 py-2 rounded-lg text-xs sm:text-sm transition-all shadow-lg shadow-amber-500/10 flex items-center space-x-1.5"
          >
            <GraduationCap className="w-4 h-4" />
            <span>Daftar Sekarang</span>
          </a>
        </div>
      </div>
    </nav>
  );
};
