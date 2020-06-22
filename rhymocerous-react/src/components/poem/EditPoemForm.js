import React, { Component } from "react"
import APIManager from '../../modules/APIManager'
import { Form, Button, InputGroup, FormControl } from 'react-bootstrap';


class EditPoemForm extends Component {

    state = {
        title: "",
        body: ""
    }

    componentDidMount() {
        APIManager.get(this.props.match.params.poemId)
            .then(poem => {
                console.log(poem, "poem object")
                this.setState({
                    title: poem.title,
                    body: poem.body,
                    loadingStatus: false
                });
                console.log(this.state.title, "poem title")
                console.log(this.state.body, "poem body")
            });
    }

    handleInputChange = (evt) => {
        let stateToChange = {}
        stateToChange[evt.target.name] = evt.target.value
        this.setState(stateToChange)
    }

    editPoem = () => {
        // get all poems
        // set state with new data for poems
        this.setState({ loadingStatus: true });
        const editedPost = {
            id: this.props.match.params.poemId,
            title: this.state.title,
            body: this.state.body
          };
        console.log(this.props.match.params.poemId, "poem id")
        APIManager.update(editedPost, this.props.match.params.poemId)
            .then(response => {
                this.setState({ poem: response })
                this.props.history.push("/poems")
            })
    }

    render() {
        return (
            <>
                <Form>
                    <Form.Group>
                        <Form.Control type="text" onChange={this.handleInputChange} name="title" id="title" placeholder="Title" value={this.state.title} required />
                    </Form.Group>
                    <InputGroup>
                        <FormControl as="textarea" onChange={this.handleInputChange} name="body" id="body" placeholder="Body" value={this.state.body} required />
                    </InputGroup>
                    <Button type="submit" id="formSubmit" disabled={this.state.loadingStatus} onClick={this.editPoem}>Submit</Button>
                </Form>
            </>
        )
    }
}

export default EditPoemForm