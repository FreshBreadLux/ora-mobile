import React from 'react'
import { Text, View, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import { connect } from 'react-redux'
import { FileSystem } from 'expo'
import { Feather } from '@expo/vector-icons'
import ss from '../../StyleSheet'

const RewardPresenter = ({ navigation, date }) => (
  <View style={ss.invisiContainer}>
    <View style={ss.backgroundImageFrame}>
      <Image
        style={{ flex: 1, height: undefined, width: undefined, resizeMode: 'cover' }}
        source={{ uri: FileSystem.cacheDirectory + `dailyRewards/${date}` }} />
    </View>
    <SafeAreaView style={ss.invisiContainer}>
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
  date: state.acceptPrayer.dailyReward.date
})

export default connect(mapState)(RewardPresenter)
