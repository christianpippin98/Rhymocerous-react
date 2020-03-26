import React, { Component } from "react"
import { Card } from 'react-bootstrap';



class PoemDetail extends Component {

    currentUser = JSON.parse(sessionStorage.getItem("credentials"))

    render() {
        return (
            <>
                <section className="poem">
                    <Card style={{ width: '25rem' }}>
                        <Card.Body>
                            <Card.Title>{this.props.poem.title}</Card.Title>
                            <Card.Text>{this.props.poem.body}</Card.Text>
                            <Card.Text>{this.props.poem.createdAt}</Card.Text>
                        </Card.Body>
                    </Card>
                </section>
            </>
        )
    }
}

export default PoemDetail