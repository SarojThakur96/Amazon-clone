import React, {useEffect} from 'react';
import './App.css';
import Header from './Header'
import Home from './Home'
import Checkout from './Checkout'
import Login from './Login'
import Payment from './Payment'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {auth} from "./firebase";
import {useStateValue} from "./StateProvider";
import {Elements} from "@stripe/react-stripe-js";
import {loadStripe} from "@stripe/stripe-js";
const promise = loadStripe(
 "pk_test_51HT8NCIpbdLmcmeUVq3YUQMirG125VlxIW6Ciq2MJAx0heeWSpRaX7ovMh2u8O59IMU51etv0hUa8jMh1vjhRxiX0066zJjjJW"
);
function App() {
  const [{},dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      if (authUser){
         dispatch({
           type: "SET_USER",
           user: authUser
         })
      }
      else{
        dispatch({
          type: "SET_USER",
          user: null
        })
      }
    })
  }, [])
  return (
    <Router>
      <div className="app">

        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>

        </Switch>

      </div>

    </Router>

  );
}

export default App;
