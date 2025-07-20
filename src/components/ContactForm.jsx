import React from 'react';

const ContactForm = () => (
  <section className="py-16 bg-white">
    <div className="max-w-4xl mx-auto px-6 text-center">
      <h2 className="text-3xl font-semibold mb-6">Let's Connect</h2>
      <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input type="text" placeholder="Your Name" className="p-3 border rounded"/>
        <input type="email" placeholder="Email Address" className="p-3 border rounded"/>
        <button type="submit" className="md:col-span-2 bg-blue-700 text-white font-semibold py-3 rounded hover:bg-blue-800">
          Submit
        </button>
      </form>
    </div>
  </section>
);

export default ContactForm;
