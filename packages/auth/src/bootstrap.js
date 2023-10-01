import React from 'react';
import ReactDOM from 'react-dom';
import { createMemoryHistory, createBrowserHistory } from 'history';
import App from './App';

//Mount function to start up the App:
const mount = (element, { onSignIn, onNavigate, defaultHistory, initialPath }) => {
    const history = defaultHistory || createMemoryHistory({
        initialEntries: [initialPath]
    });

    if(onNavigate){
        history.listen(onNavigate);
    }
    
    ReactDOM.render(
        <App onSignIn={onSignIn} history={history} />,
        element
    );

    return {
        onParentNavigate({pathname: nextPathname}) {
            if(history.location.pathname !== nextPathname){
                history.push(nextPathname)
            }
        }
    }
};

//If we are in dev and isolation, call mount immediately:
if(process.env.NODE_ENV === 'development'){
    const devRoot = document.querySelector('#_auth-dev-root')
    if (devRoot) { 
        mount(devRoot, { defaultHistory: createBrowserHistory() }) 
    }
}

//If we are running through Container, we should export mount function: 
export { mount };