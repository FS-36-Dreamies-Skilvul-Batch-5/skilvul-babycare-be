const express = require("express");
const route = express.Router();
// const authRoutes = require("./auth-route");
// const userRoutes = require("./user-route");
// const todoRoutes = require("./todo-route");

route.get("/", (req, res) => {
  res.json({
    message: "Hello!, This is FS-36 BabyCare's Endpoint"
  })
});

// route.use("/auth", authRoutes);
// route.use("/users", userRoutes);
// route.use("/todos", todoRoutes);

module.exports = route;