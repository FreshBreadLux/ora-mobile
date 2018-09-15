import React from 'react'
import { connect } from 'react-redux'
import { View, TouchableOpacity, Image, Dimensions, FlatList, ActivityIndicator } from 'react-native'
import ss from '../../StyleSheet'
import { NoRewardsProfilePresenter } from '../../presenters'

const SavedRewardsScrollPresenter = ({ savedRewards, navigation }) => (
  <View style={ss.invisiContainer}>
    {!savedRewards
    ? <View style={[ss.invisiContainer, ss.center, ss.addLargeViewSpacing]}>
        <ActivityIndicator size="large" color="#777" />
      </View>
    : <View style={ss.invisiContainer}>
      {!savedRewards.length
      ? <NoRewardsProfilePresenter navigation={navigation} />
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
  </View>
)

const mapState = state => ({
  savedRewards: state.savedRewards
})

export default connect(mapState)(SavedRewardsScrollPresenter)
