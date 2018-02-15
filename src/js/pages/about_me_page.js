import React from 'react';

import '../../css/pages/about-me-page.css';

export default class AboutMePage extends React.Component {
    render() {
        return <div className='about-me-page'>
            <div className='about-me-text'>
                <span className='drop-caps'>A</span>BOUT <span className='drop-caps'>M</span>E
            </div>

            <div className='about-me-line'/>

            <div className='about-me-columns'>
                {/*The order is because of responsive switch to single cols for small screens.*/}
                <div id='right' className='col'>
                    <img src='img/aboutme.jpg' className='about-me-image'/>
                </div>

                <div id='left' className='col'>
                    <div className='about-me-story'>
                        <p>
                            I'm Tessa Barlin, a photographer interested in both nature
                            and people. I've been taking photographs for etc etc and
                            such and more and other things.
                        </p>

                        <p>
                            To book me for a shoot, contact me on PHONE or drop me
                            an email in the form below!
                        </p>
                    </div>

                    <div className='about-me-social-media'/>
                </div>
            </div>
        </div>;
    }
}
