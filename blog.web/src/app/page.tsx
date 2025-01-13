import React from 'react';
import Link from 'next/link';

const HomePage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="text-center bg-gradient-to-r from-blue-500 to-purple-600 text-white py-16 rounded-lg shadow-lg">
        <h1 className="text-5xl font-bold mb-4">Welcome to My Blog</h1>
        <p className="text-xl mb-6">
          Explore insightful articles on web development, design, and technology.
        </p>
        <Link href="/blog"
           className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold shadow-md hover:bg-gray-100">
            Explore Blog
        </Link>
      </section>

      {/* About Section */}
      <section className="mt-12">
        <h2 className="text-3xl font-bold mb-4">About This Blog</h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          This blog is dedicated to sharing knowledge about modern web development, 
          including frameworks like Next.js, Tailwind CSS, and TypeScript. Whether you're 
          a beginner or an experienced developer, you'll find valuable insights here.
        </p>
      </section>

      {/* Featured Blogs Section */}
      <section className="mt-12">
        <h2 className="text-3xl font-bold mb-6">Featured Blogs</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Example blog cards */}
          <div className="border rounded-lg p-4 shadow-lg bg-white">
            <h3 className="text-xl font-bold mb-2">Getting Started with Tailwind CSS</h3>
            <p className="text-gray-600 text-sm mb-2">January 5, 2025</p>
            <p className="text-gray-800 mb-4">
              A beginner-friendly guide to using Tailwind CSS in your projects.
            </p>
            <Link href="/blog/tailwind-css-guide"
               className="text-blue-500 hover:underline">Read More
            </Link>
          </div>
          <div className="border rounded-lg p-4 shadow-lg bg-white">
            <h3 className="text-xl font-bold mb-2">TypeScript Basics for React Developers</h3>
            <p className="text-gray-600 text-sm mb-2">January 1, 2025</p>
            <p className="text-gray-800 mb-4">
              Master the basics of TypeScript for building robust React applications.
            </p>
            <Link href="/blog/typescript-basics-react"
            className="text-blue-500 hover:underline">Read More
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="mt-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
        <p className="text-lg text-gray-700 mb-6">
          Subscribe to our newsletter to get the latest updates directly in your inbox.
        </p>
        <Link href="/join-us"
          className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold shadow-md hover:bg-blue-700">
            Join Us
        </Link>
      </section>
    </div>
  );
};

export default HomePage;
