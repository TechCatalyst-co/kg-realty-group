import React from 'react';
import { X, Star, CheckCircle, ShieldCheck } from 'lucide-react';
import { TESTIMONIALS, BUSINESS_DATA } from '../data/realtyData';
import { useDialogAccessibility } from '../hooks/useDialogAccessibility';

interface TestimonialsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TestimonialsModal: React.FC<TestimonialsModalProps> = ({ isOpen, onClose }) => {
  const dialogRef = useDialogAccessibility<HTMLDivElement>(isOpen, onClose);
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div ref={dialogRef} role="dialog" aria-modal="true" aria-labelledby="testimonials-dialog-title" tabIndex={-1} className="bg-white w-full max-w-3xl rounded-xs overflow-hidden shadow-2xl relative max-h-[88vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-neutral-900 text-white border-b border-neutral-800">
          <div>
            <span className="text-[10px] uppercase tracking-widest text-brand-gold-light font-bold font-display">
              Verified Client Stories
            </span>
            <h3 id="testimonials-dialog-title" className="text-lg font-bold font-display">
              {BUSINESS_DATA.rating.overall.toFixed(1)} ★ Rating across {BUSINESS_DATA.rating.total_reviews} Reviews
            </h3>
          </div>
          <button
            onClick={onClose}
            type="button"
            aria-label="Close testimonials dialog"
            className="p-1 rounded-full text-neutral-400 hover:text-white transition-colors cursor-pointer"
          >
            <X aria-hidden="true" className="w-5 h-5" />
          </button>
        </div>

        {/* Reviews List */}
        <div className="overflow-y-auto p-6 space-y-6">
          {TESTIMONIALS.map((review) => (
            <div
              key={review.id}
              className="p-5 rounded-xs bg-neutral-50 border border-neutral-200 space-y-3"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} aria-hidden="true" className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="text-xs font-bold text-neutral-800 ml-1">
                    5.0 Star Experience
                  </span>
                </div>
                <span className="text-[11px] text-neutral-400 font-medium">
                  {review.date}
                </span>
              </div>

              <h4 className="text-base font-bold text-neutral-900 font-display">
                {review.headline}
              </h4>

              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                {review.quote}
              </p>

              <div className="pt-2 border-t border-neutral-200/80 flex items-center justify-between text-[11px] text-neutral-500">
                <span className="font-bold uppercase tracking-wider text-neutral-800 font-display">
                  {review.author}
                </span>
                <span className="text-brand-gold-deep font-medium">
                  {review.type}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
