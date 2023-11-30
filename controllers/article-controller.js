const { Article, Article_Category } = require("../models");
const fs = require('fs');
const path = require('path');
const basePath = path.join(__dirname, '..');
const publicArticlesPath = path.join(basePath, 'public/articles');

module.exports = {
  getAllArticle: async (req, res) => {
    try {
      const articles = await Article.findAll({
        include: {
          model: Article_Category,
          attributes: ["id", "name"], // Specify the attributes you want to include from the Category model
        },
      });

      res.status(200).json({
        message: "Success get all articles",
        data: articles,
      });
    } catch (error) {
      res.status(500).json({
        message: "Internal Server Error",
        error: error,
      });
    }
  },
  getArticleById: async (req, res) => {
    try {
      const article = await Article.findOne({
        where: {
          id: req.params.id,
        },
      });

      if (article) {
        res.status(200).json({
          message: `Success to get article`,
          data: article,
        });
      } else {
        res.status(404).json({
          message: `There's no article with that id`,
        });
      }
    } catch (error) {
      res.status(500).json({
        message: "Internal Server Error",
        error: error,
      });
    }
  },
  createArticle: async (req, res) => {
    const image = req.file ? req.file.filename : null;
    const newData = req.body;
    const currentDate = new Date();
    const formattedDate = currentDate.toISOString().split('T')[0];
    
    newData.posted_on = formattedDate;
    newData.img_url = image;

    console.log(newData);

    try {
      await Article.create(newData);

      res.status(201).json({
        message: "Success to create a new article",
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: "Internal Server Error from Inside",
        error: error,
      });
    }
  },
  updateArticle: async (req, res) => {
    const articleId = req.params.id;
    const newData = req.body;
  
    try {
      const existingArticle = await Article.findByPk(articleId);
      if (!existingArticle) {
        return res.status(404).json({
          error: "Article not Found",
        });
      } else {
        if (req.file) {
          newData.img_url = req.file.filename;
        }
  
        const updatedArticle = await Article.update(newData, {
          where: {
            id: articleId,
          },
        });
  
        if (updatedArticle) {
          res.status(200).json({
            message: "Success to update the article",
          });
        }
      }
    } catch (error) {
      res.status(500).json({
        message: "Internal Server Error",
        error: error,
      });
    }
  },
  deleteArticle: async (req, res) => {
    const articleId = req.params.id;
  
    try {
      const existingArticle = await Article.findByPk(articleId);
  
      if (!existingArticle) {
        return res.status(404).json({
          message: 'Article not found',
        });
      }

      const imageName = existingArticle.img_url;

      await existingArticle.destroy();

      if (imageName) {
        const imagePath = path.join(publicArticlesPath, imageName);

        if (fs.existsSync(imagePath)) {
          fs.unlinkSync(imagePath);
        }
      }
  
      return res.status(200).json({
        message: 'Article deleted successfully',
      });
    } catch (error) {
      res.status(500).json({
        message: 'Internal Server Error',
        error: error,
      });
    }
  }
};
