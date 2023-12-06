import { useEffect, useRef } from "react";
import AppLogo from "../../../assets/icons/AppLogo";
import HamburgerMenu from "../../buttons/HamburgerMenu/HamburgerMenu";
import "./AppBar.css";

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
        <HamburgerMenu />
        <AppLogo />
      </div>
      <input />
      <img />
    </nav>
  );
};

export default AppBar;
