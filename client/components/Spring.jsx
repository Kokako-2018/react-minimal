
import React from 'react'
import ReactDOM from 'react-dom'
import delay from 'delay'

import {Spring, Trail, Transition, animated } from 'react-spring'

const Header = ({ children, bold, styles }) => (
    <h1 style={styles}>
        {bold ? <b>{children}</b> : children}
    </h1>
)

export default class Springer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            toggle: false
        }
        this.toggle = this.toggle.bind(this)
    }
    toggle() {
        this.setState({toggle: !this.state.toggle})
    }
    render() {
        const items = [
            {text: 'Hello', key: 1},
            {text: 'Goodbye', key: 2}
        ]
        const {toggle} = this.state
        return <div className="columns is-0">
            <button className="button is-large is-success" onClick={this.toggle}>Toggle</button>
            {toggle && 
            <Transition
            items={items}
                keys={items.map(item => item.key)}
                from={{opacity: 1, color: 'red', fontSize: '1rem'}}
                to={{opacity: 1, color: 'green', fontSize: '2rem'}}

            >   
            {items.map(item => styles => <p className="column is-narrow" style={styles}>{item.text}</p>)}
                {/* {[styles => <p style={styles}>Hello</p>]} */}
            </Transition>
            }
        </div>
            
    }
}



// const defaultStyles = {
//   cursor: 'pointer',
//   position: 'absolute',
//   width: '100%',
//   height: '100%',
//   display: 'flex',
//   justifyContent: 'center',
//   alignItems: 'center',
//   color: 'white',
//   fontWeight: 800,
//   fontSize: '16em'
// }
// const A = styles => <animated.div style={{ ...defaultStyles, ...styles, backgroundColor: '#247BA0' }}>A</animated.div>
// const B = styles => <animated.div style={{ ...defaultStyles, ...styles, backgroundColor: '#B2DBBF' }}>B</animated.div>

// export default class This extends React.PureComponent {
//   state = { toggled: true }
//   toggle = e => this.setState(state => ({ toggled: !state.toggled }))
//   render() {
//     return (
//       <div onClick={this.toggle}>
//         <Transition
//           native
//           from={{ opacity: 0 }}
//           enter={{ opacity: 1 }}
//           leave={{ opacity: 0 }}
//           config={{ tension: 5, friction: 10 }}>
//           {this.state.toggled ? A : B}
//         </Transition>
//       </div>
//     )
//   }
// }


