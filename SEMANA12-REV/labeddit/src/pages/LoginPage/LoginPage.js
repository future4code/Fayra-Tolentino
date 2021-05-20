import React from 'react'
import { ScreenContainer, SignUpBotton } from './StyledLogin';
import { Button } from '@material-ui/core';
import LoginForm from './LoginForm';
import { useHistory } from 'react-router';
import { goToSignUp } from '../../routes/coordinator';
import useUnprotectedPage from '../../hooks/useUnprotectedPage';

export const LoginPage =()=>{
    useUnprotectedPage()
    const history = useHistory()
    return(
        <ScreenContainer>
            <h1> Login page</h1>
            <LoginForm/>
            <SignUpBotton>
            <Button     
                        onClick ={()=>goToSignUp(history)}
                        type ={'submit'}
                        variant ={'text'}
                        color ={'primary'}
                    >   Não possue uma conta? Cadastre-se
                    </Button>
            </SignUpBotton>
        </ScreenContainer>
    )
}

export default LoginPage;
