import React from 'react'
import { View, ScrollView, Text, TouchableOpacity, TextInput, Keyboard, SafeAreaView, KeyboardAvoidingView, AlertIOS } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import styles from '../StyleSheet'

const EditPrayer = ({ setBody, body, updatePrayer, toggleEdit }) => (
  <View style={[styles.invisiContainer, styles.padding15]}>
    <KeyboardAvoidingView
      behavior="padding">
      <ScrollView
        keyboardShouldPersistTaps="handled">
        <TextInput
          style={[styles.box, styles.fullWidth, styles.font16, styles.boxBorder]}
          multiline={true}
          onChangeText={textBody => setBody(textBody)}
          value={body}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={updatePrayer}>
          <Text style={styles.buttonText}>Update</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={toggleEdit}>
          <Text style={styles.buttonText}>Cancel</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  </View>
)

export default EditPrayer
