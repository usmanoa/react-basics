import React from 'react';
import './Person.css'

const  person = props => {
    return (
        <div className="person">
            <p>My name is {props.name}</p>
            <input type="text" value={props.value} onChange={props.change}/>
            <span onClick={props.delete} >X</span>
            <p>I'm {props.age} years old</p>
        </div>
    )
}

export default person;