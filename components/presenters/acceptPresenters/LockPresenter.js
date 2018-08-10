import React from 'react'
import { TouchableOpacity, Animated, Image } from 'react-native'

const LockPresenter = ({ shakeLock, lockXPosition }) => (
  <Animated.View style={{height: 90, width: 90, backgroundColor: '#555', transform: [{translateX: lockXPosition.interpolate({inputRange: [0, 0.33, 0.66, 1], outputRange: [0, 6, -6, 0]})}]}}>
    <TouchableOpacity
      onPress={shakeLock}
      activeOpacity={0.8}>
      <Image
        style={{
          position: 'absolute',
          height: 47.1327573,
          width: 42.4194815,
          left: 23.7902592,
          top: 42.8672427,
        }}
        source={require('../../../assets/images/Key/assembled-lock.png')} />
    </TouchableOpacity>
  </Animated.View>
)

export default LockPresenter
