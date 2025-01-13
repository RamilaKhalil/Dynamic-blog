import React from 'react';
import Link from 'next/link';

interface BlogCardProps {
  blog: {
    slug: string;
    title: string;
    description: string;
    date: string;
  };
}

const BlogCard: React.FC<BlogCardProps> = ({ blog }) => {
  const { slug, title, description, date } = blog;

  return (
    <div className="bg-white border rounded-lg shadow-md p-4">
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p className="text-gray-600 text-sm mb-4">{date}</p>
      <p className="text-gray-700 mb-4">{description}</p>
      <Link href={`/blog/${slug}`}
      className="text-blue-600 hover:underline">Read More →
      </Link>
    </div>
  );
};

export default BlogCard;
