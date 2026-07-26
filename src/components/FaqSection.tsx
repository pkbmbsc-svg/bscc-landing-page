import React, { useState } from 'react';
import { HelpCircle, ChevronDown, Search, CheckCircle2 } from 'lucide-react';
import { FAQS } from '../data/pkbmData';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');
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
    <section id="faq" className="py-20 px-4 max-w-4xl mx-auto">
      <div className="text-center mb-10">
        <div className="inline-flex items-center space-x-1.5 px-3 py-1 bg-amber-500/10 text-amber-400 text-xs font-semibold rounded-full mb-3 border border-amber-500/20">
          <HelpCircle className="w-3.5 h-3.5" />
          <span>Informasi Pendaftaran PKBM</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
          Pertanyaan yang Sering Diajukan (FAQ)
        </h2>
        <p className="text-slate-400 text-xs sm:text-sm max-w-xl mx-auto">
          Temukan jawaban seputar ijazah resmi, metode belajar online/offline, biaya, dan ujian sekolah.
        </p>

        {/* Search input */}
        <div className="mt-6 max-w-md mx-auto relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Cari kata kunci (misal: Ijazah, Kuliah, Biaya, Online)..."
            className="w-full bg-slate-800 border border-slate-700 rounded-xl pl-10 pr-4 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-amber-500 transition-all placeholder:text-slate-500"
          />
        </div>
      </div>

      {/* Accordion List */}
      <div className="space-y-4">
        {filteredFaqs.length === 0 ? (
          <div className="text-center p-8 bg-slate-800/40 rounded-2xl border border-slate-700/60 text-slate-400 text-xs sm:text-sm">
            Tidak ditemukan jawaban yang cocok dengan kata kunci "{searchQuery}". Anda bisa langsung berkonsultasi via WhatsApp.
          </div>
        ) : (
          filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-slate-800/70 border border-slate-700/80 rounded-2xl overflow-hidden transition-all"
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
