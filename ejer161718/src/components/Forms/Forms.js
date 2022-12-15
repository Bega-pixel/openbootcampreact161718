import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const loginSchema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid format')
      .required('Email is requireed'),
    password: Yup.string().required('Password is required')
  })

const Forms = ({ onSubmit }) => {

  const formInfo = {
    email: '',
    password: ''
  };

  return (
    
    <div>
    <h1>Sign Up</h1>
    <Formik
      initialValues={formInfo}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500));
        alert(JSON.stringify(values, null, 2));
      }}
      // yup validation schema
      validationSchema={loginSchema}
    >

{({       
          
    errors, 
    touched,
    values,
    Submitting,
    handleChange,
    handleBlur,
    isSubmitting }) => (


          <Form>
        
        <label htmlFor="email">Email</label>

        <Field
          id="email"
          name="email"
          placeholder="example@email.com"
          type="email"
        />

          {errors.email && touched.email && (
            <div>{errors.email}</div>
          )}
            <ErrorMessage name="email" />
            
            
        <label htmlFor="password">Password</label>
        <Field 
          id="password" 
          name="password" 
          placeholder="password" 
          type="password"

          />

          {errors.password && touched.password && (
            <div>{errors.password}</div>
          )}
            <ErrorMessage name="password" />

        <button type="submit">Submit</button>
          {isSubmitting ? (<p>Login user</p>): null} 
      </Form>
        )
      }

      
    </Formik>
  </div>
);

    }

export default Forms;