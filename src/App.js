import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

export default class App extends Component {
  state = {
    persons: [
      {id: '1', name: "Ali", age: 22},
      {id: '2', name: "John", age: 33},
      {id: '3', name: "Mary", age: 44},
    ],
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
         
    return(
      this.state.persons.map((person, index)=> {
        return(
          <Person 
            name={this.state.name}
            value={this.state.name}
            age={this.state.age}
          />
        )
      })
    )
  }
}