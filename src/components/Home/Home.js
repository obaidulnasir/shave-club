import React from 'react';
import Testimonial from '../shared/Testimonial/Testimonial';
import FourthSection from './FourthSection/FourthSection';
import HomeBanner from './HomeBanner/HomeBanner';
import OurServices from './OurServices/OurServices';
import SecondSection from './SecondSection/SecondSection';
import ThirdSection from './ThirdSection/ThirdSection';

const Home = () => {

    return (
        <div>
            <HomeBanner></HomeBanner>
            <OurServices></OurServices>
            <SecondSection></SecondSection>
            <ThirdSection></ThirdSection>
            <FourthSection></FourthSection> 
            <Testimonial></Testimonial>           
        </div>
    );
};

export default Home;