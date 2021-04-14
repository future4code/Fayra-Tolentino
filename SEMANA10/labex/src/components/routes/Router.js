import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from '../../pages/HomePage'
import List from '../../pages/ListTripsPage'
import Application from '../../pages/ApplicationFormPage'
import Login from '../../pages/LoginPage'
import AdminHome from '../../pages/AdminHomePage'
import CreateTrip from '../../pages/CreateTripPage'
import TripDetails from '../../pages/TripDetailsPage'



function Router() {
    return (
    <BrowserRouter>
        <Switch>
            <Route exact path="/">
                <Home/>
            </Route>
            <Route exact path="/trips/list">
                <List/>
            </Route>
            <Route exact path="/trips/application">
                <Application/>
            </Route>
            <Route exact path="/login">
                <Login/>
            </Route>
            <Route exact path="/admin/trips/list">
                <AdminHome/>
            </Route>
            <Route exact path="/admin/trips/create">
                <CreateTrip/>
            </Route>
            <Route exact path="/admin/trips/id">
                <TripDetails/>
            </Route>
            <Route>
                <div>Página não encontrada</div>
            </Route>
        </Switch>
    </BrowserRouter>
    );
}

export default Router;