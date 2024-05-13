import { useAppSelector } from "../../redux/hooks";
import HomeTextItem from "../Home/HomeTextItem";
import styles from "../Home/Home.module.css";
import Sidebar from "../Sidebar/Sidebar";
import { useParams } from "react-router-dom";
import Footer from "../Footer/Footer";
import AddBlogItem from "../AddBlogItem/AddBlogItem";
import BlogItem from "../UI/BlogItem/BlogItem";

const Topic = () => {
  const { blogs } = useAppSelector((state) => state.blog);
  let blogPosts = [];

  const param = useParams();

  blogPosts = blogs.filter((blog) =>
    blog.topic === param.topicName
      ? blog
      : param.topicName === "all"
      ? blogs
      : null
  );

  const reversedBlogsArray = blogPosts.map(
    (blog, index) => blogPosts[blogPosts.length - 1 - index]
  );

  return (
    <div className="flex">
      <div className="flex-none w-64 mr-4">
        <Sidebar />
        <Footer />
      </div>
      <div className={`flex-1 w-32 ${styles["card-container"]}`}>
        <AddBlogItem />
        {reversedBlogsArray.map((blog) => (
          <BlogItem key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default Topic;
