import React from 'react'
import { StackNavigator } from 'react-navigation'
import { IntroSwiperContainer, NewReminderContainer, NewReminderRepeatContainer } from './containers'
import { NewReminderSubjectPresenter, NewReminderNamePresenter, NewReminderHeaderLeftPresenter } from './presenters'

const IntroStackNav = StackNavigator({
  IntroSwiper: {
    screen: IntroSwiperContainer,
    navigationOptions: {
      header: null
    }
  },
  NewReminder: {
    screen: NewReminderContainer,
    navigationOptions: ({ navigation }) => ({
      title: 'New Reminder',
      headerBackTitle: null,
      headerTitleStyle: {fontFamily: 'ralewayBold', fontSize: 18},
      headerLeft: <NewReminderHeaderLeftPresenter navigation={navigation} />
    })
  },
  NewReminderSubject: {
    screen: NewReminderSubjectPresenter,
    navigationOptions: {
      title: 'Subject',
      headerBackTitle: null,
      headerTitleStyle: {fontFamily: 'ralewayBold', fontSize: 18},
    }
  },
  NewReminderName: {
    screen: NewReminderNamePresenter,
    navigationOptions: {
      title: 'Name',
      headerBackTitle: null,
      headerTitleStyle: {fontFamily: 'ralewayBold', fontSize: 18},
    }
  },
  NewReminderRepeat: {
    screen: NewReminderRepeatContainer,
    navigationOptions: {
      title: 'Repeat',
      headerBackTitle: null,
      headerTitleStyle: {fontFamily: 'ralewayBold', fontSize: 18},
    }
  }
}, {
  mode: 'modal',
  headerMode: 'screen'
})

const IntroNav = props => (
  <IntroStackNav {...props} />
)

export default IntroNav
