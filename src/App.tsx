import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { FeaturedExperience } from './components/FeaturedExperience';
import { Gallery } from './components/Gallery';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Reviews } from './components/Reviews';
import { BookingForm } from './components/BookingForm';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FloatingCTA } from './components/FloatingCTA';
import { BUSINESS_CONFIG } from './config/business';
import { ServiceItem } from './data/services';

export default function App() {
  // Configurable owner settings
  const [pricingConfirmed, setPricingConfirmed] = useState<boolean>(
    BUSINESS_CONFIG.pricingConfirmed
  );
  const [whatsappEnabled, setWhatsappEnabled] = useState<boolean>(
    BUSINESS_CONFIG.whatsapp.enabled
  );
  const [preselectedService, setPreselectedService] = useState<ServiceItem | null>(null);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBookClick = () => {
    scrollToSection('booking');
  };

  const handleExploreClick = () => {
    scrollToSection('services');
  };

  const handleEnquireService = (service: ServiceItem) => {
    setPreselectedService(service);
    scrollToSection('booking');
  };

  return (
    <div className="min-h-screen bg-[#111111] text-[#F5F1EA] selection:bg-[#C6A46A] selection:text-[#111111] pb-14 md:pb-0">
      {/* Sticky Navigation Header */}
      <Header onBookClick={handleBookClick} />

      {/* Main Page Landmark */}
      <main id="main-content">
        {/* Hero Section */}
        <Hero
          onBookClick={handleBookClick}
          onExploreClick={handleExploreClick}
        />

        {/* About Section */}
        <About />

        {/* Services Catalogue */}
        <Services
          pricingConfirmed={pricingConfirmed}
          onTogglePricingConfirmed={() => setPricingConfirmed((prev) => !prev)}
          onEnquireService={handleEnquireService}
        />

        {/* Featured Experience Pillars */}
        <FeaturedExperience onBookClick={handleBookClick} />

        {/* Gallery */}
        <Gallery />

        {/* Why Choose Us */}
        <WhyChooseUs />

        {/* Google Reviews & Feedback Invitation */}
        <Reviews />

        {/* Booking & Enquiry Form */}
        <BookingForm
          preselectedService={preselectedService}
          onClearPreselectedService={() => setPreselectedService(null)}
          whatsappEnabled={whatsappEnabled}
          onToggleWhatsApp={() => setWhatsappEnabled((prev) => !prev)}
        />

        {/* Contact, Hours & Map Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Sticky Quick CTA */}
      <FloatingCTA onBookClick={handleBookClick} />
    </div>
  );
}
