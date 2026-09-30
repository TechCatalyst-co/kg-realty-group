import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, MapPin } from 'lucide-react';
import { TOP_AREAS, BUSINESS_DATA } from '../data/realtyData';

interface TopAreasSectionProps {
  onSelectArea: (areaName: string) => void;
}

export const TopAreasSection: React.FC<TopAreasSectionProps> = ({ onSelectArea }) => {
  const [startIndex, setStartIndex] = useState(0);

  const visibleCount = 2; // Matches 2 prominent cards visible side-by-side on desktop as shown in Screenshot 3
  const maxIndex = Math.max(0, TOP_AREAS.length - visibleCount);

  const handlePrev = () => {
    setStartIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
  };

  return (
    <section id="top-areas" className="py-16 sm:py-20 bg-neutral-50/50 border-b border-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header matching Screenshot 3 */}
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight font-display">
            Explore the communities we serve
          </h2>
          <div className="w-16 h-0.5 bg-neutral-300 mx-auto mt-3" />
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Left Arrow Button */}
          <button
            id="top-areas-prev-btn"
            onClick={handlePrev}
            aria-label="Previous area"
            className="absolute -left-3 sm:-left-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white/90 hover:bg-white text-neutral-800 rounded-full shadow-lg border border-neutral-200 flex items-center justify-center transition-transform hover:scale-105 cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Cards Slider */}
          <div className="overflow-hidden px-1">
            <div
              className="grid grid-cols-1 md:grid-cols-2 gap-6 transition-transform duration-300 ease-out"
            >
              {TOP_AREAS.slice(startIndex, startIndex + visibleCount).map((area) => (
                <div
                  key={area.name}
                  onClick={() => onSelectArea(area.name)}
                  className="group relative h-80 sm:h-96 rounded-xs overflow-hidden cursor-pointer shadow-md border border-neutral-200"
                >
                  {/* Background Image */}
                  <img
                    src={area.image}
                    alt={`${area.name}, ${area.state}`}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    referrerPolicy="no-referrer"
                  />

                  {/* Dark Overlay matching Screenshot 3 */}
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300" />

                  {/* Centered Text matching Screenshot 3 */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                    <h3 className="text-3xl sm:text-4xl font-bold text-white tracking-normal font-display drop-shadow-md">
                      {area.name}
                    </h3>

                    {/* Thin white line divider */}
                    <div className="w-12 h-px bg-white/80 my-3" />

                    <span className="text-xs font-bold tracking-[0.25em] text-white/90 uppercase font-display">
                      {area.state}
                    </span>

                    <span className="mt-4 text-[11px] font-medium text-white/80 bg-black/40 px-3 py-1 rounded-xs backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      View Properties in {area.name} →
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow Button */}
          <button
            id="top-areas-next-btn"
            onClick={handleNext}
            aria-label="Next area"
            className="absolute -right-3 sm:-right-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white/90 hover:bg-white text-neutral-800 rounded-full shadow-lg border border-neutral-200 flex items-center justify-center transition-transform hover:scale-105 cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* All Service Areas Chips from JSON Data */}
        <div className="mt-12 pt-8 border-t border-neutral-200/80">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-neutral-400 font-display">
                Local markets
              </span>
              <h4 className="text-sm font-bold text-neutral-900 font-display">
                Chino Hills and nearby communities
              </h4>
            </div>
            <span className="text-xs text-neutral-500">
              Choose an area to explore the local market
            </span>
          </div>

          <div className="flex flex-wrap gap-2">
            {BUSINESS_DATA.service_areas.map((area, idx) => (
              <button
                key={idx}
                id={`service-area-chip-${idx}`}
                onClick={() => onSelectArea(area.replace(', CA', ''))}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-white hover:bg-brand-gold-pale hover:border-brand-gold border border-neutral-200 rounded-xs text-xs font-medium text-neutral-700 hover:text-brand-gold-deep transition-all cursor-pointer shadow-2xs"
              >
                <MapPin className="w-3 h-3 text-neutral-500" />
                {area}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
