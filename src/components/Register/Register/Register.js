import React from 'react';
import { Button, Col, Container, Form, Row, Stack } from 'react-bootstrap';

import registerStyle from './Register.module.css'

const Register = () => {



    //   const onSubmit = (data) => {
    //     handleUserRegister(data.email, data.password, data.userName, location, history);
    //     reset();
    //   };
    return (
        <div>
            <Container className='mt-5'>
                <Row>
                    <Col >
                        <Stack gap={2} className={`${registerStyle.myRegisterForm} col-md-5 mx-auto p-5`}>
                            <div>
                                <Form>
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
                                    <Button variant="primary" type="submit">
                                        Submit
                                    </Button>
                                </Form>
                            </div>
                            <Button variant="secondary">Save changes</Button>
                            <Button variant="outline-secondary">Cancel</Button>
                        </Stack>
                    </Col>
                </Row>

            </Container>
        </div>
    );
};

export default Register;