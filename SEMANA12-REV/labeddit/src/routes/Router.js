import React from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import { Feed } from '../pages/FeedPage/FeedPage'
import {CreatePost} from '../pages/CreatePostPage/CreatePostPage'
import SignUp from '../pages/SignUpPage/SignUp'
import { ErrorPage } from '../pages/ErrorPage/ErrorPage'
import Header from '../components/Header/Header'
import LoginPage from '../pages/LoginPage/LoginPage'

export const Router = () =>{
    return(
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route exact path = '/'>
                    <LoginPage/>
                </Route>

                <Route exact path = '/feed'>
                    <Feed/>
                </Route>

                <Route exact path = '/createPost/:id'>
                    <CreatePost/>
                </Route>

                <Route exact path = '/sign-up'>
                    <SignUp/>
                </Route>

                <Route>
                    <ErrorPage/>
                </Route>

            </Switch>
        </BrowserRouter>
    )
}

export default Router;