import React, { useState } from 'react';
import { X, CheckCircle, Sparkles, ArrowRight, RotateCcw, GraduationCap, ShieldCheck } from 'lucide-react';
import { BsccLogo } from './BsccLogo';

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
        desc: 'Pilihan tepat untuk meraih Ijazah Setara SMA Resmi Kemendikdasmen RI. Berlaku untuk Kuliah PTN/PTS, pendaftaran CPNS/TNI/POLRI, maupun kenaikan karir.',
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white border border-slate-200 rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-500 hover:text-slate-900 p-2 rounded-xl bg-slate-100 hover:bg-slate-200 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Title */}
        <div className="flex items-center gap-3.5 mb-6">
          <BsccLogo size="md" className="shrink-0 ring-2 ring-emerald-500/30 shadow-sm" />
          <div>
            <span className="inline-flex items-center space-x-1.5 text-[11px] font-black uppercase tracking-wider px-2.5 py-0.5 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded-full mb-1">
              <Sparkles className="w-3 h-3 text-emerald-700" />
              <span>Kuis Cek Kelayakan Program 1 Menit</span>
            </span>
            <h3 className="text-lg sm:text-xl font-black text-slate-900 leading-tight">
              Rekomendasi Program PKBM Berkah Sadaya
            </h3>
          </div>
        </div>

        {/* Wizard Steps */}
        {step === 1 && (
          <div className="space-y-4">
            <p className="text-xs sm:text-sm text-slate-700 font-bold">
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
                  className="w-full text-left p-3.5 rounded-2xl bg-slate-50 hover:bg-emerald-50 border border-slate-200 hover:border-emerald-500 text-slate-800 font-semibold transition-all flex items-center justify-between cursor-pointer"
                >
                  <span>{opt.label}</span>
                  <ArrowRight className="w-4 h-4 text-emerald-700" />
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4">
            <p className="text-xs sm:text-sm text-slate-700 font-bold">
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
                  className="p-3.5 rounded-2xl bg-slate-50 hover:bg-emerald-50 border border-slate-200 hover:border-emerald-500 text-slate-800 font-semibold transition-all text-center cursor-pointer"
                >
                  {u.label}
                </button>
              ))}
            </div>
            <button
              onClick={() => setStep(1)}
              className="text-xs text-slate-500 hover:text-slate-900 pt-2 underline cursor-pointer"
            >
              ← Kembali ke Langkah 1
            </button>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-4">
            <p className="text-xs sm:text-sm text-slate-700 font-bold">
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
                  className="w-full text-left p-3.5 rounded-2xl bg-slate-50 hover:bg-emerald-50 border border-slate-200 hover:border-emerald-500 text-slate-800 font-semibold transition-all flex items-center justify-between cursor-pointer"
                >
                  <span>{t.label}</span>
                  <ArrowRight className="w-4 h-4 text-emerald-700" />
                </button>
              ))}
            </div>
            <button
              onClick={() => setStep(2)}
              className="text-xs text-slate-500 hover:text-slate-900 pt-2 underline cursor-pointer"
            >
              ← Kembali ke Langkah 2
            </button>
          </div>
        )}

        {/* Final Recommendation Result */}
        {step === 4 && (
          <div className="space-y-5">
            <div className="p-4 bg-emerald-50 border border-emerald-300 rounded-2xl">
              <div className="flex items-center space-x-2 text-emerald-800 font-bold text-xs uppercase mb-1">
                <CheckCircle className="w-4 h-4 text-emerald-600" />
                <span>Rekomendasi Terbaik Untuk Anda</span>
              </div>
              <h4 className="text-lg font-black text-slate-900 mb-2">{result.title}</h4>
              <p className="text-slate-600 text-xs leading-relaxed">{result.desc}</p>
            </div>

            <div>
              <h5 className="text-xs font-black uppercase tracking-wider text-slate-800 mb-2">
                Persiapan Dokumen Berkas:
              </h5>
              <ul className="space-y-1.5 text-xs text-slate-700">
                {result.checklists.map((c, i) => (
                  <li key={i} className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-[11px] text-slate-600 flex items-center space-x-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Tim Konselor BSC Siap Membantu Bimbingan Berkas & Verifikasi Ijazah Anda.</span>
            </div>

            <div className="flex items-center space-x-2 pt-2">
              <button
                onClick={handleReset}
                className="px-3.5 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold transition-colors flex items-center space-x-1 cursor-pointer"
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
                className="flex-1 py-3 bg-[#065f46] hover:bg-[#044c37] text-white font-black rounded-xl text-xs text-center transition-all shadow-md flex items-center justify-center space-x-1.5 cursor-pointer"
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
