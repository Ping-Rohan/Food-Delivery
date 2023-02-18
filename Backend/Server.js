const mongoose = require("mongoose");
const app = require("./App");
require("dotenv").config();

// connecting to DB
mongoose.connect(process.env.DB_LINK).then(() => {
  console.log("Connected to DB");
});

const PORT = process.env.PORT || 5000;

// listening requests
app.listen(PORT, () => {
  console.log(`Server started at port : ${PORT}`);
});
