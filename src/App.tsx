import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { EmpathySection } from './components/EmpathySection';
import { ProgramSection } from './components/ProgramSection';
import { RegistrationFormSection } from './components/RegistrationFormSection';
import { SocialProofSection } from './components/SocialProofSection';
import { GallerySection } from './components/GallerySection';
import { FaqSection } from './components/FaqSection';
import { ProgramDetailModal } from './components/ProgramDetailModal';
import { EligibilityModal } from './components/EligibilityModal';
import { Footer } from './components/Footer';
import { ProgramDetail, GalleryItem } from './types';
import { DEFAULT_GALLERY_ITEMS, SCHOOL_PROFILE } from './data/pkbmData';
import { MessageCircle } from 'lucide-react';

export default function App() {
  // Gallery Items State from localStorage
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>(() => {
    try {
      const saved = localStorage.getItem('bscc_gallery_items');
      if (saved) {
        const parsed: GalleryItem[] = JSON.parse(saved);
        const existingIds = new Set(parsed.map(i => i.id));
        const missingDefaults = DEFAULT_GALLERY_ITEMS.filter(d => !existingIds.has(d.id));
        return [...parsed, ...missingDefaults];
      }
      return DEFAULT_GALLERY_ITEMS;
    } catch {
      return DEFAULT_GALLERY_ITEMS;
    }
  });

  // Selected Program Code for pre-filling Registration Form
  const [selectedProgramCode, setSelectedProgramCode] = useState<string>('Paket C (Setara SMA)');

  // Modals
  const [inspectProgram, setInspectProgram] = useState<ProgramDetail | null>(null);
  const [isEligibilityOpen, setIsEligibilityOpen] = useState(false);

  // Toast System
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [toastIsError, setToastIsError] = useState(false);

  // Save gallery items to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('bscc_gallery_items', JSON.stringify(galleryItems));
    } catch (e) {
      console.error('Failed to save gallery items to localStorage', e);
    }
  }, [galleryItems]);

  const showToast = (msg: string, isError = false) => {
    setToastMessage(msg);
    setToastIsError(isError);
    setTimeout(() => {
      setToastMessage(null);
    }, 4500);
  };

  const handleSelectForRegister = (programCode: string) => {
    setSelectedProgramCode(programCode);
    const formEl = document.getElementById('pendaftaran');
    if (formEl) {
      formEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-slate-900 text-slate-100 font-sans antialiased selection:bg-amber-500 selection:text-slate-900 min-h-screen flex flex-col">
      {/* Toast Notification Popup */}
      {toastMessage && (
        <div
          id="toast"
          className={`fixed top-5 right-5 z-50 max-w-sm bg-slate-800 text-white p-4 rounded-xl shadow-2xl border transition-all duration-300 ${
            toastIsError ? 'border-red-500 text-red-300' : 'border-emerald-500 text-emerald-300'
          }`}
        >
          <p id="toast-message" className="text-xs sm:text-sm font-medium">
            {toastMessage}
          </p>
        </div>
      )}

      {/* Navigation Header */}
      <Header
        onOpenEligibility={() => setIsEligibilityOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Banner */}
        <HeroSection
          onOpenEligibility={() => setIsEligibilityOpen(true)}
          onSelectForRegister={handleSelectForRegister}
        />

        {/* Empathy & Solutions */}
        <EmpathySection onOpenEligibility={() => setIsEligibilityOpen(true)} />

        {/* Program Cards Grid */}
        <ProgramSection
          onSelectProgram={(prog) => setInspectProgram(prog)}
          onSelectForRegister={handleSelectForRegister}
        />

        {/* Galeri Kegiatan & Dokumentasi */}
        <GallerySection
          galleryItems={galleryItems}
        />

        {/* Social Proof & Verification */}
        <SocialProofSection />

        {/* Form Pendaftaran Section */}
        <RegistrationFormSection
          selectedProgramCode={selectedProgramCode}
          showToast={showToast}
        />

        {/* FAQ Accordion */}
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer
        onOpenEligibility={() => setIsEligibilityOpen(true)}
      />

      {/* Modals */}
      <ProgramDetailModal
        program={inspectProgram}
        onClose={() => setInspectProgram(null)}
        onSelectForRegister={handleSelectForRegister}
      />

      <EligibilityModal
        isOpen={isEligibilityOpen}
        onClose={() => setIsEligibilityOpen(false)}
        onSelectForRegister={handleSelectForRegister}
      />

      {/* Floating WhatsApp Quick Contact Button */}
      <a
        id="floating-wa-button"
        href={`https://wa.me/${SCHOOL_PROFILE.whatsappNumberUrl || '6289509828343'}?text=${encodeURIComponent('Halo Admin BSC Learning Center, saya ingin berkonsultasi mengenai program pendidikan kesetaraan / vokasi.')}`}
        target="_blank"
        rel="noopener noreferrer"
        title="Chat Langsung via WhatsApp Admin BSC"
        aria-label="Chat WhatsApp Admin BSC"
        className="fixed bottom-6 right-6 z-40 bg-emerald-500 hover:bg-emerald-400 text-white font-bold p-3.5 sm:px-4 sm:py-3 rounded-full shadow-2xl hover:shadow-emerald-500/40 flex items-center space-x-2 transition-all transform hover:scale-105 group border border-emerald-400/30"
      >
        <MessageCircle className="w-5 h-5 fill-current" />
        <span className="hidden sm:inline-block text-xs font-semibold tracking-wide">
          Chat WA BSC: {SCHOOL_PROFILE.telepon}
        </span>
      </a>
    </div>
  );
}

