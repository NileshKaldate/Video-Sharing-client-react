import { ReactElement, useEffect, useRef, useState } from "react";
import AppLogo from "../../assets/icons/AppLogo";
import "./Layout.css";

const Layout = (props: { children: ReactElement }) => {
  const navRef: React.LegacyRef<HTMLElement> = useRef(null);
  const [navHeight, setNavHeight] = useState(0);

  useEffect(() => {
    setNavHeight(navRef.current?.clientHeight ?? 0);
  }, [navRef.current?.clientHeight]);

  return (
    <div>
      <nav className="navbar" id={"navbar"} ref={navRef}>
        <AppLogo />
        <input />
        <img />
      </nav>
      {navHeight ? (
        <div className="app-container" style={{ marginTop: navHeight }}>
          {props.children}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Layout;
