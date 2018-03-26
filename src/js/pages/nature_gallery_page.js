import React from 'react';
import GalleryPage from './gallery_page.js';

export default class NatureGalleryPage extends React.Component {
    render() {
        let text   = <div>NATURE<br/>GALLERY</div>;
        let logo   = 'img/elephant_logo_gold.png';
        let story  = 'I love elephants, and other nature things like forests.';
        let images = [
            [
                { urls: ['img/nature/1-1-1.jpg', 'img/nature/1-1-2.jpg', 'img/nature/1-1-3.jpg'], width: 2500, height: 1667 }
            ],
            [
                { urls: ['img/nature/2-1-1.jpg', 'img/nature/2-1-2.jpg'], width: 1667, height: 2500 },
                { urls: ['img/nature/2-2-1.jpg', 'img/nature/2-2-2.jpg'], width: 1667, height: 2500 }
            ],
            [
                { urls: ['img/nature/3-1-1.jpg'], width: 1897, height: 2500 },
                { urls: ['img/nature/3-2-1.jpg'], width: 1878, height: 2500 },
                { urls: ['img/nature/3-3-1.jpg'], width: 1786, height: 2500 }
            ],
            [
                { urls: ['img/nature/4-1-1.jpg'], width: 2500, height: 1744 }
            ],
            [
                { urls: ['img/nature/5-1-1.jpg', 'img/nature/5-1-2.jpg', 'img/nature/5-1-3.jpg'], width: 2500, height: 1667 }
            ]
        ];

        return <GalleryPage logo={logo} text={text} story={story} images={images} left/>
    }
};
