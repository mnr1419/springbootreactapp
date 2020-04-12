import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Link } from "react-router-dom";
import EmployeeList from "./components/EmployeeList";
import AddEmployee from "./components/AddEmployee";
import EditEmployee from "./components/EditEmloyee";
import { createBrowserHistory } from "history";
import { Router } from "react-router";

function App() {
  return (
    <Router history={createBrowserHistory()}>
      <div className="App">
        <h3 className="alert alert-warning"> Spring boot and Redux app </h3>
        <br />
        <br />
        <Link to="/employees">Home</Link>|<Link to="/addemployee">Add</Link>
        <br />
        <br />
        <Route path="/employees" exact component={EmployeeList} />
        <Route path="/" exact component={EmployeeList} />
        <Route path="/addemployee" exact component={AddEmployee} />
        <Route path="/editemployee" exact component={EditEmployee} />
      </div>
    </Router>
  );
}

export default App;
