import { LOGOUT } from './auth'

/**
 * ACTION TYPES
 */
const ADD_RECENTLY_PRAYED_FOR = 'ADD_RECENTLY_PRAYED_FOR'
const REMOVE_RECENTLY_PRAYED_FOR = 'REMOVE_RECENTLY_PRAYED_FOR'

/**
 * INITIAL STATE
 */
const defaultRecentlyPrayedFor = []

/**
 * ACTION CREATORS
 */
export const addRecentlyPrayedFor = prayerId => ({ type: ADD_RECENTLY_PRAYED_FOR, prayerId })
export const removeRecentlyPrayedFor = prayerId => ({ type: REMOVE_RECENTLY_PRAYED_FOR, prayerId })

/**
 * REDUCER
 */
export default function(state = defaultRecentlyPrayedFor, action) {
  switch (action.type) {
    case ADD_RECENTLY_PRAYED_FOR:
     return [...state, action.prayerId]
    case REMOVE_RECENTLY_PRAYED_FOR:
      return state.filter(recent => recent !== action.prayerId)
    case LOGOUT:
      return defaultRecentlyPrayedFor
    default:
     return state
  }
}
