// pages/about.jsx
import React from 'react';


const AboutPage = () => {
  return (
    <div className="space-y-16 px-4 py-8 max-w-7xl mx-auto">
      {/* Section 1: About */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white">About The Dragon News</h1>
        <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Welcome to The Dragon News, your ultimate source for everything Dragon Ball — from the latest galactic events to hidden Namekian secrets. We bring the Dragon Ball world closer to you with accurate and timely updates.
        </p>
      </section>

      {/* Section 2: Service */}
      <section className="grid md:grid-cols-3 gap-8">
        {['Breaking News', 'Character Analysis', 'Fan Theories'].map((service, index) => (
          <div key={index} className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md text-center">
            <h3 className="text-2xl font-semibold text-gray-700 dark:text-white mb-2">{service}</h3>
            <p className="text-gray-600 dark:text-gray-400">
              {`Explore detailed ${service.toLowerCase()} from across the Dragon Ball universe.`}
            </p>
          </div>
        ))}
      </section>

      {/* Section 3: Company Policy */}
      <section className="bg-gray-100 dark:bg-gray-700 p-8 rounded-lg">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Company Policy</h2>
        <ul className="list-disc space-y-2 pl-6 text-gray-600 dark:text-gray-300">
          <li>Respect fan community guidelines and avoid spoilers without warnings.</li>
          <li>Ensure authenticity and cite sources where necessary.</li>
          <li>Promote a friendly and inclusive environment for all fans.</li>
        </ul>
      </section>

      {/* Section 4: Newsletter */}
      <section className="p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg text-center space-y-4">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Subscribe to our Newsletter</h2>
        <p className="text-gray-600 dark:text-gray-400">Stay updated with the latest Dragon Ball news straight to your inbox.</p>
        <form className="flex flex-col sm:flex-row gap-4 justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="input input-bordered w-full max-w-xs"
          />
          <button type="submit" className="btn btn-primary">Subscribe</button>
        </form>
      </section>

      {/* Section 5: Featured Section (Reusable Component) */}
      
    </div>
  );
};

export default AboutPage;
