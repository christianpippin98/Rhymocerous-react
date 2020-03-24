import React, { Component } from 'react';
import RhymeAPIManager from './../../modules/RhymeAPIManager'
import { Form, Card } from 'react-bootstrap';
import RhymeManager from '../rhyme/RhymeManager'

class RhymeSearch extends Component {
    state = {
        searchString: "",
        rhymes: []
    }

    handleSearch = () => {
        RhymeAPIManager.getRhymes(this.state.searchString)
        .then((result)=>{
            console.log(result)
            this.setState({
                rhymes: result
            })
        })
    }

    onSearch = (evt) => {
        let stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
        console.log(this.state.searchString)
        this.handleSearch(stateToChange)
    };

    handleInputChange = (evt) => {
        let stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    render() {
        return (
            <div>
                <Form>
                    <Form.Group>
                        <Form.Label>Rhyme Search</Form.Label>
                        <Form.Control type="text" placeholder="Rhyme Search" id="searchString" name="searchString" onChange={this.onSearch} />
                        <Form.Text className="text-muted">
                            Search for words to rhyme.
                        </Form.Text>
                    </Form.Group>
                    {this.state.rhymes ?
                        <><RhymeManager rhymes={this.state.rhymes} /></> : <><Card className="explorer">
                        <h3>Loading</h3></Card></>
                    }
                </Form>
            </div>
        )
    };
}
export default RhymeSearch;