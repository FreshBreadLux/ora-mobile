import React from 'react'
import { Keyboard, SafeAreaView } from 'react-native'
import { connect } from 'react-redux'
import { fetchUserPrayers } from '../../../store'
import { PrayerPresenter } from '../../presenters'
import EditPrayerContainer from './EditPrayerContainer'
import axios from 'axios'
import ss from '../../StyleSheet'
import ROOT_URL from '../../../config'

class PrayerContainer extends React.Component {
  constructor(props) {
    super(props)
    const prayer = this.props.navigation.state.params.prayer
    this.state = {
      editMode: false,
      addingUpdate: false,
      subject: prayer.subject,
      body: prayer.body,
      updateBody: '',
    }
    this.setBody = this.setBody.bind(this)
    this.setUpdateBody = this.setUpdateBody.bind(this)
    this.editPrayer = this.editPrayer.bind(this)
    this.togglePrayer = this.togglePrayer.bind(this)
    this.deletePrayer = this.deletePrayer.bind(this)
    this.toggleEdit = this.toggleEdit.bind(this)
    this.addNewUpdate = this.addNewUpdate.bind(this)
    this.toggleAddUpdate = this.toggleAddUpdate.bind(this)
  }

  setBody(body) {
    this.setState({ body })
  }

  setUpdateBody(updateBody) {
    this.setState({ updateBody })
  }

  toggleEdit() {
    this.setState({editMode: !this.state.editMode})
  }

  toggleAddUpdate() {
    this.setState({
      editMode: !this.state.editMode,
      addingUpdate: !this.state.addingUpdate
    })
  }

  editPrayer() {
    Keyboard.dismiss()
    axios.put(`${ROOT_URL}/api/prayers/edit/${this.props.navigation.state.params.prayer.id}`, {
      subject: this.state.subject,
      body: this.state.body,
    })
    .then(() => {
      this.setState({
        editMode: false
      })
      this.props.refreshUserPrayers(this.props.userId)
      this.props.navigation.goBack()
    })
    .catch(console.error)
  }

  addNewUpdate() {
    Keyboard.dismiss()
    axios.post(`${ROOT_URL}/api/update/`, {
      updateBody: this.state.updateBody,
      prayerId: this.props.navigation.state.params.prayer.id
    })
    .then(() => {
      this.setState({
        editMode: false
      })
      this.props.refreshUserPrayers(this.props.userId)
      this.props.navigation.goBack()
    })
    .catch(console.error)
  }

  togglePrayer(bool) {
    axios.put(`${ROOT_URL}/api/prayers/close/${this.props.navigation.state.params.prayer.id}`, {
      closed: bool
    })
    .then(() => {
      this.props.refreshUserPrayers(this.props.userId)
      this.props.navigation.goBack()
    })
    .catch(console.error)
  }

  deletePrayer() {
    axios.delete(`${ROOT_URL}/api/prayers/${this.props.navigation.state.params.prayer.id}`, {
      headers: {token: this.props.jwToken
    }})
    .then(() => {
      this.props.refreshUserPrayers(this.props.userId)
      this.props.navigation.goBack()
    })
    .catch(console.error)
  }

  render() {
    const prayer = this.props.navigation.state.params.prayer
    return (
      <SafeAreaView style={ss.whiteContainer}>
        {this.state.editMode
          ? <EditPrayerContainer
              setBody={this.setBody}
              setUpdateBody={this.setUpdateBody}
              body={this.state.body}
              updateBody={this.state.updateBody}
              addingUpdate={this.state.addingUpdate}
              editPrayer={this.editPrayer}
              toggleEdit={this.toggleEdit}
              toggleAddUpdate={this.toggleAddUpdate} />
          : <PrayerPresenter
              visibleModal={this.state.visibleModal}
              toggleEdit={this.toggleEdit}
              toggleAddUpdate={this.toggleAddUpdate}
              togglePrayer={this.togglePrayer}
              deletePrayer={this.deletePrayer}
              prayer={prayer} />
        }
      </SafeAreaView>
    )
  }
}

const mapState = state => ({
  userId: state.auth.userId,
  jwToken: state.auth.jwToken
})

const mapDispatch = dispatch => ({
  refreshUserPrayers(userId) {
    return dispatch(fetchUserPrayers(userId))
  }
})

export default connect(mapState, mapDispatch)(PrayerContainer)
