'use client'
import Image from "next/image";
import Header_Logo from "@/public/restaurant/header-logo.png";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const navigation = [
  { name: 'Home', href: '/', current: true },
  { name: 'About', href: '/#about', current: false },
  { name: 'Menu', href: '/menu', current: false },
  { name: 'Reservation', href: '/reservation', current: false },
  { name: 'Login', href: '/login', current: false },
]

const Navbar = () => {
  const [ isOpen, setIsOpen ] = useState(false);
  const [ currentNav, setCurrentNav ] = useState(navigation);
  const pathname = usePathname();

  const handleMenu = () => {
    console.log("Open: ", isOpen);
    setIsOpen(!isOpen);
  }

  const updateCurrentNavigation = (pathname: string) => {
    const updatedNav = currentNav.map((link) => {
      if (!link.current && link.href === pathname) {
        return { ...link,  current: true}
      }

      if (link.current && link.href !== pathname) {
        return { ...link, current: false}
      }

      return link;
    });

    setCurrentNav(updatedNav);
  };

  useEffect(() => {
    // console.log(pathname);
    updateCurrentNavigation(pathname)
  }, [pathname]);

  return (
    <nav className="bg-white">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
            {/* Mobile menu button */}
            <button
              type="button"
              className="relative inline-flex items-center justify-center p-2 text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-custom-yellow"
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
                alt="Little Lemon Logo"
              />
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {
                  currentNav.map((link) => {
                    return (
                      <Link
                        key={link.name}
                        href={link.href}
                        className={
                          link.current ?
                          "border-b-4 border-custom-yellow text-black px-3 py-2 text-sm font-black" :
                          "text-black hover:text-gray-400 px-3 py-2 text-sm font-medium"
                        }
                        aria-current={link.current}
                      >{link.name}</Link>
                    )
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state. */}
      <div className={`sm: ${isOpen ? "block" : "hidden"}`} id="mobile-menu">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {
            currentNav.map((link) => {
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={
                    link.current ?
                      "border-b-4 border-custom-yellow text-black px-3 py-2 text-sm font-black block" :
                      "text-black hover:text-gray-400 px-3 py-2 text-sm font-medium block"
                    }
                  aria-current={link.current}
                >{link.name}</Link>
              )
            })
          }
        </div>
      </div>
    </nav>
  );
}

export default Navbar;