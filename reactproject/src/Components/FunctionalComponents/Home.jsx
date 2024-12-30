import "../../assets/css/Home.css";

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
    </>
  );
};

export default Home;
