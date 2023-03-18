import {nanoid} from 'nanoid'
import React, {useState, useRef} from 'react'


export default function InputField({values, setValues}){

    const inputRef = useRef(null)

    const [formInfo, setFormInfo] = useState(() => {
        const btnId = nanoid()
        const inputId = nanoid()
        return {
            btnId: btnId,
            inputId: inputId,
            set: false,
            inputValue: ""
        }
    })



    React.useEffect(()=>{
        setValues( prevValues =>{
            return {
                ...prevValues,
                [formInfo.inputId]: ""
            }
        })
    }, [])

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
                [formInfo.inputId]: event.target.value
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
                    id={formInfo.inputId}
                    onClick={handleFocus}
                >
                {formInfo.inputValue}
                </p>
                :
                <input 
                    type="text" 
                    value={formInfo.inputValue} 
                    id={formInfo.inputId} 
                    onChange={handleChange}
                    onBlur={handleBlur}
                    ref={inputRef}
                    autoFocus
                />

            }
            <button 
                type='button' 
                id={formInfo.btnId}
            >
            -
            </button>
        </form>
    )
}