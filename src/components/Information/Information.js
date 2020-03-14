import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faEnvelopeSquare, faEnvelopeOpenText, faGlobeEurope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import './Information.css';

const Information = (props) => {
    const { name, email, website, img, yearlyIncome, phone } = props.user;
    return (
        <div className='information-container'>

            <div className='single-information'>
                <img src={img} alt="" />
                <h3>{name}</h3>
                <h4>${yearlyIncome}</h4>
                <p><FontAwesomeIcon icon={faPhoneAlt} /> {phone}</p>
                <p><FontAwesomeIcon icon={faEnvelopeOpenText} /> {email}</p>
                <p><FontAwesomeIcon icon={faGlobeEurope} /> {website}</p>
                <button onClick={() => props.clickHandler(props.user)}>Add Request</button>

            </div>


        </div >
    );
};

export default Information;