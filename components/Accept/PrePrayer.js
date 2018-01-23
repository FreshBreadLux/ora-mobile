import React from 'react'
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import styles from '../StyleSheet'
import { Feather } from '@expo/vector-icons'

const PrePrayer = ({ navigation, loadNextPrayer }) => (
  <SafeAreaView style={[styles.invisiContainer]}>
    <View style={[styles.invisiContainer, styles.spaceAround]}>
      <Text style={styles.title}>ORA</Text>
      <TouchableOpacity
        style={[styles.button, styles.halfWidth]}
        onPress={loadNextPrayer}>
        <Text style={[styles.buttonText]}>start praying</Text>
      </TouchableOpacity>
    </View>
    <View style={[styles.addViewSpacing]}>
      <TouchableOpacity
        style={[styles.padding10, {alignSelf: 'flex-end'}]}
        onPress={() => navigation.navigate('About')}>
        <Feather
          name="help-circle"
          size={26}
          color="#fff"
        />
      </TouchableOpacity>
    </View>
  </SafeAreaView>
)

export default PrePrayer
