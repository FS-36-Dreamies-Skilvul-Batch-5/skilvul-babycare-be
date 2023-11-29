const { User, Baby } = require("../models");
const bcrypt = require("bcrypt");

module.exports = {
  getAllUser: async (req, res) => {
    try {
      const users = await User.findAll();

      res.status(200).json({
        message: "Success get all users",
        data: users,
      });
    } catch (error) {
      res.status(500).json({
        message: "Internal Server Error",
        error: error,
      });
    }
  },
  getUserById: async (req, res) => {
    try {
      const user = await User.findOne({
        where: {
          id: req.params.id,
        },
      });

      if (user) {
        res.status(200).json({
          message: `Success to get user`,
          data: user,
        });
      } else {
        res.status(404).json({
          message: `There's no user with that id`,
        });
      }
    } catch (error) {
      res.status(500).json({
        message: "Internal Server Error",
        error: error,
      });
    }
  },
  getUserBaby: async (req, res) => {
    try {
      const baby = await Baby.findOne({
        where: {
          user_id: req.params.id,
        },
      });

      if (baby) {
        res.status(200).json({
          message: `Success to get user's baby`,
          data: baby,
        });
      } else {
        res.status(404).json({
          message: `Fail to get user's baby`,
        });
      }
    } catch (error) {
      res.status(500).json({
        message: "Internal Server Error",
        error: error,
      });
    }
  },
  updateUser: async (req, res) => {
    let userId = req.params.id;
    let newData = req.body;

    try {
      const existingUser = await User.findByPk(userId);
      if (!existingUser) {
        return res.status(404).json({
          error: "User not Found",
        });
      } else {
        if(newData.password == ""){
          newData.password = existingUser.password;
        } else {
          const hashPassword = bcrypt.hashSync(newData.password, 10);
          newData.password = hashPassword;
        }

        const updatedUser = await User.update(newData, {
          where: {
            id: userId,
          },
        });

        if (updatedUser) {
          res.status(200).json({
            message: "Success to update the user data",
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
  deleteUser: async (req, res) => {
    let userId = req.params.id;

    try {
      const existingUser = await User.findByPk(userId);

      if (!existingUser) {
        return res.status(404).json({
          message: "User not found",
        });
      }

      await existingUser.destroy();

      return res.status(200).json({
        message: "User deleted successfully",
      });
    } catch (error) {
      res.status(505).json({
        message: "Internal Server Error",
        error: error,
      });
    }
  },
};
