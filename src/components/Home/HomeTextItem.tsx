import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { blogActions } from "../../redux/blog-slice";
import BlogItem from "../UI/BlogItem/BlogItem";
import { reverseArray } from "../../helpers/reverseArray";

const HomeTextItem = () => {
  const dispatch = useAppDispatch();
  const { blogs } = useAppSelector((state) => state.blog);

  const handleOpenModal = () => {
    dispatch(blogActions.toggleBlogCreateModal(true));
  };

  const newArray = reverseArray(blogs);

  return (
    <div>
      {blogs.length === 0 ? (
        <h1 className="text-center">
          No posts on this topic yet.
          <span
            className="text-blue-300 cursor-pointer"
            onClick={handleOpenModal}
          >
            Create one!
          </span>
        </h1>
      ) : (
        newArray.map((blog) => <BlogItem key={blog.id} blog={blog} />)
      )}
    </div>
  );
};

export default HomeTextItem;
