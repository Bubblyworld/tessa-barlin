import React from 'react';
import ReactLoadImage from 'react-load-image';
import { ClipLoader } from 'react-spinners';
import { Carousel } from 'react-responsive-carousel';

import '../../css/components/image-grid.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default class ImageGrid extends React.Component {
    constructor() {
        super();

        this.renderWrapper = this.renderWrapper.bind(this);
        this.renderRow = this.renderRow.bind(this);
    }

    loader(aspectRatio) {
        var wrapperStyle = {
            paddingTop: (100.0 / aspectRatio) + '%'
        };

        return <div className='image-grid-spinner' style={wrapperStyle}>
            <div className='center-spinner'>
                <ClipLoader loading={true} color={'#C49365'}/>
            </div>
        </div>;
    }

    unloader(aspectRatio) {
        var wrapperStyle = {
            paddingTop: (100.0 / aspectRatio) + '%'
        };

        var style = {
            fontSize: '60px',
            color: '#C49365'
        };

        return <div className='image-grid-spinner' style={wrapperStyle}>
            <div className='center-spinner'>
                <span style={style} className='fas fa-exclamation'/>
            </div>
        </div>
    }


    renderImage(url, aspectRatio, index) {
        // return <Img
        //     key={'img-' + index}
        //     src={url}
        //     unloader={this.unloader(aspectRatio)}
        //     loader={this.loader(aspectRatio)}
        // />;
        return <ReactLoadImage key={'img-' + index} src={url}>
            <img/>
            {this.unloader(aspectRatio)}
            {this.loader(aspectRatio)}
        </ReactLoadImage>
    }

    /**
     * Renders an image in a grid row given an object:
     * {
     *      url[s]: a string or array of source URLS for the images
     *      width: width of the source images
     *      height: height of the source images
     * }
     */
    renderWrapper(images, index, isSingle) {
        let aspectRatio = images.width / images.height;

        // Single images we need to expand to fill the screen.
        let wrapperStyle = {
            flexGrow: isSingle ? 1.0 : aspectRatio,
            flexShrink: isSingle ? 1.0 : aspectRatio
        };

        return <div style={wrapperStyle} className='img-wrapper' key={'wrap-' + index}>
            <Carousel showStatus={false} showIndicators={false} showThumbs={false} swipeable={false}>
                { images.urls ?
                    images.urls.map((url, index) => this.renderImage(url, aspectRatio, index)) :
                    this.renderImage(images.url, aspectRatio) }
            </Carousel>
        </div>;
    }

    /**
     * Render a row in the imagegrid given a list of objects structured as above.
     */
    renderRow(images, index) {
        return <div className='image-grid-row' key={'row-' + index}>
            { images.map((image, index) => this.renderWrapper(image, index, images.length == 1)) }
        </div>
    }

    render() {
        return <div className='image-grid'>
            { this.props.images.map(this.renderRow) }
        </div>;
    }
}
