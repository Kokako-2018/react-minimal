import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import Search from './Search'
import This from './Spring'
import Banner from './Banner'


const App = () => {
    return (
        <React.Fragment>
            <Router>
                <div>
                <div>
                    <Route exact path='/' component={Banner} />
                </div>
                <div>
                    <Route exact path='/' component={Search} />
                </div>
                <div>   
                    <Route path='/' component={This} />
                </div>
                </div>
            </Router>
        </React.Fragment>
    )
}

export default App