import { fetchBlog } from '../pages/utils/fetchBlog';
import BlogCard from '@/components/BlogCard';
import { useState } from 'react';

export default function HomePage({ blogs }) {
  const [category, setCategory] = useState("All");

  const categories = ["All", ...new Set(blogs.map(b => b.category))];

  const filteredBlogs = category === "All"
    ? blogs
    : blogs.filter(blog => blog.category === category);

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Welcome to Postly</h1>

      <div className="flex flex-wrap gap-2 mb-6">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`px-4 py-1 border rounded-full text-sm ${
              category === cat
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-700"
            }`}
            onClick={() => setCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredBlogs.slice(0, 6).map((blog, index) => (
          <BlogCard key={blog.id} blog={blog} priority={ index === 0} />
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const blogs = await fetchBlog(5);
  return {
    props: { blogs: blogs || [] },
  };
}
