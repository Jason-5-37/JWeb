import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './components/header';
import About from './page/About';
import Project from "./page/Project";
import Footer from "./components/footer";

class App extends Component {

  render() {
    return (
      <>
      <Router>
      <Header/>
      <Switch>
        <Route exact path="/" component={About} />
        <Route path="/project" component={Project} />
      </Switch>
      <Footer/>
      </Router>
      </>
    )
  }
}

export default App;