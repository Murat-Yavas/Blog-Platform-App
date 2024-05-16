import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { blogActions } from "../../redux/blog-slice";
import BlogItem from "../UI/BlogItem/BlogItem";
// import { reverseBlogArray } from "../../helpers/reverseArray";
import Spinner from "../Spinner/Spinner";

const HomeTextItem = () => {
  const dispatch = useAppDispatch();
  const { blogs, isBlogLoading, isBlogError, searchTerm, searchedBlogs } =
    useAppSelector((state) => state.blog);

  const handleOpenModal = () => {
    dispatch(blogActions.toggleBlogCreateModal(true));
  };

  // const newArray = reverseBlogArray(
  //   searchTerm.length > 0 ? searchedBlogs : blogs
  // );

  const newArray = searchTerm.length > 0 ? searchedBlogs : blogs;

  // console.log(blogs);
  // console.log(newArray);

  if (isBlogLoading) {
    return <Spinner />;
  } else if (isBlogError) {
    return <div>Uppsss. Something went wrong!</div>;
  } else
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
