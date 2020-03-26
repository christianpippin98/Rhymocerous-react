import React, { Component } from "react"
import Poem from "./PoemCard"
import "./PoemList.css"
import { Form } from 'react-bootstrap';

class PoemList extends Component {


  state = {
    poems: []
  }

  

  render() {
    return (
      <>
        <div className="poemList">
        <Form>
        <Form.Label>Poem List</Form.Label>
          {
            this.props.poems.map(poem =>
              <Poem
                key={poem.id}
                poem={poem}
                delete={this.props.delete}
                {...this.props}
              />)

          }
        </Form>
        </div>
      </>
    )
  }
}

export default PoemList