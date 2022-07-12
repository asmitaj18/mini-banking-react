import React, { Component } from 'react'
import AuthenticationService from './AuthenticationService'

class LoginComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: '',
            hasLoginFailed: false,
            showSuccessMessage: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.loginClicked = this.loginClicked.bind(this)
        this.createAccClicked = this.createAccClicked.bind(this)
    }

    handleChange(event) {
        this.setState(
            {
                [event.target.name]
                    : event.target.value
            }
        )
    }

    loginClicked() {
        // AuthenticationService.executeBasicAuthenticationService(this.state.username, this.state.password)
        //     .then(() => {
        //             AuthenticationService.registerSuccessfullLogin(this.state.username, this.state.password)
        //             this.props.navigate(`/welcome/${this.state.username}`)
        //     })
        //     .catch(() => {
        //         this.setState({showSuccessMessage:false})
        //         this.setState({hasLoginFailed:true})
        //     })
            AuthenticationService.executeJwtAuthenticationService(this.state.username, this.state.password)
            .then((response) => {
                    AuthenticationService.registerSuccessfullLoginForJwt(this.state.username, response.data.token)
                    this.props.navigate(`/welcome/${this.state.username}`)
            })
            .catch(() => {
                this.setState({showSuccessMessage:false})
                this.setState({hasLoginFailed:true})
            })
    }

    createAccClicked() {
        this.props.navigate('/register')
    }

    render() {
        return (
            <div>
                <h1>Login</h1>
                <div className="container">
                    {/*<ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed}/>*/}
                    {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
                    {this.state.showSuccessMessage && <div>Login Sucessful</div>}
                    {/*<ShowLoginSuccessMessage showSuccessMessage={this.state.showSuccessMessage}/>*/}
                    Email: <input className="m-2" autocomplete="off" type="text" name="username" value={this.state.username} onChange={this.handleChange} />
                    Password: <input className="m-2" autocomplete="off" type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                    <button className="btn btn-success m-2" onClick={this.loginClicked}>Login</button>
                </div>
                <div>
                    <a href="#" className="link-primary" onClick={this.createAccClicked}>Create Account</a>
                </div>
            </div>
        )
    }
}

export default LoginComponent