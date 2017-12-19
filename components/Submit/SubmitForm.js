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
      prayer: '',
    }
  }
  submitPrayer() {
    Keyboard.dismiss()
    axios.post(`http://${IP_ADDRESS}:8080/api/prayers`, {
      userId: this.props.userId
    })
  }
}
