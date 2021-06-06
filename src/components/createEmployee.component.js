import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";

export default class createEmployee extends Component {
  constructor(props) {
    super(props);

    this.state = {
      employeeName: "",
      employeeAge: 0,
      employeeDOB: new Date()
    };
    this.onChangeEmployeeAge = this.onChangeEmployeeAge.bind(this);
    this.onChangeEmployeeName = this.onChangeEmployeeName.bind(this);
    this.onChangeEmployeeDOB = this.onChangeEmployeeDOB.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChangeEmployeeName(e) {
    this.setState({
      employeeName: e.target.value
    });
  }

  onChangeEmployeeAge(e) {
    this.setState({
      employeeAge: e.target.value
    });
  }
  onChangeEmployeeDOB(date) {
    this.setState({
      employeeDOB: date
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const employee = {
      employeeName: this.state.employeeName,
      employeeAge: this.state.employeeAge,
      employeeDOB: this.state.employeeDOB
    };

    axios
      .post("http://localhost:5000/employees/add", employee)
      .then(res => console.log(res.data))
      .catch(err => console.log(err));

    window.location = "/";
  }

  render() {
    return (
      <div>
        <h3>Add New Employee</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Employee Name</label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.employeeName}
              onChange={this.onChangeEmployeeName}
            />
          </div>
          <div className="form-group">
            <label>Employee Age</label>
            <input
              type="number"
              required
              className="form-control"
              value={this.state.employeeAge}
              onChange={this.onChangeEmployeeAge}
            />
          </div>
          <div className="form-group">
            <label>Employee Date of Birth</label>
            <div>
              <DatePicker
                className="form-control"
                selected={this.state.employeeDOB}
                onChange={this.onChangeEmployeeDOB}
              />
            </div>
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Add Employee"
              className="btn-primary btn"
            />
          </div>
        </form>
      </div>
    );
  }
}
