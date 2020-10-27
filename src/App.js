import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './pages'
import SignInPage from './pages/SignInPage'

const App = () => {
    return (
        <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/sign-in" exact component={SignInPage} />
        </Switch>
        </BrowserRouter>
    )
}

export default App
