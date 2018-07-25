import axios from 'axios'
import ROOT_URL from '../config'
import { LOGOUT } from './auth'
import { addView } from './views'
import { setUserInfo } from './userInfo'

/**
 * ACTION TYPES
 */
const SET_CURRENT_PRAYER = 'SET_CURRENT_PRAYER'
const SET_REFLECTION_MODE = 'SET_REFLECTION_MODE'
const SET_THANK_YOU = 'SET_THANK_YOU'
const FINISH_PRAYING = 'FINISH_PRAYING'
const EXIT_REFLECTION_MODE = 'EXIT_REFLECTION_MODE'
const SET_DAILY_REFLECTION = 'SET_DAILY_REFLECTION'

/**
 * INITIAL STATE
 */
const defaultAcceptPrayer = {
  currentPrayer: {},
  reflectionMode: true,
  dailyReflection: {},
  noPrayers: false
}

/**
 * ACTION CREATORS
 */
export const setCurrentPrayer = prayer => ({ type: SET_CURRENT_PRAYER, prayer })
export const setDailyReflection = reflection => ({ type: SET_DAILY_REFLECTION, reflection })
export const setThankYou = () => ({ type: SET_THANK_YOU })
export const finishPraying = () => ({ type: FINISH_PRAYING })
export const setReflectionMode = () => ({ type: SET_REFLECTION_MODE })
export const exitReflectionMode = () => ({ type: EXIT_REFLECTION_MODE })

/**
 * THUNK CREATORS
 */
export const fetchNextPrayer = (userId, views, cancelTimeoutID, successHandler) =>
  dispatch =>
    axios.put(`${ROOT_URL}/api/prayers/next`, { userId, views })
    .then(res => res.data)
    .then(obj => {
      clearTimeout(cancelTimeoutID)
      dispatch(addView(obj.newView[0][0].viewedId))
      dispatch(setCurrentPrayer(obj.updatedPrayer))
      dispatch(setUserInfo(obj.scrubbedUser))
      successHandler()
    })
    .catch(err => {
      if (err.response && err.response.status === 404) {
        dispatch(setThankYou())
        dispatch(setCurrentPrayer({
          subject: 'Thank You',
          body: 'There are currently no new prayers in the Ora Prayer Network. Please take some time to pray for the intentions that you have followed, and check back later to accept new prayer requests.'
        }))
      } else {
        console.warn(err)
      }
    })

export const fetchDailyReflection = date =>
  dispatch =>
    axios.get(`${ROOT_URL}/api/reflections/?date=${date}`)
    .then(res => res.data)
    .then(reflection => {
      dispatch(setDailyReflection(reflection))
    })
    .catch(err => {
      console.warn(err)
    })

/**
 * REDUCER
 */
export default function(state = defaultAcceptPrayer, action) {
  switch (action.type) {
    case SET_CURRENT_PRAYER:
      return { ...state, currentPrayer: action.prayer }
    case SET_REFLECTION_MODE:
      return { ...state, reflectionMode: true }
    case SET_DAILY_REFLECTION:
      return { ...state, dailyReflection: action.reflection }
    case SET_THANK_YOU:
      return { ...state, noPrayers: true }
    case EXIT_REFLECTION_MODE:
      return { ...state, reflectionMode: false }
    case FINISH_PRAYING:
      return { ...state, currentPrayer: {}, reflectionMode: true, noPrayers: false }
    case LOGOUT:
      return defaultAcceptPrayer
    default:
     return state
  }
}
