import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const {user, signInWithGoogle} = useAuth();
    const location = useLocation();
    const history = useHistory();
    return (
        <div>
        <Container className="my-5">
            <Row>
                <Col>
                    <div className="text-center">
                        <button className="btn btn-info btn-lg" onClick={() => signInWithGoogle(location, history)}>SIGN IN WITH GOOGLE</button>
                        <br /><br /><h4>{user?.email}</h4>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
    );
};

export default Login;