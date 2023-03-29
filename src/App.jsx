import { useState } from 'react'
import DateField from "./components//DateField";
import FieldBox from "./components/FieldBox";
import Results from "./components/Results"
import './App.css'

function App() {

  const [isSubmitted, setIsSubmitted] = useState(false)
  const [values, setValues] = useState([])
  const [dates, setDates] = useState([])


  function handleSwitch() {
    setIsSubmitted(prevValue => !prevValue)
  }

  return (
    <div>
      <h1>Placeholder</h1>
      <div style={isSubmitted ? {display: "none"} : {display: "block"}}>
        <DateField setDates={setDates} />
        <FieldBox setValues={setValues} />
      </div>
      {isSubmitted ? <Results values={values} dates={dates} /> : ""}
      <button onClick={handleSwitch}>{isSubmitted ? "Back" : "Calculate"}</button>
      <button onClick={() => window.location.reload(false)}>Reset</button>
    </div>
    
  )
}

export default App
