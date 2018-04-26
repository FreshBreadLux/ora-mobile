import React from 'react'
import { View, Text, TextInput, SafeAreaView, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import ss from '../../StyleSheet'

const RegisterOraMissionaryPresenter = ({ age, city, state, gender, lastName, firstName, address, zip, setInputRef, focusInput, loading, failed, error, setStateField, registerMissionary }) => (
  <SafeAreaView style={ss.whiteContainer}>
    <View style={[ss.whiteContainer, ss.padding15]}>
      <View style={[ss.addMedViewSpacing, ss.topBorder, ss.whiteContainer]}>
        {error
        ? <Text style={[ss.subBody, ss.paddingBottom20, ss.redText, ss.centerText]}>{error}</Text>
        : <Text style={[ss.body, ss.paddingBottom20]}>Please fill out the quick form below. We like to know a bit about our Ora Missionaries so that we can better serve (and pamper) them.</Text>
        }
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={ss.flex1}>
          <View style={[ss.flex3]}>
            <View style={[ss.addViewSpacing, ss.center, ss.row]}>
              <TextInput
                style={[ss.paddingTop4, ss.paddingBottom4, ss.halfWidth, ss.subBody, ss.darkBottomBorder]}
                underlineColorAndroid="transparent"
                placeholder="First Name"
                placeholderTextColor="#555"
                keyboardType="default"
                autoCorrect={false}
                onChangeText={value => setStateField('firstName', value)}
                onSubmitEditing={() => focusInput('lastName')}
                value={firstName} />
              <TextInput
                ref={ref => setInputRef('lastName', ref)}
                style={[ss.paddingTop4, ss.paddingBottom4, ss.halfWidth, ss.subBody, ss.darkBottomBorder]}
                underlineColorAndroid="transparent"
                placeholder="Last Name"
                placeholderTextColor="#555"
                keyboardType="default"
                onChangeText={value => setStateField('lastName', value)}
                value={lastName} />
            </View>
            <View style={[ss.addViewSpacing, ss.center]}>
              <TextInput
                ref={ref => setInputRef('address', ref)}
                style={[ss.paddingTop4, ss.paddingBottom4, ss.fullWidth, ss.subBody, ss.darkBottomBorder]}
                underlineColorAndroid="transparent"
                placeholder="Address"
                placeholderTextColor="#555"
                keyboardType="default"
                onChangeText={value => setStateField('address', value)}
                onSubmitEditing={() => focusInput('city')}
                value={address} />
            </View>
            <View style={[ss.addViewSpacing, ss.center, ss.row]}>
              <TextInput
                ref={ref => setInputRef('city', ref)}
                style={[ss.paddingTop4, ss.paddingBottom4, ss.halfWidth, ss.subBody, ss.darkBottomBorder]}
                underlineColorAndroid="transparent"
                placeholder="City"
                placeholderTextColor="#555"
                keyboardType="default"
                onChangeText={value => setStateField('city', value)}
                onSubmitEditing={() => focusInput('stateRef')}
                value={city} />
              <TextInput
                ref={ref => setInputRef('stateRef', ref)}
                style={[ss.paddingTop4, ss.paddingBottom4, ss.oneQuarterWidth, ss.subBody, ss.darkBottomBorder]}
                underlineColorAndroid="transparent"
                placeholder="State"
                placeholderTextColor="#555"
                keyboardType="default"
                maxLength={2}
                onChangeText={value => setStateField('state', value)}
                onSubmitEditing={() => focusInput('zip')}
                value={state} />
              <TextInput
                ref={ref => setInputRef('zip', ref)}
                style={[ss.paddingTop4, ss.paddingBottom4, ss.oneQuarterWidth, ss.subBody, ss.darkBottomBorder]}
                underlineColorAndroid="transparent"
                placeholder="Zip"
                placeholderTextColor="#555"
                keyboardType="numeric"
                maxLength={5}
                onChangeText={value => setStateField('zip', value)}
                onSubmitEditing={() => focusInput('gender')}
                value={zip} />
            </View>
            <View style={[ss.addViewSpacing, ss.center, ss.row]}>
              <TextInput
                ref={ref => setInputRef('gender', ref)}
                style={[ss.paddingTop4, ss.paddingBottom4, ss.halfWidth, ss.subBody, ss.darkBottomBorder]}
                underlineColorAndroid="transparent"
                placeholder="Gender"
                placeholderTextColor="#555"
                keyboardType="default"
                onChangeText={value => setStateField('gender', value)}
                onSubmitEditing={() => focusInput('age')}
                value={gender} />
              <TextInput
                ref={ref => setInputRef('age', ref)}
                style={[ss.paddingTop4, ss.paddingBottom4, ss.halfWidth, ss.subBody, ss.darkBottomBorder]}
                underlineColorAndroid="transparent"
                placeholder="Age"
                placeholderTextColor="#555"
                keyboardType="numeric"
                maxLength={3}
                onChangeText={value => setStateField('age', value)}
                value={age} />
            </View>
            <View style={[ss.flex1, ss.center]}>
              <TouchableOpacity
                style={ss.padding10}
                onPress={registerMissionary}>
                {failed
                ? <Text style={[ss.subBody, ss.darkBlueText]}>REGISTRATION FAILED</Text>
                : <View>
                    {loading
                    ? <ActivityIndicator size="small" color="#0c2461" />
                    : <View style={ss.row}>
                        <Ionicons
                          name="ios-add-circle-outline"
                          size={18}
                          color="#1e3799" />
                        <Text style={[ss.subBody, ss.darkBlueText, ss.paddingLeft7]}>REGISTER</Text>
                      </View>
                    }
                  </View>
                }
              </TouchableOpacity>
            </View>
          </View>
          <View style={[ss.flex2, ss.center, ss.padding15]}>
            <Text style={[ss.subHeader, ss.centerText]}>As a matter of safety and security, we require users to be logged in before submitting prayers. We promise never to share your information with anyone.</Text>
          </View>
        </ScrollView>
      </View>
    </View>
  </SafeAreaView>
)

export default RegisterOraMissionaryPresenter
