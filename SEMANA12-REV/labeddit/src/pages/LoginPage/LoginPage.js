import React from 'react'
import { InputContainer, ScreenContainer } from './StyledLogin';
import { InputUser } from '../../components/InputUser'
import TextField from '@material-ui/core/TextField';


export const LoginPage =()=>{
    const onSubmitForm = () =>{

    }
    return(
        <ScreenContainer>
            <h1> Login page</h1>
            <InputContainer>
                <form>
                    <InputUser/>
                    <input/>
                    <button>Entrar</button>
                </form>
            </InputContainer>
        </ScreenContainer>
    )
}

export default LoginPage;
