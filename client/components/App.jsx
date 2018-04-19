import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import Search from './Search'


const App = () => {
    return (
        <React.Fragment>
            <Router>
                <div>
                    <Route exact path='/' component={Search} />
                </div>
            </Router>
        </React.Fragment>
    )
}

export default App