import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { StatsBanner } from './components/StatsBanner';
import { FeaturedListingsSection } from './components/FeaturedListingsSection';
import { HomeValuationBanner } from './components/HomeValuationBanner';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactAndHoursSection } from './components/ContactAndHoursSection';
import { Footer } from './components/Footer';
import { ListingModal } from './components/ListingModal';
import { ContactModal } from './components/ContactModal';
import { PropertyListing } from './types';

export default function App() {
  const [selectedListing, setSelectedListing] = useState<PropertyListing | null>(null);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [contactTopic, setContactTopic] = useState<string>('');

  const handleOpenValuationModal = (address: string) => {
    setContactTopic(`Home Valuation for: ${address}`);
    setIsContactOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-neutral-900 font-sans selection:bg-brand-gold-light selection:text-brand-ink">
      {/* Header & Navbar */}
      <Navbar
        onOpenContact={() => {
          setContactTopic('General Real Estate Inquiry');
          setIsContactOpen(true);
        }}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section matching Screenshot 1 */}
        <HeroSection />

        {/* Performance & Business Stats Banner */}
        <StatsBanner />

        {/* Featured Listings Section matching Screenshots 2 & 4 */}
        <FeaturedListingsSection
          onSelectListing={(listing) => setSelectedListing(listing)}
        />

        {/* Home Valuation Banner matching bottom of Screenshot 4 */}
        <HomeValuationBanner onOpenValuationModal={handleOpenValuationModal} />

        {/* Testimonials Section */}
        <TestimonialsSection />

        {/* Office Hours & Contact Form Section */}
        <ContactAndHoursSection />
      </main>

      {/* Footer */}
      <Footer />


      {/* Property Details Modal */}
      <ListingModal
        listing={selectedListing}
        onClose={() => setSelectedListing(null)}
        onScheduleShowing={(listing) => {
          setSelectedListing(null);
          setContactTopic(`Schedule Private Showing: ${listing.address} (${listing.formattedPrice})`);
          setIsContactOpen(true);
        }}
      />

      {/* Let's Talk / Contact Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        prefilledTopic={contactTopic}
      />

    </div>
  );
}
