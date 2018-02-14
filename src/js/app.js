import React from 'react';
import Background from './components/background.js';
import SwipeableViews from 'react-swipeable-views';
import FrontPage from './pages/front_page.js';
import GalleryPage from './pages/gallery_page.js';

import '../css/app.css';

export default class App extends React.Component {
    render() {
        let testImages = [
            [
                { url: 'img/portraiture/JA-1.jpg', width: 3000, height: 2000 },
                { url: 'img/portraiture/JA-2.jpg', width: 3000, height: 2000 }
            ],
            [
                { url: 'img/portraiture/JA-3.jpg', width: 2074, height: 3000 },
                { url: 'img/portraiture/JA-4.jpg', width: 2000, height: 3000 },
                { url: 'img/portraiture/JA-5.jpg', width: 2127, height: 3000 }
            ],
            [
                { url: 'img/portraiture/JA-13.jpg', width: 3000, height: 2000 }
            ],
            [
                { url: 'img/portraiture/JA-7.jpg', width: 2101, height: 3000 },
                { url: 'img/portraiture/JA-8.jpg', width: 2033, height: 3000 }
            ]
        ];

        return <div className='app'>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>

            <SwipeableViews>
                {/*<GalleryPage logo='img/elephant_logo_gold.png' images={testImages} left={true}/>*/}
                <FrontPage/>
                {/*}<GalleryPage logo='img/flower_logo_gold.png' right={true}/>*/}
            </SwipeableViews>
        </div>;
    }
};
