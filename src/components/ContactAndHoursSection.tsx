import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, Shield, Calendar, UserCheck } from 'lucide-react';
import { BUSINESS_DATA } from '../data/realtyData';
import { submitLeadForm } from '../lib/formspree';

export const ContactAndHoursSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: 'Buying a Home',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [invalidFields, setInvalidFields] = useState<Record<string, boolean>>({});

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitError('');

    try {
      await submitLeadForm('Website contact form', formData);
      setSubmitted(true);
    } catch {
      setSubmitError('Your message could not be sent. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const daysOrder = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  return (
    <section id="contact" className="py-16 sm:py-24 bg-white border-b border-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-neutral-900 tracking-tight font-display mt-1">
            Contact
          </h2>
          <div className="w-16 h-0.5 bg-neutral-300 mx-auto mt-3" />
          <p className="max-w-xl mx-auto mt-4 text-xs sm:text-sm text-neutral-500 font-normal">
            Ready to buy, sell, or discuss local market trends? Reach out to the KG Realty Group team today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Left Column: Office Details & Business Hours */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            {/* Contact Info Card */}
            <div className="bg-neutral-50 p-6 sm:p-8 rounded-xs border border-neutral-200">
              <h3 className="text-base font-bold text-neutral-900 font-display uppercase tracking-wider mb-6">
                Office Information
              </h3>

              <div className="space-y-5 text-sm">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xs bg-brand-gold-pale/70 text-brand-gold-deep flex items-center justify-center shrink-0">
                    <MapPin aria-hidden="true" className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-neutral-400 uppercase tracking-wider font-display">
                      Location
                    </div>
                    <div className="font-semibold text-neutral-900">
                      {BUSINESS_DATA.name}
                    </div>
                    <div className="text-neutral-600">
                      {BUSINESS_DATA.contact.address.street}
                    </div>
                    <div className="text-neutral-600">
                      {BUSINESS_DATA.contact.address.city}, {BUSINESS_DATA.contact.address.state} {BUSINESS_DATA.contact.address.zip}
                    </div>
                    <div className="text-[11px] font-bold text-brand-gold-deep mt-0.5 uppercase tracking-wider">
                      {BUSINESS_DATA.brokerage}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xs bg-brand-gold-pale/70 text-brand-gold-deep flex items-center justify-center shrink-0">
                    <Phone aria-hidden="true" className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-neutral-400 uppercase tracking-wider font-display">
                      Phone Call / Text
                    </div>
                    <a
                      href={`tel:${BUSINESS_DATA.contact.phone.replace(/[^0-9]/g, '')}`}
                      className="font-bold text-neutral-900 hover:text-brand-gold-deep transition-colors text-base block"
                    >
                      {BUSINESS_DATA.contact.phone}
                    </a>
                    <div className="mt-2 inline-flex items-center rounded-full border border-brand-gold/50 bg-brand-gold-pale px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-brand-gold-deep font-display align-middle">
                      Hablamos Español
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xs bg-brand-gold-pale/70 text-brand-gold-deep flex items-center justify-center shrink-0">
                    <Mail aria-hidden="true" className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-neutral-400 uppercase tracking-wider font-display">
                      Email
                    </div>
                    <a
                      href={`mailto:${BUSINESS_DATA.contact.email}`}
                      className="font-semibold text-neutral-900 hover:text-brand-gold-deep transition-colors"
                    >
                      {BUSINESS_DATA.contact.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Operating Hours Table from JSON */}
            <div className="bg-neutral-900 text-white p-6 sm:p-8 rounded-xs shadow-md">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-neutral-800">
                <div className="flex items-center gap-2">
                  <Clock aria-hidden="true" className="w-4 h-4 text-brand-gold-deep" />
                  <h3 className="text-sm font-bold tracking-wider uppercase font-display">
                    Business Hours
                  </h3>
                </div>
                <span className="text-[11px] font-bold text-emerald-400 bg-emerald-950/80 border border-emerald-800 px-2 py-0.5 rounded-2xs">
                  Mon-Fri Open
                </span>
              </div>

              <div className="space-y-2 text-xs">
                {daysOrder.map((day) => {
                  const hoursText = BUSINESS_DATA.hours[day] || 'Closed';
                  const isClosed = hoursText.toLowerCase().includes('closed');
                  return (
                    <div
                      key={day}
                      className="flex items-center justify-between py-1 border-b border-neutral-800/60"
                    >
                      <span className="font-semibold text-neutral-300 font-display">
                        {day}
                      </span>
                      <span
                        className={
                          isClosed
                            ? 'text-neutral-500 italic'
                            : 'font-mono text-neutral-100 font-medium'
                        }
                      >
                        {hoursText}
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className="mt-4 pt-3 text-[11px] text-neutral-400 flex items-center gap-1.5">
                <Calendar aria-hidden="true" className="w-3.5 h-3.5 text-neutral-400" />
                <span>Appointments and private property showings available 7 days a week upon request.</span>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-xs border border-neutral-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3.5 mb-3">
                <img
                  src="/kevin_gonzalez.jpg"
                  alt={BUSINESS_DATA.lead}
                  className="w-12 h-12 rounded-full object-cover border-2 border-brand-gold shadow-xs shrink-0"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h3 className="text-xl font-bold text-neutral-900 font-display">
                    Send a Message to Kevin Gonzalez
                  </h3>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-neutral-500 mb-8">
                Fill out the form below and KG Realty Group will respond within 24-48 business hours.
              </p>

              {submitted ? (
                <div className="p-8 text-center bg-emerald-50 border border-emerald-200 rounded-xs animate-in fade-in duration-300">
                  <CheckCircle2 aria-hidden="true" className="w-12 h-12 text-emerald-600 mx-auto mb-3" />
                  <h4 className="text-lg font-bold text-neutral-900 font-display">
                    Thank you! Your message has been received.
                  </h4>
                  <p className="text-xs sm:text-sm text-neutral-600 mt-2 max-w-md mx-auto">
                    An associate will contact you shortly at {formData.email || 'your email'}.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', phone: '', interest: 'Buying a Home', message: '' });
                    }}
                    className="mt-6 text-xs font-bold text-brand-gold-deep hover:text-brand-ink underline uppercase tracking-wider cursor-pointer"
                  >
                    Send another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-bold uppercase tracking-wider text-neutral-700 font-display mb-1.5">
                        Full Name *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        aria-required="true"
                        aria-invalid={Boolean(invalidFields.name)}
                        aria-describedby="contact-name-error"
                        onInvalid={() => setInvalidFields((fields) => ({ ...fields, name: true }))}
                        value={formData.name}
                        onChange={(e) => {
                          setFormData({ ...formData, name: e.target.value });
                          setInvalidFields((fields) => ({ ...fields, name: false }));
                        }}
                        placeholder="e.g. John Doe"
                        className="w-full px-3.5 py-2.5 text-sm bg-neutral-50 border border-neutral-300 rounded-xs focus:bg-white focus:border-brand-gold-deep"
                      />
                      <p id="contact-name-error" role={invalidFields.name ? 'alert' : undefined} className={invalidFields.name ? 'mt-1 text-xs text-red-700' : 'sr-only'}>Enter your full name.</p>
                    </div>

                    <div>
                      <label htmlFor="contact-phone" className="block text-xs font-bold uppercase tracking-wider text-neutral-700 font-display mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        required
                        aria-required="true"
                        aria-invalid={Boolean(invalidFields.phone)}
                        aria-describedby="contact-phone-error"
                        onInvalid={() => setInvalidFields((fields) => ({ ...fields, phone: true }))}
                        value={formData.phone}
                        onChange={(e) => {
                          setFormData({ ...formData, phone: e.target.value });
                          setInvalidFields((fields) => ({ ...fields, phone: false }));
                        }}
                        placeholder="(909) 000-0000"
                        className="w-full px-3.5 py-2.5 text-sm bg-neutral-50 border border-neutral-300 rounded-xs focus:bg-white focus:border-brand-gold-deep"
                      />
                      <p id="contact-phone-error" role={invalidFields.phone ? 'alert' : undefined} className={invalidFields.phone ? 'mt-1 text-xs text-red-700' : 'sr-only'}>Enter your phone number.</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-bold uppercase tracking-wider text-neutral-700 font-display mb-1.5">
                        Email Address *
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        aria-required="true"
                        aria-invalid={Boolean(invalidFields.email)}
                        aria-describedby="contact-email-error"
                        onInvalid={() => setInvalidFields((fields) => ({ ...fields, email: true }))}
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          setInvalidFields((fields) => ({ ...fields, email: false }));
                        }}
                        placeholder="john@example.com"
                        className="w-full px-3.5 py-2.5 text-sm bg-neutral-50 border border-neutral-300 rounded-xs focus:bg-white focus:border-brand-gold-deep"
                      />
                      <p id="contact-email-error" role={invalidFields.email ? 'alert' : undefined} className={invalidFields.email ? 'mt-1 text-xs text-red-700' : 'sr-only'}>Enter a valid email address.</p>
                    </div>

                    <div>
                      <label htmlFor="contact-interest" className="block text-xs font-bold uppercase tracking-wider text-neutral-700 font-display mb-1.5">
                        I am interested in:
                      </label>
                      <select
                        id="contact-interest"
                        value={formData.interest}
                        onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm bg-neutral-50 border border-neutral-300 rounded-xs focus:bg-white focus:border-brand-gold-deep"
                      >
                        <option value="Buying a Home">Buying a Home</option>
                        <option value="Selling a Home">Selling a Home</option>
                        <option value="First Time Homebuyer">First Time Homebuyer</option>
                        <option value="Home Valuation">Home Valuation</option>
                        <option value="Investment Properties">Investment Properties</option>
                        <option value="Rentals & Leases">Rentals & Leases</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-bold uppercase tracking-wider text-neutral-700 font-display mb-1.5">
                      How Can We Help? *
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      required
                      aria-required="true"
                      aria-invalid={Boolean(invalidFields.message)}
                      aria-describedby="contact-message-error"
                      onInvalid={() => setInvalidFields((fields) => ({ ...fields, message: true }))}
                      value={formData.message}
                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value });
                        setInvalidFields((fields) => ({ ...fields, message: false }));
                      }}
                      placeholder="Tell us about the property, your ideal timeframe, preferred neighborhoods, or price range..."
                      className="w-full px-3.5 py-2.5 text-sm bg-neutral-50 border border-neutral-300 rounded-xs focus:bg-white focus:border-brand-gold-deep"
                    />
                    <p id="contact-message-error" role={invalidFields.message ? 'alert' : undefined} className={invalidFields.message ? 'mt-1 text-xs text-red-700' : 'sr-only'}>Tell us how we can help.</p>
                  </div>

                  <div className="pt-2">
                    <button
                      id="contact-submit-btn"
                      type="submit"
                      disabled={submitting}
                      className="w-full sm:w-auto bg-brand-ink hover:bg-brand-charcoal text-brand-gold-light px-8 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider rounded-xs transition-colors shadow-xs active:translate-y-px cursor-pointer flex items-center justify-center gap-2"
                    >
                      <span>{submitting ? 'Sending...' : 'Send Message'}</span>
                      <Send aria-hidden="true" className="w-4 h-4" />
                    </button>
                    {submitError && <p role="alert" className="mt-3 text-sm font-medium text-red-700">{submitError}</p>}
                    <p className="mt-3 max-w-xl text-[11px] leading-relaxed text-neutral-500">
                      By submitting this form, you agree to our <a href="/privacy-policy" className="underline underline-offset-2">Privacy Policy</a>. California residents can review their rights under CCPA/CPRA <a href="/privacy-policy" className="underline underline-offset-2">here</a>.
                    </p>
                  </div>
                </form>
              )}
            </div>

            <div className="mt-8 pt-6 border-t border-neutral-100 text-[11px] text-neutral-500 flex items-center gap-2">
              <Shield aria-hidden="true" className="w-4 h-4 text-neutral-400 shrink-0" />
              <span>Your contact information is strictly confidential and will never be shared or sold.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
