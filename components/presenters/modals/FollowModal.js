import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import ss from '../../StyleSheet'

const FollowModalContent = ({ hideModal, toggleFollowPrayer, alreadyFollowing }) => (
  <View style={[ss.center, ss.padding15]}>
    <View style={ss.modalContent}>
      {alreadyFollowing
      ? <Text style={ss.modalText}>Are you sure you want to unfollow this prayer?</Text>
      : <Text style={ss.modalText}>Following prayers is a sign of support and tells the author that you will continue to pray for their request.</Text>
      }
      <TouchableOpacity
        style={ss.fullWidth}
        onPress={toggleFollowPrayer}>
        <View style={ss.modalLineView}>
          {alreadyFollowing
          ? <Text style={[ss.subHeader, ss.redText]}>Unfollow Prayer</Text>
          : <Text style={[ss.subHeader, ss.blueText]}>Follow Prayer</Text>
          }
        </View>
      </TouchableOpacity>
    </View>
    <TouchableOpacity
      style={ss.fullWidth}
      onPress={hideModal}>
      <View style={ss.modalContent}>
        {alreadyFollowing
        ? <Text style={[ss.subHeader, ss.blueText]}>Cancel</Text>
        : <Text style={[ss.subHeader, ss.redText]}>Cancel</Text>
        }
      </View>
    </TouchableOpacity>
  </View>
)

export default FollowModalContent
