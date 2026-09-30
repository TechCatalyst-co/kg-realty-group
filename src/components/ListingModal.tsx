import React, { useState } from 'react';
import { X, Bed, Bath, Maximize2, MapPin, Calendar, Phone, Mail, CheckCircle2, DollarSign, Share2 } from 'lucide-react';
import { PropertyListing } from '../types';
import { BUSINESS_DATA } from '../data/realtyData';

interface ListingModalProps {
  listing: PropertyListing | null;
  onClose: () => void;
  onScheduleShowing: (listing: PropertyListing) => void;
}

export const ListingModal: React.FC<ListingModalProps> = ({
  listing,
  onClose,
  onScheduleShowing
}) => {
  if (!listing) return null;

  const [activeImage, setActiveImage] = useState(listing.imageUrl);
  const [requested, setRequested] = useState(false);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-4xl rounded-xs overflow-hidden shadow-2xl relative max-h-[92vh] flex flex-col">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-200 bg-neutral-50/70">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-brand-gold-deep bg-brand-gold-pale px-2 py-0.5 rounded-2xs border border-brand-border">
              {listing.status}
            </span>
            <h3 className="text-base sm:text-lg font-bold text-neutral-900 font-display mt-0.5">
              {listing.address}
            </h3>
          </div>
          <button
            id="close-listing-modal-btn"
            onClick={onClose}
            aria-label="Close modal"
            className="p-1.5 rounded-full text-neutral-500 hover:text-neutral-900 hover:bg-neutral-200/60 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="overflow-y-auto p-6 space-y-6">
          {/* Main Gallery Image */}
          <div className="relative aspect-16/9 rounded-xs overflow-hidden bg-neutral-900 shadow-md">
            <img
              src={activeImage}
              alt={listing.address}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-4 left-4 bg-neutral-900/90 text-white px-3 py-1.5 rounded-xs font-bold text-lg sm:text-xl font-display">
              {listing.formattedPrice}
            </div>
            <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-xs text-white text-xs px-2.5 py-1 rounded-xs">
              {listing.mlsNumber}
            </div>
          </div>

          {/* Thumbnail Strip */}
          {listing.galleryUrls && listing.galleryUrls.length > 1 && (
            <div className="flex gap-2 overflow-x-auto pb-2">
              {listing.galleryUrls.map((url, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(url)}
                  className={`w-20 h-14 shrink-0 rounded-xs overflow-hidden border-2 transition-all cursor-pointer ${
                    activeImage === url ? 'border-brand-gold scale-95' : 'border-transparent opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={url} alt={`Thumbnail ${idx}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}

          {/* Specs Row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 bg-neutral-50 rounded-xs border border-neutral-200 text-center">
            <div>
              <span className="text-[10px] uppercase font-bold text-neutral-400 font-display block">
                Bedrooms
              </span>
              <span className="text-base font-bold text-neutral-900 font-display">
                {listing.beds} Beds
              </span>
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold text-neutral-400 font-display block">
                Bathrooms
              </span>
              <span className="text-base font-bold text-neutral-900 font-display">
                {listing.baths} Baths
              </span>
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold text-neutral-400 font-display block">
                Living Space
              </span>
              <span className="text-base font-bold text-neutral-900 font-display">
                {listing.sqft.toLocaleString()} Sq Ft
              </span>
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold text-neutral-400 font-display block">
                Property Type
              </span>
              <span className="text-base font-bold text-neutral-900 font-display">
                {listing.propertyType}
              </span>
            </div>
          </div>

          {/* Description */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-neutral-900 font-display mb-2">
              Property Overview
            </h4>
            <p className="text-sm text-neutral-600 leading-relaxed">
              {listing.description}
            </p>
          </div>

          {/* Highlights */}
          {listing.features && (
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-neutral-900 font-display mb-2">
                Key Features
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {listing.features.map((feat, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-neutral-700">
                    <CheckCircle2 className="w-4 h-4 text-brand-gold-deep shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Schedule Showing / Inquire Box */}
          <div className="p-5 bg-neutral-900 text-white rounded-xs">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <img
                  src="/kevin_gonzalez.jpg"
                  alt={BUSINESS_DATA.lead}
                  className="w-12 h-12 rounded-full object-cover border-2 border-brand-gold shrink-0"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <div className="text-xs text-brand-gold-light font-bold uppercase tracking-wider font-display">
                    Listed with {listing.listedWith}
                  </div>
                  <div className="text-sm font-bold">
                    Represented by {BUSINESS_DATA.lead} & Team
                  </div>
                  <div className="text-xs text-neutral-400">
                    Call or text: {BUSINESS_DATA.contact.phone}
                  </div>
                </div>
              </div>

              {requested ? (
                <div className="text-emerald-400 text-xs font-bold flex items-center gap-1.5 bg-emerald-950/80 px-4 py-2.5 rounded-xs border border-emerald-700">
                  <CheckCircle2 className="w-4 h-4" />
                  Showing Request Sent! Kevin will confirm shortly.
                </div>
              ) : (
                <button
                  id="modal-request-showing-btn"
                  onClick={() => setRequested(true)}
                  className="bg-brand-ink hover:bg-brand-charcoal text-brand-gold-light px-6 py-2.5 text-xs font-bold uppercase tracking-wider rounded-xs transition-colors shrink-0 cursor-pointer"
                >
                  Schedule Private Showing
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
