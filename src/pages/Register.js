import React, { useState } from 'react'
import Form from '../components/Form'
import FormInput from '../components/FormInput'
import '../components/forminput.css'
import FormikForm from '../components/FormikForm'

function Register() {
  const [formValues, setFormValues] = useState({
      name:'',
      country:'',
      email:'',
      dob:'',
      password:'',
      confirmPassword:''
  })

  const input = [
      {
          id: 1,
          name:'name',
          type:'text',
          placeholder:'name',
          errorMessage:'Name shoule be minimum of 3 and maximum of 20 characters with no special characters',
          label:'Name',
          required:'true',
          pattern:"^[A-Za-z0-9]{3,20}$"
      },
      {
        id: 2,
        name:'country',
        type:'text',
        placeholder:'Country',
        errorMessage:'The country field is required',
        label:'Country',
        required:'true'
    },
    {
        id: 3,
        name:'email',
        type:'email',
        placeholder:'e-mail',
        errorMessage:'Please enter a valid email',
        label:'E-mail',
        required:'true'
    },
    {
        id: 4,
        name:'dob',
        type:'date',
        placeholder:'DOB',
        errorMessage:'',
        label:'DOB'
    },
    {
        id: 5,
        name:'password',
        type:'password',
        placeholder:'Password',
        errorMessage:'password should be 8-18 characters and include at least 1 letter, 1 number and 1 special character',
        label:'Password',
        required:'true',
        pattern:'^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$'
    },
    {
        id: 6,
        name:'confirmPassword',
        type:'password',
        placeholder:'Confirm Password',
        errorMessage:'Passwords does not match',
        label:'Confirm Password',
        pattern: formValues.password,
        required:'true'
    },
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = new FormData(e.target)
    console.log(Object.fromEntries(data.entries()))
  }

  const handleChange = (e) => {
    setFormValues({...formValues, [e.target.name]:e.target.value})
  }
  
  console.log(formValues)
  return (
    <div className='form-content'>
        <div className='form-content-container'>
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                {
                    input.map((input) => (
                        <FormInput
                            key={input.id}
                            {...input}            
                            value={formValues[input.name]}
                            onChange={handleChange}
                        />
                    ))
                    
                }            
                <button>Submit</button>
            </form>
        </div>  
        <div className='form-content-container' style={{marginTop:'20px'}}>
            <FormikForm/>
        </div>      
    </div>
  )
}

export default Register