import React from 'react'
import { View, ScrollView, Text, TouchableOpacity, TextInput, Keyboard, SafeAreaView, KeyboardAvoidingView, AlertIOS } from 'react-native'
import InputScrollView from 'react-native-input-scroll-view'
import styles from '../StyleSheet'

const EditPrayer = ({ setBody, body, updatePrayer, toggleEdit }) => (
  <View style={[styles.invisiContainer, styles.padding15]}>
    <InputScrollView
      keyboardOffset={65}
      keyboardShouldPersistTaps="handled">
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
    </InputScrollView>
  </View>
)

export default EditPrayer
