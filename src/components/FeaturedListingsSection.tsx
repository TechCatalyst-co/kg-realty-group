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
            View Listings
          </h2>
          <div className="w-16 h-0.5 bg-neutral-300 mx-auto mt-3" />

        </div>

        <div className="mb-10 overflow-hidden rounded-xs border border-neutral-200 bg-neutral-50">
          <iframe
            title="CRMLS agent listings"
            src="https://www.crmls.org/servlet/lDisplayListings?OFFICE=52881&LA=EN"
            className="block h-[1000px] w-full"
            loading="eager"
          />
        </div>

      </div>
    </section>
  );
};
