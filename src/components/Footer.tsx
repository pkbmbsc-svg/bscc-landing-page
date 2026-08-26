import React from 'react';
import { MapPin, Phone, Mail, Clock, ShieldCheck, Heart, ExternalLink } from 'lucide-react';
import { SCHOOL_PROFILE } from '../data/pkbmData';

interface FooterProps {
  onOpenEligibility: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenEligibility }) => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 text-xs py-12 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 pb-8 border-b border-slate-800">
        {/* Col 1: Identity */}
        <div className="space-y-3">
          <div className="flex items-center space-x-2.5">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-amber-500 via-amber-400 to-emerald-500 flex items-center justify-center font-extrabold text-slate-950 text-sm tracking-tighter">
              BSC
            </div>
            <div>
              <span className="font-extrabold text-base text-white tracking-wide block leading-none">{SCHOOL_PROFILE.namaBrandLengkap}</span>
              <span className="text-[11px] text-amber-400 font-semibold">{SCHOOL_PROFILE.kepanjanganBrand}</span>
            </div>
          </div>
          <p className="text-slate-400 text-xs leading-relaxed">
            Pusat Pembelajaran Masyarakat menyelenggarakan Pendidikan Kesetaraan (Paket A, B, C) & Pelatihan Vokasi Siap Kerja. Legalitas resmi berbadan hukum: <strong className="text-slate-300">{SCHOOL_PROFILE.namaResmi}</strong> (NPSN: {SCHOOL_PROFILE.npsn}) di bawah Kemendikdasmen RI.
          </p>
          <div className="flex flex-wrap gap-2 pt-1">
            <a
              href={SCHOOL_PROFILE.urlReferensiKemendikdasmen}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1 text-emerald-400 text-[11px] font-semibold bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20 hover:bg-emerald-500/20 transition-colors"
            >
              <ShieldCheck className="w-3.5 h-3.5 mr-1" />
              <span>NPSN: {SCHOOL_PROFILE.npsn} (Kemendikdasmen RI)</span>
              <ExternalLink className="w-3 h-3 ml-0.5" />
            </a>
          </div>
        </div>

        {/* Col 2: Quick Links */}
        <div className="space-y-2">
          <h4 className="font-bold text-white text-sm mb-3">Navigasi Program & Layanan</h4>
          <ul className="space-y-2 text-slate-400">
            <li><a href="#program" className="hover:text-amber-400 transition-colors">🎓 Kejar Paket A, B, C (Ijazah Resmi)</a></li>
            <li><a href="#vokasi-lms" className="hover:text-emerald-400 transition-colors">⚙️ Kursus Vokasi & Keterampilan Praktis</a></li>
            <li><a href="#vokasi-lms" className="hover:text-emerald-400 transition-colors">💻 Portal Pembelajaran Digital ({SCHOOL_PROFILE.namaLms})</a></li>
            <li><a href="#legalitas" className="hover:text-amber-400 transition-colors">📋 Legalitas Satdik ({SCHOOL_PROFILE.npsn})</a></li>
            <li><a href="#galeri" className="hover:text-amber-400 transition-colors">📸 Galeri Kegiatan Siswa</a></li>
            <li>
              <button onClick={onOpenEligibility} className="hover:text-amber-400 transition-colors text-left">
                ✨ Kuis Cek Kelayakan & Usia
              </button>
            </li>
          </ul>
        </div>

        {/* Col 3: Contact Info */}
        <div id="lokasi" className="space-y-2">
          <h4 className="font-bold text-white text-sm mb-3">Kontak & Sekretariat</h4>
          <div className="space-y-2 text-slate-400">
            <div className="flex items-start space-x-2">
              <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <span>{SCHOOL_PROFILE.alamat}, Desa {SCHOOL_PROFILE.desaKelurahan}, Kec. {SCHOOL_PROFILE.kecamatan}, {SCHOOL_PROFILE.kabupaten}, {SCHOOL_PROFILE.provinsi} {SCHOOL_PROFILE.kodePos}</span>
            </div>
            <a
              href={`https://wa.me/${SCHOOL_PROFILE.whatsappNumberUrl || '6289509828343'}?text=${encodeURIComponent('Halo Admin BSC Learning Center, saya ingin bertanya info pendaftaran.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              <Phone className="w-4 h-4 shrink-0" />
              <span>WhatsApp Admin: {SCHOOL_PROFILE.telepon}</span>
            </a>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4 text-sky-400 shrink-0" />
              <span>{SCHOOL_PROFILE.email}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4 text-purple-400 shrink-0" />
              <span>{SCHOOL_PROFILE.jamOperasional}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center text-center sm:text-left gap-2 text-slate-500">
        <p>© 2026 {SCHOOL_PROFILE.namaBrandLengkap} • {SCHOOL_PROFILE.namaResmi} (NPSN: {SCHOOL_PROFILE.npsn}). All rights reserved.</p>
        <p className="flex items-center space-x-1 justify-center">
          <span>Bangkit Kembali Melalui Pendidikan Kesetaraan</span>
          <Heart className="w-3 h-3 text-red-500 fill-red-500 inline" />
        </p>
      </div>
    </footer>
  );
};
