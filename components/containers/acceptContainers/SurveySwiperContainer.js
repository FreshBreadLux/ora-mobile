import React from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import Swiper from 'react-native-swiper'
import { SurveyPageOneContainer, SurveyPageTwoContainer, SurveyPageThreeContainer, SurveyPageFourContainer, SurveyPageFiveContainer } from '../../containers'
import ss from '../../StyleSheet'
import axios from 'axios'
import ROOT_URL from '../../../config'

class SurveySwiperContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      willingToTakeSurvey: null,
      mobileContentBeneficial: null,
      topicSelection: [],
      willingToPay: null,
    }
    this.swiper = React.createRef()

    this.scroll = this.scroll.bind(this)
    this.setStateField = this.setStateField.bind(this)
    this.sendSurveyResults = this.sendSurveyResults.bind(this)
    this.toggleTopicSelection = this.toggleTopicSelection.bind(this)
  }

  scroll(n) {
    const swiper = this.swiper.current
    if (swiper) swiper.scrollBy(n)
  }

  setStateField(name, value) {
    this.setState({ [name]: value })
  }

  toggleTopicSelection(value) {
    if (this.state.topicSelection.indexOf(value) === -1) {
      this.setState({ topicSelection: [...this.state.topicSelection, value] })
    } else {
      this.setState({ topicSelection: this.state.topicSelection.filter(topic => topic !== value) })
    }
  }

  sendSurveyResults() {
    const { userId, email } = this.props
    return axios.post(`${ROOT_URL}/api/surveys`, { userId, email, surveyResults: this.state })
  }

  render() {
    return (
      <View style={ss.invisiContainer}>
        <Swiper ref={this.swiper}>
          <SurveyPageOneContainer scroll={this.scroll} setStateField={this.setStateField} />
          <SurveyPageTwoContainer scroll={this.scroll} setStateField={this.setStateField} />
          <SurveyPageThreeContainer
            scroll={this.scroll}
            topicSelection={this.state.topicSelection}
            toggleTopicSelection={this.toggleTopicSelection} />
          <SurveyPageFourContainer scroll={this.scroll} setStateField={this.setStateField} />
          <SurveyPageFiveContainer
            navigation={this.props.navigation}
            sendSurveyResults={this.sendSurveyResults} />
        </Swiper>
      </View>
    )
  }
}

const mapState = state => ({
  userId: state.userInfo.id,
  email: state.userInfo.email
})

export default connect(mapState)(SurveySwiperContainer)
