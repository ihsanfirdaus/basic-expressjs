const express = require("express");
const routers = require('./routers');
const app = express();
const port = 3000;

const mylogger = function(req, res, next) {
  console.log("logged");
}

// app.use(mylogger);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routers);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
