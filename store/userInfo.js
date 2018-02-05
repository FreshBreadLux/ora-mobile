import axios from 'axios'
import ROOT_URL from '../config'
import { LOGOUT } from './auth'

/**
 * ACTION TYPES
 */
const GET_USER_INFO = 'GET_USER_INFO'
const REMOVE_USER_INFO = 'REMOVE_USER_INFO'

/**
 * INITIAL STATE
 */
const defaultUserInfo = {}

/**
 * ACTION CREATORS
 */
export const getUserInfo = userInfo => {
  console.log('Made it to redux getUserInfo with this object: ', userInfo)
  return ({ type: GET_USER_INFO, userInfo })
}
export const removeUserInfo = () => ({ type: REMOVE_USER_INFO })

/**
 * THUNK CREATORS
 */
export const fetchUserInfo = userId =>
  dispatch =>
    axios.get(`${ROOT_URL}/api/users/${userId}`)
      .then(res => {
        dispatch(getUserInfo(res.data || defaultUserInfo))
      })
      .catch(err => console.log(err))

/**
 * REDUCER
 */
export default function(state = defaultUserInfo, action) {
  switch (action.type) {
    case GET_USER_INFO:
     return action.userInfo
    case REMOVE_USER_INFO:
      return defaultUserInfo
    case LOGOUT:
      return defaultUserInfo
    default:
     return state
  }
}
