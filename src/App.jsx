import React from "react";
import Home from "./Home";
import Myblog from './Myblog';
import About from './About';
import Contact from './Contact';
import Form from './Form';
import Form1 from './Form1';
import Anotherform from './Anotherform';
import Hooks from './Hooks';
import {Route,Switch} from "react-router-dom";
function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/myblog" component={Myblog}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/contact" component={Contact}/>
        <Route exact path="/form" component={Form}/>
        <Route exact path="/form1" component={Form1}/>
        <Route exact path="/anotherform" component={Anotherform}/>
        <Route exact path="/hooks" component={Hooks}/>
        <Route component={Home}/>
      </Switch>
    </>
    );
}

export default App;
