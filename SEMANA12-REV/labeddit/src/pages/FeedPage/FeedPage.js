import React from 'react'
import useProtectedPage from '../../hooks/useProtectedPage'
import NewsCard from '../../components/NewsCard/NewsCard'

export const Feed =()=>{
    useProtectedPage()
    return(
        <div>
            <NewsCard/>
        </div>
    )
}

export default Feed;