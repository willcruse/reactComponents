import React from 'react'

class Table extends React.Component {

    constructor (props) {
            super(props);
    }

    render() {
        console.log(this.props);
        return (
            <table id="table">
                <TableHeader headers={this.props.headers} />
                {this.props.items.map(item => {
                    return <TableRow id={item.id} name={item.name} price={item.price} />
                })
                }
            </table>
        )
    }
}

class TableRow extends React.Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        
        return (<tr>
                    <td key={this.props.id}>{this.props.id}</td>
                    <td key={this.props.name}>{this.props.name}</td>
                    <td key={this.props.price}>{this.props.price}</td>
                </tr>)
    }
}

class TableHeader extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <th>
                {
                    this.props.headers.map( item => {
                            return <td key={item}>{item}</td>
                        }
                    )
                }
            </th>
        );
    }
}

export default Table;