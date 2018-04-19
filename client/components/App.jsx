import React from 'react'

// import {getThing} from '../api'

export default class App extends React.Component{
    constructor (props){
        super(props)

        this.state ={
            dinosaurs:[],
        }
    }

    // componentDidMount(){
    //     this.getthing(this.save)
    // }

    // save(){
    //     this.setState({
    //         dinosaurs:dinosaurs,
    //     })
    // }

    render(){
        return (
            <div>
                <h1>im here</h1>
            </div>
        )
    }
    
}