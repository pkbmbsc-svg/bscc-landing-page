import React from 'react';
import { ShieldCheck, Award, Users, MapPin, Quote, Star, ExternalLink, CheckCircle2, Building2, BookOpenCheck, FileText } from 'lucide-react';
import { ALUMNI_TESTIMONIALS, SCHOOL_PROFILE } from '../data/pkbmData';

export const SocialProofSection: React.FC = () => {
  return (
    <section id="legalitas" className="py-20 px-4 bg-slate-900/50 border-t border-slate-800">
      <div className="max-w-6xl mx-auto">
        {/* Official Reference & Data Pokok Kemendikdasmen Banner */}
        <div className="mb-16 bg-gradient-to-r from-slate-900 via-slate-850 to-slate-900 border border-amber-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none"></div>

          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-6 border-b border-slate-800">
            <div className="space-y-2">
              <div className="inline-flex items-center space-x-2 px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Terverifikasi Resmi di Data Referensi Kemendikdasmen RI</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Data Pokok Satuan Pendidikan (NPSN: {SCHOOL_PROFILE.npsn})
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm max-w-2xl">
                Legalitas kelembagaan resmi tercatat pada basis data Kemendikdasmen RI dengan nama satuan pendidikan <strong className="text-white font-semibold">{SCHOOL_PROFILE.namaResmi}</strong> yang menaungi seluruh aktivitas pembelajaran masyarakat <strong className="text-amber-400 font-semibold">{SCHOOL_PROFILE.namaBrandLengkap} ({SCHOOL_PROFILE.namaBrand})</strong>.
              </p>
            </div>

            <a
              href={SCHOOL_PROFILE.urlReferensiKemendikdasmen}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-5 py-3 rounded-xl text-xs sm:text-sm flex items-center space-x-2 shadow-lg shadow-amber-500/20 transition-all shrink-0"
            >
              <span>Verifikasi di Kemendikdasmen</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Key Attribute Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-6">
            <div className="bg-slate-800/60 border border-slate-700/60 rounded-2xl p-4">
              <div className="flex items-center space-x-2 text-amber-400 text-xs font-semibold mb-1">
                <FileText className="w-4 h-4" />
                <span>NPSN Resmi</span>
              </div>
              <p className="text-lg font-extrabold text-white">{SCHOOL_PROFILE.npsn}</p>
              <p className="text-[11px] text-slate-400 mt-0.5">Nomor Pokok Sekolah Nasional</p>
            </div>

            <div className="bg-slate-800/60 border border-slate-700/60 rounded-2xl p-4">
              <div className="flex items-center space-x-2 text-emerald-400 text-xs font-semibold mb-1">
                <Building2 className="w-4 h-4" />
                <span>Nama Satuan Pendidikan</span>
              </div>
              <p className="text-sm font-extrabold text-white leading-snug">{SCHOOL_PROFILE.namaResmi}</p>
              <p className="text-[11px] text-slate-400 mt-0.5">Bentuk: {SCHOOL_PROFILE.bentukPendidikan}</p>
            </div>

            <div className="bg-slate-800/60 border border-slate-700/60 rounded-2xl p-4">
              <div className="flex items-center space-x-2 text-sky-400 text-xs font-semibold mb-1">
                <MapPin className="w-4 h-4" />
                <span>Wilayah & Domisili</span>
              </div>
              <p className="text-sm font-extrabold text-white">Desa {SCHOOL_PROFILE.desaKelurahan}, Kec. {SCHOOL_PROFILE.kecamatan}</p>
              <p className="text-[11px] text-slate-400 mt-0.5">{SCHOOL_PROFILE.alamat}, {SCHOOL_PROFILE.kabupaten} {SCHOOL_PROFILE.kodePos}</p>
            </div>

            <div className="bg-slate-800/60 border border-slate-700/60 rounded-2xl p-4">
              <div className="flex items-center space-x-2 text-purple-400 text-xs font-semibold mb-1">
                <BookOpenCheck className="w-4 h-4" />
                <span>Status & Naungan</span>
              </div>
              <p className="text-sm font-extrabold text-white">Status Swasta Aktif</p>
              <p className="text-[11px] text-slate-400 mt-0.5">Kemendikdasmen RI</p>
            </div>
          </div>
        </div>

        {/* Verification Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mb-16 pb-12 border-b border-slate-800">
          <div className="p-4 bg-slate-800/40 rounded-2xl border border-slate-700/50">
            <span className="block text-2xl sm:text-4xl font-extrabold text-amber-400 mb-1">
              P9996465
            </span>
            <span className="text-xs text-slate-400 flex items-center justify-center space-x-1">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
              <span>NPSN Kemendikdasmen</span>
            </span>
          </div>

          <div className="p-4 bg-slate-800/40 rounded-2xl border border-slate-700/50">
            <span className="block text-2xl sm:text-4xl font-extrabold text-emerald-400 mb-1">
              Ratusan+
            </span>
            <span className="text-xs text-slate-400 flex items-center justify-center space-x-1">
              <Users className="w-3.5 h-3.5 text-emerald-400" />
              <span>Alumni Lulus & Kuliah</span>
            </span>
          </div>

          <div className="p-4 bg-slate-800/40 rounded-2xl border border-slate-700/50">
            <span className="block text-2xl sm:text-4xl font-extrabold text-sky-400 mb-1">
              100% Sah
            </span>
            <span className="text-xs text-slate-400 flex items-center justify-center space-x-1">
              <Award className="w-3.5 h-3.5 text-sky-400" />
              <span>Diakui CPNS & PTN</span>
            </span>
          </div>

          <div className="p-4 bg-slate-800/40 rounded-2xl border border-slate-700/50">
            <span className="block text-2xl sm:text-4xl font-extrabold text-purple-400 mb-1">
              Cilaku
            </span>
            <span className="text-xs text-slate-400 flex items-center justify-center space-x-1">
              <MapPin className="w-3.5 h-3.5 text-purple-400" />
              <span>Cianjur, Jawa Barat</span>
            </span>
          </div>
        </div>

        {/* Testimonials Title */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block px-3 py-1 bg-amber-500/10 text-amber-400 text-xs font-semibold rounded-full mb-2 border border-amber-500/20">
            Kisah Sukses Alumni Cianjur
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Mereka Telah Bangkit & Meraih Ijazah
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm mt-2">
            Simak pengalaman langsung para lulusan PKBM Berkah Sadaya Cianjur.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {ALUMNI_TESTIMONIALS.map((alumni) => (
            <div
              key={alumni.id}
              className="bg-slate-800/70 border border-slate-700/80 rounded-2xl p-6 flex flex-col justify-between hover:border-amber-500/40 transition-all shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <Quote className="w-8 h-8 text-amber-500/30" />
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>

                <p className="text-slate-300 text-xs sm:text-sm italic leading-relaxed mb-6">
                  "{alumni.testimoni}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-700/60 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-white text-sm">{alumni.nama} ({alumni.usia} thn)</h4>
                  <p className="text-slate-400 text-xs">{alumni.kecamatan}</p>
                  <p className="text-emerald-400 text-[11px] font-medium mt-1">
                    → {alumni.pencapaianSekarang}
                  </p>
                </div>
                <span className="px-2 py-1 bg-slate-900 text-slate-400 text-[10px] rounded-md border border-slate-700">
                  {alumni.tahunLulus}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
