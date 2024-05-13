import { useState } from "react";
import { createOneUser } from "../../redux/api/UserApiCall";
import { useAppDispatch } from "../../redux/hooks";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const handleAuth = (path: string) => {
    const userInfo = { username, password };
    createOneUser(dispatch, userInfo, path);

    if (path === "login") {
      setUsername("");
      setPassword("");
      navigate("/");
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" method="POST" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Username
            </label>
            <div className="mt-2">
              <input
                id="username"
                name="username"
                type="text"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-custom-blue transition-all px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:text-black duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={() => handleAuth("login")}
            >
              Login
            </button>
          </div>

          <div>
            <p className="mt-8">Not registered yet?</p>
            <button
              type="submit"
              className="mt-2 flex w-full justify-center rounded-md bg-custom-blue transition-all px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:text-black duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={() => handleAuth("register")}
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Auth;
