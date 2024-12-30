import "../../assets/css/NavBar.css";

const NavBar = () => {
  return (
    <div>
      <header>
        <nav>
          <div className="container">
            <h1>FullStack</h1>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Gallery</li>
              <li>Contact</li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default NavBar;
