import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import ss from '../../StyleSheet'

const FollowScrollPresenter = ({ follows, navigation }) => (
  <View style={ss.invisiContainer}>
    <View style={ss.invisiContainer}>
    {follows && follows.length
    ? <View style={[ss.flex1, ss.center]}>
      {follows.map(follow => (
        <TouchableOpacity
          style={[ss.fullWidth, ss.padding15, ss.rowOpacity, ss.marginTop10]}
          key={follow.id}
          onPress={() => {
            navigation.navigate('Follow', { follow })
          }}>
          <Text
            numberOfLines={1}
            style={ss.subHeader}>{follow.subject}</Text>
          <Text
            numberOfLines={1}
            style={ss.body}>{follow.body}</Text>
        </TouchableOpacity>
      ))}
      </View>
    : <View style={[ss.flex1, ss.center]}>
        <TouchableOpacity
          style={[ss.button, ss.fullWidth]}
          onPress={() => navigation.navigate('Accept')}>
          <Text style={[ss.buttonText, ss.centerText]}>When you follow prayers, they will be listed here</Text>
        </TouchableOpacity>
      </View>
    }
    </View>
  </View>
)

const mapState = state => ({
  follows: state.follows
})

export default connect(mapState)(FollowScrollPresenter)
