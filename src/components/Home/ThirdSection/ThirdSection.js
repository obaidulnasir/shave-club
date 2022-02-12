import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import HeadingText from '../../shared/HeadingText/HeadingText';
import HrLine from '../../shared/HrLine/HrLine';
import image from "./image.jpeg";
import image1 from "./image1.png";
import image2 from "./image2.png";

const ThirdSection = () => {
    return (
        <div>
            <Container className='my-5'>
                <Row className='mt-5'>
                    <Col className='text-center'>
                        <br /><br /><br />
                        <HeadingText size="45px" text="WHY JOIN THE CLUB?"></HeadingText>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col className='col-md-5'>
                        <br /><br /><br />
                        <HrLine></HrLine>
                        <HeadingText text="YOU GET TOP-SHELF PRODUCTS." size="25px"></HeadingText>
                        <ul>
                            <li><HeadingText text="Full product line only on DollarShaveClub.com" size="18px" fWeight="400"></HeadingText></li>
                            <li><HeadingText text="Made with premium ingredients" size="18px" fWeight="400"></HeadingText></li>
                            <li><HeadingText text="Mix and match to find your perfect routine" size="18px" fWeight="400"></HeadingText></li>
                        </ul>
                    </Col>
                    <Col className='col-md-2'></Col>
                    <Col className='col-md-5'>
                        <div>
                            <img src={image} alt="img-1" />
                        </div>
                    </Col>
                </Row>
            </Container>
            <br /><br /><br />
            <Container className='my-5'>
                <Row>
                    <Col className='col-md-5'>
                        <div>
                            <img src={image1} alt="img-2" />
                        </div>
                    </Col>
                    <Col className='col-md-2'></Col>
                    <Col className='col-md-5'>
                        <br /><br /><br />
                        <HrLine></HrLine>
                        <HeadingText text="YOU GET TOP-SHELF PRODUCTS." size="25px"></HeadingText>
                        <ul>
                            <li><HeadingText text="Full product line only on DollarShaveClub.com" size="18px" fWeight="400"></HeadingText></li>
                            <li><HeadingText text="Made with premium ingredients" size="18px" fWeight="400"></HeadingText></li>
                            <li><HeadingText text="Mix and match to find your perfect routine" size="18px" fWeight="400"></HeadingText></li>
                        </ul>
                    </Col>
                </Row>  
            </Container>
            <br /><br /><br /><br />
            <Container>
                <Row>
                    <Col className='col-md-5'>
                        <br /><br /><br />
                        <HrLine></HrLine>
                        <HeadingText text="YOU GET TOP-SHELF PRODUCTS." size="25px"></HeadingText>
                        <ul>
                            <li><HeadingText text="Full product line only on DollarShaveClub.com" size="18px" fWeight="400"></HeadingText></li>
                            <li><HeadingText text="Made with premium ingredients" size="18px" fWeight="400"></HeadingText></li>
                            <li><HeadingText text="Mix and match to find your perfect routine" size="18px" fWeight="400"></HeadingText></li>
                        </ul>
                    </Col>
                    <Col className='col-md-2'></Col>
                    <Col className='col-md-5'>
                        <div>
                            <img src={image2} alt="img-1" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ThirdSection;