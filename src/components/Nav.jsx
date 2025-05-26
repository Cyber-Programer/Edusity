import React, { useEffect, useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { IoClose } from "react-icons/io5";

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`w-full py-4 fixed z-50 flex justify-between px-6 items-center transition-all duration-300 ${
        scrolled ? "bg-nav-bg shadow-lg" : "bg-transparent"
      }`}
    >
      <img className="w-36" src="/assets/logo.png" alt="logo img" />

      {/* Desktop Menu */}
      <ul className="hidden gap-8 font-semibold text-white capitalize md:flex">
        <li><a href="#home">home</a></li>
        <li><a href="#program">program</a></li>
        <li><a href="#about">about us</a></li>
        <li><a href="#campus">campus</a></li>
        <li><a href="#testimonials">testimonials</a></li>
        <li>
          <a className="px-5 py-2 text-black bg-white rounded-xl" href="#contact">
            contact us
          </a>
        </li>
      </ul>

      {/* Mobile Hamburger */}
      <CiMenuBurger
        onClick={() => setShowNav(true)}
        className={`text-3xl text-white cursor-pointer md:hidden`}
      />

      {/* Mobile Menu Overlay */}
      {showNav && (
        <div className="fixed top-0 left-0 z-50 flex flex-col items-center justify-center w-full pb-10 space-y-8 text-white transition-all bg-nav-bg md:hidden">
          <IoClose
            onClick={() => setShowNav(false)}
            className="absolute text-4xl cursor-pointer top-6 right-6"
          />
          <ul className="flex flex-col items-center gap-6 text-xl font-medium capitalize">
            <li><a href="#" onClick={() => setShowNav(false)}>home</a></li>
            <li><a href="#" onClick={() => setShowNav(false)}>program</a></li>
            <li><a href="#" onClick={() => setShowNav(false)}>about us</a></li>
            <li><a href="#" onClick={() => setShowNav(false)}>campus</a></li>
            <li><a href="#" onClick={() => setShowNav(false)}>testimonials</a></li>
            <li>
              <a
                className="px-5 py-2 text-black bg-white rounded-xl"
                href="#"
                onClick={() => setShowNav(false)}
              >
                contact us
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Nav;
