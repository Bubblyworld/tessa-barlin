import React from 'react';
import GalleryPage from './gallery_page.js';

export default class PortraitureGalleryPage extends React.Component {
    render() {
        let text = 'PORTRAITURE GALLERY';
        let logo = 'img/flower_logo_gold.png';
        let images = [
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

        return <GalleryPage logo={logo} text={text} images={images}/>
    }
};
