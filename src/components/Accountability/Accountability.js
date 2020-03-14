import React from 'react';
import './Accountability.css'

function Accountability(props) {
    const friend = props.friend;
    const friendsIncome = friend.reduce((total, friend) => total + friend.yearlyIncome, 0);

    return (
        <div>
            <h2>Total Connected Friends: <span>{friend.length}</span></h2>
            <h2>Total Yearly Income: <span>{friendsIncome}</span></h2>
        </div>
    );
};

export default Accountability;