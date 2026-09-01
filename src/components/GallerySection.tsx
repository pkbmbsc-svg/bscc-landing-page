import React, { useState } from 'react';
import { GalleryItem } from '../types';
import { DEFAULT_GALLERY_ITEMS, SCHOOL_PROFILE } from '../data/pkbmData';
import { X, ZoomIn, Calendar, MapPin, Sparkles } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('semua');
  const [activePhoto, setActivePhoto] = useState<GalleryItem | null>(null);

  const categories = [
    { id: 'semua', label: 'Semua Dokumentasi' },
    { id: 'Kejar Paket', label: '🎓 Kejar Paket & Ujian' },
    { id: 'Vokasi Otomotif', label: '🔧 Vokasi Otomotif' },
    { id: 'Pertanian', label: '🌱 Vokasi Pertanian' },
    { id: 'Al-Qolam', label: '📖 Al-Qolam Tahfidz' },
    { id: 'Vokasi Digital', label: '💻 Vokasi Komputer' },
    { id: 'Vokasi Menjahit', label: '✂️ Tata Busana' }
  ];

  const filteredItems = DEFAULT_GALLERY_ITEMS.filter((item) => {
    if (selectedCategory === 'semua') return true;
    return item.kategori === selectedCategory;
  });

  return (
    <section id="galeri" className="py-20 px-4 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="inline-flex items-center space-x-1.5 px-3.5 py-1 bg-emerald-50 text-emerald-800 text-xs font-bold rounded-full mb-3 border border-emerald-200">
          <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
          <span>Aktivitas & Bukti Nyata</span>
        </span>
        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-4">
          Galeri Kegiatan PKBM Berkah Sadaya
        </h2>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          Dokumentasi momen berharga mulai dari proses belajar mengajar tatap muka, pelatihan vokasi digital, simulasi asesmen nasional ANBK, hingga kebahagiaan pelepasan kelulusan dan penyerahan ijazah resmi.
        </p>

        {/* Category Pills */}
        <div className="flex flex-wrap justify-center items-center gap-2 mt-8 bg-slate-100 p-1.5 rounded-2xl border border-slate-200 w-fit mx-auto text-xs sm:text-sm">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl font-bold transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-[#065f46] text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            onClick={() => setActivePhoto(item)}
            className="group relative bg-white rounded-3xl overflow-hidden border border-slate-200 hover:border-emerald-500/80 shadow-sm hover:shadow-xl transition-all cursor-pointer flex flex-col"
          >
            {/* Image Container */}
            <div className="relative aspect-4/3 overflow-hidden bg-slate-100">
              <img
                src={item.imageUrl}
                alt={item.judul}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/40 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                <div className="p-3 bg-white/90 backdrop-blur-md rounded-2xl text-slate-900 shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
                  <ZoomIn className="w-5 h-5 text-[#065f46]" />
                </div>
              </div>

              {/* Tag Category */}
              <div className="absolute top-3 left-3">
                <span className="px-2.5 py-1 bg-slate-900/80 backdrop-blur-md text-white text-[10px] font-bold rounded-lg uppercase tracking-wider border border-white/20">
                  {item.kategori}
                </span>
              </div>
            </div>

            {/* Content Details */}
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-extrabold text-slate-900 text-base mb-1.5 group-hover:text-emerald-700 transition-colors">
                  {item.judul}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                  {item.deskripsi}
                </p>
              </div>

              <div className="flex items-center justify-between text-xs text-slate-500 pt-3 border-t border-slate-100">
                <span className="flex items-center space-x-1">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" />
                  <span>Dokumentasi Resmi</span>
                </span>
                <span className="flex items-center space-x-1 text-emerald-700 font-semibold">
                  <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Cianjur, Jabar</span>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Photo Lightbox Modal */}
      {activePhoto && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl relative border border-slate-200">
            <button
              onClick={() => setActivePhoto(null)}
              className="absolute top-4 right-4 text-slate-700 hover:text-slate-950 p-2.5 rounded-full bg-white/80 hover:bg-white backdrop-blur-md transition-colors z-10 shadow-md cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="max-h-[60vh] bg-slate-950 flex items-center justify-center">
              <img
                src={activePhoto.imageUrl}
                alt={activePhoto.judul}
                className="max-h-[60vh] w-full object-contain"
              />
            </div>

            <div className="p-6 sm:p-8 bg-white">
              <div className="flex items-center space-x-2 mb-2">
                <span className="px-3 py-1 bg-emerald-50 text-emerald-800 text-xs font-bold rounded-full uppercase border border-emerald-200">
                  {activePhoto.kategori}
                </span>
                <span className="text-xs text-slate-500 font-medium">
                  {SCHOOL_PROFILE.namaResmi} • Cianjur
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-2">
                {activePhoto.judul}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                {activePhoto.deskripsi}
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-slate-100 text-xs">
                <span className="text-slate-500 font-medium">
                  NPSN: {SCHOOL_PROFILE.npsn}
                </span>
                <button
                  onClick={() => setActivePhoto(null)}
                  className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold rounded-xl transition-colors cursor-pointer"
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
