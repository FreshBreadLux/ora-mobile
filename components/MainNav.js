import React from 'react'
import { Platform } from 'react-native'
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation'
import { AcceptContainer, PrayerContainer, FollowContainer, ProfileContainer, ShareOraContainer, RegisterOraMissionaryContainer, RewardContainer, HomeContainer, GroupListContainer, PrivateGroupContainer, SubmitSubjectContainer, SubmitBodyContainer, EditProfileContainer, NewReminderContainer, NewReminderRepeatContainer } from './containers'
import { FAQPresenter, TestimonyPresenter, PrayerHeaderPresenter, TraditionalPrayersPresenter, ReflectionFullTextPresenter, RewardFullTextPresenter, SubmitSubjectHeaderRightPresenter, SubmitSubjectHeaderLeftPresenter, SubmitBodyHeaderRightPresenter, ProfileSettingsPresenter, ProfileHeaderRightPresenter, ProfileHeaderTitlePresenter, EditProfileHeaderLeftPresenter, EditProfileHeaderRightPresenter, ThemesPresenter, ReminderListPresenter, ReminderHeaderRightPresenter, NewReminderHeaderLeftPresenter, NewReminderSubjectPresenter, NewReminderNamePresenter } from './presenters'
import { Constants } from 'expo'
import { Ionicons } from '@expo/vector-icons'

const GroupStackNav = StackNavigator({
  GroupList: {
    screen: GroupListContainer,
    navigationOptions: {
      title: 'Groups',
      headerBackTitle: null,
      headerTitleStyle: {fontFamily: 'ralewayBold', fontSize: 18}
    }
  },
  PrivateGroup: {
    screen: PrivateGroupContainer,
    navigationOptions: {
      title: 'Private Group',
      headerBackTitle: null,
      headerTitleStyle: {fontFamily: 'ralewayBold', fontSize: 18}
    }
  }
})

/*
  The ProfileBase screen tries to pull the user's name off the navigation state params.
  The name is loaded into navigation state params using setParams in the componentDidUpdate
  lifecycle hook of ProfileContainer.js. The conditional logic prevents errors while we wait
  for the name to be set into the params.
*/
const ProfileStackNav = StackNavigator({
  ProfileBase: {
    screen: ProfileContainer,
    navigationOptions: ({ navigation }) => {
      return ({
        headerTitle: <ProfileHeaderTitlePresenter />,
        headerBackTitle: null,
        headerRight: <ProfileHeaderRightPresenter navigation={navigation} />
      })
    }
  }
})

const MainTabNav = TabNavigator({
  Groups: {
    screen: GroupStackNav,
    navigationOptions: {
      title: 'Prayers',
      headerBackTitle: null,
      tabBarIcon: ({ tintColor }) => (
        <Ionicons
          name="md-people"
          size={32}
          style={{ color: tintColor }} />
      ),
    },
  },
  Home: {
    screen: HomeContainer,
    navigationOptions: {
      title: 'Home',
      headerBackTitle: null,
      tabBarIcon: ({ tintColor }) => (
        <Ionicons
          name="md-globe"
          size={32}
          style={{ color: tintColor }} />
      ),
    },
  },
  Profile: {
    screen: ProfileStackNav,
    navigationOptions: {
      title: 'Profile',
      headerBackTitle: null,
      tabBarIcon: ({ tintColor }) => (
        <Ionicons
          name="md-person"
          size={32}
          style={{ color: tintColor }} />
      ),
    },
  },
}, {
  swipeEnabled: true,
  lazy: false,
  initialRouteName: 'Home',
  tabBarOptions: {
    showLabel: false,
    inactiveTintColor: '#000',
    style: {
      backgroundColor: '#fafafa',
    }
  },
  tabBarComponent: TabBarBottom,
  tabBarPosition: 'bottom',
})

