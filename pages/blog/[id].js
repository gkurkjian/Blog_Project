import { fetchBlog } from "../utils/fetchBlog";
import { decodeContent } from "../utils/decodeContent";
import Image from "next/image";

export default function BlogPostPage({ blog }) {
  const cleanBody = decodeContent(blog?.body);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">{blog?.title}</h1>
      <div className="relative w-full h-[450px] mb-4 rounded-md shadow-sm">
        <Image
          src={blog?.featured_image || "/placeholder-image.jpg"}
          alt={blog?.title}
          fill
          className="rounded-md shadow-sm object-cover"
        />
      </div>
      <p className="text-sm text-gray-500">Author: {blog?.user?.first_name} {blog?.user?.last_name}</p>
    </div>
  );
}

export async function getStaticPaths() {
  const blogs = await fetchBlog();
  //console.log("STATIC PATHS BLOGS:", blogs);

  const paths = blogs.map((blog) => ({
    params: { id: blog.id.toString() },
  }));

  //console.log("PATHS GENERATED:", paths);

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
