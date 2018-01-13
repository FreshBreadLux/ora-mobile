import React from 'react'
import { View, ScrollView, Text, TouchableOpacity, TextInput, Keyboard, SafeAreaView, KeyboardAvoidingView } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import SinglePrayer from './SinglePrayer'
import EditPrayer from './EditPrayer'
import axios from 'axios'
import styles from '../StyleSheet'
import ROOT_URL from '../../config'

export default class ManageMyPrayer extends React.Component {
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
    const { fetchUserPrayers, userId } = this.props.screenProps
    axios.put(`${ROOT_URL}/api/prayers/update/${this.props.navigation.state.params.prayer.id}`, {
      subject: this.state.subject,
      body: this.state.body,
    })
    .then(() => {
      this.setState({
        editMode: false
      })
      fetchUserPrayers(userId)
      this.props.navigation.goBack()
    })
    .catch(console.error)
  }

  togglePrayer(bool) {
    Keyboard.dismiss()
    const { fetchUserPrayers, userId } = this.props.screenProps
    axios.put(`${ROOT_URL}/api/prayers/close/${this.props.navigation.state.params.prayer.id}`, {
      closed: bool
    })
    .then(() => {
      fetchUserPrayers(userId)
      this.props.navigation.goBack()
    })
    .catch(console.error)
  }

  render() {
    const prayer = this.props.navigation.state.params.prayer
    return (
      <SafeAreaView style={styles.whiteContainer}>
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
              prayer={prayer} />
        }
      </SafeAreaView>
    )
  }
}