const CardStackNav = StackNavigator({
  Root: {
    screen: MainTabNav,
    navigationOptions: {
      header: null,
    },
  },
  SubmitSubject: {
    screen: SubmitSubjectContainer,
    navigationOptions: ({ navigation }) => ({
      title: 'Subject',
      headerBackTitle: null,
      headerRight: <SubmitSubjectHeaderRightPresenter navigation={navigation} />,
      headerLeft: <SubmitSubjectHeaderLeftPresenter navigation={navigation} />
    })
  },
  SubmitBody: {
    screen: SubmitBodyContainer,
    navigationOptions: ({ navigation }) => ({
      title: 'Body',
      headerBackTitle: null,
      headerRight: <SubmitBodyHeaderRightPresenter navigation={navigation} />
    })
  },
  Prayer: {
    screen: PrayerContainer,
    navigationOptions: ({ navigation }) => {
      const headerTitleStyle = Platform.OS === 'ios'
        ? { fontFamily: 'raleway', fontSize: 24 }
        : { fontFamily: 'ralewayExtraBold', fontSize: 24 }
      const headerStyle = Platform.OS === 'ios'
        ? { backgroundColor: 'white', borderBottomWidth: 0 }
        : { backgroundColor: 'white', borderBottomWidth: 0, marginTop: Constants.statusBarHeight, elevation: 0 }
      return {
        title: '',
        headerRight: <PrayerHeaderPresenter prayer={navigation.state.params.prayer} />,
        headerTitleStyle,
        headerStyle,
      }
    }
  },
  Follow: {
    screen: FollowContainer,
    navigationOptions: () => {
      const headerTitleStyle = Platform.OS === 'ios'
        ? { fontFamily: 'raleway', fontSize: 24 }
        : { fontFamily: 'ralewayExtraBold', fontSize: 24 }
      const headerStyle = Platform.OS === 'ios'
        ? { backgroundColor: 'white', borderBottomWidth: 0 }
        : { backgroundColor: 'white', borderBottomWidth: 0, marginTop: Constants.statusBarHeight, elevation: 0 }
      return {
        title: '',
        headerTitleStyle,
        headerStyle,
      }
    },
  },
  ProfileSettings: {
    screen: ProfileSettingsPresenter,
    navigationOptions: {
      title: 'Settings',
      headerBackTitle: null,
      headerTitleStyle: {fontFamily: 'ralewayBold', fontSize: 18}
    }
  },
  EditProfile: {
    screen: EditProfileContainer,
    navigationOptions: ({ navigation }) => ({
      title: 'Edit Profile',
      headerBackTitle: null,
      headerTitleStyle: {fontFamily: 'ralewayBold', fontSize: 18},
      headerLeft: <EditProfileHeaderLeftPresenter navigation={navigation} />,
      headerRight: <EditProfileHeaderRightPresenter navigation={navigation} />
    })
  },
  Themes: {
    screen: ThemesPresenter,
    navigationOptions: {
      title: 'Themes',
      headerBackTitle: null,
      headerTitleStyle: {fontFamily: 'ralewayBold', fontSize: 18}
    }
  },
  ShareOra: {
    screen: ShareOraContainer,
    navigationOptions: () => {
      const headerTitleStyle = Platform.OS === 'ios'
        ? { fontFamily: 'raleway', fontSize: 24 }
        : { fontFamily: 'ralewayExtraBold', fontSize: 24 }
      const headerStyle = Platform.OS === 'ios'
        ? { backgroundColor: 'white', borderBottomWidth: 0 }
        : { backgroundColor: 'white', borderBottomWidth: 0, marginTop: Constants.statusBarHeight, elevation: 0 }
      return {
        title: 'SHARE ORA',
        headerBackTitle: null,
        headerTitleStyle,
        headerStyle,
      }
    },
  },
  RegisterOraMissionary: {
    screen: RegisterOraMissionaryContainer,
    navigationOptions: () => {
      const headerTitleStyle = Platform.OS === 'ios'
        ? { fontFamily: 'raleway', fontSize: 24 }
        : { fontFamily: 'ralewayExtraBold', fontSize: 24 }
      const headerStyle = Platform.OS === 'ios'
        ? { backgroundColor: 'white', borderBottomWidth: 0 }
        : { backgroundColor: 'white', borderBottomWidth: 0, marginTop: Constants.statusBarHeight, elevation: 0 }
      return {
        title: 'ORA MISSIONARY',
        headerTitleStyle,
        headerStyle,
      }
    },
  },
  Testimony: {
    screen: TestimonyPresenter,
    navigationOptions: {
      title: 'Testimony',
      headerBackTitle: null,
      headerTitleStyle: {fontFamily: 'ralewayBold', fontSize: 18}
    }
  },
  Reminders: {
    screen: ReminderListPresenter,
    navigationOptions: ({ navigation }) => ({
      title: 'Reminders',
      headerBackTitle: null,
      headerTitleStyle: {fontFamily: 'ralewayBold', fontSize: 18},
      headerRight: <ReminderHeaderRightPresenter navigation={navigation} />
    })
  },
  FAQ: {
    screen: FAQPresenter,
    navigationOptions: {
      title: 'FAQ',
      headerBackTitle: null,
      headerTitleStyle: {fontFamily: 'ralewayBold', fontSize: 18}
    }
  },
}, {
  headerMode: 'screen'
})

