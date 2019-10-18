const Appointment = require('../models/appointment');

const {errorHandler} = require('../helpers/dbErrorHandler');
// const Nexmo = require("nexmo");




exports.create = (req, res) => {
    let appointment = new Appointment(req.body);
    appointment.save((err, data)=>{
        if(err){
            return res.status(400).json({
                error: errorHandler(err)

            });
        }
        res.json({data});
    });

};
  


