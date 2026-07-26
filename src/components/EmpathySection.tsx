import React from 'react';
import { HeartHandshake, Clock, ShieldAlert, DollarSign, HelpCircle, ArrowRight } from 'lucide-react';

interface EmpathySectionProps {
  onOpenEligibility: () => void;
}

export const EmpathySection: React.FC<EmpathySectionProps> = ({ onOpenEligibility }) => {
  return (
    <section className="py-16 bg-slate-950/70 border-y border-slate-800/80 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-amber-500/10 text-amber-400 text-xs font-semibold rounded-full mb-3 border border-amber-500/20">
            <HeartHandshake className="w-3.5 h-3.5" />
            <span>Solusi Pendidikan Inklusif Cianjur</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight mb-4">
            Kami Memahami Kendala Anda
          </h2>
          <p className="text-slate-300 text-base leading-relaxed">
            Terkendala usia, biaya, pekerjaan, atau masa lalu? Di <span className="text-amber-400 font-semibold">PKBM Berkah Sadaya Cianjur</span>, kami percaya bahwa setiap warga berhak atas kesempatan kedua untuk belajar dan meraih masa depan yang lebih baik.
          </p>
        </div>

        {/* Problem Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 hover:border-amber-500/40 transition-all">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center mb-4">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-white text-base mb-2">Terbentur Jam Kerja</h3>
            <p className="text-slate-400 text-xs leading-relaxed">
              Sibuk kerja shift di pabrik atau toko? Kami menyediakan kelas online & tugas mandiri fleksibel yang bisa diakses kapan saja.
            </p>
          </div>

          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 hover:border-emerald-500/40 transition-all">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-4">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-white text-base mb-2">Canggung karena Usia</h3>
            <p className="text-slate-400 text-xs leading-relaxed">
              Merasa sudah bukan usianya lagi? Banyak siswa BSCC berusia 20-40+ tahun. Belajar bersama sejawat dengan tutor yang ramah.
            </p>
          </div>

          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 hover:border-sky-500/40 transition-all">
            <div className="w-10 h-10 rounded-xl bg-sky-500/10 text-sky-400 flex items-center justify-center mb-4">
              <DollarSign className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-white text-base mb-2">Biaya Terjangkau</h3>
            <p className="text-slate-400 text-xs leading-relaxed">
              Sistem pembayaran dapat diangsur secara bulanan. Tidak ada biaya tersembunyi yang memberatkan warga.
            </p>
          </div>

          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 hover:border-purple-500/40 transition-all">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center mb-4">
              <HelpCircle className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-white text-base mb-2">Bingung Persyaratan</h3>
            <p className="text-slate-400 text-xs leading-relaxed">
              Ijazah lama hilang atau rapor tidak lengkap? Tim admin BSCC siap membantu verifikasi dan konsultasi berkas Anda.
            </p>
          </div>
        </div>

        {/* Quick Quiz Callout */}
        <div className="mt-10 bg-gradient-to-r from-amber-500/10 via-slate-800 to-emerald-500/10 border border-slate-700 p-6 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="font-bold text-white text-lg">Belum Yakin Program Mana yang Cocok?</h4>
            <p className="text-slate-400 text-xs sm:text-sm">
              Gunakan fitur Cek Kelayakan 1 Menit untuk mengetahui syarat dokumen, jenjang, dan metode belajar Anda.
            </p>
          </div>
          <button
            onClick={onOpenEligibility}
            className="shrink-0 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-5 py-2.5 rounded-xl text-xs sm:text-sm transition-all flex items-center space-x-2 shadow-md"
          >
            <span>Mulai Cek Kelayakan Program</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
