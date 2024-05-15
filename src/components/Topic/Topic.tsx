import { useAppSelector } from "../../redux/hooks";
import styles from "../Home/Home.module.css";
import Sidebar from "../Sidebar/Sidebar";
import { useParams } from "react-router-dom";
import Footer from "../Footer/Footer";
import AddBlogItem from "../AddBlogItem/AddBlogItem";
import BlogItem from "../UI/BlogItem/BlogItem";
import { reverseBlogArray } from "../../helpers/reverseArray";
import SearchBlogInput from "../SearchBlogInput/SearchBlogInput";

const Topic = () => {
  const { blogs } = useAppSelector((state) => state.blog);
  let blogPosts = [];

  const param = useParams();

  console.log(param);

  blogPosts = blogs.filter((blog) =>
    blog.topic === param.topicName
      ? blog
      : param.topicName === "all"
      ? blogs
      : null
  );

  const newArray = reverseBlogArray(blogPosts);

  return (
    <div className={`${styles.home}`}>
      <div className={`flex-none w-64 mr-4 ${styles["right-content"]}`}>
        <Sidebar />
        <Footer />
      </div>
      <div className={`flex-1 w-32 ${styles["card-container"]}`}>
        <AddBlogItem />
        {newArray.map((blog) => (
          <BlogItem key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default Topic;
