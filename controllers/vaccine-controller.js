const { Vaccine } = require("../models");

module.exports = {
  getAllVaccine: async (req, res) => {
    try {
      const vaccines = await Vaccine.findAll();

      res.status(200).json({
        message: "Success get all vaccines",
        data: vaccines,
      });
    } catch (error) {
      res.status(500).json({
        message: "Internal Server Error",
        error: error,
      });
    }
  },
  getVaccineById: async (req, res) => {
    try {
      const user = await Vaccine.findOne({
        where: {
          id: req.params.id,
        },
      });

      if (user) {
        res.status(200).json({
          message: `Success to get vaccine`,
          data: user,
        });
      } else {
        res.status(404).json({
          message: `There's no vaccine with that id`,
        });
      }
    } catch (error) {
      res.status(500).json({
        message: "Internal Server Error",
        error: error,
      });
    }
  }
};
