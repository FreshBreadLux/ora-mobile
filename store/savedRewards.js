import axios from 'axios'
import { AsyncStorage, ImageEditor, Image, Dimensions, ImageStore } from 'react-native'
import { FileSystem } from 'expo'
import ROOT_URL from '../config'
import { LOGOUT } from './auth'

/*
  HELPER FUNCTIONS
*/
const createRewardLocalPath = reward => {
  const uri = reward.imageUrl
  const ext = uri.substring(
    uri.lastIndexOf('.'),
    uri.indexOf('?') === -1 ? undefined : uri.indexOf('?')
  )
  return FileSystem.cacheDirectory + `savedReward${reward.id}` + ext
}

const createArtistLocalPath = reward => {
  const artistUri = reward.artist.imageUrl
  const artistExt = artistUri.substring(
    artistUri.lastIndexOf('.'),
    artistUri.indexOf('?') === -1 ? undefined : artistUri.indexOf('?')
  )
  const artistName = reward.artist.fullName.replace(' ', '-')
  return FileSystem.cacheDirectory + artistName + artistExt
}

const createThumbnailLocalPath = reward => {
  const uri = reward.imageUrl
  const ext = uri.substring(
    uri.lastIndexOf('.'),
    uri.indexOf('?') === -1 ? undefined : uri.indexOf('?')
  )
  return FileSystem.cacheDirectory + `reward-thumbnail-${reward.data}` + ext
}

const generateThumbnailParams = (imageWidth, imageHeight) => {
  const { width } = Dimensions.get('window')
  return {
    offset: {
      x: 0,
      y: 0
    },
    size: {
      width: imageWidth,
      height: imageHeight
    },
    displaySize: {
      width: (width / 3),
      height: (width / 3)
    },
    resizeMode: 'cover'
  }
}

const buildThumbnail = (localPath, width, height) => {
  return new Promise((resolve, reject) => {
    ImageEditor.cropImage(
      localPath,
      generateThumbnailParams(width, height),
      uri => {
        console.log('uri:', uri)
        resolve(uri)
      },
      error => reject(error)
    )
  })
}

const getImageDimensions = uri => {
  return new Promise((resolve, reject) => {
    Image.getSize(
      uri,
      (width, height) => resolve({width, height}),
      error => reject(error)
    )
  })
}

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
  It then creates a path for the reward and artist images in Expo's FileSystem cacheDirectory and
  (if there isn't anything at that path already) downloads the file. The local path is then saved
  on each reward, and the array of rewards is put onto store state.
*/
export const fetchAndCacheSavedRewards = userId =>
  async dispatch => {
    try {
      let mappedArrayOfPromises, savedRewardsWithLocalUrls
      const res = await axios.get(`${ROOT_URL}/api/users/${userId}/savedRewards`)
      const savedRewards = res.data
      if (savedRewards) {
        mappedArrayOfPromises = await savedRewards.map(async reward => {
          let rewardImagePromise, artistImagePromise, thumbnailImagePromise
          // create localPath strings for the images
          const localPath = createRewardLocalPath(reward)
          const artistLocalPath = createArtistLocalPath(reward)
          const thumbnailLocalPath = createThumbnailLocalPath(reward)

          // check the FileSystem to see if info already exists at these paths
          const infoPromise = FileSystem.getInfoAsync(localPath)
          const artistInfoPromise = FileSystem.getInfoAsync(artistLocalPath)
          const thumbnailInfoPromise = FileSystem.getInfoAsync(thumbnailLocalPath)
          const [info, artistInfo, thumbnailInfo] = await Promise.all([infoPromise, artistInfoPromise, thumbnailInfoPromise])

          // if some of the info doesn't exist, download the files to the respective paths
          if (!info.exists) {
            rewardImagePromise = FileSystem.downloadAsync(reward.imageUrl, localPath)
          }
          if (!artistInfo.exists) {
            artistImagePromise = FileSystem.downloadAsync(reward.artist.imageUrl, artistLocalPath)
          }
          if (!thumbnailInfo.exists) {
            thumbnailImagePromise = FileSystem.downloadAsync(reward.thumbnailUrl, thumbnailLocalPath)
          }
          await Promise.all([rewardImagePromise, artistImagePromise, thumbnailImagePromise])

          return { ...reward, localPath, artistLocalPath, thumbnailLocalPath }
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
