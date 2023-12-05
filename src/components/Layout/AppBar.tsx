import { useEffect, useRef } from "react";
import AppLogo from "../../assets/icons/AppLogo";
import Hamburger from "../buttons/Hamburger";
import "./Layout.css";

interface AppBarProps {
  setNavHeight: (value: number) => void;
}
const AppBar = (props: AppBarProps) => {
  const navRef: React.LegacyRef<HTMLElement> = useRef(null);
  useEffect(() => {
    props?.setNavHeight(navRef.current?.clientHeight ?? 0);
  }, [navRef.current?.clientHeight]);

  return (
    <nav className="navbar" ref={navRef}>
      <div className="flex gap-4 items-center">
        <Hamburger />
        <AppLogo />
      </div>
      <input />
      <img />
    </nav>
  );
};

export default AppBar;
