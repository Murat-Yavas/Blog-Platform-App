import { NavLink } from "react-router-dom";
import styles from "./Home.module.css";
import { useEffect } from "react";
import { fetchAllBlogs } from "../../redux/api/BlogApiCall";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

const Home = () => {
  const dispatch = useAppDispatch();
  const { blogs } = useAppSelector((state) => state.blog);

  useEffect(() => {
    getAllBlogs();
  }, []);

  const getAllBlogs = () => {
    fetchAllBlogs(dispatch);
  };

  return blogs.map((blog) => (
    <div className={`${styles["card-container"]}`} key={blog.id}>
      <div
        className={`p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ${styles.card}`}
      >
        <div className="bg-white flex justify-between">
          <NavLink to="/" className="bg-white">
            <h5 className="bg-white mb-2 text-2xl font-bold tracking-tight text-black dark:text-white">
              {blog.title}
            </h5>
          </NavLink>
          <span className="ml-6 flex items-center text-gray-700 bg-white text-sm">
            One day ago
          </span>
        </div>
        <p className="bg-white mb-3 font-normal text-gray-700 dark:text-gray-400">
          {blog.content}
        </p>
        <a
          href="#"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-sky-400 rounded-lg hover:text-black duration-200 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Read more
        </a>
      </div>
    </div>
  ));
};

export default Home;
