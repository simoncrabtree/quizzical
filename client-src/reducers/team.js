import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS, 
  LOGIN_FAILURE,
  CHANGE_TEAM_NAME ,
  FETCH_TEAM_REQUEST,
  FETCH_TEAM_SUCCESS,
  FETCH_TEAM_FAILURE
} from '../actions'

export default (state={isLoggingIn: false, isLoggedIn: false}, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isLoggingIn: true
      }

    case LOGIN_SUCCESS:
      return {
        ...state,
        token: action.response.token,
        name: action.response.teamName,
        isLoggedIn: true,
        isLoggingIn: false
      }

    case LOGIN_FAILURE:
      return {
        ...state,
        isLoggingIn: false
      }

    case CHANGE_TEAM_NAME:
      return {
        ...state,
        name: action.teamName
      }

    case FETCH_TEAM_REQUEST:
      return {
        ...state,
        isFetching: true
      }

    case FETCH_TEAM_SUCCESS:
      return {
        ...state,
        name: action.response.name
      }

    case FETCH_TEAM_FAILURE:
      return {
        ...state,
        token: null
      }

    case 'loggedin':
      return {
        ...state,
        token: action.data,
        isLoggedIn: true
      }

    case 'quizmasterLoggedIn':
      return {
        ...state,
        isLoggedIn: true,
        isQuizmaster: true,
        nextQuestion: action.data.nextQuestion
      }

    case 'question':
      return {
        ...state,
        currentQuestion: action.data.question
      }

    default:
      return state
  }
}
