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

  togglePersons =_=> {
    let buttonText = this.state.buttonStatus === "Hide Persons" ? "Show Persons" : "Hide Persons" ; 
    const show = this.state.showPersons;

    this.setState({
      buttonStatus: buttonText,
      showPersons: !show
    })

  }

  nameHandler =(event, id)=> {
    const persons = [...this.state.persons]
    let personIndex = persons.findIndex(person => person.id === id)
    const person = {...persons[personIndex]}
    person.name = event.target.value;
    persons[personIndex] = person;
    this.setState({persons: persons})
  }

  deleteHandler = id => {
    const personIndex = this.state.persons.findIndex( person => person.id === id)
    const persons = this.state.persons.filter( (person, index) => personIndex !== index)
    this.setState({persons: persons})
  }


  render(){

    let person = null;
    if(this.state.showPersons) {
      person = (
        <div>
          <Persons 
            persons= {this.state.persons}
            changeName = {this.nameHandler}
            deletePerson = {this.deleteHandler}
          />
        </div>
      );
    }

    let emptyMessage = null;
    if(this.state.persons.length === 0){
      emptyMessage = (
        <h2 style={{textAlign : 'center'}} >There is no person to show</h2>
      )
    }

    return(
      <div>
        <button onClick={this.togglePersons}>{this.state.buttonStatus}</button>
        {person}
        {emptyMessage}
      </div>
    )
  }
}