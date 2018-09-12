import React from 'react'
import { connect } from 'react-redux'
import { View, Text, TouchableOpacity } from 'react-native'
import ss from '../../StyleSheet'

const SubmitSubjectHeaderRightPresenter = ({ navigation, subject }) => {
  const color = subject ? 'rgb(69, 119, 238)' : '#ccc'
  return (
    <View>
      <TouchableOpacity
        disabled={!subject}
        onPress={() => {
          navigation.navigate('SubmitBody')
        }}>
        <Text style={[ss.headerTextButton, ss.padding10, {color}]}>Next</Text>
      </TouchableOpacity>
    </View>
  )
}

const mapState = state => ({
  subject: state.anonymousPrayerCompositions.subject
})

export default connect(mapState)(SubmitSubjectHeaderRightPresenter)
