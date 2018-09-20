import React from 'react'
import { connect } from 'react-redux'
import { ScrollView, View, TouchableOpacity, Image, AsyncStorage, Dimensions } from 'react-native'
import { updateUserTheme } from '../../../store'
import ss from '../../StyleSheet'

const ThemesPresenter = ({ theme, id, dispatchUpdateUserTheme }) => {
  const { width } = Dimensions.get('window')
  const imageWidth = width / 2
  const height = imageWidth * 2
  return (
    <View style={ss.whiteContainer}>
      <ScrollView>
        <View style={[ss.row, ss.spaceAround]}>
          <TouchableOpacity
            style={{width: imageWidth, height}}
            onPress={() => {
              AsyncStorage.setItem('oraTheme_v1.1.0', 'Rome')
              dispatchUpdateUserTheme(id, 'Rome')
            }}>
            <Image
              source={require('../../../assets/images/Rome/Accept.jpg')}
              style={theme === 'Rome'
                ? {flex: 1, width: undefined, height: undefined, resizeMode: 'cover', opacity: 1}
                : {flex: 1, width: undefined, height: undefined, resizeMode: 'cover', opacity: 0.3}} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{width: imageWidth, height}}
            onPress={() => {
              AsyncStorage.setItem('oraTheme_v1.1.0', 'Mountains')
              dispatchUpdateUserTheme(id, 'Mountains')
            }}>
            <Image
              source={require('../../../assets/images/Mountains/Accept.jpg')}
              style={theme === 'Mountains'
                ? {flex: 1, width: undefined, height: undefined, resizeMode: 'cover', opacity: 1}
                : {flex: 1, width: undefined, height: undefined, resizeMode: 'cover', opacity: 0.3}} />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  )
}

const mapState = state => ({
  theme: state.userInfo.theme,
  id: state.userInfo.id,
})

const mapDispatch = dispatch => ({
  dispatchUpdateUserTheme: (userId, theme) => dispatch(updateUserTheme(userId, theme)),
})

export default connect(mapState, mapDispatch)(ThemesPresenter)
