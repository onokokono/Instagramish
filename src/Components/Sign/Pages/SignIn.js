import React, { Component } from 'react'
import {Link, Redirect} from 'react-router-dom'
import {withRouter} from 'react-router-dom'
import {SignInService, search} from '../../../Services/Sign/Authentication'

class SignIn extends Component
{
    constructor(props)
    {
        super(props);
        
        this.state = {
            username: '',
            password: '',
            redirect: false
        }
        this.login = this.login.bind(this)
        this.onChange = this.onChange.bind(this);
    }

    login(e)
    {
        if(this.state.username && this.state.password)
        {
            SignInService('signin', this.state).then( (result) => {
                let responseJSON = result;
                console.log(responseJSON);
                if(responseJSON.body.response.token)
                {
                    sessionStorage.setItem('LoggedUserData', responseJSON);
                    this.setState({redirect: true});
                }
            })
        }
        else
        {
            console.log("Please enter username and password");
        }
    }

    onChange(e)
    {
        this.setState({[e.target.name]: e.target.value});
    }

    jumpToHome(){ 
        var page = '';
        window.history.pushState(page, 'random' , '/Home')
    }

    render()
    {
        if(this.state.redirect)
        {
            this.jumpToHome()
        }

        return(
            <div className="FormCenter">
                <div className="FormFields">
                    <div className="FormField">
                            <label className="FormField_Label" htmlFor="username">Username</label>
                            <input onChange={this.onChange} type="text" id="username" className="FormField_Input" placeholder="Username" name="username"></input>
                    </div>

                    <div className="FormField">
                        <label className="FormField_Label" htmlFor="password">Password</label>
                        <input onChange={this.onChange} type="password" id="password" className="FormField_Input" placeholder="Password" name="password"></input>
                    </div>

                    <div className="FormField">
                        <button onClick={this.login} className="FormField_Button">Sign In</button>
                        <Link to="/Auth/SignUp" className="FormField_Link">Don't have an account?</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(SignIn);