const ModalStackNav = StackNavigator({
  Modal: {
    screen: CardStackNav,
    navigationOptions: {
      header: null,
    },
  },
  AcceptContainer: {
    screen: AcceptContainer,
    navigationOptions: {
      header: null,
    },
  },
  RewardContainer: {
    screen: RewardContainer,
    navigationOptions: {
      header: null,
    },
  },
  TraditionalPrayers: {
    screen: TraditionalPrayersPresenter,
    navigationOptions: () => {
      const headerTitleStyle = Platform.OS === 'ios'
        ? { fontFamily: 'raleway', fontSize: 24 }
        : { fontFamily: 'ralewayExtraBold', fontSize: 24 }
      const headerStyle = Platform.OS === 'ios'
        ? { backgroundColor: 'white', borderBottomWidth: 0 }
        : { backgroundColor: 'white', borderBottomWidth: 0, marginTop: Constants.statusBarHeight, elevation: 0 }
      return {
        title: 'PRAYERS',
        headerTitleStyle,
        headerStyle,
      }
    },
  },
  ReflectionFullText: {
    screen: ReflectionFullTextPresenter,
    navigationOptions: () => {
      const headerTitleStyle = Platform.OS === 'ios'
        ? { fontFamily: 'raleway', fontSize: 24 }
        : { fontFamily: 'ralewayExtraBold', fontSize: 24 }
      const headerStyle = Platform.OS === 'ios'
        ? { backgroundColor: 'white', borderBottomWidth: 0 }
        : { backgroundColor: 'white', borderBottomWidth: 0, marginTop: Constants.statusBarHeight, elevation: 0 }
      return {
        title: 'REFLECTION',
        headerTitleStyle,
        headerStyle,
      }
    },
  },
  RewardFullText: {
    screen: RewardFullTextPresenter,
    navigationOptions: () => {
      const headerTitleStyle = Platform.OS === 'ios'
        ? { fontFamily: 'raleway', fontSize: 24 }
        : { fontFamily: 'ralewayExtraBold', fontSize: 24 }
      const headerStyle = Platform.OS === 'ios'
        ? { backgroundColor: 'white', borderBottomWidth: 0 }
        : { backgroundColor: 'white', borderBottomWidth: 0, marginTop: Constants.statusBarHeight, elevation: 0 }
      return {
        title: 'REWARD',
        headerTitleStyle,
        headerStyle,
      }
    },
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

// IMPORTANT: ALLOWS MODALSTACKNAV TO MANAGE THE STATE
ModalStackNav.router = CardStackNav.router

const MainNav = () => (
  <ModalStackNav />
)

export default MainNav
