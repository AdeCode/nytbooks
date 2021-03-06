import React from 'react'
import {useFormik} from 'formik'

const validate = values => {
    const errors = {}
    
    if(!values.firstName){
        errors.firstName='required'
    }else if (values.firstName.length > 15 || values.firstName.length < 3) {
        errors.firstName = 'Must be minimum of 3 and maximum of 15 characters';
    }

    if (!values.lastName) {
        errors.lastName = 'Required';
    } else if (values.lastName.length > 20) {
        errors.lastName = 'Must be 20 characters or less';
    }
    
    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }
    
    return errors;
}

function FormikForm() {
  const formik = useFormik({
    initialValues:{
        firstName:'',
        lastName:'',
        email:''
    },
    validate,
    onSubmit: values => {
        alert(JSON.stringify(values, null, 2));
    }
  })
  return (
    <div>
        FormikForm
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="firstName">First Name</label>
            <input
                id='firstName'
                name='firstName'
                type='text'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.firstName}
            />
            {formik.touched.firstName && formik.errors.firstName ? (
                <div className='error'>{formik.errors.firstName}</div>
                ) : null
            }

            <label htmlFor="lastName">Last Name</label>
            <input
                id="lastName"
                name="lastName"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.lastName}
            />
            {formik.touched.lastName && formik.errors.lastName ? (
                <div className='error'>{formik.errors.lastName}</div>
                ) : null
            }
        
            <label htmlFor="email">Email Address</label>
            <input
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
                <div className='error'>{formik.errors.email}</div>
                ) : null
            }

            <button type='submit'>Submit</button>
        </form>

    </div>
  )
}

export default FormikForm