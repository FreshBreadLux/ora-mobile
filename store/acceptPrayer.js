import axios from 'axios'
import ROOT_URL from '../config'
import { LOGOUT } from './auth'
import { addView } from './views'
import { setUserInfo } from './userInfo'

/**
 * ACTION TYPES
 */
const SET_CURRENT_PRAYER = 'SET_CURRENT_PRAYER'
const SET_REFLECTION = 'SET_REFLECTION'
const SET_THANK_YOU = 'SET_THANK_YOU'
const FINISH_PRAYING = 'FINISH_PRAYING'
const REMOVE_REFLECTION = 'REMOVE_REFLECTION'

/**
 * INITIAL STATE
 */
const defaultAcceptPrayer = {
  currentPrayer: {},
  reflection: true,
  noPrayers: false
}

/**
 * ACTION CREATORS
 */
export const setCurrentPrayer = prayer => ({ type: SET_CURRENT_PRAYER, prayer })
export const setReflection = () => ({ type: SET_REFLECTION })
export const setThankYou = () => ({ type: SET_THANK_YOU })
export const finishPraying = () => ({ type: FINISH_PRAYING })
export const removeReflection = () => ({ type: REMOVE_REFLECTION})

/**
 * THUNK CREATORS
 */
export const fetchNextPrayer = (userId, views) =>
  dispatch =>
    axios.put(`${ROOT_URL}/api/prayers/next`, { userId, views })
    .then(res => res.data)
    .then(obj => {
      dispatch(addView(obj.newView[0][0].viewedId))
      dispatch(setCurrentPrayer(obj.updatedPrayer))
      dispatch(setUserInfo(obj.scrubbedUser))
    })
    .catch(err => {
      if (err.response && err.response.status === 404) {
        dispatch(setThankYou())
        dispatch(setCurrentPrayer({
          subject: 'Thank You',
          body: 'There are currently no new prayers in the Ora Prayer Network. Please take some time to pray for the intentions that you have followed, and check back later to accept new prayer requests.'
        }))
      } else {
        console.error(err)
      }
    })

/**
 * REDUCER
 */
export default function(state = defaultAcceptPrayer, action) {
  switch (action.type) {
    case SET_CURRENT_PRAYER:
      return { ...state, currentPrayer: action.prayer }
    case SET_REFLECTION:
      return { ...state, reflection: true }
    case SET_THANK_YOU:
      return { ...state, noPrayers: true }
    case REMOVE_REFLECTION:
      return { ...state, reflection: false }
    case FINISH_PRAYING:
      return defaultAcceptPrayer
    case LOGOUT:
      return defaultAcceptPrayer
    default:
     return state
  }
}
