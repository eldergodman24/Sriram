import React from 'react';

const Footer = () => (
  <footer className="bg-gray-900 text-gray-300 py-10">
    <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
      <div>
        <h3 className="font-semibold text-white mb-4">About Us</h3>
        <p>We provide tailored cloud solutions for businesses in Oman.</p>
      </div>
      <div>
        <h3 className="font-semibold text-white mb-4">Links</h3>
        <ul>
          <li><a href="#" className="hover:underline">Home</a></li>
          <li><a href="#" className="hover:underline">Features</a></li>
          <li><a href="#" className="hover:underline">Contact</a></li>
        </ul>
      </div>
      <div>
        <h3 className="font-semibold text-white mb-4">Contact</h3>
        <p>Email: info@iproat.om</p>
        <p>Phone: +968 1234 5678</p>
      </div>
    </div>
    <div className="text-center mt-8">© 2025 iProat. All rights reserved.</div>
  </footer>
);

export default Footer;
