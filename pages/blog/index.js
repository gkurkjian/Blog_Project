// This function fetches the blog data at build time
// and passes it as props to the BlogPage component.

import { fetchBlog } from '../utils/fetchBlog';
import BlogCard from '@/components/BlogCard';

export default function BlogPage({ blogs }) {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Blog Posts</h1>

      {blogs.length === 0 ? (
        <p className="text-gray-500">No blogs found.</p>
      ) : (
        <ul className="space-y-4">
          {blogs.map((blog) => (
            <li key={blog.id}>
              <BlogCard blog={blog} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export async function getStaticProps() {
  const blogs = await fetchBlog();
  return {
    props: {
      blogs: blogs || [],
    },
  };
}