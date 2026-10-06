import React from 'react';
import { Star, Award, TrendingUp, DollarSign, Home, CheckCircle2 } from 'lucide-react';
import { BUSINESS_DATA } from '../data/realtyData';

export const StatsBanner: React.FC = () => {
  const stats = [
    {
      label: "TOTAL HOMES SOLD",
      value: `${BUSINESS_DATA.performance_stats.total_sales}+`,
      subtext: "Proven transaction track record",
      icon: Home,
    },
    {
      label: "AVERAGE SALE PRICE",
      value: BUSINESS_DATA.performance_stats.average_price,
      subtext: `Range: ${BUSINESS_DATA.performance_stats.price_range}`,
      icon: DollarSign,
    },
    {
      label: "YEARS OF EXPERIENCE",
      value: `${BUSINESS_DATA.experience_years} YRS`,
      subtext: "Southern California market expert",
      icon: Award,
    },
    {
      label: "CLIENT SATISFACTION",
      value: `${BUSINESS_DATA.rating.overall.toFixed(1)} ★`,
      subtext: `Based on ${BUSINESS_DATA.rating.total_reviews} verified reviews`,
      icon: Star,
    },
  ];

  return (
    <section id="featured-stats" className="bg-neutral-900 text-white py-8 border-y border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-neutral-800">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className={`flex flex-col items-center text-center px-4 ${
                  idx >= 2 ? 'pt-6 md:pt-0' : ''
                }`}
              >
                <div className="flex items-center gap-1.5 text-brand-gold-light mb-1.5">
                  <Icon className="w-4 h-4" />
                  <span className="text-[10px] sm:text-[11px] font-bold tracking-widest uppercase font-display text-neutral-400">
                    {stat.label}
                  </span>
                </div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight font-display">
                  {stat.value}
                </div>
                <p className="mt-1 text-xs text-neutral-400 font-medium">
                  {stat.subtext}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
