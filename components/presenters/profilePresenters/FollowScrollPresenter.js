import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { NoFollowsProfilePresenter } from '../../presenters'
import ss from '../../StyleSheet'
import { Ionicons } from '@expo/vector-icons'

function formatISOString(date) {
  const newDate = new Date(date)
  const ISOString = newDate.toISOString()
  const month = ISOString.slice(8, 10)
  const day = ISOString.slice(5, 7)
  const year = ISOString.slice(2, 4)
  return `${day}/${month}/${year}`
}

const FollowScrollPresenter = ({ follows, navigation }) => {
  console.log('follows:', follows)
  return (
  <View style={ss.invisiContainer}>
  {follows && follows.length
  ? <View>
    {follows.map(follow => (
      <TouchableOpacity
        style={[ss.addViewSpacing, ss.bottomBorder]}
        key={follow.id}
        onPress={() => {
          navigation.navigate('Follow', { follow })
        }}>
        <View style={[ss.row, ss.flex1]}>
          <View style={[ss.center, {width: 30}]}>
          {follow.follow.unseenUpdates > 0
          ? <View style={ss.center}>
              <View style={{height: 12, width: 12, borderRadius: 6, backgroundColor: '#4577EE'}} />
            </View>
          : null
          }
          </View>
          <View style={[ss.flex1, {height: 65, justifyContent: 'center'}]}>
            <View style={[ss.row, ss.spaceBetween]}>
              <View style={ss.flex1}>
                <Text numberOfLines={1} style={{fontFamily: 'ralewayBold', fontSize: 15}}>{follow.subject}</Text>
              </View>
              <View style={[ss.row, ss.center, {paddingRight: 10}]}>
                <Text style={{fontSize: 12, color: '#555', paddingRight: 10}}>{formatISOString(follow.follow.createdAt)}</Text>
                <Ionicons
                  name="ios-arrow-forward"
                  size={16}
                  style={{color: '#555'}} />
              </View>
            </View>
            <Text numberOfLines={2} style={[ss.subBody, ss.greyText]}>{follow.body}</Text>
          </View>
        </View>
      </TouchableOpacity>
    ))}
    </View>
  : <NoFollowsProfilePresenter navigation={navigation} />
  }
  </View>
)}

const mapState = state => ({
  follows: state.follows
})

export default connect(mapState)(FollowScrollPresenter)
