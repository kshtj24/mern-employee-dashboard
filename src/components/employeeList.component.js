import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default class employeeList extends Component {
  constructor(props) {
    super(props);
    this.baseURL = "http://localhost:5000/employees";
    this.state = {
      employees: []
    };
  }

  componentDidMount() {
    //Get employee list here
    axios
      .get(this.baseURL)
      .then(res => {
        let list = [];
        res.data.forEach(element => {
          list.push({
            employeeId: element._id,
            employeeName: element.employeeName,
            employeeAge: element.employeeAge,
            employeeDOB: element.employeeDOB
          });
          this.setState({
            employees: list
          });
        });
      })
      .catch(err => console.log(err));
  }

  onDeleted(id) {
    axios
      .delete(this.baseURL.concat(`/${id}`))
      .then(alert("Employee deleted."))
      .catch(err => alert("Error occured while deleting employee."));

    this.setState({
      employees: this.state.employees.filter(
        element => element.employeeId !== id
      )
    });
  }

  render() {
    return (
      <div>
        {this.state.employees.map(item => (
          <div className="card mt-2 bg-light" key={item.employeeId}>
            <div className="card-body">
              <h5 className="card-title">{item.employeeName}</h5>
              <p className="card-text">
                {"Age is " +
                  item.employeeAge +
                  " and DOB is " +
                  new Date(item.employeeDOB).toDateString()}
              </p>
              <div className="btn-group">
                <button
                  className="btn btn-outline-danger"
                  onClick={() => this.onDeleted(item.employeeId)}
                >
                  <i className="fa fa-trash"></i>
                </button>
                <Link
                  className="btn btn-outline-primary"
                  to={"/edit/" + item.employeeId}
                >
                  <i className="fa fa-pencil"></i>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
