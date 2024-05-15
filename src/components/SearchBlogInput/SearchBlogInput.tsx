import { FaSearch } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { useState } from "react";
import styles from "./SearchBlogInput.module.css";
import { blogActions } from "../../redux/blog-slice";

const SearchBlogInput = () => {
  const [searchText, setSearchText] = useState("");
  const { blogs } = useAppSelector((state) => state.blog);
  const dispatch = useAppDispatch();

  // console.log(blogs);
  const handleSearchBlog = (value: string) => {
    setSearchText(value);
    const foundBlogs = blogs.filter((blog) =>
      blog.title.toLowerCase().trim().includes(value.toLowerCase().trim())
    );

    dispatch(blogActions.searchBlogs(foundBlogs));
    dispatch(blogActions.addSearchTerm(searchText));
  };

  return (
    <div className="mr-4">
      <form className="flex items-center md:max-w-sm max-w-32 mx-auto">
        <div>
          <input
            type="text"
            id="title"
            className="bg-gray-50 border border-custom-blue text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder="Search a blog"
            required
            onChange={(e) => handleSearchBlog(e.target.value)}
            value={searchText}
          />
        </div>

        <FaSearch
          className={`${styles["search-icon"]}`}
          // onClick={handleSearchBlog}
        />
      </form>
    </div>
  );
};

export default SearchBlogInput;
