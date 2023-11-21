const { Article } = require("../models");

module.exports = {
  getAllArticle: async (req, res) => {
    try {
      const articles = await Article.findAll();

      res.status(200).json({
        message: "Success get all articles",
        data: articles
      })
    } catch (error) {
      res.status(500).json({
        message: "Internal Server Error",
        error: error
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

      if(article){
        res.status(200).json({
          message: `Success to get article`,
          data: article,
        })
      } else {
        res.status(404).json({
          message: `There's no article with that id`,
        })
      }
    } catch (error) {
      res.status(500).json({
        message: "Internal Server Error",
        error: error
      });
    }
  },
  createArticle: async (req, res) => {
    let data = req.body;

    try {
      await Article.create(data);
      
      res.status(201).json({
        message: "Success to create new article",
      });
    } catch (error) {
      res.status(500).json({
        message: "Internal Server Error",
        error: error
      });
    }
  },
  updateArticle: async (req, res) => {
    let articleId = req.params.id;
    let newData = req.body;

    try {
      const existingArticle = await Article.findByPk(articleId);
      if (!existingArticle) {
        return res.status(404).json({ 
          error: "Article not Found" 
        });
      } else {
        const updatedArticle = await Article.update(newData, {
          where: {
            id: articleId
          }
        });
    
        if(updatedArticle){
          res.status(200).json({
            message: "Success to update the article",
          })
        }
      }
    } catch (error) {
      res.status(500).json({
        message: "Internal Server Error",
        error: error
      });
    }
  },
  deleteArticle: async (req, res) => {
    let articleId = req.params.id;

    try {
      const existingArticle = await Article.findByPk(articleId);

      if (!existingArticle) {
        return res.status(404).json({
          message: 'Article not found' 
        });
      }
  
      await existingArticle.destroy();

      return res.status(200).json({ 
        message: 'Article deleted successfully'
      });
    } catch (error) {
      res.status(505).json({
        message: "Internal Server Error",
        error: error
      });
    }
  }
};