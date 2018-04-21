import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { finishPraying } from '../../../store'
import { Feather } from '@expo/vector-icons'
import ss from '../../StyleSheet'

const AcceptHeaderLeftPresenter = ({ navigation, dispatchFinishPraying }) => (
  <View>
    <TouchableOpacity
      style={[ss.padding10, ss.alignFlexEnd]}
      onPress={() => {
        dispatchFinishPraying()
        navigation.goBack()
      }}>
      <Feather
        name="x-circle"
        size={20}
        color="#555" />
    </TouchableOpacity>
  </View>
)

const mapDispatch = dispatch => ({
  dispatchFinishPraying: () => dispatch(finishPraying()),
})

export default connect(null, mapDispatch)(AcceptHeaderLeftPresenter)
