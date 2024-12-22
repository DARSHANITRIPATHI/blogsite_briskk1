export default function handler(req, res) {
  const blogs = [
    {
      id: "1",
      title: "Understanding React Context API",
      content: `
        React's Context API is a way to manage state globally. 
        It can be used to share data between components without having to pass props down manually at every level. 
        It's particularly useful for themes, authentication, and other global state use cases.
      `,
    },
    {
      id: "2",
      title: "Getting Started with Tailwind CSS",
      content: `
        Tailwind CSS is a utility-first CSS framework for rapidly building custom user interfaces. 
        It provides a low-level set of CSS classes that can be composed to create modern designs directly in your HTML.
      `,
    },
    {
      id: "3",
      title: "A Guide to Next.js Static Site Generation (SSG)",
      content: `
        Static Site Generation (SSG) in Next.js allows you to pre-render pages at build time. 
        This improves performance and is ideal for pages that do not change frequently, such as blogs or documentation.
      `,
    },
    {
      id: "4",
      title: "JavaScript Promises Explained",
      content: `
        JavaScript Promises are a way to handle asynchronous operations. 
        They represent a value that may be available now, or in the future, or never. 
        Promises have three states: pending, resolved, and rejected.
      `,
    },
    {
      id: "5",
      title: "An Introduction to Node.js",
      content: `
        Node.js is a JavaScript runtime built on Chrome's V8 engine. 
        It enables developers to run JavaScript on the server-side and build scalable network applications efficiently.
      `,
    },
  ];

  res.status(200).json(blogs);
}
