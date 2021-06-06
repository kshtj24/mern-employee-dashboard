const router = require("express").Router();
let Employee = require("../models/employee.model");

router.route("/").get((req, res) => {
  Employee.find()
    .then(employees => res.json(employees))
    .catch(err => res.status(400).json("Error " + err));
});

router.route("/add").post((req, res) => {
  const employeeName = req.body.employeeName;
  const employeeAge = req.body.employeeAge;
  const employeeDOB = req.body.employeeDOB;

  const newEmployee = new Employee({ employeeName, employeeAge, employeeDOB });

  newEmployee
    .save()
    .then(() => res.json("Employee Added"))
    .catch(err => res.status(400).json("Error " + err));
});

router.route("/:id").get((req, res) => {
  Employee.findById(req.params.id)
    .then(employee => res.json(employee))
    .catch(err => res.status(404).json("Error " + err));
});

router.route("/:id").delete((req, res) => {
  Employee.findByIdAndDelete(req.params.id)
    .then(() => res.json("Employee Deleted."))
    .catch(err => res.json("Error " + err));
});

router.route("/update/:id").post((req, res) => {
  Employee.findById(req.params.id)
    .then(employee => {
      employee.employeeName = req.body.employeeName;
      employee.employeeAge = parseInt(req.body.employeeAge);
      employee.employeeDOB = req.body.employeeDOB;

      employee
        .save()
        .then(() =>
          res
            .json("Employee updated")
            .catch(err => res.status(400).json("Error " + err))
        );
    })
    .catch(err => res.status(400).json("Error " + err));
});

module.exports = router;
