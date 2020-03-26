import React, { Component } from "react"
import APIManager from '../../modules/APIManager'
import { Form, Button, InputGroup, FormControl } from 'react-bootstrap';


class NewPoemForm extends Component {

    state = {
        title: "",
        body: ""
    }

    handleInputChange = (evt) => {
        let stateToChange = {}
        stateToChange[evt.target.name] = evt.target.value
        this.setState(stateToChange)
    }

    writeThePoem = evt => {
        evt.preventDefault();
        const newPoem = {
            title: this.state.title,
            body: this.state.body
        }
        // Create the user profile and redirect user to their profile
        APIManager.post(newPoem)
            .then(() => this.props.history.push("/poems"));
    }

    render() {
        return (
            <>
                <Form>
                    <Form.Group>
                        <Form.Label>Write New Poem</Form.Label>
                        <Form.Control type="text" onChange={this.handleInputChange} name="title" id="title" placeholder="Title" required />
                    </Form.Group>
                    <InputGroup>
                        <FormControl as="textarea" onChange={this.handleInputChange} name="body" id="body" placeholder="Body" required />
                    </InputGroup>
                    <Button type="submit" id="formSubmit" disabled={this.state.loadingStatus} onClick={this.writeThePoem}>Submit</Button>
                </Form>
            </>
        )
    }
}

export default NewPoemForm