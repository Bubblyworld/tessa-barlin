import React from 'react';
import ImageGrid from '../components/image_grid.js';
import { Link } from "react-router-dom";

import '../../css/pages/gallery-page.css';

export default class GalleryPage extends React.Component {
    render() {
        var styles = {}
        if (this.props.left) styles.left = '210px';
        if (this.props.right) styles.right = '210px';
        console.log(styles);

        return <div className='gallery-page'>
            <div className="gallery-logo">
                <img src={this.props.logo} className='logo'/>

                <div className='gallery-text' style={styles}>
                        <i>{this.props.story}</i>
                </div>
            </div>

            <Link to='/' className='back-button'>
                <span className='drop-caps'>H</span>OME
            </Link>

            <div className='gallery-line'/>
            <ImageGrid images={this.props.images || []}/>
            <div className='gallery-line'/>
        </div>;
    }
}
