import React from 'react'
import { View, ScrollView, Text, TouchableOpacity, TextInput, Keyboard, SafeAreaView, KeyboardAvoidingView, AlertIOS } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import InputScrollView from 'react-native-input-scroll-view'
import styles from '../StyleSheet'

const EditPrayer = ({ setBody, body, updatePrayer, toggleEdit }) => (
  <View style={[styles.invisiContainer, styles.padding15]}>
    <InputScrollView
      keyboardOffset={60}
      scrollEnabled={true}
      keyboardShouldPersistTaps="handled">
      <TextInput
        style={[styles.fullWidth, styles.font16, styles.bottomBorder, styles.paddingBottom10]}
        multiline={true}
        autoFocus={true}
        onChangeText={textBody => setBody(textBody)}
        value={body}
      />
      <View style={[styles.row, styles.spaceBetween, {marginBottom: 75}]}>
        <TouchableOpacity
          style={styles.editButton}
          onPress={toggleEdit}>
          <Text style={[styles.buttonText, styles.font14]}>Cancel</Text>
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
