import React from 'react';
import Background from '../components/background.js';
import Header from '../components/header.js';
import NavBar from '../components/navbar.js';

import '../../css/pages/front-page.css';

export default class FrontPage extends React.Component {
    render() {
        // We include the style prop as this is critical CSS.
        return <div className='front-page' id = 'front' style={{height: '100vh'}}>
            <Background url='img/bg.jpg'/>

            <Header/>

            <NavBar/>
        </div>;
    }
}
