import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { setVisibleModal, setEditMode } from '../../../store'
import { Ionicons } from '@expo/vector-icons'
import ss from '../../StyleSheet'

const PrayerHeaderPresenter = ({ prayer, editMode, dispatchSetEditMode, showModal }) => {
  console.log('Ionicons: ', Ionicons)
  return (
  <View style={[ss.invisiContainer, ss.padding15, ss.boxBorder]}>
    {editMode.makingEdit
    ? null
    : <View style={[ss.invisiContainer, ss.row, ss.paddingBottom10, ss.spaceBetween, ss.boxBorder]}>
        <View style={[ss.invisiContainer, ss.row, ss.center]}>
          <TouchableOpacity
            style={ss.paddingSides10}
            onPress={() => showModal('delete')}>
            <Ionicons
              name="ios-trash-outline"
              size={22}
              color="#555" />
          </TouchableOpacity>
          {prayer.closed
          ? <TouchableOpacity
            style={ss.paddingSides10}
              onPress={() => showModal('open')}>
              <Ionicons
                name="ios-eye-outline"
                size={22}
                color="#555" />
            </TouchableOpacity>
          : <TouchableOpacity
            style={ss.paddingSides10}
              onPress={() => showModal('close')}>
              <Ionicons
                name="ios-eye-off-outline"
                size={22}
                color="#555" />
            </TouchableOpacity>
          }
          <TouchableOpacity
            style={ss.paddingSides10}
            onPress={dispatchSetEditMode}>
            <Ionicons
              name="ios-create-outline"
              size={22}
              color="#555" />
          </TouchableOpacity>
        </View>
      </View>
    }
  </View>
)}

const mapState = state => ({
  editMode: state.editMode
})

const mapDispatch = dispatch => ({
  showModal: visibleModal => dispatch(setVisibleModal(visibleModal)),
  dispatchSetEditMode: () => dispatch(setEditMode())
})

export default connect(mapState, mapDispatch)(PrayerHeaderPresenter)
