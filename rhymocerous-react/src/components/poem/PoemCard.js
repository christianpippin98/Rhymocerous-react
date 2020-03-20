import React, { Component } from "react"
import { Card } from 'react-bootstrap';

class Poem extends Component {

  render() {
    
    return (
      <>
        <section className="poem">
          <Card style={{ width: '18rem' }}>
            <Card.Body onClick={() => { this.props.history.push(`/poems/${this.props.poem.id}`) }}>
              <Card.Title>{this.props.poem.title}</Card.Title>
              <Card.Text>${this.props.poem.body}</Card.Text>
            </Card.Body>
          </Card>
        </section>
      </>
    )
  }
}

export default Poem