import { useState } from "react";
import { useAppDispatch } from "../../redux/hooks";
import styles from "./AddBlogItem.module.css";
import { createOneBlog } from "../../redux/api/BlogApiCall";

const AddBlogItem = () => {
  const dispatch = useAppDispatch();
  const [title, setTitle] = useState("");
  const [topic, setTopic] = useState("");
  const [content, setContent] = useState("");

  const handleAddBlog = () => {
    const body = {
      title,
      topic,
      content,
      userId: +localStorage.getItem("currentUser")!,
    };
    createOneBlog(dispatch, body);
    setTitle("");
    setTopic("");
    setContent("");
  };

  return (
    <div>
      <form className={`${styles["add-blog-item"]}`}>
        <div className="grid gap-6 mb-6 md:grid-cols-3">
          <div>
            <label
              htmlFor="title"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="React"
              required
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
          </div>

          <div className="col-span-2 sm:col-span-1">
            <label
              htmlFor="category"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Topic
            </label>
            <select
              id="category"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              onChange={(e) => setTopic(e.target.value)}
              value={topic}
            >
              <option defaultValue="">Select category</option>
              <option value="techonology">Technology</option>
              <option value="nature">Nature</option>
              <option value="engineering">Engineering</option>
              <option value="science">Science</option>
              <option value="gaming">Gaming</option>
              <option value="trip">Trip</option>
            </select>
          </div>
        </div>
        <div className="col-span-2">
          <label
            htmlFor="description"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Content
          </label>
          <textarea
            id="description"
            rows={3}
            className="resize-none block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Say something"
            onChange={(e) => setContent(e.target.value)}
            value={content}
          ></textarea>
        </div>

        <div className={`${styles["add-blog-button"]}`}>
          <button
            className="text-white inline-flex items-center mt-2 bg-custom-blue hover:bg-blue-300 duration-200 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="button"
            onClick={() => handleAddBlog()}
            disabled={
              localStorage.getItem("currentUser") !== null ? false : true
            }
            style={{
              cursor:
                localStorage.getItem("currentUser") !== null
                  ? ""
                  : "not-allowed",
            }}
          >
            Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBlogItem;
