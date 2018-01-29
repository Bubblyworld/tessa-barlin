import React from 'react';
import Background from './background.js';

import '../../css/components/app.css';

export default class App extends React.Component {
    render() {
        return <div className='app'>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>

            <Background url='img/bg.jpg'/>

            <div className='app-content'>
                <div className='header'>
                    <img className='logo-img' src='img/black_logo.png'/>

                    <div className='logo-text'>
                        <div className='t'>Tessa</div>
                        <div className='b'>Barlin</div>
                        <div className='p'>Photography</div>
                    </div>
                </div>

                <div className='nav'>
                    <a href='#' className='nav-item nav-nature'>NATURE</a>

                    <div className='nav-sep'>
                        <span className='line'/>
                    </div>

                    <a href='#' className='nav-item'>ABOUT</a>

                    <div className='nav-sep'>
                        <span className='line'/>
                    </div>

                    <a href='#' className='nav-item nav-portrait'>PORTRAITURE</a>
                </div>
            </div>
        </div>;
    }
};
