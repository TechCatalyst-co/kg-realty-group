import React, { useState } from 'react';
import { Menu, X, Plus, Phone, Mail, MapPin } from 'lucide-react';
import { BUSINESS_DATA } from '../data/realtyData';
import { useDialogAccessibility } from '../hooks/useDialogAccessibility';

interface NavbarProps {
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const drawerRef = useDialogAccessibility<HTMLDivElement>(mobileMenuOpen, () => setMobileMenuOpen(false));
  const sectionHref = (section: string) => `${window.location.pathname === '/' ? '' : '/'}#${section}`;

  return (
    <header className="sticky top-0 z-50 bg-brand-ink border-b border-white/10 shadow-xs">
      {/* Top Utility Strip */}
      <div className="bg-brand-charcoal border-b border-white/10 text-xs text-neutral-300 py-1.5 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4 text-[11px] sm:text-xs">
            <span className="hidden sm:inline font-medium text-neutral-100">
              {BUSINESS_DATA.brokerage}
            </span>
            <span className="hidden sm:inline text-neutral-500">|</span>
            <a
              href={`tel:${BUSINESS_DATA.contact.phone.replace(/[^0-9]/g, '')}`}
              className="flex items-center gap-1.5 hover:text-brand-gold-light transition-colors"
            >
              <Phone aria-hidden="true" className="w-3 h-3 text-brand-gold-light" />
              {BUSINESS_DATA.contact.phone}
            </a>
            <span className="hidden md:flex items-center gap-1.5 hover:text-brand-gold-light transition-colors">
              <MapPin aria-hidden="true" className="w-3 h-3 text-brand-gold-light" />
              {BUSINESS_DATA.contact.address.city}, {BUSINESS_DATA.contact.address.state}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={`mailto:${BUSINESS_DATA.contact.email}`}
              className="flex items-center gap-1.5 hover:text-brand-gold-light transition-colors text-[11px] sm:text-xs"
            >
              <Mail aria-hidden="true" className="w-3 h-3 text-brand-gold-light" />
              <span>{BUSINESS_DATA.contact.email}</span>
            </a>
            <span className="hidden lg:inline-flex items-center border-l border-white/20 pl-3 text-[11px] font-semibold text-brand-gold-light">
              Hablamos Español
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 h-20 flex items-center justify-between">
        <a href="/" className="flex items-center group text-left shrink-0">
          <img
            src="/kg-logo.png"
            alt="KG Realty Group logo"
            className="h-auto w-[9rem] sm:w-[12rem] object-contain select-none"
          />
        </a>

        {/* Desktop Nav Items */}
        <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8 text-xs font-bold tracking-wider text-neutral-100 uppercase font-display">
          <a
            href={sectionHref('featured-listings')}
            className="hover:text-brand-gold-light transition-colors py-2"
          >
            View Listings
          </a>

          <a
            href={sectionHref('home-value')}
            className="hover:text-brand-gold-light transition-colors py-2"
          >
            Selling
          </a>

          <a
            href={sectionHref('testimonials')}
            className="hover:text-brand-gold-light transition-colors py-2"
          >
            Testimonials
          </a>

          <a
            href={sectionHref('contact')}
            className="hover:text-brand-gold-light transition-colors py-2"
          >
            Contact
          </a>

          {/* LET'S TALK Red Button */}
          <button
            id="nav-lets-talk-btn"
            onClick={onOpenContact}
            className="bg-brand-gold-light hover:bg-brand-gold text-brand-ink px-5 py-2.5 text-xs font-bold uppercase tracking-wider rounded-xs transition-colors shadow-xs active:translate-y-px cursor-pointer"
          >
            Let's Talk
          </button>
        </nav>

        {/* Mobile menu and CTA */}
        <div className="flex items-center gap-3 lg:hidden">
          <button
            id="mobile-lets-talk-btn"
            onClick={onOpenContact}
            className="bg-brand-gold-light hover:bg-brand-gold text-brand-ink px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider rounded-xs transition-colors"
          >
            Let's Talk
          </button>

          <button
            id="mobile-menu-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-neutral-100 hover:text-brand-gold-light focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold-light"
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation-drawer"
          >
            {mobileMenuOpen ? <X aria-hidden="true" className="w-6 h-6" /> : <Menu aria-hidden="true" className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-neutral-950/70 backdrop-blur-xs flex justify-end">
          <div
            id="mobile-navigation-drawer"
            ref={drawerRef}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            tabIndex={-1}
            className="w-80 max-w-full bg-neutral-950 text-neutral-100 h-full shadow-2xl flex flex-col p-6 overflow-y-auto animate-in slide-in-from-right duration-200"
          >
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="font-extrabold text-base tracking-wider uppercase font-display text-white">
                KG Realty Group
              </div>
              <button
                id="close-drawer-btn"
                onClick={() => setMobileMenuOpen(false)}
                className="p-1 rounded-md text-neutral-300 hover:text-brand-gold-light"
                aria-label="Close navigation menu"
              >
                <X aria-hidden="true" className="w-5 h-5" />
              </button>
            </div>

            <div className="py-6 flex flex-col space-y-4 text-sm font-bold uppercase tracking-wider text-neutral-200 font-display">
              <a
                href={sectionHref('featured-listings')}
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-brand-gold-light py-1 transition-colors"
              >
                View Listings
              </a>
              <a
                href={sectionHref('testimonials')}
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-brand-gold-light py-1 transition-colors"
              >
                Testimonials
              </a>
              <a
                href={sectionHref('contact')}
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-brand-gold-light py-1 transition-colors"
              >
                Contact
              </a>
            </div>

            <div className="mt-auto pt-6 border-t border-white/10 space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="w-full bg-brand-gold-light text-brand-ink py-3 text-xs font-bold uppercase tracking-wider rounded-xs hover:bg-brand-gold transition-colors"
              >
                Let's Talk
              </button>
              <div className="text-xs text-neutral-300 text-center space-y-1">
                <p className="font-semibold text-neutral-100">{BUSINESS_DATA.contact.phone}</p>
                <p>{BUSINESS_DATA.contact.email}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
