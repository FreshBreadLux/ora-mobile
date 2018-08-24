import axios from 'axios'
import { FileSystem } from 'expo'
import ROOT_URL from '../config'
import { LOGOUT } from './auth'

/**
 * ACTION TYPES
 */
const GET_SAVED_REWARDS = 'GET_SAVED_REWARDS'

/**
 * INITIAL STATE
 */
const defaultSavedRewards = null

/**
 * ACTION CREATORS
 */
export const getSavedRewards = rewards => ({ type: GET_SAVED_REWARDS, rewards })

/**
 * THUNK CREATORS
 */

/*
  fetchAndCacheSavedRewards makes a GET request to the DB for a user's saved rewards.
  It then creates a path for each image in Expo's FileSystem cacheDirectory and (if there isn't anything at that path already) downloads the file. The local path is then saved on each reward, and the array of rewards is put onto store state.
*/
export const fetchAndCacheSavedRewards = userId =>
  async dispatch => {
    try {
      let mappedArrayOfPromises, savedRewardsWithLocalUrls
      const res = await axios.get(`${ROOT_URL}/api/users/${userId}/savedRewards`)
      const savedRewards = res.data
      if (savedRewards) {
        mappedArrayOfPromises = await savedRewards.map(async reward => {
          const uri = reward.imageUrl
          const ext = uri.substring(
            uri.lastIndexOf("."),
            uri.indexOf("?") === -1 ? undefined : uri.indexOf("?")
          )
          const localPath = FileSystem.cacheDirectory + `savedReward${reward.id}` + ext
          const info = await FileSystem.getInfoAsync(localPath)
          if (!info.exists) {
            await FileSystem.downloadAsync(reward.imageUrl, localPath)
          } else {
            console.log('Some info already exists at that savedReward path')
          }
          return { ...reward, localPath }
        })
        console.log('finished mapping... awaiting promise resolution')
        savedRewardsWithLocalUrls = await Promise.all(mappedArrayOfPromises)
        console.log('promises resolved; savedRewardsWithLocalUrls:', savedRewardsWithLocalUrls)
      }
      return dispatch(getSavedRewards(savedRewardsWithLocalUrls || defaultSavedRewards))
    } catch (error) {
      console.warn(error)
    }
  }

/**
 * REDUCER
 */
export default function(state = defaultSavedRewards, action) {
  switch (action.type) {
    case GET_SAVED_REWARDS:
     return action.rewards
    case LOGOUT:
      return defaultSavedRewards
    default:
     return state
  }
}
