import React from 'react';
import { Star, Phone, Mail, Award, CheckCircle2, ArrowRight } from 'lucide-react';
import { BUSINESS_DATA } from '../data/realtyData';
import { TeamMember } from '../types';

interface TeamSectionProps {
  onContactMember: (member: TeamMember) => void;
}

export const TeamSection: React.FC<TeamSectionProps> = ({ onContactMember }) => {
  return (
    <section id="team" className="py-16 sm:py-24 bg-white border-b border-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-neutral-900 tracking-tight font-display">
            KG Realty Group Team
          </h2>
          <div className="w-16 h-0.5 bg-neutral-300 mx-auto mt-3" />
          <p className="max-w-xl mx-auto mt-4 text-xs sm:text-sm text-neutral-500 font-normal">
            Local guidance for buyers and sellers in Chino Hills and nearby communities.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {BUSINESS_DATA.team_members.map((member, idx) => (
            <div
              key={idx}
              className={`mx-auto w-full max-w-[360px] bg-white rounded-xs border transition-all duration-300 flex flex-col justify-between overflow-hidden group shadow-xs hover:shadow-md ${
                member.role === 'Lead'
                  ? 'border-brand-gold ring-1 ring-brand-gold-pale/60'
                  : 'border-neutral-200 hover:border-neutral-300'
              }`}
            >
              {/* Photo */}
              <div className="relative mx-auto aspect-square w-full max-w-[240px] overflow-hidden bg-neutral-100">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-full h-full object-contain object-center"
                  referrerPolicy="no-referrer"
                />

                {/* Role Pill */}
                <div className="absolute bottom-2.5 right-2.5">
                  <span
                    className={`text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-2xs ${
                      member.role === 'Lead'
                        ? 'bg-brand-ink text-brand-gold-light'
                        : 'bg-neutral-900/85 backdrop-blur-xs text-white'
                    }`}
                  >
                    {member.role || 'Realtor Associate'}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-bold text-neutral-900 font-display">
                    {member.name}
                  </h3>

                  {/* Rating if present in JSON */}
                  {member.rating && (
                    <div className="mt-1.5 flex items-center gap-1.5 text-xs">
                      <div className="flex text-amber-500">
                        <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      </div>
                      <span className="font-bold text-neutral-800">{member.rating.toFixed(1)}</span>
                      {member.reviews && (
                        <span className="text-[11px] text-neutral-400 font-medium">
                          ({member.reviews} reviews)
                        </span>
                      )}
                    </div>
                  )}

                  {/* Price range if present in JSON */}
                  {member.price_range && (
                    <div className="mt-2 text-[11px] text-neutral-600 bg-neutral-50 px-2 py-1 rounded-2xs border border-neutral-100 font-medium">
                      <span className="text-neutral-400 font-bold block text-[9px] uppercase tracking-wider">
                        Active Price Range
                      </span>
                      {member.price_range}
                    </div>
                  )}

                  {/* Specialties chips */}
                  {member.specialties && (
                    <div className="mt-3 flex flex-wrap gap-1">
                      {member.specialties.map((spec, sIdx) => (
                        <span
                          key={sIdx}
                          className="text-[9px] bg-neutral-100 text-neutral-600 px-1.5 py-0.5 rounded-2xs"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Contact Member Action */}
                <div className="mt-4 pt-3 border-t border-neutral-100">
                  <button
                    id={`contact-member-${idx}`}
                    onClick={() => onContactMember(member)}
                    className="w-full bg-neutral-900 hover:bg-brand-ink text-brand-gold-light py-2 text-[11px] font-bold uppercase tracking-wider rounded-xs transition-colors cursor-pointer flex items-center justify-center gap-1"
                  >
                    <span>Connect</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
