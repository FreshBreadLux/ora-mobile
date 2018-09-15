import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { NoFollowsProfilePresenter } from '../../presenters'
import ss from '../../StyleSheet'

const FollowScrollPresenter = ({ follows, navigation }) => (
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
  : <NoFollowsProfilePresenter navigation={navigation} />
  }
  </View>
)

const mapState = state => ({
  follows: state.follows
})

export default connect(mapState)(FollowScrollPresenter)
