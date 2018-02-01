import axios from 'axios'
import ROOT_URL from '../config'

/**
 * ACTION TYPES
 */
const GET_FOLLOWS = 'GET_FOLLOWS'
const REMOVE_FOLLOWS = 'REMOVE_FOLLOWS'

/**
 * INITIAL STATE
 */
const defaultFollows = null

/**
 * ACTION CREATORS
 */
export const getFollows = follows => ({ type: GET_FOLLOWS, follows })
export const removeFollows = () => ({ type: REMOVE_FOLLOWS })

/**
 * THUNK CREATORS
 */
export const fetchUserFollows = userId =>
  dispatch =>
    axios.get(`${ROOT_URL}/api/users/${userId}/follows`)
      .then(res =>
        dispatch(getFollows(res.data || defaultFollows)))
      .catch(err => console.log(err))

/**
 * REDUCER
 */
export default function(state = defaultFollows, action) {
  switch (action.type) {
    case GET_FOLLOWS:
     return action.follows
    case REMOVE_FOLLOWS:
      return defaultFollows
    default:
     return state
  }
}
