const express = require("express");
const logger = require("./middleware/logger");
const studentRoutes = require("./routes/studentRoutes");

const app = express();
const PORT = 3000;

app.use(express.json()); 
app.use(logger); 

app.use("/students", studentRoutes);

app.use(function (req, res) {
  res.status(404).json({ message: "Route not found" });
});
app.listen(PORT, function () {
  console.log("Server is running on http://localhost:" + PORT);
});
