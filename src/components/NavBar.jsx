 import Bras from "./Bras";

 const NavBar = () => {
  return (
    <div className="w-[100%] flex justify-around">
      <a href="" className="text-[#0000ff] text-[45px] font-bold">
        Logoipsum
      </a>
      <a href="" className="sm:text-[white] md:invisible">
        <Bras />
      </a>
      <a href="" className="text-[white] text-[20px] py-6 sm:invisible md:visible">
        countries
      </a>
    </div>
  );
}

export default NavBar
