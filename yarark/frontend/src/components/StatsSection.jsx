import React from 'react';

const StatsSection = () => {
  const stats = [
    { label: 'Cheats', value: '120+' },
    { label: 'Active Users', value: '70K+' },
    { label: 'Updates / Month', value: '20+' }
  ];

  return (
    <section className="py-20 bg-gray-800/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="relative inline-block">
                <h3 className="text-4xl lg:text-5xl font-bold text-blue-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                </h3>
                <div className="absolute inset-0 bg-blue-400/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <p className="text-lg text-gray-300 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;