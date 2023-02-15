import { useState, useEffect } from 'react'
import { nanoid } from 'nanoid'
import './App.css'
import InputField from './components/InputField'

function App() {

  const [inpFields, setInpFields] = useState({})

  function handleClick(){
    setInpFields(prevInp => {
      const newInp = {}
      const newId = nanoid()
      newInp[newId] = {value: null, set: false, deletable: true}
      return {
        ...prevInp,
        ...newInp
      }
    })
  }

  return (
    <div>
      <h1>Placeholder</h1>
      <InputField inpFields={inpFields} setInpFields={setInpFields} />
      <button onClick={handleClick}>Add another</button>
    </div>
  )
}

export default App
