import React from 'react';
import { Star } from 'lucide-react';
import { TESTIMONIALS, BUSINESS_DATA } from '../data/realtyData';

const ZILLOW_REVIEWS_URL = 'https://www.zillow.com/profile/kevin2707#reviews';

export const TestimonialsSection: React.FC = () => {
  const featuredTestimonials = TESTIMONIALS.slice(0, 3);

  return (
    <section id="testimonials" className="py-20 sm:py-28 bg-brand-ink border-b border-neutral-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 rounded-full border border-brand-gold/60 bg-[#1b1b1b] px-4 py-2 mb-5 shadow-[0_0_0_1px_rgba(199,164,74,0.18)]">
            <div className="flex items-center justify-center gap-1 text-brand-gold-light">
              {[...Array(5)].map((_, i) => (
                <Star key={i} aria-hidden="true" className="w-3.5 h-3.5 fill-brand-gold-light text-brand-gold-light" />
              ))}
            </div>
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-gold-light font-display">
              Zillow
            </span>
          </div>
          <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-neutral-300 font-display">
            Ratings • {BUSINESS_DATA.rating.total_reviews} Reviews
          </p>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
            What clients are saying on Zillow
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredTestimonials.map((testimonial) => (
            <article
              key={testimonial.id}
              className="flex h-full flex-col rounded-xs border border-neutral-800 bg-neutral-900/90 p-6 shadow-sm"
            >
              <div className="mb-5 flex items-center justify-between gap-3">
                <div className="flex items-center gap-1 text-brand-gold-light">
                  {[...Array(testimonial.rating)].map((_, index) => (
                    <Star key={`${testimonial.id}-star-${index}`} aria-hidden="true" className="w-4 h-4 fill-brand-gold-light text-brand-gold-light" />
                  ))}
                </div>
              </div>

              <h3 className="text-xl font-bold text-white font-display leading-tight">
                {testimonial.headline}
              </h3>

              <p className="mt-4 text-sm text-neutral-300 leading-relaxed flex-1">
                {testimonial.featuredQuote || testimonial.quote}
              </p>

              <div className="mt-6 border-t border-neutral-800 pt-5">
                <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-neutral-200 font-display">
                  {testimonial.author}
                </div>
                <div className="mt-1 text-xs text-neutral-400">
                  {testimonial.location} • {testimonial.type}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href={ZILLOW_REVIEWS_URL}
            target="_blank"
            rel="noreferrer"
            id="view-all-testimonials-btn"
            className="inline-flex items-center justify-center bg-brand-gold-light hover:bg-brand-gold text-brand-ink px-8 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider rounded-xs transition-colors shadow-xs active:translate-y-px cursor-pointer"
          >
            View all Zillow reviews
          </a>
        </div>
      </div>
    </section>
  );
};
