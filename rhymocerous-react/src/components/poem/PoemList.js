import React, { Component } from "react"
import Poem from "./PoemCard"
import "./PoemList.css"
import APIManager from "./../../modules/APIManager"
import { Form } from 'react-bootstrap';

class PoemList extends Component {


  state = {
    poems: []
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
      })
      .then(() => APIManager.getAll("poems"));
  }

  render() {
    return (
      <>
        <article className="poemList">
        <Form>
        <Form.Label>Poem List</Form.Label>
          {
            this.props.poems.map(poem =>
              <Poem
                key={poem.id}
                poem={poem}
                delete={this.delete}
                {...this.props}
              />)

          }
        </Form>
        </article>
      </>
    )
  }
}

export default PoemList