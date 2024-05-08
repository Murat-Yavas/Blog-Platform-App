import { useAppDispatch } from "../../redux/hooks";
import { blogActions } from "../../redux/blog-slice";
import { useEffect, useRef, useState } from "react";
import { createOneBlog } from "../../redux/api/BlogApiCall";
import { useNavigate } from "react-router-dom";

const CreateModalBlog = () => {
  const dispatch = useAppDispatch();
  const [title, setTitle] = useState("");
  const [topic, setTopic] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const modalRef = useRef<any>(null);

  ListenOutSideClick(modalRef);

  function ListenOutSideClick(modalRef: any) {
    useEffect(() => {
      function handleClickOutside(event: MouseEvent) {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
          setTimeout(() => {
            dispatch(blogActions.toggleBlogCreateModal(false));
          }, 100);
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [modalRef]);
  }

  const handlePost = () => {
    const body = { title, topic, content, userId: 3 };
    createOneBlog(dispatch, body);
    dispatch(blogActions.toggleBlogCreateModal(false));
    navigate("/");
  };

  return (
    <>
      <button
        className="bg-blue-200 text-black active:bg-blue-500 
      font-bold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
        type="button"
        onClick={() => {}}
      >
        Fill Details
      </button>

      <>
        <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
          <div className="relative w-auto my-6 mx-auto max-w-3xl">
            <div
              className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none"
              ref={modalRef}
            >
              <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                <h3 className="text-3xl font=semibold">Create Post</h3>
              </div>

              <form className="p-4 md:p-5">
                <div className="grid gap-4 mb-4 grid-cols-2">
                  <div className="col-span-2">
                    <label
                      htmlFor="name"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Title
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="Type title"
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
                  <div className="col-span-2">
                    <label
                      htmlFor="description"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Content
                    </label>
                    <textarea
                      id="description"
                      rows={4}
                      className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Say something"
                      onChange={(e) => setContent(e.target.value)}
                      value={content}
                    ></textarea>
                  </div>
                </div>
              </form>
              <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                <button
                  className="text-custom-blue background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                  type="button"
                  onClick={() =>
                    dispatch(blogActions.toggleBlogCreateModal(false))
                  }
                >
                  Close
                </button>
                <button
                  className="text-white inline-flex items-center bg-custom-blue hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  type="button"
                  onClick={() => handlePost()}
                >
                  Post
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default CreateModalBlog;
