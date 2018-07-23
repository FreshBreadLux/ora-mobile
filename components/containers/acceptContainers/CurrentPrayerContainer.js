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
      buttonOpacity: new Animated.Value(0),
      prayerTextOpacity: new Animated.Value(0),
      backgroundCoverOpacity: new Animated.Value(1),
    }
    this.fadeInButtons = this.fadeInButtons.bind(this)
    this.loadNextPrayer = this.loadNextPrayer.bind(this)
    this.fadeInPrayerText = this.fadeInPrayerText.bind(this)
    this.fadeInBackground = this.fadeInBackground.bind(this)
    this.handleFirstPrayer = this.handleFirstPrayer.bind(this)
  }

  componentDidMount() {
    console.log('CurrentPrayerContainer is mounting')
    this.handleFirstPrayer()
  }

  loadNextPrayer(cancelTimeoutID) {
    const { dispatchFetchNextPrayer, userId, views } = this.props
    return dispatchFetchNextPrayer(userId, views, cancelTimeoutID)
  }

  async handleFirstPrayer() {
    const networkTimeoutID = setTimeout(this.showNetworkErrorMessage, 8000)
    this.loadNextPrayer(networkTimeoutID)
    this.props.dispatchSetPrayerActivityIndicator()
    await this.fadeInBackground()
    await this.fadeInButtons()
    this.fadeInPrayerText()
  }

  showNetworkErrorMessage() {
    this.setState({ networkError: true })
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

  render() {
    return(
      <View style={ss.invisiContainer}>
        <BackgroundImageContainer componentName="Accept" />
        <Animated.View style={[ss.whiteContainer, {opacity: this.state.backgroundCoverOpacity}]}>
          <CurrentPrayerPresenter
            networkError={this.state.networkError}
            finishPraying={this.props.finishPraying}
            buttonOpacity={this.state.buttonOpacity}
            prayerTextOpacity={this.state.prayerTextOpacity} />
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
  dispatchFetchNextPrayer: (userId, views, cancelTimeoutID) => dispatch(fetchNextPrayer(userId, views, cancelTimeoutID)),
  dispatchSetPrayerActivityIndicator: () => dispatch(setPrayerActivityIndicator())
})

export default connect(mapState, mapDispatch)(CurrentPrayerContainer)
