import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Table } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

const ManageOrder = () => {
    const [myOrder, setMyOrder] = useState([]);
    const {user} = useAuth();
    useEffect(() => {
        fetch(`https://protected-lowlands-25877.herokuapp.com/allOrder`)
            .then(res => res.json())
            .then(data => setMyOrder(data));
    }, [user?.email]);

    //Delete order
    const handleDelete = (id) => {
        const toDelete = window.confirm('Are you sure to delete this order?')
        if (toDelete) {
            fetch(`https://protected-lowlands-25877.herokuapp.com/${id}`, {
                method: "DELETE",
                headers: { "content-type": "application/json" },
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.deletedCount) {
                        //   setControl(true);
                    } else {
                        //   setControl(false);
                    }
                });
        };
    };
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Date</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            {myOrder?.map((mo, index) => (
                                <tbody>
                                    <tr>
                                        <td>{index + 1}</td>
                                        <td>{mo?.product}</td>
                                        <td>{mo?.email}</td>
                                        <td>{mo?.date}</td>
                                        <td> <button
                                            onClick={() => {
                                                handleDelete(mo._id);
                                            }}
                                            className="btn bg-danger p-2"
                                        >Delete
                                        </button></td>
                                        {/* modal */}

                                    </tr>
                                </tbody>
                            ))}
                        </Table>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ManageOrder;