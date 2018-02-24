import { LOGOUT } from './auth'

/**
 * ACTION TYPES
 */
const SET_EDIT_MODE = 'SET_EDIT_MODE'
const REMOVE_EDIT_MODE = 'REMOVE_EDIT_MODE'
const SET_ADDING_UPDATE = 'SET_ADDING_UPDATE'
const REMOVE_ADDING_UPDATE = 'REMOVE_ADDING_UPDATE'

/**
 * INITIAL STATE
 */
const defaultEditMode = {
  makingEdit: false,
  addingUpdate: false
}

/**
 * ACTION CREATORS
 */
export const setEditMode = () => ({ type: SET_EDIT_MODE })
export const removeEditMode = () => ({ type: REMOVE_EDIT_MODE })
export const setAddingUpdate = () => ({ type: SET_ADDING_UPDATE })
export const removeAddingUpdate = () => ({ type: REMOVE_ADDING_UPDATE })


/**
 * REDUCER
 */
export default function(state = defaultEditMode, action) {
  switch (action.type) {
    case SET_EDIT_MODE:
      return { ...state, makingEdit: true }
    case REMOVE_EDIT_MODE:
      return { makingEdit: false, addingUpdate: false }
    case SET_ADDING_UPDATE:
      return { makingEdit: true, addingUpdate: true }
    case REMOVE_ADDING_UPDATE:
      return { makingEdit: false, addingUpdate: false }
    case LOGOUT:
      return defaultEditMode
    default:
     return state
  }
}
