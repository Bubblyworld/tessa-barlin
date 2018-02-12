import React from 'react';

import '../../css/components/image-grid.css';

export default class ImageGrid extends React.Component {
    constructor() {
        super();

        this.renderWrapper = this.renderWrapper.bind(this);
        this.renderRow = this.renderRow.bind(this);
    }

    /**
     * Renders an image in a grid row given an object describing:
     * {
     *      url: source URL of the image
     *      width: width of the source image
     *      height: height of the source image
     * }
     */
    renderWrapper(image, index) {
        let aspectRatio = image.width / image.height;
        let wrapperStyle = {
            flexGrow: aspectRatio,
            flexShrink: aspectRatio
        };

        return <div style={wrapperStyle} className='img-wrapper' key={index}>
            <img src={image.url}/>
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
