// require('es6-promise').polyfill()
// import 'isomorphic-fetch'
// import cookie from 'js-cookie'
// import ActionTypes from '../../actions/ActionTypes'
// import {ONLINE_MODE, OFFLINE_MODE} from '../actions'
// var Dispatcher = require('../../dispatcher/AdminAppDispatcher');
// var JWT_COOKIE = 'HubApiToken'
// import { authorisationFailed } from '../../auth/actions'

// const fullUrl = (url) => {
//   if (url.indexOf('http://') > -1)
//     return url
//   var baseUrl = document.getElementById('root').getAttribute('data-ApiBaseUrl');
//   return baseUrl + url
// }

// const headers = () => ({
//   'Accept':        'application/json',
//   'Content-Type':  'application/json',
//   'Authorization': 'Bearer ' + cookie.get(JWT_COOKIE)
// })

// const status = (response) =>{
  
//   if(response.status === 1223)//needed for IE9 only
//   {
//     response.statusText = "No Content"
//     response.status = 204
//     response.ok = true
//   }

//   return (response.ok)
//     ? Promise.resolve(response)
//     : Promise.reject(new Error(response.statusText))
// }

// const resolveEndpoint = (endpoint, store) => {
//   if (typeof endpoint === 'function')
//     endpoint = endpoint(store.getState())
//   if (typeof endpoint !== 'string')
//     throw new Error('Specify a string endpoint URL.')
//   return endpoint
// }

// const convertToJson = (response) => {
//   return (response.status === 204) ? {} : response.text().then((text) => {
//     try {
//       return JSON.parse(text)
//     } catch (e) {
//       return { data: text }
//     }
//   })
// }

export const API_CALL = 'API_CALL'
// export const USER_NOT_AUTHORISED = 'USER_NOT_AUTHORISED'

export default store => next => action => {
  if (action.type !== API_CALL)
    return next(action)

  console.log("API_CALL", store, action)

}
  
//   let endpoint = resolveEndpoint(action.endpoint, store)

//   if (action.onRequest)
//     next({
//       type: action.onRequest,
//       request: action
//     })

//   return fetch(fullUrl(endpoint), {
//     method: action.method || 'get',
//     headers: headers(store),
//     body:    JSON.stringify(action.body),
//     credentials: 'include'
//   })
//   .then(status)
//   .then(convertToJson)
//   .then(json => {
//     if (action.onSuccess)
//     {
//       next({type: ONLINE_MODE, request:action})
//       next({
//         type: action.onSuccess,
//         response: json,
//         request: action
//       })
//     }
//   })
//   .catch(error => {
//     if (error.message === 'Unauthorized'){
//       Dispatcher.dispatch({ type: ActionTypes.USER_NOT_AUTHORISED, response: error.message })
//       next(authorisationFailed(error.message))
//     }

//     if (error.message === 'Failed to fetch'){
//       next({type: OFFLINE_MODE})
//     }
    
//     if (action.onFailure){
//       next({
//         type: action.onFailure,
//         error: error.message || 'Something bad happened',
//         request: action
//       })
//     }
//   })
// }