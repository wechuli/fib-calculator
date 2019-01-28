import React, { Component } from "react";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import OtherPage from "./components/OtherPage";
import Fib from "./components/Fib";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">
              The Fibonaci Sequence Calculator
            </h1>
            <div className="nav-items">
              <div>
                <Link to="/">Home</Link>
              </div>
              <div>
                <Link to="/otherpage">Other Page</Link>
              </div>
            </div>
          </header>
          Its working
          <div>
            <Route exact path="/" component={Fib} />
            <Route path="/otherpage" component={OtherPage} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
