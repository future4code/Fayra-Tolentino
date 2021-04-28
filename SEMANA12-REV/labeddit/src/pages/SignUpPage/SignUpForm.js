import React from 'react'
import { InputContainer} from './StyledSign';
import { InputUser } from '../../components/InputUser'
import PassWordInput from '../../components/PasswordInput';
import useForm from '../../hooks/useForm'
import { Button } from '@material-ui/core';
import InputName from '../../components/InputName';


export const SignUpForm =()=>{
    const [form,onChange,clear] =useForm({username:'', email:'', password:''})
    const onSubmitForm = (event) =>{
        event.preventDefault()
        clear()
        console.log(form)
    }
    return(
            <InputContainer>
                <form onSubmit ={onSubmitForm}>
                    <InputName username ={form.username} onChange ={onChange} require />
                    <InputUser email = {form.email} onChange={onChange} require/>
                    <PassWordInput password ={form.password} onChange ={onChange} require />
                    <Button
                        type ={'submit'}
                        fullWidth
                        variant ={'contained'}
                        color ={'primary'}
                    >   Cadastre-se
                    </Button>
                </form>
            </InputContainer>
    )
}

export default SignUpForm;
