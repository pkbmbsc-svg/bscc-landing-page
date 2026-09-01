import React, { useState } from 'react';
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
import { ProgramDetail } from './types';

export default function App() {
  // Selected Program Code for pre-filling Registration Form
  const [selectedProgramCode, setSelectedProgramCode] = useState<string>('Paket C (Setara SMA)');

  // Modals
  const [inspectProgram, setInspectProgram] = useState<ProgramDetail | null>(null);
  const [isEligibilityOpen, setIsEligibilityOpen] = useState(false);

  // Toast System
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [toastIsError, setToastIsError] = useState(false);

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
    <div className="bg-white text-slate-900 font-sans antialiased selection:bg-emerald-600 selection:text-white min-h-screen flex flex-col">
      {/* Toast Notification Popup */}
      {toastMessage && (
        <div
          id="toast"
          className={`fixed top-5 right-5 z-50 max-w-sm p-4 rounded-2xl shadow-2xl border transition-all duration-300 ${
            toastIsError ? 'bg-red-50 border-red-300 text-red-900' : 'bg-emerald-50 border-emerald-300 text-emerald-950'
          }`}
        >
          <p id="toast-message" className="text-xs sm:text-sm font-bold">
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
        {/* Hero Banner with exact visual theme */}
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
        <GallerySection />

        {/* Social Proof & Verification */}
        <SocialProofSection />

        {/* Form Pendaftaran Section */}
        <RegistrationFormSection
          selectedProgramCode={selectedProgramCode}
          showToast={showToast}
        />

        {/* FAQ Accordion & Cost Transparency */}
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
    </div>
  );
}
