import React, { useState } from 'react';
import { GalleryItem } from '../types';
import { Image as ImageIcon, Search, ExternalLink, Calendar, Hash, Sparkles, X, CheckCircle2 } from 'lucide-react';
import { SCHOOL_PROFILE } from '../data/pkbmData';

interface GallerySectionProps {
  galleryItems: GalleryItem[];
}

export const GallerySection: React.FC<GallerySectionProps> = ({
  galleryItems
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeItemModal, setActiveItemModal] = useState<GalleryItem | null>(null);

  const categories = [
    'Semua',
    'Vokasi Otomotif',
    'Vokasi Menjahit',
    'Pertanian',
    'Al-Qolam',
    'Vokasi Digital',
    'Kejar Paket'
  ];

  const filteredItems = galleryItems.filter((item) => {
    const matchesCategory =
      selectedCategory === 'Semua' || item.kategori.toLowerCase().includes(selectedCategory.toLowerCase());
    const matchesSearch =
      item.judul.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.deskripsi.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.hashtags && item.hashtags.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  const formatDate = (isoStr: string) => {
    try {
      const date = new Date(isoStr);
      return date.toLocaleDateString('id-ID', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      });
    } catch {
      return isoStr;
    }
  };

  return (
    <section id="galeri" className="py-20 px-4 max-w-6xl mx-auto border-t border-slate-800/80">
      {/* Header Galeri */}
      <div className="mb-10">
        <span className="inline-flex items-center space-x-1.5 px-3 py-1 bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold rounded-full mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Aktivitas & Dokumentasi Kegiatan</span>
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Galeri Kegiatan & Dokumentasi BSC
        </h2>
        <p className="text-slate-400 text-sm sm:text-base leading-relaxed mt-2 max-w-2xl">
          Dokumentasi langsung praktik vokasi, pembelajaran kesetaraan, dan program komunitas warga {SCHOOL_PROFILE.namaBrandLengkap} ({SCHOOL_PROFILE.namaResmi}).
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8 bg-slate-800/50 p-3 rounded-2xl border border-slate-700/80">
        {/* Categories */}
        <div className="flex items-center space-x-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? 'bg-amber-500 text-slate-950 font-bold shadow-md'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Bar */}
        <div className="relative w-full md:w-64 shrink-0">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Cari dokumentasi..."
            className="w-full bg-slate-900 border border-slate-700 rounded-xl pl-9 pr-4 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 transition-colors"
          />
        </div>
      </div>

      {/* Gallery Cards Grid */}
      {filteredItems.length === 0 ? (
        <div className="text-center py-16 bg-slate-800/30 border border-slate-800 rounded-2xl">
          <ImageIcon className="w-12 h-12 text-slate-600 mx-auto mb-3" />
          <h3 className="text-slate-300 font-bold mb-1">Belum Ada Dokumentasi Kegiatan</h3>
          <p className="text-slate-500 text-xs max-w-sm mx-auto mb-4">
            Tidak ditemukan kegiatan dengan kata kunci atau kategori yang Anda pilih.
          </p>
          <button
            onClick={() => {
              setSelectedCategory('Semua');
              setSearchQuery('');
            }}
            className="text-xs text-amber-400 underline font-semibold hover:text-amber-300"
          >
            Reset Filter
          </button>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveItemModal(item)}
              className="bg-slate-800/60 border border-slate-700/80 hover:border-amber-500/60 rounded-2xl overflow-hidden transition-all duration-300 group hover:shadow-xl flex flex-col justify-between cursor-pointer"
            >
              <div>
                {/* Image Container */}
                <div className="relative h-48 overflow-hidden bg-slate-900">
                  <img
                    src={item.imageUrl}
                    alt={item.judul}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80" />

                  {/* Kategori Badge */}
                  <span className="absolute top-3 left-3 bg-slate-900/90 text-amber-400 border border-amber-500/30 text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-lg backdrop-blur-md">
                    {item.kategori}
                  </span>

                  {/* Date Badge */}
                  <span className="absolute bottom-3 left-3 text-[11px] text-slate-300 flex items-center space-x-1 font-medium">
                    <Calendar className="w-3 h-3 text-amber-400" />
                    <span>{formatDate(item.timestamp)}</span>
                  </span>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-base font-bold text-white group-hover:text-amber-400 transition-colors line-clamp-2 mb-2">
                    {item.judul}
                  </h3>
                  <p className="text-slate-400 text-xs leading-relaxed line-clamp-3 mb-4">
                    {item.deskripsi}
                  </p>

                  {/* Hashtags */}
                  {item.hashtags && (
                    <div className="text-[11px] text-amber-400/80 font-mono flex items-center space-x-1 truncate mb-3">
                      <Hash className="w-3 h-3 text-amber-400 shrink-0" />
                      <span className="truncate">{item.hashtags}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Card Footer Status */}
              <div className="px-5 py-3 bg-slate-900/60 border-t border-slate-800 flex items-center justify-between text-[11px]">
                <span className="text-emerald-400 flex items-center space-x-1 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Auto-Posted Social Media</span>
                </span>
                <span className="text-slate-400 font-semibold group-hover:text-amber-400 flex items-center space-x-1">
                  <span>Detail</span>
                  <ExternalLink className="w-3 h-3" />
                </span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Lightbox Modal */}
      {activeItemModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md animate-fade-in">
          <div className="bg-slate-900 border border-slate-700 rounded-2xl w-full max-w-3xl overflow-hidden shadow-2xl">
            <div className="relative max-h-96 overflow-hidden bg-slate-950">
              <img
                src={activeItemModal.imageUrl}
                alt={activeItemModal.judul}
                className="w-full h-80 sm:h-96 object-cover"
              />
              <button
                onClick={() => setActiveItemModal(null)}
                className="absolute top-4 right-4 p-2 bg-slate-900/80 hover:bg-slate-800 text-white rounded-xl transition-colors border border-slate-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6">
              <div className="flex items-center space-x-2 mb-3">
                <span className="bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-extrabold uppercase px-3 py-1 rounded-lg">
                  {activeItemModal.kategori}
                </span>
                <span className="text-xs text-slate-400 flex items-center space-x-1">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" />
                  <span>{formatDate(activeItemModal.timestamp)}</span>
                </span>
              </div>

              <h3 className="text-xl font-extrabold text-white mb-3">
                {activeItemModal.judul}
              </h3>

              <p className="text-slate-300 text-sm leading-relaxed mb-4">
                {activeItemModal.deskripsi}
              </p>

              {activeItemModal.hashtags && (
                <div className="p-3 bg-slate-800/70 rounded-xl text-xs text-amber-400 font-mono mb-4">
                  {activeItemModal.hashtags}
                </div>
              )}

              <div className="flex items-center justify-between pt-4 border-t border-slate-800">
                <div className="text-xs text-emerald-400 flex items-center space-x-1">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Status Webhook: Berhasil diposting ke Social Media</span>
                </div>
                <button
                  onClick={() => setActiveItemModal(null)}
                  className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs rounded-xl transition-colors"
                >
                  Tutup
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
