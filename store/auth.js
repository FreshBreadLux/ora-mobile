import axios from 'axios'
import ROOT_URL from '../config'

/**
 * ACTION TYPES
 */
const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'

/**
 * INITIAL STATE
 */
const defaultAuthInfo = {}

/**
 * ACTION CREATORS
 */
export const login = payloadJson => ({ type: LOGIN, payloadJson })
export const logout = () => ({ type: LOGOUT })

/**
 * REDUCER
 */
export default function(state = defaultAuthInfo, action) {
  switch (action.type) {
    case LOGIN:
     return {
       isLoggedIn: true,
       userId: action.payloadJson.userId,
       jwToken: action.payloadJson.jwToken
      }
    case LOGOUT:
      return defaultAuthInfo
    default:
     return state
  }
}
