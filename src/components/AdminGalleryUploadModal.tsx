import React, { useState } from 'react';
import { X, Upload, Send, Sparkles, Check, AlertCircle, Image as ImageIcon, Share2, Globe } from 'lucide-react';
import { GalleryItem } from '../types';

interface AdminGalleryUploadModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddGalleryItem: (item: GalleryItem, webhookUrl?: string) => Promise<boolean>;
  showToast: (msg: string, type?: 'success' | 'error' | 'info') => void;
}

const PRESET_SAMPLE_IMAGES = [
  { label: 'Otomotif Injeksi', url: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=800&auto=format&fit=crop&q=80' },
  { label: 'Tata Busana & Jahit', url: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=800&auto=format&fit=crop&q=80' },
  { label: 'Pertanian & Mekanisasi', url: 'https://images.unsplash.com/photo-1592417817098-8f3d6eb12735?w=800&auto=format&fit=crop&q=80' },
  { label: 'Tahfidz Al-Qolam', url: 'https://images.unsplash.com/photo-1609599006353-e629aa5d9137?w=800&auto=format&fit=crop&q=80' },
  { label: 'Lab Komputer', url: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&auto=format&fit=crop&q=80' },
  { label: 'Wisuda & Kelulusan', url: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&auto=format&fit=crop&q=80' },
];

export const AdminGalleryUploadModal: React.FC<AdminGalleryUploadModalProps> = ({
  isOpen,
  onClose,
  onAddGalleryItem,
  showToast
}) => {
  const [judul, setJudul] = useState('');
  const [kategori, setKategori] = useState('Vokasi Otomotif');
  const [imageUrl, setImageUrl] = useState('');
  const [deskripsi, setDeskripsi] = useState('');
  const [hashtags, setHashtags] = useState('#PKBMBerkahSadaya #BSCCCianjur #CianjurBangkit');
  const [webhookUrl, setWebhookUrl] = useState('https://hook.eu1.make.com/sample-bscc-autopost-webhook');
  const [isPosting, setIsPosting] = useState(false);
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>(['Instagram', 'Facebook', 'TikTok']);

  if (!isOpen) return null;

  const togglePlatform = (platform: string) => {
    setSelectedPlatforms(prev =>
      prev.includes(platform) ? prev.filter(p => p !== platform) : [...prev, platform]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!judul.trim() || !deskripsi.trim() || !imageUrl.trim()) {
      showToast('Harap lengkapi Judul, Deskripsi, dan Foto Kegiatan.', 'error');
      return;
    }

    setIsPosting(true);

    const newItem: GalleryItem = {
      id: `gal-${Date.now()}`,
      judul: judul.trim(),
      kategori,
      imageUrl: imageUrl.trim(),
      deskripsi: deskripsi.trim(),
      hashtags: hashtags.trim(),
      timestamp: new Date().toISOString(),
      targetPlatforms: selectedPlatforms
    };

    const success = await onAddGalleryItem(newItem, webhookUrl);

    setIsPosting(false);
    if (success) {
      // Reset fields
      setJudul('');
      setDeskripsi('');
      setImageUrl('');
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in overflow-y-auto">
      <div className="bg-slate-900 border border-slate-700/80 rounded-2xl w-full max-w-2xl overflow-hidden shadow-2xl my-8">
        {/* Header Modal */}
        <div className="flex items-center justify-between p-5 border-b border-slate-800 bg-slate-900/90 sticky top-0 z-10">
          <div className="flex items-center space-x-3">
            <div className="p-2.5 bg-amber-500/10 border border-amber-500/30 text-amber-400 rounded-xl">
              <Share2 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white flex items-center space-x-2">
                <span>Upload Kegiatan & Auto-Post Social Media</span>
                <span className="text-[10px] bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-semibold px-2 py-0.5 rounded-full">
                  Webhook Active
                </span>
              </h3>
              <p className="text-xs text-slate-400">
                Publikasikan ke Galeri Web & Otomatis Kirim Konten ke Make/n8n/Social Media
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white bg-slate-800/80 hover:bg-slate-700 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-5 max-h-[80vh] overflow-y-auto">
          {/* Judul Kegiatan */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
              Judul Kegiatan <span className="text-amber-400">*</span>
            </label>
            <input
              type="text"
              required
              value={judul}
              onChange={(e) => setJudul(e.target.value)}
              placeholder="Contoh: Praktik Service Sistem Injeksi Sepeda Motor..."
              className="w-full bg-slate-800/90 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500 transition-colors"
            />
          </div>

          {/* Kategori */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
              Kategori Kegiatan
            </label>
            <select
              value={kategori}
              onChange={(e) => setKategori(e.target.value)}
              className="w-full bg-slate-800/90 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500 transition-colors"
            >
              <option value="Vokasi Otomotif">🔧 Vokasi Otomotif & Mekanik</option>
              <option value="Vokasi Menjahit">🧵 Pendidikan Menjahit & Busana</option>
              <option value="Pertanian">🌱 Pertanian & Mekanisasi Modern</option>
              <option value="Al-Qolam">📖 Tahfidz & Keagamaan Al-Qolam</option>
              <option value="Vokasi Digital">💻 Vokasi Digital Skills</option>
              <option value="Kejar Paket">🎓 Kejar Paket A, B, C</option>
              <option value="Kewirausahaan">💼 Kewirausahaan & UMKM</option>
              <option value="Kegiatan Sosial">🤝 Kegiatan Sosial & Masyarakat</option>
            </select>
          </div>

          {/* URL Gambar */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
              URL Foto Kegiatan / Pilih Sampel <span className="text-amber-400">*</span>
            </label>
            <div className="flex space-x-2 mb-3">
              <input
                type="url"
                required
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                placeholder="https://images.unsplash.com/..."
                className="flex-1 bg-slate-800/90 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500 transition-colors"
              />
            </div>

            {/* Quick Presets */}
            <p className="text-[11px] text-slate-400 mb-2">Atau klik sampel foto cepat berikut:</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {PRESET_SAMPLE_IMAGES.map((preset, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setImageUrl(preset.url)}
                  className={`text-left p-2 rounded-lg border text-xs flex items-center space-x-2 transition-all ${
                    imageUrl === preset.url
                      ? 'border-amber-500 bg-amber-500/10 text-amber-300 font-semibold'
                      : 'border-slate-800 bg-slate-800/50 text-slate-400 hover:border-slate-700 hover:text-white'
                  }`}
                >
                  <ImageIcon className="w-3.5 h-3.5 shrink-0 text-amber-400" />
                  <span className="truncate">{preset.label}</span>
                </button>
              ))}
            </div>

            {/* Preview Image if valid */}
            {imageUrl && (
              <div className="mt-3 relative rounded-xl overflow-hidden border border-slate-700 max-h-48">
                <img
                  src={imageUrl}
                  alt="Preview"
                  className="w-full h-48 object-cover"
                  onError={() => showToast('Gagal memuat pratinjau gambar URL.', 'error')}
                />
                <span className="absolute bottom-2 right-2 bg-slate-900/90 text-amber-400 text-[10px] font-bold px-2 py-1 rounded-md border border-slate-700">
                  Pratinjau Foto
                </span>
              </div>
            )}
          </div>

          {/* Deskripsi Kegiatan */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
              Deskripsi Kegiatan <span className="text-amber-400">*</span>
            </label>
            <textarea
              required
              rows={3}
              value={deskripsi}
              onChange={(e) => setDeskripsi(e.target.value)}
              placeholder="Jelaskan detail kegiatan, peserta yang terlibat, serta manfaat pelatihan..."
              className="w-full bg-slate-800/90 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500 transition-colors"
            />
          </div>

          {/* Hashtags */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
              Hashtag Otomatis Social Media
            </label>
            <input
              type="text"
              value={hashtags}
              onChange={(e) => setHashtags(e.target.value)}
              placeholder="#PKBMBerkahSadaya #BSCCCianjur #PendidikanVokasi"
              className="w-full bg-slate-800/90 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500 transition-colors"
            />
          </div>

          {/* Target Platforms */}
          <div className="p-4 bg-slate-800/50 border border-slate-700/80 rounded-xl">
            <label className="block text-xs font-bold text-slate-200 uppercase tracking-wider mb-3">
              Target Channel Auto-Post (Simulasi Webhook)
            </label>
            <div className="flex flex-wrap gap-2">
              {['Instagram', 'Facebook', 'TikTok', 'WhatsApp Channel'].map((platform) => {
                const isSelected = selectedPlatforms.includes(platform);
                return (
                  <button
                    key={platform}
                    type="button"
                    onClick={() => togglePlatform(platform)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center space-x-1.5 transition-all ${
                      isSelected
                        ? 'bg-amber-500 text-slate-950 shadow-md'
                        : 'bg-slate-900 border border-slate-700 text-slate-400 hover:text-white'
                    }`}
                  >
                    {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                    <span>{platform}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Webhook Configuration */}
          <div className="p-4 bg-slate-950/60 border border-slate-800 rounded-xl space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold text-slate-300 flex items-center space-x-1.5">
                <Globe className="w-4 h-4 text-emerald-400" />
                <span>Endpoint Webhook (Make.com / n8n / Custom API)</span>
              </label>
              <span className="text-[10px] text-amber-400 font-mono">POST JSON</span>
            </div>
            <input
              type="url"
              value={webhookUrl}
              onChange={(e) => setWebhookUrl(e.target.value)}
              className="w-full bg-slate-900 border border-slate-700 text-slate-300 font-mono text-xs rounded-lg px-3 py-2 focus:outline-none focus:border-emerald-500"
            />
            <p className="text-[11px] text-slate-400">
              Payload JSON berisi <code>judul</code>, <code>kategori</code>, <code>imageUrl</code>, <code>deskripsi</code>, <code>hashtags</code>, dan <code>timestamp</code> akan dikirim otomatis.
            </p>
          </div>

          {/* Submit Button */}
          <div className="pt-2 flex items-center justify-end space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2.5 text-xs font-bold text-slate-400 hover:text-white bg-slate-800 rounded-xl transition-colors"
            >
              Batal
            </button>
            <button
              type="submit"
              disabled={isPosting}
              className="px-6 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-xs rounded-xl shadow-lg transition-all flex items-center space-x-2 disabled:opacity-50"
            >
              {isPosting ? (
                <>
                  <div className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                  <span>Mengirim Webhook & Posting...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Publikasi & Auto-Post Social Media</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
