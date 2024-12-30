import Home from "./Components/FunctionalComponents/Home";
import ClassCompEg from "./Components/ClassComponents/ClassCompEg";
import About from "./Components/FunctionalComponents/About";
import Contact from "./Components/FunctionalComponents/Contact";
import Gallery from "./Components/FunctionalComponents/Gallery";
import NavBar from "./Components/FunctionalComponents/NavBar";
function App() {
  return (
    <>
      <NavBar />
      <Home />
      <About />
      <Gallery />
      <Contact />
      <ClassCompEg />
    </>
  );
}

export default App;
