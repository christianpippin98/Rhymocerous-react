import React, { Component } from "react"
import { Link } from "react-router-dom"




class NavBar extends Component {

  state = {
      poems : ""
  }

  render() {
      console.log(this.state, "Name")
    return (
      <nav className="navbar navbar-light light-blue flex-md-nowrap p-0 shadow">
        <ul className="nav nav-pills nav-fill">
          <li className="nav-item">
            <Link className="nav-link" to="/">Rhymocerous</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/poems">Poems</Link>
          </li>
          <li className="nav-item">
            <button type="button"
              className="nav-item"
              onClick={() => { this.props.history.push("/poems/new") }}>
              Write A Poem
            </button>
          </li>
        </ul>
      </nav>
    )

  }
}

export default NavBar