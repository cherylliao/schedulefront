const mongoose = require('mongoose')
const uuidv1 = require('uuid/v1')





const appointmentSchema = new mongoose.Schema ({
    name: String,
    email: String,
    phone: String,
    datetime:String

  });



module.exports = mongoose.model("Appointment", appointmentSchema); 