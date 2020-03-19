  
const express = require("express");
const PORT = process.env.PORT || 3010;
const app = express();
const routes = require("./routes")
const path = require('path');
// const mongoose = require("mongoose");


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
}

app.use(routes);



app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});