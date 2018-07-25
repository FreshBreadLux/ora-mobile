import axios from 'axios'
import ROOT_URL from '../config'
import { LOGOUT } from './auth'

/**
 * ACTION TYPES
 */
const SET_DAILY_REFLECTION = 'SET_DAILY_REFLECTION'

/**
 * INITIAL STATE
 */
const defaultDailyReflection = {}

/**
 * ACTION CREATORS
 */
export const setDailyReflection = dailyReflection => ({ type: SET_DAILY_REFLECTION, dailyReflection })

/**
 * THUNK CREATORS
 */
export const fetchDailyReflection = date =>
  dispatch =>
    axios.get(`${ROOT_URL}/api/reflections/?date=${date}`)
    .then(res => res.data)
    .then(dailyReflection => {
      dispatch(setDailyReflection(dailyReflection))
    })
    .catch(err => {
      console.warn(err)
    })

/**
 * REDUCER
 */
export default function(state = defaultDailyReflection, action) {
  switch (action.type) {
    case SET_DAILY_REFLECTION:
      return action.dailyReflection
    case LOGOUT:
      return defaultDailyReflection
    default:
     return state
  }
}
