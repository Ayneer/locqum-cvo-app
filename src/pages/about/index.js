import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group';

const About = () => {
    return(
        <CSSTransitionGroup
            component="div"
            transitionName="TabsAnimation"
            transitionAppear={true}
            transitionAppearTimeout={0}
            transitionEnter={false}
            transitionLeave={false}
        >
            <div>
                About
            </div>
        </CSSTransitionGroup>
    )
}

export default About;