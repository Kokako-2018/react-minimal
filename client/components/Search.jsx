import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import {getDinosaurArray} from '../api.js'

export default class Search extends React.Component{
    constructor (props){
        super(props)

        this.state ={
            dinoArray: [],
            dinosaur:'', 
            displayDino: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.saveDinos=this.saveDinos.bind(this)
    
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
        let value = e.target.value 
        this.setState ({
            dinosaur: value
        })
        this.findDinosaur(e.target.value)
        
    }

    findDinosaur(word) {
        let dinoArray = this.state.dinoArray  
        // let dinosaur = this.state.dinosaur  
        let displayDino = dinoArray.filter(dino => {
            return dino.name.includes(word)
        })
            this.setState({
                displayDino: displayDino
            })
    }


    render () {
        return (
            <div>
                 <h1>Existing</h1>
                <form>
                    <input onChange={this.handleChange} type='text' placeholder="Enter dinosaur name here" />
                </form>
                    
                <div>
                    You've found {this.state.displayDino.map((dinos, i) =><div key={i}> 
                    
                    <h1>{dinos.name}</h1>

                    <img src={dinos.image} width='300px' />
                    </div>
                    )}
                    </div>
            </div>
        )
    }
    
}
