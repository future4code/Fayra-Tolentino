import React from  'react'
import LoginForm from './LoginForm'
import { ScreenContainer } from './StyledLoginForm';
import TitlesStyle from '../CreatePostPage/StyledCreatePost'



export const LoginPage = () =>{
    return(
        <ScreenContainer>
            <TitlesStyle>Login Page</TitlesStyle>
                <LoginForm/>
        </ScreenContainer>
    )
}

export default LoginPage;