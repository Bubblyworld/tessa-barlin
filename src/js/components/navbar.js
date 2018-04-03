import React from 'react';
import { Link } from "react-router-dom";

import '../../css/components/navbar.css';

export default class NavBar extends React.Component {
    scrollToAbout() {
        let about = document.getElementById('about');
        about.scrollIntoView();
    }

    render() {
        return <div className='nav'>
            <Link to='/nature' className='nav-item nav-nature'>
                <span className='drop-caps'>N</span>ATURE
            </Link>

            <div className='nav-sep'>
                <span className='line'/>
            </div>

            <Link to='#about' onClick={this.scrollToAbout} className='nav-item'>
                <span className='drop-caps'>A</span>BOUT
            </Link>

            <div className='nav-sep'>
                <span className='line'/>
            </div>

            <Link to='/portraiture' className='nav-item nav-portrait'>
                <span className='drop-caps'>P</span>ORTRAITURE
            </Link>
        </div>;
    }
}
