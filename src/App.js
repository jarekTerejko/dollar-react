import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './pages'
import SignIn from './pages/SignIn'

const App = () => {
    return (
        <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/sign-in" exact component={SignIn} />
        </Switch>
        </BrowserRouter>
    )
}

export default App
