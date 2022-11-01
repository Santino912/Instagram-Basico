const express = require("express");
const app = express();
const { PORT } = process.env;

app.listen(3000, () => {
  try {
    console.log(`Server listening on port ${3000}`);
  } catch (err) {
    console.log("No");
  }
});
