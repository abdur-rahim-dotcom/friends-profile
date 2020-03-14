import React, { useEffect, useState } from 'react';
import Accountability from '../Accountability/Accountability'
import Information from '../Information/Information';
import users from '../../fakeData';
import './Profile.css';




function Profile() {


    // let { username, name, yearlyIncome, img, email } = users
    const getUser = users;
    const [user, setUser] = useState(getUser)
    const [friend, setFriend] = useState([])
    const clickHandler = count => {
        const newFriend = [...friend, count]
        setFriend(newFriend)


    }

    return (
        <div className='profile-container'>
            <div className='personal-information'>
                {user.map(usr => <Information
                    clickHandler={clickHandler}
                    user={usr}></Information>)}
            </div>
            <div className='accountability'>
                <Accountability friend={friend} />
            </div>
        </div>
    )
}
export default Profile