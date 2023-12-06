import { useState } from "react";
import { Outlet } from "react-router-dom";
import AppBar from "./AppBar/AppBar";
import Sidebar from "./SideBar/SideBar";

const Layout = () => {
  const [navHeight, setNavHeight] = useState(0);

  return (
    <div>
      <AppBar {...{ setNavHeight }} />
      <div className="flex fixed ">
        <Sidebar {...{ navHeight }} />
        <div
          className={`px-8 py-6 ${navHeight ? "block" : "hidden"} `}
          style={{
            marginTop: navHeight,
          }}
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
