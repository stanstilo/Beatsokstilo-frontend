import React from 'react'
import { connect, } from "react-redux";
import { Field, reduxForm } from 'redux-form'
import { authRegister } from '../../store/actions/auth';
import {createStructuredSelector} from "reselect"
import {isAuthenticatedSelector, isErrorSelector} from '../../store/reducers/selector'
import { Redirect } from 'react-router-dom'
import Spinner from '../UI/Spinner/Spinner';
import { StyledForm } from '../styles/Signup.style' 
import {withRouter} from 'react-router-dom'

const validate = values => {
  const errors = {}
  if (!values.password) {
    errors.password = 'Required'
  } else if (values.password.length <  8) {
    errors.password = 'Must be 8 characters or more'
  }
  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  return errors
}

const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning }
}) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched &&
        ((error && <span>{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  </div>
)

const RegisterForm = ({authRegister, handleSubmit, submitting, auth, error, history}) => {
  const submit = values =>{
    authRegister(values);  
  }

  if(auth){
    return <Redirect to='/login'/>
  }

  return (
    <StyledForm onSubmit={handleSubmit(submit)}>
    <div className="register-form-container">
      <h2>Register</h2>
      <p>
        <Field name="email" type="email" component={renderField} label="Email" />
      </p>
      <p>
        <Field name="password" type="password" component={renderField} label="password" />
      </p>
      <p>
        <Field name="mobileNumber" type="tel" component={renderField} label="Mobile Number" />
      </p>
        <p className="text-danger">{error.length ? <p>{error}</p>: null}</p>
      <p>
        <button type="submit" disabled={submitting}>
         Register
        </button>
      </p>
        <p className="no-account">
         Already have an account <span onClick = {()=>{
          history.push('/login')
        }}>Sign In</span>
        </p>
    </div>
  </StyledForm>
  )
}

const mapstate = createStructuredSelector({
  auth: isAuthenticatedSelector,
  error: isErrorSelector
})


let registerForm = connect(mapstate,{authRegister})(RegisterForm)

export default withRouter(reduxForm({
  form: 'registerForm', // a unique identifier for this form
  validate, // <--- validation function given to redux-form
})(registerForm))