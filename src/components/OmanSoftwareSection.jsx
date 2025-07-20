import React from 'react';

const OmanSoftwareSection = () => (
  <section className="py-16 bg-blue-700 text-white">
    <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-8">
      <div className="flex-1">
        <h2 className="text-3xl font-bold mb-4">Cloud-based Business Tools For Oman</h2>
        <p className="mb-6">Tailored for SMEs and large enterprises — secure, mobile-ready, customizable to your needs.</p>
        <button className="bg-white text-blue-700 font-semibold px-6 py-3 rounded shadow hover:bg-blue-100">
          Learn More
        </button>
      </div>
      <div className="flex-1 flex justify-center">
        <img src="https://i.imgur.com/oman-software-image.png" alt="Oman Software" className="w-full max-w-md rounded-lg shadow-lg" />
      </div>
    </div>
  </section>
);

export default OmanSoftwareSection;
