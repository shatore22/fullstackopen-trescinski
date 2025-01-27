import { useState } from 'react'
import Person from './components/Person'

const App = (props) => {
  const [persons, setPersons] = useState(props.persons || []) 
  const [newPerson, setNewPerson] = useState('a new person...')

  const handlePersonChange = (event) => {    
    console.log(event.target.value)    
    setNewPerson(event.target.value)  
  }

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      content: newPerson,
      id: String(persons.length + 1),
    }
    
    persons.forEach(person => {
      if(newPerson == person){
        alert(`${newPerson} is already added to phonebook`)
      }
    });

    setPersons(persons.concat(personObject))
    setNewPerson('')
  }


  return (

    <div>
      <h2>Phonebook</h2>
        <div>
          <form onSubmit={addPerson}>        
            name: <input value={newPerson} onChange={handlePersonChange}/>   
            <button type="submit">save</button>      
          </form>  
        </div>
      <h2>Numbers</h2>
      <ul>
        {persons.map(person =>
          <Person key={person.id} person={person} />
        )}
      </ul>
    </div>
  )
}

export default App