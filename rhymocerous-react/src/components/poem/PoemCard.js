import React, { Component } from "react"
import { Card, Button } from 'react-bootstrap';

class Poem extends Component {

  render() {
    return (
      <>
        <section className="poem">
          <Card style={{ width: '25rem' }}>
            <Card.Body>
              <Card.Title onClick={() => { this.props.history.push(`/poems/${this.props.poem.id}`) }}>{this.props.poem.title}</Card.Title>
              <Card.Text>{this.props.poem.body}</Card.Text>
              <Button variant="secondary" onClick={() => this.props.delete(this.props.poem.id)}>Delete</Button>
            </Card.Body>
          </Card>
        </section>
      </>
    )
  }
}

export default Poem