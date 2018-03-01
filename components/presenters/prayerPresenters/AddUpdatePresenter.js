import React from 'react'
import { View, Text, TouchableOpacity, TextInput, Animated } from 'react-native'
import { connect } from 'react-redux'
import { removeEditMode } from '../../../store'
import { Ionicons } from '@expo/vector-icons'
import ss from '../../StyleSheet'

const AddUpdatePresenter = ({ handleOnLayout, animatedHeight, updateBody, dispatchRemoveEditMode, addNewUpdate, setUpdateBody, referenceUpdateTextInput }) => (
  <View
    onLayout={handleOnLayout}
    style={[ss.invisiContainer, ss.editPadding]}>
    <View style={[ss.paddingBottom10, ss.paddingTop10, ss.bottomBorder]}>
      <Text style={ss.tagLine}>UPDATE</Text>
    </View>
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
        onPress={dispatchRemoveEditMode}>
        <View style={[ss.row, ss.paddingBottom4, ss.paddingTop4]}>
          <Ionicons
            name="ios-close-circle-outline"
            size={18}
            color="#555" />
          <Text style={[ss.subBody, ss.greyText, ss.paddingLeft7]}>CANCEL</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={addNewUpdate}>
        <View style={[ss.row, ss.paddingBottom4, ss.paddingTop4]}>
          <Ionicons
            name="ios-paper-plane-outline"
            size={18}
            color="#1e3799" />
          <Text style={[ss.subBody, ss.darkBlueText, ss.paddingLeft7]}>SEND UPDATE</Text>
        </View>
      </TouchableOpacity>
    </View>
    </Animated.View>
  </View>
)

const mapDispatch = dispatch => ({
  dispatchRemoveEditMode: () => dispatch(removeEditMode())
})

export default connect(null, mapDispatch)(AddUpdatePresenter)
