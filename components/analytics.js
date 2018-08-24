import { Amplitude } from 'expo'
import { AMPLITUDE_API_KEY } from '../config'

export const ampEvents = {
  USER_VERIFIED: 'USER_VERIFIED',
  START_REFLECTION: 'START_REFLECTION',
  READ_FULL_REFLECTION: 'READ_FULL_REFLECTION',
  LOAD_NEXT_PRAYER: 'LOAD_NEXT_PRAYER',
  FOLLOW_PRAYER: 'FOLLOW_PRAYER',
  SEND_LOVE: 'SEND_LOVE',
  OPEN_REWARD: 'OPEN_REWARD',
  READ_FULL_REWARD: 'READ_FULL_REWARD',
  OPEN_SURVEY_PROMPT: 'OPEN_SURVEY_PROMPT',
  CLOSE_SURVEY_PROMPT: 'CLOSE_SURVEY_PROMPT',
  START_SURVEY: 'START_SURVEY',
  DECLINE_SURVEY: 'DECLINE_SURVEY',
  VOTE_NEW_CONTENT: 'VOTE_NEW_CONTENT',
  VOTE_NO_NEW_CONTENT: 'VOTE_NO_NEW_CONTENT',
  WILLING_TO_PAY: 'WILLING_TO_PAY',
  UNWILLING_TO_PAY: 'UNWILLING_TO_PAY',
  COMPLETE_SURVEY: 'COMPLETE_SURVEY',
  OPEN_DONATE_PAGE: 'OPEN_DONATE_PAGE'
}

export const ampInitialize = () => {
  Amplitude.initialize(AMPLITUDE_API_KEY)
}


/*
ampIdentify is called when a user logs in. It identifies the user and then attributes
all of the following actions to that identity. userProperties is an object with relevant
data about the user.
*/
export const ampIdentify = (id, userProperties) => {
  if (id) {
    Amplitude.setUserId(id.toString())
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
    Amplitude.logEvent(event)
  }
}
