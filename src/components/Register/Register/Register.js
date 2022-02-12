import React from 'react';
import { Button, Col, Container, Form, Row, Stack } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

import registerStyle from './Register.module.css'

const Register = () => {
    const { signInWithGoogle, handleUserRegister } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        handleUserRegister(data.email, data.password, location, history);
        console.log(data);
    };
    return (
        <div>
            <Container className='mt-5'>
                <Row>
                    <Col >
                        <Stack gap={2} className={`${registerStyle.myRegisterForm} col-md-5 mx-auto p-5`}>
                            <div>
                                <Form onSubmit={handleSubmit(onSubmit)}>
                                    <h3 className='text-center mb-3'>Welcome to Shave Club. Please Register Your Account</h3>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control {...register("email")} type="email" placeholder="Enter email" />
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control {...register("password")} type="password" placeholder="Enter Your New Password" />
                                    </Form.Group>
                                    {errors.exampleRequired && <span>This field is required</span>}
                                    <input className="mt-3 btn btn-dark btn-lg" type="submit" value="Register" />
                                </Form>

                            </div>
                            <hr />
                            <Row className='d-flex justify-content-between text-center'>
                                <Col>
                                    <Button onClick={signInWithGoogle} variant="secondary">Google Sign In</Button>
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
                                    <Link to="/login"> Registered Member? LOGIN!</Link>
                                </Col>
                            </Row>
                        </Stack>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Register;