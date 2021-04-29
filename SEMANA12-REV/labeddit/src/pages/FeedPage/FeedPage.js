import React from 'react'
import useProtectedPage from '../../hooks/useProtectedPage'
import NewsCard from '../../components/NewsCard/NewsCard'
import useRequestData from '../../hooks/useRequestData'
import BASE_URL from '../../constants/urls'

export const Feed =()=>{
    useProtectedPage()
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
            {newsCards}
        </div>
    )
}

export default Feed;