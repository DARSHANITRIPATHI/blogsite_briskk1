export default function BlogDetails({ blog }) {
  if (!blog) {
    return <p className="text-center text-red-500 mt-10">Blog not found.</p>;
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6">{blog.title}</h1>
      <p className="text-gray-700 text-lg">{blog.content}</p>
      <div className="mt-6">
        <a href="/" className="text-blue-500 hover:underline">
          ← Back to Home
        </a>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const res = await fetch("http://localhost:3000/api/blogs");
  const blogs = await res.json();

  const paths = blogs.map((blog) => ({
    params: { id: blog.id },
  }));

  return {
    paths,
    fallback: false, // Return 404 if the page isn't found
  };
}

export async function getStaticProps({ params }) {
  const res = await fetch("http://localhost:3000/api/blogs");
  const blogs = await res.json();

  const blog = blogs.find((b) => b.id === params.id);

  return {
    props: { blog: blog || null },
  };
}
