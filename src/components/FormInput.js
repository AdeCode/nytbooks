import React, { useState } from 'react'

function FormInput(props) {
  const {label, onChange, errorMessage, id, ...inputProps} = props
  const [focused, setFocused] = useState(false)

  const handleFocus = (e) => {
      setFocused(true)
  }
  return (
    <div className='inputgroup'>
        <label>{label}</label>
        <input {...inputProps} 
            onChange={onChange} 
            required 
            onBlur={handleFocus} 
            focused={focused.toString()}
            onFocus={()=>inputProps.name==='confirmPassword' && setFocused(true) }
        />
        <span>{errorMessage}</span>
    </div>
  )
}

export default FormInput