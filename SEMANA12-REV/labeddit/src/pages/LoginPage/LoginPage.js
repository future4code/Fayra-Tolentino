import React from 'react'
import { InputContainer, ScreenContainer } from './StyledLogin';
import { InputUser } from '../../components/InputUser'
import TextField from '@material-ui/core/TextField';
import PassWordInput from '../../components/PasswordInput';
import useForm from '../../hooks/useForm'
// import { useHistory } from 'react-router';


export const LoginPage =()=>{
    // const history =useHistory()
    const [form,onChange,clear] =useForm({email:'', password:''})
    const onSubmitForm = (event) =>{
        event.preventDefault()
        console.log(form)
    }
    return(
        <ScreenContainer>
            <h1> Login page</h1>
            <InputContainer>
                <form onSubmit ={onSubmitForm}>
                    <InputUser email = {form.email} onChange={onChange}/>
                    <PassWordInput password ={form.password} onChange ={onChange} />
                    <button>Entrar</button>
                </form>
            </InputContainer>
        </ScreenContainer>
    )
}

export default LoginPage;
