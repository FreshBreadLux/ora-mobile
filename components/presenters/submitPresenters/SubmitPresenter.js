import React from 'react'
import { View, SafeAreaView, Text, TextInput, TouchableOpacity } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { LinearGradient } from 'expo'
import { BackgroundImage } from '../'
import ss from '../../StyleSheet'

const SubmitPresenter = ({ errorMessage, prayerSent, subject, body, setSubject, setBody, focusBody, referenceBody, submitPrayer, handleContentSizeChange }) => (
  <View style={ss.invisiContainer}>
    <BackgroundImage componentName="Submit" />
    <View style={ss.backgroundImageFrame}>
      <LinearGradient
        colors={['#fff', 'transparent']}
        start={[0.5, 0.35]}
        style={ss.flex1} />
    </View>
    <SafeAreaView style={ss.invisiContainer}>
        <View style={[ss.flex1, ss.padding15]}>
          { errorMessage
          ? <View style={[ss.center, ss.paddingBottom10]}>
              <Text style={[ss.header]}>{errorMessage}</Text>
            </View>
          : <View>
            { prayerSent
            ? <View style={[ss.center, ss.paddingBottom10]}>
                <Text style={[ss.header]}>prayer successfully submitted</Text>
              </View>
            : <View style={[ss.center, ss.paddingBottom10]}>
                <Text style={[ss.header]}>SUBMIT A PRAYER</Text>
              </View> }
            </View>
          }
          <KeyboardAwareScrollView
            keyboardShouldPersistTaps="handled">
            <View style={[ss.addViewSpacing, ss.darkBottomBorder]}>
              <TextInput
                style={[ss.fullWidth, ss.subHeader, ss.paddingBottom10]}
                placeholder="Enter prayer subject"
                placeholderTextColor="#555"
                keyboardType="default"
                onChangeText={setSubject}
                onSubmitEditing={focusBody}
                value={subject}
              />
            </View>
            <View style={[ss.addViewSpacing, ss.submitHeight]}>
              <TextInput
                ref={referenceBody}
                style={[ss.fullWidth, ss.fullHeight, ss.body, ss.paddingBottom10]}
                placeholder="Describe your prayer request here. We recommend including as much detail as you are comfortable with. There is no character limit."
                placeholderTextColor="#555"
                keyboardType="default"
                multiline={true}
                onChangeText={setBody}
                onContentSizeChange={handleContentSizeChange}
                value={body}
                numberOfLines={4}
              />
            </View>
            <View style={[ss.center, ss.addViewSpacing, ss.fullWidth]}>
              <TouchableOpacity
                onPress={submitPrayer}
                style={[ss.button, ss.halfWidth]}
              >
                <Text style={[ss.buttonText]}>send</Text>
              </TouchableOpacity>
            </View>
          </KeyboardAwareScrollView>
        </View>
      </SafeAreaView>
  </View>
)

export default SubmitPresenter
