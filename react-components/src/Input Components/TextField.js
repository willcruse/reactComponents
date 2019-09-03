import React from 'react';

/*
    A text field input
    
*/
class TextField extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (<input type={Text} value={this.props.value} id={this.props.id} onChange={this.props.handleChange}/>);
    }
}

export default TextField;