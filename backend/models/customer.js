var mdb = require("mongoose");

var customerSchema = mdb.Schema({
  userName: String,
  email: String,
  password: String,
  confirmPassword: String,
});

customer_schema = mdb.model("customer", customerSchema);

module.exports = customer_schema;
