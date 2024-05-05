import { useAppSelector } from "../../redux/hooks";
import HomeTextItem from "../Home/HomeTextItem";
import styles from "../Home/Home.module.css";
import Sidebar from "../Sidebar/Sidebar";

const Topic = () => {
  const { blogs, blogsByTopic } = useAppSelector((state) => state.blog);
  let blogPosts = [];

  if (blogsByTopic.length === 0) blogPosts = blogs;
  else blogPosts = blogsByTopic;

  return (
    <div className="flex">
      <div className="flex-none w-64">
        <Sidebar />
      </div>
      <div className={`flex-1 w-32 ${styles["card-container"]}`}>
        <HomeTextItem blogs={blogPosts} />
      </div>
    </div>
  );
};

export default Topic;
