import React from 'react';
import '../styles.css';

export default function Header(){
    return(
        <div className='header'>
            <img className='logo' src="logo.png" alt="MovieDux"></img>
            <h2>It's time for popcorn!! Find what to wtach next</h2>
        </div>
    )
}