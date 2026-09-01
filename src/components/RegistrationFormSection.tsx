import React, { useState, useEffect } from 'react';
import { Send, Loader2, MessageSquare, MapPin, Smartphone, User, Sparkles, ShieldCheck } from 'lucide-react';
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

    setTimeout(() => {
      const adminWA = SCHOOL_PROFILE.whatsappNumberUrl || '6289509828343';
      const encodedText = encodeURIComponent(formattedWAMessage);
      window.open(`https://wa.me/${adminWA}?text=${encodedText}`, '_blank');

      setIsLoading(false);
    }, 800);
  };

  return (
    <section id="pendaftaran" className="py-20 px-4 bg-white relative border-b border-slate-200/80">
      <div className="max-w-3xl mx-auto">
        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-lg relative overflow-hidden">
          {/* Subtle Ambient Glow */}
          <div className="absolute -top-20 -right-20 w-60 h-60 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="mb-8 text-center">
            <span className="inline-flex items-center space-x-1.5 px-3.5 py-1 bg-emerald-100/70 text-emerald-900 text-xs font-bold rounded-full mb-2 border border-emerald-300">
              <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
              <span>Pendaftaran Langsung & Free Konsultasi</span>
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-2">
              Formulir Pendaftaran & Konsultasi
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm max-w-lg mx-auto leading-relaxed">
              Isi data di bawah ini untuk terhubung langsung dengan Admin {SCHOOL_PROFILE.namaBrandLengkap} ({SCHOOL_PROFILE.namaResmi}) via WhatsApp.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Nama Lengkap */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2 flex items-center justify-between">
                <span className="flex items-center space-x-1.5">
                  <User className="w-4 h-4 text-emerald-700" />
                  <span>Nama Lengkap (Sesuai KK / KTP)</span>
                </span>
                <span className="text-emerald-700 text-[10px] font-bold">*Wajib</span>
              </label>
              <input
                type="text"
                value={nama}
                onChange={(e) => setNama(e.target.value)}
                required
                className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-slate-900 text-sm focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 transition-all placeholder:text-slate-400 font-medium"
                placeholder="Contoh: Ahmad Subagja"
              />
            </div>

            {/* WhatsApp */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2 flex items-center justify-between">
                <span className="flex items-center space-x-1.5">
                  <Smartphone className="w-4 h-4 text-emerald-700" />
                  <span>Nomor WhatsApp Aktif</span>
                </span>
                <span className="text-emerald-700 text-[10px] font-bold">*Wajib</span>
              </label>
              <input
                type="tel"
                value={whatsapp}
                onChange={handlePhoneChange}
                required
                className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-slate-900 text-sm focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 transition-all placeholder:text-slate-400 font-medium"
                placeholder="08xxxxxxxxxx"
              />
            </div>

            {/* Grid Options */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Program Pilihan */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  Pilihan Program
                </label>
                <select
                  value={programPilihan}
                  onChange={(e) => setProgramPilihan(e.target.value)}
                  className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-slate-900 text-sm focus:outline-none focus:border-emerald-600 font-medium transition-all"
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
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2 flex items-center space-x-1">
                  <MapPin className="w-4 h-4 text-emerald-700" />
                  <span>Kecamatan di Cianjur</span>
                </label>
                <select
                  value={lokasi}
                  onChange={(e) => setLokasi(e.target.value)}
                  className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-slate-900 text-sm focus:outline-none focus:border-emerald-600 font-medium transition-all"
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
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
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
                    className={`py-3 px-3 rounded-xl border text-center transition-all cursor-pointer ${
                      modeBelajar === mode
                        ? 'bg-emerald-50 border-emerald-600 text-emerald-900 font-bold shadow-xs'
                        : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100'
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
                className="text-xs text-emerald-700 hover:text-emerald-900 underline flex items-center space-x-1 font-semibold cursor-pointer"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>{showPreview ? 'Sembunyikan' : 'Pratinjau'} Draf Pesan WhatsApp</span>
              </button>

              {showPreview && (
                <div className="mt-2 p-4 bg-emerald-50/70 border border-emerald-200 rounded-2xl text-xs font-mono text-emerald-950 whitespace-pre-wrap leading-relaxed">
                  {formattedWAMessage}
                </div>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-[#065f46] hover:bg-[#044c37] text-white font-extrabold py-4 rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center space-x-2 text-base cursor-pointer disabled:opacity-75"
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

          {/* Guarantee */}
          <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
            <div className="flex items-center space-x-1 text-emerald-700 font-semibold">
              <ShieldCheck className="w-4 h-4" />
              <span>NPSN: {SCHOOL_PROFILE.npsn}</span>
            </div>
            <span>Konsultasi 100% Gratis & Ramah</span>
          </div>
        </div>
      </div>
    </section>
  );
};
