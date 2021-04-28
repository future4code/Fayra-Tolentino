import React from 'react'
import useUnprotectedPage from '../../hooks/useUnprotectedPage'
import SignUpForm from '../SignUpPage/SignUpForm'

export const SignUpPage =()=>{
    useUnprotectedPage()
    return(
        <div>
            <h1> SignUp page</h1>
            <SignUpForm/>
        </div>
    )
}

export default SignUpPage;