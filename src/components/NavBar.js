import { NavLink } from "react-router-dom";
import Switcher from "../Switcher";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Transition } from "@headlessui/react";

const NavLinks = ({ isOpen }) => {
    return (
      <>
        {/* <Transition.Root show={isOpen}> */}
          <NavLink
            to="/"
            className="mx-2 hover:text-rose dark:hover:text-xanthous"
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className="mx-2 hover:text-rose dark:hover:text-xanthous"
          >
            About
          </NavLink>
          <NavLink
            to="/projects"
            className="mx-2 hover:text-rose dark:hover:text-xanthous"
          >
            Projects
          </NavLink>
          <NavLink
            to="/articles"
            className="mx-2 hover:text-rose dark:hover:text-xanthous"
          >
            Articles
          </NavLink>
          <NavLink
            to="/resume"
            className="mx-2 hover:text-rose dark:hover:text-xanthous"
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
        setIsOpen(!isOpen);
    }

    return (
      <div className="flex justify-end p-2 font-quicksand font-medium text-xl dark:text-soft-white">
        <div className="hidden md:flex">
          <NavLinks isOpen={isOpen} />
        </div>
        <div className="md:hidden">
          <button onClick={toggleNavBar}>{isOpen ? <X /> : <Menu />}</button>
        </div>
          {isOpen && (
            <div className="flex basis-full flex-col items-center">
              <NavLinks isOpen={isOpen} />
            </div>
          )}
        <Switcher />
      </div>
    );
}

export default NavBar;
