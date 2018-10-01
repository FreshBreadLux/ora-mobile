import React from 'react'
import { View, Text, TextInput, Image } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import ss from '../../StyleSheet'

/*
  TODO: This is a placeholder presentational standin; I need to make it functional
*/
const SearchCommunityGroupsPresenter = () => (
  <View style={ss.whiteContainer}>
    <View style={[ss.row, ss.bottomBorder, {padding: 7, backgroundColor: '#eee'}]}>
      <View style={[ss.flex1, ss.row, ss.center, {height: 36, paddingLeft: 10, paddingRight: 10, borderRadius: 18, backgroundColor: '#fff'}]}>
        <Ionicons
          name="md-search"
          size={20}
          style={{color: '#999', paddingTop: 4}} />
        <TextInput
          style={[ss.subBody, {flex: 1, padding: 5, paddingLeft: 10}]}
          underlineColorAndroid="transparent"
          placeholder="Enter the name of a group"
          placeholderTextColor="#999"
          selectionColor="rgb(69, 119, 238)"
          keyboardType="default" />
      </View>
    </View>
    <View style={[ss.row, ss.whiteBackground, ss.addViewSpacing, ss.bottomBorder]}>
      <View style={[ss.center, {width: 30}]} />
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
  </View>
)

export default SearchCommunityGroupsPresenter
