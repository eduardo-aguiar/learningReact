import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import App from "../components/App";
import Async from "./async";

function Index() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>Async</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

function AppRouter() {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
            <a href="/" className="navbar-brand"> React Trainning</a>
            <div className="mr-auto navbar-nav">
          
          
              <Link className="nav-link" to="/">Home</Link>
          
          
              <Link className="nav-link" to="/about/">Async/Await</Link>
          
          
              <Link className="nav-link" to="/users/">Users</Link>
          
          
          </div>
        </nav>

        <Route path="/" exact component={App} />
        <Route path="/about/" component={Async} />
        <Route path="/users/" component={Users} />
      </div>
    </Router>
  );
}

export default AppRouter;