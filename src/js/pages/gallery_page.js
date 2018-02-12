import React from 'react';
import ImageGrid from '../components/image_grid.js';

import '../../css/pages/gallery-page.css';

export default class GalleryPage extends React.Component {
    render() {
        return <div className='gallery-page'>
            <ImageGrid images={this.props.images || []}/>
        </div>;
    }
}
