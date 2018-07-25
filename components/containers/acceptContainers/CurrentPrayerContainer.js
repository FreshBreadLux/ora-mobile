import React from 'react'
import { View, Animated } from 'react-native'
import { connect } from 'react-redux'
import { fetchNextPrayer, setPrayerActivityIndicator } from '../../../store'
import { CurrentPrayerPresenter, BackgroundImageContainer } from '../../presenters'
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
    this.handleFirstPrayer = this.handleFirstPrayer.bind(this)
    this.handleNetworkErrorMessage = this.handleNetworkErrorMessage.bind(this)
    this.fadeInNetworkErrorMessage = this.fadeInNetworkErrorMessage.bind(this)
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
    return dispatchFetchNextPrayer(userId, views, cancelTimeoutID, successHandler)
  }

  async handleFirstPrayer() {
    await this.fadeInBackground()
    const networkTimeoutID = setTimeout(this.handleNetworkErrorMessage, 8000)
    this.loadNextPrayer(networkTimeoutID, this.handleSuccessfulPrayerLoad)
    this.fadeInButtons()
    if (this.state.requestEnRoute) {
      this.fadeInPrayerActivityIndicator()
    }
  }

  handleNetworkErrorMessage() {
    this.fadeOutPrayerActivityIndicator()
    this.setState({ networkError: true })
    this.fadeInNetworkErrorMessage()
  }

  handleSuccessfulPrayerLoad() {
    this.fadeOutPrayerActivityIndicator()
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
  fadeInPrayerActivityIndicator() {
    return animate(this.state.activityIndicatorOpacity, { toValue: 1, duration: 300 })
  }
  fadeInNetworkErrorMessage() {
    return animate(this.state.networkErrorMessageOpacity, { toValue: 1, duration: 300 })
  }
  fadeOutPrayerActivityIndicator() {
    return animate(this.state.activityIndicatorOpacity, { toValue: 0, duration: 300 })
  }

  render() {
    return(
      <View style={ss.invisiContainer}>
        <BackgroundImageContainer componentName="Accept" />
        <Animated.View style={[ss.whiteContainer, {opacity: this.state.backgroundCoverOpacity}]}>
          <CurrentPrayerPresenter
            navigation={this.props.navigation}
            networkError={this.state.networkError}
            finishPraying={this.props.finishPraying}
            buttonOpacity={this.state.buttonOpacity}
            requestEnRoute={this.state.requestEnRoute}
            prayerTextOpacity={this.state.prayerTextOpacity}
            activityIndicatorOpacity={this.state.activityIndicatorOpacity}
            networkErrorMessageOpacity={this.state.networkErrorMessageOpacity} />
        </Animated.View>
      </View>
    )
  }
}

const mapState = state => ({
  views: state.views,
  userId: state.auth.userId
})

const mapDispatch = dispatch => ({
  dispatchFetchNextPrayer: (userId, views, cancelTimeoutID, successHandler) => dispatch(fetchNextPrayer(userId, views, cancelTimeoutID, successHandler)),
  dispatchSetPrayerActivityIndicator: () => dispatch(setPrayerActivityIndicator())
})

export default connect(mapState, mapDispatch)(CurrentPrayerContainer)
