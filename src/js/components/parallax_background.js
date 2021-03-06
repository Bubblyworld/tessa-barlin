import React from 'react';

import '../../css/components/parallax-background.css';

/**
 * Parallax background component using a fixed full-viewport div and
 * background-position. Takes the following props:
 *     props.href: URL to the background image.
 */
export default class ParallaxBackground extends React.Component {
    constructor(props) {
        super(props);

        this.handleScroll = this.handleScroll.bind(this);

        this.state = {
            scrollTop: 0
        };
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    handleScroll() {
        this.setState({
            scrollTop: document.body.scrollTop
        });
    }

    render() {
        let style = {
            backgroundImage: `url('${this.props.href}')`,
            backgroundPosition: `0px -${this.state.scrollTop * 0.1}px`
        };

        return <div className='parallax-background' style={style}/>;
    }
};
