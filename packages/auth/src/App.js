import React from 'react'
import { Switch, Route, Router } from 'react-router-dom'
import { StylesProvider, createGenerateClassName } from '@material-ui/core'
import Signin from './components/Signin'
import Signup from './components/Signup'

const generateClassName = createGenerateClassName({
    productionPrefix: 'au',
})

const App = ({ history, onSignIn }) => {
    return (
        <StylesProvider generateClassName={generateClassName}>
            <div>
                <Router history={history}>
                    <Switch>
                        <Route path='/auth/signin'>
                            <Signin onSignIn={onSignIn} />
                        </Route>
                        <Route path='/auth/signup'>
                            <Signup onSignIn={onSignIn} />
                        </Route>
                    </Switch>
                </Router>
            </div>
        </StylesProvider>
    )
}

export default App