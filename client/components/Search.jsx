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
        // this.goFindDinosaur=this.goFindDinosaur.bind(this)
        this.saveDinos=this.saveDinos.bind(this)
    
    }
    componentDidMount(){
        getDinosaurArray(this.saveDinos)
    }
    
   saveDinos(dinoArray){
       this.setState ({
           dinoArray: dinoArray
       })
   }

    handleChange(e) {
        console.log(e.target.value)
        let value = e.target.value 
        this.setState ({dinosaur: value})
    }
    // goFindDinosaur(e){
    //     e.preventDefault()
    //     findDinosaur(this.state.dinosaur)
    // }

    findDinosaur(dinosaur) {
        let displayDino = this.dinoArray.filter(dino => {
            return dino = this.dinosaur})
            this.setState({
                displayDino: displayDino
            })
    }



    render(){
        return (
            <div>
                <form>
                    <input onChange={this.handleChange} type='text' placeholder="Enter dinosaur name here" />
                    {/* <input type='submit' onClick={this.goFindDinosaur} value="Find them!" /> */}
                    <h1>{this.state.displayDino.name}</h1>
                    <img src={this.state.displayDino.image} />
                </form>
            </div>
        )
    }
    
}