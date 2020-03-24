import React, { Component } from "react"
import PoemDetail from "./PoemDetail"
import APIManager from "../../modules/APIManager"

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
          APIManager.get(`${this.props.match.params.poemId}`)
          .then(response => {
            this.setState({ poem: response })
          })
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