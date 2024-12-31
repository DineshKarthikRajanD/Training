import "../../assets/css/Footer.css";

const Footer = () => {
  return (
    <div className="one">
      <div>
        <form action="">
          <label htmlFor="">Name</label>
          <input type="text" />
          <label htmlFor="">Email</label>
          <input type="email" />
        </form>
        <button>Send</button>
      </div>
      <div className="container1">
        <h3>Company</h3>
        <h5>About</h5>
        <h5>Experts and Spokesmodels</h5>
      </div>
      <div className="container2">
        <h3>Customer Service</h3>
        <h5>Contact us</h5>
        <h5>My Account</h5>
        <h5>Store Locator</h5>
        <h5>Reedem Rewards</h5>
      </div>
      <div className="container3">
        <h3>More to Explore</h3>
        <h5>Gallery</h5>
        
        <h5>My Account</h5>
        <h5>Contact us</h5>
        <h5>Reedem Rewards</h5>
      </div>
    </div>
  );
};

export default Footer;
