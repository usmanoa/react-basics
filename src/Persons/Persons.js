import React from 'react'
import Person from './Person/Person'

const Persons = props => {
    return(
        props.persons.map((person)=>{
            return (
              <Person
                key={person.id}
                name={person.name}
                age={person.age} 
                value={person.name}
                change = { event => props.changeName(event, person.id)}
                delete = { _=> props.deletePerson(person.id)}
              />
            )
          })
    )
}

export default Persons