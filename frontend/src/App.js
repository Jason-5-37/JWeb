import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import Header from './components/header';
import About from './page/About';

class App extends Component {

  render() {
    return (
      <>
      <Header/>
      <Router>
      <Switch>
        <Route exact path="/" component={About} />
      </Switch>
      </Router>
      </>
    )
  }
}

export default App;