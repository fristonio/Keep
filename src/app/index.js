import React from 'react';
import {render} from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';

import Home from './components/home/';

// Render the App Component
render( <Router history={browserHistory}>
            <Route path='/' component={Home}/>
        </Router>, document.getElementById("app"));