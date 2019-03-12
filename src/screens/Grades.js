import React, {Component} from 'react';
//import './Grades.css'
import Table from '../components/Table';
import Message from '../components/Message';

class Grades extends Component{
    render(){
        let persona = 'Jose'
        let grades = [
            {'name':'Crystal', 'gpa':'3.6'},
            {'name':'Craig', 'gpa':'4.0'},
            {'name':'Cognac', 'gpa':'2.6'},
            {'name':'Domingo', 'gpa':'1.6'},
            {'name':'Rafael', 'gpa':'5.0'}
        ];
        return(
            <div>
                <h1>Student Grades</h1>
                <Message person = {persona}/>
                <Table data={grades}/>
            </div>
        )
    }

}
export default Grades;