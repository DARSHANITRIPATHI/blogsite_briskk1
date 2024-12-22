import Link from "next/link";

export default function Home({ blogs }) {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6 text-center">Blog Titles</h1>
      <ul className="list-disc pl-5">
        {blogs.map((blog) => (
          <li key={blog.id} className="mb-3">
            <Link
              href={`/blogs/${blog.id}`}
              className="text-blue-500 hover:underline"
            >
              {blog.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch("http://localhost:3000/api/blogs");
  const blogs = await res.json();

  return {
    props: { blogs },
  };
}
