// import "../../assets/css/Home.css";

var Home = () => {
  var styling = {
    fontSize: "30px",
    textDecoration: "underline",
    color: "blue",
  };
  return (
    <>
      <h1 style={styling}>This is Home Page</h1>
      <h2 id="idSEg">Testing Styling</h2>
      <p className="box-model">Hello</p>
      <div>
        <h1>Task1:</h1>
        <p>
          In a React app, index.html is the single HTML file that serves as the
          entry point. It contains a root where React will render the app. The
          file also includes basic meta tags, external resources like CSS, and
          the necessary script links for the bundled JavaScript. React
          dynamically updates the content inside this page without reloading it,
          making it a Single Page Application (SPA).
        </p>
        <h1>Task2:</h1>
        <p>
          In React, CSS can be used in several ways: Normal CSS: You can import
          traditional CSS files into components. CSS Modules: Scoped CSS
          specific to components to avoid global styles. Styled Components:
          Write CSS directly in JavaScript using a library. Inline Styles: Apply
          CSS directly as JavaScript objects. All these methods ultimately
          result in standard CSS being applied to style your React components.
        </p>
      </div>
    </>
  );
};

export default Home;
