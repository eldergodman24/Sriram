import React from 'react';

const promises = [
  { title: 'No Confusion', desc: 'Clear UI and pricing.' },
  { title: 'We Deliver', desc: 'On-time implementation.' },
  { title: 'Easy Support', desc: 'Help available when you need it.' },
];

const PromiseSection = () => (
  <section className="py-16 bg-gray-50">
    <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-center">
      {promises.map(({ title, desc }, i) => (
        <div key={i} className="bg-white p-6 rounded shadow">
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-gray-600">{desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default PromiseSection;
