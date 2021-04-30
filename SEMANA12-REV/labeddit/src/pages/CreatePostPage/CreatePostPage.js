import React from 'react'
import useProtectedPage from '../../hooks/useProtectedPage'
import TextField from '@material-ui/core/TextField'
import { InputContainer, ScreenContainer } from './StyledCreatePost'
import {CreateBotton} from './StyledCreatePost'



export const CreatePost =()=>{
    useProtectedPage()
    return(
        <ScreenContainer>
            <h1> Create Post page</h1>
            <form  noValidate autoComplete="off">
                <InputContainer>
                    <TextField id="standard-basic" label="Título" />
                    <TextField id="standard-basic" label="Texto" />
                </InputContainer>
                <CreateBotton>Botão</CreateBotton>
            </form>
        </ScreenContainer> 
            
    )
}

export default CreatePost;

