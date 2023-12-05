import { useState } from "react";
import { Outlet } from "react-router-dom";
import AppBar from "./AppBar";
import "./Layout.css";
import Sidebar from "./Sidebar";

const Layout = () => {
  const [navHeight, setNavHeight] = useState(0);

  return (
    <div>
      <AppBar {...{ setNavHeight }} />
      <div className="flex fixed">
        <Sidebar />
        <div
          className={`app-container ${navHeight ? "block" : "hidden"} `}
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
