import { useState } from 'react'
import InputField from './components/InputField'
import './App.css'

function App() {

  const [values, setValues] = useState([])

  return (
    <div>
      <h1>Placeholder</h1>
      <InputField 
        values={values}
        setValues={setValues}
      />
    </div>
    
  )
}

export default App
