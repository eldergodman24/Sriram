import React from 'react';

const products = [
  {
    icon: 'https://img.icons8.com/ios-filled/50/043873/conference-background-selected.png',
    title: 'Pro-People',
    subtitle: 'HRMS Software in Oman',
    desc: 'Manages payroll, attendance, leave, and more. Streamline HR for SMEs and large enterprises. Secure, cloud-based, and mobile-ready.',
    link: '#',
  },
  {
    icon: 'https://img.icons8.com/ios-filled/50/043873/visitor-male.png',
    title: 'Pro-Visit',
    subtitle: 'Visitor Management',
    desc: 'Secure guest access, ID capture, and visitor tracking. Enhance security and professionalism for your business.',
    link: '#',
  },
  {
    icon: 'https://img.icons8.com/ios-filled/50/043873/warehouse.png',
    title: 'Pro-Biz',
    subtitle: 'Inventory Management',
    desc: 'Track stock, get alerts, manage billing, and more. Simplify inventory for retail, wholesale, and distribution.',
    link: '#',
  },
];

const FocusProducts = () => (
  <section>
    <div className="w-5/6 cursor-default mx-auto px-6 text-center relative z-20">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Focus Products That Help Many Businesses in Oman</h2>
      <div className="overflow-x-hidden relative">
        <div className="absolute inset-0 bg-white/90 rounded-xl z-10" style={{top: '50%', left: 0, right: 0, height: '420px', transform: 'translateY(-50%)'}} />
        <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch relative z-20" style={{height: '620px', alignItems: 'center'}}>
          {products.map((p, i) => (
            <div
              key={i}
              className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-all p-8 flex-1 flex flex-col items-start text-center group border border-gray-200 mx-4"
              style={{height: '400px', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
              <img src={p.icon} alt={p.title} className="h-20 w-20 mb-4 transition-all duration-300 bg-white p-3 rounded-lg border border-gray-200" />
              <h3 className="text-2xl font-bold mb-1 text-black group-hover:text-[#0065d8bf] transition">{p.title}</h3>
              <div className="text-gray-500 mb-2">{p.subtitle}</div>
              <p className="mb-6 text-left text-gray-700 min-h-[80px]">{p.desc}</p>
              <a
                href={p.link}
                className="text-[#043873] rounded-[8px] px-6 py-2 font-semibold bg-white shadow-sm hover:bg-[#0065d8bf] hover:text-white hover:shadow-lg transition-all duration-300"
              >
                Know more
              </a>
            </div>
          ))}
        </div>
      </div>
      {/* Parallax overlay for readability */}
      <div className="absolute inset-0 pointer-events-none z-10" />
    </div>
  </section>
);

export default FocusProducts;
