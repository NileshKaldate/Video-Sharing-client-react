const Hamburger = () => {
  const barClass = "w-5 h-0.5 bg-white";
  return (
    <div className="cursor-pointer flex flex-col gap-1 w-5">
      {[1, 2, 3].map((i: number) => (
        <div className={barClass} key={i}></div>
      ))}
    </div>
  );
};

export default Hamburger;
