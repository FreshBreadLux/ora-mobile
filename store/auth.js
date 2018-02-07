/**
 * ACTION TYPES
 */
const LOGIN = 'LOGIN'
const NOT_FIRST_RODEO = 'NOT_FIRST_RODEO'
export const LOGOUT = 'LOGOUT'

/**
 * INITIAL STATE
 */
const defaultAuthInfo = {
  isLoggedIn: false,
  userId: null,
  jwToken: null,
  firstTime: true
}

/**
 * ACTION CREATORS
 */
export const login = payloadJson => ({ type: LOGIN, payloadJson })
export const notFirstRodeo = () => ({ type: NOT_FIRST_RODEO })
export const logout = () => ({ type: LOGOUT })

/**
 * REDUCER
 */
export default function(state = defaultAuthInfo, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isLoggedIn: true,
        userId: action.payloadJson.userId,
        jwToken: action.payloadJson.jwToken
      }
    case NOT_FIRST_RODEO:
      return { ...state, firstTime: false }
    case LOGOUT:
      return defaultAuthInfo
    default:
     return state
  }
}
