import React from 'react';
import { BUSINESS_DATA } from '../data/realtyData';

export const TermsOfService: React.FC = () => (
  <main id="main-content" className="min-h-[60vh] bg-white px-5 py-14 text-neutral-900 sm:px-8 sm:py-20">
    <article className="mx-auto max-w-3xl">
      <h1 className="font-display text-3xl font-extrabold sm:text-4xl">Terms of Service</h1>
      <p className="mt-4 text-sm text-neutral-500">Effective October 6, 2026</p>
      <p className="mt-6 leading-relaxed text-neutral-700">
        These Terms of Service govern your access to and use of the KG Realty Group website. By using the site, you agree to these terms. If you do not agree, do not use the site. These terms do not replace any separate written agreement for real-estate representation or a transaction.
      </p>

      <h2 className="mt-9 font-display text-xl font-bold">Website use</h2>
      <p className="mt-3 leading-relaxed text-neutral-700">You may use this site for lawful, personal, and informational purposes. You agree not to:</p>
      <ul className="mt-3 list-disc space-y-2 pl-6 leading-relaxed text-neutral-700">
        <li>Use the site in violation of applicable law or another person's rights.</li>
        <li>Attempt to gain unauthorized access to the site, its systems, or connected accounts; probe or disrupt its security; or introduce malicious code.</li>
        <li>Scrape, harvest, copy, republish, or systematically collect listing data or other site content without permission, except as permitted by law or applicable MLS/IDX rules.</li>
        <li>Use site content to send unsolicited communications, mislead others, or impersonate a person or organization.</li>
      </ul>
      <p className="mt-3 leading-relaxed text-neutral-700">We may suspend or restrict access when reasonably necessary to protect the site, users, or third-party rights.</p>

      <h2 className="mt-9 font-display text-xl font-bold">Intellectual property</h2>
      <p className="mt-3 leading-relaxed text-neutral-700">
        Unless otherwise noted, the site design, text, photographs, graphics, logos, and other original materials are owned by or licensed to {BUSINESS_DATA.name} and are protected by intellectual-property laws. You may view and print reasonable portions for personal, non-commercial use, provided you retain applicable notices. No other copying, modification, distribution, public display, or commercial use is permitted without prior written permission. Trademarks and content belonging to third parties remain the property of their respective owners.
      </p>

      <h2 className="mt-9 font-display text-xl font-bold">MLS and IDX listing data</h2>
      <p className="mt-3 leading-relaxed text-neutral-700">
        All listing data is deemed reliable but is not guaranteed accurate and should be independently verified. Properties subject to prior sale, change, or withdrawal.
      </p>
      <p className="mt-3 leading-relaxed text-neutral-700">
        Listing content may be supplied by MLS/IDX providers, listing brokers, agents, or other third parties. Information may be incomplete, delayed, changed, or removed without notice. Measurements, property condition, features, taxes, schools, availability, and other material facts must be independently confirmed. Displaying a property does not necessarily mean it is listed by {BUSINESS_DATA.name} or its agents. Third-party listing services are governed by their own terms and policies.
      </p>

      <h2 className="mt-9 font-display text-xl font-bold">Automated estimates and market information</h2>
      <p className="mt-3 leading-relaxed text-neutral-700">
        Any automated property estimate, valuation, market trend, statistical summary, or similar output is provided for general informational purposes only. It may be generated from incomplete, delayed, estimated, or third-party data and is not an appraisal, inspection, offer, guarantee of value, or substitute for independent professional advice. Actual prices and market conditions may differ materially. Do not rely on an estimate or trend as the sole basis for a purchase, sale, financing, or other decision; consult qualified real-estate, appraisal, legal, tax, lending, and inspection professionals as appropriate.
      </p>

      <h2 className="mt-9 font-display text-xl font-bold">Disclaimer and limitation of liability</h2>
      <p className="mt-3 leading-relaxed text-neutral-700">
        To the extent permitted by law, the site and its content are provided “as is” and “as available,” without warranties of any kind, express or implied, including warranties of accuracy, availability, non-infringement, or fitness for a particular purpose. To the extent permitted by law, {BUSINESS_DATA.name}, its agents, and service providers will not be liable for indirect, incidental, special, consequential, exemplary, or punitive damages, or for loss arising from use of or reliance on the site, listing data, automated estimates, or market trends. Nothing in these terms excludes liability that cannot lawfully be excluded.
      </p>

      <h2 className="mt-9 font-display text-xl font-bold">Hold harmless</h2>
      <p className="mt-3 leading-relaxed text-neutral-700">
        To the extent permitted by law, you agree to be responsible for claims, liabilities, losses, and reasonable costs arising from your unlawful use of the site, your violation of these terms, or your infringement of another party's rights. This does not require you to indemnify {BUSINESS_DATA.name} or its agents for their own negligence, willful misconduct, or other liability that cannot legally be shifted to you.
      </p>

      <h2 className="mt-9 font-display text-xl font-bold">Copyright and DMCA takedown notices</h2>
      <p className="mt-3 leading-relaxed text-neutral-700">
        If you believe material on this site infringes a copyright you own or are authorized to represent, send a notice to the designated copyright-notice contact: <a className="font-semibold underline underline-offset-4" href={`mailto:${BUSINESS_DATA.contact.email}`}>{BUSINESS_DATA.contact.email}</a>. Include all of the following so the claim can be reviewed:
      </p>
      <ol className="mt-3 list-decimal space-y-2 pl-6 leading-relaxed text-neutral-700">
        <li>Your physical or electronic signature, or that of a person authorized to act for the rights holder.</li>
        <li>Identification of the copyrighted work claimed to have been infringed, or a representative list if multiple works are covered.</li>
        <li>Identification of the material claimed to be infringing and information reasonably sufficient to locate it on this site.</li>
        <li>Your name, mailing address, telephone number, and email address.</li>
        <li>A statement that you have a good-faith belief the use is not authorized by the rights holder, its agent, or the law.</li>
        <li>A statement, under penalty of perjury, that the information in your notice is accurate and that you are the rights holder or authorized to act for the rights holder.</li>
      </ol>
      <p className="mt-3 leading-relaxed text-neutral-700">
        A person whose material was removed or disabled may send a counter-notice to the same email address. It should identify the removed material and where it appeared before removal, provide the sender's contact details and signature, include the statements required by the DMCA that the removal resulted from mistake or misidentification and that the sender consents to the applicable federal court's jurisdiction and service of process, and otherwise comply with 17 U.S.C. § 512(g). We may forward notices to affected parties and may remove or restore material as permitted by law. Knowingly making material misrepresentations in a notice or counter-notice may result in legal consequences.
      </p>

      <h2 className="mt-9 font-display text-xl font-bold">Changes and contact</h2>
      <p className="mt-3 leading-relaxed text-neutral-700">
        We may update these terms by posting a revised version on this page and updating its effective date. Questions about these terms may be sent to <a className="font-semibold underline underline-offset-4" href={`mailto:${BUSINESS_DATA.contact.email}`}>{BUSINESS_DATA.contact.email}</a> or by phone at <a className="font-semibold underline underline-offset-4" href={`tel:${BUSINESS_DATA.contact.phone.replace(/[^0-9]/g, '')}`}>{BUSINESS_DATA.contact.phone}</a>.
      </p>
    </article>
  </main>
);