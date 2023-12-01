const { Article_Category } = require("../models");

module.exports = {
  getAllArticleCategory: async (req, res) => {
    try {
      const articles = await Article_Category.findAll();

      res.status(200).json({
        message: "Success get all article categories",
        data: articles
      })
    } catch (error) {
      res.status(500).json({
        message: "Internal Server Error",
        error: error
      });
    }
  },
  createArticleCategory: async (req, res) => {
    let data = req.body;

    try {
      await Article_Category.create(data);
      
      res.status(201).json({
        message: "Success to create new article category",
      });
    } catch (error) {
      res.status(500).json({
        message: "Internal Server Error",
        error: error
      });
    }
  },
  updateArticleCategory: async (req, res) => {
    let articleId = req.params.id;
    let newData = req.body;

    try {
      const existingArticleCategory = await Article_Category.findByPk(articleId);
      if (!existingArticleCategory) {
        return res.status(404).json({ 
          error: "Article category not Found" 
        });
      } else {
        const updatedArticleCategory = await Article_Category.update(newData, {
          where: {
            id: articleId
          }
        });
    
        if(updatedArticleCategory){
          res.status(200).json({
            message: "Success to update the article category",
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
  deleteArticleCategory: async (req, res) => {
    let articleId = req.params.id;

    try {
      const existingArticleCategory = await Article_Category.findByPk(articleId);

      if (!existingArticleCategory) {
        return res.status(404).json({
          message: 'Article category not found' 
        });
      }
  
      await existingArticleCategory.destroy();

      return res.status(200).json({ 
        message: 'Article category deleted successfully'
      });
    } catch (error) {
      res.status(505).json({
        message: "Internal Server Error",
        error: error
      });
    }
  }
};