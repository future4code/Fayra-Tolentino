import React from 'react'
import useForm from '../../hooks/useForm'
import { Button } from '@material-ui/core'
import {login} from '../../services/userRequest'
import { useHistory } from 'react-router'
import InputUser from '../../components/Inputs/InputUser'
import PassWordInput from '../../components/Inputs/PasswordInput'


export const LoginForm =()=>{
    const [form,onChange,clear] =useForm({email:'', password:''})
    const history = useHistory()
    const onSubmitForm = (event) =>{
        event.preventDefault()
        login(form,clear,history)
    }

    return(
            <div>
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
            </div>
    )
}

export default LoginForm;