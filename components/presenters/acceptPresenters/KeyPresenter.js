import React from 'react'
import { TouchableOpacity, View, Animated, Image } from 'react-native'
import { connect } from 'react-redux'

const KeyPresenter = ({ shakeLock, navigation, lockXPosition, rewardUnlocked }) => (
  <Animated.View style={{height: 90, width: 90, backgroundColor: '#555', transform: [{translateX: lockXPosition.interpolate({inputRange: [0, 0.33, 0.66, 1], outputRange: [0, 6, -6, 0]})}]}}>
    <TouchableOpacity
      onPress={rewardUnlocked ? () => navigation.navigate('RewardContainer') : shakeLock}
      activeOpacity={0.8}>
      <Image
        style={{height: 60, width: 30, position: 'absolute', left: 30, top: 30}}
        source={require('../../../assets/images/Key/key-ring.png')} />
      <Image
        style={{height: 60, width: 30, position: 'absolute', left: 30, top: 30}}
        source={require('../../../assets/images/Key/key-ring.png')} />
      <Image
        style={{height: 30, width: 30, position: 'absolute', left: 15, top: 60}}
        source={require('../../../assets/images/Key/key-head.png')} />
      <Image
        style={{height: 6.66, width: 30, position: 'absolute', left: 15, top: 53.34}}
        source={require('../../../assets/images/Key/key-head-backing.png')} />
      <Image
        style={{height: 8.34, width: 30, position: 'absolute', left: 15, top: 45.1}}
        source={require('../../../assets/images/Key/key-mid.png')} />
      <Image
        style={{height: 30, width: 30, position: 'absolute', left: 45, top: 60}}
        source={require('../../../assets/images/Key/key-head.png')} />
      <Image
        style={{height: 6.66, width: 30, position: 'absolute', left: 45, top: 53.34}}
        source={require('../../../assets/images/Key/key-head-backing.png')} />
      <Image
        style={{height: 8.34, width: 30, position: 'absolute', left: 45, top: 45.1}}
        source={require('../../../assets/images/Key/key-mid.png')} />
    </TouchableOpacity>
  </Animated.View>
)

const mapState = state => ({
  rewardUnlocked: state.userInfo.rewardUnlocked
})

export default connect(mapState)(KeyPresenter)
