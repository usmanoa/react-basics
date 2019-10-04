import React, { Component } from 'react';
import './App.css';

export default class App extends Component {
  state = {
    persons: [
      {id: '1', name: "Ali", age: 22},
      {id: '2', name: "John", age: 33},
      {id: '3', name: "Mary", age: 44},
    ],
  } 

  render(){
    return(
      this.state.persons.map((person, index)=> {
        return (
          <div >
              <p>My name is {this.state.name}</p>
              <input type="text" />
              <p>I'm {this.state.age} years old</p>
          </div>
        )
      })
    )
  }
}