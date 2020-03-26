import React, { Component } from "react"
import { Card, OverlayTrigger, Button, Popover } from 'react-bootstrap';
import ThesaurusAPIManager from "./../../modules/ThesaurusAPIManager"
import DefinitionsAPIManager from "./../../modules/DefinitionsAPIManager"
import 'bootstrap/dist/css/bootstrap.min.css';

class RhymeCard extends Component {

    state = {
        thesaurus: [],
        definitions: []
    }

    renderThesaurus = (word) => {
        console.log(word)
        ThesaurusAPIManager.getInfo(word)
            .then((result) => {
                console.log(result, result)
                this.setState({
                    thesaurus: result
                })
            })
    }

    renderDefinitions = (word) => {
        console.log(word)
        DefinitionsAPIManager.getInfo(word)
            .then((result) => {
                console.log(result, result)
                this.setState({
                    definitions: result[0].defs
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
                                <OverlayTrigger target="" trigger="click" key={`${this.props.rhyme.word}-syn`} placement='right' overlay={<Popover id="popover-positioned-right" placement="right">
                                    <Popover.Title as="h3">{this.props.rhyme.word}</Popover.Title>
                                    <Popover.Content>
                                        <ol>
                                            {this.state.thesaurus.map((word) => {
                                                return <li key={word.word}>{word.word}</li>
                                            })}
                                        </ol>
                                    </Popover.Content>
                                </Popover>}>
                                    <Button variant="secondary" onClick={() => this.renderThesaurus(this.props.rhyme.word)}>Synonyms</Button>
                                </OverlayTrigger>
                                <OverlayTrigger target="" trigger="click" key={`${this.props.rhyme.word}-def`} placement='right' overlay={<Popover id="popover-positioned-right" placement="right">
                                    <Popover.Title as="h3">{this.props.rhyme.word}</Popover.Title>
                                    <Popover.Content>
                                        <ol>
                                            {this.state.definitions.map((def) => {
                                                return <li key={def}>{def}</li>
                                            })}
                                        </ol>
                                    </Popover.Content>
                                </Popover>}>
                                    <Button variant="secondary" onClick={() => this.renderDefinitions(this.props.rhyme.word)}>Definitions</Button>
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