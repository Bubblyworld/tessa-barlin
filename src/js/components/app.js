import React from 'react';
import ParallaxBackground from './parallax_background.js';
import NotifyWhenSeen from './wrappers/notify_when_seen.js';

import '../../css/components/app.css';

export default class App extends React.Component {
    render() {
        return <div className='app'>
            <ParallaxBackground href='img/test_bg_1.jpg'/>

            <div className='app-content'>
                <div className='page-block'></div>

                <NotifyWhenSeen>
                    <div> Testing testing. </div>
                </NotifyWhenSeen>
            </div>
        </div>;
    }
};
