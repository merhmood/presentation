import React from 'react';
import './HeaderLinks.css'

const HeaderLinks = props => {

    return (

        <li className='Links'>{props.link}</li>

    );
}

export default HeaderLinks;