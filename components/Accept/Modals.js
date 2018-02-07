import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import ss from '../StyleSheet'

export const FollowModalContent = ({ hideModal, followPrayer }) => (
  <View style={[ss.center, ss.padding15]}>
    <View style={ss.modalContent}>
      <Text style={ss.modalText}>Following prayers is a sign of support and engagement, and will keep you updated on the status of the prayer request</Text>
      <TouchableOpacity
        style={ss.fullWidth}
        onPress={followPrayer}>
        <View style={ss.modalLineView}>
          <Text style={[ss.subHeader, ss.blueText]}>Follow Prayer</Text>
        </View>
      </TouchableOpacity>
    </View>
    <TouchableOpacity
      style={ss.fullWidth}
      onPress={hideModal}>
      <View style={ss.modalContent}>
        <Text style={[ss.subHeader, ss.redText]}>Cancel</Text>
      </View>
    </TouchableOpacity>
  </View>
)

export const AboutModalContent = ({ hideModal }) => (
  <View style={[ss.center, ss.padding15]}>
    <View style={ss.modalContent}>
      <Text style={ss.modalText}>Ora lets you accept prayer requests from all over the world. This app is nothing more than an illustration; the reality of universal prayer exists with or without Ora. So before you begin to pray, recall that you are in the presence of God. Realize that there are people praying at all times, all over the world. Recognize that your prayers have a real impact.
      {'\n\n'}
      Prayer distribution is random. You will not be able to navigate back to the last prayer that you viewed. If you want to stay updated about a prayer that you see, make sure that you follow it by using the heart icon. The prayer will be added to your Follows section, and you'll receive notifications when the author edits the prayer.
      {'\n\n'}
      You can use the flag icon to draw attention to messages that may be dangerous, inappropriate, or spam. This will notify the Ora team, and we will handle these issues on a case-by-case basis.
      {'\n\n'}
      Use the small 'x' icon to return to the main screen.
      </Text>
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

export const FlagModalContent = ({ hideModal, flagPrayer }) => (
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
