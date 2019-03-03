import React, { Component } from 'react';

class ErrorBoundry extends Component {
    constructor(props){
        super(props);
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error, info) { //same as try catch block
        this.setState({ hasError: true })
    }

    render() {
        if (this.state.hasError) {
            return <h1>Ops. There is an error my niggu!</h1>
        }
        return this.props.children
    }
}

export default ErrorBoundry;