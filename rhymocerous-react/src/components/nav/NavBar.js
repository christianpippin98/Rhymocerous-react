import React, { Component } from "react"
import { Link } from "react-router-dom"
import { logout } from "./../helpers/simpleAuth"




class NavBar extends Component {

  isAuthenticated = () => sessionStorage.getItem("rhymocerous_token") !== null

  render() {
    if (this.isAuthenticated()) {
      return (
        <nav className="navbar navbar-light light-blue flex-md-nowrap p-0 shadow">
          <ul className="nav nav-pills nav-fill">
            <li className="nav-item">
              <Link className="nav-link" to="/">Rhymocerous</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/poems/new">Write a Poem</Link>
            </li>
            <li className="nav-item" onClick={logout}>
              <Link className="nav-link" to="/">Logout</Link>
            </li>
          </ul>
        </nav>
      )
    } else {
      return (
        <nav className="navbar navbar-light light-blue flex-md-nowrap p-0 shadow">
          <ul className="nav nav-pills nav-fill">
            <li className="nav-item">
              <Link className="nav-link" to="/">Rhymocerous</Link>
            </li>
          </ul>
        </nav>
      )
    }

  }
}

export default NavBar