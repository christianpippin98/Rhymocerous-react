import React, { Component } from "react"
import { Card } from 'react-bootstrap';
import ThesaurusCard from "./ThesaurusCard"
import ThesaurusAPIManager from "./../../modules/ThesaurusAPIManager"

class RhymeCard extends Component {

    state = {
        cardToRender: RhymeCard,
        thesaurus: []
    }

    renderThesaurus = (word) => {
        ThesaurusAPIManager.getInfo(word)
            .then((result) => {
                this.setState({
                    thesaurus: result
                })
                this.setState({
                    cardToRender: ThesaurusCard
                })
            })
    }

    render() {
        return (
            <>
                <section className="rhyme">
                    {this.state.thesaurus ?
                        <><Card style={{ width: '20rem' }}>
                            <Card.Body onClick={() => this.renderThesaurus(this.props.rhyme.word)}>
                                <Card.Title>{this.props.rhyme.word}</Card.Title>
                                <Card.Text>Syllable Count: {this.props.rhyme.numSyllables}</Card.Text>
                            </Card.Body>
                        </Card></> : <><ThesaurusCard thesaurus={this.state.thesaurus} /></>
                    }

                </section>
            </>
        )
    }
}

export default RhymeCard