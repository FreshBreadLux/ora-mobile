import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import prayers from './prayers'
import follows from './follows'
import views from './views'
import userInfo from './userInfo'
import auth from './auth'
import acceptPrayer from './acceptPrayer'
import visibleModal from './visibleModal'
import alarms from './alarms'
import flagReasons from './flagReasons'
import recentlyPrayedFor from './recentlyPrayedFor'
import editMode from './editMode'
import savedRewards from './savedRewards'
import anonymousPrayerCompositions from './anonymousPrayerCompositions'
import editProfileInformation from './editProfileInformation'

const reducer = combineReducers({ prayers, follows, views, userInfo, auth, acceptPrayer, visibleModal, alarms, flagReasons, recentlyPrayedFor, editMode, savedRewards, anonymousPrayerCompositions, editProfileInformation })
const middleware = composeWithDevTools(applyMiddleware(
  thunkMiddleware
))
const store = createStore(reducer, middleware)

export default store
export * from './prayers'
export * from './follows'
export * from './views'
export * from './userInfo'
export * from './auth'
export * from './acceptPrayer'
export * from './visibleModal'
export * from './alarms'
export * from './flagReasons'
export * from './recentlyPrayedFor'
export * from './editMode'
export * from './savedRewards'
export * from './anonymousPrayerCompositions'
export * from './editProfileInformation'
