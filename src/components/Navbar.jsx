/* eslint-disable react/prop-types */
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { SiStylelint } from "react-icons/si";
import { Link as ScrollLink } from "react-scroll";

const Navbar = ({ isScrolled }) => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-8 py-5 md:h-24 md:px-24 md:py-7 text-white md:text-lg ${isScrolled ? 'bg-[#14142B] transition-all ease duration-500' : 'bg-transparent transition-all ease duration-500'}`}>
        <ScrollLink
          to="home"
          smooth={true}
          duration={500}
          className="flex justify-center items-center gap-2 cursor-pointer"
        >
          <SiStylelint size={25} className={`${isScrolled ? 'text-white' : 'text-[#1E255E]'}`} />
          <h1 className={`text-2xl font-bold ${isScrolled ? 'text-white' : 'text-[#1E255E]'}`}>SEA Salon</h1>
        </ScrollLink>

        <div className="hidden md:flex">
          <ScrollLink
            to="home"
            smooth={true}
            duration={500}
            className="p-3 m-2 cursor-pointer relative after:bg-white after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300"
          >
            Home
          </ScrollLink>
          <ScrollLink
            to="about"
            smooth={true}
            duration={500}
            offset={-110}
            className="p-3 m-2 cursor-pointer relative after:bg-white after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300"
          >
            About
          </ScrollLink>
          <ScrollLink
            to="services"
            smooth={true}
            duration={500}
            offset={-110}
            className="p-3 m-2 cursor-pointer relative after:bg-white after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300"
          >
            Services
          </ScrollLink>
          <ScrollLink
            to="contact"
            smooth={true}
            duration={500}
            offset={-110}
            className="p-3 m-2 cursor-pointer relative after:bg-white after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300"
          >
            Contact
          </ScrollLink>
        </div>

        <ScrollLink to="booking" smooth={true} duration={500} offset={-110}>
          <button className={`hidden md:block rounded-xl px-5 py-3 cursor-pointer transition-all ease ${isScrolled ? 'duration-300 border-2 border-white text-white hover:bg-white hover:text-[#1E255E]' : 'duration-300 border-2 border-[#14142B] text-[#1E255E] hover:bg-[#14142B] hover:text-white'}`}>
            Book Now
          </button>
        </ScrollLink>


        <div onClick={handleNav} className="block md:hidden text-[#1E255E]">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
      </nav>

      <nav
        className={
          nav
            ? "fixed md:hidden left-0 top-0 w-[60%] h-full bg-[#14142B] ease-in-out duration-500 z-20"
            : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%] z-20"
        }
      >
        <ScrollLink
          to="home"
          smooth={true}
          duration={500}
          className="cursor-pointer"
          onClick={handleNav}
        >
          <h1 className="w-full text-2xl font-bold text-white m-4">
            SEA Salon
          </h1>
        </ScrollLink>

        <div className="flex flex-col">
          <ScrollLink
            to="home"
            smooth={true}
            duration={500}
            className="text-white p-3 m-2 cursor-pointer relative after:bg-white after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-1/2 after:transition-all after:duration-300"
            onClick={handleNav}
          >
            Home
          </ScrollLink>
          <ScrollLink
            to="about"
            smooth={true}
            duration={500}
            className="text-white p-3 m-2 cursor-pointer relative after:bg-white after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-1/2 after:transition-all after:duration-300"
            onClick={handleNav}
          >
            About
          </ScrollLink>
          <ScrollLink
            to="services"
            smooth={true}
            duration={500}
            className="text-white p-3 m-2 cursor-pointer relative after:bg-white after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300"
            onClick={handleNav}
          >
            Services
          </ScrollLink>
          <ScrollLink
            to="contact"
            smooth={true}
            duration={500}
            className="text-white p-3 m-2 cursor-pointer relative after:bg-white after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-1/2 after:transition-all after:duration-300"
            onClick={handleNav}
          >
            Contact
          </ScrollLink>
          <ScrollLink
            to="booking"
            smooth={true}
            duration={500}
            className="text-white p-3 m-2 cursor-pointer relative after:bg-white after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-1/2 after:transition-all after:duration-300"
            onClick={handleNav}
          >
            Book Now
          </ScrollLink>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
