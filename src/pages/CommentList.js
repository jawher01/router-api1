import React from 'react'
import {Spinner} from "react-bootstrap"

function CommentList({comment,Loadcomment}) {
    return (
        <div>
            {Loadcomment? <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
            </Spinner>:<h1>Comment</h1>}
        </div>
    )
}

export default CommentList
