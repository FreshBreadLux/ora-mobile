import React from 'react'
import { View, Text, TouchableOpacity, TextInput, Animated } from 'react-native'
import { connect } from 'react-redux'
import { removeEditMode } from '../../../store'
import ss from '../../StyleSheet'

const EditPrayerPresenter = ({ handleOnLayout, animatedHeight, body, dispatchRemoveEditMode, editPrayer, setBody, referenceEditTextInput }) => (
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
        onPress={dispatchRemoveEditMode}>
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

const mapDispatch = dispatch => ({
  dispatchRemoveEditMode: () => dispatch(removeEditMode())
})

export default connect(null, mapDispatch)(EditPrayerPresenter)
