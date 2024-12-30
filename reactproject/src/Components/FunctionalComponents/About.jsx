const About = (props) => {
  return (
    <section>
      <h1>This is About Page</h1>
      <h2 style={{textAlign: "center"}}>Learning props</h2>
      {/* eslint-disable-next-line react/prop-types */}
      <h2>Iam teaching in {props.college}</h2>
      {/* eslint-disable-next-line react/prop-types */}
      <h3>Other Colleges: {props.clg1},{props.clg2}</h3>
    </section>
  );
};

export default About;
