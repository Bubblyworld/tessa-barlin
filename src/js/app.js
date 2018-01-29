import React from 'react';
import Background from './components/background.js';
import SwipeableViews from 'react-swipeable-views';
import FrontPage from './pages/front_page.js';

import '../css/app.css';

export default class App extends React.Component {
    render() {
        return <div className='app'>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>

            <div className='app-content'>
                <FrontPage/>
            </div>
        </div>;
    }
};
