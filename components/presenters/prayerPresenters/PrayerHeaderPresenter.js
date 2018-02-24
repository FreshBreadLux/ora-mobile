import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { setVisibleModal, setEditMode } from '../../../store'
import { Ionicons } from '@expo/vector-icons'
import ss from '../../StyleSheet'

const PrayerHeaderPresenter = ({ prayer, dispatchSetEditMode, showModal }) => (
  <View style={[ss.invisiContainer, ss.padding15]}>
    <View style={ss.invisiContainer}>
      <View style={[ss.row, ss.paddingBottom10, ss.spaceBetween, ss.bottomBorder]}>
        <View style={[ss.row, ss.center]}>
          <TouchableOpacity
            style={ss.paddingLeft7}
            onPress={() => showModal('delete')}>
            <Ionicons
              name="ios-trash-outline"
              size={20}
              color="#555" />
          </TouchableOpacity>
          {prayer.closed
          ? <TouchableOpacity
            style={ss.paddingLeft7}
              onPress={() => showModal('open')}>
              <Ionicons
                name="ios-eye-outline"
                size={20}
                color="#555" />
            </TouchableOpacity>
          : <TouchableOpacity
            style={ss.paddingLeft7}
              onPress={() => showModal('close')}>
              <Ionicons
                name="ios-eye-off-outline"
                size={20}
                color="#555" />
            </TouchableOpacity>
          }
          <TouchableOpacity
            style={ss.paddingLeft7}
            onPress={dispatchSetEditMode}>
            <Ionicons
              name="ios-create-outline"
              size={20}
              color="#555" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  </View>
)

const mapState = state => ({
  visibleModal: state.visibleModal
})

const mapDispatch = dispatch => ({
  showModal: (visibleModal) => dispatch(setVisibleModal(visibleModal)),
  dispatchSetEditMode: () => dispatch(setEditMode())
})

export default connect(mapState, mapDispatch)(PrayerHeaderPresenter)
