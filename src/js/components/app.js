import React from 'react';
import ParallaxBackground from './parallax_background.js';

import '../../css/components/app.css';

export default class App extends React.Component {
    render() {
        let testStyle = {
            position: 'relative',
            height: '100px',
            width: '100%'
        };

        return <div className='app'>
            <ParallaxBackground href='img/test_bg_1.jpg' diff='500px'/>

            <div style={testStyle}>TESTING TESTING</div>
            <div style={testStyle}/>
            <div style={testStyle}/>
            <div style={testStyle}/>
            <div style={testStyle}/>
            <div style={testStyle}/>
            <div style={testStyle}/>
            <div style={testStyle}/>
            <div style={testStyle}/>
            <div style={testStyle}/>
        </div>;
    }
};
