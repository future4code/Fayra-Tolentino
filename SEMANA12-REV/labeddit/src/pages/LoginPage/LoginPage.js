import React from 'react'
import { InputContainer, ScreenContainer } from './StyledLogin';
import { InputUser } from '../../components/InputUser'
import TextField from '@material-ui/core/TextField';
import PassWordInput from '../../components/PasswordInput';


export const LoginPage =()=>{
    const onSubmitForm = () =>{

    }
    return(
        <ScreenContainer>
            <h1> Login page</h1>
            <InputContainer>
                <form>
                    <InputUser/>
                    <PassWordInput/>
                    <button>Entrar</button>
                </form>
            </InputContainer>
        </ScreenContainer>
    )
}

export default LoginPage;
