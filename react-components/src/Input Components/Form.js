import React from 'react';
import TextField from './TextField';

/*
    Form Component
    Import other components like TextField to build the form
*/
class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState(
            {
                value: event.target.value
            }
        );
    }

    handleSubmit(event) {
        alert('Value submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <TextField id="textField" value={this.state.value} handleChange={this.handleChange}/> 
                <input type="submit" value="Submit" />
            </form>
        )
    }
}

export default Form;