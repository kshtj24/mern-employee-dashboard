import React from "react";
import { Link } from "react-router-dom";

const navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
      <Link to="/" className="navbar-brand">
        Employee Dashboard
      </Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
            <Link to="/" className="nav-link">
              Employees
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/create" className="nav-link">
              Add Employee
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default navbar;
