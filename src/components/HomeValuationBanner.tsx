import React, { useState } from 'react';
import { Home, ArrowRight, CheckCircle, Calculator } from 'lucide-react';
import { BUSINESS_DATA } from '../data/realtyData';

interface HomeValuationBannerProps {
  onOpenValuationModal: (address: string) => void;
}

export const HomeValuationBanner: React.FC<HomeValuationBannerProps> = ({
  onOpenValuationModal
}) => {
  const [address, setAddress] = useState('');
  const [addressInvalid, setAddressInvalid] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (address.trim()) {
      onOpenValuationModal(address.trim());
    }
  };

  return (
    <section
      id="home-value"
      className="relative py-20 sm:py-28 text-white overflow-hidden"
    >
      {/* Background Architectural Image matching bottom of Screenshot 4 */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2000&q=85"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-center"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/60 backdrop-brightness-90" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-8 text-center flex flex-col items-center">

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-display mb-4 drop-shadow-md">
          Request a home valuation
        </h2>

        <p className="max-w-2xl text-sm sm:text-base text-neutral-200 font-medium mb-8 leading-relaxed drop-shadow-sm">
          Share your address to get a home valuation.
        </p>

        {/* Address Search Form */}
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-2xl bg-white/90 backdrop-blur-md p-1.5 rounded-xs flex flex-col sm:flex-row items-center gap-2 shadow-2xl border border-white/40"
        >
          <div className="w-full pl-3 pr-2 text-neutral-900 flex items-center">
            <Home aria-hidden="true" className="w-5 h-5 text-neutral-500 mr-2 shrink-0" />
            <label htmlFor="valuation-address-input" className="sr-only">Property street address</label>
            <input
              id="valuation-address-input"
              type="text"
              required
              aria-required="true"
              aria-invalid={addressInvalid}
              aria-describedby="valuation-address-help"
              onInvalid={() => setAddressInvalid(true)}
              value={address}
              onChange={(e) => {
                setAddress(e.target.value);
                setAddressInvalid(false);
              }}
              placeholder="Enter your property address in Chino Hills, Corona, etc..."
              className="w-full bg-transparent py-2.5 text-sm sm:text-base text-neutral-900 placeholder:text-neutral-500 font-medium"
            />
            <span id="valuation-address-help" className="sr-only">Enter the property address to request a home valuation.</span>
          </div>

          <button
            id="valuation-submit-btn"
            type="submit"
            className="w-full sm:w-auto bg-brand-ink hover:bg-brand-charcoal text-brand-gold-light px-7 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider rounded-xs transition-colors shrink-0 cursor-pointer shadow-xs active:translate-y-px"
          >
            Get Estimate
          </button>
        </form>
        <p className="mt-3 max-w-2xl text-left text-[11px] leading-relaxed text-neutral-200">
          By submitting this form, you agree to our <a href="/privacy-policy" className="underline underline-offset-2">Privacy Policy</a>. California residents can review their rights under CCPA/CPRA <a href="/privacy-policy" className="underline underline-offset-2">here</a>.
        </p>

        {/* Trust Badges */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-neutral-300 font-medium">
          <span className="flex items-center gap-1.5">
            <CheckCircle aria-hidden="true" className="w-3.5 h-3.5 text-neutral-300" />
            100% Free & Confidential
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle aria-hidden="true" className="w-3.5 h-3.5 text-neutral-300" />
            No Obligation Analysis
          </span>
        </div>
      </div>
    </section>
  );
};
