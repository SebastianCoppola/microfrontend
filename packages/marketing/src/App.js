import React from 'react'
import { Switch, Route, Router, MemoryRouter } from 'react-router-dom'
import { StylesProvider, createGenerateClassName } from '@material-ui/core'
import Landing from './components/Landing'
import Pricing from './components/Pricing'

const generateClassName = createGenerateClassName({
    productionPrefix: 'ma',
})

const App = ({ history }) => {
    return (
        <StylesProvider generateClassName={generateClassName}>
            <div>
                <Router history={history}>
                    <Switch>
                        <Route exact path='/pricing' component={Pricing} />
                        <Route path='/' component={Landing} />
                    </Switch>
                </Router>
            </div>
        </StylesProvider>
    )
}

export default App