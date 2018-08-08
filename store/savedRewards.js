import axios from 'axios'
import ROOT_URL from '../config'
import { LOGOUT } from './auth'

/**
 * ACTION TYPES
 */
const GET_SAVED_REWARDS = 'GET_SAVED_REWARDS'

/**
 * INITIAL STATE
 */
const defaultSavedRewards = null

/**
 * ACTION CREATORS
 */
export const getSavedRewards = rewards => ({ type: GET_SAVED_REWARDS, rewards })

/**
 * THUNK CREATORS
 */
export const fetchSavedRewards = userId =>
  dispatch =>
    axios.get(`${ROOT_URL}/api/users/${userId}/savedRewards`)
      .then(res =>
        dispatch(getSavedRewards(res.data || defaultSavedRewards)))
      .catch(err => console.log(err))

/**
 * REDUCER
 */
export default function(state = defaultSavedRewards, action) {
  switch (action.type) {
    case GET_SAVED_REWARDS:
     return action.rewards
    case LOGOUT:
      return defaultSavedRewards
    default:
     return state
  }
}
