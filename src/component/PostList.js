import React from 'react'
import { Spinner } from "react-bootstrap"
import SinglePost from "./SinglePost"
function PostList({ posts, loadposts }) {
    return (
        <div style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap" }}>
            {loadposts ? <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
            </Spinner> : posts.map(el => <SinglePost post={el} />)}
        </div>
    )
}

export default PostList
