import {USER_CREATED} from '../actions'

function submitted (state = {}, action) {
  console.log(action)
  switch(action.type) {
    case USER_CREATED:
      return action.status
    default:
      return state
  }
}

export default submitted
