require("dotenv").config();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { User } = require("../models");

module.exports = {
  loginAction: async (req, res) => {
    const userLogin = req.body;

    try {
      const user = await User.findOne({
        where: {
          email: userLogin.email,
        },
      });

      if (!user) {
        return res.status(404).json({
          message: "There's no user with that Credential",
        });
      }
      console.log(userLogin.password, user.password);

      if (bcrypt.compareSync(userLogin.password, user.password)) {
        const token = jwt.sign(
          { id: user.id, email: user.email },
          process.env.JWT_KEY
        );

        res.json({
          message: "Login Successfull",
          userId: user.id,
          token: token,
        });
      } else {
        res.json({
          message: "Login Failed",
        });
      }
    } catch (error) {
      res.status(505).json(error.message);
    }
  },
};
