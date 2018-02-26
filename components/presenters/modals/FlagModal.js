import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import ss from '../../StyleSheet'

const FlagModalContent = ({ flagReasons, hideModal, flagPrayer }) => (
  <View style={[ss.center, ss.padding15]}>
    <View style={ss.modalContent}>
      <Text style={ss.modalText}>How would you like to flag this prayer?</Text>
      {flagReasons && flagReasons.map(flagReason => (
        <TouchableOpacity
          key={flagReason.id}
          style={ss.fullWidth}
          onPress={() => flagPrayer(flagReason.id)}>
          <View style={ss.modalLineView}>
            <Text style={[ss.subHeader, ss.redText]}>{flagReason.flagCategory}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
    <TouchableOpacity
      style={ss.fullWidth}
      onPress={hideModal}>
      <View style={ss.modalContent}>
        <Text style={[ss.subHeader, ss.blueText]}>Cancel</Text>
      </View>
    </TouchableOpacity>
  </View>
)

const mapState = state => ({
  flagReasons: state.flagReasons
})

export default connect(mapState)(FlagModalContent)
