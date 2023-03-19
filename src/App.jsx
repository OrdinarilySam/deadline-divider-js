import { useState } from 'react'
import FieldBox from './components/FieldBox'
import DateField from './components/DateField'
import './App.css'

function App() {

  const [values, setValues] = useState([])
  const [dates, setDates] = useState([])

  return (
    <div>
      <h1>Placeholder</h1>
      <DateField
        dates={dates}
        setDates={setDates}
      />
      <FieldBox 
        setValues={setValues}
      />
    </div>
    
  )
}

export default App
