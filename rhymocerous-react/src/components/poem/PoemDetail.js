import React, { Component } from "react"
import { Card, Button } from 'react-bootstrap';



class PoemDetail extends Component {

    currentUser = JSON.parse(sessionStorage.getItem("credentials"))

    render() {
        return (
            <>
                <section className="poem">
                    <Card className="bg-dark text-white">
                            <Card.Title>{this.props.poem.title}</Card.Title>
                            <Card.Text>{this.props.poem.body}</Card.Text>
                            <Card.Text>{this.props.poem.createdAt}</Card.Text>
                            <Button variant="primary" onClick={() => { this.props.history.push(`/poems/edit/${this.props.poem.id}`) }}>Edit</Button>
                    </Card>
                </section>
            </>
        )
    }
}

export default PoemDetail