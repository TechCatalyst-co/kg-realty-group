import React, { useState } from 'react';
import { X, Phone, Mail, MapPin, CheckCircle2, Send, Clock } from 'lucide-react';
import { BUSINESS_DATA } from '../data/realtyData';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledTopic?: string;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  prefilledTopic
}) => {
  if (!isOpen) return null;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState(prefilledTopic ? `Regarding: ${prefilledTopic}` : '');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-lg rounded-xs overflow-hidden shadow-2xl relative">
        <div className="flex items-center justify-between px-6 py-4 bg-neutral-900 text-white">
          <div className="flex items-center gap-3">
            <img
              src="/kevin_gonzalez.jpg"
              alt={BUSINESS_DATA.lead}
              className="w-11 h-11 rounded-full object-cover border-2 border-brand-gold shrink-0"
              referrerPolicy="no-referrer"
            />
            <div>
              <span className="text-[10px] uppercase tracking-widest text-brand-gold-light font-bold font-display">
                KG Realty Group • eXp Realty
              </span>
              <h3 className="text-lg font-bold font-display">
                Let's Talk Real Estate
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full text-neutral-400 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6">
          {sent ? (
            <div className="py-8 text-center space-y-3">
              <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
              <h4 className="text-lg font-bold text-neutral-900 font-display">
                Thank you, {name || 'Client'}!
              </h4>
              <p className="text-sm text-neutral-600 max-w-xs mx-auto">
                Kevin Gonzalez has received your inquiry and will call or email you directly.
              </p>
              <button
                onClick={onClose}
                className="mt-4 bg-neutral-900 hover:bg-brand-ink text-brand-gold-light px-6 py-2.5 text-xs font-bold uppercase tracking-wider rounded-xs transition-colors cursor-pointer"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 font-display mb-1">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Sarah Jenkins"
                  className="w-full px-3.5 py-2 text-sm bg-neutral-50 border border-neutral-300 rounded-xs focus:bg-white focus:outline-none focus:border-brand-gold-deep"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 font-display mb-1">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="(909) 268-4206"
                    className="w-full px-3.5 py-2 text-sm bg-neutral-50 border border-neutral-300 rounded-xs focus:bg-white focus:outline-none focus:border-brand-gold-deep"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 font-display mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="sarah@example.com"
                    className="w-full px-3.5 py-2 text-sm bg-neutral-50 border border-neutral-300 rounded-xs focus:bg-white focus:outline-none focus:border-brand-gold-deep"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 font-display mb-1">
                  Message / Questions
                </label>
                <textarea
                  rows={3}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us what you are looking for..."
                  className="w-full px-3.5 py-2 text-sm bg-neutral-50 border border-neutral-300 rounded-xs focus:bg-white focus:outline-none focus:border-brand-gold-deep"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-brand-ink hover:bg-brand-charcoal text-brand-gold-light py-3 text-xs font-bold uppercase tracking-wider rounded-xs transition-colors cursor-pointer"
                >
                  Submit & Connect With Kevin
                </button>
              </div>

              <div className="pt-3 border-t border-neutral-100 flex items-center justify-between text-[11px] text-neutral-500">
                <span className="flex items-center gap-1">
                  <Phone className="w-3 h-3 text-brand-gold-deep" />
                  {BUSINESS_DATA.contact.phone}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3 text-neutral-400" />
                  Mon-Fri 10am-6pm
                </span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
