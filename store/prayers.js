import axios from 'axios'
import ROOT_URL from '../config'
import { LOGOUT } from './auth'

/**
 * ACTION TYPES
 */
const GET_PRAYERS = 'GET_PRAYERS'
const REMOVE_PRAYERS = 'REMOVE_PRAYERS'

/**
 * INITIAL STATE
 */
const defaultPrayers = null

/**
 * ACTION CREATORS
 */
export const getPrayers = prayers => ({ type: GET_PRAYERS, prayers })
export const removePrayers = () => ({ type: REMOVE_PRAYERS })

/**
 * THUNK CREATORS
 */
export const fetchUserPrayers = userId =>
  dispatch =>
    axios.get(`${ROOT_URL}/api/users/${userId}/prayers`)
      .then(res =>
        dispatch(getPrayers(res.data || defaultPrayers)))
      .catch(err => console.log(err))

/**
 * REDUCER
 */
export default function(state = defaultPrayers, action) {
  switch (action.type) {
    case GET_PRAYERS:
     return action.prayers
    case REMOVE_PRAYERS:
      return defaultPrayers
    case LOGOUT:
      return defaultPrayers
    default:
     return state
  }
}
