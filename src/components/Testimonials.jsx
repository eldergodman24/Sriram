import React from 'react';

const testimonials = [
  {
    name: 'Fatma Al Zadjali',
    role: 'HR Manager, Oman Oil',
    photo: 'https://randomuser.me/api/portraits/women/68.jpg',
    quote: '“iProAt transformed our HR operations. The team is responsive and the product is easy to use.”',
  },
  {
    name: 'Ahmed Al Balushi',
    role: 'IT Director, VisionPoint',
    photo: 'https://randomuser.me/api/portraits/men/65.jpg',
    quote: '“Their cloud solutions are secure and reliable. We saved hours every week!”',
  },
  {
    name: 'Sara Al Lawati',
    role: 'COO, Oman Trading',
    photo: 'https://randomuser.me/api/portraits/women/65.jpg',
    quote: '“The support team is always there for us. Highly recommended for any business in Oman.”',
  },
];

const Testimonials = () => (
  <section className="py-16 bg-white">
    <div className="max-w-6xl mx-auto px-6">
      <h2 className="text-3xl font-bold text-center mb-12 text-[#043873]">Why Companies Trust Us</h2>
      <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-white rounded-lg shadow-md p-6 flex-1 flex flex-col items-center text-center">
            <img src={t.photo} alt={t.name} className="w-20 h-20 rounded-full mb-4 object-cover shadow" />
            <blockquote className="italic text-gray-700 mb-4">{t.quote}</blockquote>
            <div className="font-bold text-[#043873]">{t.name}</div>
            <div className="text-gray-500 text-sm">{t.role}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
