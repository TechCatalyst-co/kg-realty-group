import React from 'react';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative isolate overflow-hidden bg-brand-ink text-white">
      <img
        src="/chino-hills-home-exterior.jpg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-brand-ink/90 via-brand-ink/70 to-brand-ink lg:bg-gradient-to-r lg:from-brand-ink/90 lg:via-brand-ink/55 lg:to-brand-ink" />
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-stretch lg:min-h-[510px] lg:grid-cols-[2fr_1fr]">
        <div className="flex flex-col justify-center px-5 py-12 sm:px-8 sm:py-12 lg:px-12 lg:py-14">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-brand-gold-light">
            KG Realty Group | Chino Hills, California
          </p>
          <h1 className="max-w-xl text-3xl font-extrabold leading-tight text-white font-display sm:text-4xl lg:text-5xl">
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

        <div className="flex min-h-[220px] items-center justify-center gap-5 px-5 pb-12 pt-4 sm:gap-6 lg:min-h-0 lg:flex-col lg:items-end lg:justify-center lg:gap-3 lg:px-12 lg:py-8">
          <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-full border-2 border-brand-gold/80 bg-transparent shadow-lg shadow-black/20 sm:h-28 sm:w-28 lg:h-[360px] lg:w-[280px] lg:rounded-none">
            <img
              src="/kevin_gonzalez.jpg"
              alt="Kevin Gonzalez, lead agent at KG Realty Group"
              className="h-full w-full object-cover object-top lg:object-[center_18%]"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="text-left lg:w-[280px] lg:pl-8">
            <p className="text-lg font-bold text-white font-display sm:text-xl lg:text-left">
              Kevin Gonzalez
            </p>
            <p className="mt-1 text-xs text-neutral-300">Lead agent | eXp Realty</p>
          </div>
        </div>
      </div>
    </section>
  );
};
