import React from 'react'
import { View, Text, TouchableOpacity, TextInput, KeyboardAvoidingView, ScrollView } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import styles from '../StyleSheet'

const EditPrayer = ({ setBody, body, updatePrayer, toggleEdit }) => (
  <View style={[styles.invisiContainer, styles.padding15]}>
    <KeyboardAwareScrollView
      style={styles.flex1}
      extraScrollHeight={80}
      keyboardShouldPersistTaps="handled">
      <View style={styles.editHeight}>
        <TextInput
          style={[styles.flex1, styles.font16, styles.paddingBottom10]}
          autoFocus={true}
          multiline={true}
          onChangeText={textBody => setBody(textBody)}
          value={body}
        />
      </View>
      <View style={[styles.row, styles.spaceBetween, styles.topBorder]}>
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
    </KeyboardAwareScrollView>
  </View>
)

export default EditPrayer
