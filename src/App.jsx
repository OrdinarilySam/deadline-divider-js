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
      <h1 className='h1-title'>Placeholder</h1>
      <div className="div-nav-header">
        <h3 
          className={isSubmitted ? "h3-nav" : "h3-nav h3-nav-selected"}
          onClick={isSubmitted ? handleSwitch : ()=>{}}
        >Input</h3>
        <h3 
          className={isSubmitted ? "h3-nav h3-nav-selected" : "h3-nav"}
          onClick={isSubmitted ? ()=>{} : handleSwitch}
        >Results</h3>
      </div>
      <div className='div-container-allinputs' style={isSubmitted ? {display: "none"} : {display: "block"}}>
        <DateField setDates={setDates} />
        <FieldBox setValues={setValues} />
      </div>
      {isSubmitted ? <Results values={values} dates={dates} /> : ""}
      <div className="div-option-buttons-container">
        <button 
          className='button-submit'
          onClick={handleSwitch}>{isSubmitted ? "Back" : "Calculate"}</button>
        <button 
          onClick={() => window.location.reload(false)}
          className='button-reset'>Reset</button>
      </div>
    </div>
    
  )
}

export default App
