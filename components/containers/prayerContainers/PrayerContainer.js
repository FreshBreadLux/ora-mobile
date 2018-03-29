import React from 'react'
import { Keyboard, SafeAreaView } from 'react-native'
import { connect } from 'react-redux'
import { fetchUserPrayers, removeEditMode } from '../../../store'
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
      subject: prayer.subject,
      body: prayer.body,
      updateBody: '',
      updateToDelete: null
    }
    this.setBody = this.setBody.bind(this)
    this.setUpdateBody = this.setUpdateBody.bind(this)
    this.setUpdateToDelete = this.setUpdateToDelete.bind(this)
    this.editPrayer = this.editPrayer.bind(this)
    this.togglePrayer = this.togglePrayer.bind(this)
    this.deletePrayer = this.deletePrayer.bind(this)
    this.addNewUpdate = this.addNewUpdate.bind(this)
    this.deleteUpdate = this.deleteUpdate.bind(this)
  }

  setBody(body) {
    this.setState({ body })
  }

  setUpdateBody(updateBody) {
    this.setState({ updateBody })
  }

  setUpdateToDelete(updateToDelete) {
    this.setState({ updateToDelete })
  }

  editPrayer() {
    Keyboard.dismiss()
    axios.put(`${ROOT_URL}/api/prayers/edit/${this.props.navigation.state.params.prayer.id}`, {
      subject: this.state.subject,
      body: this.state.body,
    })
    .then(() => {
      this.props.dispatchRemoveEditMode()
      this.props.refreshUserPrayers(this.props.userId)
      this.props.navigation.goBack()
    })
    .catch(console.error)
  }

  addNewUpdate() {
    Keyboard.dismiss()
    axios.post(`${ROOT_URL}/api/updates`, {
      body: this.state.updateBody,
      prayerId: this.props.navigation.state.params.prayer.id
    })
    .then(() => {
      this.props.dispatchRemoveEditMode()
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
      headers: {token: this.props.jwToken}
    })
    .then(() => {
      this.props.refreshUserPrayers(this.props.userId)
      this.props.navigation.goBack()
    })
    .catch(console.error)
  }

  deleteUpdate() {
    axios.delete(`${ROOT_URL}/api/updates/${this.state.updateToDelete}`)
    .then(() => {
      this.props.refreshUserPrayers(this.props.userId)
      this.setState({ updateToDelete: null })
      this.props.navigation.goBack()
    })
  }

  render() {
    const prayer = this.props.navigation.state.params.prayer
    return (
      <SafeAreaView style={ss.whiteContainer}>
        {this.props.editMode.makingEdit
          ? <EditPrayerContainer
              setBody={this.setBody}
              setUpdateBody={this.setUpdateBody}
              body={this.state.body}
              updateBody={this.state.updateBody}
              editPrayer={this.editPrayer}
              addNewUpdate={this.addNewUpdate} />
          : <PrayerPresenter
              prayer={prayer}
              visibleModal={this.state.visibleModal}
              togglePrayer={this.togglePrayer}
              deletePrayer={this.deletePrayer}
              deleteUpdate={this.deleteUpdate}
              setUpdateToDelete={this.setUpdateToDelete} />
        }
      </SafeAreaView>
    )
  }
}

const mapState = state => ({
  userId: state.auth.userId,
  jwToken: state.auth.jwToken,
  editMode: state.editMode
})

const mapDispatch = dispatch => ({
  refreshUserPrayers: userId => dispatch(fetchUserPrayers(userId)),
  dispatchRemoveEditMode: () => dispatch(removeEditMode())
})

export default connect(mapState, mapDispatch)(PrayerContainer)
