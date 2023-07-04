import React, { useEffect } from "react";
// import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route  } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";
import Orders from "./Orders";
import {loadStripe} from "@stripe/stripe-js"
import {Elements} from "@stripe/react-stripe-js"
import Cars from "./Cars";
import Footer from "./Footer";
import Tent from "./Tent";
import Stage from "./Stage";



const promise = loadStripe(
  "pk_test_51NDPN3SEBmGjpz0240xtS4otsOgtkthY3v59UlYOoawwTVxDg1Wkxi4Rybu2LXYHaTKpQ0FroedHMHM6WdSQEAQZ00W6zkOnjx"
  );


function App() {
  const [{}, dispatch] = useStateValue();
 useEffect(() => {
  //willcrun once when the app component load
   auth.onAuthStateChanged((authUser) => {
    console.log('THE USER IS >>>', authUser);

    if (authUser){
      //the user just logged in / the user was logged in
      dispatch({
        type: 'SET_USER',
        user: authUser
      })
    } else{
      //the user is logged out
      dispatch({
        type: 'SET_USER',
        user: null
      })
    }
   })
 }, [])
 



  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/orders">
          <Header />

            <Orders />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout"  >  
            <Header />
            <Checkout />
          </Route>

          <Route path="/payment"  >  
            <Header />
            <Elements stripe={promise}>
             <Payment/>
             </Elements>
          </Route>

          <Route exact path='/'>
           <Header/> 
           <Home />
           <Tent/>
           <Stage/>
           <Cars/>
           {/* <Decoration/> */}
           <Footer/>

           </Route>

        <Route path='/home'>
        <Header/> 
        <Home />
        {/* <Form/> */}
        </Route>

        <Route path='/tent'>
        <Header/> 
        <Tent/>
        {/* <Form/> */}
        <Footer/>
        </Route>

        <Route path='/stage'>
        <Header/> 
        <Stage/>
        {/* <Form/> */}
        <Footer/>
        </Route>

        <Route path='/cars'>
        <Header/> 
        <Cars/>
        {/* <Form/> */}
        <Footer/>
        </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
