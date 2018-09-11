import React from 'react'
import { connect } from 'react-redux'
import { View, Text, TextInput, Animated } from 'react-native'
import ss from '../../StyleSheet'
import { setAnonymousBody } from '../../../store';

const SubmitBodyPresenter = ({ handleOnLayout, animatedHeight, referenceBodyTextInput, dispatchSetAnonymousBody }) => (
  <View
    onLayout={handleOnLayout}
    style={ss.invisiContainer}>
    <Text style={[ss.subBody, ss.padding10]}>Describe your prayer request here</Text>
    <Animated.View
      style={{height: animatedHeight ? animatedHeight : 600 }}>
      <TextInput
        style={[ss.fullWidth, ss.fullHeight, ss.body, ss.padding10, {
          borderTopWidth: 1,
          borderTopColor: '#ccc',
          backgroundColor: '#fff',
        }]}
        ref={referenceBodyTextInput}
        onChangeText={dispatchSetAnonymousBody}
        underlineColorAndroid="transparent"
        placeholder="Write your prayer requests so that your readers will have a contemplative and fruitful prayer experience. There is no character limit."
        placeholderTextColor="#999"
        multiline={true}
        selectionColor="rgb(69, 119, 238)"
        keyboardType="default" />
    </Animated.View>
    <View style={ss.whiteContainer} />
  </View>
)

const mapDispatch = dispatch => ({
  dispatchSetAnonymousBody: body => dispatch(setAnonymousBody(body))
})

export default connect(null, mapDispatch)(SubmitBodyPresenter)
