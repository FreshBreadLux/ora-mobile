import axios from 'axios'
import { FileSystem } from 'expo'
import ROOT_URL from '../config'
import { LOGOUT } from './auth'
import { addView } from './views'
import { setUserInfo } from './userInfo'

/**
 * ACTION TYPES
 */
const SET_CURRENT_PRAYER = 'SET_CURRENT_PRAYER'
const SET_THANK_YOU = 'SET_THANK_YOU'
const FINISH_PRAYING = 'FINISH_PRAYING'
const SET_REFLECTION_MODE = 'SET_REFLECTION_MODE'
const EXIT_REFLECTION_MODE = 'EXIT_REFLECTION_MODE'
const SET_DAILY_REFLECTION = 'SET_DAILY_REFLECTION'
const SET_DAILY_REWARD = 'SET_DAILY_REWARD'
const UNLOCK_DAILY_REWARD = 'UNLOCK_DAILY_REWARD'
const LOCK_DAILY_REWARD = 'LOCK_DAILY_REWARD'

/**
 * INITIAL STATE
 */
const defaultAcceptPrayer = {
  currentPrayer: {},
  reflectionMode: true,
  dailyReflection: {},
  dailyReward: {},
  noPrayers: false,
  dailyRewardUnlocked: false,
}

/**
 * ACTION CREATORS
 */
export const setCurrentPrayer = prayer => ({ type: SET_CURRENT_PRAYER, prayer })
export const setDailyReflection = reflection => ({ type: SET_DAILY_REFLECTION, reflection })
export const setDailyReward = reward => ({ type: SET_DAILY_REWARD, reward })
export const setThankYou = () => ({ type: SET_THANK_YOU })
export const finishPraying = () => ({ type: FINISH_PRAYING })
export const setReflectionMode = () => ({ type: SET_REFLECTION_MODE })
export const exitReflectionMode = () => ({ type: EXIT_REFLECTION_MODE })
export const unlockDailyReward = () => ({ type: UNLOCK_DAILY_REWARD })
export const lockDailyReward = () => ({ type: LOCK_DAILY_REWARD })

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
        clearTimeout(cancelTimeoutID)
        dispatch(setThankYou())
        dispatch(setCurrentPrayer({
          subject: 'Thank You',
          body: 'There are currently no new prayers in the Ora Prayer Network. Please take some time to pray for the intentions that you have followed, and check back later to accept new prayer requests.'
        }))
        successHandler()
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
    .catch(console.warn)

/*
  fetchAndCacheDailyReward makes a GET request to the DB for the reward for a given date string.
  It then creates a path for the image in Expo's FileSystem cacheDirectory, and
  (if there isn't anything at that path already) downloads the file. The localPath is then added
  to the dailyReward object and set on store state.
*/
export const fetchAndCacheDailyReward = date =>
  async dispatch => {
    try {
      const res = await axios.get(`${ROOT_URL}/api/rewards/?date=${date}`)
      const dailyReward = res.data
      if (dailyReward) {
        let rewardImagePromise, artistImagePromise
        // create localPath string for the daily reward image and check for info
        const uri = dailyReward.imageUrl
        const ext = uri.substring(
          uri.lastIndexOf('.'),
          uri.indexOf('?') === -1 ? undefined : uri.indexOf('?')
        )
        const localPath = FileSystem.cacheDirectory + date + ext
        const info = await FileSystem.getInfoAsync(localPath)

        // create localPath string for the artist image of the daily reward and check for info
        const artistUri = dailyReward.artist.imageUrl
        const artistExt = artistUri.substring(
          artistUri.lastIndexOf('.'),
          artistUri.indexOf('?') === -1 ? undefined : artistUri.indexOf('?')
        )
        const artistName = dailyReward.artist.fullName.replace(' ', '-')
        const artistLocalPath = FileSystem.cacheDirectory + artistName + artistExt
        const artistInfo = await FileSystem.getInfoAsync(artistLocalPath)

        // if some of the info doesn't exist, download the files to the respective paths
        if (!info.exists) rewardImagePromise = FileSystem.downloadAsync(uri, localPath)
        if (!artistInfo.exists) artistImagePromise = FileSystem.downloadAsync(artistUri, artistLocalPath)
        await Promise.all([rewardImagePromise, artistImagePromise])
        return dispatch(setDailyReward({ ...dailyReward, localPath, artistLocalPath }))
      }
    } catch (error) {
      console.warn(error)
    }
  }

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
    case SET_DAILY_REWARD:
      return { ...state, dailyReward: action.reward }
    case SET_THANK_YOU:
      return { ...state, noPrayers: true }
    case EXIT_REFLECTION_MODE:
      return { ...state, reflectionMode: false }
    case FINISH_PRAYING:
      return { ...state, currentPrayer: {}, reflectionMode: true, noPrayers: false }
    case UNLOCK_DAILY_REWARD:
      return { ...state, dailyRewardUnlocked: true }
    case LOCK_DAILY_REWARD:
      return { ...state, dailyRewardUnlocked: false }
    case LOGOUT:
      return defaultAcceptPrayer
    default:
     return state
  }
}
