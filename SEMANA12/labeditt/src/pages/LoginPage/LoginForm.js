import React from 'react'
import useForm from '../../hooks/useForm'
import { Button } from '@material-ui/core'
import {login} from '../../services/userRequest'
import { useHistory } from 'react-router'
import InputEmail from '../../components/Inputs/InputEmail'
import PassWordInput from '../../components/Inputs/PasswordInput'
import { goToSignUp } from '../../routes/coordinator'
import {ScreenContainer, InputContainer, LoginContainer, SignUpButton} from './StyledLoginForm'



export const LoginForm =()=>{
    const [form,onChange,clear] =useForm({email:'', password:''})
    const history = useHistory()
    const onSubmitForm = (event) =>{
        event.preventDefault()
        login(form,clear,history)
    }

    return(
            <ScreenContainer>
                <form onSubmit ={onSubmitForm}>
                    <LoginContainer>
                            <InputEmail email = {form.email} onChange={onChange} require/>
                            <PassWordInput password ={form.password} onChange ={onChange} require />
                            <Button
                                type ={'submit'}
                                fullWidth
                                variant ={'contained'}
                                color ={'primary'}
                            >   Entrar
                            </Button>

                        <SignUpButton>
                            <Button     
                            onClick ={()=>goToSignUp(history)}
                            type ={'submit'}
                            variant ={'text'}
                            color ={'primary'}
                            >   Não possue uma conta? Cadastre-se
                            </Button>
                        </SignUpButton>
                    </LoginContainer>
                </form>
            </ScreenContainer>
    )
}

export default LoginForm;