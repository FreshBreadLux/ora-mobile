import { LOGOUT } from './auth'

/**
 * ACTION TYPES
 */
const SET_VISIBLE_MODAL = 'SET_VISIBLE_MODAL'
const REMOVE_VISIBLE_MODAL = 'REMOVE_VISIBLE_MODAL'

/**
 * INITIAL STATE
 */
const defaultVisibleModal = null

/**
 * ACTION CREATORS
 */
export const setVisibleModal = visibleModal => ({ type: SET_VISIBLE_MODAL, visibleModal })
export const removeVisibleModal = () => ({ type: REMOVE_VISIBLE_MODAL})


/**
 * REDUCER
 */
export default function(state = defaultVisibleModal, action) {
  switch (action.type) {
    case SET_VISIBLE_MODAL:
      return action.visibleModal
    case REMOVE_VISIBLE_MODAL:
      return defaultVisibleModal
    case LOGOUT:
      return defaultVisibleModal
    default:
     return state
  }
}
