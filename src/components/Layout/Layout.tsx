import { useEffect, useRef, useState } from "react";
import { Outlet } from "react-router-dom";
import AppLogo from "../../assets/icons/AppLogo";
import "./Layout.css";
import Hamburger from "../buttons/Hamburger";
import Sidebar from "./Sidebar";

const Layout = () => {
  const navRef: React.LegacyRef<HTMLElement> = useRef(null);
  const [navHeight, setNavHeight] = useState(0);

  useEffect(() => {
    setNavHeight(navRef.current?.clientHeight ?? 0);
  }, [navRef.current?.clientHeight]);

  return (
    <div>
      <nav className="navbar" id={"navbar"} ref={navRef}>
        <Hamburger />
        <AppLogo />
        <input />
        <img />
      </nav>
      <div className="flex fixed">
        <Sidebar />
        {navHeight && (
          <section className="app-container" style={{ marginTop: navHeight }}>
            <Outlet />
          </section>
        )}
      </div>
    </div>
  );
};

export default Layout;
