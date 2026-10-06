import React from 'react';
import { BUSINESS_DATA } from '../data/realtyData';

export const PrivacyPolicy: React.FC = () => (
  <main id="main-content" className="bg-white px-5 py-14 text-neutral-900 sm:px-8 sm:py-20">
    <article className="mx-auto max-w-4xl">
      <p className="text-xs font-bold uppercase tracking-wider text-neutral-500">California residents</p>
      <h1 className="mt-2 font-display text-3xl font-extrabold sm:text-4xl">California Privacy Rights Policy</h1>
      <p className="mt-4 text-sm text-neutral-500">Effective October 6, 2026</p>
      <p className="mt-6 text-base leading-relaxed text-neutral-700">
        This notice describes how KG Realty Group may collect, use, disclose, and retain personal information and explains California rights under the California Consumer Privacy Act, as amended by the California Privacy Rights Act (CCPA/CPRA). The public website code currently has no server-side lead submission or request-management service. Hosting, office systems, and third-party services used outside this codebase may have additional practices; this notice should be reviewed against those practices before publication.
      </p>

      <h2 className="mt-10 font-display text-xl font-bold">Information that may be collected</h2>
      <p className="mt-3 leading-relaxed text-neutral-700">
        Depending on how you interact with KG Realty Group and the services enabled for the site, information may include:
      </p>
      <ul className="mt-3 list-disc space-y-2 pl-6 leading-relaxed text-neutral-700">
        <li><strong>Identifiers and contact details:</strong> name, email address, telephone number, and property or mailing address that you choose to provide in an inquiry or valuation request.</li>
        <li><strong>Customer-record information:</strong> the contents of messages, preferred property or transaction interests, showing requests, and related correspondence.</li>
        <li><strong>Internet or device activity:</strong> IP address, browser and device information, referring page, and interactions with pages or search features, which may be recorded by hosting/security systems or third-party content providers.</li>
      </ul>
      <p className="mt-3 leading-relaxed text-neutral-700">
        The site does not intentionally request sensitive personal information. Avoid including sensitive information in free-text messages. The external CRMLS listings frame is operated by a third party and may collect information under that provider's own notice and practices.
      </p>

      <h2 className="mt-10 font-display text-xl font-bold">Sources and purposes</h2>
      <p className="mt-3 leading-relaxed text-neutral-700">
        Information may come directly from you, from your browser or device, from hosting and security providers, or from third-party listing content. It may be used to respond to real-estate inquiries, coordinate valuations or showings, provide property alerts or marketing communications where you request them or the law permits, maintain and secure the website, and comply with legal obligations.
      </p>

      <h2 className="mt-10 font-display text-xl font-bold">Cookies and tracking technologies</h2>
      <p className="mt-3 leading-relaxed text-neutral-700">
        We respect your privacy and currently operate as a cookieless website. We do not set, store, or utilize non-essential tracking cookies, advertising pixels, or third-party behavioral analytics on this site.
      </p>
      <p className="mt-3 leading-relaxed text-neutral-700">
        If you actively select the browser opt-out on our privacy request page, we store that preference in your browser's local storage so the site can remember it. This is a functional preference, not a tracking technology, and does not enable advertising scripts. Our pages may also include third-party content, such as the external CRMLS listings frame. Third-party providers operate independently and may process technical information under their own privacy notices when their content is loaded.
      </p>

      <h2 className="mt-10 font-display text-xl font-bold">Disclosure, sale, and sharing</h2>
      <p className="mt-3 leading-relaxed text-neutral-700">
        KG Realty Group may disclose information to service providers that support hosting, security, communications, real-estate listings, or customer follow-up, subject to applicable contracts and law. This codebase does not identify or configure a sale of personal information or sharing for cross-context behavioral advertising. The third-party MLS frame is not controlled by this website. California residents may still submit an opt-out request using the link below.
      </p>

      <h2 className="mt-10 font-display text-xl font-bold">California privacy rights</h2>
      <ul className="mt-3 list-disc space-y-2 pl-6 leading-relaxed text-neutral-700">
        <li><strong>Right to know and access:</strong> request the categories and specific pieces of personal information collected, the sources, purposes, and categories of recipients.</li>
        <li><strong>Right to delete:</strong> request deletion of personal information, subject to legal exceptions.</li>
        <li><strong>Right to correct:</strong> request correction of inaccurate personal information.</li>
        <li><strong>Right to opt out of sale or sharing:</strong> direct a business not to sell or share personal information as those terms are defined by California law.</li>
        <li><strong>Right to limit sensitive personal information:</strong> applies where a business uses or discloses sensitive information beyond permitted purposes. This site does not intentionally request it.</li>
        <li><strong>Right to non-discrimination:</strong> exercising a privacy right will not result in unlawful discrimination.</li>
      </ul>

      <h2 className="mt-10 font-display text-xl font-bold">How to make a request</h2>
      <p className="mt-3 leading-relaxed text-neutral-700">
        Submit a request through the <a href="/do-not-sell" className="font-semibold underline underline-offset-4">privacy request page</a>, email <a href={`mailto:${BUSINESS_DATA.contact.email}`} className="font-semibold underline underline-offset-4">{BUSINESS_DATA.contact.email}</a>, or call <a href={`tel:${BUSINESS_DATA.contact.phone.replace(/[^0-9]/g, '')}`} className="font-semibold underline underline-offset-4">{BUSINESS_DATA.contact.phone}</a>. Mail requests to {BUSINESS_DATA.name}, {BUSINESS_DATA.contact.address.street}, {BUSINESS_DATA.contact.address.city}, {BUSINESS_DATA.contact.address.state} {BUSINESS_DATA.contact.address.zip}. Identify the right you wish to exercise and provide enough information to allow a response. We may need to verify your identity; an authorized agent may submit a request subject to verification and proof of authorization. We aim to respond within the time required by law.
      </p>

      <h2 className="mt-10 font-display text-xl font-bold">Request metrics</h2>
      <p className="mt-3 leading-relaxed text-neutral-700">
        This website has no server-side request intake or central privacy-request log, so verified aggregate request counts and response times are not available from this codebase. KG Realty Group should maintain and publish applicable annual metrics if required by law and update this section when verified records are available.
      </p>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full border-collapse text-left text-sm">
          <caption className="sr-only">Current availability of CCPA/CPRA request metrics</caption>
          <thead>
            <tr className="border-b border-neutral-300">
              <th scope="col" className="py-2 pr-4 font-bold">Metric</th>
              <th scope="col" className="py-2 font-bold">Current reporting status</th>
            </tr>
          </thead>
          <tbody className="text-neutral-700">
            {['Requests received', 'Requests fulfilled or denied', 'Average response time'].map((metric) => (
              <tr key={metric} className="border-b border-neutral-200">
                <th scope="row" className="py-2 pr-4 font-medium">{metric}</th>
                <td className="py-2">No verified aggregate records available from this website</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="mt-10 font-display text-xl font-bold">Retention and updates</h2>
      <p className="mt-3 leading-relaxed text-neutral-700">
        Information should be retained only as long as reasonably needed for the disclosed business or legal purpose. The period may vary by record type and applicable obligations. This policy may be updated when practices change; the effective date above will be revised when that happens.
      </p>
    </article>
  </main>
);