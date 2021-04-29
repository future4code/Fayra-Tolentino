import React from 'react'
import useProtectedPage from '../../hooks/useProtectedPage'
import TextField from '@material-ui/core/TextField'



export const CreatePost =()=>{
    useProtectedPage()
    return(
        <div>
            <h1> Create Post page</h1>
            <form  noValidate autoComplete="off">
                <TextField id="standard-basic" label="Título" />
                <TextField id="standard-basic" label="Texto" />
            </form>
            
        </div>
    )
}

export default CreatePost;

