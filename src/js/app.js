import React from 'react';
import SwipeableRoutes from 'react-swipeable-routes';
import { BrowserRouter, Route } from "react-router-dom";

import FrontPage from './pages/front_page.js';
import AboutMePage from './pages/about_me_page.js';
import NatureGalleryPage from './pages/nature_gallery_page.js';
import PortraitureGalleryPage from './pages/portraiture_gallery_page.js';

import '../css/app.css';

export default class App extends React.Component {
    render() {
        let frontPage = () => <div className='front-wrapper'>
            <FrontPage/>
            <AboutMePage/>
        </div>;

        return <BrowserRouter>
            <div className='app'>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>

                <SwipeableRoutes>
                    <Route path='/nature' component={NatureGalleryPage}/>
                    <Route exact path='/' component={frontPage}/>
                    <Route path='/portraiture' component={PortraitureGalleryPage}/>
                </SwipeableRoutes>
            </div>
        </BrowserRouter>;
    }

    // Workaround to getting scrolling to the about-me page working on page load.
    // Should work once we get the extract loader to separately bundle CSS.
    componentDidMount() {
        let scrollToAbout = () => {
            window.location.hash = window.decodeURIComponent(window.location.hash);
            let hashParts = window.location.hash.split('#');

            if (hashParts.length > 1) {
              let hash = hashParts.slice(-1)[0];

              if (hash === 'about') {
                  let about = document.getElementById('about');
                  about.scrollIntoView();
              }
            }
        };

        // We've loaded, perform the scroll.
        scrollToAbout();
        window.onhashchange = scrollToAbout;
    }
};
