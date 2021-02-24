import React from 'react';
import { Route, Switch } from "react-router-dom";
import About from './About';
import Contact from './Contact';
import Error from './Error';
import Navbar from './Navbar';


const App_12 = () => {


    const Name = () => {
        return <h1> hello I am the Name page </h1>
    }

    return (
        <> 
          <div ClassName="navbarstyle">

            <Navbar />
            <br/>
            <Switch>
                <Route exact path='/' component={()=> <About name="About" /> } />
                <Route exact path='/contact1' render={()=> <Contact name="About" /> } />
                
                {/* using the render method  */}
                <Route path='/contact1/name' component={Name} />
                <Route component={Error} />
            </Switch>

            {/* <About />
            <Contact /> */}
          </div>
        </>
    )
}

export default App_12;