import React from 'react'
import useProtectedPage from '../../hooks/useProtectedPage'
import NewsCard from '../../components/NewsCard/NewsCard'
import useRequestData from '../../hooks/useRequestData'
import BASE_URL from '../../constants/urls'
import AddNewPostButton from '../../components/AddNewPost/AddNewPost'
import AddSharpIcon from '@material-ui/icons/AddSharp'
import { ChangeHistoryOutlined } from '@material-ui/icons'
import { useHistory } from 'react-router'
import {goToCreatePost} from '../../routes/coordinator'
import Header from '../../components/Header/Header'

export const Feed =()=>{
    useProtectedPage()
    const history = useHistory()
    const newsPost = useRequestData([],`${BASE_URL}/posts`)
    console.log(newsPost)

    const newsCards = newsPost.posts && newsPost.posts.map((postCard)=>{
        return(
            <NewsCard
                key ={postCard.id}
                title = {postCard.title}
                userName={postCard.username}
                text={postCard.text}
                date ={postCard.createdAt}
            /> 
        )
    })

    return(
        <div>
            <Header/>
            <div>
                {newsCards}
            </div>
            <AddNewPostButton
                color = {'primary'}
                onClick ={()=>goToCreatePost(history)}
            >
                <AddSharpIcon/>
            </AddNewPostButton>
        </div>
    )
}

export default Feed;