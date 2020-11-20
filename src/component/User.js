import React from 'react'
import {Card,Button } from "react-bootstrap"
import { Link } from 'react-router-dom'
function User({user}) {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQoHYtXTchhspak0O8PNPKAPD9Cf08U6284ng&usqp=CAU" alt="avatar" />
                <Card.Body>
                    <Card.Title>{user.name}</Card.Title>
                    <Card.Text>
                      {user.email}
                   </Card.Text>
                    <Button variant="primary"><Link to={`/users/${user.id}`}>User Details</Link></Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default User
