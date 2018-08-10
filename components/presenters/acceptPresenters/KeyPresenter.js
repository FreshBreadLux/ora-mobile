import React from 'react'
import { TouchableOpacity, View, Image } from 'react-native'

const KeyPresenter = ({ navigation }) => (
  <View style={{height: 90, width: 90, backgroundColor: '#555'}}>
    <TouchableOpacity
      onPress={() => navigation.navigate('RewardContainer')}
      activeOpacity={0.8}>
      <Image
        style={{
          position: 'absolute',
          height: 90,
          width: 90,
          left: 0,
          top: 0,
        }}
        source={require('../../../assets/images/Key/assembled-keys.png')} />
    </TouchableOpacity>
  </View>
)

export default KeyPresenter
