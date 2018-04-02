import React from 'react';
import GalleryPage from './gallery_page.js';

export default class PortraitureGalleryPage extends React.Component {
    render() {
        let text = <div>PORTRAITURE<br/>GALLERY</div>
        let logo = 'img/flower_logo_gold.png';
        let story  = 'Every shot tells a story.';
        let images = [
            [
                { urls: ['img/portraiture/1-1-1.jpg', 'img/portraiture/1-1-2.jpg', 'img/portraiture/1-1-3.jpg'], width: 1667, height: 2500 }
            ],
            [
                { urls: ['img/portraiture/2-1-1.jpg', 'img/portraiture/2-1-2.jpg'], width: 2500, height: 1667 }
            ],
            [
                { urls: ['img/portraiture/3-1-1.jpg', 'img/portraiture/3-1-2.jpg', 'img/portraiture/3-1-3.jpg'], width: 1667, height: 2500 },
                { urls: ['img/portraiture/3-2-1.jpg', 'img/portraiture/3-2-2.jpg', 'img/portraiture/3-2-3.jpg'], width: 1667, height: 2500 }
            ],
            [
                { urls: ['img/portraiture/4-1-1.jpg', 'img/portraiture/4-1-2.jpg'], width: 1576, height: 2325 }
            ],
            [
                { urls: ['img/portraiture/5-1-1.jpg'], width: 2500, height: 1722 }
            ],
            [
                { urls: ['img/portraiture/6-1-1.jpg', 'img/portraiture/6-1-2.jpg'], width: 2500, height: 1667 }
            ],
            [
                { urls: ['img/portraiture/7-1-1.jpg', 'img/portraiture/7-1-2.jpg', 'img/portraiture/7-1-3.jpg'], width: 2500, height: 1667 }
            ]
        ];

        return <GalleryPage logo={logo} text={text} story={story} images={images} right/>
    }
};
