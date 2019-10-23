import React from 'react';
import classes from './Cockpit.module.css';


const Cockpit = (props) => {

    let assignedClasses = [];
    let btnClass = '';
    if(props.shoPersons){
        btnClass = classes.red;
    }
    
    if(props.persons.length <= 2){
      assignedClasses.push(classes.red); 
    }
    if(props.persons.length <= 1){
      assignedClasses.push(classes.bold);
    }

    return (
        <div className={classes.Cockpit}>
        <h1> hi, I'm a react app</h1>
        <p className={assignedClasses.join(' ')}>This is really working!</p>
        <button
        className= {btnClass} 
        onClick={props.toggle}>Toggle persons</button>
        </div>
    )
}

export default Cockpit;