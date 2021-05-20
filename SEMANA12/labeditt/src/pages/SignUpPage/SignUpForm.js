import React from 'react'
import { InputContainer} from './StyledSignUpPage'
import { InputUser } from '../../components/Inputs/InputUser'
import { InputEmail } from '../../components/Inputs/InputEmail'
import PasswordInput from '../../components/Inputs/PasswordInput'
import useForm from '../../hooks/useForm'
import { Button } from '@material-ui/core'
import { useHistory } from 'react-router'
import { signUp } from '../../services/userRequest'


export const SignUpForm =()=>{
    const [form,onChange,clear] =useForm({username:'', email:'', password:''})
    const history = useHistory()

    const onSubmitForm = (event) =>{
        event.preventDefault()
        signUp(form,clear,history)
    }
    return(
            <InputContainer>
                <form onSubmit ={onSubmitForm}>
                    <InputUser username ={form.username} onChange ={onChange} require />
                    <InputEmail email = {form.email} onChange={onChange} require/>
                    <PasswordInput password ={form.password} onChange ={onChange} require />
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