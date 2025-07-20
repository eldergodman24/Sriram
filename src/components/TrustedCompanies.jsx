import React from 'react';


const logos = [
  'https://1000logos.net/wp-content/uploads/2021/04/Microsoft-logo.png',
  'https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.png',
  'https://1000logos.net/wp-content/uploads/2017/03/Google-Logo.png',
  'https://1000logos.net/wp-content/uploads/2017/03/IBM-logo.png',
  'https://1000logos.net/wp-content/uploads/2017/03/HSBC-Logo.png',
  'https://1000logos.net/wp-content/uploads/2017/03/Emirates-logo.png',
  'https://1000logos.net/wp-content/uploads/2017/03/Nike-Logo.png',
  'https://1000logos.net/wp-content/uploads/2017/03/Netflix-Logo.png',
  'https://1000logos.net/wp-content/uploads/2017/03/SAP-Logo.png',
  'https://1000logos.net/wp-content/uploads/2017/03/Shell-Logo.png',
  'https://1000logos.net/wp-content/uploads/2017/03/Standard-Chartered-logo.png',
  'https://1000logos.net/wp-content/uploads/2021/04/Omantel-logo.png',
  'https://1000logos.net/wp-content/uploads/2021/04/Bank-Muscat-logo.png',
  'https://1000logos.net/wp-content/uploads/2021/04/TotalEnergies-logo.png',
  'https://1000logos.net/wp-content/uploads/2021/04/Siemens-logo.png',
];


const TrustedCompanies = () => (
  <section
    className="py-16 bg-white relative overflow-hidden"
  >
    {/* Blue overlay for contrast */}
    <div className="absolute inset-0 z-0" />
    <div className="max-w-6xl mx-auto px-6 text-center relative z-20">
      <h2 className="text-2xl font-semibold text-gray-800 mb-8">
        Trusted by Businesses Across the Globe
      </h2>
      <div className="overflow-x-hidden relative" style={{minHeight: '140px'}}>
        {/* White overlay only behind the logos, not the whole section */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/95 rounded-xl shadow-lg z-10" style={{width: '90%', height: '120px'}} />
        <div className="flex items-center gap-12 animate-marquee whitespace-nowrap relative z-20" style={{ animation: 'marquee 30s linear infinite', height: '120px', alignItems: 'center' }}>
          {logos.concat(logos).map((src, idx) => (
            <div key={idx} className="flex items-center justify-center h-[100px] w-[180px] mx-4">
              <img
                src={src}
                alt={`Logo ${idx + 1}`}
                className="max-h-[80px] max-w-[160px] w-auto h-auto transition duration-300 bg-white p-4 rounded-lg shadow-2xl hover:scale-110 hover:shadow-blue-300 hover:-translate-y-2 border border-gray-200"
                style={{ objectFit: 'contain', background: '#fff' }}
              />
            </div>
          ))}
        </div>
        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            will-change: transform;
            display: flex;
          }
        `}</style>
      </div>
      {/* Remove extra white overlay to keep background visible */}
    </div>
  </section>
);

export default TrustedCompanies;
