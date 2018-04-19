import React from 'react'
import { View, SafeAreaView, Text, TextInput, TouchableOpacity, Platform, ActivityIndicator } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Ionicons } from '@expo/vector-icons'
import { LinearGradient } from 'expo'
import { BackgroundImageContainer } from '../'
import ss from '../../StyleSheet'

const SubmitPresenter = ({ errorMessage, prayerSent, subject, body, setSubject, setBody, focusBody, referenceBody, submitPrayer, handleContentSizeChange, failed, sending }) => (
  <View style={ss.invisiContainer}>
    <BackgroundImageContainer componentName="Submit" />
    {Platform.OS === 'ios'
      ? <View style={ss.backgroundImageFrame}>
          <LinearGradient
            colors={['#fff', 'transparent']}
            start={[0.5, 0.35]}
            style={ss.flex1} />
        </View>
      : <View style={ss.backgroundImageFrame}>
          <LinearGradient
            colors={['#fff', 'transparent']}
            style={ss.flex1} />
        </View>
    }
    <SafeAreaView style={ss.invisiContainer}>
      <View style={Platform.OS === 'ios' ? ss.iosFlexPadding : ss.androidFlexPadding}>
        {errorMessage
        ? <View style={[ss.center, ss.paddingBottom10]}>
            <Text style={[ss.header, ss.centerText]}>{errorMessage}</Text>
          </View>
        : <View>
          {prayerSent
          ? <View style={[ss.row, ss.center, ss.paddingBottom10]}>
              <Ionicons
                name="ios-checkmark-circle-outline"
                size={24}
                color="#1e3799" />
              <Text style={[ss.header, ss.darkBlueText, ss.paddingLeft7]}>SUBMITTED</Text>
            </View>
          : <View style={[ss.center, ss.paddingBottom10]}>
              <Text style={[ss.header]}>SUBMIT A PRAYER</Text>
            </View>
          }
          </View>
        }
        <KeyboardAwareScrollView
          keyboardShouldPersistTaps="handled">
          <View style={[ss.addViewSpacing, ss.darkBottomBorder]}>
            <TextInput
              style={[ss.fullWidth, ss.subHeader, ss.paddingBottom10]}
              underlineColorAndroid="transparent"
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
              style={[ss.fullWidth, ss.fullHeight, ss.body, ss.paddingBottom10, ss.topAlignAndroidTextInput]}
              underlineColorAndroid="transparent"
              placeholder="Describe your prayer request here. We recommend including as much detail as you are comfortable with. There is no character limit."
              placeholderTextColor="#555"
              keyboardType="default"
              multiline={true}
              onChangeText={setBody}
              onContentSizeChange={handleContentSizeChange}
              value={body}
            />
          </View>
          <View style={[ss.center, ss.addViewSpacing, ss.fullWidth]}>
            <TouchableOpacity
              onPress={submitPrayer}
              style={[ss.button, ss.halfWidth]}>
              {failed
              ? <Text style={ss.buttonText}>SEND FAILED</Text>
              : <View>
                  {sending
                  ? <ActivityIndicator size="small" color="#0c2461" />
                  : <Text style={ss.buttonText}>SEND</Text>
                  }
                </View>
              }
            </TouchableOpacity>
          </View>
        </KeyboardAwareScrollView>
      </View>
    </SafeAreaView>
  </View>
)

export default SubmitPresenter
