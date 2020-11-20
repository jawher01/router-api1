import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import SingleUser from "../component/SingleUser"
import PostsList from "../component/PostList"

function UserDetails(props) {
    const [user, setUser] = useState({})
    const [loaduser, setLoadUser] = useState(true)
    const [loadposts, setloadPosts] = useState(true)
    const [posts, setPosts] = useState([])
    const { id } = props.match.params
    const getPosts = () => {
        Axios.get(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
        .then(res => { setPosts(res.data); setloadPosts(false) })
        .catch((err) => console.log(err));

    }
    const getUser = () => {
        Axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(res => { setUser(res.data); setLoadUser(false) })
        .catch((err) => console.log(err));
    }
    useEffect(() => {
        getPosts()
        getUser()
    }, [])
    return (
        <div>
            <SingleUser  user={user} loaduser={loaduser}/>
            <PostsList posts={posts} loadposts={loadposts}/>

        </div>
    )
}

export default UserDetails
