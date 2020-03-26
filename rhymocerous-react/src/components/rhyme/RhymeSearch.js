import React, { Component } from 'react';
import RhymeAPIManager from './../../modules/RhymeAPIManager'
import { Form, Card, Button } from 'react-bootstrap';
import RhymeManager from '../rhyme/RhymeManager'

class RhymeSearch extends Component {

    state = {
        searchString: "",
        rhymes: []
    }

    handleSearch = () => {
        RhymeAPIManager.getRhymes(this.state.searchString)
        .then((result)=>{
            this.setState({
                rhymes: result
            })
        })
    }

    onSearch = (evt) => {
        let stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange, this.handleSearch)
        // this.handleSearch(stateToChange)
    };

    // handleInputChange = (evt) => {
    //     let stateToChange = {}
    //     stateToChange[evt.target.id] = evt.target.value
    //     this.setState(stateToChange)
    // }

    render() {
        return (
            <div>
                <Form>
                    <Form.Group>
                        <Form.Label>Rhyme Search</Form.Label>
                        <Form.Control type="text" placeholder="Rhyme Search" id="searchString" name="searchString" style={{ width: '20rem' }} onChange={this.onSearch}/>
                        <Form.Text className="text-muted">
                            Search for words to rhyme.
                        </Form.Text>
                        {/* <Button variant="secondary" type="submit" id="rhymeSearch">Submit</Button> */}
                    </Form.Group>
                    {this.state.rhymes ?
                        <><RhymeManager rhymes={this.state.rhymes} /></> : <></>
                    }
                </Form>
            </div>
        )
    };
}
export default RhymeSearch;