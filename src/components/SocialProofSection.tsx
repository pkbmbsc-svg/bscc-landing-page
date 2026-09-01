import React from 'react';
import { ShieldCheck, Award, Users, MapPin, Quote, Star, ExternalLink, Building2, BookOpenCheck, FileText } from 'lucide-react';
import { ALUMNI_TESTIMONIALS, SCHOOL_PROFILE } from '../data/pkbmData';
import { BsccLogo } from './BsccLogo';

export const SocialProofSection: React.FC = () => {
  return (
    <section id="legalitas" className="py-20 px-4 bg-slate-50 border-t border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto">
        {/* Official Reference & Data Pokok Kemendikdasmen Banner */}
        <div className="mb-16 bg-white border border-emerald-300 rounded-3xl p-6 sm:p-8 shadow-md relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-50 rounded-full blur-3xl pointer-events-none -z-10"></div>

          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-6 border-b border-slate-100">
            <div className="flex items-start gap-4">
              <BsccLogo size="xl" className="hidden sm:inline-flex shadow-lg ring-4 ring-emerald-500/20 shrink-0 mt-1" />
              <div className="space-y-2">
                <div className="inline-flex items-center space-x-2 px-3 py-1 bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold rounded-full">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Terverifikasi Resmi di Data Referensi Kemendikdasmen RI</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
                  Data Pokok Satuan Pendidikan (NPSN: {SCHOOL_PROFILE.npsn})
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm max-w-2xl leading-relaxed">
                  Legalitas kelembagaan resmi tercatat pada basis data Kemendikdasmen RI dengan nama satuan pendidikan <strong className="text-slate-900 font-bold">{SCHOOL_PROFILE.namaResmi}</strong> yang menaungi seluruh aktivitas pembelajaran masyarakat <strong className="text-emerald-800 font-bold">{SCHOOL_PROFILE.namaBrandLengkap} ({SCHOOL_PROFILE.namaBrand})</strong>.
                </p>
              </div>
            </div>

            <a
              href={SCHOOL_PROFILE.urlReferensiKemendikdasmen}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#065f46] hover:bg-[#044c37] text-white font-bold px-6 py-3 rounded-xl text-xs sm:text-sm flex items-center space-x-2 shadow-md transition-all shrink-0"
            >
              <span>Verifikasi di Kemendikdasmen</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Key Attribute Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-6">
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4">
              <div className="flex items-center space-x-2 text-emerald-700 text-xs font-bold mb-1">
                <FileText className="w-4 h-4" />
                <span>NPSN Resmi</span>
              </div>
              <p className="text-lg font-black text-slate-900">{SCHOOL_PROFILE.npsn}</p>
              <p className="text-[11px] text-slate-500 mt-0.5">Nomor Pokok Sekolah Nasional</p>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4">
              <div className="flex items-center space-x-2 text-blue-700 text-xs font-bold mb-1">
                <Building2 className="w-4 h-4" />
                <span>Nama Satuan Pendidikan</span>
              </div>
              <p className="text-sm font-black text-slate-900 leading-snug">{SCHOOL_PROFILE.namaResmi}</p>
              <p className="text-[11px] text-slate-500 mt-0.5">Bentuk: {SCHOOL_PROFILE.bentukPendidikan}</p>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4">
              <div className="flex items-center space-x-2 text-teal-700 text-xs font-bold mb-1">
                <MapPin className="w-4 h-4" />
                <span>Wilayah & Domisili</span>
              </div>
              <p className="text-sm font-black text-slate-900">Desa {SCHOOL_PROFILE.desaKelurahan}, Kec. {SCHOOL_PROFILE.kecamatan}</p>
              <p className="text-[11px] text-slate-500 mt-0.5">{SCHOOL_PROFILE.alamat}, {SCHOOL_PROFILE.kabupaten} {SCHOOL_PROFILE.kodePos}</p>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4">
              <div className="flex items-center space-x-2 text-amber-700 text-xs font-bold mb-1">
                <BookOpenCheck className="w-4 h-4" />
                <span>Status & Naungan</span>
              </div>
              <p className="text-sm font-black text-slate-900">Status Swasta Aktif</p>
              <p className="text-[11px] text-slate-500 mt-0.5">Kemendikdasmen RI</p>
            </div>
          </div>
        </div>

        {/* Verification Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mb-16 pb-12 border-b border-slate-200">
          <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-xs">
            <span className="block text-2xl sm:text-4xl font-black text-emerald-700 mb-1">
              P9996465
            </span>
            <span className="text-xs font-bold text-slate-600 flex items-center justify-center space-x-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>NPSN Kemendikdasmen</span>
            </span>
          </div>

          <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-xs">
            <span className="block text-2xl sm:text-4xl font-black text-blue-700 mb-1">
              Ratusan+
            </span>
            <span className="text-xs font-bold text-slate-600 flex items-center justify-center space-x-1">
              <Users className="w-3.5 h-3.5 text-blue-600" />
              <span>Alumni Lulus & Kuliah</span>
            </span>
          </div>

          <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-xs">
            <span className="block text-2xl sm:text-4xl font-black text-teal-700 mb-1">
              100% Sah
            </span>
            <span className="text-xs font-bold text-slate-600 flex items-center justify-center space-x-1">
              <Award className="w-3.5 h-3.5 text-teal-600" />
              <span>Diakui CPNS & PTN</span>
            </span>
          </div>

          <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-xs">
            <span className="block text-2xl sm:text-4xl font-black text-amber-700 mb-1">
              Cilaku
            </span>
            <span className="text-xs font-bold text-slate-600 flex items-center justify-center space-x-1">
              <MapPin className="w-3.5 h-3.5 text-amber-600" />
              <span>Cianjur, Jawa Barat</span>
            </span>
          </div>
        </div>

        {/* Testimonials Title */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block px-3.5 py-1 bg-emerald-50 text-emerald-800 text-xs font-bold rounded-full mb-2 border border-emerald-200">
            Kisah Sukses Alumni Cianjur
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
            Mereka Telah Bangkit & Meraih Ijazah
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm mt-2">
            Simak pengalaman langsung para lulusan PKBM Berkah Sadaya Cianjur.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {ALUMNI_TESTIMONIALS.map((alumni) => (
            <div
              key={alumni.id}
              className="bg-white border border-slate-200 rounded-3xl p-6 flex flex-col justify-between hover:shadow-md transition-all shadow-xs"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <Quote className="w-8 h-8 text-emerald-200" />
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>

                <p className="text-slate-700 text-xs sm:text-sm italic leading-relaxed mb-6 font-serif">
                  "{alumni.testimoni}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <h4 className="font-extrabold text-slate-900 text-sm">{alumni.nama} ({alumni.usia} thn)</h4>
                  <p className="text-slate-500 text-xs">{alumni.kecamatan}</p>
                  <p className="text-emerald-700 text-[11px] font-bold mt-1">
                    → {alumni.pencapaianSekarang}
                  </p>
                </div>
                <span className="px-2.5 py-1 bg-slate-100 text-slate-700 font-bold text-[10px] rounded-lg border border-slate-200">
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
