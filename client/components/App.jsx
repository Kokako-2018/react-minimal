import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import Search from './Search'
import This from './Spring'


const App = () => {
    return (
        <React.Fragment>
            <Router>
                <div>
                    <Route exact path='/' component={Search} />
                    {/* <Route path='/' component={This} /> */}
                </div>
            </Router>
        </React.Fragment>
    )
}

export default App