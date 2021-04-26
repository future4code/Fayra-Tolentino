import React from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import { Login } from '../pages/LoginPage/LoginPage'
import { Feed } from '../pages/FeedPage/FeedPage'
import {CreatePost} from '../pages/CreatePostPage/CreatePostPage'
import {SignUp} from '../pages/SignUpPage/SignUp'
import { ErrorPage } from '../pages/ErrorPage/ErrorPage'

export const Router = () =>{
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path = '/login'>
                    <Login/>
                </Route>

                <Route exact path = '/'>
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