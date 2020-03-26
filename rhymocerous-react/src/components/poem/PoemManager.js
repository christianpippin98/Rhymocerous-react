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

  delete = (id) => {
    APIManager.delete(id)
      .then(() => {
        APIManager.getAll("poems")
          .then((newPoems) => {
            this.setState({
              poems: newPoems
            })
          })
          .then(() => APIManager.getAll("poems"));
      })
  }



  render() {
    return (
            
      <>
        <main className="explorer">
          <PoemList poems={this.state.poems} delete={this.delete} {...this.props}/>   
        </main>
      </>
    )
  }
}

export default PoemManager