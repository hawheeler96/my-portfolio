import { NavLink } from "react-router-dom";
import Switcher from "../Switcher";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Transition } from "@headlessui/react";

const NavLinks = ({ isOpen, setIsOpen, toggleNavBar }) => {
    return (
      <>
        {/* <Transition.Root show={isOpen}> */}
        <NavLink
          to="/"
          onClick={toggleNavBar}
          className="mx-2 hover:text-rose dark:hover:text-xanthous"
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          onClick={toggleNavBar}
          className="mx-2 hover:text-rose dark:hover:text-xanthous"
        >
          About
        </NavLink>
        <NavLink
          to="/projects"
          onClick={toggleNavBar}
          className="mx-2 hover:text-rose dark:hover:text-xanthous"
        >
          Projects
        </NavLink>
        <NavLink
          to="/articles"
          onClick={toggleNavBar}
          className="mx-2 hover:text-rose dark:hover:text-xanthous"
        >
          Articles
        </NavLink>
        <NavLink
          to="/resume"
          onClick={toggleNavBar}
          className="mx-2 hidden md:flex hover:text-rose dark:hover:text-xanthous"
        >
          Resume
        </NavLink>
        {/* </Transition.Root> */}
      </>
    );
}

function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavBar = () => {
      if (window.innerWidth <= 768) {
        setIsOpen(!isOpen);
      }
    };

    return (
      <div className="fixed w-full flex justify-end p-2 font-quicksand font-medium text-xl z-50 bg-white dark:bg-midnight dark:text-soft-white">
        <div className="hidden md:flex">
          <NavLinks
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            toggleNavBar={toggleNavBar}
          />
        </div>
        <div className="md:hidden">
          <button onClick={toggleNavBar}>{isOpen ? <X /> : <Menu />}</button>
        </div>
        {isOpen && (
          <div className="flex basis-full flex-col items-center">
            <NavLinks
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              toggleNavBar={toggleNavBar}
            />
          </div>
        )}
        <Switcher />
      </div>
    );
}

export default NavBar;
