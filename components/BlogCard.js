import Link from 'next/link';


export default function BlogCard({ blog }) {
  return (
    <Link href={`/blog/${blog.id}`} className="block">
        <div className="p-4 border rounded-md shadow-sm bg-white">
        <h2 className="text-xl font-semibold text-blue-600 hover:underline">
            {blog.title}
        </h2>
        <p className="text-gray-600 mt-2">{blog.body}</p>
        </div>
    </Link>
  );
}