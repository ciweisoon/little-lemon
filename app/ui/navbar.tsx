'use client'
import Image from "next/image";
import Header_Logo from "../../public/restaurant/header-logo.png";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [ isOpen, setIsOpen ] = useState(false);

  const handleMenu = () => {
    console.log("Open: ", isOpen);
    setIsOpen(!isOpen);
  }

  return (
    <nav className="bg-white">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
            {/* Mobile menu button */}
            <button
              type="button"
              className="relative inline-flex items-center justify-center p-2 text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-300"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
              onClick={handleMenu}
            >
              { isOpen ?
                <svg className="block h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 18L17.94 6M18 18L6.05998 6.00001" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg> :
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              }
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <Image
                className="h-10 w-auto"
                src={Header_Logo}
                alt="Your Company"
              />
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <Link href="/" className="border-b-4 border-yellow-300 text-black px-3 py-2 text-sm font-black" aria-current="page">Home</Link>
                <Link href="#about" className="text-black hover:text-gray-400 px-3 py-2 text-sm font-medium">About</Link>
                <Link href="/menu" className="text-black hover:text-gray-400 px-3 py-2 text-sm font-medium">Menu</Link>
                <Link href="/reservation" className="text-black hover:text-gray-400 px-3 py-2 text-sm font-medium">Reservation</Link>
                <Link href="/login" className="text-black hover:text-gray-400 px-3 py-2 text-sm font-medium">Login</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state. */}
      <div className={`sm: ${isOpen ? "block" : "hidden"}`} id="mobile-menu">
        <div className="space-y-1 px-2 pb-3 pt-2">
          <Link href="/" className="border-b-4 border-yellow-300 text-black px-3 py-2 text-sm font-black block" aria-current="page">Home</Link>
          <Link href="#about" className="text-black hover:text-gray-400 px-3 py-2 text-sm font-medium block">About</Link>
          <Link href="/menu" className="text-black hover:text-gray-400 px-3 py-2 text-sm font-medium block">Menu</Link>
          <Link href="/reservation" className="text-black hover:text-gray-400 px-3 py-2 text-sm font-medium block">Reservation</Link>
          <Link href="/login" className="text-black hover:text-gray-400 px-3 py-2 text-sm font-medium block">Login</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;