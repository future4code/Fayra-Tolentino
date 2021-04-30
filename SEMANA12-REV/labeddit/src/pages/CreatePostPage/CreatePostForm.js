import React from 'react'
import { InputContainer } from '../LoginPage/StyledLogin'
import useForm from '../../hooks/useForm'
import { useHistory } from 'react-router'
import {login} from '../../services/userRequest'
import InputTitle from '../../components/InputTitle'
import InputDescription from '../../components/InputDescription'

export const CreatePostForm =()=>{
    const [form,onChange,clear] =useForm({email:'', password:''})
    const history = useHistory()
    const onSubmitForm = (event) =>{
        event.preventDefault()
        login(form,clear,history)
    }

    return(
        <InputContainer>
            <form onSubmit ={onSubmitForm}>
                <InputTitle/>
                <InputDescription/>
            </form>
        </InputContainer>
    )
}

export default CreatePostForm