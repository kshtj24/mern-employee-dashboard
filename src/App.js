import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import employeeList from "./components/employeeList.component";
import employeeCreate from "./components/createEmployee.component";
import employeeEdit from "./components/editEmployee.component";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Route path="/" exact component={employeeList} />
        <Route path="/create" component={employeeCreate} />
        <Route path="/edit/:id" component={employeeEdit} />
      </div>
    </Router>
  );
}

export default App;
