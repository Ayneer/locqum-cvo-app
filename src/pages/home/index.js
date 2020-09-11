import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group';

const Home = () => {
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
                Home
            </div>
        </CSSTransitionGroup>
    )
}

export default Home;