const { Vaccination_Record } = require("../models");

module.exports = {
  getAllVaccinationRecord: async (req, res) => {
    try {
      const vaccinationRecords = await Vaccination_Record.findAll();

      res.status(200).json({
        message: "Success get all vaccination record",
        data: vaccinationRecords
      })
    } catch (error) {
      res.status(500).json({
        message: "Internal Server Error",
        error: error
      });
    }
  },
  getVaccinationRecordById: async (req, res) => {
    try {
      const vaccinationRecord = await Vaccination_Record.findOne({
        where: {
          id: req.params.id,
        },
      });

      if(vaccinationRecord){
        res.status(200).json({
          message: `Success to get vaccination record`,
          data: vaccinationRecord,
        })
      } else {
        res.status(404).json({
          message: `There's no vaccination record with that id`,
        })
      }
    } catch (error) {
      res.status(500).json({
        message: "Internal Server Error",
        error: error
      });
    }
  },
  createVaccinationRecord: async (req, res) => {
    let data = req.body;

    try {
      await Vaccination_Record.create(data);
      
      res.status(201).json({
        message: "Success to create new vaccination record",
      });
    } catch (error) {
      res.status(500).json({
        message: "Internal Server Error",
        error: error
      });
    }
  },
  updateVaccinationRecord: async (req, res) => {
    let vaccinationRecordId = req.params.id;
    let newData = req.body;

    try {
      const existingVaccinationRecord = await Vaccination_Record.findByPk(vaccinationRecordId);
      if (!existingVaccinationRecord) {
        return res.status(404).json({ 
          error: "Vaccination record not Found" 
        });
      } else {
        const updatedVaccinationRecord = await Vaccination_Record.update(newData, {
          where: {
            id: vaccinationRecordId
          }
        });
    
        if(updatedVaccinationRecord){
          res.status(200).json({
            message: "Success to update the vaccination record",
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
  deleteVaccinationRecord: async (req, res) => {
    let vaccinationRecordId = req.params.id;

    try {
      const existingVaccinationRecord = await Vaccination_Record.findByPk(vaccinationRecordId);

      if (!existingVaccinationRecord) {
        return res.status(404).json({
          message: 'Vaccination record not found' 
        });
      }
  
      await existingVaccinationRecord.destroy();

      return res.status(200).json({ 
        message: 'Vaccination record deleted successfully'
      });
    } catch (error) {
      res.status(505).json({
        message: "Internal Server Error",
        error: error
      });
    }
  }
};