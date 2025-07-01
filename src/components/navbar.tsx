import {Contact, Menu, Sparkle, SquareMenu, X} from 'lucide-react';
import type React from 'react';

interface Links {
  name: string;
  link: string;
  icon: React.ReactNode;
}
const links: Links[] = [
  {
    name: "highlights",
    link: "#highlights",
    icon: <Sparkle />,
  },
  {
    name: "menu",
    link: "/manchaho_catrers_menu.pdf",
    icon: <SquareMenu />,
  },
  {
    name: "contact",
    link: "#contact",
    icon: <Contact />,
  },
];
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-stone-800 py-4 questrial-regular px-4 rounded-2xl fixed top-0 left-0 right-0 z-50 m-4">
      <div className="flex justify-between items-center">
        <div className="text-white text-xl font-bold">Manchaho</div>

        {/* Hamburger Icon for Mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white text-2xl cursor-pointer"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

        {/* Menu (hidden on mobile unless open) */}
        <ul
          className={`absolute md:static top-full left-0 w-full md:w-auto bg-stone-800 md:flex gap-4 md:gap-10 px-6 py-4 md:p-0 rounded-2xl transition-all duration-300 ease-in-out ${
            menuOpen ? "flex flex-col" : "hidden"
          }`}
        >
          {links.map(({ name, link, icon }) => (
            <li
              key={name}
              className="flex items-center gap-2 text-white py-2 md:py-0 cursor-selectable"
            >
              {icon}
              <a href={link} style={{ textTransform: "capitalize" }}>
                {name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;