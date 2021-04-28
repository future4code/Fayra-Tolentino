import React from 'react'
import { Button } from '@material-ui/core';
import useProtectedPage from '../../hooks/useProtectedPage';

export const Feed =()=>{
    useProtectedPage()
    return(
        <div>
            <h1> Feed page</h1>
            <Button variant="contained" color="primary">
                Primary
            </Button>
            
            <Button variant="contained" color="secondary">
                Secondary
            </Button>
        </div>
    )
}

export default Feed;