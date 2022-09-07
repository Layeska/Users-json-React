import React from 'react'

const UserItem = ({user}) => {
    return (
        <div className='cardUser'> 
            <div className='cardHead'>
                <h1>{user.name.title}, {user.name.first} {user.name.last}</h1>
            </div>
            <div className='cardImg'>
                <img src={user.picture.large} alt="photo of user"/>
            </div>
            <div className='cardInfo'>
                <p><i className="fa-regular fa-envelope"></i> {user.email}</p>
                <p><i className="fa-solid fa-mobile-screen-button"></i> {user.cell}</p>
                <p><i className="fa-solid fa-location-dot"></i> {user.location.city},{user.location.country}</p>
            </div>
        </div>
    )
}

export default UserItem