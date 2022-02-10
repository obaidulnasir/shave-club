import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import AuthProvider from './components/AuthProvider/AuthProvider';
import Home from './components/Home/Home';
import Login from './components/Register/Login/Login';
import PrivateRoute from './components/Register/PrivateRoute/PrivateRoute';
import Register from './components/Register/Register/Register';
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
        <PrivateRoute path="/shop">
          <Shop></Shop>
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
     </BrowserRouter>
     </AuthProvider>
    </div>
  );
}

export default App;