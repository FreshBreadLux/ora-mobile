import { Amplitude } from 'expo'
import { AMPLITUDE_TEST_API_KEY } from '../config'

export const ampEvents = {
  USER_VERIFIED: 'USER_VERIFIED',
  START_REFLECTION: 'START_REFLECTION',
  LOAD_NEXT_PRAYER: 'LOAD_NEXT_PRAYER',
  FOLLOW_PRAYER: 'FOLLOW_PRAYER',
  SEND_LOVE: 'SEND_LOVE'
}

export const ampInitialize = () => {
  console.log('Initializing Amplitude')
  Amplitude.initialize(AMPLITUDE_TEST_API_KEY)
}

export const ampIdentify = (id, userProperties) => {
  if (id) {
    console.log('Setting Amplitude userId:', id)
    Amplitude.setUserId(id)
    if (userProperties) {
      Amplitude.setUserProperties(userProperties)
    }
  } else {
    Amplitude.clearUserProperties()
  }
}

export const ampLogEvent = (event, eventProperties) => {
  if (eventProperties) {
    Amplitude.logEventWithProperties(event, eventProperties)
  } else {
    console.log('Logging event to Amplitude:', event)
    Amplitude.logEvent(event)
  }
}
