import React from 'react';
import { ShieldCheck, Award, Users, MapPin, Quote, Star } from 'lucide-react';
import { ALUMNI_TESTIMONIALS } from '../data/pkbmData';

export const SocialProofSection: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-slate-900/50 border-t border-slate-800">
      <div className="max-w-6xl mx-auto">
        {/* Verification Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mb-16 pb-12 border-b border-slate-800">
          <div className="p-4 bg-slate-800/40 rounded-2xl border border-slate-700/50">
            <span className="block text-2xl sm:text-4xl font-extrabold text-amber-400 mb-1">
              Terakreditasi
            </span>
            <span className="text-xs text-slate-400 flex items-center justify-center space-x-1">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
              <span>Resmi Kemendikbud</span>
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
              Cianjur
            </span>
            <span className="text-xs text-slate-400 flex items-center justify-center space-x-1">
              <MapPin className="w-3.5 h-3.5 text-purple-400" />
              <span>Jawa Barat</span>
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
