import React from 'react';

const features = [
  {
    title: 'Pro‑People',
    desc: 'Smart HR tools for hiring, evaluation.',
    icon: 'https://i.imgur.com/pro-people-icon.png',
  },
  {
    title: 'Pro‑Visit',
    desc: 'Streamlined visitor check-in/out.',
    icon: 'https://i.imgur.com/pre-visit-icon.png',
  },
  {
    title: 'Pro‑Inventory',
    desc: 'Manage location, vendor & asset data.',
    icon: 'https://i.imgur.com/pre-site-icon.png',
  },
];

const FeatureBlocks = () => (
  <section className="py-16 bg-gray-50">
    <div className="max-w-6xl mx-auto px-6 grid sm:grid-cols-1 md:grid-cols-3 gap-8">
      {features.map((f, i) => (
        <div
          key={i}
          className="bg-white p-6 rounded-xl shadow-lg transition hover:shadow-2xl transform hover:-translate-y-2"
        >
          <img src={f.icon} alt={f.title} className="mx-auto mb-6 h-12" />
          <h3 className="text-xl font-bold mb-2 text-center">{f.title}</h3>
          <p className="text-gray-600 text-center">{f.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default FeatureBlocks;
