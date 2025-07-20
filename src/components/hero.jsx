
import React from "react";

const Hero = () => {
  return (
    <div>
      <div className="h-[10vh]"></div>
    <div className="w-screen min-h-[90vh] flex items-center justify-center bg-[linear-gradient(135deg,_#3885d1_0%,_#7dbff5_100%)] px-0 py-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between w-full px-6 md:px-12">
        {/* Left: Headline and Bullet Points */}
        <div className="flex-1 text-white pt-10 md:pr-12">
          <div className="bg-white/60 text-s backdrop-blur-md rounded-full px-4 py-1" ><span className="text-xs">OM</span> Leading software provider in Oman</div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Business software solutions in Oman to reduce manual work and simplify daily work operations</h1>
          <p className="text-2xl" >Iproat is a trusted software provider in Oman, offering cloud-based business tools that are easy to use, secure, and built to reduce manual work.</p>
          <ul className="list-disc mt-10 pl-6 space-y-3 text-lg">
            <li>Suitable for SMEs and Large Enterprise</li>
            <li>Product built completely based on your requirements</li>
            <li>Cloud-based, mobile-ready, and easy to use</li>
          </ul>
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <button className="bg-white text-[#043873] font-semibold px-6 py-3 rounded-[8px] shadow w-50 hover:bg-blue-100 transition-colors border border-[#043873]">Book a free demo</button>
            <button className="bg-white text-[#043873] font-semibold px-6 py-3 rounded-[8px] shadow w-40 hover:bg-blue-100 transition-colors border border-[#043873]">Learn more</button>
          </div>
        </div>
        {/* Right: Hero Image */}
        <div className="flex-1 flex justify-center md:justify-end mt-10 md:mt-0">
          <img
            src="/logo.png"
            alt="Nexus Hero"
            className="w-100 h-80 object-contain drop-shadow-xl rounded-lg bg-white/10 p-4"
          />
        </div>
      </div>
    </div>
    </div>
  );
};

export default Hero;
