const express = require("express");
const path = require("path");
var app = express();
const PORT = 3001;
var mdb = require("mongoose");
const User = require("./models/users");
const Customer = require("./models/customer");
const cors = require("cors");
require("dotenv").config();

app.use(express.json());

const allowedOrigins = [
  "http://localhost:5173",
  "https://training-azure-eight.vercel.app",
];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true, // Allow cookies if needed
  })
);

mdb
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("MongoDB is Successfully Connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/", (req, res) => {
  console.log("Welcome to Backend Server");
  res.send("Welcome to the Backend Server");
});

app.use(express.static(path.join(__dirname, "public")));

app.get("/json", (req, res) => {
  res.json({ server: "Welcome to Backend", url: "localhost", port: PORT });
});

app.get("/static", (req, res) => {
  res.sendFile("D:/Training/backend/public/index.html");
});

app.get("/next", (req, res) => {
  res.sendFile("D:/Training/backend/public/next.html");
});

app.listen(PORT, () => {
  console.log(`Backend Server Started\nUrl: http://localhost:${PORT}`);
});

app.post("/signup", (req, res) => {
  console.log(req.body);
  // var { firstName, lastName, email, password } = req.body;
  // console.log(firstName, lastName, email);
  try {
    // var newUser = new User({
    //   firstName: firstName,
    //   lastName: lastName,
    //   email: email,
    //   password: password
    // });
    var newUser = new User(req.body);
    newUser.save();

    res.status(200).send("User Added Successfully");
    console.log("User Added Successfully");
  } catch (error) {
    console.log(error);
  }
});

app.post("/customer", (req, res) => {
  console.log(req.body);
  var { userName, email, password, confirmPassword } = req.body;
  try {
    var newCustomer = new Customer({
      userName: userName,
      email: email,
      password: password,
      confirmPassword: confirmPassword,
    });
    newCustomer.save();
    res.status(200).send("Customer Added Successfully");
  } catch (error) {
    console.log(error);
  }
});

app.get("/getsignup", async (req, res) => {
  try {
    var allSignUpRecords = await User.find();
    res.json(allSignUpRecords);
    console.log("All data Fetch");
  } catch (error) {
    console.log(error);
  }
});

app.post("/login", async (req, res) => {
  var { email, password } = req.body;
  try {
    var existingUser = await User.findOne({ email: email });
    console.log(existingUser);
    if (existingUser) {
      if (existingUser.password != password) {
        res.json({ message: "Invalid Credentials", isLoggedIn: false });
      } else {
        res.json({
          message: "Login Successful",
          isLoggedIn: true,
          email: email,
        });
      }
    } else {
      res.json({ message: "Login Failed", isLoggedIn: false });
    }
  } catch (error) {
    console.log(error);
  }
});

app.post("/footer", (req, res) => {
  const { name, email } = req.body;
  try {
  } catch (error) {}
});
