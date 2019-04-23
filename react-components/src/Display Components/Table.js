import React from 'react'
/*
    Table Class to display data in a table
    Current Functionality of class:
        -Display a header row
        -Display n other normal rows
*/
class Table extends React.Component { 

    constructor (props) {
        super(props);
    }

    render() {
        return (
            <table className="table" id="table">
                <thead>
                    <TableHeader headers={this.props.headers} />
                </thead>
                <tbody>
                    {this.props.items.map(item => {
                            return <TableRow items={item} />
                        })
                    }
                </tbody>
            </table>
        )
    }
}

/*
    Represents a single row within the table
*/
class TableRow extends React.Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        var keys = Object.keys(this.props.items);
        var data = [];
        keys.forEach(key => {
            data.push(this.props.items[key]);
        })
        return (
            <tr>
            {data.map(item => {
                return <td key={item}>{item}</td>
                })
            }
            </tr>)
    }
}

/*
    The header row for the table
*/
class TableHeader extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <tr>
                {
                    this.props.headers.map( item => {
                            return <th key={item}>{item}</th>
                        }
                    )
                }
            </tr>
        );
    }
}

export default Table;