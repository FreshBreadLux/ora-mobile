import React from 'react'
import { View, ScrollView, Text, TouchableOpacity, TextInput, Keyboard } from 'react-native'
import Modal from 'react-native-modal'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import axios from 'axios'
import styles from '../StyleSheet'
import IP_ADDRESS from '../../config'
import { OpenModalContent, CloseModalContent } from './Modals'

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
    this.updatePrayer = this.updatePrayer.bind(this)
    this.togglePrayer = this.togglePrayer.bind(this)
  }

  setModal(name) {
    this.setState({ visibleModal: name })
  }

  updatePrayer() {
    Keyboard.dismiss()
    const { fetchUserPrayers, userId } = this.props.screenProps
    axios.put(`http://${IP_ADDRESS}:8080/api/prayers/update/${this.props.navigation.state.params.prayer.id}`, {
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
    axios.put(`http://${IP_ADDRESS}:8080/api/prayers/close/${this.props.navigation.state.params.prayer.id}`, {
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
      <View style={[styles.container, styles.addPadding]}>
        {this.state.editMode
          ? <KeyboardAwareScrollView
              contentContainerStyle={styles.container}>
              <View style={styles.addViewSpacing}>
                <TextInput
                  style={styles.box}
                  onChangeText={subject => this.setState({ subject })}
                  onSubmitEditing={event => this.refs.body.focus()}
                  value={this.state.subject}
                />
              </View>
              <View style={[styles.addViewSpacing, styles.flex1]}>
                <TextInput
                  ref="body"
                  style={[styles.flex1, styles.box]}
                  multiline={true}
                  onChangeText={body => this.setState({ body })}
                  value={this.state.body}
                />
              </View>
              <View style={styles.center}>
                <TouchableOpacity
                  onPress={this.updatePrayer}
                  style={[styles.modalContent, {backgroundColor: 'rgb(69, 119, 238)'}]}>
                  <Text style={{color: '#fff'}}>Update Prayer</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.center}>
                <TouchableOpacity
                  onPress={() => this.setState({ editMode: false })}
                  style={styles.modalContent}>
                  <Text>Cancel</Text>
                </TouchableOpacity>
              </View>
            </KeyboardAwareScrollView>
          : <View style={styles.container}>
              <ScrollView>
                <Text style={styles.body}>{`${prayer.body}`}</Text>
              </ScrollView>
              <View>
                <Text>{`Total Views: ${prayer.totalViews}`}</Text>
              </View>
              <View style={styles.center}>
                <TouchableOpacity
                  onPress={() => this.setState({ editMode: true })}
                  style={[styles.modalContent, {backgroundColor: 'rgb(69, 119, 238)'}]}>
                  <Text style={{color: '#fff'}}>Edit</Text>
                </TouchableOpacity>
              </View>
              {prayer.closed
                ? <View style={styles.center}>
                    <TouchableOpacity
                      onPress={() => this.setModal('open')}
                      style={styles.modalContent}>
                      <Text>Open Prayer</Text>
                    </TouchableOpacity>
                  </View>
                : <View style={styles.center}>
                    <TouchableOpacity
                      onPress={() => this.setModal('close')}
                      style={styles.modalContent}>
                      <Text>Close Prayer</Text>
                    </TouchableOpacity>
                  </View>
              }
              <Modal
                isVisible={this.state.visibleModal === 'open'}
                style={styles.bottomModal}
              >
                <OpenModalContent
                  setModal={this.setModal}
                  togglePrayer={this.togglePrayer}
                />
              </Modal>
              <Modal
                isVisible={this.state.visibleModal === 'close'}
                style={styles.bottomModal}
              >
                <CloseModalContent
                  setModal={this.setModal}
                  togglePrayer={this.togglePrayer}
                />
              </Modal>
            </View>
        }
      </View>
    )
  }
}
