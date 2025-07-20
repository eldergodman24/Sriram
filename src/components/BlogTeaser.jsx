import React from 'react';

const blogs = [
  {
    title: 'How Cloud Software is Changing Oman’s Businesses',
    excerpt: 'Discover the impact of cloud-based tools on efficiency and growth for Omani companies.',
    link: '#',
  },
  {
    title: '5 Must-Have Features in Modern HRMS',
    excerpt: 'Learn what to look for in HR software to streamline your HR operations.',
    link: '#',
  },
  {
    title: 'Visitor Management: Security in the Digital Age',
    excerpt: 'Why digital visitor management is essential for modern offices in Oman.',
    link: '#',
  },
];

const BlogTeaser = () => (
  <section className="py-16 bg-white">
    <div className="max-w-6xl mx-auto px-6">
      <h2 className="text-3xl font-bold text-center mb-12 text-[#043873]">Blogs</h2>
      <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch">
        {blogs.map((b, i) => (
          <div key={i} className="bg-gray-50 rounded-lg shadow p-6 flex-1 flex flex-col items-start">
            <h3 className="text-xl font-bold mb-2 text-[#043873]">{b.title}</h3>
            <p className="mb-4 text-gray-700">{b.excerpt}</p>
            <a href={b.link} className="text-blue-700 font-semibold hover:underline mt-auto">Read more</a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default BlogTeaser;
