import React from 'react'
import { View, Text, TouchableOpacity, TextInput, Animated } from 'react-native'
import ss from '../../StyleSheet'

const AddUpdatePresenter = ({ handleOnLayout, animatedHeight, updateBody, toggleAddUpdate, editPrayer, setUpdateBody, referenceUpdateTextInput }) => (
  <View
    onLayout={handleOnLayout}
    style={[ss.invisiContainer, ss.editPadding]}>
    <Animated.View
      style={{height: animatedHeight ? animatedHeight : 600 }}>
      <TextInput
        ref={referenceUpdateTextInput}
        style={[ss.flex1, ss.body, ss.paddingBottom10]}
        multiline={true}
        onChangeText={textBody => setUpdateBody(textBody)}
        value={updateBody}
      />
    <View
      style={[ss.row, ss.spaceBetween, ss.viewTopBorder]}>
      <TouchableOpacity
        style={ss.cancelButton}
        onPress={toggleAddUpdate}>
        <Text style={[ss.subBody]}>cancel</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={ss.editButton}
        onPress={editPrayer}>
        <Text style={[ss.subBody, ss.whiteText]}>save edits</Text>
      </TouchableOpacity>
    </View>
    </Animated.View>
  </View>
)

export default AddUpdatePresenter
