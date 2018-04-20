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
        console.log("mounted")
    }
    
   saveDinos(err, dinoArray){
    console.log("saving", dinoArray)
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
        console.log("target", e.target.value)
        this.findDinosaur(e.target.value)
        
    }

    findDinosaur(word) {
        let dinoArray = this.state.dinoArray  
        let dinosaur = this.state.dinosaur  
        let displayDino = dinoArray.filter(dino => {
            console.log('matching', dino.name.includes(word))
            return dino.name.includes(word)
        })
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

                    {/* <input type='submit' onClick={this.goFindDinosaur} value="Find them!" /> */}
                    {/* <if (dinoString.length > 0) {this.findDinosaur()}/> */}