import {nanoid} from 'nanoid'
import React, {useState, useRef} from 'react'


export default function InputField({setValues, onDelete, parentId }){

    const inputRef = useRef(null)

    const [formInfo, setFormInfo] = useState(() => {
        const childId = nanoid()
        return {
            childId: childId,
            parentId: parentId,
            set: false,
            inputValue: ""
        }
    })



    React.useEffect(()=>{
        setValues( prevValues =>{
            return {
                ...prevValues,
                [formInfo.parentId]: formInfo.inputValue
            }
        })
    }, [formInfo])




    function handleChange(event){
        if(isNaN(event.target.value)) return;
        setFormInfo(prevFormInfo => {
            return {
                ...prevFormInfo, 
                inputValue: event.target.value
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
            className='form-container-inputfield'
            key={formInfo.childId} 
            onSubmit={handleSubmit}
        >
            {
                formInfo.set ? 
                
                <p
                    className='p-input-label'
                    onClick={handleFocus}
                >
                {formInfo.inputValue}
                </p>
                :
                <input 
                    inputMode='numeric'
                    className='input-input-field'
                    type="text" 
                    value={formInfo.inputValue} 
                    onChange={handleChange}
                    onBlur={handleBlur}
                    ref={inputRef}
                    autoFocus
                />

            }
            <button 
                className='button-remove'
                type='button' 
                onClick={() => onDelete(formInfo.parentId)}
            >
            -
            </button>
        </form>
    )
}