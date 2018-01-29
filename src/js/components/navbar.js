import React from 'react';

import '../../css/components/navbar.css';

export default class NavBar extends React.Component {
    render() {
        return <div className='nav'>
            <a href='#' className='nav-item nav-nature'>
                <span className='drop-caps'>N</span>ATURE
            </a>

            <div className='nav-sep'>
                <span className='line'/>
            </div>

            <a href='#' className='nav-item'>
                <span className='drop-caps'>A</span>BOUT
            </a>

            <div className='nav-sep'>
                <span className='line'/>
            </div>

            <a href='#' className='nav-item nav-portrait'>
                <span className='drop-caps'>P</span>ORTRAITURE
            </a>
        </div>;
    }
}
