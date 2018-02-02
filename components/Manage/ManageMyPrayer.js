import React from 'react'
import { Keyboard, SafeAreaView } from 'react-native'
import { connect } from 'react-redux'
import { fetchUserPrayers } from '../../store'
import SinglePrayer from './SinglePrayer'
import EditPrayer from './EditPrayer'
import axios from 'axios'
import ss from '../StyleSheet'
import ROOT_URL from '../../config'

class ManageMyPrayer extends React.Component {
  constructor(props) {
    super(props)
    const prayer = this.props.navigation.state.params.prayer
    this.state = {
      editMode: false,
      subject: prayer.subject,
      body: prayer.body,
      visibleModal: null,
    }
    this.setModal = this.setModal.bind(this)
    this.setBody = this.setBody.bind(this)
    this.updatePrayer = this.updatePrayer.bind(this)
    this.togglePrayer = this.togglePrayer.bind(this)
    this.deletePrayer = this.deletePrayer.bind(this)
    this.toggleEdit = this.toggleEdit.bind(this)
  }

  setModal(name) {
    this.setState({ visibleModal: name })
  }

  setBody(body) {
    this.setState({ body })
  }

  toggleEdit() {
    this.setState({editMode: !this.state.editMode})
  }

  updatePrayer() {
    Keyboard.dismiss()
    axios.put(`${ROOT_URL}/api/prayers/update/${this.props.navigation.state.params.prayer.id}`, {
      subject: this.state.subject,
      body: this.state.body,
    })
    .then(() => {
      this.setState({
        editMode: false
      })
      fetchUserPrayers(this.props.userId)
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
    axios.delete(`${ROOT_URL}/api/prayers/${this.props.navigation.state.params.prayer.id}`)
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
          ? <EditPrayer
              setBody={this.setBody}
              body={this.state.body}
              updatePrayer={this.updatePrayer}
              toggleEdit={this.toggleEdit} />
          : <SinglePrayer
              visibleModal={this.state.visibleModal}
              setModal={this.setModal}
              toggleEdit={this.toggleEdit}
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
})

const mapDispatch = dispatch => ({
  refreshUserPrayers(userId) {
    dispatch(fetchUserPrayers(userId))
  }
})

export default connect(mapState, mapDispatch)(ManageMyPrayer)
