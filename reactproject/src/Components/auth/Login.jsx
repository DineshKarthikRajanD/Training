import { useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Login Successfully");
    setFormData({ email: "", password: "" });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Eamil</label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <label htmlFor="">Password</label>
        <input type="password" />
      </form>
    </div>
  );
};

export default Login;
