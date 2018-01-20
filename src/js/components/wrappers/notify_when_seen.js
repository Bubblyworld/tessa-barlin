import ReactDOM from 'react-dom';
import React from 'react';

/**
 * Wrapper component passing an isInViewport prop to its children
 * that is true when the component is in the viewport and false otherwise.
 */
export default class NotifyWhenSeen extends React.Component {
    constructor(props) {
        super(props);

        this.handleViewportChange = this.handleViewportChange.bind(this);

        this.state = {
            isInViewport: false
        };
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleViewportChange);
        window.addEventListener('resize', this.handleViewportChange);
    }

    handleViewportChange() {
        let node = ReactDOM.findDOMNode(this);

        this.setState({
            isInViewport: this.isInViewport(node)
        });
    }

    isInViewport(node) {
        let viewportWidth  = window.innerWidth;
        let viewportHeight = window.innerHeight;
        let nodeRect = node.getBoundingClientRect();

        return (nodeRect.left > -nodeRect.width)
            && (nodeRect.top  > -nodeRect.height)
            && (nodeRect.left < viewportWidth)
            && (nodeRect.top  < viewportHeight);
    }

    render() {
        let childProps = {
            isInViewport: this.state.isInViewport
        };

        var decoratedChildren = React.Children.map(
            this.props.children,
            child => React.cloneElement(child, childProps)
        );

        // Wrap in div to provide a dom element to test on.
        return <div>
            {decoratedChildren}
        </div>;
    }
}
