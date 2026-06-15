import { Bell, CircleUserRound, Search } from "lucide-react";
import logo from "../../assets/logo.png";
import menu from "../../assets/menu.png";
import more from "../../assets/more.png";
import upload from "../../assets/upload.png";
function Navbar({ setSidebar }) {
  return (
    <nav className="sticky top-0 z-10 w-full flex items-center justify-between border border-gray-200 bg-white py-2 px-4">
      <div className="flex items-center gap-3 md:gap-5">
        <img
          src={menu}
          alt="menue"
          className=" w-5 md:w-6.5 "
          onClick={() => setSidebar((prev) => !prev)}
        />
        <img src={logo} alt="logo" className="w-24 md:w-32 cursor-pointer" />
      </div>

      <div className="hidden sm:flex items-center gap-3 border border-gray-300 rounded-full px-4 py-2 w-[40%] max-w-xl">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search"
          aria-label="Search"
          className="flex-1 outline-none"
        />
        <Search size={22} className="cursor-pointer text-gray-600" />
      </div>

      <div className="flex items-center gap-2 md:gap-4">
        <img
          src={upload}
          alt="upload"
          className="w-6 md:w-8 md:h-8 h-6 cursor-pointer"
        />
        <img
          src={more}
          alt="more options"
          className="w-6 h-6 md:w-8 md:h-8 cursor-pointer"
        />
        <Bell
          size={24}
          className=" w-6 h-6 md:w-8 md:h-8  cursor-pointer text-gray-700"
        />
        <CircleUserRound className=" w-6 h-6 md:w-8 md:h-8  cursor-pointer text-gray-700" />
      </div>
    </nav>
  );
}

export default Navbar;
