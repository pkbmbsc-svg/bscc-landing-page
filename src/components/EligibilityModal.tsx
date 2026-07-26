import React, { useState } from 'react';
import { X, CheckCircle, Sparkles, ArrowRight, RotateCcw, GraduationCap, ShieldCheck } from 'lucide-react';

interface EligibilityModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectForRegister: (programCode: string) => void;
}

export const EligibilityModal: React.FC<EligibilityModalProps> = ({
  isOpen,
  onClose,
  onSelectForRegister
}) => {
  const [step, setStep] = useState(1);
  const [pendidikan, setPendidikan] = useState('');
  const [usia, setUsia] = useState('');
  const [tujuan, setTujuan] = useState('');

  if (!isOpen) return null;

  const handleReset = () => {
    setStep(1);
    setPendidikan('');
    setUsia('');
    setTujuan('');
  };

  // Determine recommendation
  const getRecommendation = () => {
    if (tujuan === 'vokasi') {
      return {
        code: 'Vokasi & Keterampilan',
        title: 'Pelatihan Vokasi & Digital Skills Komputer',
        desc: 'Sangat direkomendasikan untuk membekali keahlian komputer praktis, desain Canva/Photoshop, Microsoft Office, dan Digital Marketing Siap Kerja.',
        checklists: ['Fotokopi KTP / KK', 'Pas foto 3x4 (2 lembar)']
      };
    }

    if (pendidikan === 'smp' || pendidikan === 'putus_sma') {
      return {
        code: 'Paket C (Setara SMA)',
        title: 'Kejar Paket C (Setara SMA)',
        desc: 'Pilihan tepat untuk meraih Ijazah Setara SMA Resmi Kemendikbud. Berlaku untuk Kuliah PTN/PTS, pendaftaran CPNS/TNI/POLRI, maupun kenaikan karir.',
        checklists: [
          'Fotokopi Ijazah SMP / Paket B dilegalisir (3 lembar)',
          'Fotokopi KK & KTP (3 lembar)',
          'Pas Foto 3x4 Background Merah (5 lembar)',
          'Rapor SMA/SMK (jika putus sekolah SMA)'
        ]
      };
    }

    if (pendidikan === 'sd' || pendidikan === 'putus_smp') {
      return {
        code: 'Paket B (Setara SMP)',
        title: 'Kejar Paket B (Setara SMP)',
        desc: 'Diperuntukkan untuk menyelesaikan jenjang pendidikan dasar SMP. Ijazah resmi dapat digunakan untuk melamar kerja atau lanjut ke Paket C (SMA).',
        checklists: [
          'Fotokopi Ijazah SD / Paket A dilegalisir (3 lembar)',
          'Fotokopi KK & KTP (3 lembar)',
          'Pas Foto 3x4 Background Biru (4 lembar)'
        ]
      };
    }

    return {
      code: 'Paket A (Setara SD)',
      title: 'Kejar Paket A (Setara SD)',
      desc: 'Program kesetaraan tingkat dasar SD. Pembelajaran fleksibel, ramah usia dewasa, serta membantu calistung dan kemandirian.',
      checklists: [
        'Fotokopi KK 3 lembar',
        'Fotokopi KTP (jika ada)',
        'Pas Foto 3x4 (4 lembar)'
      ]
    };
  };

  const result = getRecommendation();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-slate-900 border border-slate-700 rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white p-2 rounded-xl bg-slate-800 hover:bg-slate-700 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Title */}
        <div className="mb-6">
          <span className="inline-flex items-center space-x-1.5 text-xs font-bold uppercase tracking-wider px-3 py-1 bg-amber-500/10 text-amber-400 border border-amber-500/20 rounded-full mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Kuis Cek Kelayakan Program 1 Menit</span>
          </span>
          <h3 className="text-xl font-bold text-white">
            Rekomendasi Program PKBM Berkah Sadaya
          </h3>
        </div>

        {/* Wizard Steps */}
        {step === 1 && (
          <div className="space-y-4">
            <p className="text-xs sm:text-sm text-slate-300 font-semibold">
              Langkah 1 dari 3: Apakah Pendidikan Terakhir Anda / Rapor Terakhir yang Dimiliki?
            </p>
            <div className="space-y-2 text-xs">
              {[
                { id: 'tidak_sekolah', label: 'Belum Punya Ijazah SD / Putus SD' },
                { id: 'sd', label: 'Memiliki Ijazah SD / MI / Paket A' },
                { id: 'smp', label: 'Memiliki Ijazah SMP / MTs / Paket B' },
                { id: 'putus_sma', label: 'Pernah Sekolah SMA/SMK tapi Putus Sekolah' }
              ].map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => {
                    setPendidikan(opt.id);
                    setStep(2);
                  }}
                  className="w-full text-left p-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 font-medium transition-all flex items-center justify-between"
                >
                  <span>{opt.label}</span>
                  <ArrowRight className="w-4 h-4 text-amber-400" />
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4">
            <p className="text-xs sm:text-sm text-slate-300 font-semibold">
              Langkah 2 dari 3: Berapa Usia Anda Saat Ini?
            </p>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {[
                { id: 'di_bawah_18', label: 'Di bawah 18 Tahun' },
                { id: '18_25', label: '18 - 25 Tahun' },
                { id: '26_35', label: '26 - 35 Tahun' },
                { id: '36_plus', label: '36+ Tahun' }
              ].map((u) => (
                <button
                  key={u.id}
                  onClick={() => {
                    setUsia(u.id);
                    setStep(3);
                  }}
                  className="p-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 font-medium transition-all text-center"
                >
                  {u.label}
                </button>
              ))}
            </div>
            <button
              onClick={() => setStep(1)}
              className="text-xs text-slate-400 hover:text-white pt-2 underline"
            >
              ← Kembali ke Langkah 1
            </button>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-4">
            <p className="text-xs sm:text-sm text-slate-300 font-semibold">
              Langkah 3 dari 3: Apa Tujuan Utama Anda Belajar di PKBM Berkah Sadaya Cianjur?
            </p>
            <div className="space-y-2 text-xs">
              {[
                { id: 'kuliah', label: 'Melanjutkan Kuliah di PTN / PTS / UT' },
                { id: 'kerja', label: 'Persyaratan Kerja Pabrik / Kenaikan Jabatan' },
                { id: 'cpns', label: 'Persyaratan CPNS / PPPK / TNI / POLRI' },
                { id: 'vokasi', label: 'Fokus Belajar Komputer & Keterampilan Digital' }
              ].map((t) => (
                <button
                  key={t.id}
                  onClick={() => {
                    setTujuan(t.id);
                    setStep(4);
                  }}
                  className="w-full text-left p-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 font-medium transition-all flex items-center justify-between"
                >
                  <span>{t.label}</span>
                  <ArrowRight className="w-4 h-4 text-emerald-400" />
                </button>
              ))}
            </div>
            <button
              onClick={() => setStep(2)}
              className="text-xs text-slate-400 hover:text-white pt-2 underline"
            >
              ← Kembali ke Langkah 2
            </button>
          </div>
        )}

        {/* Final Recommendation Result */}
        {step === 4 && (
          <div className="space-y-5">
            <div className="p-4 bg-emerald-950/40 border border-emerald-500/40 rounded-xl">
              <div className="flex items-center space-x-2 text-emerald-400 font-bold text-xs uppercase mb-1">
                <CheckCircle className="w-4 h-4" />
                <span>Rekomendasi Terbaik Untuk Anda</span>
              </div>
              <h4 className="text-lg font-bold text-white mb-2">{result.title}</h4>
              <p className="text-slate-300 text-xs leading-relaxed">{result.desc}</p>
            </div>

            <div>
              <h5 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                Persiapan Dokumen Berkas:
              </h5>
              <ul className="space-y-1.5 text-xs text-slate-300">
                {result.checklists.map((c, i) => (
                  <li key={i} className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-3 bg-slate-800 rounded-xl border border-slate-700 text-[11px] text-slate-400 flex items-center space-x-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Tim Admin BSCC Siap Membantu Bimbingan Berkas & Verifikasi Ijazah Anda.</span>
            </div>

            <div className="flex items-center space-x-2 pt-2">
              <button
                onClick={handleReset}
                className="px-3.5 py-3 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl text-xs font-semibold transition-colors flex items-center space-x-1"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Ulangi</span>
              </button>
              <a
                href="#pendaftaran"
                onClick={() => {
                  onSelectForRegister(result.code);
                  onClose();
                }}
                className="flex-1 py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-xl text-xs text-center transition-all shadow-md flex items-center justify-center space-x-1.5"
              >
                <span>Lanjut Isi Formulir Pendaftaran</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
