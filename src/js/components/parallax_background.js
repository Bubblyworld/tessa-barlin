import React from 'react';

import '../../css/components/parallax_background.css';

/**
 * Parallax background component.
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
        window.onscroll = this.handleScroll;
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

        return <div className='parallax-background' style={style}>
            {this.props.children}
        </div>;
    }
};
