import React, { Component } from "react"
import PoemList from "./PoemList"
import APIManager from "../../modules/APIManager"


class PoemManager extends Component {

  state = {
    poems: []
  }

  componentDidMount() {
    this.getPoems()
  }

  // get all poems
  // set state with new data for poems
  getPoems = () => {
      APIManager.getAll()
      .then(response => {
        this.setState({ poems: response })
      })
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