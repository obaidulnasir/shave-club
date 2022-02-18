import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import HeadingText from '../shared/HeadingText/HeadingText';

const OrderPage = () => {
    const {user} = useAuth();
    const { id } = useParams();
    const [orderProduct, setOrderProduct] = useState({});
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm();

    useEffect(() => {
        fetch(`https://protected-lowlands-25877.herokuapp.com/singleProduct/${id}`)
            .then(res => res.json())
            .then(data => setOrderProduct(data));
    }, [id]);

    // order placed 

    const onSubmit = (data) => {
        fetch("https://protected-lowlands-25877.herokuapp.com/placeOrder", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((data) => {
                alert("product added successfully!!");
                reset();
            });
    };
    return (
        <div>
            <Container className='my-5'>
                <Row>
                    <Col className='text-center border'>
                        <img src={orderProduct.img} alt="img" width="60%" />
                        <p style={{ fontSize: "30px", fontWeight: "800", color: "#001233" }}>{orderProduct.price} $</p>

                        <HeadingText text={orderProduct.productName} size="25px"></HeadingText>
                    </Col>
                    <Col className='border p-5 mx-1'>
                        <div>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-group">
                                    <label>Your Name</label>
                                    <input
                                        type="name"
                                        className="form-control"
                                        defaultValue={user?.displayName}
                                        placeholder="Your Name"
                                        {...register("userName", { required: true })}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Email address</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="Enter email"
                                        defaultValue={user?.email}
                                        {...register("email", { required: true })}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Product</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        defaultValue={orderProduct.productName}
                                        placeholder=""
                                        {...register("product", { required: true })}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Price</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        defaultValue={orderProduct?.price}
                                        placeholder=""
                                        {...register("price", { required: true })}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Date</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        defaultValue={new Date().toLocaleString()}
                                        placeholder=""
                                        {...register("date", { required: true })}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Phone</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        defaultValue="+880 "
                                        placeholder=""
                                        {...register("phone", { required: true })}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Address</label>
                                    <textarea
                                        className="form-control"
                                        rows="3"
                                        {...register("address")}
                                    ></textarea>
                                    {errors.exampleRequired && <span>This field is required</span>}
                                </div>
                                <input className="btn btn-outline-dark my-2" type="submit" value="Place Order" />
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>

        </div>
    );
};

export default OrderPage;