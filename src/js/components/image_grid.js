import React from 'react';
import { Carousel } from 'react-responsive-carousel';

import '../../css/components/image-grid.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default class ImageGrid extends React.Component {
    constructor() {
        super();

        this.renderWrapper = this.renderWrapper.bind(this);
        this.renderRow = this.renderRow.bind(this);
    }

    renderImage(url) {
        return <img src={url}/>;
    }

    /**
     * Renders an image in a grid row given an object:
     * {
     *      url[s]: a string or array of source URLS for the images
     *      width: width of the source images
     *      height: height of the source images
     * }
     */
    renderWrapper(images, index) {
        let aspectRatio = images.width / images.height;
        let wrapperStyle = {
            flexGrow: aspectRatio,
            flexShrink: aspectRatio
        };

        return <div style={wrapperStyle} className='img-wrapper' key={index}>
            <Carousel showStatus={false} showIndicators={false} showThumbs={false}>
                { images.urls ? images.urls.map(this.renderImage) : this.renderImage(images.url) }
            </Carousel>
        </div>;
    }

    /**
     * Render a row in the imagegrid given a list of objects structured as above.
     */
    renderRow(images) {
        return <div className='image-grid-row'>
            { images.map(this.renderWrapper) }
        </div>
    }

    render() {
        return <div className='image-grid'>
            { this.props.images.map(this.renderRow) }
        </div>;
    }
}
