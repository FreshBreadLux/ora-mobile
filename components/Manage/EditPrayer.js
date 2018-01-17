import React from 'react'
import { View, ScrollView, Text, TouchableOpacity, TextInput, Keyboard, SafeAreaView, KeyboardAvoidingView, AlertIOS } from 'react-native'
import styles from '../StyleSheet'

const EditPrayer = ({ setBody, body, updatePrayer, toggleEdit }) => (
  <View style={[styles.invisiContainer, styles.padding15]}>
    <KeyboardAvoidingView behavior="padding">
      <TextInput
        style={[styles.fullWidth, styles.font16, styles.bottomBorder]}
        autoFocus={true}
        multiline={true}
        onChangeText={textBody => setBody(textBody)}
        value={body}
      />
      <View style={[styles.row, styles.spaceBetween]}>
        <TouchableOpacity
          style={styles.cancelButton}
          onPress={toggleEdit}>
          <Text style={[styles.font14]}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.editButton}
          onPress={updatePrayer}>
          <Text style={[styles.buttonText, styles.font14]}>Update</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  </View>
)

export default EditPrayer
