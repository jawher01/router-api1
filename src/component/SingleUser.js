import React from 'react'
import { Card, ListGroup, ListGroupItem, Spinner } from "react-bootstrap"
function SingleUser({ user, loaduser }) {
    return (
        <div>
            {loaduser ? <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
            </Spinner> : <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQoHYtXTchhspak0O8PNPKAPD9Cf08U6284ng&usqp=CAU" />
                    <Card.Body>
                        <Card.Title>{user.name}</Card.Title>
                        <Card.Text>
                            {user.email}
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem>{user.phone}</ListGroupItem>

                    </ListGroup>

                </Card>
            }
        </div>
    )
}

export default SingleUser
