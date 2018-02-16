import React from 'react';
import ImageGrid from '../components/image_grid.js';

import '../../css/pages/gallery-page.css';

export default class GalleryPage extends React.Component {
    render() {
        return <div className='gallery-page'>
            <img src={this.props.logo} className='logo'/>

            <div className='gallery-text'>
                {this.props.text}
            </div>

            <div className='gallery-line'/>
            <ImageGrid images={this.props.images || []}/>
            <div className='gallery-line'/>
        </div>;
    }
}
