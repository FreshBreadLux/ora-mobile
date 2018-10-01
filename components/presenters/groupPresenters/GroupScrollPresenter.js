import React from 'react'
import { ScrollView, View, Text, TouchableOpacity, Image } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import ss from '../../StyleSheet'

/*
  TODO: This is a placeholder presentational standin; I need to make it functional
*/
const GroupScrollPresenter = ({ navigation }) => (
  <View style={ss.flex1}>
    <TouchableOpacity onPress={() => navigation.navigate('GroupContainer')}>
      <View style={[ss.row, ss.whiteBackground, ss.addViewSpacing, ss.bottomBorder]}>
        <View style={[ss.center, {width: 30}]}>
          <View style={ss.center}>
            <View style={{height: 12, width: 12, borderRadius: 6, backgroundColor: '#4577EE'}} />
          </View>
        </View>
        <View style={[ss.center, {width: 60}]}>
          <View style={ss.center}>
            <Image
              style={{height: 50, width: 50, borderRadius: 25, resizeMode: 'cover'}}
              source={require('../../../assets/images/nyu-logo.jpg')} />
          </View>
        </View>
        <View style={[ss.flex1, {height: 65, justifyContent: 'center'}]}>
          <View style={[ss.row, ss.spaceBetween]}>
            <View style={ss.flex1}>
              <Text numberOfLines={1} style={{fontFamily: 'ralewayBold', fontSize: 15}}>
                The Catholic Center at NYU
              </Text>
            </View>
            <View style={[ss.row, ss.center, {paddingRight: 10}]}>
              <Text style={{fontSize: 12, color: '#555', paddingRight: 10}}>9/27/18</Text>
              <Ionicons
                name="ios-arrow-forward"
                size={16}
                style={{color: '#555'}} />
            </View>
          </View>
          <Text numberOfLines={2} style={[ss.greyText, {paddingRight: 10}]}>
            Consecutive days{'\n'}a member has prayed: 87 🔥
          </Text>
        </View>
      </View>
    </TouchableOpacity>
    <View style={[ss.row, ss.whiteBackground, ss.addViewSpacing, ss.bottomBorder]}>
      <View style={[ss.center, {width: 30}]}>
        <View style={ss.center}>
          <View style={{height: 12, width: 12, borderRadius: 6, backgroundColor: '#4577EE'}} />
        </View>
      </View>
      <View style={[ss.center, {width: 60}]}>
        <View style={ss.center}>
          <Image
            style={{height: 50, width: 50, borderRadius: 25, resizeMode: 'cover'}}
            source={require('../../../assets/images/Mountains/Submit.jpg')} />
        </View>
      </View>
      <View style={[ss.flex1, {height: 65, justifyContent: 'center'}]}>
        <View style={[ss.row, ss.spaceBetween]}>
          <View style={ss.flex1}>
            <Text numberOfLines={1} style={{fontFamily: 'ralewayBold', fontSize: 15}}>
              Mexico Mission Trip
            </Text>
          </View>
          <View style={[ss.row, ss.center, {paddingRight: 10}]}>
            <Text style={{fontSize: 12, color: '#555', paddingRight: 10}}>9/27/18</Text>
            <Ionicons
              name="ios-arrow-forward"
              size={16}
              style={{color: '#555'}} />
          </View>
        </View>
        <Text numberOfLines={2} style={[ss.greyText, {paddingRight: 10}]}>
          Consecutive days{'\n'}a member has prayed: 0
        </Text>
      </View>
    </View>
    <View style={[ss.row, ss.whiteBackground, ss.addViewSpacing, ss.bottomBorder]}>
      <View style={[ss.center, {width: 30}]} />
      <View style={[ss.center, {width: 60}]}>
        <View style={ss.center}>
          <Image
            style={{height: 50, width: 50, borderRadius: 25, resizeMode: 'cover'}}
            source={require('../../../assets/images/Mountains/Follows.jpg')} />
        </View>
      </View>
      <View style={[ss.flex1, {height: 65, justifyContent: 'center'}]}>
        <View style={[ss.row, ss.spaceBetween]}>
          <View style={ss.flex1}>
            <Text numberOfLines={1} style={{fontFamily: 'ralewayBold', fontSize: 15}}>
              The Lux Family
            </Text>
          </View>
          <View style={[ss.row, ss.center, {paddingRight: 10}]}>
            <Text style={{fontSize: 12, color: '#555', paddingRight: 10}}>9/27/18</Text>
            <Ionicons
              name="ios-arrow-forward"
              size={16}
              style={{color: '#555'}} />
          </View>
        </View>
        <Text numberOfLines={2} style={[ss.greyText, {paddingRight: 10}]}>
          Consecutive days{'\n'}a member has prayed: 5 🔥
        </Text>
      </View>
    </View>
    <View style={[ss.row, ss.whiteBackground, ss.addViewSpacing, ss.bottomBorder]}>
      <View style={[ss.center, {width: 30}]} />
      <View style={[ss.center, {width: 60}]}>
        <View style={ss.center}>
          <Image
            style={{height: 50, width: 50, borderRadius: 25, resizeMode: 'cover'}}
            source={require('../../../assets/images/Mountains/Profile.jpg')} />
        </View>
      </View>
      <View style={[ss.flex1, {height: 65, justifyContent: 'center'}]}>
        <View style={[ss.row, ss.spaceBetween]}>
          <View style={ss.flex1}>
            <Text numberOfLines={1} style={{fontFamily: 'ralewayBold', fontSize: 15}}>
              Thursday Bible Study
            </Text>
          </View>
          <View style={[ss.row, ss.center, {paddingRight: 10}]}>
            <Text style={{fontSize: 12, color: '#555', paddingRight: 10}}>9/27/18</Text>
            <Ionicons
              name="ios-arrow-forward"
              size={16}
              style={{color: '#555'}} />
          </View>
        </View>
        <Text numberOfLines={2} style={[ss.greyText, {paddingRight: 10}]}>
          Consecutive days{'\n'}a member has prayed: 23 🔥
        </Text>
      </View>
    </View>
  </View>
)

export default GroupScrollPresenter
