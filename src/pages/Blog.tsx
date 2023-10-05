import { useEffect } from "react";
import axios from "axios";
import { Box } from "@chakra-ui/react";

import BlogCard from "../components/BlogCard";
import { v4 } from "uuid";

interface PropType {
  initBlogList: any[];
  setInitBlogList: any;
  blogManagementLink: string;
}

const Blog = (props: PropType) => {
  const { initBlogList, setInitBlogList, blogManagementLink } = props;
  // const [listBlogContent, setListBlogContent] = useState<any[]>([]);

  useEffect(() => {
    document.title = "minhtrifit | Blog";
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const getBlogManagement = async () => {
      try {
        const tempListContent = [];
        const tempListContent1 = [];
        const res = await axios.get(blogManagementLink);
        const data = await res.data;

        const listBlogURL = data.list.map((item: any) => {
          return item;
        });

        const listBlogURLReverse = listBlogURL.reverse();

        //================================= Init pagination count for NEW POST
        const newPostCount = Math.ceil(data.count / 3); // 3 is the number of post per page
        // setNewPostPagCount(newPostCount);

        //================================= Source blog list
        // eslint-disable-next-line no-var
        for (var i = 0; i < data.count; ++i) {
          const res = await axios.get(listBlogURL[i]);
          tempListContent.push(res.data);
        }
        setInitBlogList(tempListContent);

        //================================= New blog list
        // eslint-disable-next-line no-var
        for (var j = 0; j < newPostCount; ++j) {
          const res = await axios.get(listBlogURLReverse[j]);
          tempListContent1.push(res.data);
        }

        // setListBlogContent(tempListContent1);
      } catch (error) {
        console.error(error);
      }
    };

    getBlogManagement();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      style={{
        padding: "20px 20px",
        marginBottom: "300px",
      }}
    >
      <Box display={"flex"} flexWrap={"wrap"}>
        {initBlogList?.map((blog: any) => {
          const uid = v4();
          return (
            <div key={uid}>
              <BlogCard
                id={blog.id}
                date={blog.date}
                title={blog.title}
                author={blog.author}
                image={blog.image}
                content={blog.content}
              />
            </div>
          );
        })}
      </Box>
    </div>
  );
};

export default Blog;
