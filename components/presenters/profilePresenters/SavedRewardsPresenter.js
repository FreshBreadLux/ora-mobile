import React from 'react'
import { connect } from 'react-redux'
import { View, ScrollView, SafeAreaView, Text, Image, Dimensions } from 'react-native'
import ss from '../../StyleSheet'

const SavedRewardsPresenter = ({ savedRewards }) => (
  <SafeAreaView style={ss.whiteContainer}>
    <View style={[ss.invisiContainer, ss.horizontalPadding]}>
      <View style={[ss.paddingBottom15, ss.bottomBorder]} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={ss.flex1}>
        {!savedRewards.length
        ? <Text>Once you've unlocked and saved images they'll show up here</Text>
        : <View style={ss.invisiContainer}>
            {savedRewards.map(reward => {
              const { width } = Dimensions.get('window')
              console.log('width:', width)
              const size = (width - 60) / 3
              console.log('size:', size)
              return (
                <Image
                  key={reward.id}
                  style={{width: size, height: size, resizeMode: 'cover'}}
                  source={{uri: reward.imageUrl}} />
              )
            })}
          </View>
        }
      </ScrollView>
    </View>
  </SafeAreaView>
)

const mapState = state => ({
  savedRewards: state.savedRewards
})

export default connect(mapState)(SavedRewardsPresenter)
