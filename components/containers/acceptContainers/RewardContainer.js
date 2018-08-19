import React from 'react'
import { connect } from 'react-redux'
import { RewardPresenter } from '../../presenters'
import { fetchAndCacheSavedRewards, removeVisibleModal } from '../../../store'
import { ampEvents, ampLogEvent } from '../../analytics'
import axios from 'axios'
import ROOT_URL from '../../../config'

class RewardContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      saveFailed: false,
      alreadySaved: false,
      processingSave: false,
      timeoutId: null,
    }
    this.saveReward = this.saveReward.bind(this)
    this.checkIfRewardIsSaved = this.checkIfRewardIsSaved.bind(this)
  }

  componentDidMount() {
    // This is a check for the user 'saving' action, not a check for caching
    this.checkIfRewardIsSaved()
    ampLogEvent(ampEvents.OPEN_REWARD)
  }

  componentWillUnmount() {
    clearTimeout(this.state.timeoutId)
  }

  checkIfRewardIsSaved() {
    const { savedRewards, dailyReward } = this.props
    const alreadySaved = savedRewards
    ? savedRewards.find(reward => reward.id === dailyReward.id)
    : false
    this.setState({ alreadySaved })
  }

  saveReward() {
    const { userId, refreshSavedRewards, dailyReward, hideModal } = this.props
    if (!this.state.alreadySaved) {
      this.setState({ processingSave: true })
      axios.post(`${ROOT_URL}/api/savedRewards`, { userId, dailyReward })
      .then(() => {
        this.setState({ processingSave: false, alreadySaved: true })
        refreshSavedRewards(userId)
        hideModal()
      })
      .catch(error => {
        console.warn(error)
        const timeoutId = setTimeout(() => this.setState({ saveFailed: false }), 10000)
        this.setState({ saveFailed: true, timeoutId })
      })
    }
  }

  render() {
    return (
      <RewardPresenter
        saveReward={this.saveReward}
        navigation={this.props.navigation}
        saveFailed={this.state.saveFailed}
        alreadySaved={this.state.alreadySaved}
        processingSave={this.state.processingSave} />
    )
  }
}

const mapState = state => ({
  userId: state.auth.userId,
  savedRewards: state.savedRewards,
  dailyReward: state.acceptPrayer.dailyReward,
})

const mapDispatch = dispatch => ({
  refreshSavedRewards: userId => dispatch(fetchAndCacheSavedRewards(userId)),
  hideModal: () => dispatch(removeVisibleModal()),
})

export default connect(mapState, mapDispatch)(RewardContainer)
