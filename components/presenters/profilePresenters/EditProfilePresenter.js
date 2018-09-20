import React from 'react'
import { connect } from 'react-redux'
import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native'
import { setFirstName, setLastName, setEmail, setPhoneNumber, setAge, setGender, setZip } from '../../../store'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import ss from '../../StyleSheet'

function setProfileImage(userInfo) {
  const style = {height: 100, width: 100, borderRadius: 50, resizeMode: 'cover'}
  if (userInfo.imageUrl) {
    return <Image style={style} source={{ uri: userInfo.imageUrl }} />
  } else {
    return <Image style={style} source={require('../../../assets/images/default-profile-image.png')} />
  }
}

const EditProfilePresenter = ({ userInfo, editProfileInformation, askCameraRollPermission, dispatchSetFirstName, dispatchSetLastName, dispatchSetEmail, dispatchSetPhoneNumber, dispatchSetAge, dispatchSetGender, dispatchSetZip }) => {
  const profileImage = setProfileImage(userInfo)
  return (
    <KeyboardAwareScrollView>
      <View style={[ss.fullWidth, ss.bottomBorder]}>
        <Text style={[ss.padding10, ss.subBody, ss.greyText]}>None of your profile information is visible when you submit anonymous prayers. Group Information is visible to people in your groups. Private Information is not visible to anyone.</Text>
      </View>
      <View style={[ss.fullWidth, ss.bottomBorder, {backgroundColor: '#fafafa'}]}>
        <Text style={[ss.padding10, {fontFamily: 'ralewayBold', fontSize: 18}]}>Group Information</Text>
      </View>
      <View style={[ss.fullWidth, ss.center, ss.whiteBackground, ss.addMedViewSpacing, ss.bottomBorder]}>
        <TouchableOpacity style={ss.center} onPress={askCameraRollPermission}>
          {profileImage}
          <Text style={[ss.tagLine, ss.blueText, {marginTop: 10}]}>Change Profile Photo</Text>
        </TouchableOpacity>
      </View>
      <View style={[ss.row, ss.spaceBetween, ss.fullWidth, ss.whiteBackground, ss.bottomBorder, ss.padding10]}>
        <Text style={ss.tagLine}>First Name</Text>
        <TextInput
          style={[ss.flex1, ss.rightText, ss.tagLine]}
          underlineColorAndroid="transparent"
          placeholder="Thomas"
          onChangeText={dispatchSetFirstName}
          value={userInfo.firstName} />
      </View>
      <View style={[ss.row, ss.spaceBetween, ss.fullWidth, ss.whiteBackground, ss.bottomBorder, ss.padding10]}>
        <Text style={ss.tagLine}>Last Name</Text>
        <TextInput
          style={[ss.flex1, ss.rightText, ss.tagLine]}
          underlineColorAndroid="transparent"
          placeholder="Aquinas"
          onChangeText={dispatchSetLastName}
          value={userInfo.lastName} />
      </View>
      <View style={[ss.fullWidth, ss.bottomBorder, {backgroundColor: '#fafafa'}]}>
        <Text style={[ss.padding10, {fontFamily: 'ralewayBold', fontSize: 18}]}>Private Information</Text>
      </View>
      <View style={[ss.row, ss.spaceBetween, ss.fullWidth, ss.whiteBackground, ss.bottomBorder, ss.padding10]}>
        <Text style={ss.tagLine}>Email</Text>
        <TextInput
          style={[ss.flex1, ss.rightText, ss.tagLine]}
          underlineColorAndroid="transparent"
          placeholder="summa@theologica.com"
          onChangeText={dispatchSetEmail}
          value={userInfo.email} />
      </View>
      <View style={[ss.row, ss.spaceBetween, ss.fullWidth, ss.whiteBackground, ss.bottomBorder, ss.padding10]}>
        <Text style={ss.tagLine}>Phone</Text>
        <TextInput
          style={[ss.flex1, ss.rightText, ss.tagLine]}
          underlineColorAndroid="transparent"
          placeholder="+15555555"
          onChangeText={dispatchSetPhoneNumber}
          value={userInfo.phoneNumber} />
      </View>
      <View style={[ss.row, ss.spaceBetween, ss.fullWidth, ss.whiteBackground, ss.bottomBorder, ss.padding10]}>
        <Text style={ss.tagLine}>Age</Text>
        <TextInput
          style={[ss.flex1, ss.rightText, ss.tagLine]}
          underlineColorAndroid="transparent"
          placeholder="100"
          onChangeText={dispatchSetAge}
          value={userInfo.age && userInfo.age.toString()} />
      </View>
      <View style={[ss.row, ss.spaceBetween, ss.fullWidth, ss.whiteBackground, ss.bottomBorder]}>
        <Text style={[ss.tagLine, ss.padding10]}>Gender</Text>
        <View style={ss.row}>
          {editProfileInformation.gender === 'Male'
          ? <TouchableOpacity
              onPress={() => dispatchSetGender(null)}
              style={[ss.padding10, {backgroundColor: 'rgb(69, 119, 238)'}]}>
              <Text style={[ss.tagLine, ss.whiteText]}>Male</Text>
            </TouchableOpacity>
          : <TouchableOpacity
              onPress={() => dispatchSetGender('Male')}
              style={ss.padding10}>
              <Text style={[ss.tagLine, {color: '#ccc'}]}>Male</Text>
            </TouchableOpacity>
          }
          {editProfileInformation.gender === 'Female'
          ? <TouchableOpacity
              onPress={() => dispatchSetGender(null)}
              style={[ss.padding10, {backgroundColor: 'rgb(69, 119, 238)'}]}>
              <Text style={[ss.tagLine, ss.whiteText]}>Female</Text>
            </TouchableOpacity>
          : <TouchableOpacity
              onPress={() => dispatchSetGender('Female')}
              style={ss.padding10}>
              <Text style={[ss.tagLine, {color: '#ccc'}]}>Female</Text>
            </TouchableOpacity>
          }
        </View>
      </View>
      <View style={[ss.row, ss.spaceBetween, ss.fullWidth, ss.whiteBackground, ss.bottomBorder, ss.padding10]}>
        <Text style={ss.tagLine}>Zip Code</Text>
        <TextInput
          style={[ss.flex1, ss.rightText, ss.tagLine]}
          underlineColorAndroid="transparent"
          placeholder="55555"
          onChangeText={dispatchSetZip}
          value={userInfo.zip} />
      </View>
    </KeyboardAwareScrollView>
  )
}

const mapState = state => ({
  userInfo: state.userInfo,
  editProfileInformation: state.editProfileInformation,
})

const mapDispatch = dispatch => ({
  dispatchSetFirstName: firstName => dispatch(setFirstName(firstName)),
  dispatchSetLastName: lastName => dispatch(setLastName(lastName)),
  dispatchSetEmail: email => dispatch(setEmail(email)),
  dispatchSetPhoneNumber: phoneNumber => dispatch(setPhoneNumber(phoneNumber)),
  dispatchSetAge: age => dispatch(setAge(age)),
  dispatchSetGender: gender => dispatch(setGender(gender)),
  dispatchSetZip: zip => dispatch(setZip(zip)),
})

export default connect(mapState, mapDispatch)(EditProfilePresenter)
