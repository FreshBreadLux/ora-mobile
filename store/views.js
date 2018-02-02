import axios from 'axios'
import ROOT_URL from '../config'
import { LOGOUT } from './auth'

/**
 * ACTION TYPES
 */
const GET_VIEWS = 'GET_VIEWS'
const ADD_VIEW = 'ADD_VIEW'
const REMOVE_VIEWS = 'REMOVE_VIEWS'

/**
 * INITIAL STATE
 */
const defaultViews = []

/**
 * ACTION CREATORS
 */
export const getViews = views => ({ type: GET_VIEWS, views })
export const addView = view => ({ type: ADD_VIEW, view })
export const removeViews = () => ({ type: REMOVE_VIEWS })

/**
 * THUNK CREATORS
 */
export const fetchUserViews = userId =>
  dispatch =>
    axios.get(`${ROOT_URL}/api/users/${userId}/views`)
      .then(res =>
        dispatch(getViews(res.data || defaultViews)))
      .catch(err => console.log(err))

/**
 * REDUCER
 */
export default function(state = defaultViews, action) {
  switch (action.type) {
    case GET_VIEWS:
     return action.views
    case ADD_VIEW:
     return [...state, action.view]
    case REMOVE_VIEWS:
      return defaultViews
    case LOGOUT:
      return defaultViews
    default:
     return state
  }
}
