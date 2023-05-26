import React from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route ,useHistory } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";

function App() {
  const history = useHistory();
  function delayAndGo(e) {
    e.preventDefault();
    setTimeout(() => history.push("/checkout"), 1000);
  }
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout"  onClick={delayAndGo}>
            <Header />
            <Checkout />
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
