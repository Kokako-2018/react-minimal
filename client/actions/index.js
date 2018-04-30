import request from 'superagent'

export const CREATE_USER = 'CREATE_USER'
export const USER_CREATED = 'USER_CREATED'
export const SHOW_ERROR = 'SHOW_ERROR'

export const userCreated = (status)=>{
  return {
  type:USER_CREATED,
  status:status
  }
}

export const createUser = (user)=> {
  console.log(user)
  console.log('posting')
      return (dispatch) =>
        request
        .post('/api/v1/register')
        .send(user)
        .then(res => {
          console.log(res)
          let status = res.status
          dispatch(userCreated(status))
        })
        .catch(err => {
          dispatch(showError(err.message))
        })
}


export const showError = (errorMessage) => {
  return {
    type: SHOW_ERROR,
    errorMessage: errorMessage
  }
}
