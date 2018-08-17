import React from 'react'
import { connect } from 'react-redux'
import { Text, View, SafeAreaView, TouchableOpacity, Image, ActivityIndicator } from 'react-native'
import Modal from 'react-native-modal'
import { ArtistModal } from '../modals'
import { Feather, Ionicons, MaterialIcons } from '@expo/vector-icons'
import ss from '../../StyleSheet'

const SavedRewardSinglePresenter = ({ navigation, visibleModal, showModal, hideModal }) => {
  const imageUrl = navigation.getParam('imageUrl')
  const fullText = navigation.getParam('fullText')
  const iconColor = navigation.getParam('iconColor')
  const fullSource = navigation.getParam('fullSource')
  return (
    <View style={ss.invisiContainer}>
      {imageUrl
      ? <View style={ss.invisiContainer}>
          <View style={ss.backgroundImageFrame}>
            <Image
              style={{ flex: 1, height: undefined, width: undefined, resizeMode: 'cover' }}
              source={{ uri: imageUrl }} />
          </View>
          <SafeAreaView style={ss.invisiContainer}>
            <TouchableOpacity
              style={ss.padding10}
              onPress={() => navigation.goBack()}>
              <Feather
                name="x-circle"
                size={20}
                color={iconColor} />
            </TouchableOpacity>
            <View style={ss.flex1} />
            <View style={[ss.row, ss.spaceAround, ss.fullWidth, ss.padding10]}>
              <TouchableOpacity onPress={() => showModal('artist')}>
                <MaterialIcons
                  name="account-circle"
                  size={20}
                  color={iconColor} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('RewardFullText', { fullText, fullSource })}>
                <Text style={[ss.subBody, {color: iconColor}]}>READ MORE</Text>
              </TouchableOpacity>
              <Ionicons
                name="md-checkbox"
                size={20}
                color={iconColor} />
            </View>
          </SafeAreaView>
        </View>
      : <SafeAreaView style={ss.invisiContainer}>
          <TouchableOpacity
            style={ss.padding10}
            onPress={() => navigation.goBack()}>
            <Feather
              name="x-circle"
              size={20}
              color={iconColor} />
          </TouchableOpacity>
          <View style={[ss.invisiContainer, ss.center]}>
            <ActivityIndicator size="large" color="#777" />
          </View>
        </SafeAreaView>
      }
      <Modal
        isVisible={visibleModal === 'artist'}
        style={ss.centerModal}>
        <ArtistModal
          hideModal={hideModal} />
      </Modal>
    </View>
  )
}

const mapState = state => ({
  visibleModal: state.visibleModal
})

const mapDispatch = dispatch => ({
  showModal: visibleModal => dispatch(setVisibleModal(visibleModal)),
  hideModal: () => dispatch(removeVisibleModal())
})

export default connect(mapState, mapDispatch)(SavedRewardSinglePresenter)
