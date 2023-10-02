import React, { lazy, Suspense, useState, useEffect } from 'react'
import { Router, Route, Switch, Redirect } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { StylesProvider, createGenerateClassName, Grid} from '@material-ui/core'
import Header from './components/Header'
import Progress from './components/Progress'

const MarketingLazy = lazy( () => import('./components/MarketingApp') )
const AuthLazy = lazy( () => import('./components/AuthApp') )
const DashboardLazy = lazy( () => import('./components/DashboardApp') )

const generateClassName = createGenerateClassName({
    productionPrefix: 'co',
})

const history = createBrowserHistory()

const App = () => { 
    
    const [isSignedIn, setIsSignedIn] = useState(false)

    useEffect(()=>{
        if(isSignedIn){
            history.push('/dashboard')
        }
    },[isSignedIn])

    return (
        <Router history={history}>
            <StylesProvider generateClassName={generateClassName}>
                <Grid container>
                    <Grid item xs={12}>
                        <Header onSignOut={() => setIsSignedIn(false)} isSignedIn={isSignedIn} />
                    </Grid>
                    <Grid item xs={12} justify='center'>
                        <Suspense fallback={<Progress />}>
                            <Switch>
                                <Route path='/auth'>
                                    <AuthLazy onSignIn={() => setIsSignedIn(true)} />
                                </Route>
                                <Route path='/dashboard'>
                                    { !isSignedIn && <Redirect to='/'/> }
                                    <DashboardLazy />
                                </Route>
                                <Route path='/'>
                                    <MarketingLazy />
                                </Route>
                            </Switch> 
                        </Suspense>
                    </Grid>
                </Grid>
            </StylesProvider>
        </Router>
    )
}

export default App