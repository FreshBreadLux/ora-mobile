import React from 'react'
import { connect } from 'react-redux'
import { View, Text, TouchableOpacity } from 'react-native'
import ss from '../../StyleSheet'

const SubmitBodyHeaderRightPresenter = ({ navigation, title, body }) => {
  const color = body ? 'rgb(69, 119, 238)' : '#ccc'
  return (
    <View>
      <TouchableOpacity
        disabled={!body}
        onPress={() => {
          console.log('prayer:', { title, body })
          navigation.popToTop()
        }}>
        <Text style={[ss.subHeader, ss.padding10, {color}]}>Submit</Text>
      </TouchableOpacity>
    </View>
  )
}

const mapState = state => ({
  title: state.anonymousPrayerCompositions.title,
  body: state.anonymousPrayerCompositions.body
})

export default connect(mapState)(SubmitBodyHeaderRightPresenter)
