const mongoose = require("mongoose");

const schema = mongoose.Schema;

const employeeSchema = new schema(
  {
    employeeName: {
      type: String,
      required: true,
      trim: true,
      minLength: 3
    },
    employeeAge: {
      type: Number,
      required: true
    },
    employeeDOB: {
      type: Date,
      required: true
    }
  },
  {
    timestamp: true
  }
);

const employee = mongoose.model("Employee", employeeSchema);
module.exports = employee;
