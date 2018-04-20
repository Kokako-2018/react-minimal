import React from 'react'
import { HashRouter as Router, Route, Link} from 'react-router-dom'


const Banner = () => {
    return (
            <Router>
                <div id="wrapperHeader">
                    <div className="dinoBanner">
                    <img src="dino.png"></img>
                    </div>
                     
                </div>
            </Router>
    )
}

export default Banner