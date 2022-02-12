import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import AuthProvider from './components/AuthProvider/AuthProvider';
import Dashboard from './components/Dashboard/Dashboard';
import Home from './components/Home/Home';
import OrderPage from './components/OrderPage/OrderPage';
import Product from './components/Product/Product';
import ProductDetails from './components/ProductDetails/ProductDetails';
import Login from './components/Register/Login/Login';
import PrivateRoute from './components/Register/PrivateRoute/PrivateRoute';
import Register from './components/Register/Register/Register';
import Footer from './components/shared/Footer/Footer';
import Navigation from './components/shared/Navigation/Navigation';
import Shop from './components/Shop/Shop';


function App() {
  return (
    <div className="">
     <AuthProvider>
     <BrowserRouter>
     <Navigation></Navigation>
      <Switch> 
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/product">
          <Product></Product>
        </Route>
        <Route path="/singleProduct/:id">
          <ProductDetails></ProductDetails>
        </Route>
        <Route path="/orderPage/:id">
          <OrderPage></OrderPage>
        </Route>
        <PrivateRoute path="/shop">
          <Shop></Shop>
        </PrivateRoute>
        <PrivateRoute path="/dashboard">
          <Dashboard></Dashboard>
        </PrivateRoute>
        <Route path="/register">
          <Register></Register>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route exact path="/">
          <Home></Home>
        </Route>
      </Switch>
      <Footer></Footer>
     </BrowserRouter>
     </AuthProvider>
    </div>
  );
}

export default App;
