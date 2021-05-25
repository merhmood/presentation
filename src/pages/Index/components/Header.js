import React from 'react';
import HeaderLinks from './HeaderLinks'

import './Header.css';

import img1 from './Assets/search.png'

const Header = () =>  {
    return (
        <div className='Header'>
            <h2 className='Logo'>Travel Blogger</h2>

            <input type='text' className='Input' placeholder='Search for post here...'/>

            <img src={img1} className='search-icon'/>

            <ul className='Link'>
                <HeaderLinks link={'Home'} />
                <HeaderLinks link={'Posts'} />
                <HeaderLinks link={'Contact'} />
            </ul>
        </div>
    )
}

export default Header