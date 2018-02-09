import { AsyncStorage } from 'react-native'
import { LOGOUT } from './auth'

/**
 * ACTION TYPES
 */
const GET_ALARMS = 'GET_ALARMS'
const REMOVE_ALARMS = 'REMOVE_ALARMS'

/**
 * INITIAL STATE
 */
const defaultAlarms = []

/**
 * ACTION CREATORS
 */
export const getAlarms = alarms => ({ type: GET_ALARMS, alarms })
export const removeAlarms = () => ({ type: REMOVE_ALARMS })

/**
 * THUNK CREATORS
 */
export const fetchUserAlarms = () =>
  async dispatch => {
    try {
      const userAlarms = await AsyncStorage.getItem('userAlarms')
      const userAlarmsJson = JSON.parse(userAlarms)
      dispatch(getAlarms(userAlarmsJson || defaultAlarms))
    } catch (error) {
      console.error(error)
    }
  }

/**
 * REDUCER
 */
export default function(state = defaultAlarms, action) {
  switch (action.type) {
    case GET_ALARMS:
     return action.alarms
    case REMOVE_ALARMS:
      return defaultAlarms
    case LOGOUT:
      return defaultAlarms
    default:
     return state
  }
}
