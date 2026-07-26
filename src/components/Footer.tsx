import React from 'react';
import { MapPin, Phone, Mail, Clock, ShieldCheck, Heart } from 'lucide-react';

interface FooterProps {
  onOpenEligibility: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenEligibility }) => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 text-xs py-12 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 pb-8 border-b border-slate-800">
        {/* Col 1: Identity */}
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-amber-500 to-emerald-500 flex items-center justify-center font-bold text-slate-950 text-sm">
              BS
            </div>
            <span className="font-bold text-base text-white tracking-wide">BSCC Learning Center</span>
          </div>
          <p className="text-slate-400 text-xs leading-relaxed">
            Pusat Kegiatan Belajar Masyarakat (PKBM) Berkah Sadaya Cianjur. Menyelenggarakan Kejar Paket A, B, C & Pelatihan Vokasi Digital terakreditasi.
          </p>
          <div className="inline-flex items-center space-x-1 text-emerald-400 text-[11px] font-semibold bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20">
            <ShieldCheck className="w-3.5 h-3.5 mr-1" />
            <span>Terdaftar di Kemendikbud RI</span>
          </div>
        </div>

        {/* Col 2: Quick Links */}
        <div className="space-y-2">
          <h4 className="font-bold text-white text-sm mb-3">Navigasi Utama</h4>
          <ul className="space-y-2 text-slate-400">
            <li><a href="#program" className="hover:text-amber-400 transition-colors">Kejar Paket A, B, C</a></li>
            <li><a href="#galeri" className="hover:text-amber-400 transition-colors">Galeri Kegiatan</a></li>
            <li>
              <button onClick={onOpenEligibility} className="hover:text-amber-400 transition-colors text-left">
                Kuis Cek Kelayakan Program
              </button>
            </li>
            <li><a href="#pendaftaran" className="hover:text-amber-400 transition-colors">Formulir Pendaftaran</a></li>
            <li><a href="#faq" className="hover:text-amber-400 transition-colors">Pertanyaan Umum (FAQ)</a></li>
          </ul>
        </div>

        {/* Col 3: Contact Info */}
        <div id="lokasi" className="space-y-2">
          <h4 className="font-bold text-white text-sm mb-3">Kontak & Lokasi PKBM</h4>
          <div className="space-y-2 text-slate-400">
            <div className="flex items-start space-x-2">
              <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <span>Kabupaten Cianjur, Jawa Barat, Indonesia</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>WhatsApp Admin: 0812-3456-7890</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4 text-sky-400 shrink-0" />
              <span>pkbmbsc@gmail.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4 text-purple-400 shrink-0" />
              <span>Senin - Sabtu: 08.00 - 16.00 WIB</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center text-center sm:text-left gap-2 text-slate-500">
        <p>© 2026 PKBM Berkah Sadaya Cianjur (BSCC Learning Center). All rights reserved.</p>
        <p className="flex items-center space-x-1 justify-center">
          <span>Bangkit Kembali Melalui Pendidikan Kesetaraan</span>
          <Heart className="w-3 h-3 text-red-500 fill-red-500 inline" />
        </p>
      </div>
    </footer>
  );
};
