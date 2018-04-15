import React from 'react';

import '../../css/pages/about-me-page.css';

export default class AboutMePage extends React.Component {
    onContact(event) {
        var name = document.getElementById("contact-name").value;
        var email = document.getElementById("contact-email").value;
        var message = document.getElementById("contact-message")
            .value
            .replace(/\n\r?/g, '<br />');

        var timestamp = new Date().toString();
        var subject = `Booking from ${name}`;
        var body = `
            <html>
                <body>
                    <p>
                        <b><i>From:</i> ${email}</b>
                    </p>

                    <p>
                        ${message}
                    </p>

                    <p>
                        <i>${timestamp}</i>
                    </p>
                </body>
            </html>
        `;

        Email.send(
            "bookings@tessabarlin.co.za",
            "guy.paterson.jones@gmail.com",
            subject,
            body,
            "mail.tessabarlin.co.za",
            "bookings@tessabarlin.co.za",
            "Keiko12honey15!"
        );

        //b58379bd-d841-4baa-8015-3fa9fe9ecd79

        // Prevent redirects/scrolls/refreshes on button click.
        event.preventDefault();
        return false;
    }

    render() {
        var currentYear = new Date().getFullYear();

        return <div className='about-me-page' id='about'>
            <div className="about-me-centre">
                <img className='about-me-image' src='img/aboutme.jpg'/>

                <div className="about-me-underlay about-me-centre">
                    <p>
                        Hi, my name is Tessa. I’m a photographer and cinematographer with an intrinsic love for nature, a keen eye for details and a passion for visual storytelling.
                    </p>

                    <p>
                        I believe there’s something truly transcendent about photography. It’s both a form of expression, and a way of understanding the world. It’s art - and it has endless possibilities.
                    </p>

                    <p>
                        I’d always wanted to be a conservationist. Growing up I was convinced I’d become a scientist. But I first picked up a camera when I was around 9 years old, and fell in love instantly. I was intrigued by how one could portray the world in an infinite number of ways through a single frame.
                    </p>

                    <p>
                        It wasn’t until mid way through my university career when I realised that photography and conservation needn’t be mutually exclusive. Thus began my journey towards wildlife cinematography. I now have a postgraduate degree in film production, and have thus far shot two professional short films - both fiction film and nature documentary. I run my own photography and videography business shooting weddings, portraiture, events and the like, while at the same time working in the film industry.
                    </p>

                    <p>
                        Due to the multidisciplinary nature of my profession, you’ll find elements of both environment and portraiture in my photography. My style is natural, vibrant and emanates emotion. As I always say, every shot should tell a story. My aim is to inspire a passion within my audience to care for, protect and celebrate the natural beauty in the world around us. I hope to share my love of photography with others, and allow them to feel the pure joy that it brings me.
                    </p>

                    <p>
                        Get in touch with me and let’s chat over a coffee. Also feel free to subscribe to my monthly newsletter where you’ll have access to exclusive content such as limited deals, photography tips and more!
                    </p>

                    <div className='about-me-contact'>
                        <form name='contact'>
                            <input id="contact-name" type="text" placeholder="Your name."/>
                            <input id="contact-email" type="email" placeholder="your.email@example.com"/>
                            <textarea id="contact-message" placeholder="Send me a message!"/>

                            <button onClick={this.onContact}>
                                <i>Contact</i>
                            </button>
                        </form>
                    </div>

                    <div className='about-me-social-media'>
                        <a className='fa-stack fa-2x' href='https://web.facebook.com/tessabarlin.photography/'>
                            <span className='fas fa-circle fa-stack-2x facebook'/>
                            <span className='fab fa-facebook fa-stack-1x fa-inverse'/>
                        </a>

                        <a className='fa-stack fa-2x' href='https://www.instagram.com/tessabarlin_photography/'>
                            <span className='fas fa-circle fa-stack-2x instagram'/>
                            <span className='fab fa-instagram fa-stack-1x fa-inverse'/>
                        </a>

                        <div className="copyright">
                            Copyright © {currentYear} Tessa Barlin <br/> Logos by Jessica Luna Doran
                        </div>
                    </div>
                </div>
            </div>
        </div>;
    }
}
