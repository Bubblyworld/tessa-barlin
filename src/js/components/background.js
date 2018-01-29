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
        let style = {
            backgroundImage: `url('${this.props.url}')`,
        };

        return <div className='background' style={style}/>;
    }
};
