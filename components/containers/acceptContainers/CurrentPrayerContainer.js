import React from 'react'
import { View, Animated } from 'react-native'
import { connect } from 'react-redux'
import { fetchNextPrayer } from '../../../store'
import { CurrentPrayerPresenter, BackgroundImageContainer } from '../../presenters'
import { ampEvents, ampLogEvent } from '../../analytics'
import ss from '../../StyleSheet'

function animate(...options) {
  return new Promise(res => {
    Animated.timing(...options).start(res)
  })
}

class CurrentPrayerContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      networkError: false,
      requestEnRoute: false,
      buttonOpacity: new Animated.Value(0),
      prayerTextOpacity: new Animated.Value(0),
      backgroundCoverOpacity: new Animated.Value(1),
      activityIndicatorOpacity: new Animated.Value(0),
      networkErrorMessageOpacity: new Animated.Value(0)
    }
    this.fadeInButtons = this.fadeInButtons.bind(this)
    this.loadNextPrayer = this.loadNextPrayer.bind(this)
    this.fadeInPrayerText = this.fadeInPrayerText.bind(this)
    this.fadeInBackground = this.fadeInBackground.bind(this)
    this.handleNextPrayer = this.handleNextPrayer.bind(this)
    this.fadeOutPrayerText = this.fadeOutPrayerText.bind(this)
    this.handleFirstPrayer = this.handleFirstPrayer.bind(this)
    this.handleNetworkErrorMessage = this.handleNetworkErrorMessage.bind(this)
    this.fadeInNetworkErrorMessage = this.fadeInNetworkErrorMessage.bind(this)
    this.fadeOutNetworkErrorMessage = this.fadeOutNetworkErrorMessage.bind(this)
    this.handleSuccessfulPrayerLoad = this.handleSuccessfulPrayerLoad.bind(this)
    this.fadeInPrayerActivityIndicator = this.fadeInPrayerActivityIndicator.bind(this)
    this.fadeOutPrayerActivityIndicator = this.fadeOutPrayerActivityIndicator.bind(this)
  }

  componentDidMount() {
    this.handleFirstPrayer()
  }

  loadNextPrayer(cancelTimeoutID, successHandler) {
    const { dispatchFetchNextPrayer, userId, views } = this.props
    this.setState({ requestEnRoute: true })
    ampLogEvent(ampEvents.LOAD_NEXT_PRAYER)
    return dispatchFetchNextPrayer(userId, views, cancelTimeoutID, successHandler)
  }

  async handleFirstPrayer() {
    await this.fadeInBackground()
    const networkTimeoutID = setTimeout(this.handleNetworkErrorMessage, 10000)
    this.loadNextPrayer(networkTimeoutID, this.handleSuccessfulPrayerLoad)
    this.fadeInButtons()
    if (this.state.requestEnRoute) {
      this.fadeInPrayerActivityIndicator()
    }
  }

  async handleNextPrayer() {
    if (this.state.networkError) {
      await this.fadeOutNetworkErrorMessage()
      this.setState({ networkError: false })
    }
    await this.fadeOutPrayerText()
    const networkTimeoutID = setTimeout(this.handleNetworkErrorMessage, 10000)
    this.loadNextPrayer(networkTimeoutID, this.handleSuccessfulPrayerLoad)
    if (this.state.requestEnRoute) {
      this.fadeInPrayerActivityIndicator()
    }
  }

  async handleNetworkErrorMessage() {
    await this.fadeOutPrayerActivityIndicator()
    this.setState({ networkError: true })
    this.fadeInNetworkErrorMessage()
  }

  async handleSuccessfulPrayerLoad() {
    await this.fadeOutPrayerActivityIndicator()
    this.setState({ requestEnRoute: false })
    this.fadeInPrayerText()
  }

  fadeInBackground() {
    return animate(this.state.backgroundCoverOpacity, { toValue: 0.8, duration: 1000 })
  }
  fadeInButtons() {
    return animate(this.state.buttonOpacity, { toValue: 1, duration: 1000 })
  }
  fadeInPrayerText() {
    return animate(this.state.prayerTextOpacity, { toValue: 1, duration: 1000 })
  }
  fadeOutPrayerText() {
    return animate(this.state.prayerTextOpacity, { toValue: 0, duration: 1000 })
  }
  fadeInPrayerActivityIndicator() {
    return animate(this.state.activityIndicatorOpacity, { toValue: 1, duration: 1000 })
  }
  fadeOutPrayerActivityIndicator() {
    return animate(this.state.activityIndicatorOpacity, { toValue: 0, duration: 300 })
  }
  fadeInNetworkErrorMessage() {
    return animate(this.state.networkErrorMessageOpacity, { toValue: 1, duration: 300 })
  }
  fadeOutNetworkErrorMessage() {
    return animate(this.state.networkErrorMessageOpacity, { toValue: 0, duration: 300 })
  }

  render() {
    return(
      <View style={ss.invisiContainer}>
        <BackgroundImageContainer componentName="Accept" />
        <Animated.View style={[ss.backgroundImageFrame, ss.whiteContainer, {opacity: this.state.backgroundCoverOpacity}]} />
        <CurrentPrayerPresenter
          navigation={this.props.navigation}
          flagPrayer={this.props.flagPrayer}
          networkError={this.state.networkError}
          finishPraying={this.props.finishPraying}
          buttonOpacity={this.state.buttonOpacity}
          handleNextPrayer={this.handleNextPrayer}
          requestEnRoute={this.state.requestEnRoute}
          prayerTextOpacity={this.state.prayerTextOpacity}
          toggleFollowPrayer={this.props.toggleFollowPrayer}
          activityIndicatorOpacity={this.state.activityIndicatorOpacity}
          networkErrorMessageOpacity={this.state.networkErrorMessageOpacity} />
      </View>
    )
  }
}

const mapState = state => ({
  views: state.views,
  userId: state.auth.userId
})

const mapDispatch = dispatch => ({
  dispatchFetchNextPrayer: (userId, views, cancelTimeoutID, successHandler) => dispatch(fetchNextPrayer(userId, views, cancelTimeoutID, successHandler))
})

export default connect(mapState, mapDispatch)(CurrentPrayerContainer)
