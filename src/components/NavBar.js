import { Link } from "react-router-dom";
import Switcher from "../Switcher";

function NavBar() {
    return (
      <div className="flex justify-end m-2">
        <Link to="/" className="mx-2 font-quicksand font-medium">
          Home
        </Link>
        <Link to="/about" className="mx-2 font-quicksand font-medium">
          About
        </Link>
        <Link to="/projects" className="mx-2 font-quicksand font-medium">
          Projects
        </Link>
        <Link to="/articles" className="mx-2 font-quicksand font-medium">
          Articles
        </Link>
        <Link to="/resume" className="mx-2 font-quicksand font-medium">
          Resume
        </Link>
        <Switcher />
      </div>
    );
}

export default NavBar;
