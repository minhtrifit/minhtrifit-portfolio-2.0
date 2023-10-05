import { useEffect } from "react";

const Blog = () => {
  useEffect(() => {
    document.title = "minhtrifit | Blog";
  });

  return <div style={{ padding: "20px 20px" }}>Blog</div>;
};

export default Blog;
