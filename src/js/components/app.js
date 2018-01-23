import React from 'react';
import ParallaxBackground from './parallax_background.js';
import TransitionWhenSeen from './wrappers/transition_when_seen.js';
import AboutMe from './about_me.js';

import '../../css/components/app.css';

export default class App extends React.Component {
    render() {
        return <div className='app'>
            <ParallaxBackground href='img/test_bg_3.jpg'/>

            <div className='app-content'>
                <div className='page-block'></div>

                <AboutMe/>
            </div>
        </div>;
    }
};
