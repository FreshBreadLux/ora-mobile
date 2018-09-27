import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { fetchUserPrayers } from '../../../store'
import { Ionicons } from '@expo/vector-icons'
import ss from '../../StyleSheet'
import { NoPrayersProfilePresenter } from '../../presenters'

function formatISOString(date) {
  const newDate = new Date(date)
  const ISOString = newDate.toISOString()
  const month = ISOString.slice(8, 10)
  const day = ISOString.slice(5, 7)
  const year = ISOString.slice(2, 4)
  return `${day}/${month}/${year}`
}

const PrayerScrollPresenter = ({ userId, prayers, refreshUserPrayers, navigation }) => (
  <View style={ss.invisiContainer}>
  {prayers && prayers.length
  ? <View>
      {prayers.map(prayer => (
        <TouchableOpacity
          style={[ss.addViewSpacing, ss.bottomBorder]}
          key={prayer.id}
          onPress={() => {
            refreshUserPrayers(userId)
            navigation.navigate('Prayer', { prayer })
          }}>
          <View style={[ss.row, ss.flex1]}>
            <View style={[ss.center, {width: 30}]}>
            {prayer.totalFollows > 0
            ? <View style={ss.center}>
                <Ionicons
                  name="md-heart"
                  size={16}
                  style={{color: '#FF4081'}} />
                <Text style={[ss.subBody, {color: '#FF4081'}]}>{prayer.totalFollows}</Text>
              </View>
            : null
            }
            </View>
            <View style={[ss.flex1, {height: 65, justifyContent: 'center'}]}>
              <View style={[ss.row, ss.spaceBetween]}>
                <View style={ss.flex1}>
                  <Text numberOfLines={1} style={{fontFamily: 'ralewayBold', fontSize: 15}}>{prayer.subject}</Text>
                </View>
                <View style={[ss.row, ss.center, {paddingRight: 10}]}>
                  <Text style={{fontSize: 12, color: '#555', paddingRight: 10}}>{formatISOString(prayer.createdAt)}</Text>
                  <Ionicons
                    name="ios-arrow-forward"
                    size={16}
                    style={{color: '#555'}} />
                  </View>
              </View>
              <Text numberOfLines={2} style={[ss.subBody, ss.greyText, {paddingRight: 10}]}>{prayer.body}</Text>
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  : <NoPrayersProfilePresenter navigation={navigation} />
  }
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
