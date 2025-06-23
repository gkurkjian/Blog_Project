import Link from "next/link";
import Image from "next/image";

export default function BlogCard({ blog, priority = false }) {
  return (
    <Link href={`/blog/${blog.id}`} className="group block overflow-hidden rounded-xl shadow-md hover:shadow-lg transition bg-white">
      <div className="relative w-full aspect-[4/3]">
        <Image
          src={blog?.featured_image || "/placeholder-image.jpg"}
          alt={blog?.title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          loading={priority ? "eager" : "lazy"}
          priority={priority}
        />

      </div>

      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600">
          {blog.title}
        </h2>

      {blog?.user?.profile_image && (
        <div className="flex items-center gap-2 mt-3">
          <Image
            src={blog.user.profile_image}
            alt={`${blog.user.first_name} ${blog.user.last_name}`}
            width={32}
            height={32}
            loading="lazy"
            className="rounded-full object-cover"
          />
          <span className="text-sm text-gray-600">
            {blog.user.first_name} {blog.user.last_name}
          </span>
        </div>
      )}



      </div>
    </Link>
  );
}
