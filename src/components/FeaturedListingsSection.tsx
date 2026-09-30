import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Bed, Bath, Maximize2, MapPin, SlidersHorizontal, Eye } from 'lucide-react';
import { PropertyListing } from '../types';
import { FEATURED_LISTINGS } from '../data/realtyData';

interface FeaturedListingsSectionProps {
  onSelectListing: (listing: PropertyListing) => void;
}

export const FeaturedListingsSection: React.FC<FeaturedListingsSectionProps> = ({
  onSelectListing
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 125; // Matches the 1 / 125 seen in Screenshot 4

  return (
    <section id="featured-listings" className="py-16 sm:py-24 bg-white border-b border-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header matching Screenshot 2 & 4 */}
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight font-display">
            Featured Listings
          </h2>
          <div className="w-16 h-0.5 bg-neutral-300 mx-auto mt-3" />

        </div>

        {/* 4-Column Grid matching Screenshot 2 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURED_LISTINGS.map((listing) => (
            <div
              key={listing.id}
              className="group relative h-80 sm:h-96 rounded-xs overflow-hidden shadow-md bg-neutral-900 cursor-pointer border border-neutral-200"
              onClick={() => onSelectListing(listing)}
            >
              {/* Home Image */}
              <img
                src={listing.imageUrl}
                alt={listing.address}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
              />

              {/* Status Badge */}
              <div className="absolute top-3 left-3 z-10">
                <span className="bg-neutral-900/80 backdrop-blur-xs text-white text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-xs">
                  {listing.status}
                </span>
              </div>

              {/* Dark Gradient Overlay matching the screenshot */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent pointer-events-none" />

              {/* Listing Content Overlay at bottom matching screenshot */}
              <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 flex flex-col justify-end text-white">
                {/* Price (Large bold white font) */}
                <div className="text-2xl sm:text-3xl font-extrabold tracking-tight font-display mb-1 text-white drop-shadow-sm">
                  {listing.formattedPrice}
                </div>

                {/* Address */}
                <div className="text-xs sm:text-[13px] font-semibold text-neutral-100 line-clamp-1 mb-1">
                  {listing.address}
                </div>

                {/* Specs: bd | ba | sqft */}
                <div className="text-[11px] sm:text-xs text-neutral-300 font-medium tracking-wide mb-3">
                  {listing.beds} bd | {listing.baths} ba | {listing.sqft.toLocaleString()} sqft
                </div>

                {/* Bottom Row: Listed with KG Realty & Red VIEW button */}
                <div className="flex items-center justify-between pt-2 border-t border-white/20">
                  <div className="flex items-center gap-1.5 text-[10px] text-neutral-300 font-normal">
                    <span className="italic">Listed With {listing.listedWith}</span>
                    <span className="bg-white/90 text-neutral-800 text-[8px] font-extrabold px-1 rounded-2xs tracking-tighter">
                      CRMLS
                    </span>
                  </div>

                  {/* Red VIEW Button matching Screenshot */}
                  <button
                    id={`listing-view-btn-${listing.id}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectListing(listing);
                    }}
                    className="bg-brand-ink hover:bg-brand-charcoal text-brand-gold-light px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider rounded-xs transition-colors shadow-xs shrink-0 cursor-pointer"
                  >
                    View
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination & See More Listings Button matching Screenshot 4 */}
        <div className="mt-12 flex flex-col items-center space-y-6">
          {/* Pagination Controls matching `< 1 / 125 >` */}
          <div className="flex items-center space-x-6 text-sm font-semibold text-neutral-800 font-display">
            <button
              id="pagination-prev-btn"
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              aria-label="Previous listings page"
              className="p-1 hover:text-brand-gold-deep disabled:opacity-30 disabled:hover:text-neutral-800 transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <span className="tracking-widest">
              {currentPage} / {totalPages}
            </span>

            <button
              id="pagination-next-btn"
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              aria-label="Next listings page"
              className="p-1 hover:text-brand-gold-deep disabled:opacity-30 disabled:hover:text-neutral-800 transition-colors cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Red "SEE MORE LISTINGS >" Button matching Screenshot 4 */}
          <button
            id="see-more-listings-btn"
            onClick={() => {
              if (currentPage < totalPages) {
                setCurrentPage(currentPage + 1);
              }
            }}
            className="inline-flex items-center gap-2 bg-brand-ink hover:bg-brand-charcoal text-brand-gold-light px-8 py-3 text-xs font-bold uppercase tracking-wider rounded-xs transition-colors shadow-xs active:translate-y-px cursor-pointer"
          >
            <span>See More Listings</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
