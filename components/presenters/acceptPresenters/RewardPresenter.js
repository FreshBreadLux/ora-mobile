import React from 'react'
import { Text, View, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import { connect } from 'react-redux'
import { FileSystem } from 'expo'
import { Feather } from '@expo/vector-icons'
import ss from '../../StyleSheet'

const RewardPresenter = ({ navigation, dailyRewardLocalUri }) => (
  <View style={ss.invisiContainer}>
    <SafeAreaView style={ss.invisiContainer}>
      <Image
        style={{ height: 300, width: 300, borderWidth: 2 }}
        source={{ uri: dailyRewardLocalUri }} />
      <Text>The image should be right up there ^ ...</Text>
      <TouchableOpacity
        style={ss.padding10}
        onPress={() => navigation.goBack()}>
        <Feather
          name="x-circle"
          size={20}
          color="#fff" />
      </TouchableOpacity>
    </SafeAreaView>
  </View>
)

const mapState = state => ({
  dailyRewardLocalUri: state.acceptPrayer.dailyRewardLocalUri
})

export default connect(mapState)(RewardPresenter)
