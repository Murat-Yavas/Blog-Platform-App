import "./App.css";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Root from "./pages/Root";
import HomePage from "./pages/HomePage";
import AuthPage from "./pages/AuthPage";
import TopicPage from "./pages/TopicPage";
import UserProfilePage from "./pages/UserProfilePage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        { index: true, element: <HomePage /> },
        {
          path: "/auth",
          element:
            localStorage.getItem("currentUser") !== null ? (
              <Navigate to="/" />
            ) : (
              <AuthPage />
            ),
        },
        { path: "/topic/:topicName", element: <TopicPage /> },
        { path: "/users/:userId", element: <UserProfilePage /> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
