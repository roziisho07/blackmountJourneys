"use client";

import Link from "next/link";
import DropdownMenu from "./Dropdown";
// import DropdownMenu from "./Dropdown";

export default function Header() {
  return (
    <header className="sticky top-0 left-0 w-full flex items-center justify-between px-4 py-3 bg-opacity-100 bg-cyan-950 backdrop-blur-md z-30">
      {/* Logo */}
      <h1 className="text-2xl font-bold text-white px-2">Blackmount</h1>

      {/* Navigation */}
      <nav className="hidden md:flex flex-1 justify-center items-center space-x-4 lg:space-x-8 ">
        <Link href="/" className="text-white hover:text-[#7bbcb0]">
          Home
        </Link>
        <Link href="#" className="text-white hover:text-[#7bbcb0]">
          About
        </Link>
        <Link href="#" className="text-white hover:text-[#7bbcb0]">
          Packages
        </Link>
        <Link href="#" className="text-white hover:text-[#7bbcb0]">
          Hotels
        </Link>
        <Link href="#" className="text-white hover:text-[#7bbcb0]">
          Vehicles
        </Link>
        <Link href="/posts" className="text-white hover:text-[#7bbcb0]">
          Blogs
        </Link>
        <Link href="#" className="text-white hover:text-[#7bbcb0]">
          Help
        </Link>
      </nav>

      {/* Mobile Dropdown Menu */}
      <div className="md:hidden">
        <DropdownMenu />
      </div>

      {/* Contact Button */}
      <div className="hidden md:flex items-center">
        <Link
          href="/"
          className="px-6 py-2 bg-[#62968d] hover:bg-[#253835] text-white rounded-3xl"
        >
          Contact
        </Link>
      </div>
    </header>
  );
}
