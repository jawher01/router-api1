import React from 'react'
import { Card } from "react-bootstrap"
import { Link } from "react-router-dom"

function SinglePost({ post }) {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{post.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{post.body}</Card.Subtitle>

                    <Link to={{
                        pathname: '/posts/${post.id}',
                        state: {
                            post: post
                        }
                    }}>comment</Link>

                </Card.Body>
            </Card>
        </div>
    )
}

export default SinglePost
