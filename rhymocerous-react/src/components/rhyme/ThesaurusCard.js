import React, { Component } from "react"
import { Popover } from 'react-bootstrap';

class ThesaurusCard extends Component {

    render() {
        console.log(this.props.thesaurus, "thesaurus info")
      return (
        <>
          <section className="thesaurus">
            <Popover id={this.props.thesaurus.meta.id}>
                <Popover.Title as="h3">{this.props.thesaurus.meta.id}</Popover.Title>
                <Popover.Content>
                    Definition: {this.props.thesaurus.shortdef}
                </Popover.Content>
            </Popover>
          </section>
        </>
      )
    }
  }
  
  export default ThesaurusCard