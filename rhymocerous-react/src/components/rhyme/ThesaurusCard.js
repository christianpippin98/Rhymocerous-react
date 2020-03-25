import React, { Component } from "react"
import { Card } from 'react-bootstrap';

class ThesaurusCard extends Component {

    render() {
        console.log(this.props.thesaurus, "thesaurus info")
      return (
        <>
          <section className="thesaurus">
            <Card style={{ width: '20rem' }}>
              <Card.Body>
                <Card.Title>{this.props.thesaurus.meta.id}</Card.Title>
                <Card.Text>Definition: {this.props.thesaurus.shortdef}</Card.Text>
              </Card.Body>
            </Card>
          </section>
        </>
      )
    }
  }
  
  export default ThesaurusCard