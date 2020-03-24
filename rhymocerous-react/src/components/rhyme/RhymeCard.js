import React, { Component } from "react"
import { Card } from 'react-bootstrap';

class RhymeCard extends Component {

  render() {
    return (
      <>
        <section className="rhyme">
          <Card style={{ width: '15rem' }}>
            <Card.Body>
              <Card.Title onClick={() => { this.props.history.push(`/rhymes/${this.props.rhyme.id}`) }}>{this.props.rhyme.word}</Card.Title>
              <Card.Text>Syllable Count: {this.props.rhyme.numSyllables}</Card.Text>
            </Card.Body>
          </Card>
        </section>
      </>
    )
  }
}

export default RhymeCard