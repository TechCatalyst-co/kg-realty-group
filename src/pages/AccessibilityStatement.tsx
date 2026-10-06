import React from 'react';
import { BUSINESS_DATA } from '../data/realtyData';

export const AccessibilityStatement: React.FC = () => (
  <main id="main-content" className="min-h-[60vh] bg-white px-5 py-16 text-neutral-900 sm:px-8 sm:py-20">
    <article className="mx-auto max-w-3xl">
      <a href="/" className="mb-8 inline-flex min-h-11 items-center text-sm font-semibold text-neutral-700 underline underline-offset-4 hover:text-neutral-950">
        Return to KG Realty Group
      </a>
      <h1 className="font-display text-3xl font-extrabold sm:text-4xl">Accessibility Statement</h1>
      <p className="mt-5 text-base leading-relaxed text-neutral-700">
        KG Realty Group is committed to making its website accessible to people with disabilities. We strive to provide an inclusive experience and to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA. Accessibility is an ongoing effort, and we continue to review and improve the site as content and technology change.
      </p>

      <h2 className="mt-10 font-display text-xl font-bold">Assistive technology</h2>
      <p className="mt-3 leading-relaxed text-neutral-700">
        The site is designed to work with current versions of common browsers and assistive technologies, including screen readers such as NVDA and JAWS on Windows and VoiceOver on Apple devices, as well as keyboard-only navigation and browser zoom. Third-party content, including the external MLS listings feed, may have separate accessibility features and limitations.
      </p>

      <h2 className="mt-10 font-display text-xl font-bold">Report an accessibility barrier</h2>
      <p className="mt-3 leading-relaxed text-neutral-700">
        If you encounter a barrier or need information in an alternative format, contact KG Realty Group. Please include the page address, what you were trying to do, and the assistive technology or browser you were using so we can investigate.
      </p>
      <address className="mt-4 not-italic leading-7 text-neutral-800">
        <a className="font-semibold underline underline-offset-4" href={`tel:${BUSINESS_DATA.contact.phone.replace(/[^0-9]/g, '')}`}>{BUSINESS_DATA.contact.phone}</a>
        <br />
        <a className="font-semibold underline underline-offset-4" href={`mailto:${BUSINESS_DATA.contact.email}`}>{BUSINESS_DATA.contact.email}</a>
      </address>
    </article>
  </main>
);