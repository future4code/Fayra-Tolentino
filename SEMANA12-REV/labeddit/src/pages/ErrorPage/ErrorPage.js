import React from 'react'
import useUnprotectedPage from '../../hooks/useUnprotectedPage';

export const ErrorPage =()=>{
    useUnprotectedPage()
    return(
        <div>
            <h1> Create Post page</h1>
        </div>
    )
}

export default ErrorPage;