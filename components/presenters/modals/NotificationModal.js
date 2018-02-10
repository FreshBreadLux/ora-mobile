import React from 'react'
import { View, Text } from 'react-native'
import Modal from 'react-native-modal'
import ss from '../../StyleSheet'

const NotificationModal = ({ notification, hideNotificationModal }) => (
  <Modal
    isVisible={!!notification}
    style={ss.topModal}
    animationIn="slideInDown"
    animationInTiming={500}
    animationOut="slideOutUp"
    animationOutTiming={500}
    backdropOpacity={0}
    onModalShow={() => setTimeout(hideNotificationModal, 3000)}
    onBackdropPress={hideNotificationModal}>
    <View style={[ss.center, ss.padding15]}>
      <View style={ss.modalContent}>
        <Text>
          {notification
          ? `${notification.data.body}`
          : null }
        </Text>
      </View>
    </View>
  </Modal>
)

export default NotificationModal
