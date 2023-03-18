import React, { useState } from 'react'
import InputField from './InputField'
import {nanoid} from 'nanoid'

export default function FieldBox({setValues}) {

    const [fields, setFields] = useState([nanoid()])

    function handleDelete(key){
        setFields(prevFields => prevFields.filter((id) => id !== key))
    }

    function handleClick(){
        setFields(prevFields => [
            ...prevFields, 
            nanoid()
        ])
    }

    return (
        <div>
            {fields.map((id) => (
                <InputField
                    key={id}
                    setValues={setValues}
                    onDelete={handleDelete}
                    parentId={id}
                />
            ))}
            <button onClick={handleClick}>Add Another</button>
        </div>
    )
}