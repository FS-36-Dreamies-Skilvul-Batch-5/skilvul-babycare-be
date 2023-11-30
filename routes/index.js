const express = require("express");
const route = express.Router();
const path = require("path");
const fs = require("fs");
const authRoutes = require("./auth-route");
const userRoutes = require("./user-route");
const babyRoutes = require("./baby-route");
const nutritionRecordRoutes = require("./nutrition-record-route");
const vaccinationRecordRoutes = require("./vaccination-record-route");
const vaccineRoutes = require("./vaccine-route");
const articleRoutes = require("./article-route");
const articleCategoryRoutes = require("./article-category-route");

const basePath = path.join(__dirname, '..');
const publicArticlesPath = path.join(basePath, 'public/articles');
const publicUsersPath = path.join(basePath, 'public/users');

route.get("/", (req, res) => {
  res.json({
    message: "Hello!, This is FS-36 BabyCare's Endpoint"
  });
});

route.use("/auth", authRoutes);
route.use("/users", userRoutes);
route.use("/babies", babyRoutes);
route.use("/nutrition-records", nutritionRecordRoutes);
route.use("/vaccination-records", vaccinationRecordRoutes);
route.use("/vaccines", vaccineRoutes);
route.use("/articles", articleRoutes);
route.use("/article-categories", articleCategoryRoutes);

route.get('/article-image/:imageName', (req, res) => {
  const imageName = req.params.imageName;
  const imagePath = path.join(publicArticlesPath, imageName);

  if (fs.existsSync(imagePath)) {
    res.sendFile(imagePath);
  } else {
    res.status(404).send('File not found');
  }
});
route.get('/user-image/:imageName', (req, res) => {
  const imageName = req.params.imageName;
  const imagePath = path.join(publicUsersPath, imageName);

  if (fs.existsSync(imagePath)) {
    res.sendFile(imagePath);
  } else {
    res.status(404).send('File not found');
  }
});

module.exports = route;
