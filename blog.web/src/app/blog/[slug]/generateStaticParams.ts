// /app/blog/[slug]/generateStaticParams.ts

import blogData from '@/app/data/blog.json';

export async function generateStaticParams() {
  return blogData.map((blog) => ({
    slug: blog.slug,
  }));
}
