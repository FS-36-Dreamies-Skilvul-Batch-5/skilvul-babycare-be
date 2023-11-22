const { Baby, Nutrition_Record, Vaccination_Record } = require("../models");

module.exports = {
  getAllBaby: async (req, res) => {
    try {
      const babies = await Baby.findAll();

      res.status(200).json({
        message: "Success get all babies",
        data: babies
      })
    } catch (error) {
      res.status(500).json({
        message: "Internal Server Error",
        error: error
      });
    }
  },
  getBabyNutritionRecords: async (req, res) => {
    try {
      const nutritionRecords = await Nutrition_Record.findAll({
        where: {
          baby_id: req.params.id,
        },
      });

      if (nutritionRecords) {
        res.status(200).json({
          message: `Success to get baby's nutrition record`,
          data: nutritionRecords,
        });
      } else {
        res.status(404).json({
          message: `Fail to get baby's nutrition record`,
        });
      }
    } catch (error) {
      res.status(500).json({
        message: "Internal Server Error",
        error: error,
      });
    }
  },
  getBabyVaccinationRecords: async (req, res) => {
    try {
      const vaccinationRecords = await Vaccination_Record.findAll({
        where: {
          baby_id: req.params.id,
        },
      });

      if (vaccinationRecords) {
        res.status(200).json({
          message: `Success to get baby's vaccination record`,
          data: vaccinationRecords,
        });
      } else {
        res.status(404).json({
          message: `Fail to get baby's vaccination record`,
        });
      }
    } catch (error) {
      res.status(500).json({
        message: "Internal Server Error",
        error: error,
      });
    }
  },
  createBaby: async (req, res) => {
    let data = req.body;

    try {
      await Baby.create(data);
      
      res.status(201).json({
        message: "Success to create new baby",
      });
    } catch (error) {
      res.status(500).json({
        message: "Internal Server Error",
        error: error
      });
    }
  },
  updateBaby: async (req, res) => {
    let babyId = req.params.id;
    let newData = req.body;

    try {
      const existingBaby = await Baby.findByPk(babyId);
      console.log(existingBaby)
      if (!existingBaby) {
        return res.status(404).json({ 
          error: "Baby not Found" 
        });
      } else {
        const updatedBaby = await Baby.update(newData, {
          where: {
            id: babyId
          }
        });
    
        if(updatedBaby){
          res.status(200).json({
            message: "Success to update the baby",
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
  deleteBaby: async (req, res) => {
    let babyId = req.params.id;

    try {
      const existingBaby = await Baby.findByPk(babyId);

      if (!existingBaby) {
        return res.status(404).json({
          message: 'Baby not found' 
        });
      }
  
      await existingBaby.destroy();

      return res.status(200).json({ 
        message: 'Baby deleted successfully'
      });
    } catch (error) {
      res.status(505).json({
        message: "Internal Server Error",
        error: error
      });
    }
  }
};