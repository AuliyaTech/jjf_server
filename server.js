  
const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();
const routes = require("./routes")
// const mongoose = require("mongoose");


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(routes);
// router.use("/", res => res.send("Hello World"));outes);
// const router = express.Router()
// router.use("/", res => res.send("Hello World"));

// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/api");


app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});