import HomeIcon from "../../../assets/icons/HomeIcon";
import ShortsIcon from "../../../assets/icons/ShortsIcon";
import { useWindowSize } from "../../../hooks/useWindowSize";
import "./SideBar.css";

const Sidebar = ({ navHeight }: { navHeight: number }) => {
  const [width, height] = useWindowSize();
  return (
    <div className={`sidebar-container py-[55px]`}>
      <HomeIcon />
      <ShortsIcon />
    </div>
  );
};

export default Sidebar;
