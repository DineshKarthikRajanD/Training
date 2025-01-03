import "../../assets/css/NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <header>
        <nav>
          <div className="container">
            <h1>FullStack</h1>
            <ul>
              <Link to="/">
                <li>Home</li>
              </Link>
              <Link to="/about">
                <li>About</li>
              </Link>
              <Link to="/gallery">
                <li>Gallery</li>
              </Link>
              <Link to="/contact">
                <li>Contact</li>
              </Link>
              <Link to="/useeffect">
                <li>UseEffect</li>
              </Link>
              <Link to="/useref">
                <li>UseRef</li>
              </Link>
              <Link to="/usecontext">
                <li>UseContext</li>
              </Link>
              <Link to="/usememo">
                <li>UseMemo</li>
              </Link>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default NavBar;
