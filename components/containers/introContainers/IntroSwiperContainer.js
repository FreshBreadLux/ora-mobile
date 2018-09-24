import React from 'react'
import { View } from 'react-native'
import Swiper from 'react-native-swiper'
import { WelcomeContainer, SignupFormContainer, IntroReminderPromptContainer, EnableNotificationsContainer, NewReminderContainer } from '../../containers'

export default class IntroSwiperContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: null,
      lastName: null,
      userId: null
    }
    this.swiper = React.createRef()

    this.setFirstName = this.setFirstName.bind(this)
    this.setLastName = this.setLastName.bind(this)
    this.setUserId = this.setUserId.bind(this)
    this.scroll = this.scroll.bind(this)
  }

  setFirstName(firstName) {
    this.setState({ firstName })
  }

  setLastName(lastName) {
    this.setState({ lastName })
  }

  setUserId(userId) {
    this.setState({ userId })
  }

  scroll(numberOfPages) {
    const swiper = this.swiper.current
    if (swiper) swiper.scrollBy(numberOfPages)
  }

  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#fafafa'}}>
        <Swiper
          loop={false}
          ref={this.swiper}
          scrollEnabled={false}
          showsPagination={false}
          keyboardShouldPersistTaps="handled">
          <WelcomeContainer scroll={this.scroll} />
          <SignupFormContainer
            scroll={this.scroll}
            setUserId={this.setUserId}
            setLastName={this.setLastName}
            setFirstName={this.setFirstName}  />
          <EnableNotificationsContainer
            scroll={this.scroll}
            userId={this.state.userId}
            lastName={this.state.lastName}
            firstName={this.state.firstName} />
          <IntroReminderPromptContainer
            navigation={this.props.navigation}
            verifyStorageKey={this.props.screenProps.verifyStorageKey} />
        </Swiper>
      </View>
    )
  }
}
