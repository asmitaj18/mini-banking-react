import { Component } from "react";

class RegisterUserComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            user : {firstName: 'Asmita', lastName: 'Jain', email: 'jain.asmita2017@gmail.com', password: 'test'}
        }
        this.registerUser = this.registerUser.bind(this)
    }

    registerUser() {
        
    }

    render () {
        return(
            <div className="container">
                <div>
                    <label>Enter First Name:<sup className="text-red">*</sup></label>
                    <input className="m-3" type="text" />
                </div>

                <div>
                    <label>Enter Last Name:<sup className="text-red">*</sup></label>
                    <input className="m-3" type="text" />
                </div>

                <div>
                    <label>Enter Email:<sup className="text-red">*</sup></label>
                    <input className="m-3" type="text" />
                </div>

                <div>
                    <label>Enter Password:<sup className="text-red">*</sup></label>
                    <input className="m-3" type="password" />
                </div>

                <button className="btn btn-success m-2" onClick={this.registerUser}>Register</button>
            </div>
        )
    }

}

export default RegisterUserComponent