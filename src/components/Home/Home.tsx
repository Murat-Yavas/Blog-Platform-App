import { NavLink } from "react-router-dom";
import styles from "./Home.module.css";
import { useEffect } from "react";
import { fetchAllBlogs } from "../../redux/api/BlogApiCall";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import Sidebar from "../Sidebar/Sidebar";

const Home = () => {
  const dispatch = useAppDispatch();
  const { blogs } = useAppSelector((state) => state.blog);

  useEffect(() => {
    getAllBlogs();
  }, []);

  const getAllBlogs = () => {
    fetchAllBlogs(dispatch);
  };

  // tüm content'i değil de sadece 100 kelimesini gösteren helper func yaz

  return (
    <div className="flex">
      <div className="flex-none w-64">
        <Sidebar />
      </div>
      <div className={`flex-1 w-32 ${styles["card-container"]}`}>
        {blogs.map((blog) => (
          <div
            className={`p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ${styles.card}`}
            key={blog.id}
          >
            <div className="bg-white flex justify-between">
              <NavLink to="/" className="bg-white">
                <h5 className="bg-white mb-2 text-2xl font-bold tracking-tight text-black dark:text-white">
                  {blog.title}
                </h5>
              </NavLink>
              <span className="ml-6 flex items-center text-gray-700 bg-white text-sm">
                Published: {blog.createDate.toString().split("T")[0]}
              </span>
            </div>
            <p className="bg-white mb-3 font-normal text-gray-700 dark:text-gray-400">
              {blog.content}
            </p>
            <NavLink
              to="/"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-sky-400 rounded-lg hover:text-black duration-200 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Read more
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
