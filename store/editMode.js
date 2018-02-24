import { LOGOUT } from './auth'

/**
 * ACTION TYPES
 */
const SET_EDIT_MODE = 'SET_EDIT_MODE'
const REMOVE_EDIT_MODE = 'REMOVE_EDIT_MODE'

/**
 * INITIAL STATE
 */
const defaultEditMode = false

/**
 * ACTION CREATORS
 */
export const setEditMode = () => ({ type: SET_EDIT_MODE })
export const removeEditMode = () => ({ type: REMOVE_EDIT_MODE })


/**
 * REDUCER
 */
export default function(state = defaultEditMode, action) {
  switch (action.type) {
    case SET_EDIT_MODE:
      return true
    case REMOVE_EDIT_MODE:
      return false
    case LOGOUT:
      return defaultEditMode
    default:
     return state
  }
}
