import React from 'react';
import ProfileImage from './profile_image.js';

import '../../css/components/about_me.css';

export default class AboutMe extends React.Component {
    render() {
        return <div className='about-me'>
            <div className='about-me-profile'>
                <ProfileImage src='img/test_profile_1.jpg'/>
            </div>

            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non quam nostram quidem, inquit Pomponius iocans; Ita ne hoc quidem modo paria peccata sunt. Estne, quaeso, inquam, sitienti in bibendo voluptas? Quod autem ratione actum est, id officium appellamus. Iam in altera philosophiae parte. Duo Reges: constructio interrete.
        </div>;
    }
}
