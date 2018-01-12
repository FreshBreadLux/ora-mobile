import React from 'react'
import { View, ScrollView, Text, TouchableOpacity, TextInput, Keyboard, SafeAreaView, KeyboardAvoidingView } from 'react-native'
import Modal from 'react-native-modal'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import axios from 'axios'
import styles from '../StyleSheet'
import ROOT_URL from '../../config'
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
        <View style={[styles.whiteContainer, styles.padding15]}>
          {this.state.editMode
            ? <KeyboardAwareScrollView
                keyboardShouldPersistTaps="handled"
                behavior="padding"
                style={styles.invisiContainer}>
                <View style={[styles.addViewSpacing, styles.flex2]}>
                  <TextInput
                    ref="body"
                    style={[styles.flex1, styles.box, styles.font16, styles.boxBorder]}
                    multiline={true}
                    onChangeText={body => this.setState({ body })}
                    value={this.state.body}
                  />
                </View>
                <View style={[styles.invisiContainer, styles.flex1]}>
                  <View style={styles.center}>
                    <TouchableOpacity
                      onPress={this.updatePrayer}
                      style={styles.button}>
                      <Text style={styles.buttonText}>Update Prayer</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.center}>
                    <TouchableOpacity
                      onPress={() => this.setState({ editMode: false })}
                      style={styles.button}>
                      <Text style={styles.buttonText}>Cancel</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </KeyboardAwareScrollView>
            : <View style={styles.invisiContainer}>
                <ScrollView showsVerticalScrollIndicator={false}>
                  <Text style={[styles.font16, styles.paddingBottom10]}>{`${prayer.body}`}</Text>
                </ScrollView>
                <View style={styles.viewTopBorder}>
                  <Text style={styles.font16}>{`Total Views: ${prayer.totalViews}`}</Text>
                </View>
                <View style={styles.center}>
                  <TouchableOpacity
                    onPress={() => this.setState({ editMode: true })}
                    style={styles.button}>
                    <Text style={styles.buttonText}>Edit</Text>
                  </TouchableOpacity>
                </View>
                {prayer.closed
                  ? <View style={styles.center}>
                      <TouchableOpacity
                        onPress={() => this.setModal('open')}
                        style={styles.button}>
                        <Text style={styles.buttonText}>Open Prayer</Text>
                      </TouchableOpacity>
                    </View>
                  : <View style={styles.center}>
                      <TouchableOpacity
                        onPress={() => this.setModal('close')}
                        style={styles.button}>
                        <Text style={styles.buttonText}>Close Prayer</Text>
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
      </SafeAreaView>
    )
  }
}
