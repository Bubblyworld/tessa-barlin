import React from 'react';
import GalleryPage from './gallery_page.js';

export default class PortraitureGalleryPage extends React.Component {
    render() {
        let text = 'PORTRAITURE GALLERY';
        let logo = 'img/flower_logo_gold.png';
        let images = [
            [
                { url: 'img/portraiture/1-1.jpg', width: 2500, height: 1667 }
            ],
            [
                { url: 'img/portraiture/2-1.jpg', width: 2500, height: 1667 },
                { url: 'img/portraiture/2-2.jpg', width: 5472, height: 3648 }
            ],
            [
                { url: 'img/portraiture/3-1.jpg', width: 3000, height: 2000 }
            ],
            [
                { url: 'img/portraiture/4-1.jpg', width: 2000, height: 3000 },
                { url: 'img/portraiture/4-2.jpg', width: 2000, height: 3000 },
                { url: 'img/portraiture/4-3.jpg', width: 3648, height: 5472 }
            ],
            [
                { url: 'img/portraiture/5-1.jpg', width: 1667, height: 2500 },
                { url: 'img/portraiture/5-2.jpg', width: 3648, height: 5472 }
            ],
            [
                { url: 'img/portraiture/6-1.jpg', width: 3000, height: 2066 }
            ],
            [
                { url: 'img/portraiture/7-1.jpg', width: 2074, height: 3000 },
                { url: 'img/portraiture/8-1.jpg', width: 2000, height: 3000 }
            ]
        ];

        return <GalleryPage logo={logo} text={text} images={images}/>
    }
};
