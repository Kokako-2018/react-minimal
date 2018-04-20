import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

export default class Search extends React.Component{
    constructor (props){
        super(props)

        this.state ={
            dinoArray: [],
            dinosaur:'', 
            displayDino: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.goFindDinosaur=this.goFindDinosaur.bind(this)
        this.saveDinos=this.saveDinos.bind(this)
    
    }
    componentDidMount(){
        getDinosaurArray(this.saveDinos)
        console.log("mounted")
    }
    
   saveDinos(dinoArray){
    console.log("saving", dinoArray)
       this.setState ({
           dinoArray: dinoArray
       })
   }

    handleChange(e) {
        console.log(e.target.value)
        this.findDinosaur()
        let value = e.target.value 
        this.setState ({dinosaur: value})
    }

    findDinosaur() {
        let displayDino = this.state.dinoArray.filter(dino => {
            return dino = this.state.dinosaur})
            console.log("finding", displayDino)
            this.setState({
                displayDino: displayDino
            })
    }

    // render: function render () {
    //     const dinoString = this.state.dinosaur
    //     if (dinoString.length > 0) {
    //         return this.findDinosaur()
    //     }
    // }

    render () {
        return (
            <div>
                <form>
                    <input onChange={this.handleChange} type='text' placeholder="Enter dinosaur name here" />
                    {/* <input type='submit' onClick={this.goFindDinosaur} value="Find them!" /> */}
                    {/* <if (dinoString.length > 0) {this.findDinosaur()}/> */}
                    <h1>Existing</h1>
                    <h1>{this.state.displayDino.name}</h1>
                    <img src={this.state.displayDino.image} />
                </form>
            </div>
        )
    }
    
}