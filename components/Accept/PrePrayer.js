import React from 'react'
import { Text, View, TouchableOpacity, Image } from 'react-native'
import styles from '../StyleSheet'

const PrePrayer = ({ loadNextPrayer }) => (
  <View style={styles.container}>
    <View style={styles.backgroundImage}>
      <Image
        source={require('../../assets/images/milky-way.jpg')}
        style={{flex: 1, resizeMode: 'cover', width: '100%'}}
      />
    </View>
    <View style={[styles.cover, styles.center]}>
      <TouchableOpacity
        onPress={loadNextPrayer}
      >
        <Text>Start Praying</Text>
      </TouchableOpacity>
    </View>
  </View>
)

export default PrePrayer
