import React from 'react'
import useUnprotectedPage from '../../hooks/useUnprotectedPage'
import error from '../../assets/error.svg'
import { ErrorImage, ErrorPageContainer } from './StyledError'
import { Typography } from '@material-ui/core'

export const ErrorPage =()=>{
    useUnprotectedPage()
    return(
        <ErrorPageContainer>
            <ErrorImage src ={error}/>
            <Typography color ={'primary'} variant ={'h4'} align ={'center'}>  Erro 404 - Página Não Encontrada</Typography>
        </ErrorPageContainer>
    )
}

export default ErrorPage;