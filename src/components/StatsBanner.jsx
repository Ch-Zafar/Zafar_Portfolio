import React from 'react';
import { Award, CheckCircle, TrendingUp, Users } from 'lucide-react';

const StatsBanner = () => {
  const stats = [
    {
      icon: <Award className="w-6 h-6 text-black" />,
      number: "50+",
      label: "Projects Shipped",
      detail: "From Web Apps to AI agents",
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-black" />,
      number: "10x",
      label: "Efficiency Multiplier",
      detail: "Through smart automation",
    },
    {
      icon: <Users className="w-6 h-6 text-black" />,
      number: "100%",
      label: "Client Satisfaction",
      detail: "Transparent problem solving",
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-black" />,
      number: "0",
      label: "Security Breaches",
      detail: "Rigorous defense & testing",
    },
  ];

  return (
    <section className="py-16 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, idx) => (
            <div key={idx} className="flex flex-col items-start border-l-2 border-black/10 pl-5">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-black font-Mona tracking-tight text-black mb-1">
                {s.number}
              </div>
              <div className="text-sm font-bold text-gray-900">
                {s.label}
              </div>
              <div className="text-xs text-gray-500 mt-0.5">
                {s.detail}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsBanner;
