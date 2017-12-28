import React from 'react'
import tcomb from 'tcomb-form-native'
import axios from 'axios'
import { View, Text, TouchableOpacity, AsyncStorage, StyleSheet, Keyboard } from 'react-native'
import IP_ADDRESS from '../../config'

const Form = tcomb.form.Form
const Prayer = tcomb.struct({
  subject: tcomb.String,
  body: tcomb.String,
})

export default class SubmitForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      formValue: null,
      prayerSent: false,
    }
    this.submitPrayer = this.submitPrayer.bind(this)
  }

  submitPrayer() {
    Keyboard.dismiss()
    axios.post(`http://${IP_ADDRESS}:8080/api/prayers`, {
      userId: this.props.userId,
      subject: this.state.formValue.subject,
      body: this.state.formValue.body,
    })
    .then(() => {
      this.setState({
        formValue: null,
        prayerSent: true,
      })
      this.props.fetchUserPrayers(this.props.userId)
    })
    .catch(console.error)
  }

  onChange(value) {
    this.setState({ formValue: value })
  }

  render() {
    return (
      <View style={styles.submit}>
        { this.state.prayerSent
          ? <Text>Your prayer has been submitted</Text>
          : null }
        <Form
          ref="form"
          type={Prayer}
          value={this.state.formValue}
          onChange={this.onChange.bind(this)}
          options={{
            auto: 'placehodlers',
            fields: {
              subject: {
                label: 'Subject',
                onSubmitEditing: () => this.refs.form.getComponent('body').refs.input.focus(),
                placeholderTextColor: '#777',
              },
              body: {
                label: 'Body',
                placeholderTextColor: '#777',
              },
            }
          }}
        />
        <TouchableOpacity
          onPress={this.submitPrayer}
        >
          <Text>Submit Prayer</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  submit: {
    flex: 1,
    justifyContent: 'center',
  }
})
