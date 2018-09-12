import React from 'react'
import { connect } from 'react-redux'
import { View, Text, TextInput } from 'react-native'
import { setAnonymousSubject } from '../../../store'
import ss from '../../StyleSheet'

const SubmitSubjectPresenter = ({ dispatchSetAnonymousSubject }) => (
  <View style={[ss.invisiContainer]}>
    <Text style={[ss.subHeader, ss.padding10]}>Give your prayer a subject</Text>
    <TextInput
      style={[ss.fullWidth, ss.subHeader, ss.padding10, {
        borderTopWidth: 1,
        borderTopColor: '#ccc',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        backgroundColor: '#fff',
      }]}
      autoFocus={true}
      onChangeText={dispatchSetAnonymousSubject}
      underlineColorAndroid="transparent"
      placeholder="Prayer Subject"
      placeholderTextColor="#999"
      selectionColor="rgb(69, 119, 238)"
      keyboardType="default" />
    <Text style={[ss.padding10, {fontStyle: 'italic', color: '#555'}]}>Tip: Your prayer's subject will be displayed when you get a notification that someone is praying for you, so choose a subject that will be meaningful when you see it on the notification.</Text>
  </View>
)

const mapState = state => ({
  subject: state.anonymousPrayerCompositions.subject
})

const mapDispatch = dispatch => ({
  dispatchSetAnonymousSubject: subject => dispatch(setAnonymousSubject(subject)),
})

export default connect(mapState, mapDispatch)(SubmitSubjectPresenter)
