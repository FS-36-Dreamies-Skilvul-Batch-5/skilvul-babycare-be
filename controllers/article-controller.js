const { Article, Article_Category } = require("../models");
const cloudinary = require("../utils/cloudinary");

module.exports = {
  getAllArticle: async (req, res) => {
    try {
      const page = parseInt(req.query.page, 10) || 1;
      const pageSize = parseInt(req.query.pageSize, 10) || 6;

      const { count, rows: articles } = await Article.findAndCountAll({
        include: {
          model: Article_Category,
          attributes: ["id", "name"],
        },
        order: [["posted_on", "DESC"]],
        limit: pageSize,
        offset: (page - 1) * pageSize,
      });

      const totalPages = Math.ceil(count / pageSize);

      res.status(200).json({
        message: "Success get all articles",
        data: articles,
        pagination: {
          page: page,
          pageSize: pageSize,
          totalPages: totalPages,
        },
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
        include: {
          model: Article_Category,
          attributes: ["id", "name"],
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
    cloudinary.uploader.upload(
      req.file.path,
      {
        folder: "articles",
      },
      async function (err, result) {
        if (err) {
          console.log(err);
          return res.status(500).json({
            success: false,
            message: "Error on uploading file",
          });
        }

        const newData = req.body;
        const currentDate = new Date();
        const formattedDate = currentDate.toISOString().split('T')[0];
    
        newData.posted_on = formattedDate;
        newData.img_url = result.secure_url;

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
      }
    );
  },
  updateArticle: async (req, res) => {
    const articleId = req.params.id;
    let newData = req.body;

    try {
      const existingArticle = await Article.findByPk(articleId);
      if (!existingArticle) {
        return res.status(404).json({
          error: "Article not Found",
        });
      } else {
        if(req.file){
          cloudinary.uploader.upload(
            req.file.path,
            {
              folder: "articles",
            },
            async function (err, result) {
              if (err) {
                console.log(err);
                return res.status(500).json({
                  success: false,
                  message: "Error on uploading file",
                });
              }
      
              newData.img_url = result.secure_url;
      
              try {
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
              } catch (error) {
                console.log(error);
                res.status(500).json({
                  message: "Internal Server Error",
                  error: error,
                });
              }
            }
          );
        } else {
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
          message: "Article not found",
        });
      }

      await existingArticle.destroy();

      return res.status(200).json({
        message: "Article deleted successfully",
      });
    } catch (error) {
      res.status(500).json({
        message: "Internal Server Error",
        error: error,
      });
    }
  },
};
