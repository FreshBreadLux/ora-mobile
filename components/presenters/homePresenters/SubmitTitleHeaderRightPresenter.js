import React from 'react'
import { connect } from 'react-redux'
import { View, Text, TouchableOpacity } from 'react-native'
import ss from '../../StyleSheet'

const SubmitTitleHeaderRightPresenter = ({ navigation, title }) => {
  const color = title ? 'rgb(69, 119, 238)' : '#ccc'
  return (
    <View>
      <TouchableOpacity
        disabled={!title}
        onPress={() => navigation.navigate('SubmitBody')}>
        <Text style={[ss.subHeader, ss.padding10, {color}]}>Next</Text>
      </TouchableOpacity>
    </View>
  )
}

const mapState = state => ({
  title: state.anonymousPrayerCompositions.title
})

export default connect(mapState)(SubmitTitleHeaderRightPresenter)
