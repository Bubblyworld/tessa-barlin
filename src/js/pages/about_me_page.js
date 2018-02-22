import React from 'react';

import '../../css/pages/about-me-page.css';

export default class AboutMePage extends React.Component {
    render() {
        return <div className='about-me-page' id='about'>
            <img className='about-me-image' src='img/aboutme.jpg'/>

            <div className="about-me-underlay"/>

            <h1>My name's Tessa Barlin.</h1>

            <p>
                I'm a photographer and documentary author currently working in Cape Town,
                South Africa. I have a passion for nature and people, especially when it
                comes to the way they interact and socialise. I started taking photographs
                when I was a highschooler in Timbuktu - at the time, it was just a hobby,
                but it has since grown into a full-time occupation for me.
            </p>

            <h2>
                Check out my Nature and Portraiture galleries!
            </h2>

            <div className='about-me-social-media'>
                <a className='fa-stack fa-2x' href='https://web.facebook.com/tessabarlin.photography/'>
                    <span className='fas fa-circle fa-stack-2x facebook'/>
                    <span className='fab fa-facebook fa-stack-1x fa-inverse'/>
                </a>

                <a className='fa-stack fa-2x'>
                    <span className='fas fa-circle fa-stack-2x twitter'/>
                    <span className='fab fa-twitter fa-stack-1x fa-inverse'/>
                </a>

                <a className='fa-stack fa-2x' href='https://www.instagram.com/tessabarlin_photography/'>
                    <span className='fas fa-circle fa-stack-2x instagram'/>
                    <span className='fab fa-instagram fa-stack-1x fa-inverse'/>
                </a>
            </div>
        </div>;
    }
}
