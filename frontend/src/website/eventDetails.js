import AnimationRevealPage from 'helpers/AnimationRevealPage';
import React, { Component } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import tw from "twin.macro";

import Feature from "components/features/TwoColSingleFeatureWithStats2-button.js";
import Header from 'components/headers/light.js'
import Footer from "components/footers/Home-Footer";

// import { createBrowserHistory } from 'history'

// export const history = createBrowserHistory({forceRefresh: true})

function goBackToEvents(history) {
    history.push("/events")
    history.go(0)
}

function Events() {
    const location = useLocation()
    const card = location.state
    const history = useHistory()
    
    if (!card) goBackToEvents(history, card)

    const HighlightedText = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block`;
    return (
        <AnimationRevealPage>
            <Header />
            <Feature 
                subheading={card.timing}
                heading={card.title}
                description={card.description ? card.description : null}
                imageSrc={card.imageSrc}
                primaryButtonText="Register Now!"
                registrableEvent={card.registrableEvent}
            />
            <Footer />
        </AnimationRevealPage>
    );
}

export default Events;