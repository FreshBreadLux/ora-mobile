import React from 'react'
import { View, Text, TouchableOpacity, TextInput, Animated } from 'react-native'
import ss from '../../StyleSheet'

const EditPrayerPresenter = ({ handleOnLayout, animatedHeight, body, toggleEdit, updatePrayer, setBody, referenceEditTextInput }) => (
  <View
    onLayout={handleOnLayout}
    style={[ss.invisiContainer, ss.editPadding]}>
    <Animated.View
      style={{height: animatedHeight ? animatedHeight : 600 }}>
      <TextInput
        ref={referenceEditTextInput}
        style={[ss.flex1, ss.body, ss.paddingBottom10]}
        multiline={true}
        onChangeText={textBody => setBody(textBody)}
        value={body}
      />
    <View
      style={[ss.row, ss.spaceBetween, ss.viewTopBorder]}>
      <TouchableOpacity
        style={ss.cancelButton}
        onPress={toggleEdit}>
        <Text style={[ss.subBody]}>cancel</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={ss.editButton}
        onPress={updatePrayer}>
        <Text style={[ss.subBody, ss.whiteText]}>save edits</Text>
      </TouchableOpacity>
    </View>
    </Animated.View>
  </View>
)

export default EditPrayerPresenter
