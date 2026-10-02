import React from 'react';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative isolate flex min-h-[440px] overflow-hidden bg-brand-ink text-white lg:min-h-[520px]">
      <img
        src="/chino-hills-home-exterior.jpg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-brand-ink/90 via-brand-ink/75 to-brand-ink lg:bg-gradient-to-r lg:from-brand-ink/95 lg:via-brand-ink/80 lg:to-brand-ink/95" />

      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 px-5 py-12 sm:px-8 sm:py-14 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,0.72fr)] lg:gap-12 lg:px-12 lg:py-16">
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-brand-gold-light">
            KG Realty Group | Chino Hills, California
          </p>
          <h1 className="max-w-xl font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
            Local real estate. Personal guidance.
          </h1>
          <p className="mt-5 max-w-lg text-sm leading-relaxed text-neutral-300 sm:text-base">
            Kevin Gonzalez helps buyers and sellers move forward with clear, personal guidance.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#featured-listings"
              className="inline-flex min-h-12 items-center justify-center bg-brand-gold px-6 py-3 text-sm font-bold uppercase tracking-wide text-brand-ink transition-colors hover:bg-brand-gold-light active:translate-y-px focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-gold-light"
            >
              View Listings
            </a>
            <a
              href="#contact"
              className="inline-flex min-h-12 items-center justify-center border border-neutral-500 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:border-brand-gold hover:bg-brand-charcoal active:translate-y-px focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-gold-light"
            >
              Contact
            </a>
          </div>
        </div>

        <figure className="mt-2 flex flex-col gap-4 lg:mt-0 lg:w-full lg:max-w-md lg:justify-self-end">
          <div className="flex items-center gap-4 sm:gap-5">
            <img
              src="/kevin_gonzalez.jpg"
              alt="Kevin Gonzalez, lead agent at KG Realty Group"
              width={240}
              height={240}
              referrerPolicy="no-referrer"
              className="h-24 w-24 shrink-0 rounded-full border-2 border-brand-gold/80 object-cover shadow-lg shadow-black/30 ring-1 ring-brand-gold/25 ring-offset-2 ring-offset-brand-ink/60 sm:h-[120px] sm:w-[120px] lg:h-36 lg:w-36"
            />
            <figcaption>
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-gold-light">
                Your agent
              </p>
              <p className="mt-1.5 font-display text-lg font-bold text-white">Kevin Gonzalez</p>
              <p className="mt-0.5 text-xs text-neutral-300">KG Realty Group / eXp Realty</p>
            </figcaption>
          </div>
          <ul
            aria-label="Real estate specialties"
            className="grid w-full grid-cols-1 gap-y-2 border-t border-white/15 pt-4 text-sm font-medium text-neutral-200 sm:grid-cols-2 sm:gap-x-4"
          >
            <li className="border-l border-brand-gold/70 pl-2.5">Buyer's Agent</li>
            <li className="border-l border-brand-gold/70 pl-2.5">Listing Agent</li>
            <li className="border-l border-brand-gold/70 pl-2.5">First Time Homebuyers</li>
            <li className="border-l border-brand-gold/70 pl-2.5">Investment Properties</li>
            <li className="border-l border-brand-gold/70 pl-2.5">Rentals</li>
            <li className="border-l border-brand-gold/70 pl-2.5">Luxury Properties</li>
          </ul>
        </figure>
      </div>
    </section>
  );
};
