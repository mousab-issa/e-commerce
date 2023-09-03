import { Link } from "react-router-dom";
import { BiSearchAlt } from "react-icons/bi";
import { useCookies } from "react-cookie";

import logo from "src/assets/logo.svg";

const Navbar = () => {
  const [cookie, , removeCookie] = useCookies(["token", "id"]);
  return (
    <div className="navbar sticky top-0 z-50 bg-gray-100 lg:px-10 shadow-lg mb-20 py-4">
      <section className="navbar-start">
        <Link to="/">
          <img
            className="w-28 duration-300 hover:cursor-pointer  active:scale-90"
            src={logo}
            alt="Logo"
          />
        </Link>
      </section>
      <section className="navbar-center">
        <div className="form-control flex-row hidden lg:flex">
          <input
            type="text"
            placeholder="What do you want to find?"
            className="w-60 py-2 px-3 rounded-l-lg border-y-2 border-l-2 border-customcyan bg-gray-100"
          />
          <button className="px-2 rounded-r-lg border-y-2 border-r-2 border-customcyan bg-gray-100">
            <div className="duration-300 hover:cursor-pointer  active:scale-75 text-gray-400">
              <BiSearchAlt size={30} />
            </div>
          </button>
        </div>
      </section>
      <section className="navbar-end gap-3">
        <div className="form-control flex flex-row lg:hidden">
          <input
            type="text"
            placeholder="Search"
            className="w-40 py-2 px-3 rounded-l-lg border-y-2 border-l-2 border-customcyan bg-gray-100"
          />
          <button className="px-2 rounded-r-lg border-y-2 border-r-2 border-customcyan bg-gray-100">
            <BiSearchAlt size={30} />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Navbar;
