import CreateModalBlog from "../components/BlogModal/CreateModalBlog";
import Home from "../components/Home/Home";
import { useAppSelector } from "../redux/hooks";

const HomePage = () => {
  const { isModalOpen } = useAppSelector((state) => state.blog);

  return (
    <div>
      <Home />
      {isModalOpen ? <CreateModalBlog /> : null}
    </div>
  );
};

export default HomePage;
