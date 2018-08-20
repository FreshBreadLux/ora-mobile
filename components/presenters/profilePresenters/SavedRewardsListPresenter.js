import React from 'react'
import { connect } from 'react-redux'
import { View, TouchableOpacity, ScrollView, SafeAreaView, Text, Image, Dimensions, FlatList, ActivityIndicator } from 'react-native'
import ss from '../../StyleSheet'

const SavedRewardsListPresenter = ({ savedRewards, navigation }) => (
  <SafeAreaView style={ss.whiteContainer}>
    <View style={[ss.invisiContainer, ss.horizontalPadding]}>
      <View style={[ss.paddingBottom15, ss.bottomBorder]} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={ss.flex1}>
        {!savedRewards
        ? <View style={[ss.invisiContainer, ss.center, ss.addLargeViewSpacing]}>
            <ActivityIndicator size="large" color="#777" />
          </View>
        : <View style={ss.invisiContainer}>
          {!savedRewards.length
          ? <View style={ss.addViewSpacing}>
              <Text style={ss.body}>Images that you've unlocked and saved will display here</Text>
            </View>
          : <FlatList
              data={savedRewards}
              renderItem={({item}) => {
                const { width } = Dimensions.get('window')
                const size = (width - 60) / 3
                return (
                  <TouchableOpacity
                    onPress={() => navigation.navigate('RewardContainer', {reward: item})}
                    style={{width: size, height: size, margin: 5}}>
                    <Image
                      style={{flex: 1, width: undefined, height: undefined, resizeMode: 'cover', borderRadius: 5}}
                      source={{uri: item.localPath}} />
                  </TouchableOpacity>
                )
              }}
              keyExtractor={item => item.id}
              numColumns={3} />
          }
          </View>
        }
      </ScrollView>
    </View>
  </SafeAreaView>
)

const mapState = state => ({
  savedRewards: state.savedRewards
})

export default connect(mapState)(SavedRewardsListPresenter)
