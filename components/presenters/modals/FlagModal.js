import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import ss from '../../StyleSheet'

const FlagModalContent = ({ hideModal, flagPrayer }) => (
  <View style={[ss.center, ss.padding15]}>
    <View style={ss.modalContent}>
      <Text style={ss.modalText}>Please select the category that this prayer should be flagged under</Text>
      <TouchableOpacity
        style={ss.fullWidth}
        onPress={() => flagPrayer('spam')}>
        <View style={ss.modalLineView}>
          <Text style={[ss.subHeader, ss.redText]}>Spam</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={ss.fullWidth}
        onPress={() => flagPrayer('dangerous')}>
        <View style={ss.modalLineView}>
          <Text style={[ss.subHeader, ss.redText]}>Dangerous</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={ss.fullWidth}
        onPress={() => flagPrayer('inappropriate')}>
        <View style={ss.modalLineView}>
          <Text style={[ss.subHeader, ss.redText]}>Inappropriate</Text>
        </View>
      </TouchableOpacity>
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

export default FlagModalContent
