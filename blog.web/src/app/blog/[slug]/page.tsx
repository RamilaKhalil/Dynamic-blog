"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import blogData from '@/app/data/blog.json'; // Adjust the path if needed

interface BlogPostProps {
  params: { slug: string };
}

// Removed 'use client' here for server-side rendering
export default function BlogPostPage({ params }: BlogPostProps) {
  const { slug } = params;
  const router = useRouter();

  const blogPost = blogData.find((blog) => blog.slug === slug);

  if (!blogPost) {
    return <p>Blog post not found.</p>;
  }

  const { title, description, date } = blogPost;

  // State for comments
  const [comments, setComments] = useState<string[]>([]);
  const [newComment, setNewComment] = useState<string>('');

  const handleAddComment = () => {
    if (newComment.trim()) {
      setComments((prevComments) => [...prevComments, newComment.trim()]);
      setNewComment(''); // Clear input field
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Back Button */}
      <button
        onClick={() => router.back()}
        className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg mb-6 hover:bg-gray-300"
      >
        ← Back to Blog
      </button>

      {/* Blog Content */}
      <h1 className="text-4xl font-bold mb-4">{title}</h1>
      <p className="text-gray-600 text-sm mb-6">{date}</p>
      <p className="text-gray-800 mb-8">{description}</p>

      {/* Comment Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Comments</h2>
        {/* Comments List */}
        <div className="mb-6">
          {comments.length > 0 ? (
            comments.map((comment, index) => (
              <div
                key={index}
                className="bg-gray-100 p-4 rounded-lg mb-2 shadow-sm"
              >
                {comment}
              </div>
            ))
          ) : (
            <p className="text-gray-600">No comments yet. Be the first to comment!</p>
          )}
        </div>

        {/* Add Comment */}
        <div className="flex items-center gap-4">
          <input
            type="text"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Write a comment..."
            className="flex-grow border rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleAddComment}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700"
          >
            Add Comment
          </button>
        </div>
      </div>
    </div>
  );
}
