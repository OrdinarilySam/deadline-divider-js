import React from 'react'
import {nanoid} from 'nanoid'




export default function InputField({inpFields, setInpFields}) {
    

    React.useEffect(()=>{
        setInpFields(() => {
          const initId = nanoid()
          const initObj = {}
          initObj[initId] = {value: null, set: false}
          return initObj
        })
      }, [])


    function handleChange(event){
        setInpFields((prevInpFields) => {
            let newEntry = {...prevInpFields[event.target.id], value: event.target.value}
            return {
                ...prevInpFields,
                [event.target.id]: {newEntry}
            }
        })
    }

    function handleSubmit(event){
        event.preventDefault()
        // changes value of set to true
        console.log("submitted")
    }

    function handleDelete(event){
        // deletes entry from inpFields
    }

    let inpElements = []


    // a lot of work to be done here
    // add conditionals for displaying delete buttons
    // don't let user type anything not a number nor a non negative number
    // perform a check to see if there is only one element in the object keys
    Object.keys(inpFields).forEach(
        (key) => inpElements.push(
            <form key={key} onSubmit={handleSubmit}>
                {!inpFields[key].set 
                ? <input 
                    type="number" 
                    placeholder="Amount" 
                    id={key}
                    onChange={handleChange} />
                : <p>{inpFields[key].value}</p>}
                <button type='button' onSubmit={handleDelete} id={key}>-</button>
            </form>
        )
    )

    return (
        <div>
            {inpElements}
        </div>
    )
}
