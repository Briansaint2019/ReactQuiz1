import React, {Component} from 'react';
// import './Table.css';

class Table extends Component{
    render(){
        const rows = this.props.data.map((e,i) =>{
            return(
            <tr key={i}>
            <td>{e.name}</td>
            <td>{e.gpa}</td>
            </tr>
            )    
    });

        return(
            <table className='tabla'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>GPA</th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        );
    }
}

export default Table;