import axios from 'axios'
import ROOT_URL from '../config'
import { LOGOUT } from './auth'

/**
 * ACTION TYPES
 */
const SET_ANONYMOUS_SUBJECT = 'SET_ANONYMOUS_SUBJECT'
const SET_ANONYMOUS_BODY = 'SET_ANONYMOUS_BODY'
const SET_ANONYMOUS_PRAYER_STATUS = 'SET_ANONYMOUS_PRAYER_STATUS'

/**
 * INITIAL STATE
 */
const defaultAnonymousPrayer = {
  subject: '',
  body: '',
  prayerStatus: null,
}

/**
 * ACTION CREATORS
 */
export const setAnonymousSubject = subject => ({ type: SET_ANONYMOUS_SUBJECT, subject })
export const setAnonymousBody = body => ({ type: SET_ANONYMOUS_BODY, body })
export const setAnonymousPrayerStatus = status => ({ type: SET_ANONYMOUS_PRAYER_STATUS, status })

/**
 * THUNK CREATORS
 */
export const submitAnonymousPrayer = (jwtoken, userId, subject, body, refreshUserPrayers) =>
  dispatch => {
    if (userId && subject && body) {
      dispatch(setAnonymousPrayerStatus('sending'))
      axios.post(`${ROOT_URL}/api/prayers`, {
        userId, subject, body
      }, {
        headers: { token: jwtoken }
      })
      .then(() => {
        refreshUserPrayers(userId)
        dispatch(setAnonymousPrayerStatus('sent'))
        dispatch(setAnonymousSubject(''))
        dispatch(setAnonymousBody(''))
        setTimeout(() => dispatch(setAnonymousPrayerStatus(null)), 5000)
      })
      .catch(err => {
        console.log(err)
        dispatch(setAnonymousPrayerStatus('failed'))
        setTimeout(() => dispatch(setAnonymousPrayerStatus(null)), 5000)
      })
    }
  }

/**
 * REDUCER
 */
export default function(state = defaultAnonymousPrayer, action) {
  switch (action.type) {
    case SET_ANONYMOUS_SUBJECT:
     return { ...state, subject: action.subject }
    case SET_ANONYMOUS_BODY:
      return { ...state, body: action.body }
    case SET_ANONYMOUS_PRAYER_STATUS:
      return { ...state, prayerStatus: action.status }
    case LOGOUT:
      return defaultAnonymousPrayer
    default:
     return state
  }
}
