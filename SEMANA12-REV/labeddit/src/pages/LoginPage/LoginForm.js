import React from 'react'
import { InputContainer} from './StyledLogin';
import { InputUser } from '../../components/InputUser'
import PassWordInput from '../../components/PasswordInput';
import useForm from '../../hooks/useForm'
import { Button } from '@material-ui/core';


export const LoginForm =()=>{
    const [form,onChange,clear] =useForm({email:'', password:''})
    const onSubmitForm = (event) =>{
        event.preventDefault()
        console.log(form)
    }
    return(
            <InputContainer>
                <form onSubmit ={onSubmitForm}>
                    <InputUser email = {form.email} onChange={onChange} require/>
                    <PassWordInput password ={form.password} onChange ={onChange} require />
                    <Button
                        type ={'submit'}
                        fullWidth
                        variant ={'contained'}
                        color ={'primary'}
                    >   Entrar
                    </Button>
                </form>
            </InputContainer>
    )
}

export default LoginForm;
