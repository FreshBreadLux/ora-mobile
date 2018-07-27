import React from 'react'
import { Text, View, SafeAreaView, TouchableOpacity, Image, ActivityIndicator } from 'react-native'
import { connect } from 'react-redux'
import { FileSystem } from 'expo'
import { Feather } from '@expo/vector-icons'
import ss from '../../StyleSheet'

const RewardPresenter = ({ navigation, dailyRewardLocalUri, dailyReward }) => (
  <View style={ss.invisiContainer}>
    {dailyRewardLocalUri
    ? <View style={ss.invisiContainer}>
        <View style={ss.backgroundImageFrame}>
          <Image
            style={{ flex: 1, height: undefined, width: undefined, resizeMode: 'cover' }}
            source={{ uri: dailyRewardLocalUri }} />
        </View>
        <SafeAreaView style={ss.invisiContainer}>
          <TouchableOpacity
            style={ss.padding10}
            onPress={() => navigation.goBack()}>
            <Feather
              name="x-circle"
              size={20}
              color={dailyReward.iconColor} />
          </TouchableOpacity>
        </SafeAreaView>
      </View>
    : <SafeAreaView style={ss.invisiContainer}>
        <TouchableOpacity
          style={ss.padding10}
          onPress={() => navigation.goBack()}>
          <Feather
            name="x-circle"
            size={20}
            color={dailyReward.iconColor} />
        </TouchableOpacity>
        <View style={[ss.invisiContainer, ss.center]}>
          <ActivityIndicator size="large" color="#777" />
        </View>
      </SafeAreaView>
    }
  </View>
)

const mapState = state => ({
  dailyRewardLocalUri: state.acceptPrayer.dailyRewardLocalUri,
  dailyReward: state.acceptPrayer.dailyReward
})

export default connect(mapState)(RewardPresenter)
