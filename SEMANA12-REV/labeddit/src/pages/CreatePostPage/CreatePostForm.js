import React from 'react'
import { InputContainer } from '../LoginPage/StyledLogin'
import useForm from '../../hooks/useForm'
import { useHistory } from 'react-router'
import {login} from '../../services/userRequest'
import InputTitle from '../../components/InputTitle'
import InputDescription from '../../components/InputDescription'
import { Button } from '@material-ui/core'

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