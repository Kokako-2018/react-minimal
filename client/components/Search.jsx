import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import './Search.css'
import {getDinosaurArray} from '../api.js'
import {Transition} from 'react-spring'

export default class Search extends React.Component{
    constructor (props){
        super(props)

        this.state ={
            dinoArray: [],
            dinosaur:'', 
            displayDino: [],
            details: false,
            selected: null
        }
        this.handleChange = this.handleChange.bind(this)
        this.saveDinos=this.saveDinos.bind(this)
        this.show = this.show.bind(this)
    
    }

   

//before page renders
    componentDidMount(){
        getDinosaurArray(this.saveDinos)
    }
    
   saveDinos(err, dinoArray){
       this.setState ({
           error: err,
           dinoArray: dinoArray
       })
   }

   //after page renders
    handleChange(e) {
        console.log(e.target.value)
        let value = e.target.value 
        this.setState ({
            dinosaur: value
        })
        this.findDinosaur(e.target.value)
        
    }

    findDinosaur(word) {
        console.log(word)
        let dinoArray = this.state.dinoArray  
        // let dinosaur = this.state.dinosaur  
        let displayDino = dinoArray.filter(dino => {
            return dino.name.includes(word)
        })
            this.setState({
                displayDino: displayDino
            })
    }

    show(){
        this.setState({details: !this.state.details})
    }

    selectDinosaur(selected) {
        this.setState({selected})
    }

   renderDinoInfo(dinos){
       
       console.log(dinos.id)
       return <p className="food" >Favourite food: {dinos.favouriteFood}</p>
   }
    
    render () {
        const {show, selected} = this.state
        return (
            <div>
                 <h1>Existing</h1>
                <form>
                    <input onChange={this.handleChange} type='text' placeholder="Enter dinosaur name here" />
                </form>
                    
                <div>
                    <div>
                        You've found {this.state.displayDino.map((dino, i) => {
                            return(
                            <div key={i}> 
                            <h1>{dino.name}</h1>
                            <a href='#'  onClick={() => this.selectDinosaur(dino)}><img src={dino.image} width='300px'/></a>
                            {this.state.selected == dino && this.renderDinoInfo(dino)}
                            </div>
                        )}
                    )}
                    </div>
                    </div>
            </div>
        )
    }
    
}
