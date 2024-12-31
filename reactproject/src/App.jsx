import Home from "./Components/FunctionalComponents/Home";
import ClassCompEg from "./Components/ClassComponents/ClassCompEg";
import About from "./Components/FunctionalComponents/About";
import Contact from "./Components/FunctionalComponents/Contact";
import Gallery from "./Components/FunctionalComponents/Gallery";
import NavBar from "./Components/FunctionalComponents/NavBar";
import Footer from "./Components/FunctionalComponents/Footer";
import UseEffect from "./Components/FunctionalComponents/UseEffect";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UseRef from "./Components/FunctionalComponents/UseRef";
function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/about"
            element={
              <About
                college="Kongu Engineering College"
                clg1="Kongu Arts"
                clg2="Naturopathy"
              />
            }
          />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/useeffect" element={<UseEffect />} />
          <Route path="/useref" element={<UseRef />} />
        </Routes>
        <ClassCompEg />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
