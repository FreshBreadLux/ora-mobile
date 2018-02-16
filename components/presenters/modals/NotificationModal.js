import React from 'react'
import { View, Text, Image } from 'react-native'
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
      <View style={ss.notificationModal}>
        <View style={[ss.row, ss.spaceBetween, ss.paddingBottom10]}>
          <View style={[ss.row, ss.center]}>
            <View style={ss.notificationIcon}>
              <Image
                style={ss.backgroundImage}
                source={require('../../../assets/images/icon.png')} />
            </View>
            <Text style={ss.paddingLeft7}>ORA</Text>
          </View>
          <Text style={ss.greyText}>now</Text>
        </View>
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
