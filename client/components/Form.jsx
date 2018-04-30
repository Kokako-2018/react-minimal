import React from 'react'
import {connect} from 'react-redux'
import {createUser} from '../actions/index'

//this will be the submit form

class Form extends React.Component {

        constructor(props) {
        super(props)
        this.state = {
            username :'',
            password:'',
            status:''

        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)

    }
    handleChange(e){
        this.setState({
            [e.target.name] : e.target.value,
            status:''

        })

    }

    handleSubmit(e){
      console.log(this.state)
        e.preventDefault()
        this.props.dispatch(createUser(this.state))
    }

    // alertUser(){
    //     console.log('hi')
    //     return  (state.recieved ==true)
    // }

    render(){
        console.log(this.state)
        return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <h3 id="title"><b>Would you rather..?</b></h3>
                </div>
                <div className="row">
                    <form onSubmit={this.handleSubmit} method='post'>
                        <input className="input" name="username" onChange={this.handleChange} placeholder="Enter user name" type="text"/><br/>
                        <input className="input" name="password" onChange={this.handleChange} placeholder="Enter password" type="password"/><br/>
                        <input className ="submit" type="submit"/>
                    </form>
                </div>
                {this.props.status == 400 && <div>{window.alert('User name already in use')}{window.location.reload()}</div>}
                {this.props.status == 200 && <div>{window.alert('User successfully created')}{window.location.reload()}</div>}
            </div>
        </React.Fragment>
        )}

}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        status: state.submitted
    }
}

export default connect(mapStateToProps)(Form)
