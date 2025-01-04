import "../../assets/css/NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  const email = localStorage.getItem("email");

  const handleLogut = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("email");
    window.location.reload()
  };

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
              {isLoggedIn ? (
                <>
                  <li>{email}</li>
                  <li>
                    <button onClick={handleLogut}>Logout</button>
                  </li>
                </>
              ) : (
                <>
                  <Link to="/register">
                    <li>Register</li>
                  </Link>
                  <Link to="/login">
                    <li>Login</li>
                  </Link>
                </>
              )}
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default NavBar;
