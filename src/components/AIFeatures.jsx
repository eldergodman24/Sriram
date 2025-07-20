import React from 'react';

const aiFeatures = [
  { title: 'Face Detection', icon: 'https://i.imgur.com/face-icon.png' },
  { title: 'Vehicle Classification', icon: 'https://i.imgur.com/vehicle-icon.png' },
  { title: 'Smart Analytics', icon: 'https://i.imgur.com/analytics-icon.png' },
];

const AIFeatures = () => (
  <section className="py-16 bg-white">
    <div className="max-w-6xl mx-auto px-6 text-center">
      <h2 className="text-3xl font-semibold mb-8">AI-powered Solutions</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {aiFeatures.map(({ title, icon }, i) => (
          <div key={i} className="flex flex-col items-center">
            <img src={icon} alt={title} className="h-16 mb-4" />
            <h3 className="text-xl font-bold">{title}</h3>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AIFeatures;
