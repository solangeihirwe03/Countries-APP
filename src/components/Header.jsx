const Header = () => {
  return (
    <div className="flex flex-col justify-center gap-2 items-center text-white text-center pt-[7rem]">
      <h2 className="font-bold text-[35px]">Country API App</h2>
      <p className="text-[20px]">
        This is a simple app that allows you to search for countries and
        continents using the API.
      </p>
      <input type="search" placeholder="search country by name" className="w-[60%] py-2 pl-3"/>
    </div>
  );
}

export default Header
