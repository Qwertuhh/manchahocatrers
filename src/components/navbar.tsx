import clsx from "clsx";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

interface Links {
  name: string;
  link: string;
}

const links: Links[] = [
  {
    name: "highlights",
    link: "#highlights",
  },
  {
    name: "menu",
    link: "/manchaho_catrers_menu.pdf",
  },
  {
    name: "contact",
    link: "#contact",
  },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isHoveringTop, setIsHoveringTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Hide navbar when scrolling (both up and down) after 100px
      if (currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    const handleMouseMove = (e: MouseEvent) => {
      // Show navbar when hovering at top of page
      if (e.clientY <= 100) {
        setIsHoveringTop(true);
      } else {
        setIsHoveringTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [lastScrollY]);

  // Hide navbar when clicking anchor links
  const handleLinkClick = () => {
    setIsVisible(false);
    setMenuOpen(false);
  };

  const shouldShow = isVisible || isHoveringTop || lastScrollY <= 100;

  return (
    <nav
      className={clsx(
        "bg-stone-800/80 py-4 questrial-regular px-4 rounded-2xl fixed top-0 left-0 right-0 z-50 m-4 transition-transform duration-300 ease-in-out",
        shouldShow
          ? "translate-y-0"
          : "-translate-y-full border border-neutral-100/40"
      )}
    >
      <div className="flex justify-between items-center">
        <div className="text-white text-xl font-bold wix-madefor-display-semibold">
          Manchaho Catrers
        </div>

        {/* Hamburger Icon for Mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white text-2xl cursor-pointer"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

        {/* Menu (hidden on mobile unless open) */}
        <ul
          className={clsx(
            "ibm-plex-mono-medium absolute md:static top-full left-0 w-full md:w-auto md:flex gap-4 md:gap-10 px-6 py-4 md:p-0 rounded-2xl transition-all duration-300 ease-in-out not-md:bg-stone-800/80",
            menuOpen ? "flex flex-col" : "hidden",
            menuOpen ? "mt-4" : "mt-0"
          )}
        >
          {links.map(({ name, link }) => (
            <li
              key={name}
              className="flex items-center gap-2 text-white py-2 md:py-0 cursor-selectable"
            >
              <a
                href={link}
                className="capitalize hover:underline underline-offset-2 hover:underline-offset-4 transition-all duration-300"
                onClick={link.startsWith("#") ? handleLinkClick : undefined}
              >
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
