import React from "react";
import Navbar from "./Navbar";
import {Switch, Route} from "react-router-dom";
import Home from "./views/Home";
import Submit from "./views/Submit";
import Popular from "./views/Popular";
import Footer from "./Footer";

class App extends React.Component {
  render(){
    return(
      <div className="app-wrapper">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/popular" component={Popular}/>
          <Route exact path="/submit" component={Submit}/>
        </Switch>
        <Footer />
      </div>
    )
  }
}

export default App;
