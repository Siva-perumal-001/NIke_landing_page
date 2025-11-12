import { useState } from "react";
import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../Constants";

const Nav = () => {
  const [menu, setMenu] = useState(false);

  return (
    <header className="padding-x py-8 absolute z-10 w-full bg-white shadow-md">
      <nav className="flex justify-between items-center max-container">
        {/* Logo */}
        <a href="/">
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </a>

        {/* Desktop Links */}
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-gray-600 hover:text-coral-red transition"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger icon (only visible on mobile) */}
        <div
          className="lg:hidden flex flex-col cursor-pointer"
          onClick={() => setMenu(!menu)}
        >
          <img src={hamburger} alt="menu" width={25} height={25} />
        </div>
      </nav>

      {/* Mobile dropdown menu */}
      {menu && (
        <ul className="flex flex-col lg:hidden bg-white border-t border-gray-200 mt-2 animate-fadeIn">
          {navLinks.map((item) => (
            <li
              key={item.label}
              className="py-3 px-5 hover:bg-gray-100 text-gray-700 cursor-pointer"
              onClick={() => setMenu(false)} // closes menu when clicked
            >
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default Nav;
