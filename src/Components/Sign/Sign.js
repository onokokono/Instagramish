import React, {Component} from 'react'
import './Sign.css'
import {BrowserRouter as Router, Route, Switch, NavLink} from 'react-router-dom'
import SignIn from './Pages/SignIn'
import SignUp from './Pages/SignUp'
import NotFound from '../Error/NotFound'

class SignMainFrame extends Component
{
    render()
    {
        return(
            <Router>
                <div className="MainFrame">
                    <div className="FormBody">

                        <div className="PageSwitcher">
                            <NavLink exact to="/Auth/SignIn" activeClassName="PageSwitcher_Item--Active" className="PageSwitcher_Item">Sign In</NavLink>
                            <NavLink exact to="/Auth/SignUp" activeClassName= "PageSwitcher_Item--Active" className="PageSwitcher_Item">Sign Up</NavLink>
                        </div>
                        
                        <Switch>

                            <Route exact path="/Auth/SignUp" component={SignUp} ></Route>

                            <Route exact path="/Auth/SignIn" component={SignIn}></Route>

                            <Route component={NotFound}></Route>
                        </Switch>
                    </div>
                </div>
            </Router>
        );
    }
}

export default SignMainFrame;