import axios from 'axios'
import ROOT_URL from '../config'
import { LOGOUT } from './auth'
import { setUserInfo } from './userInfo'

/**
 * ACTION TYPES
 */
const SET_FIRST_NAME = 'SET_FIRST_NAME'
const SET_LAST_NAME = 'SET_LAST_NAME'
const SET_EMAIL = 'SET_EMAIL'
const SET_PHONE_NUMBER = 'SET_PHONE_NUMBER'
const SET_AGE = 'SET_AGE'
const SET_GENDER = 'SET_GENDER'
const SET_ZIP = 'SET_ZIP'
const CLEAR_EDIT_PROFILE = 'CLEAR_EDIT_PROFILE'

/**
 * INITIAL STATE
 */
const defaultProfileInformation = {}

/**
 * ACTION CREATORS
 */
export const setFirstName = firstName => ({ type: SET_FIRST_NAME, firstName })
export const setLastName = lastName => ({ type: SET_LAST_NAME, lastName })
export const setEmail = email => ({ type: SET_EMAIL, email })
export const setPhoneNumber = phoneNumber => ({ type: SET_PHONE_NUMBER, phoneNumber })
export const setAge = age => ({ type: SET_AGE, age })
export const setGender = gender => ({ type: SET_GENDER, gender })
export const setZip = zip => ({ type: SET_ZIP, zip })
export const clearEditProfile = () => ({ type: CLEAR_EDIT_PROFILE })

/**
 * THUNK CREATORS
 */
export const updateProfileInformation = (userId, profileInformation) =>
  dispatch =>
    axios.put(`${ROOT_URL}/api/users/${userId}`, profileInformation)
    .then(updatedUserInfo => {
      console.log('updatedUserInfo.data:', updatedUserInfo.data)
      dispatch(setUserInfo(updatedUserInfo.data))
      dispatch(clearEditProfile())
    })
    .catch(console.log)

/**
 * REDUCER
 */
export default function(state = defaultProfileInformation, action) {
  switch (action.type) {
    case SET_FIRST_NAME:
     return { ...state, firstName: action.firstName }
    case SET_LAST_NAME:
     return { ...state, lastName: action.lastName }
    case SET_EMAIL:
     return { ...state, email: action.email }
    case SET_PHONE_NUMBER:
     return { ...state, phoneNumber: action.phoneNumber }
    case SET_AGE:
     return { ...state, age: action.age }
    case SET_GENDER:
     return { ...state, gender: action.gender }
    case SET_ZIP:
     return { ...state, zip: action.zip }
    case CLEAR_EDIT_PROFILE:
      return defaultProfileInformation
    case LOGOUT:
      return defaultProfileInformation
    default:
     return state
  }
}
