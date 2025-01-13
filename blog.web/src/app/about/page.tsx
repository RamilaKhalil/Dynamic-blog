import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">About Us</h1>
      <p className="text-lg text-gray-700 leading-relaxed mb-4">
        Welcome to our blog! We're dedicated to sharing insightful articles about modern web 
        development, including frameworks like Next.js, Tailwind CSS, and TypeScript. Our mission 
        is to empower developers of all skill levels with the knowledge and tools they need to 
        succeed in the ever-evolving tech industry.
      </p>
      <p className="text-lg text-gray-700 leading-relaxed mb-4">
        Whether you're just starting your journey or you're a seasoned developer, you'll find 
        valuable resources, tutorials, and tips here. Our team is passionate about helping you 
        stay ahead in the world of technology.
      </p>
      <p className="text-lg text-gray-700 leading-relaxed">
        Thank you for visiting our blog. We hope you enjoy your time here and find the content 
        helpful. Feel free to reach out to us anytime!
      </p>
    </div>
  );
};

export default AboutPage;
