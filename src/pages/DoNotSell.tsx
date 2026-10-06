import React, { FormEvent, useState } from 'react';
import { BUSINESS_DATA } from '../data/realtyData';
import { disableAdvertisingOnThisDevice, readConsent } from '../privacy/consent';

export const DoNotSell: React.FC = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [requestType, setRequestType] = useState('Opt out of sale or sharing');
  const [draftOpened, setDraftOpened] = useState(false);
  const [deviceOptOut, setDeviceOptOut] = useState(() => readConsent()?.saleShareOptOut ?? false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    disableAdvertisingOnThisDevice();
    setDeviceOptOut(true);

    const subject = encodeURIComponent(`California privacy request: ${requestType}`);
    const body = encodeURIComponent(
      `Request: ${requestType}\nName: ${name || 'Not provided'}\nEmail: ${email}\n\nPlease contact me regarding this California privacy request.`
    );
    window.location.href = `mailto:${BUSINESS_DATA.contact.email}?subject=${subject}&body=${body}`;
    setDraftOpened(true);
  };

  return (
    <main id="main-content" className="min-h-[60vh] bg-white px-5 py-14 text-neutral-900 sm:px-8 sm:py-20">
      <article className="mx-auto max-w-3xl">
        <p className="text-xs font-bold uppercase tracking-wider text-neutral-500">California residents</p>
        <h1 className="mt-2 font-display text-3xl font-extrabold sm:text-4xl">Do Not Sell or Share My Personal Information</h1>
        <p className="mt-5 leading-relaxed text-neutral-700">
          Use this page to request that KG Realty Group not sell or share your personal information as defined by California law, or to submit another CCPA/CPRA request. This site does not currently configure advertising vendor IDs, and the external MLS frame is operated by a third party. A request by email is needed for the business to review rights beyond optional advertising preferences stored in this browser.
        </p>

        <section className="mt-8 border-y border-neutral-200 py-5" aria-labelledby="device-opt-out-title">
          <h2 id="device-opt-out-title" className="font-display text-lg font-bold">Disable optional advertising on this browser</h2>
          <p className="mt-2 text-sm leading-relaxed text-neutral-600">
            This local preference blocks optional advertising scripts and is not a substitute for sending the business request below.
          </p>
          {deviceOptOut ? (
            <p role="status" className="mt-3 text-sm font-semibold text-emerald-800">Optional advertising is disabled on this browser.</p>
          ) : (
            <button type="button" onClick={() => { disableAdvertisingOnThisDevice(); setDeviceOptOut(true); }} className="mt-3 min-h-11 border border-neutral-400 px-4 py-2 text-sm font-semibold hover:bg-neutral-100">
              Opt out on this browser
            </button>
          )}
        </section>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5 border-b border-neutral-200 py-6">
          <div>
            <label htmlFor="privacy-request-type" className="mb-1.5 block text-sm font-semibold">Request type</label>
            <select id="privacy-request-type" value={requestType} onChange={(event) => setRequestType(event.target.value)} className="min-h-11 w-full border border-neutral-300 bg-white px-3 py-2 text-sm">
              <option>Opt out of sale or sharing</option>
              <option>Request access or to know</option>
              <option>Request deletion</option>
              <option>Request correction</option>
            </select>
          </div>
          <div>
            <label htmlFor="privacy-request-name" className="mb-1.5 block text-sm font-semibold">Name (optional)</label>
            <input id="privacy-request-name" type="text" autoComplete="name" value={name} onChange={(event) => setName(event.target.value)} className="min-h-11 w-full border border-neutral-300 px-3 py-2 text-sm" />
          </div>
          <div>
            <label htmlFor="privacy-request-email" className="mb-1.5 block text-sm font-semibold">Email address</label>
            <input id="privacy-request-email" type="email" autoComplete="email" required aria-required="true" value={email} onChange={(event) => setEmail(event.target.value)} className="min-h-11 w-full border border-neutral-300 px-3 py-2 text-sm" />
          </div>
          <p className="text-sm leading-relaxed text-neutral-600">
            Submitting prepares an email addressed to {BUSINESS_DATA.contact.email}; it does not send your request automatically. Review and send the email in your mail application. Optional advertising preferences are disabled on this browser when you submit.
          </p>
          <button type="submit" className="min-h-11 bg-neutral-900 px-5 py-3 text-sm font-bold text-white hover:bg-neutral-700">Prepare privacy request</button>
          {draftOpened && (
            <p role="status" className="text-sm font-medium text-emerald-800">
              Your email application should open. Send the prepared message to submit your request. Advertising opt-out is {deviceOptOut ? 'active' : 'not active'} on this browser.
            </p>
          )}
        </form>

        <p className="mt-5 text-sm leading-relaxed text-neutral-600">
          You may also contact us directly at <a className="font-semibold underline underline-offset-4" href={`mailto:${BUSINESS_DATA.contact.email}`}>{BUSINESS_DATA.contact.email}</a> or <a className="font-semibold underline underline-offset-4" href={`tel:${BUSINESS_DATA.contact.phone.replace(/[^0-9]/g, '')}`}>{BUSINESS_DATA.contact.phone}</a>. See the <a className="font-semibold underline underline-offset-4" href="/privacy-policy">California Privacy Rights Policy</a> for verification and request details.
        </p>
      </article>
    </main>
  );
};