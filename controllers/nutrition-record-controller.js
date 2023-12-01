const { Nutrition_Record } = require("../models");

module.exports = {
  getAllNutritionRecord: async (req, res) => {
    try {
      const nutritionRecords = await Nutrition_Record.findAll();

      res.status(200).json({
        message: "Success get all nutrition record",
        data: nutritionRecords
      })
    } catch (error) {
      res.status(500).json({
        message: "Internal Server Error",
        error: error
      });
    }
  },
  getNutritionRecordById: async (req, res) => {
    try {
      const nutritionRecord = await Nutrition_Record.findOne({
        where: {
          id: req.params.id,
        },
      });

      if(nutritionRecord){
        res.status(200).json({
          message: `Success to get nutrition record`,
          data: nutritionRecord,
        })
      } else {
        res.status(404).json({
          message: `There's no nutrition record with that id`,
        })
      }
    } catch (error) {
      res.status(500).json({
        message: "Internal Server Error",
        error: error
      });
    }
  },
  createNutritionRecord: async (req, res) => {
    let data = req.body;

    try {
      await Nutrition_Record.create(data);
      
      res.status(201).json({
        message: "Success to create new nutrition record",
      });
    } catch (error) {
      res.status(500).json({
        message: "Internal Server Error",
        error: error
      });
    }
  },
  updateNutritionRecord: async (req, res) => {
    let nutritionRecordId = req.params.id;
    let newData = req.body;

    try {
      const existingNutritionRecord = await Nutrition_Record.findByPk(nutritionRecordId);
      if (!existingNutritionRecord) {
        return res.status(404).json({ 
          error: "Nutrition record not Found" 
        });
      } else {
        const updatednutritionRecord = await Nutrition_Record.update(newData, {
          where: {
            id: nutritionRecordId
          }
        });
    
        if(updatednutritionRecord){
          res.status(200).json({
            message: "Success to update the nutrition record",
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
  deleteNutritionRecord: async (req, res) => {
    let nutritionRecordId = req.params.id;

    try {
      const existingNutritionRecord = await Nutrition_Record.findByPk(nutritionRecordId);

      if (!existingNutritionRecord) {
        return res.status(404).json({
          message: 'Nutrition record not found' 
        });
      }
  
      await existingNutritionRecord.destroy();

      return res.status(200).json({ 
        message: 'Nutrition record deleted successfully'
      });
    } catch (error) {
      res.status(505).json({
        message: "Internal Server Error",
        error: error
      });
    }
  }
};