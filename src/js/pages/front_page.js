import React from 'react';
import Background from '../components/background.js';
import Header from '../components/header.js';
import NavBar from '../components/navbar.js';

import '../../css/pages/front-page.css';

export default class FrontPage extends React.Component {
    render() {
        return <div className='front-page' id = 'front'>
            <Background url='img/bg.jpg'/>

            <Header/>

            <NavBar/>
        </div>;
    }
}
