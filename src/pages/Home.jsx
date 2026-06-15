import Feed from "../components/ui/Feed";
import Sidebar from "../components/ui/Sidebar";
import useLenis from "../hooks/useLines";
const Home = ({ sidebar }) => {
  useLenis();
  return (
    <>
      <Sidebar sidebar={sidebar} />
      <div
        className={`bg-white  py-5 ${sidebar ? "pl-[11%]" : "pl-[15%] md:pl-[5%]"} `}
      >
        <Feed />
      </div>
    </>
  );
};

export default Home;
