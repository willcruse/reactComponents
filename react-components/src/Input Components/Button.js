import React from 'react';

/*
    Simple unstyled button
*/
class Button extends React.Component {
    constructor(props) {
        super(props);
    }

    handleClick(e) {
        alert("Hello");
    }

    render() {
        return (<button onClick={(e) => this.handleClick(e)} id={this.props.id}>{this.props.label}</button>);
    }
}

export default Button;