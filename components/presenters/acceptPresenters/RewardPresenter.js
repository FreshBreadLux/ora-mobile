import React from 'react'
import { Text, View, SafeAreaView, TouchableOpacity, Image, ActivityIndicator } from 'react-native'
import { connect } from 'react-redux'
import { FileSystem } from 'expo'
import { Feather, Ionicons, MaterialIcons } from '@expo/vector-icons'
import ss from '../../StyleSheet'

const RewardPresenter = ({ saveReward, navigation, dailyRewardLocalUri, dailyReward, saveFailed, alreadySaved, processingSave }) => (
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
          <View style={ss.flex1} />
          <View style={[ss.row, ss.spaceAround, ss.fullWidth, ss.padding10]}>
            <TouchableOpacity>
              <MaterialIcons
                name="account-circle"
                size={20}
                color={dailyReward.iconColor} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('RewardFullText')}>
              <Text style={[ss.subBody, {color: dailyReward.iconColor}]}>READ MORE</Text>
            </TouchableOpacity>
            {saveFailed
            ? <Text>save failed</Text>
            : <View>
                {processingSave
                ? <ActivityIndicator size="small" color={dailyReward.iconColor} />
                : <View>
                    {alreadySaved
                    ? <Ionicons
                        name="md-checkbox"
                        size={20}
                        color={dailyReward.iconColor} />
                    : <TouchableOpacity
                        onPress={saveReward}>
                        <Ionicons
                          name="md-download"
                          size={20}
                          color={dailyReward.iconColor} />
                      </TouchableOpacity>
                    }
                  </View>
                }
              </View>
            }

          </View>
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
