import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group';

const Example = () => {
    return (
        <CSSTransitionGroup
            component="div"
            transitionName="TabsAnimation"
            transitionAppear={true}
            transitionAppearTimeout={0}
            transitionEnter={false}
            transitionLeave={false}
        >
            <div>
                Example
            </div>
        </CSSTransitionGroup>
    )
}

export default Example;