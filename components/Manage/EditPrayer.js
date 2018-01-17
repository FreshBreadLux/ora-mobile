import React from 'react'
import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import styles from '../StyleSheet'

const EditPrayer = ({ setBody, body, updatePrayer, toggleEdit }) => (
  <View style={[styles.invisiContainer, styles.padding15]}>
    <KeyboardAwareScrollView
      extraScrollHeight={80}
      keyboardShouldPersistTaps="handled">
      <TextInput
        style={[styles.fullWidth, styles.font16, styles.bottomBorder, styles.paddingBottom10]}
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
    </KeyboardAwareScrollView>
  </View>
)

export default EditPrayer
