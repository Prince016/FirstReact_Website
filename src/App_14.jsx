import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Redirect, Route, Switch } from 'react-router-dom'
import About_14 from './About_14'
import Contact_14 from './Contact_14'
import Home_14 from './Home_14'
import Services_14 from './Services_14'
import Navbar_14 from './Navbar_14';
import Footer_14 from './Footer_14';




const App_14 = () => {
    return (
        <>
        <Navbar_14/>
        <Switch>
        <Route exact path="/" component={Home_14}  />
        <Route exact path="/about" component={About_14}  />
        <Route exact path="/contact" component={Contact_14}  />
        <Route exact path="/services" component={Services_14}  />
        <Redirect to="/" />
        </Switch>
        <Footer_14/>
           </>
    )
}

export default App_14;
