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
          let rewardImagePromise, artistImagePromise
          // create localPath string for the saved reward image and check for info
          const uri = reward.imageUrl
          const ext = uri.substring(
            uri.lastIndexOf('.'),
            uri.indexOf('?') === -1 ? undefined : uri.indexOf('?')
          )
          const localPath = FileSystem.cacheDirectory + `savedReward${reward.id}` + ext
          const info = await FileSystem.getInfoAsync(localPath)

          // create localPath string for the artist image of the saved reward and check for info
          const artistUri = reward.artist.imageUrl
          const artistExt = artistUri.substring(
            artistUri.lastIndexOf('.'),
            artistUri.indexOf('?') === -1 ? undefined : artistUri.indexOf('?')
          )
          const artistName = reward.artist.fullName.replace(' ', '-')
          const artistLocalPath = FileSystem.cacheDirectory + artistName + artistExt
          const artistInfo = await FileSystem.getInfoAsync(artistLocalPath)

          // if some of the info doesn't exist, download the files to the respective paths
          if (!info.exists) rewardImagePromise = FileSystem.downloadAsync(uri, localPath)
          if (!artistInfo.existis) artistImagePromise = FileSystem.downloadAsync(artistUri, artistLocalPath)
          await Promise.all([rewardImagePromise, artistImagePromise])
          return { ...reward, localPath, artistLocalPath }
        })
        savedRewardsWithLocalUrls = await Promise.all(mappedArrayOfPromises)
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
