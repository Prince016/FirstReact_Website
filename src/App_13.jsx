import React from 'react';
import { Route, Switch , Redirect } from "react-router-dom";
import About from './About';
import Contact from './Contact';
import User from './User';
import Error from './Error';
import Search from './Search';
import Navbar from './Navbar';


const App_13 = () => {


    const Name = () => {
        return <h1> hello I am the Name page </h1>
    }

    return (
        <> 
          

            <Navbar />
            <br/>
            <Switch>
                <Route exact path='/' component={()=> <About name="About" /> } />
                <Route exact path='/contact1' render={()=> <Contact name="About" /> } />
                
                {/* using the render method  */}
                <Route path='/contact1/name' component={Name} />
                <Route path='/search' component={Search} />
                <Route path='/user/:fname/:lname' component={User} />
                {/* <Route component={Error} /> */}
                <Redirect to='/' />
            </Switch>

            {/* <About />
            <Contact /> */}
          
        </>
    )
}

export default App_13;