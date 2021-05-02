import React from  'react'
import SignUpForm from './SignUpForm'
import TitlesStyle from '../CreatePostPage/StyledCreatePost'
import { ScreenContainer } from '../LoginPage/StyledLoginForm'


export const SignUp = () =>{
    return(
        <ScreenContainer>
            <TitlesStyle>Sign Up </TitlesStyle>
            <SignUpForm/>
        </ScreenContainer>
    )
}

export default SignUp;