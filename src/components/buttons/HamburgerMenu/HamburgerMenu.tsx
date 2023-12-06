import "./HamburgerMenu.css";
const HamburgerMenu = () => {
  return (
    <div className="hamburger">
      {[1, 2, 3].map((i: number) => (
        <div className="bar" key={i}></div>
      ))}
    </div>
  );
};

export default HamburgerMenu;
