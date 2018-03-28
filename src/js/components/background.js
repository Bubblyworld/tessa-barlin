import React from 'react';

import '../../css/components/background.css';

/**
 * Background component for the front page full-viewport backdrop.
 * I might add support for centering it based on the viewport dimensions later,
 * as we want to keep the subject in focus responsively.
 *      props.url: the url to the background image itself.
 */
export default class Background extends React.Component {
    render() {
        var imgStyle = {
            backgroundImage: 'url("' + this.props.url + '")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
        };

        return <div className='background-wrap'>
            <div className='background' style={imgStyle}/>
        </div>;
    }
};
