import React from 'react'
import axios from 'axios'
import { Keyboard } from 'react-native'
import { connect } from 'react-redux'
import { SubmitPresenter } from '../../presenters'
import { fetchUserPrayers } from '../../../store'
import ROOT_URL from '../../../config'

class SubmitContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      subject: null,
      body: null,
      prayerSent: false,
      bodyHeight: null,
      errorMessage: null,
    }
    this.submitPrayer = this.submitPrayer.bind(this)
    this.setSubject = this.setSubject.bind(this)
    this.setBody = this.setBody.bind(this)
    this.referenceBody = this.referenceBody.bind(this)
    this.focusBody = this.focusBody.bind(this)
    this.handleContentSizeChange = this.handleContentSizeChange.bind(this)
  }

  submitPrayer() {
    if (this.state.subject && this.state.body) {
      Keyboard.dismiss()
      axios.post(`${ROOT_URL}/api/prayers`, {
        userId: this.props.userId,
        subject: this.state.subject,
        body: this.state.body
      }, {
        headers: { token: this.props.jwToken }
      })
      .then(() => {
        this.setState({
          subject: null,
          body: null,
          prayerSent: true,
          errorMessage: null,
        })
        this.props.refreshUserPrayers(this.props.userId)
        setTimeout(() => this.setState({prayerSent: false}), 10000)
      })
      .catch(console.error)
    } else {
      this.setState({ errorMessage: 'Your prayer needs both a subject and a body'})
    }
  }

  setSubject(subject) {
    this.setState({subject})
  }

  setBody(body) {
    this.setState({body})
  }

  referenceBody(ref) {
    this.body = ref
  }

  focusBody() {
    this.body.focus()
  }

  handleContentSizeChange(event) {
    this.setState({bodyHeight: event.nativeEvent.contentSize.height})
  }

  render() {
    return (
      <SubmitPresenter
        subject={this.state.subject}
        body={this.state.body}
        prayerSent={this.state.prayerSent}
        bodyHeight={this.state.bodyHeight}
        errorMessage={this.state.errorMessage}
        submitPrayer={this.submitPrayer}
        setSubject={this.setSubject}
        setBody={this.setBody}
        referenceBody={this.referenceBody}
        focusBody={this.focusBody}
        handleContentSizeChange={this.handleContentSizeChange} />
    )
  }
}

const mapState = state => ({
  userId: state.auth.userId,
  jwToken: state.auth.jwToken
})

const mapDispatch = dispatch => ({
  refreshUserPrayers: userId => dispatch(fetchUserPrayers(userId))
})

export default connect(mapState, mapDispatch)(SubmitContainer)
