import React, { useState, useEffect } from 'react';
import { Send, Loader2, MessageSquare, MapPin, Smartphone, User, Sparkles } from 'lucide-react';
import { CIANJUR_KECAMATAN, SCHOOL_PROFILE } from '../data/pkbmData';

interface RegistrationFormSectionProps {
  selectedProgramCode?: string;
  showToast: (msg: string, isError?: boolean) => void;
}

export const RegistrationFormSection: React.FC<RegistrationFormSectionProps> = ({
  selectedProgramCode,
  showToast
}) => {
  const [nama, setNama] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [programPilihan, setProgramPilihan] = useState('Paket C (Setara SMA)');
  const [lokasi, setLokasi] = useState(CIANJUR_KECAMATAN[0]);
  const [modeBelajar, setModeBelajar] = useState('Online Daring / Belajar Mandiri');
  const [catatan, setCatatan] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showPreview, setShowPreview] = useState(false);

  // Sync when user picks program from program card
  useEffect(() => {
    if (selectedProgramCode) {
      setProgramPilihan(selectedProgramCode);
    }
  }, [selectedProgramCode]);

  // Format WhatsApp Number Helper
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value.replace(/[^0-9+]/g, '');
    if (val.startsWith('+62')) {
      val = '0' + val.slice(3);
    } else if (val.startsWith('62')) {
      val = '0' + val.slice(2);
    }
    setWhatsapp(val);
  };

  const formattedWAMessage = `Halo Admin ${SCHOOL_PROFILE.namaBrandLengkap} (${SCHOOL_PROFILE.namaResmi}), saya ingin berkonsultasi / mendaftar:

- *Nama Lengkap*: ${nama || '[Nama Anda]'}
- *Nomor WA*: ${whatsapp || '[Nomor WA]'}
- *Program Pilihan*: ${programPilihan}
- *Kecamatan di Cianjur*: ${lokasi || '[Lokasi]'}
- *Mode Belajar*: ${modeBelajar}
${catatan ? `- *Catatan Tambahan*: ${catatan}` : ''}

Mohon info pendaftaran dan persyaratan selanjutnya. Terima kasih!`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!nama.trim()) {
      showToast('Harap masukkan Nama Lengkap Anda', true);
      return;
    }
    if (!whatsapp.trim() || whatsapp.length < 8) {
      showToast('Harap masukkan nomor WhatsApp yang aktif', true);
      return;
    }

    setIsLoading(true);
    showToast('Mengarahkan langsung ke WhatsApp Admin BSC...');

    // Redirect to Admin WA (BSC Learning Center: 089509828343)
    setTimeout(() => {
      const adminWA = SCHOOL_PROFILE.whatsappNumberUrl || '6289509828343';
      const encodedText = encodeURIComponent(formattedWAMessage);
      window.open(`https://wa.me/${adminWA}?text=${encodedText}`, '_blank');

      setIsLoading(false);
    }, 800);
  };

  return (
    <section id="pendaftaran" className="py-20 px-4 bg-slate-950/60 relative">
      <div className="max-w-3xl mx-auto">
        <div className="bg-slate-800/90 border border-slate-700/90 rounded-2xl p-6 sm:p-10 shadow-2xl relative overflow-hidden backdrop-blur-md">
          {/* Subtle Glow */}
          <div className="absolute -top-20 -right-20 w-60 h-60 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="mb-8 text-center">
            <span className="inline-flex items-center space-x-1 px-3 py-1 bg-amber-500/10 text-amber-400 text-xs font-semibold rounded-full mb-2 border border-amber-500/20">
              <Sparkles className="w-3.5 h-3.5 mr-1" />
              Pendaftaran Langsung & Free Konsultasi
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2">
              Formulir Pendaftaran & Konsultasi
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm max-w-lg mx-auto">
              Isi data di bawah ini untuk terhubung langsung dengan Admin {SCHOOL_PROFILE.namaBrandLengkap} ({SCHOOL_PROFILE.namaResmi}) via WhatsApp.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Nama Lengkap */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2 flex items-center justify-between">
                <span className="flex items-center space-x-1.5">
                  <User className="w-3.5 h-3.5 text-amber-400" />
                  <span>Nama Lengkap (Sesuai KK / KTP)</span>
                </span>
                <span className="text-amber-400 text-[10px]">*Wajib</span>
              </label>
              <input
                type="text"
                value={nama}
                onChange={(e) => setNama(e.target.value)}
                required
                className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all placeholder:text-slate-500"
                placeholder="Contoh: Ahmad Subagja"
              />
            </div>

            {/* WhatsApp */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2 flex items-center justify-between">
                <span className="flex items-center space-x-1.5">
                  <Smartphone className="w-3.5 h-3.5 text-amber-400" />
                  <span>Nomor WhatsApp Aktif</span>
                </span>
                <span className="text-amber-400 text-[10px]">*Wajib</span>
              </label>
              <input
                type="tel"
                value={whatsapp}
                onChange={handlePhoneChange}
                required
                className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all placeholder:text-slate-500"
                placeholder="08xxxxxxxxxx"
              />
            </div>

            {/* Grid Options */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Program Pilihan */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                  Pilihan Program
                </label>
                <select
                  value={programPilihan}
                  onChange={(e) => setProgramPilihan(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-amber-500 transition-all"
                >
                  <option value="Paket A (Setara SD)">Kejar Paket A (Setara SD)</option>
                  <option value="Paket B (Setara SMP)">Kejar Paket B (Setara SMP)</option>
                  <option value="Paket C (Setara SMA)">Kejar Paket C (Setara SMA)</option>
                  <option value="Vokasi & Keterampilan">Pelatihan Vokasi / Komputer</option>
                  <option value="Pelatihan Kewirausahaan & UMKM">Pelatihan Kewirausahaan & UMKM</option>
                </select>
              </div>

              {/* Kecamatan di Cianjur */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2 flex items-center space-x-1">
                  <MapPin className="w-3.5 h-3.5 text-amber-400" />
                  <span>Kecamatan di Cianjur</span>
                </label>
                <select
                  value={lokasi}
                  onChange={(e) => setLokasi(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-amber-500 transition-all"
                >
                  {CIANJUR_KECAMATAN.map((kec) => (
                    <option key={kec} value={kec}>
                      {kec}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Mode Belajar */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                Pilihan Mode Belajar
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                {[
                  'Online Daring / Belajar Mandiri',
                  'Tatap Muka Akhir Pekan',
                  'Kelas Kombinasi (Flexi)'
                ].map((mode) => (
                  <button
                    type="button"
                    key={mode}
                    onClick={() => setModeBelajar(mode)}
                    className={`py-2.5 px-3 rounded-xl border text-center transition-all ${
                      modeBelajar === mode
                        ? 'bg-amber-500/20 border-amber-500 text-amber-300 font-semibold'
                        : 'bg-slate-900 border-slate-700 text-slate-400 hover:text-white'
                    }`}
                  >
                    {mode}
                  </button>
                ))}
              </div>
            </div>

            {/* WhatsApp Message Preview Accordion */}
            <div className="pt-2">
              <button
                type="button"
                onClick={() => setShowPreview(!showPreview)}
                className="text-xs text-amber-400 hover:text-amber-300 underline flex items-center space-x-1"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>{showPreview ? 'Sembunyikan' : 'Pratinjau'} Draf Pesan WhatsApp</span>
              </button>

              {showPreview && (
                <div className="mt-2 p-3 bg-slate-900/90 border border-slate-700 rounded-xl text-xs font-mono text-emerald-300 whitespace-pre-wrap leading-relaxed">
                  {formattedWAMessage}
                </div>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold py-4 rounded-xl shadow-lg shadow-amber-500/20 transition-all flex items-center justify-center space-x-2 text-base cursor-pointer disabled:opacity-75"
            >
              {isLoading ? (
                <>
                  <span>Memproses Pendaftaran...</span>
                  <Loader2 className="w-5 h-5 animate-spin" />
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  <span>Kirim Data & Konsultasi WhatsApp</span>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
