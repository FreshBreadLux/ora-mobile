import React from 'react'
import { View, ScrollView, Text, TouchableOpacity } from 'react-native'
import Modal from 'react-native-modal'
import ss from '../StyleSheet'
import { OpenModalContent, CloseModalContent } from './Modals'

const SinglePrayer = ({ prayer, toggleEdit, togglePrayer, setModal, visibleModal }) => (
  <View style={[ss.invisiContainer, ss.padding15]}>
    <ScrollView showsVerticalScrollIndicator={false}>
      <Text style={[ss.body, ss.paddingBottom10]}>{`${prayer.body}`}</Text>
    </ScrollView>
    <View style={[ss.row, ss.spaceBetween, ss.viewTopBorder]}>
      <Text style={ss.body}>{`Total Views: ${prayer.totalViews}`}</Text>
      <Text style={ss.body}>{`Total Follows: ${prayer.totalFollows}`}</Text>
    </View>
    <View style={[ss.row, ss.spaceBetween]}>
      {prayer.closed
      ? <TouchableOpacity
          onPress={() => setModal('open')}
          style={ss.cancelButton}>
          <Text style={ss.buttonText}>open prayer</Text>
        </TouchableOpacity>
      : <TouchableOpacity
          onPress={() => setModal('close')}
          style={ss.cancelButton}>
          <Text style={ss.buttonText}>close prayer</Text>
        </TouchableOpacity>
      }
      <TouchableOpacity
        onPress={toggleEdit}
        style={ss.editButton}>
        <Text style={[ss.buttonText, ss.whiteText]}>edit</Text>
      </TouchableOpacity>
    </View>
    <Modal
      isVisible={visibleModal === 'open'}
      style={ss.bottomModal}
    >
      <OpenModalContent
        setModal={setModal}
        togglePrayer={togglePrayer}
      />
    </Modal>
    <Modal
      isVisible={visibleModal === 'close'}
      style={ss.bottomModal}
    >
      <CloseModalContent
        setModal={setModal}
        togglePrayer={togglePrayer}
      />
    </Modal>
  </View>
)

export default SinglePrayer
