import {nanoid} from 'nanoid'
import React, {useState, useRef} from 'react'


export default function InputField({setValues, onDelete, parentId }){

    const inputRef = useRef(null)

    const [formInfo, setFormInfo] = useState(() => {
        const childId = nanoid()
        return {
            parentId: parentId,
            childId: childId,
            set: false,
            inputValue: ""
        }
    })



    React.useEffect(()=>{
        setValues( prevValues =>{
            return {
                ...prevValues,
                [formInfo.childId]: formInfo.inputValue
            }
        })
    }, [formInfo])




    function handleChange(event){
        setFormInfo(prevFormInfo => {
            return {
                ...prevFormInfo, 
                inputValue: event.target.value
            }
        })
        setValues(prevValues => {
            return {
                ...prevValues,
                [formInfo.childId]: event.target.value
            }
        })
    }

    function handleFocus(){
        setFormInfo(prevFormInfo => ({...prevFormInfo, set: false}))
    }

    function handleBlur(){
        if(formInfo.inputValue != ''){
            setFormInfo(prevFormInfo => ({...prevFormInfo, set: true}))
        }
    }
    
    function handleSubmit(event){
        event.preventDefault()
        inputRef.current.blur()
    }


    return (
        <form 
            key={formInfo.inputId} 
            onSubmit={handleSubmit}
        >
            {
                formInfo.set ? 
                
                <p
                    style={{display: 'inline'}}
                    onClick={handleFocus}
                >
                {formInfo.inputValue}
                </p>
                :
                <input 
                    type="text" 
                    value={formInfo.inputValue} 
                    onChange={handleChange}
                    onBlur={handleBlur}
                    ref={inputRef}
                    autoFocus
                />

            }
            <button 
                type='button' 
                onClick={() => onDelete(formInfo.parentId)}
            >
            -
            </button>
        </form>
    )
}