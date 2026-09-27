const express = require("express");
const logger = require("./middleware/logger");
const studentRoutes = require("./routes/studentRoutes");

const app = express();
const PORT = 3000;

app.use(express.json()); 
app.use(logger); // our custom logger runs for every request

app.use("/students", studentRoutes);

// runs if someone visits a route that doesn't exist
app.use(function (req, res) {
  res.status(404).json({ message: "Route not found" });
});

app.listen(PORT, function () {
  console.log("Server is running on http://localhost:" + PORT);
});
