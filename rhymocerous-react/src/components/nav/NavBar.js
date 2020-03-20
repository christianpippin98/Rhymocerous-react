import React, { Component } from "react"
import { Link } from "react-router-dom"




class NavBar extends Component {

  state = {
      poems : ""
  }




  componentDidMount() {
    this.getPoems()
  }

  getPoems = () => {
    // query parameter that fetches all poems with filter for name
    // if (isAuthenticated()) {
      fetch(`http://localhost:8000/poems`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${sessionStorage.getItem("Rhymocerous_token")}`
        }
      })
      .then(response => response.json())
      .then(response => {
        // console.log("prop", this.props.poems)
        // console.log("res",response)
        //setting state with the poems from the fetch
        this.setState({ poems: response })
      })
    // }
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
          <li className="nav-item">
            <Link className="nav-link" to="/">Profile</Link>
          </li>
        </ul>
      </nav>
    )

  }
}

export default NavBar