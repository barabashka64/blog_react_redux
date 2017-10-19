import { combineReducers } from 'redux'
import posts from './posts'
import { reducer as formReducer } from 'redux-form'

export default combineReducers({
  posts,
  form: formReducer.plugin({
    addPostForm: (state, action) => {
      switch(action.type) {
        case 'ADD_POST':
          return undefined
          
        default:
          return state
      }
    }
  })
})