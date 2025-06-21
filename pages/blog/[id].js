import { fetchBlog } from "../utils/fetchBlog";
import { decodeContent } from "../utils/decodeContent";

export default function BlogPostPage({ blog }) {
  const cleanBody = decodeContent(blog?.body);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">{blog?.title}</h1>
      <p className="text-gray-600 mb-4 whitespace-pre-line">{cleanBody}</p>
      <p className="text-sm text-gray-500">Author: {blog?.author}</p>
    </div>
  );
}

export async function getStaticPaths() {
  const blogs = await fetchBlog();
  console.log("STATIC PATHS BLOGS:", blogs); // 👈 Add this

  const paths = blogs.map((blog) => ({
    params: { id: blog.id.toString() },
  }));

  console.log("PATHS GENERATED:", paths); // 👈 Add this

  return {
    paths,
    fallback: false,
  };
}


export async function getStaticProps({ params }) {
  const blogs = await fetchBlog();
  const blog = blogs.find((b) => b.id.toString() === params.id);

  if (!blog) {
    return { notFound: true };
  }

  return {
    props: {
      blog,
    },
  };
}
