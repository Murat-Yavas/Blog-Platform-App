import { useEffect, useRef, useState } from "react";
import { userActions } from "../../redux/user-slice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { updateOneUser } from "../../redux/api/UserApiCall";

const UpdateUserModal = () => {
  const { user } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const [username, setUsername] = useState(user.username);
  const [password, setPassword] = useState("");

  const modalRef = useRef<any>(null);

  console.log(user);

  ListenOutSideClick(modalRef);

  function ListenOutSideClick(modalRef: any) {
    useEffect(() => {
      function handleClickOutside(event: MouseEvent) {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
          setTimeout(() => {
            dispatch(userActions.toggleUpdateModal(false));
          }, 100);
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [modalRef]);
  }

  const handleUpdateUser = () => {
    const body = { username, password };
    updateOneUser(dispatch, user.id, body);
  };

  return (
    <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
      <div className="relative w-auto my-6 mx-auto max-w-3xl">
        <div
          className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none"
          ref={modalRef}
        >
          <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
            <h3 className="text-3xl font=semibold">Update Profile</h3>
          </div>

          <form className="p-4 md:p-5">
            <div className="grid gap-4 mb-4 grid-cols-2">
              <div className="col-span-2">
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Username
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="bg-gray-50 border border-custom-blue text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  required
                  onChange={(e) => setUsername(e.target.value)}
                  value={username}
                />
              </div>

              <div className="col-span-2">
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  New Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="bg-gray-50 border border-custom-blue text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  required
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
              </div>
            </div>
          </form>
          <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
            <button
              className="text-custom-blue background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
              type="button"
              onClick={() => dispatch(userActions.toggleUpdateModal(false))}
            >
              Close
            </button>
            <button
              className="text-white inline-flex items-center bg-custom-blue hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              type="button"
              onClick={handleUpdateUser}
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
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateUserModal;
