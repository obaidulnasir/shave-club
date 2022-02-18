import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
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
            <div style={{backgroundColor:"#001233"}}>
            <Container>
                    <Row>
                        <Col className='col-md-9 p-2'>
                            <h3 style={{ color: "#efe0c9", fontSize: "28px" }}>A bit about the Club</h3>
                            <p style={{ color: "#efe0c9" }}>We disrupted the shaving industry in 2011 by delivering "F*cking Great Blades" at an awesome price, right to your door. We've been listening to our Members' needs ever since, and now have you covered from hair to toe with a growing list of top-shelf grooming products. We spend our days focused on helping you look, feel, and smell your best (with the occasional office dog in our lap)</p>
                        </Col>
                        <Col></Col>
                    </Row>
                </Container>
            </div>          
        </div>
    );
};

export default Home;