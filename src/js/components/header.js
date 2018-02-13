import React from 'react';

import '../../css/components/header.css';

export default class Header extends React.Component {
    render() {
        return <div className='header'>
            {/*<img className='logo-img' src='img/black_logo.png'/>*/}

            <div className='logo-text'>
                <div className='t'>
                    <span className='drop-caps'>T</span>essa
                </div>
                <div className='b'>Barlin</div>
                <div className='p'>Photography</div>
            </div>
        </div>;
    }
}
