import HomeIcon from "../../../assets/icons/HomeIcon";
import { useWindowSize } from "../../../hooks/useWindowSize";
import "./SideBar.css";

const Sidebar = ({ navHeight }: { navHeight: number }) => {
  const [width, height] = useWindowSize();
  return (
    <div className={`sidebar-container py-[55px] px-1`}>
      <div className="icon-container">
        <HomeIcon />
      </div>
    </div>
  );
};

export default Sidebar;
