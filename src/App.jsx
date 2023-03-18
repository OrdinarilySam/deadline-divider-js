import { useState } from 'react'
import FieldBox from './components/FieldBox'
import './App.css'

function App() {

  const [values, setValues] = useState([])

  return (
    <div>
      <h1>Placeholder</h1>
      <FieldBox 
        setValues={setValues}
      />
    </div>
    
  )
}

export default App
