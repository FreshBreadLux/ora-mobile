import axios from 'axios'
import ROOT_URL from '../config'
import { LOGOUT } from './auth'

/**
 * ACTION TYPES
 */
const SET_USER_INFO = 'SET_USER_INFO'
const SET_THEME = 'SET_THEME'
const REMOVE_USER_INFO = 'REMOVE_USER_INFO'

/**
 * INITIAL STATE
 */
const defaultUserInfo = {}

/**
 * ACTION CREATORS
 */
export const setUserInfo = userInfo => ({ type: SET_USER_INFO, userInfo })
export const setTheme = theme => {
  console.log('setTheme:', theme)
  return { type: SET_THEME, theme }
}
export const removeUserInfo = () => ({ type: REMOVE_USER_INFO })

/**
 * THUNK CREATORS
 */
export const fetchUserInfo = userId =>
  dispatch =>
    axios.get(`${ROOT_URL}/api/users/${userId}`)
      .then(res => dispatch(setUserInfo(res.data || defaultUserInfo)))
      .catch(err => console.log(err))

export const updateUserTheme = (userId, theme = 'Rome') =>
  dispatch => {
    if (theme === null) {
      theme = 'Rome'
    }
    return axios.put(`${ROOT_URL}/api/users/${userId}`, {theme})
      .then(res => {
        dispatch(setTheme(res.data.theme))
      })
      .catch(err => console.log(err))
  }

/**
 * REDUCER
 */
export default function(state = defaultUserInfo, action) {
  switch (action.type) {
    case SET_USER_INFO:
      return action.userInfo
    case SET_THEME:
      return { ...state, theme: action.theme }
    case REMOVE_USER_INFO:
      return defaultUserInfo
    case LOGOUT:
      return defaultUserInfo
    default:
      return state
  }
}
