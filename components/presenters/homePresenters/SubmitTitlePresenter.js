import React from 'react'
import { connect } from 'react-redux'
import { View, Text, TextInput } from 'react-native'
import { setAnonymousTitle } from '../../../store'
import ss from '../../StyleSheet'

const SubmitTitlePresenter = ({ dispatchSetAnonymousTitle }) => (
  <View style={[ss.invisiContainer]}>
    <Text style={[ss.subHeader, ss.padding10]}>Give your prayer a title</Text>
    <TextInput
      style={[ss.fullWidth, ss.subHeader, ss.padding10, {
        borderTopWidth: 1,
        borderTopColor: '#ccc',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        backgroundColor: '#fff',
      }]}
      autoFocus={true}
      onChangeText={dispatchSetAnonymousTitle}
      underlineColorAndroid="transparent"
      placeholder="Prayer Title"
      placeholderTextColor="#999"
      selectionColor="rgb(69, 119, 238)"
      keyboardType="default" />
    <Text style={[ss.padding10, {fontStyle: 'italic', color: '#555'}]}>Tip: Your prayer's title will be displayed when you get a notification that someone is praying for you, so choose a title that will be meaningful when you see it on the notification.</Text>
  </View>
)

const mapState = state => ({
  title: state.anonymousPrayerCompositions.title
})

const mapDispatch = dispatch => ({
  dispatchSetAnonymousTitle: title => dispatch(setAnonymousTitle(title)),
})

export default connect(mapState, mapDispatch)(SubmitTitlePresenter)
