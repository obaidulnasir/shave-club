import React from 'react';
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
        </div>
    );
};

export default Home;