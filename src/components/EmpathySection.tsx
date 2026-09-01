import React from 'react';
import { HeartHandshake, Clock, ShieldAlert, DollarSign, HelpCircle, ArrowRight } from 'lucide-react';
import { SCHOOL_PROFILE } from '../data/pkbmData';

interface EmpathySectionProps {
  onOpenEligibility: () => void;
}

export const EmpathySection: React.FC<EmpathySectionProps> = ({ onOpenEligibility }) => {
  return (
    <section id="tentang" className="py-16 bg-slate-50 border-b border-slate-200/80 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 bg-emerald-50 text-emerald-800 text-xs font-bold rounded-full mb-3 border border-emerald-200">
            <HeartHandshake className="w-3.5 h-3.5 text-emerald-600" />
            <span>Solusi Pendidikan Inklusif Cianjur</span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight mb-4">
            Kami Memahami Kendala & Tantangan Anda
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Terkendala usia, waktu bekerja, biaya, atau masa lalu? Di <span className="text-emerald-700 font-bold">{SCHOOL_PROFILE.namaResmi}</span> ({SCHOOL_PROFILE.namaBrandLengkap}), kami percaya setiap warga berhak mendapatkan kesempatan kedua untuk meraih ijazah resmi dan meningkatkan taraf hidup.
          </p>
        </div>

        {/* Problem Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white border border-slate-200/90 rounded-2xl p-6 hover:shadow-md hover:border-emerald-500/50 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-slate-900 text-base mb-2">Terbentur Jam Kerja</h3>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Sibuk bekerja shift di pabrik, toko, atau wirausaha? Kami menyediakan modul mandiri dan kelas online fleksibel yang bisa diakses kapan saja.
            </p>
          </div>

          <div className="bg-white border border-slate-200/90 rounded-2xl p-6 hover:shadow-md hover:border-emerald-500/50 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
              <ShieldAlert className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-slate-900 text-base mb-2">Canggung karena Usia</h3>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Merasa sudah bukan usianya lagi? Banyak siswa BSCC berusia 20–40+ tahun. Anda belajar bersama sejawat didampingi tutor ramah dan suportif.
            </p>
          </div>

          <div className="bg-white border border-slate-200/90 rounded-2xl p-6 hover:shadow-md hover:border-emerald-500/50 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
              <DollarSign className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-slate-900 text-base mb-2">Biaya Terjangkau & Dicicil</h3>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Sistem pembayaran dapat diangsur secara bulanan tanpa bunga. Tersedia pula beasiswa dan subsidi bagi warga pra-sejahtera.
            </p>
          </div>

          <div className="bg-white border border-slate-200/90 rounded-2xl p-6 hover:shadow-md hover:border-emerald-500/50 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
              <HelpCircle className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-slate-900 text-base mb-2">Bingung Persyaratan</h3>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Ijazah lama hilang atau rapor tidak lengkap? Tim administrasi BSCC siap membantu verifikasi dan konsultasi berkas Anda hingga tuntas.
            </p>
          </div>
        </div>

        {/* Quick Quiz Callout */}
        <div className="mt-10 bg-gradient-to-r from-emerald-800 via-emerald-900 to-slate-900 text-white p-6 sm:p-8 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="font-black text-white text-lg sm:text-xl">
              Belum Yakin Program Mana yang Cocok?
            </h4>
            <p className="text-emerald-100 text-xs sm:text-sm max-w-xl">
              Gunakan fitur Cek Kelayakan 1 Menit untuk mengetahui syarat dokumen, jenjang Paket A/B/C atau Vokasi yang tepat.
            </p>
          </div>
          <button
            onClick={onOpenEligibility}
            className="shrink-0 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold px-6 py-3 rounded-xl text-xs sm:text-sm transition-all flex items-center space-x-2 shadow-md hover:shadow-lg"
          >
            <span>Mulai Cek Kelayakan Program</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
