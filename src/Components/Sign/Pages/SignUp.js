import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Link, Redirect} from 'react-router-dom'
import {SignUpService} from '../../../Services/Sign/Authentication'

class SignUpForm extends Component
{
    constructor(props)
    {
        super(props);

        this.state={
            user:{
                email:'',
                roles:['ROLE_CLIENT'],
                username:'',
                password:''
            
            },
            redirect: false
        }

        this.SignUp = this.SignUp.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    SignUp()
    {
        console.log('sending: ' + JSON.stringify(this.state));
        if(this.state.username && this.state.password && this.state.email)
        {
            if(this.state.password == this.state.password_confirm)
            {
                SignUpService('signup', this.state)
                .then((result) => {
                    if(!result.body.error)
                    {
                        this.setState({redirect: true,});
                    }
                    else
                    {
                        console.log("error: " + result.body.error.errorDesc);
                    }
                })
            }
        }
    }

    onChange(e)
    {
        var statusCopy = Object.assign({}, this.state);
        statusCopy.user[e.target.name].name = e.target.value;

        this.setState(statusCopy);

        console.log(this.state);
    }

    render()
    {
        if(this.state.redirect)
        { 
            return (<Redirect to={'/Auth/SignIn'}/> )
        }
        else
        {
            return(
                <div className="FormCenter">
                    <div className="FormFields" onSubmit={this.handleSubmit}>
                        <div className="FormField">
                                <label className="FormField_Label" htmlFor="email">Email Address</label>
                                <input onChange={this.onChange} type="email" id="email" className="FormField_Input" placeholder="Enter your email address" name="email"></input>
                        </div>
    
                        <div className="FormField">
                            <label className="FormField_Label" htmlFor="fullname">Username</label>
                            <input onChange={this.onChange} type="text" id="username" className="FormField_Input" placeholder="Enter your Username" name="username"></input>
                        </div>
    
                        <div className="FormField">
                            <label className="FormField_Label" htmlFor="password">Password</label>
                            <input onChange={this.onChange} type="password" id="password" className="FormField_Input" placeholder="Enter your full name" name="password"></input>
                        </div>
    
                        <div className="FormField">
                            <label className="FormField_Label" htmlFor="password_confirm">confirm password</label>
                            <input onChange={this.onChange} type="password" id="password_confirm" className="FormField_Input" placeholder="Enter your full name" name="password_confirm"></input>
                        </div>
    
                        <div className="FormField">
                            <button onClick={this.SignUp} className="FormField_Button">Sign Up</button>
                            <Link to="/Auth/SignIn" className="FormField_Link">Already have an account?</Link>
                        </div>
    
                    </div>
                </div>
            );
        }

    }
}

export default SignUpForm;