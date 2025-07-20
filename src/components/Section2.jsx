
import React from "react";
import { Card, CardSimple } from "./Cards";
const images = [
  "/logo.png",
  "/vite.svg",
  "/logo.png",
  "/vite.svg",
  "/logo.png",
  "/vite.svg",
  "/logo.png",
  "/vite.svg",
];

const Section2 = () => {
  return (
    <section className="flex flex-col gap-40 w-screen bg-white py-16 px-0">
      <div className="text-center">
        <h1 className="text-4xl md:text-4xl font-semibold text-center text-[#111111] mb-10">Trusted by Businesses Across the Globe</h1>
        <h3 className="text-black text-xl " >Our solutions are trusted by leading organizations throughout Oman and beyond</h3>
      </div>
      <div className="overflow-x-hidden mb-10">
        <Card className="flex gap-20 animate-marquee space-x-12 w-full">
          {images.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`Brand ${idx + 1}`}
              className="h-50 w-70 object-contain bg-gray-100 rounded shadow"
            />
          ))}
        </Card>
      </div>

      <h1 className="text-4xl md:text-5xl font-semibold text-center text-[#111111] mb-12">Efficient Business Software for Oman, Made Just for Your Needs</h1>

      {/* Image Left, Article Right, Button below Image */}
      <div className="container flex flex-col md:flex-row items-start justify-between w-full px-6 md:px-12">
        {/* Left: Image and Button */}
        <div className="flex-1 basis-1/2 flex flex-col items-center md:items-center mb-10 md:mb-0">
          <img
            src="/logo.png"
            alt="Feature"
            className="w-64 h-64 object-contain rounded-lg bg-blue-50 p-4 mb-4"
          />
          <button className="bg-[#479EFA] text-white w-[200px] font-regular p-4 rounded-[8px] text-2xl shadow hover:bg-blue-900 transition-colors">Let's Go</button>
        </div>
        {/* Right: Article */}
        <div className="flex-1 basis-1/2 md:pl-12 text-[#111111]">
          <article className="text-lg  leading-relaxed">
            <p>
              At iProAT, we understand that every business in Oman has unique challenges and requirements. That's why we don't believe in one-size-fits-all solutions. Our approach is to work closely with you to understand your specific needs and create software that perfectly aligns with your business processes.
            </p>
            <p className="mt-10" >Our team combines international expertise with deep local knowledge of Oman's business environment, ensuring that our solutions not only meet global standards but also comply with local regulations and cultural practices.</p>
          </article>
        </div>
      </div>

      {/* Marquee Animation Style */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 18s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Section2;
