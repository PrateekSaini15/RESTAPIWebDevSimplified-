import React from "react";
import { Link } from "react-router-dom";

export default class NavBarComponent extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <ul className="navbar-nav">
          <li className="navbar-item">
            <Link to="/subscribersdetails">Subscribers Detail</Link>
          </li>
          <li className="navbar-item">
            <Link to="/subscriber/add">Add a Subscriber</Link>
          </li>
        </ul>
      </nav>
    );
  }
}
