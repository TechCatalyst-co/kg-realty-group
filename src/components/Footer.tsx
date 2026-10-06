import React from 'react';
import { Phone, Mail, MapPin, ShieldCheck, Home, Award, Heart } from 'lucide-react';
import { BUSINESS_DATA } from '../data/realtyData';

export const Footer: React.FC = () => {
  const sectionHref = (section: string) => `${window.location.pathname === '/' ? '' : '/'}#${section}`;

  return (
    <footer className="bg-neutral-950 text-neutral-400 border-t border-neutral-800 text-xs">
      {/* Top Footer Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center">
              <img
                src="/kg-logo.png"
                alt="KG Realty Group logo"
                className="h-auto w-[12rem] max-w-full object-contain rounded-xs"
              />
            </div>

            <p className="text-neutral-400 text-xs leading-relaxed max-w-sm">
              Kevin Gonzalez and KG Realty Group represent buyers and sellers in Chino Hills, Orange County, and nearby Southern California communities.
            </p>

            <div className="pt-2 text-[11px] text-neutral-400 space-y-1">
              <p className="flex items-center gap-1.5 text-neutral-300">
                <Phone aria-hidden="true" className="w-3.5 h-3.5 text-neutral-400" />
                {BUSINESS_DATA.contact.phone}
              </p>
              <p className="flex items-center gap-1.5 text-neutral-300">
                <Mail aria-hidden="true" className="w-3.5 h-3.5 text-neutral-400" />
                {BUSINESS_DATA.contact.email}
              </p>
              <p className="flex items-center gap-1.5 text-neutral-300">
                <MapPin aria-hidden="true" className="w-3.5 h-3.5 text-neutral-400" />
                {BUSINESS_DATA.contact.address.street}, {BUSINESS_DATA.contact.address.city}, {BUSINESS_DATA.contact.address.state} {BUSINESS_DATA.contact.address.zip}
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-xs tracking-wider uppercase font-display">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href={sectionHref('featured-listings')} className="hover:text-white transition-colors">Browse Listings</a></li>
              <li><a href={sectionHref('home-value')} className="hover:text-white transition-colors">Home Valuation</a></li>
              <li><a href={sectionHref('testimonials')} className="hover:text-white transition-colors">Client Reviews</a></li>
              <li><a href={sectionHref('contact')} className="hover:text-white transition-colors">Contact & Hours</a></li>
              <li><a href="/accessibility" className="hover:text-white transition-colors">Accessibility Statement</a></li>
            </ul>
          </div>

          {/* Specialties */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-xs tracking-wider uppercase font-display">
              Our Specialties
            </h4>
            <ul className="space-y-2 text-xs">
              {BUSINESS_DATA.specialties.map((spec, i) => (
                <li key={i} className="text-neutral-400">
                  {spec}
                </li>
              ))}
              <li className="pt-2 text-[11px] text-neutral-400">
                <span className="font-semibold text-neutral-200">Languages:</span>{' '}
                {BUSINESS_DATA.languages_spoken.join(', ')}
              </li>
            </ul>
          </div>

          {/* Top Service Areas */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-xs tracking-wider uppercase font-display">
              Key Service Areas
            </h4>
            <ul className="space-y-1.5 text-[11px]">
              {BUSINESS_DATA.service_areas.slice(0, 6).map((area, i) => (
                <li key={i} className="text-neutral-400">
                  {area}
                </li>
              ))}
              <li className="text-[10px] text-neutral-400 font-semibold pt-1">
                + {BUSINESS_DATA.service_areas.length - 6} more regions
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Disclaimers and MLS Compliance */}
      <div className="bg-black py-6 border-t border-neutral-900 text-[11px] text-neutral-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-3">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="font-bold text-neutral-200">
                © {new Date().getFullYear()} {BUSINESS_DATA.name}. All Rights Reserved.
              </span>
              <span>•</span>
              <span>Brokered by {BUSINESS_DATA.brokerage}</span>
            </div>

            <div className="flex items-center gap-4 text-neutral-400">
              <span className="inline-flex items-center gap-1">
                <Home aria-hidden="true" className="w-3.5 h-3.5" /> Equal Housing Opportunity
              </span>
              <span>•</span>
              <span>California DRE #01928491</span>
            </div>
          </div>

          <p className="text-[10px] leading-relaxed text-neutral-400">
            Based on information from California Regional Multiple Listing Service, Inc. (CRMLS) and/or other MLS sources as of {new Date().toLocaleDateString()}. All information deemed reliable but not guaranteed and should be independently verified. The properties listed may or may not be listed by the office or agent presenting the information.
          </p>
        </div>
      </div>
    </footer>
  );
};
