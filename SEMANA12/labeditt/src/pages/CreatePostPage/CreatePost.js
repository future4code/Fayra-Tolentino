import React from  'react'
import Header from '../../components/Header/Header';
import { ScreenContainer } from '../LoginPage/StyledLoginForm';
import CreatePostForm from './CreatePostForm';
import TitlesStyle from './StyledCreatePost'


export const CreatePost = () =>{
    return(
        <ScreenContainer>
            <Header/>
            <TitlesStyle>Create Post</TitlesStyle>
            <CreatePostForm/>

        </ScreenContainer>

    )
}

export default CreatePost;