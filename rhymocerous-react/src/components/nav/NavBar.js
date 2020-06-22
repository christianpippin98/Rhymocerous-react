import React, { Component } from "react"
import { Link } from "react-router-dom"
import { logout } from "./../helpers/simpleAuth"
import { NavDropdown } from 'react-bootstrap';
import APIManager from "../../modules/APIManager"




class NavBar extends Component {

  state = {
    user: []
  }

  componentDidMount() {
    this.getUser()
  }

  isAuthenticated = () => sessionStorage.getItem("rhymocerous_token") !== null

  getUser = () => {
      APIManager.getUser(`${this.props.match.params.userId}`)
      .then(response => {
        this.setState({ user: response })
      })
  }

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
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Friends</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={logout}><Link className="nav-link" to="/">Logout</Link></NavDropdown.Item>
            </NavDropdown>
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