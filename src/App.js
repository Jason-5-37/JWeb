import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import Header from './components/header';
import About from './page/About';
import Project from "./page/Project";

class App extends Component {

  render() {
    return (
      <>
      <Header/>
      <Router>
      <Switch>
        <Route exact path="/" component={About} />
        <Route exact path="/project" component={Project} />
      </Switch>
      </Router>
      </>
    )
  }
}

export default App;