
import React from "react";

// Card component props: icon (JSX), heading (string), para (string), onKnowMore (function or link)
const Card = ({ icon, heading, para, onKnowMore }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center w-full max-w-xs mx-auto">
      <div className="mb-4 text-blue-700">{icon}</div>
      <h4 className="text-xl font-bold mb-2 text-[#043873]">{heading}</h4>
      <p className="text-gray-600 mb-4">{para}</p>
      <button
        className="bg-[#043873] text-white px-5 py-2 rounded-full font-semibold hover:bg-blue-900 transition-colors"
        onClick={onKnowMore}
      >
        Know More
      </button>
    </div>
  );
};


// Simple card with just heading and tagline
const CardSimple = ({ heading, tagline }) => (
  <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center w-full max-w-xs mx-auto">
    <h4 className="text-xl font-bold mb-2 text-[#043873]">{heading}</h4>
    <p className="text-gray-600">{tagline}</p>
  </div>
);

export { Card, CardSimple };
