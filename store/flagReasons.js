import axios from 'axios'
import ROOT_URL from '../config'
import { LOGOUT } from './auth'

/**
 * ACTION TYPES
 */
const SET_FLAGREASONS = 'SET_FLAGREASONS'
const REMOVE_FLAGREASONS = 'REMOVE_FLAGREASONS'

/**
 * INITIAL STATE
 */
const defaultFlagReasons = null

/**
 * ACTION CREATORS
 */
export const setFlagReasons = flagReasons => ({ type: SET_FLAGREASONS, flagReasons })
export const removeFlagReasons = () => ({ type: REMOVE_FLAGREASONS })

/**
 * THUNK CREATORS
 */
export const fetchFlagReasons = () =>
  dispatch =>
    axios.get(`${ROOT_URL}/api/flagReasons`)
      .then(res =>
        dispatch(setFlagReasons(res.data || defaultFlagReasons)))
      .catch(err => console.log(err))

/**
 * REDUCER
 */
export default function(state = defaultFlagReasons, action) {
  switch (action.type) {
    case SET_FLAGREASONS:
     return action.flagReasons
    case REMOVE_FLAGREASONS:
      return defaultFlagReasons
    case LOGOUT:
      return defaultFlagReasons
    default:
     return state
  }
}
