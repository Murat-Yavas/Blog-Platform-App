import styles from "./Home.module.css";
import { useEffect } from "react";
import { fetchAllBlogs } from "../../redux/api/BlogApiCall";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import Sidebar from "../Sidebar/Sidebar";
import HomeTextItem from "./HomeTextItem";
import Footer from "../Footer/Footer";
import AddBlogItem from "../AddBlogItem/AddBlogItem";

const Home = () => {
  const dispatch = useAppDispatch();
  // const { blogs, searchTerm } = useAppSelector((state) => state.blog);

  useEffect(() => {
    fetchAllBlogs(dispatch);
  }, []);

  // console.log(blogs);

  return (
    <div className={`${styles.home}`}>
      <div className={`flex-none w-64 mr-4 ${styles["right-content"]}`}>
        <Sidebar />
        <Footer />
      </div>
      <div className={`flex-1 w-32 ${styles["card-container"]}`}>
        <AddBlogItem />
        <HomeTextItem />
      </div>
    </div>
  );
};

export default Home;
