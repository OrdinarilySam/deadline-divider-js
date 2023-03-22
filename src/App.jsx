import { useState } from 'react'
import FieldBox from './components/FieldBox'
import DateField from './components/DateField'
import './App.css'

function App() {

  const [values, setValues] = useState([])
  const [dates, setDates] = useState([])


  function handleClick() {
    console.log(dates)
    console.log(values)
  }

  return (
    <div>
      <h1>Placeholder</h1>
      <DateField
        setDates={setDates}
      />
      <FieldBox 
        setValues={setValues}
      />
      <button onClick={handleClick}>Calculate</button>
    </div>
    
  )
}

export default App
