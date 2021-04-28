import React from 'react'
import useProtectedPage from '../../hooks/useProtectedPage';

export const CreatePost =()=>{
    useProtectedPage()
    return(
        <div>
            <h1> Create Post page</h1>
        </div>
    )
}

export default CreatePost;