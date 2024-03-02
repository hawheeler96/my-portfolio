import { NavLink } from "react-router-dom";
import Switcher from "../Switcher";

function NavBar() {
    return (
      <div className="flex justify-end p-2 font-quicksand font-medium text-xl dark:text-soft-white">
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
        <Switcher />
      </div>
    );
}

export default NavBar;
