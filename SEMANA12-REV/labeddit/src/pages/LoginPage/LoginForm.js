import React from 'react'
import { InputContainer} from './StyledLogin';
import { InputUser } from '../../components/InputUser'
import PassWordInput from '../../components/PasswordInput';
import useForm from '../../hooks/useForm'
import { Button } from '@material-ui/core';
import axios from 'axios'
import {BASE_URL} from '../../constants/urls'


export const LoginForm =()=>{
    const [form,onChange,clear] =useForm({email:'', password:''})
    
    const onSubmitForm = (event) =>{
        event.preventDefault()
        login()
    }

    const login = () =>{
        axios
        .post(`${BASE_URL}/login` , form)
        .then((res)=>{
            console.log(res)
            localStorage.setItem('token',res.data.token)
            clear()
        })
        .catch((err)=>{
            console.log(err)
            alert('Erro no login')
        })
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
