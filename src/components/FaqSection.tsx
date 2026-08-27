import React, { useState } from 'react';
import { HelpCircle, ChevronDown, Search, CheckCircle2, DollarSign, ShieldCheck, Wallet, Sparkles, Clock, ArrowRight } from 'lucide-react';
import { FAQS, FEE_INSTALLMENT_SCHEMES, SCHOOL_PROFILE } from '../data/pkbmData';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-2');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFaqs = FAQS.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 px-4 max-w-5xl mx-auto border-t border-slate-800/80">
      {/* 1. Transparansi Skema Angsuran Biaya */}
      <div className="mb-16">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="inline-flex items-center space-x-1.5 px-3 py-1 bg-emerald-500/10 text-emerald-400 text-xs font-semibold rounded-full mb-3 border border-emerald-500/20">
            <Wallet className="w-3.5 h-3.5" />
            <span>Transparansi Biaya & Skema Cicilan</span>
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-3 tracking-tight">
            Skema Angsuran Biaya Ringan & Terbuka
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
            Tidak ada biaya tersembunyi. Biaya pendidikan di <strong className="text-white">{SCHOOL_PROFILE.namaBrandLengkap}</strong> dirancang sangat terjangkau dengan kemudahan cicilan bulanan tanpa bunga.
          </p>
        </div>

        {/* 3 Scheme Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {FEE_INSTALLMENT_SCHEMES.map((scheme) => (
            <div
              key={scheme.id}
              className={`bg-slate-800/70 border ${scheme.highlightColor} rounded-2xl p-6 flex flex-col justify-between backdrop-blur-sm relative shadow-xl hover:translate-y-[-2px] transition-transform`}
            >
              <div>
                {/* Badge Header */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 bg-slate-900 text-amber-400 rounded-lg border border-slate-700">
                    {scheme.badge}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-white mb-3">
                  {scheme.judul}
                </h3>

                {/* Key Cost Metrics */}
                <div className="p-3.5 bg-slate-900/80 rounded-xl border border-slate-700/80 mb-4 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-400">Pendaftaran Awal:</span>
                    <span className="font-bold text-emerald-400">{scheme.uangPangkal}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs pt-1 border-t border-slate-800">
                    <span className="text-slate-400">Sistem Angsuran:</span>
                    <span className="font-bold text-amber-400">{scheme.angsuran}</span>
                  </div>
                  <div className="flex items-center justify-between text-[11px] pt-1 border-t border-slate-800 text-slate-400">
                    <span>Durasi:</span>
                    <span className="text-slate-300 font-medium">{scheme.durasiCicilan}</span>
                  </div>
                </div>

                {/* Fasilitas Items */}
                <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Fasilitas yang Didapatkan:
                </p>
                <ul className="space-y-2 mb-6">
                  {scheme.fasilitas.map((fasi, i) => (
                    <li key={i} className="text-xs text-slate-300 flex items-start space-x-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{fasi}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Link to WhatsApp Consultation */}
              <a
                href={`https://wa.me/${SCHOOL_PROFILE.whatsappNumberUrl || '6289509828343'}?text=${encodeURIComponent(`Halo Admin BSC, saya ingin berkonsultasi mengenai skema angsuran untuk program: ${scheme.judul}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-amber-500/50 text-slate-200 hover:text-white rounded-xl text-xs font-bold transition-all text-center flex items-center justify-center space-x-1.5"
              >
                <span>Konsultasi Rincian Biaya</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          ))}
        </div>

        {/* Guarantees Strip */}
        <div className="mt-6 p-4 bg-slate-800/40 rounded-2xl border border-slate-700/60 grid grid-cols-2 sm:grid-cols-4 gap-3 text-center text-xs text-slate-300">
          <div className="flex items-center justify-center space-x-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Tanpa Biaya Siluman</span>
          </div>
          <div className="flex items-center justify-center space-x-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Cicilan Bebas Bunga</span>
          </div>
          <div className="flex items-center justify-center space-x-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Kuitansi Resmi Lembaga</span>
          </div>
          <div className="flex items-center justify-center space-x-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Subsidi Pra-Sejahtera</span>
          </div>
        </div>
      </div>

      {/* 2. FAQ Header */}
      <div className="text-center mb-10 pt-6">
        <div className="inline-flex items-center space-x-1.5 px-3 py-1 bg-amber-500/10 text-amber-400 text-xs font-semibold rounded-full mb-3 border border-amber-500/20">
          <HelpCircle className="w-3.5 h-3.5" />
          <span>Pusat Bantuan & Tanya Jawab</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
          Pertanyaan yang Sering Diajukan (FAQ)
        </h2>
        <p className="text-slate-400 text-xs sm:text-sm max-w-xl mx-auto">
          Temukan jawaban seputar legalitas ijazah resmi, metode belajar online/offline, biaya angsuran, dan ujian sekolah.
        </p>

        {/* Search input */}
        <div className="mt-6 max-w-md mx-auto relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Cari kata kunci (misal: Ijazah, Angsuran, Biaya, Online, Umur)..."
            className="w-full bg-slate-800 border border-slate-700 rounded-xl pl-10 pr-4 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-amber-500 transition-all placeholder:text-slate-500"
          />
        </div>
      </div>

      {/* Accordion List */}
      <div className="space-y-4">
        {filteredFaqs.length === 0 ? (
          <div className="text-center p-8 bg-slate-800/40 rounded-2xl border border-slate-700/60 text-slate-400 text-xs sm:text-sm">
            Tidak ditemukan jawaban yang cocok dengan kata kunci "{searchQuery}". Anda bisa langsung berkonsultasi via WhatsApp bersama Admin BSC.
          </div>
        ) : (
          filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-slate-800/70 border border-slate-700/80 rounded-2xl overflow-hidden transition-all hover:border-slate-600"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-5 text-left flex items-center justify-between space-x-4 hover:bg-slate-800 transition-colors"
                >
                  <span className="font-bold text-sm sm:text-base text-white">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-lg bg-slate-900 flex items-center justify-center shrink-0 text-slate-400 transition-transform ${
                      isOpen ? 'rotate-180 text-amber-400 bg-amber-500/10' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 border-t border-slate-700/60 text-slate-300 text-xs sm:text-sm leading-relaxed space-y-3 bg-slate-900/40">
                    <p>{faq.answer}</p>
                    <div className="inline-flex items-center space-x-1.5 px-2.5 py-1 bg-emerald-500/10 text-emerald-400 rounded-md text-[11px]">
                      <CheckCircle2 className="w-3 h-3" />
                      <span>Kategori: {faq.category}</span>
                    </div>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>
    </section>
  );
};
