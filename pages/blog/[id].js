import { fetchBlog } from "../utils/fetchBlog";
import { decodeContent } from "../utils/decodeContent";
import Image from "next/image";
import parse from "html-react-parser";

export default function BlogPostPage({ blog }) {
  const cleanBody = decodeContent(blog?.body);
  const cleanMainContent = parse(blog?.main_content); // Parse HTML safely

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">{blog?.title}</h1>

      <div className="w-full h-auto mb-4 rounded-md shadow-sm relative" style={{ minHeight: "450px" }}>
        <Image
          src={blog?.featured_image || "/placeholder-image.jpg"}
          alt={blog?.title}
          fill
          className="rounded-md object-cover shadow-sm"
          priority
        />
      </div>

      <div className="prose max-w-none mb-6">
        <i>{blog?.user?.created_at}</i>
      </div>

      {/* Renders the HTML from `main_content` */}
      <div className="prose max-w-none blog-content">
        {cleanMainContent}
      </div>

      <br /><br />

      <div className="flex items-center gap-3 mt-8">
        <Image 
          src={blog?.user?.profile_pic || "/default-profile.png"}
          alt={`${blog?.user?.first_name} ${blog?.user?.last_name}`}
          width={50}
          height={50}
          className="rounded-full object-cover shadow"
        />
        <p className="text-sm text-gray-600">
          <span className="font-medium text-gray-800">Author:</span> {blog?.user?.first_name} {blog?.user?.last_name}
        </p>
      </div>


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
