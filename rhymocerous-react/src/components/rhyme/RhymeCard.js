import React, { Component } from "react"
import { Card, OverlayTrigger, Button } from 'react-bootstrap';
import ThesaurusCard from "./ThesaurusCard"
import ThesaurusAPIManager from "./../../modules/ThesaurusAPIManager"

class RhymeCard extends Component {

    state = {
        thesaurus: []
    }

    renderThesaurus = (word) => {
        ThesaurusAPIManager.getInfo(word)
            .then((result) => {
                this.setState({
                    thesaurus: result
                })
            })
    }

    render() {
        return (
            <>
                <section className="rhyme">
                    <>
                        <Card style={{ width: '20rem' }}>
                            <Card.Body>
                                <Card.Title>{this.props.rhyme.word}</Card.Title>
                                <OverlayTrigger trigger="click" key={this.props.rhyme.word} placement={'right'} overlay={ThesaurusCard}>
                                    <Button variant="secondary" onClick={() => this.renderThesaurus(this.props.rhyme.word)}>{this.props.rhyme.word} thesaurus info</Button>
                                </OverlayTrigger>
                            </Card.Body>
                        </Card>
                    </>
                </section>
            </>
        )
    }
}

export default RhymeCard