import React, { useState } from 'react'
import InputField from './InputField'

export default function FieldBox({setValues}) {

    const [fields, setFields] = useState([
        <InputField setValues={setValues} key={0} />
    ])


    function handleClick(){
        setFields(prevFields => [
            ...prevFields, 
            <InputField setValues={setValues} key={prevFields.length} />
        ])
    }

    return (
        <div>
            {fields}
            <button onClick={handleClick}>Add Another</button>
        </div>
    )
}