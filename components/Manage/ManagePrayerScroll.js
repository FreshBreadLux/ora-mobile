import React from 'react'
import { ScrollView, View, Text, TouchableOpacity, SafeAreaView, Image } from 'react-native'
import { LinearGradient } from 'expo'
import { connect } from 'react-redux'
import { fetchUserPrayers } from '../../store'
import ss from '../StyleSheet'

const ManagePrayerScroll = ({ prayers, refreshUserPrayers, screenProps, navigation }) => (
  <View style={ss.invisiContainer}>
    <View style={ss.backgroundImageFrame}>
      <Image
        source={require('../../assets/images/Rome-Prayers.jpg')}
        style={ss.backgroundImage}
      />
    </View>
    {!screenProps.userId
    ? <SafeAreaView style={ss.invisiContainer}>
        <View style={[ss.invisiContainer, ss.padding15]}>
          <View style={[ss.flex1, ss.center]}>
            <TouchableOpacity
            style={[ss.button, ss.fullWidth]}
            onPress={() => navigation.navigate('Submit')}>
              <Text style={[ss.buttonText, ss.centerText]}>please login to manage your prayers</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    : <SafeAreaView style={ss.invisiContainer}>
        <View style={ss.backgroundImageFrame}>
          <LinearGradient
            colors={['#fff', 'transparent']}
            start={[0.5, 0]}
            end={[0.5, 0.5]}
            style={ss.flex1} />
        </View>
        <View style={[ss.invisiContainer, ss.padding15]}>
          <View style={ss.invisiContainer}>
            <View style={[ss.center, ss.titleBottomBorderWhite]}>
              <Text style={[ss.header]}>PRAYERS</Text>
            </View>
            {prayers && prayers.length
            ? <View style={[ss.flex1, ss.center]}>
                <ScrollView
                  showsVerticalScrollIndicator={false}>
                { prayers.map(prayer => (
                  <TouchableOpacity
                    style={[ss.fullWidth, ss.padding15, ss.rowOpacity, ss.marginTop]}
                    key={prayer.id}
                    onPress={() => {
                      refreshUserPrayers(screenProps.userId)
                      navigation.navigate('MyPrayer', { prayer })
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
                  <Text style={[ss.buttonText, ss.centerText]}>when you submit prayers, they will be listed here</Text>
                </TouchableOpacity>
              </View>
            }
            </View>
        </View>
      </SafeAreaView>
    }
  </View>
)

const mapState = state => ({
  prayers: state.prayers,
})

const mapDispatch = dispatch => ({
  refreshUserPrayers(userId) {
    dispatch(fetchUserPrayers(userId))
  }
})

export default connect(mapState, mapDispatch)(ManagePrayerScroll)
