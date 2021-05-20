import React from 'react'
import { InputContainer } from '../LoginPage/StyledLoginForm'
import useForm from '../../hooks/useForm'
import { useHistory } from 'react-router'
import {create} from '../../services/postRequest'
import InputTitle from '../../components/Inputs/InputTitle'
import InputDescription from '../../components/Inputs/InputDescription'
import { Button } from '@material-ui/core'

export const CreatePostForm =()=>{
    const [form,onChange,clear] =useForm({title:'', text:''})
    const history = useHistory()
    const onSubmitForm = (event) =>{
        event.preventDefault()
        create(form,clear,history)
    }

    return(
        <InputContainer>
            <form onSubmit ={onSubmitForm}>
                <InputTitle title={form.title} onChange={onChange} require />
                <InputDescription text ={form.text}  onChange={onChange} require/>
                <Button
                        type ={'submit'}
                        fullWidth
                        variant ={'contained'}
                        color ={'primary'}
                    >   Criar Post
                </Button>
            </form>
        </InputContainer>
    )
}

export default CreatePostForm 