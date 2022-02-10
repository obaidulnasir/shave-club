import React from 'react';
import { Col, Row } from 'react-bootstrap';
import MyButton from '../../shared/MyButton/MyButton';
import bannerImg from "./banner.jpeg"
import bannerStyle from "./HomeBanner.module.css"

const HomeBanner = () => {

    return (
        <div>
            <div className={bannerStyle.bannerLeftSide}>
                <Row className='d-flex align-items-center p-3'>
                    <Col>
                        <h2 style={{fontSize:"65px", color:"#ff595a", fontWeight:"800"}}>THE ULTIMATE SHAVE</h2>
                        <p style={{color:"#efe0c9"}}>* No Subscription Required </p>
                        <MyButton text="Sell 18$" color="#ff595a"></MyButton>
                    </Col>
                    <Col>
                        <img src={bannerImg} width="90%" alt="banner-img" />
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default HomeBanner;