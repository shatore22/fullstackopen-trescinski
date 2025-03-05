import { useState } from 'react'
import Person from './components/Person'

const App = (props) => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('');

  const handleNameChange = (event) => {    
    setNewName(event.target.value)  
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }
  
  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber,
      id: String(persons.length + 1),
    }
    
    if (persons.some(person => person.name === newName)) {
      alert(`${newName} is already added to phonebook`)
      return
    }
    
    setPersons(persons.concat(personObject))
    setNewName('')
    setNewNumber('')
  }

  const filteredPersons = persons.filter(person =>
    person.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
            Filter: <input value={filter} onChange={handleFilterChange}/>
          </div>
          <h2>add a new</h2>
      <div>
        <form onSubmit={addPerson}>        
          <div>
            Name: <input value={newName} onChange={handleNameChange}/>
          </div>
          <div>
            Phone: <input value={newNumber} onChange={handleNumberChange}/>
          </div>
          <button type="submit">Save</button>      
        </form>  
      </div>
      <h2>Numbers</h2>
      <ul>
      {filteredPersons.map(person => (
          <Person key={person.id} person={person} />
        ))}
      </ul>
    </div>
  )
}

export default App



// import { useState } from 'react'
// import Person from './components/Person'

// const App = (props) => {
//   const [persons, setPersons] = useState(props.persons || []) 
//   const [newPerson, setNewPerson] = useState('a new person...')

//   const handlePersonChange = (event) => {    
//     console.log(event.target.value)    
//     setNewPerson(event.target.value)  
//   }

//   const addPerson = (event) => {
//     var i = 0;
//     event.preventDefault()
//     const personObject = {
//       content: newPerson,
//       id: String(persons.length + 1),
//     }
    
//     persons.forEach(person => {
//       if(newPerson == person.content){
//         alert(`${newPerson} is already added to phonebook`)
//         i = 1;
//       }
//     });
    
//     if (i == 0){
//       setPersons(persons.concat(personObject))
//       setNewPerson('')
//     }

//   }


//   return (

//     <div>
//       <h2>Phonebook</h2>
//         <div>
//           <form onSubmit={addPerson}>        
//             name: <input value={newPerson} onChange={handlePersonChange}/>   
//             <button type="submit">save</button>      
//           </form>  
//         </div>
//       <h2>Numbers</h2>
//       <ul>
//         {persons.map(person =>
//           <Person key={person.id} person={person} />
//         )}
//       </ul>
//     </div>
//   )
// }

// export default App