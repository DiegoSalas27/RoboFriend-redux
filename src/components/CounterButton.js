import React, { PureComponent } from 'react';

//PureComponent is another way to avoid the class component to rerender
class CounterButton extends PureComponent {
    constructor() {
        super();
        this.state = {
            count: 0
        }
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     if (this.state.count !== nextState.count) {
    //         return true;
    //     } 
    //     return false;
    // }
    
    //state updates are not synchronous, so if you are going to update the state of a component
    //from it's previous state value, it's recommended to return it this way
    updateCount = () => {
        this.setState(state => {
            return { count: state.count + 1}
        })
    }

    render() {
        console.log('CounterButton')
        return (
            <button color={this.props.color} onClick={this.updateCount}>
                Count: {this.state.count}
            </button>
        );
    }
}

export default CounterButton;