import React, { Component } from 'react';
import './App.css';
import Persons from './Persons/Persons'

export default class App extends Component {
  state = {
    persons: [
      {id: '1', name: "Ali", age: 22},
      {id: '2', name: "John", age: 33},
      {id: '3', name: "Mary", age: 44},
    ],
    buttonStatus: "Hide Persons",
    showPersons: true,
  } 

  

  nameHandler =(event, id)=> {
    const persons = [...this.state.persons]
    let personIndex = persons.findIndex(person => person.id === id)
    const person = {...persons[personIndex]}
    person.name = event.target.value;
    persons[personIndex] = person;
    this.setState({persons: persons})
  }

  render(){

    
      let person = (
        <div>
          <Persons 
            persons= {this.state.persons}
            changeName = {this.nameHandler}
            deletePerson = {this.deleteHandler}
          />
        </div>
      );
   
    return(
      <div>
        {person}
      </div>
    )
  }
}