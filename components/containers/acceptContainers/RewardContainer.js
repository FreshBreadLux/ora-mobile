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
      reward: null,
      failed: false,
      alreadySaved: false,
      processing: false,
      timeoutId: null,
    }
    this.saveReward = this.saveReward.bind(this)
    this.deleteReward = this.deleteReward.bind(this)
    this.checkIfRewardIsSaved = this.checkIfRewardIsSaved.bind(this)
    this.checkNavigationParams = this.checkNavigationParams.bind(this)
  }

  componentDidMount() {
    // Check to see if a reward exists on navigation params; if it does, this means that
    // RewardContainer was mounted from the SavedRewardsList and we'll be showing a saved reward
    this.checkNavigationParams()
    // This is a check to see if the user has already saved the daily reward, not a check
    // to see if the image has been cached
    this.checkIfRewardIsSaved()
    ampLogEvent(ampEvents.OPEN_REWARD)
  }

  componentWillUnmount() {
    clearTimeout(this.state.timeoutId)
  }

  checkNavigationParams() {
    const reward = this.props.navigation.getParam('reward')
    if (reward) this.setState({ reward })
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
      this.setState({ processing: true })
      axios.post(`${ROOT_URL}/api/savedRewards`, { userId, dailyReward })
      .then(() => {
        this.setState({ processing: false, alreadySaved: true })
        refreshSavedRewards(userId)
        hideModal()
      })
      .catch(error => {
        console.warn(error)
        const timeoutId = setTimeout(() => this.setState({ failed: false }), 10000)
        this.setState({ failed: true, timeoutId })
      })
    }
  }

  deleteReward(savedReward) {
    const { savedId, saverId } = savedReward
    const { userId, refreshSavedRewards, hideModal } = this.props
    if (this.state.alreadySaved) {
      this.setState({ processing: true })
      axios.delete(`${ROOT_URL}/api/savedRewards/savedId/${savedId}/saverId/${saverId}`)
      .then(() => {
        this.setState({ processing: false, alreadySaved: false })
        refreshSavedRewards(userId)
        this.props.navigation.goBack()
        hideModal()
      })
      .catch(error => {
        console.warn(error)
        const timeoutId = setTimeout(() => this.setState({ failed: false }), 10000)
        this.setState({ failed: true, timeoutId })
      })
    }
  }

  /*
    Inside the render method, we assign the reward variable and pass it to RewardPresenter.
    We check state for reward; if it exists, we pass that object along; if it doesn't exist,
    we pass along the dailyReward object in its place.
    this.state.reward will exist if we've passed a reward object to RewardContainer through
    the navigation params (we check the navigation params when RewardContainer mounts). This
    allows us to use RewardPresenter for both the dailyReward and the saved rewards.
  */
  render() {
    const reward = this.state.reward ? this.state.reward : this.props.dailyReward
    return (
      <RewardPresenter
        reward={reward}
        failed={this.state.failed}
        saveReward={this.saveReward}
        deleteReward={this.deleteReward}
        navigation={this.props.navigation}
        alreadySaved={this.state.alreadySaved}
        processing={this.state.processing} />
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
