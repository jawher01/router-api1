import Axios from 'axios'
import React, { useState, useEffect } from 'react'
import CommentList from './CommentList';


function Comment(props) {
    const { post } = props.location.state;
    const { id } = props.match.params;

    const [comment, setComment] = useState([])
    const [Loadcomment, setLoadComment] = useState(true)

    const getComment = () => {
        Axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
            .then((res) => { setComment(res.data); setLoadComment(false) })
            .catch((err) => console.log(err))
    }
    useEffect(() => {
        getComment();
    }, [])
    return (
        <div>
            {
                <div>
                    <h2>{("title:", post.title)}</h2>
                    <h2>{post.body}</h2>
                    <CommentList comment={comment} Loadcomment={Loadcomment} />
                </div>
            }
        </div>
    )
}

export default Comment