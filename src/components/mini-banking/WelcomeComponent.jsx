import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class WelcomeComponent extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <>
                <h1>Welcome!</h1>
                <div className="container">
                Welcome {this.props.params.name}.
                You can manage view transactions <Link to="/transactions">here</Link>.
                </div>
            </>
        )
    }
}

export default WelcomeComponent