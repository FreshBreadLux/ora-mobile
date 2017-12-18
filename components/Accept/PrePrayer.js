import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'

const PrePrayer = ({ loadNextPrayer }) => (
  <View style={styles.container}>
    <View style={styles.background}>
      <Image
        source={require('../../assets/images/milky-way.jpg')}
        style={{flex: 1, resizeMode: 'cover', width: '100%'}}
      />
    </View>
    <View style={styles.foreground}>
      <TouchableOpacity
        onPress={loadNextPrayer}
      >
        <Text>Start Praying</Text>
      </TouchableOpacity>
    </View>
  </View>
)

export default PrePrayer

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  background: {
    flex: 1,
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  foreground: {
    flex: 1,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
})
