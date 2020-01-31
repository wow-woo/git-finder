import "./App.css";

//tool
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//module
import Home from "./components/pages/Home";
import Navbar from "./components/layout/Navbar";
import User from "./components/Users/User";
import Alert from "./components/layout/Alert";
import About from "./components/pages/About";
import GithubState from "./context/github/GithubState";
import Notfound from "./components/pages/Notfound";

const App = () => {
  return (
    <GithubState>
      <Router>
        <div className='App'>
          <Navbar />
          <div className='container'>
            <Alert />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/about' component={About} />
              <Route exact path='/user/:login' component={User} />
              <Route path='/*' component={Notfound} />
            </Switch>
          </div>
        </div>
      </Router>
    </GithubState>
  );
};

export default App;
