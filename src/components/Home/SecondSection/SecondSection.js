import React from 'react';
import bannerTwoStyle from "./SecondSection.module.css"
import bannerTwo from "./banner-2.jpeg"
import { Col, Container, Row } from 'react-bootstrap';
import HeadingText from '../../shared/HeadingText/HeadingText';
import MyButton from '../../shared/MyButton/MyButton';

const SecondSection = () => {
    return (
        <div>
            <Container>
                <Row className='my-4'>
                    <Col>
                        <div className="text-center my-5">
                            <HeadingText size="45px" text="ANOTHER WAY TO JOIN THE CLUB."></HeadingText>
                        </div>
                    </Col>
                </Row>
            </Container>
            {/* banner section  */}
            <div className={`${bannerTwoStyle.bannerImages} d-flex justify-content-center align-items-center`} style={{ backgroundImage: `url(${bannerTwo})` }}>
                <Container>
                    <Row >
                        <Col>
                            <HeadingText size="35px" text="JOIN THE MILLIONS ALREADY IN THE CLUB."></HeadingText>
                            <p style={{color:"#001233"}}>* No Subscription Required </p>
                            <MyButton text="Sell For 5$"></MyButton>
                        </Col>
                        <Col>
                            
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default SecondSection;