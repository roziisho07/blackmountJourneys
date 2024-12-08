import { useState } from "react";
import Link from "next/link";

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      {/* Hamburger Icon */}
      <button
        className="text-white focus:outline-none focus:ring-2 focus:ring-cyan-700 md:hidden"
        onClick={toggleMenu}
      >
        ☰
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-10 right-0 bg-cyan-950 backdrop-blur-md shadow-lg rounded-md w-48 z-20">
          <ul className="flex flex-col text-left">
            <li>
              <Link
                href="/"
                className="block px-4 py-2 text-white hover:text-[#7bbcb0] hover:bg-cyan-800 rounded-t-md"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="block px-4 py-2 text-white hover:text-[#7bbcb0] hover:bg-cyan-800"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/hotels"
                className="block px-4 py-2 text-white hover:text-[#7bbcb0] hover:bg-cyan-800"
              >
                Hotels
              </Link>
            </li>
            <li>
              <Link
                href="/tours"
                className="block px-4 py-2 text-white hover:text-[#7bbcb0] hover:bg-cyan-800"
              >
                Packages
              </Link>
            </li>
            <li>
              <Link
                href="/vehicles"
                className="block px-4 py-2 text-white hover:text-[#7bbcb0] hover:bg-cyan-800"
              >
                Vehicles
              </Link>
            </li>
            <li>
              <Link
                href="/posts"
                className="block px-4 py-2 text-white hover:text-[#7bbcb0] hover:bg-cyan-800"
              >
                Blogs
              </Link>
            </li>
            <li>
              <Link
                href="/help"
                className="block px-4 py-2 text-white hover:text-[#7bbcb0] hover:bg-cyan-800 rounded-b-md"
              >
                Help
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
