import axios from 'axios'
import ROOT_URL from '../config'
import { LOGOUT } from './auth'

/**
 * ACTION TYPES
 */
const SET_ANONYMOUS_TITLE = 'SET_ANONYMOUS_TITLE'
const SET_ANONYMOUS_BODY = 'SET_ANONYMOUS_BODY'

/**
 * INITIAL STATE
 */
const defaultAnonymousPrayer = {}

/**
 * ACTION CREATORS
 */
export const setAnonymousTitle = title => ({ type: SET_ANONYMOUS_TITLE, title })
export const setAnonymousBody = body => ({ type: SET_ANONYMOUS_BODY, body })

/**
 * THUNK CREATORS
 */
// export const submitAnonymousPrayer = userId =>
//   dispatch =>
//     axios.get(`${ROOT_URL}/api/users/${userId}/prayers`)
//       .then(res =>
//         dispatch(getPrayers(res.data || defaultPrayers)))
//       .catch(err => console.log(err))

/**
 * REDUCER
 */
export default function(state = defaultAnonymousPrayer, action) {
  switch (action.type) {
    case SET_ANONYMOUS_TITLE:
     return { ...state, title: action.title }
    case SET_ANONYMOUS_BODY:
      return { ...state, body: action.body }
    case LOGOUT:
      return defaultAnonymousPrayer
    default:
     return state
  }
}
