//import the library
import React from 'react';
import './employee.css';

// create a component
const employee = function(props){
    return (<div class="Employee" onClick={props.deleteHandler}>
        <p><label>Employee</label>:<input value={props.name} onChange={props.changeNameHandler} /></p>
        <p><label>Date of Birth</label>:{props.date_of_birth}</p>
        <p><label>Position Held</label>:<input value={props.position} onChange={props.changePositionHandler} /></p>
    </div>);
};

// exporting the component
export default employee;