import React from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import LoginPage from '../pages/LoginPage/LoginPage'
import FeedPage from '../pages/FeedPage/FeedPage'
import CreatePostPage from '../pages/CreatePostPage/CreatePostPage'
import PostDetailPage from '../pages/PostDetailPage/PostDetailPage'
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

                <Route exact path = '/create-post'>
                    <CreatePostPage/>
                </Route>

                <Route exact path = '/post'>
                    <PostDetailPage/>
                </Route>

                <Route exact path = '/signUp'>
                    <SignUpPage />
                </Route>

                <Route>
                    <ErrorPage/>
                </Route>

            </Switch>
        </BrowserRouter>
    )
}

export default Router;

