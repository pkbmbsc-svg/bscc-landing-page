import React from 'react';
import { SCHOOL_PROFILE } from '../data/pkbmData';
import { BsccLogo } from './BsccLogo';
import {
  MapPin,
  Phone,
  Mail,
  ShieldCheck,
  Globe,
  ExternalLink,
  MessageCircle,
  Clock,
  Award,
  ChevronRight,
  BookOpen,
  Laptop
} from 'lucide-react';

interface FooterProps {
  onOpenEligibility: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenEligibility }) => {
  return (
    <footer id="kontak" className="bg-[#081c3b] text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              {/* Authentic BSCC Logo emblem */}
              <BsccLogo size="lg" className="border-2 border-emerald-400/80" />

              <div>
                <div className="flex items-baseline space-x-1.5 leading-none">
                  <span className="font-black text-2xl tracking-tight text-white">
                    BSCC
                  </span>
                  <span className="font-black text-xs tracking-wider text-emerald-400">
                    LEARNING CENTER
                  </span>
                </div>
                <span className="text-[11px] font-bold text-slate-300 block mt-0.5 tracking-wider uppercase">
                  PKBM BERKAH SADAYA
                </span>
              </div>
            </div>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-sm">
              Lembaga pendidikan nonformal resmi terdaftar di Kemendikdasmen RI dengan NPSN <strong>{SCHOOL_PROFILE.npsn}</strong>. Melayani Kejar Paket A, B, C dan Pelatihan Vokasi Siap Kerja untuk masyarakat Cianjur & sekitarnya.
            </p>

            <div className="p-3 bg-slate-900/90 rounded-xl border border-slate-700/80 text-xs text-slate-300 space-y-1.5">
              <div className="flex items-center space-x-2 text-emerald-400 font-bold">
                <ShieldCheck className="w-4 h-4 shrink-0" />
                <span>NPSN Terdaftar: {SCHOOL_PROFILE.npsn}</span>
              </div>
              <p className="text-[11px] text-slate-400">
                Nama Resmi: <strong>{SCHOOL_PROFILE.namaResmi}</strong>
              </p>
            </div>

            {/* Portal Sekolah Banner in Footer */}
            <div className="pt-1">
              <a
                href={SCHOOL_PROFILE.portalSekolahUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-3.5 py-2 bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 border border-emerald-500/40 rounded-xl text-xs font-bold transition-all group"
              >
                <Laptop className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
                <span>Buka {SCHOOL_PROFILE.namaPortalSekolah} ({SCHOOL_PROFILE.portalSekolahUrl.replace('https://', '')})</span>
                <ExternalLink className="w-3 h-3 text-emerald-400" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400">
              Navigasi Halaman
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <a href="#" className="hover:text-emerald-400 transition-colors flex items-center space-x-1">
                  <ChevronRight className="w-3 h-3 text-emerald-500" />
                  <span>Beranda Utama</span>
                </a>
              </li>
              <li>
                <a href="#tentang" className="hover:text-emerald-400 transition-colors flex items-center space-x-1">
                  <ChevronRight className="w-3 h-3 text-emerald-500" />
                  <span>Tentang Kami</span>
                </a>
              </li>
              <li>
                <a href="#program" className="hover:text-emerald-400 transition-colors flex items-center space-x-1">
                  <ChevronRight className="w-3 h-3 text-emerald-500" />
                  <span>Paket A, B, C & Vokasi</span>
                </a>
              </li>
              <li>
                <a href={SCHOOL_PROFILE.portalSekolahUrl} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-300 transition-colors flex items-center space-x-1 text-emerald-400 font-semibold">
                  <ChevronRight className="w-3 h-3 text-emerald-400" />
                  <span>Portal Sekolah BSCC Edu ↗</span>
                </a>
              </li>
              <li>
                <a href="#galeri" className="hover:text-emerald-400 transition-colors flex items-center space-x-1">
                  <ChevronRight className="w-3 h-3 text-emerald-500" />
                  <span>Galeri Dokumentasi</span>
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-emerald-400 transition-colors flex items-center space-x-1">
                  <ChevronRight className="w-3 h-3 text-emerald-500" />
                  <span>Biaya & Tanya Jawab</span>
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenEligibility}
                  className="text-amber-400 hover:underline flex items-center space-x-1 font-semibold cursor-pointer"
                >
                  <ChevronRight className="w-3 h-3 text-amber-400" />
                  <span>Cek Syarat & Usia</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Programs & Portal */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400">
              Program & Portal
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <a href="#pendaftaran" className="hover:text-emerald-400 transition-colors">
                  Kejar Paket C (Setara SMA)
                </a>
              </li>
              <li>
                <a href="#pendaftaran" className="hover:text-emerald-400 transition-colors">
                  Kejar Paket B (Setara SMP)
                </a>
              </li>
              <li>
                <a href="#pendaftaran" className="hover:text-emerald-400 transition-colors">
                  Kejar Paket A (Setara SD)
                </a>
              </li>
              <li>
                <a href="#vokasi-lms" className="hover:text-emerald-400 transition-colors">
                  {SCHOOL_PROFILE.namaVokasi} (Komputer & Skill)
                </a>
              </li>
              <li>
                <a
                  href={SCHOOL_PROFILE.portalSekolahUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:text-emerald-300 font-semibold flex items-center space-x-1"
                >
                  <span>{SCHOOL_PROFILE.namaLms} Portal Sekolah</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Office Address & Hours */}
          <div id="lokasi" className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400">
              Sekretariat & Kontak
            </h4>
            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{SCHOOL_PROFILE.alamat}, Desa {SCHOOL_PROFILE.desaKelurahan}, Kec. {SCHOOL_PROFILE.kecamatan}, {SCHOOL_PROFILE.kabupaten}, Jawa Barat {SCHOOL_PROFILE.kodePos}</span>
              </div>

              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>WA: {SCHOOL_PROFILE.telepon}</span>
              </div>

              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-blue-400 shrink-0" />
                <span>{SCHOOL_PROFILE.jamOperasional}</span>
              </div>

              <div className="pt-2">
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent('PKBM Berkah Sadaya Rahong Cilaku Cianjur')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1.5 px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-emerald-400 border border-emerald-500/30 rounded-lg text-[11px] font-semibold transition-colors"
                >
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Petunjuk Google Maps</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright & Kemendikdasmen Link */}
        <div className="mt-12 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© {new Date().getFullYear()} {SCHOOL_PROFILE.namaBrandLengkap} ({SCHOOL_PROFILE.namaResmi}). Seluruh hak cipta dilindungi undang-undang.</p>
          <a
            href={SCHOOL_PROFILE.urlReferensiKemendikdasmen}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-emerald-400 flex items-center space-x-1 transition-colors"
          >
            <span>Verifikasi Data Pokok Kemendikdasmen RI</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href={`https://wa.me/${SCHOOL_PROFILE.whatsappNumberUrl || '6289509828343'}?text=${encodeURIComponent(`Halo Admin ${SCHOOL_PROFILE.namaBrandLengkap} (${SCHOOL_PROFILE.namaResmi}), saya ingin bertanya info pendaftaran PKBM.`)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-[#25d366] hover:bg-[#20ba59] text-white p-3.5 sm:p-4 rounded-full shadow-2xl flex items-center space-x-2 transition-transform hover:scale-110 group border-2 border-white"
        aria-label="Hubungi Admin WhatsApp"
      >
        <MessageCircle className="w-6 h-6 fill-white text-[#25d366]" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 text-xs font-bold pr-1">
          Chat Konsultasi WA
        </span>
      </a>
    </footer>
  );
};
