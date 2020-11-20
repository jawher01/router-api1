import React from 'react'
import UserList from "../component/UserList"

function Home({LoadUser,users}) {
    return (
        <div>
            <UserList users={users} LoadUser={LoadUser} />
        </div>
    )
}

export default Home
