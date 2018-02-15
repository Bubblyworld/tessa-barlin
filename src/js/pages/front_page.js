import React from 'react';
import Background from '../components/background.js';
import Header from '../components/header.js';
import NavBar from '../components/navbar.js';
import AboutMePage from './about_me_page.js';

import '../../css/pages/front-page.css';

export default class FrontPage extends React.Component {
    render() {
        return <div className='front-page'>
            <Background url='img/bg.jpg'/>

            <Header/>

            <NavBar/>

            <AboutMePage/>
        </div>;
    }
}
