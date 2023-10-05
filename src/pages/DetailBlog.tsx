import { useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Button } from "@chakra-ui/react";

interface PropType {
  initBlogList: any[];
}

const DetailBlog = (props: PropType) => {
  const { initBlogList } = props;

  const navigate = useNavigate();
  const params = useParams();
  const { id }: any = params;

  const targetBlog = initBlogList.find((item: any) => {
    return item.id === parseInt(id);
  });

  useEffect(() => {
    if (initBlogList?.length === 0) {
      navigate("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initBlogList]);

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll top of page when re-render
    document.title = `Reading detail blog | minhtrifit`;
  }, []);

  // Convert content from JSON to HTML
  try {
    const contentStr = targetBlog.content;
    const contentStrInit = [];
    contentStrInit.push(contentStr);
    const contentStrConvert = contentStrInit
      .map((i) => i.replace(/\n/g, "<br />"))
      .join("");

    return (
      <div
        style={{
          padding: "20px 40px",
          marginBottom: "300px",
          display: "flex",
          flexDirection: "column",
          gap: 30,
        }}
      >
        <Link className="back-btn" to="/blog">
          <Button colorScheme="cyan">Back</Button>
        </Link>
        <p
          style={{ textAlign: "center", fontSize: "30px", fontWeight: "bold" }}
        >
          Reading: {targetBlog.title}
        </p>
        <div style={{ width: "50%", margin: "0 auto" }}>
          <img
            style={{ width: "100%", borderRadius: "10px" }}
            src={targetBlog.image}
            alt={`${targetBlog.id}`}
          />
        </div>
        <div
          style={{ textAlign: "justify" }}
          dangerouslySetInnerHTML={{ __html: contentStrConvert }}
        ></div>
        <p className="blog-date">{targetBlog.date}</p>
      </div>
    );
  } catch (error) {
    return (
      <div
        style={{
          padding: "20px 20px",
          marginBottom: "300px",
        }}
      >
        <a className="back-warning-btn" href="/">
          <Button colorScheme="cyan">Back</Button>
        </a>
        <p className="blog-warning">BLOG NOT FOUND</p>
      </div>
    );
  }
};

export default DetailBlog;
