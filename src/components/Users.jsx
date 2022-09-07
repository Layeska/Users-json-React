import React from 'react'
import users from '../users.json'
import UserItem from './UserITem'

const Users = () => {
    console.log(users)

    return (
        <div className='cardUsers'>
            <ul> {users.map(user => (
                    <UserItem user={user} key={user.email}/>
                ))}
            </ul>
        </div>
    )
}

export default Users