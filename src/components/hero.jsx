import React from "react";

const Hero = () => {
  return (
    <div className="bg-cover bg-center w-screen min-h-[100vh] relative" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80')" }}>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-700/80 to-blue-300/60 z-0"></div>

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between px-6 md:px-12 py-12">
        {/* Left Side */}
        <div className="flex-1 text-white pt-10 md:pr-12">
          <div className="bg-white/60 text-[#043873] backdrop-blur-md rounded-full px-4 py-1 inline-block mb-4">
            <span className="text-xs font-bold">iproat oman</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Business software solutions in Oman to reduce manual work and simply daily work operations
          </h1>

          <p className="text-xl md:text-2xl mb-6">
            Iproat is a trusted software provider in Oman, offering cloud-based business tools that are easy to use, secure, and built to reduce manual work.
          </p>

          <ul className="list-disc ml-6 space-y-2 text-lg">
            <li>✔ Suitable for SMEs and Large Enterprise</li>
            <li>✔ Product built completely based on your requirements</li>
            <li>✔ Cloud-based, mobile-ready, and easy to use</li>
          </ul>

          <div className="mt-8">
            <button className="bg-white text-[#043873] font-semibold px-6 py-3 rounded-lg shadow hover:bg-blue-100 border border-[#043873]">
              Book a free demo now
            </button>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex-1 flex justify-center md:justify-end mt-10 md:mt-0">
          <img
            src="/logo.png"
            alt="Hero Visual"
            className="w-full max-w-sm object-contain drop-shadow-xl rounded-lg bg-white/10 p-4"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
