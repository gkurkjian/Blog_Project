// pages/blog/index.js
import { fetchBlog } from "../utils/fetchBlog";
import BlogCard from "@/components/BlogCard";

export default function BlogPage({ blogs }) {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Blog Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog, index) => (
          <BlogCard key={blog.id} blog={blog} priority={ index === 0 } />
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const blogs = await fetchBlog(5);
  return {
    props: {
      blogs,
    },
  };
}
