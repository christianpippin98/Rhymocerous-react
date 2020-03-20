import React, { Component } from "react"
import PoemDetail from "./PoemDetail"
import { isAuthenticated } from "../helpers/simpleAuth"

class PoemDetailView extends Component {

    state = {
        poem: []
      }
    
      componentDidMount() {
        this.getPoem()
      }

    getPoem = () => {
        // get all poems
        // set state with new data for poems
        if (isAuthenticated()) {
          fetch(`http://localhost:8000/poems/${this.props.match.params.poemId}`, {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Token ${sessionStorage.getItem("rhymocerous_token")}`
            }
          })
          .then(response => response.json())
          .then(response => {
            // console.log("prop", this.props.poems)
            // console.log("res",response)
            this.setState({ poem: response })
          })
        }
      }

  render() {
    return (
      <>
        <main className="explorer">
          <PoemDetail poem={this.state.poem} key={this.state.poem.id} {...this.props}/>
          
        </main>
      </>
    )
  }
}

export default PoemDetailView