import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import ss from '../../StyleSheet'

const AboutModal = ({ navigation, hideModal }) => (
  <View style={[ss.center, ss.padding15]}>
    <View style={ss.modalContent}>
      <Text style={ss.modalText}>If you’re reading this, the author of this prayer has already received a notification that you are praying for them.  Please take time to pray for this request before moving on, as you will not be able to return to it unless you Follow it.</Text>
      <View style={ss.modalLineView}>
        <Text style={ss.modalText}>If you're looking for guidance while praying, take a look at some of these traditional prayers for inspiration:</Text>
        <TouchableOpacity
          style={[ss.fullWidth, ss.center]}
          onPress={() => {
            hideModal()
            navigation.navigate('TraditionalPrayers')
          }}>
          <Text style={[ss.subHeader, ss.blueText]}>Traditional Prayers</Text>
        </TouchableOpacity>
      </View>
    </View>
    <TouchableOpacity
      style={ss.fullWidth}
      onPress={hideModal}>
      <View style={ss.modalContent}>
        <Text style={[ss.subHeader, ss.blueText]}>Got it!</Text>
      </View>
    </TouchableOpacity>
  </View>
)

export default AboutModal
