import React from 'react'
import { View, ScrollView, Text, TouchableOpacity, TextInput, Keyboard, SafeAreaView, KeyboardAvoidingView, AlertIOS } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import styles from '../StyleSheet'

const KeyboardTest = () => (
  <View style={[styles.invisiContainer]}>
    <TextInput
      style={[styles.flex1, styles.box, styles.fullWidth]}
      multiline={true}
    />
    <View style={styles.flex4}>
    <ScrollView
      keyboardShouldPersistTaps="handled"
      contentContainerStyle={[styles.flex1, styles.center]}>
      <TouchableOpacity
        onPress={() => AlertIOS.alert('Button worked')}>
        <Text style={styles.font24}>Button</Text>
      </TouchableOpacity>
    </ScrollView>
    </View>
  </View>
)

export default KeyboardTest
