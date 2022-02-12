import React from 'react';
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import useAuth from '../../hooks/useAuth';
import MyOrder from './MyOrder/MyOrder';
import AddProduct from './AddProduct/AddProduct';



const Dashboard = () => {
    const { path, url } = useRouteMatch();
    const { user } = useAuth();
    return (
        <div>
            <div className="text-center my-5">
                {/* <h3>this is dashboard</h3> */}
                <div>
                    <img className="avatar" src={user?.photoURL} alt="Profile-Pic" />
                    <h2>{user?.displayName}</h2>
                </div>
                <div>
                    <div className="d-grid gap-2 d-md-block">
                        <Link to={`${url}`}>
                            <button className="btn btn-primary mx-1" type="button">My Order</button>
                        </Link>
                        <Link to={`${url}/addProduct`}>
                            <button className="btn btn-primary mx-1" type="button">Add Product</button>
                        </Link>
                    </div>
                </div>
                <hr />
                <div>
                    <Switch>
                        <Route exact path={path}>
                            <MyOrder></MyOrder>
                        </Route>
                        <Route exact path={`${path}/addProduct`}>
                            <AddProduct></AddProduct>
                        </Route>
                    </Switch>
                </div>


                <br /><br /><br /><br /><br /><br />
            </div>
        </div>
    );
};

export default Dashboard;