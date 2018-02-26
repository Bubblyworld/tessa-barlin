import React from 'react';
import GalleryPage from './gallery_page.js';

export default class NatureGalleryPage extends React.Component {
    render() {
        let text = 'NATURE GALLERY';
        let logo = 'img/elephant_logo_gold.png';
        let images = [
            [
                { url: 'img/nature/1-1_sma.jpg', width: 2000, height: 3000 },
                { url: 'img/nature/1-2_sma.jpg', width: 2606, height: 3648 }
            ],
            [
                { url: 'img/nature/2-1_sma.jpg', width: 3000, height: 1445 }
            ],
            [
                { url: 'img/nature/3-1_sma.jpg', width: 3000, height: 2000 },
                { url: 'img/nature/3-2_sma.jpg', width: 3000, height: 2000 }
            ],
            [
                { url: 'img/nature/4-1_sma.jpg', width: 3000, height: 2000 },
                { url: 'img/nature/4-2_sma.jpg', width: 3000, height: 2000 }
            ],
            [
                { url: 'img/nature/5-1_sma.jpg', width: 1667, height: 2500 },
                { url: 'img/nature/5-2_sma.jpg', width: 2253, height: 3000 },
                { url: 'img/nature/5-3_sma.jpg', width: 2091, height: 2927 }
            ]
        ];

        return <GalleryPage logo={logo} text={text} images={images}/>
    }
};
