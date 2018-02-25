import React from 'react'
import { ScrollView, View, Text, TouchableOpacity, SafeAreaView } from 'react-native'
import { connect } from 'react-redux'
import { BackgroundImageContainer } from '../'
import ss from '../../StyleSheet'
import { LinearGradient } from 'expo'

const FollowScrollPresenter = ({ follows, navigation }) => (
  <View style={ss.invisiContainer}>
    <BackgroundImageContainer componentName="Follows" />
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
            <Text style={[ss.header]}>FOLLOWS</Text>
          </View>
          {follows && follows.length
          ? <View style={[ss.flex1, ss.center]}>
              <ScrollView
                style={ss.fullWidth}
                showsVerticalScrollIndicator={false}>
              { follows.map(follow => (
                <TouchableOpacity
                  style={[ss.fullWidth, ss.padding15, ss.rowOpacity, ss.marginTop]}
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
              </ScrollView>
            </View>
          : <View style={[ss.flex1, ss.center]}>
              <TouchableOpacity
                style={[ss.button, ss.fullWidth]}
                onPress={() => navigation.navigate('Accept')}>
                <Text style={[ss.buttonText, ss.centerText]}>when you follow prayers, they will be listed here</Text>
              </TouchableOpacity>
            </View>
          }
          </View>
      </View>
    </SafeAreaView>
  </View>
)

const mapState = state => ({
  follows: state.follows
})

export default connect(mapState)(FollowScrollPresenter)
