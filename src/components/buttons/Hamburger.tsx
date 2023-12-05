const Hamburger = () => {
  const barClass = "h-[1px] bg-white";
  return (
    <div className="cursor-pointer flex flex-col gap-[5px] w-10 px-3 py-3  hover:bg-hover-bg rounded-[50%]">
      {[1, 2, 3].map((i: number) => (
        <div className={barClass} key={i}></div>
      ))}
    </div>
  );
};

export default Hamburger;
