import React, { Component } from "react"
import PoemList from "./PoemList"
import NavBar from "../nav/NavBar"
import Poem from "./PoemCard"

// import { isAuthenticated } from "../helpers/simpleAuth"

class PoemManager extends Component {

  state = {
    poems: []
  }

  componentDidMount() {
    this.getPoems()
  }

  getPoems = () => {
    // get all poems
    // set state with new data for poems
    // if (isAuthenticated()) {
      fetch("http://localhost:8000/poems", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${sessionStorage.getItem("rhymocerous_token")}`
        }
      })
      .then(response => response.json())
      .then(response => {
        // console.log("prop", this.props.poems)
        // console.log("res",response)
        this.setState({ poems: response })
      })
    // }
  }



  render() {
      console.log(this.props.filteredPoems, "filterPoems")
      console.log(this.state.poems, "poems")
    return (
            
      <>
        <main className="explorer">
          <PoemList poems={this.state.poems} completedSearch={this.props.completedSearch} filteredPoems={this.props.filteredPoems} {...this.props}/>   
        </main>
      </>
    )
  }
}

export default PoemManager