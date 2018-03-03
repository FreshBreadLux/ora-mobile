import React from 'react'
import { ScrollView, View, Text, TouchableOpacity, SafeAreaView } from 'react-native'
import { LinearGradient } from 'expo'
import { connect } from 'react-redux'
import { BackgroundImageContainer } from '../'
import { fetchUserPrayers } from '../../../store'
import ss from '../../StyleSheet'

const PrayerScrollPresenter = ({ userId, prayers, refreshUserPrayers, navigation }) => (
  <View style={ss.invisiContainer}>
    <BackgroundImageContainer componentName="Prayers" />
    <SafeAreaView style={ss.invisiContainer}>
      <View style={ss.backgroundImageFrame}>
        <LinearGradient
          colors={['#fff', 'transparent']}
          start={[0.5, 0]}
          end={[0.5, 0.5]}
          style={ss.flex1} />
      </View>
      <View style={[ss.invisiContainer, ss.scrollViewPadding]}>
        <View style={ss.invisiContainer}>
          <View style={[ss.center, ss.titleBottomBorderWhite]}>
            <Text style={[ss.header]}>PRAYERS</Text>
          </View>
          {prayers && prayers.length
          ? <View style={[ss.flex1, ss.center]}>
              <ScrollView
                style={ss.fullWidth}
                showsVerticalScrollIndicator={false}>
              { prayers.map(prayer => (
                <TouchableOpacity
                  style={[ss.fullWidth, ss.padding15, ss.rowOpacity, ss.marginTop]}
                  key={prayer.id}
                  onPress={() => {
                    refreshUserPrayers(userId)
                    navigation.navigate('Prayer', { prayer })
                  }}>
                  <Text
                    numberOfLines={1}
                    style={ss.subHeader}>{prayer.subject}</Text>
                  <Text
                    numberOfLines={1}
                    style={ss.body}>
                    {prayer.body}</Text>
                </TouchableOpacity>
                ))}
              </ScrollView>
            </View>
          : <View style={[ss.flex1, ss.center]}>
              <TouchableOpacity
                style={[ss.button, ss.fullWidth]}
                onPress={() => navigation.navigate('Submit')}>
                <Text style={[ss.buttonText, ss.centerText]}>When you submit prayers, they will be listed here</Text>
              </TouchableOpacity>
            </View>
          }
          </View>
      </View>
    </SafeAreaView>
  </View>
)

const mapState = state => ({
  prayers: state.prayers,
  isLoggedIn: state.auth.isLoggedIn,
  userId: state.auth.userId,
})

const mapDispatch = dispatch => ({
  refreshUserPrayers: userId => dispatch(fetchUserPrayers(userId))
})

export default connect(mapState, mapDispatch)(PrayerScrollPresenter)
