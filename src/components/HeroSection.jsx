import React from 'react';

const HeroSection = () => (
  <div>
    <div className='h-[10vh]  ' ></div>
  <div
    className="relative w-full h-[110vh] flex items-center justify-center bg-cover bg-center"
    style={{
      backgroundImage:
        "linear-gradient(180deg, #0065d8bf 60%, rgba(255, 255, 255, 1) 100%), url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1500&q=80')"
    }}
  >
    {/* Gradient Overlay */}
    <div className="absolute inset-0 " />
    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full max-w-5/6 mx-auto px-6 py-12">
      {/* Left: Text Content */}
      <div className="flex-1 text-left text-white max-w-xl">
        <span className="inline-block bg-white/10 border border-white/20 text-xs font-semibold rounded-full px-4 py-1 mb-4 w-full tracking-wide">OM Leading software provider in Oman</span>
        <h1 className="text-3xl md:text-5xl font-bold leading-none mb-4 font-sans">Business software solutions in Oman to reduce manual work and simplify daily work operations</h1>
        <p className="text-lg md:text-xl mb-6 font-sans">Iproat is a trusted software provider in Oman, offering cloud-based business tools that are easy to use, secure, and built to reduce manual work.</p>
        <ul className="mb-8 space-y-2">
          <li className="flex items-center gap-2"><span className="text-green-400 text-xl">✔</span> Suitable for SMEs and Large Enterprise</li>
          <li className="flex items-center gap-2"><span className="text-green-400 text-xl">✔</span> Product built completely based on your requirements</li>
          <li className="flex items-center gap-2"><span className="text-green-400 text-xl">✔</span> Cloud-based, mobile-ready, and easy to use</li>
        </ul>
        <div className='flex flex-col md:flex-row gap-5'>
          <button className="bg-white text-[#0065d8bf] font-semibold rounded-[8px] shadow px-6 py-3 hover:bg-blue-100 transition">Book a free demo now</button>
          <button className="bg-white text-[#0065d8bf] font-semibold rounded-[8px] shadow px-6 py-3 hover:bg-blue-100 transition">Learn more</button>
        </div>
      </div>
      {/* Right: Product/Team Image */}
      <div className="flex-1 flex items-center justify-center mt-10 md:mt-0">
        <div className="absolute right-6 top-35 z-200 animate-diagonal"style={{
        animation: "diagonalMove 5s infinite alternate linear"
        }} >
          <div className="flex items center space-x-2 bg-white text-[#0065d8bf] p-3 font-semibold rounded-lg" >Cloud Based</div></div>
          <div className="absolute right-100 top-100 z-200 animate-diagonal"style={{
        animation: "diagonalMove 5s infinite alternate linear"
        }} >
          <div className="flex items center space-x-2 bg-white text-[#0065d8bf] p-3 font-semibold rounded-lg" >Secure Access</div></div>
          <div className="absolute right-50 top-140 z-200 animate-diagonal"style={{
        animation: "diagonalMove 5s infinite alternate linear"
        }} >
          <div className="flex items center space-x-2 bg-white text-[#0065d8bf] p-3 font-semibold rounded-lg" >High Performance</div></div>
        <div className="bg-[#0065d8bf] rounded-xl shadow-lg p-4 md:p-3 max-w-md md:max-w-lg">
          <div className="bg-[#004fa9ff] rounded-xl shadow-lg p-4 md:p-2 max-w-md md:max-w-lg">
          <div className="bg-white/90 rounded-xl shadow-lg p-4 md:p-8 max-w-md md:max-w-lg">
          <img
            src="https://plus.unsplash.com/premium_photo-1661573028839-83e6ad71ca67?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGFwdG9wJTIwb2ZmaWNlfGVufDB8fDB8fHww"
            alt="Product or Team"
            className="h-[400px] rounded-lg shadow-md object-fit"
            onError={e => { e.target.src = 'https://via.placeholder.com/420x320?text=Product+Image'; }}
          />
        </div>
          </div>
        </div>
        
      </div>
    </div>
  </div>
  </div>
);

export default HeroSection;
