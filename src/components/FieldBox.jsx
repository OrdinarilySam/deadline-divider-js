import React, { useState } from 'react'
import InputField from './InputField'
import {nanoid} from 'nanoid'

export default function FieldBox({setValues}) {

    const [fields, setFields] = useState([nanoid()])

    function handleDelete(key){
        setFields(prevFields => prevFields.filter((id) => id !== key))
        setValues(prevValues => {
            const newValues = {...prevValues}
            delete newValues[key]
            return newValues
        })
    }

    function handleClick(){
        setFields(prevFields => [
            ...prevFields, 
            nanoid()
        ])
    }

    return (
        <div className='div-container-fieldbox'>
            {fields.map((id) => (
                <InputField
                    key={id}
                    setValues={setValues}
                    onDelete={handleDelete}
                    parentId={id}
                />
            ))}
            <button className='button-add' onClick={handleClick}>Add Another</button>
        </div>
    )
}