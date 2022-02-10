import React from 'react';
import { Button, Col, Container, Form, Row, Stack } from 'react-bootstrap';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import loginStyle from "./Login.module.css"

const Login = () => {
    const {signInWithGoogle} = useAuth();
    const location = useLocation();
    const history = useHistory();
    return (
        <div>
             <Container className='mt-5'>
                <Row>
                    <Col >
                        <Stack gap={2} className={`${loginStyle.myLoginForm} col-md-5 mx-auto p-5`}>
                            <div>
                                <Form>
                                    <h3 className='text-center mb-3'>Please Login</h3>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control type="email" placeholder="Enter email" />
                                        {/* <Form.Text className="text-muted">
                                            We'll never share your email with anyone else.
                                        </Form.Text> */}
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" placeholder="Password" />
                                    </Form.Group>
                                    {/* <Form.Group className="mb-3">
                                        <Form.Check type="checkbox" label="Check me out" />
                                    </Form.Group> */}
                                    {/* <Button variant="primary" type="submit">
                                        Submit
                                    </Button> */}
                                    <div className="d-grid gap-2">
                                        <Button variant="secondary" size="lg">
                                            Login
                                        </Button>
                                    </div>
                                </Form>
                            </div>
                            <hr />
                            <Row className='d-flex justify-content-between text-center'>
                                <Col>
                                    <Button onClick={() => signInWithGoogle(location, history)} variant="secondary">Google Sign In</Button>
                                    <div className='mt-2'>
                                        <Link to="/forgotPass text-dark">Forgot Pass</Link>
                                    </div>
                                </Col>
                                <Col>
                                    <Button variant="secondary">Facebook Sign In</Button>
                                    <div className='mt-2'>
                                        <Link to="/forgotEmail text-dark">Forgot Email</Link>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col className='text-center'>
                                    <Link to="/register"> Not a member? JOIN US!</Link>
                                </Col>
                            </Row>
                        </Stack>
                    </Col>
                </Row>

            </Container>
        {/* <Container className="my-5">
            <Row>
                <Col>
                    <div className="text-center">
                        <button className="btn btn-info btn-lg" onClick={() => signInWithGoogle(location, history)}>SIGN IN WITH GOOGLE</button>
                        <br /><br /><h4>{user?.email}</h4>
                    </div>
                </Col>
            </Row>
        </Container> */}
    </div>
    );
};

export default Login;