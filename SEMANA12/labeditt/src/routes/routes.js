import React from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import  LoginPage from '../pages/LoginPage/LoginPage'
import FeedPage from '../pages/FeedPage/FeedPage'
import CreatePost from '../pages/CreatePostPage/CreatePost'
import PostDetailsPage from '../pages/PostDetailsPage/PostDetailsPage'
import SignUpPage from '../pages/SignUpPage/SignUpPage'
import ErrorPage from '../pages/ErrorPage/ErrorPage'

export const Router = () =>{
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path = '/'>
                    <LoginPage/>
                </Route>

                <Route exact path = '/feed'>
                    <FeedPage/>
                </Route>

                <Route exact path = '/createpost'>
                    <CreatePost/>
                </Route>

                <Route exact path = '/post/:id'>
                    <PostDetailsPage/>
                </Route>

                <Route exact path = '/sign-up'>
                    <SignUpPage/>
                </Route>

                <Route>
                    <ErrorPage/>
                </Route>

            </Switch>
        </BrowserRouter>
    )
}

export default Router; 