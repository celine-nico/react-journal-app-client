import React from 'react';
import { Switch, Route } from 'react-router-dom'


import JournalsList from './JournalsList'
import About from './About'
import JournalsForm from './JournalsForm'
import JournalsContainer from './JournalsContainer'


const Router = () => {
    return ( 
        <Switch>
            <Route exact path="/" component={JournalsList} />
            <Route exact path="/about" component={About} />
            <Route exact path="/newform" component={JournalsForm} />

        </Switch>
    )
}


export default Router;