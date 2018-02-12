import React from 'react';

import '../../css/components/profile-image.css';

/**
 * Component for styling profile images. Takes the following props:
 *     src: the URL to the image to styl
 */
export default class ProfileImage extends React.Component {
    render() {
        return <img className='profile-image' src={this.props.src}/>;
    }
}
