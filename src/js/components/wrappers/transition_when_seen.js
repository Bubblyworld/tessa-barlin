import React from 'react';
import NotifyWhenSeen from './notify_when_seen.js';

/**
 * Wraps an element with two sets of CSS classes, one for when it is in the
 * viewport and one when it isn't.
 *     seen:   classes/class for when it's seen
 *     unseen: classes/class for when it isn't
 */
export default class TransitionWhenSeen extends React.Component {
    render() {
        return <NotifyWhenSeen>
            <_TransitionWhenSeen seen={this.props.seen} unseen={this.props.unseen}>
                {this.props.children}
            </_TransitionWhenSeen>
        </NotifyWhenSeen>
    }
}

// Helper class as we need to wrap in a NotifyWhenSeen.
class _TransitionWhenSeen extends React.Component {
    render() {
        let className = this.props.isInViewport
            ? this.props.seen
            : this.props.unseen;

        return <div id='_transit' className={className}>
            {this.props.children}
        </div>
    }
}
