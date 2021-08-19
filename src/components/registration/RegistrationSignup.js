import React from 'react'
import useForm from '../../hooks/useForm'
import validate from './validateInfo'
import '../../scss/RegForm.scss'

const RegistrationSignup = ({submitForm, registration}) => {
    const {handleChange, values, handleSubmit, errors} 
        = useForm(
            submitForm,
            validate
        )
    return (
        <div className="form-content-right">
            <form className="form" onSubmit={handleSubmit}>
                {/* <h1>Welcome to HER HEALTH JOURNAL</h1>
                <h3>Create your account today to start tracking your health and creating goals.</h3> */}
                <div className="form-inputs">
                    <label htmlFor="username" className="form-label">Username </label>
                        <input 
                        id="username"
                        type="text" 
                        name="username" 
                        className="form-input"
                        placeholder="Choose a username"
                        values={values.username} 
                        onChange={handleChange}
                        />
                    {errors.username && <p>{errors.username}</p>}
                </div>
                <div className="form-inputs">
                    <label htmlFor="email" className="form-label">Email </label>
                        <input 
                        id="email"
                        type="email" 
                        name="email" 
                        className="form-input"
                        placeholder="Enter your email"
                        values={values.email} 
                        onChange={handleChange}
                        />
                    {errors.email && <p>{errors.email}</p>}
                </div>
                <div className="form-inputs">
                    <label htmlFor="password" className="form-label">password </label>
                        <input 
                        id="password"
                        type="password" 
                        name="password" 
                        className="form-input"
                        placeholder="Choose a password"
                        values={values.password} 
                        onChange={handleChange}
                        />
                    {errors.password && <p>{errors.password}</p>}
                </div>
                <div className="form-inputs">
                    <label htmlFor="password2" className="form-label">Confirm your password </label>
                        <input 
                        id="password2"
                        type="password" 
                        name="password2" 
                        className="form-input"
                        placeholder="Enter your password"
                        values={values.password2} 
                        onChange={handleChange}
                        />
                    {errors.password2 && <p>{errors.password2}</p>}
                </div>
                    <button     
                        className="form-input-btn"
                        type="submit">
                            Register
                        </button>
                        <span className="form-input-login">Already have an account? Login <a href="#">here</a></span>
            </form>
            {/* <span className="form-input-login">Already have an account? Login <a href="#">here</a></span> */}
        </div>
    )
}

export default RegistrationSignup

