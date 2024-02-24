const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URL);

const userSchema = mongoose.schema({
  username: String,
  password: String,
  firstName: String,
  lastName: String,
});

const User = mongoose.model("User", userSchema);

module.exports = {
  User,
};
