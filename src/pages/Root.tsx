import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation/MainNavigation";
import CreateModalBlog from "../components/BlogModal/CreateModalBlog";
import { useAppSelector } from "../redux/hooks";

const Root = () => {
  const { isModalOpen } = useAppSelector((state) => state.blog);
  return (
    <>
      <MainNavigation />
      {isModalOpen ? <CreateModalBlog /> : null}
      <Outlet />
    </>
  );
};

export default Root;
