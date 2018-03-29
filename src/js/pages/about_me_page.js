import React from 'react';

import '../../css/pages/about-me-page.css';

export default class AboutMePage extends React.Component {
    render() {
        var currentYear = new Date().getFullYear();

        return <div className='about-me-page' id='about'>
            <div className="about-me-centre">
                <img className='about-me-image' src='img/aboutme.jpg'/>

                <div className="about-me-underlay">
                    <h1>A piece of glass is what connects me to the world.</h1>

                    <p>
                        My name is Tessa. I’m a photographer and cinematographer with an intrinsic love for nature, a keen eye for details and a passion for visual storytelling.
                    </p>

                    <p>
                        There’s something spiritual about photography. It’s both a form of expression, and a way of understanding the world. It’s art - and it has endless possibilities.
                    </p>

                    <p>
                        I’d always wanted to be a conservationist. Growing up I was convinced I’d become a scientist when I was older. But I first picked up a camera when I was around 9 years old, and fell in love instantly. I’d photograph everything from people to plants, and I was intrigued by how one could portray the world in an infinite number of ways through a single frame. However, I never considered this a viable career path until mid way through my university degree when I realised that photography and conservation needn’t be mutually exclusive. Thus began my journey towards wildlife cinematography. I now have a postgraduate degree in film production, and have thus far shot two professional short films - both fiction film and nature documentary. I run my own photography business shooting weddings, portraiture, events and the like, while at the same time working in the film industry.
                    </p>

                    <p>
                        Due to the multidisciplinary nature of my profession, you’ll find elements of both wildlife and portraiture in my photography. My style is natural, vibrant and emanates emotion. In my opinion, all wedding photos should be candid, and all wildlife photos should have elements of humanity in them. As I always say, every shot should tell a story because photography and cinematography are first and foremost about storytelling.
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

                        <div className="copyright">
                            Copyright © {currentYear} <br/> Tessa Barlin
                        </div>
                    </div>
                </div>
            </div>
        </div>;
    }
}
