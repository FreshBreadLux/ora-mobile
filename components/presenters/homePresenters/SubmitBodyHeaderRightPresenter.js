import React from 'react'
import { connect } from 'react-redux'
import { View, Text, TouchableOpacity, Keyboard } from 'react-native'
import { fetchUserPrayers, submitAnonymousPrayer } from '../../../store'
import ss from '../../StyleSheet'

const SubmitBodyHeaderRightPresenter = ({ navigation, userId, jwToken, subject, body, dispatchSubmit, refreshUserPrayers }) => {
  const color = body ? 'rgb(69, 119, 238)' : '#ccc'
  return (
    <View>
      <TouchableOpacity
        disabled={!body}
        onPress={() => {
          Keyboard.dismiss()
          dispatchSubmit(jwToken, userId, subject, body, refreshUserPrayers)
          navigation.popToTop()
        }}>
        <Text style={[ss.subHeader, ss.padding10, {color}]}>Submit</Text>
      </TouchableOpacity>
    </View>
  )
}

const mapState = state => ({
  userId: state.auth.userId,
  jwToken: state.auth.jwToken,
  subject: state.anonymousPrayerCompositions.subject,
  body: state.anonymousPrayerCompositions.body,
})

const mapDispatch = dispatch => ({
  dispatchSubmit: (token, id, subject, body, refreshFunction) => dispatch(submitAnonymousPrayer(token, id, subject, body, refreshFunction)),
  refreshUserPrayers: userId => dispatch(fetchUserPrayers(userId)),
})

export default connect(mapState, mapDispatch)(SubmitBodyHeaderRightPresenter)
